import { Text, View, TouchableOpacity, Image, TextInput, Alert } from 'react-native';
import styles from '../../../styles/RouteMapScreenStyle';
import Navbar from '../../ux/Navbar';
import { FontAwesome, MaterialIcons, Fontisto } from '@expo/vector-icons';
import MapView, { Marker } from 'react-native-maps';
import { useIsFocused, useNavigation, useRoute } from '@react-navigation/native';
import { useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useTheme } from '../../../themes/ThemeProvider';
import blueDarkMap from '../../../json/blueDarkMap';
import { StatusBar } from 'expo-status-bar';
import MapViewDirections from 'react-native-maps-directions';

function RouteMapScreen() {
    const {t} = useTranslation();
    const { colors, dark } = useTheme();
    const route = useRoute();
    const { longitude, latitude, incidentId, userId } = route.params;
    const mapRef = useRef(null);
    const [routeInfo, setRouteInfo] = useState(null);
    const isFocused = useIsFocused();

    useEffect(() => {
        Alert.alert("Сообщение", "Здесь Вы будете видеть всех спасателей, которые откликнулись на инцидент");
        console.log(
            "longitude: ", longitude, 
            "latitude: ", latitude, 
            "incidentId: ", incidentId, 
            "userId: ", userId
        )
    }, []);

    useEffect(() => {
        const interval = setInterval(fetchRoute, 1000);

        return () => {
            clearImmediate(interval);
        }
    }, [])

    const fetchRoute = async () => {
        try {
            const response = await fetch(`https://spasateli.kz/api/user/get-route/${incidentId}/${userId}`);
            const responseJson = await response.json();

            if (responseJson.success) {
                setRouteInfo(responseJson.result[0]);
            }
        }  catch (error) {
            console.log("fetchRoute", error)
        }
    }

    return (
        <View style={[styles.background, { backgroundColor: colors.background }]}>
            <Navbar title={t("menu-list.urgent-call")} isLogo={false}/>
            <View style={styles.mapContainer}>
                <MapView 
                    ref={mapRef}
                    customMapStyle={ dark && blueDarkMap } 
                    style={styles.map}
                    initialRegion={{
                        latitude: latitude ? parseFloat(latitude) : 43.238949,
                        longitude: longitude ? parseFloat(longitude) : 76.889709,
                        latitudeDelta: 0.3,
                        longitudeDelta: 0.3,
                    }}
                >
                    { latitude && longitude && (
                        <Marker
                            style={{ position: 'absolute', zIndex: 10000 }}
                            coordinate={{
                                latitude: parseFloat(latitude),
                                longitude: parseFloat(longitude),
                            }}
                        >
                            <Fontisto name="map-marker-alt" size={48} color="#E13737" />
                        </Marker>
                    ) }
                    { routeInfo && (
                        <>
                            <MapViewDirections
                                origin={{
                                    latitude: parseFloat(routeInfo?.rescuer_latitude),
                                    longitude: parseFloat(routeInfo?.rescuer_longitude),
                                }}
                                destination={{
                                    latitude: parseFloat(latitude),
                                    longitude: parseFloat(longitude),
                                }}
                                lineDashPattern={[10, 10]}
                                apikey="AIzaSyAoeJsYR20gUXEXBtXDM49xoNYByvFAbZg"
                                strokeWidth={5}
                                strokeColor="#E13737"
                                
                            />
                            <Marker
                                coordinate={{
                                    latitude: parseFloat(routeInfo?.rescuer_latitude),
                                    longitude: parseFloat(routeInfo?.rescuer_longitude)
                                }}
                            >
                                <Image source={{ uri: `https://spasateli.kz/api/user/avatar/${routeInfo?.photo}` }} style={styles.photoRescuer}/>
                            </Marker>
                        </>
                    ) }
                </MapView>
            </View>
            <StatusBar translucent={true} backgroundColor='transparent'/>
        </View>
    )
};

export default RouteMapScreen;