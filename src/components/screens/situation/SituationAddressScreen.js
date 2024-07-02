import { Text, View, TouchableOpacity, Image, TextInput } from 'react-native';
import styles from '../../../styles/SituationAddressScreenStyle';
import Navbar from '../../ux/Navbar';
import { FontAwesome, MaterialIcons  } from '@expo/vector-icons';
import MapView, { Marker } from 'react-native-maps';
import { useNavigation, useRoute } from '@react-navigation/native';
import { useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useTheme } from '../../../themes/ThemeProvider';
import blueDarkMap from '../../../json/blueDarkMap';
import axios from 'axios';
import LangStore from '../../../store/LangStore';
import * as Location from 'expo-location';
import { StatusBar } from 'expo-status-bar';

function SituationAddressScreen() {
    const navigation = useNavigation();
    const {t} = useTranslation();
    const { colors, dark } = useTheme();
    const route = useRoute();
    const { category, type } = route.params;
    const [data, setData] = useState({
        address: "",
        longitude: null,
        latitude: null,
        category: category,
        type: type
    });
    const [placeholders, setPlaceholder] = useState([]);
    const [isPlaceholder, setIsPlaceholder] = useState(false);
    const [language, setLanguage] = useState();
    const mapRef = useRef(null);

    useEffect(() => {
        fetchLanguage();
    }, []);

    const fetchLanguage = async () => {
        const lang = LangStore.getLanguage();
        if (lang) {
            setLanguage(lang)
        }
    }
    
    const fetchAddressSuggestions = async (inputText) => {
        try {
            const lang = language === 'kz' ? 'kk' : 'ru'
            const apiKey = 'AIzaSyAoeJsYR20gUXEXBtXDM49xoNYByvFAbZg';
            const autocompleteUrl = `https://maps.googleapis.com/maps/api/place/autocomplete/json?input=${inputText}&key=${apiKey}&language=${lang}`;
            
            const autocompleteResponse = await axios.get(autocompleteUrl);
            
            if (autocompleteResponse.data.predictions) {
                const predictions = autocompleteResponse.data.predictions;
                const suggestions = [];
    
                // Перебираем предложенные адреса
                for (const prediction of predictions) {
                    const placeId = prediction.place_id;
                    const placeDetailsUrl = `https://maps.googleapis.com/maps/api/geocode/json?place_id=${placeId}&key=${apiKey}`;
                    
                    // Делаем запрос на получение географических данных по place_id
                    const placeDetailsResponse = await axios.get(placeDetailsUrl);
    
                    // Парсим ответ и извлекаем широту и долготу
                    const geometry = placeDetailsResponse.data.results[0].geometry;
                    const location = geometry.location;
                    const latitude = location.lat;
                    const longitude = location.lng;
    
                    // Добавляем адрес и его географические координаты в список предложений
                    suggestions.push({
                        address: prediction.description,
                        latitude: latitude,
                        longitude: longitude
                    });
                }
    
                return suggestions;
            }
            
            return [];
        } catch (error) {
            console.log('Error fetching address suggestions:', error);
            return [];
        }
    };

    const handleChangeInput = (name, value) => {
        setData(prevData => ({
            ...prevData,
            [name]: value
        }))
    };

    const handleChangeAddress = async (text) => {
        handleChangeInput("address", text);
        setIsPlaceholder(true)
        const suggestions = await fetchAddressSuggestions(text);
        setPlaceholder(suggestions);
    };

    const selectAddress = (address, long, lat) => {
        handleChangeInput("address", address);
        handleChangeInput("longitude", long);
        handleChangeInput("latitude", lat);
        mapRef.current.animateToRegion({
            latitude: parseFloat(lat),
            longitude: parseFloat(long),
            latitudeDelta: 0.01,
            longitudeDelta: 0.01,
        }, 1000); // Анимация длительностью 1 секунда
        setIsPlaceholder(false)
    }

    const fetchAddress = async () => {
        try {
            let { status } = await Location.requestForegroundPermissionsAsync();
            if (status !== 'granted') {
                return;
            }
    
            let location = await Location.getCurrentPositionAsync({});
            let addressResponse = await Location.reverseGeocodeAsync({
                latitude: location.coords.latitude,
                longitude: location.coords.longitude,
            });
    
            handleChangeInput("address", addressResponse[0].formattedAddress);
            handleChangeInput("latitude", location.coords.latitude);
            handleChangeInput("longitude", location.coords.longitude);
            mapRef.current.animateToRegion({
                latitude: parseFloat(location.coords.latitude),
                longitude: parseFloat(location.coords.longitude),
                latitudeDelta: 0.01,
                longitudeDelta: 0.01,
            }, 1000);

        } catch (error) {
            if (error.code === 'E_LOCATION_UNAVAILABLE') {
                console.log('Current location is unavailable. Make sure that location services are enabled.');
                Alert.alert("Уведомление", "Пожалуйста, убедитесь, что у вас включена геолокация");
            } else {
                console.log('Error fetching address:', error);
            }
        }
    };

    return (
        <View style={[styles.background, { backgroundColor: colors.background }]}>
            <Navbar title={t("menu-list.urgent-call")} isLogo={false}/>
            <View style={styles.container}>
                <View style={[styles.field, { borderBottomColor: colors.text }]}>
                    <Text style={[styles.fieldTitle, { color: colors.text }]}>{t("add-urgent-screen.address-title")}</Text>
                    <View style={styles.fieldContainer}>
                        <View style={{ width: '100%', display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                            <TextInput placeholderTextColor={colors.thinText} value={data.address} onChangeText={(text) => handleChangeAddress(text)} placeholder={t("add-urgent-screen.address-placeholder")} style={[styles.input, { color: colors.text }]}/>
                            <TouchableOpacity>
                                <FontAwesome name="map-marker" size={24} color="#7D8F9D" />
                            </TouchableOpacity>
                        </View>
                        { data.address && isPlaceholder && (
                            <View>
                                { placeholders.map((item, index) => (
                                    <TouchableOpacity onPress={() => selectAddress(item.address, item.longitude, item.latitude)} key={index}>
                                        <Text style={[styles.input, { color: colors.text }]}>{item.address}</Text>
                                    </TouchableOpacity>
                                )) }
                            </View>
                        ) }
                    </View>
                </View>
            </View>
            <View style={styles.mapContainer}>
                <TouchableOpacity onPress={() => fetchAddress()} style={styles.myLocation}>
                    <MaterialIcons name="my-location" size={28} color="rgba(255, 255, 255, 1)" />
                </TouchableOpacity>
                <MapView 
                    ref={mapRef}
                    customMapStyle={ dark && blueDarkMap } 
                    style={styles.map}
                    initialRegion={{
                        latitude: data.latitude ? parseFloat(data.latitude) : 43.238949,
                        longitude: data.longitude ? parseFloat(data.longitude) : 76.889709,
                        latitudeDelta: 0.3,
                        longitudeDelta: 0.3,
                    }}
                >
                    { data.latitude && data.longitude && (
                        <Marker
                            coordinate={{
                                latitude: parseFloat(data.latitude),
                                longitude: parseFloat(data.longitude),
                            }}
                        />
                    ) }
                </MapView>
                <View style={styles.buttonContainer}>
                    <TouchableOpacity disabled={!data.latitude && !data.longitude} onPress={() => navigation.navigate("AcceptSituation", { data: data })} style={ !data.latitude && !data.longitude ? [styles.button, { opacity: 0.5 }] : styles.button }>
                        <Text style={styles.buttonText}>{t("add-urgent-screen.next-button")}</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <StatusBar translucent={true} backgroundColor='transparent'/>
        </View>
    )
};

export default SituationAddressScreen;