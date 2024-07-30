import React, { useEffect, useState, useRef } from 'react';
import { Text, View, TouchableOpacity, ScrollView } from 'react-native';
import styles from '../../../styles/EducationMapScreenStyle';
import Navbar from '../../ux/Navbar';
import MapView, { Marker } from 'react-native-maps';
import { MaterialIcons } from '@expo/vector-icons';
import EdutcationCenter from '../../ux/EducationCenter';
import { useIsFocused } from '@react-navigation/native';
import { useTranslation } from 'react-i18next';
import { useTheme } from '../../../themes/ThemeProvider';
import blueDarkMap from '../../../json/blueDarkMap';

function EducationMapScreen() {
    const [isOpenCities, setIsOpenCities] = useState(false);
    const [city, setCity] = useState("Алматы");
    const [citySlug, setCitySlug] = useState("almaty");
    const [entity, setEntity] = useState("Юр.лицо");
    const [educationCenters, setEducationCenters] = useState([]);
    const [selectedEducationCenter, setSelectedEducationCenter] = useState(null);
    const {t} = useTranslation();
    const cities = [
        { name: "Алматы", slug: "almaty", latitude: 43.2220, longitude: 76.8512 },
        { name: "Астана", slug: "astana", latitude: 51.1694, longitude: 71.4491 },
        { name: "Шымкент", slug: "shimkent", latitude: 42.3417, longitude: 69.5901 },
        { name: "Актобе", slug: "aktobe", latitude: 50.2839, longitude: 57.1670 },
        { name: "Караганда", slug: "karaganda", latitude: 49.8047, longitude: 73.1094 },
        { name: "Тараз", slug: "taraz", latitude: 42.9000, longitude: 71.3667 },
        { name: "Павлодар", slug: "pavlodar", latitude: 52.3000, longitude: 76.9500 },
        { name: "Усть-Каменогорск", slug: "usty-kamenogorsk", latitude: 49.9481, longitude: 82.6194 },
        { name: "Семей", slug: "semey", latitude: 50.4119, longitude: 80.2270 },
        { name: "Атырау", slug: "atyrau", latitude: 47.1164, longitude: 51.9200 },
        { name: "Костанай", slug: "kostanay", latitude: 53.2144, longitude: 63.6246 },
    ];

    const { colors, dark } = useTheme();

    const mapRef = useRef(null); // Реф для MapView
    const isFocused = useIsFocused();

    useEffect(() => {
        fetchEducationCenters();
    }, [city, entity]);

    const fetchEducationCenters = async () => {
        try {
            const response = await fetch(`https://spasateli.kz/api/user/study-centers?city=${city}&type=${entity}`);
            const responseJson = await response.json();

            if (responseJson.success) {
                setEducationCenters(responseJson.centers);
            }
        } catch (error) {
            console.log(error);
        }
    }

    const handleCity = (newCity, citySlug, longitude, latitude) => {
        setCity(newCity);
        setCitySlug(citySlug);
        setIsOpenCities(false);
        setEducationCenters();
        mapRef.current.animateToRegion({
            latitude: parseFloat(latitude),
            longitude: parseFloat(longitude),
            latitudeDelta: 0.01,
            longitudeDelta: 0.01,
        }, 1000);
    }

    const selectEntity = (entity) => {
        setEntity(entity);
        setEducationCenters();
    }

    const handleCenterSelect = (center) => {
        setSelectedEducationCenter(center);
        mapRef.current.animateToRegion({
            latitude: parseFloat(center.latitude),
            longitude: parseFloat(center.longitude),
            latitudeDelta: 0.01,
            longitudeDelta: 0.01,
        }, 1000); // Анимация длительностью 1 секунда
    }

    return (
        <View style={[styles.background, { backgroundColor: colors.background }]}>
            <Navbar isLogo={false} title={t("menu-list.education")}/>
            <View style={{ width: '100%', alignItems: 'center', justifyContent: 'space-between', flexDirection: 'row', display: 'flex', marginTop: 64, paddingHorizontal: 24, marginBottom: 12 }}>
                <Text style={[styles.title, { color: colors.text }]}>{t("education-screen.title")}</Text>
            </View>
            <MapView 
                ref={mapRef} // Привязка рефа к MapView
                style={styles.map}
                customMapStyle={ dark && blueDarkMap }
                initialRegion={{
                    latitude: selectedEducationCenter ? parseFloat(selectedEducationCenter.latitude) : 43.238949,
                    longitude: selectedEducationCenter ? parseFloat(selectedEducationCenter.longitude) : 76.889709,
                    latitudeDelta: 0.3,
                    longitudeDelta: 0.3,
                }}
            >
                {/* Отображение маркеров для каждого учебного центра */}
                { educationCenters && (
                    <>
                        {educationCenters.map(center => (
                            <Marker
                                key={center.id}
                                coordinate={{
                                    latitude: parseFloat(center.latitude),
                                    longitude: parseFloat(center.longitude),
                                }}
                                title={center.address}
                                onPress={() => handleCenterSelect(center)}
                            />
                        ))}
                    </>
                ) }
            </MapView>
            <View style={styles.container}>
                <View style={[styles.field, { borderBottomColor: colors.text }]}>
                    <Text style={styles.fieldTitle}>{t("education-screen.select-city")}</Text>
                    <TouchableOpacity onPress={() => setIsOpenCities(!isOpenCities)} style={styles.fieldContainer}>
                        <Text style={[styles.input, { color: colors.text }]}>{t(`education-screen.cities.${citySlug}`)}</Text>
                        <TouchableOpacity onPress={() => setIsOpenCities(!isOpenCities)}>
                            <MaterialIcons name={isOpenCities ? "keyboard-arrow-up" : "keyboard-arrow-down"} size={24} color={ colors.text } />
                        </TouchableOpacity>
                    </TouchableOpacity>
                    {isOpenCities && (
                        <View style={styles.cities}>
                            { cities.map((item, index) => (
                                <TouchableOpacity disabled={city === item.name} key={index} onPress={() => handleCity(item.name, item.slug, item.longitude, item.latitude)} style={styles.cityContainer}>
                                    <Text style={[styles.city, { color: colors.thinText }]}>{t(`education-screen.cities.${item.slug}`)}</Text>
                                </TouchableOpacity>
                            )) }
                        </View>
                    )}
                </View>
            </View>
            { educationCenters && (
                <ScrollView style={{ width: '100%', paddingHorizontal: 24, flex: 1 }}>
                    {educationCenters.map((item, index) => (
                        <EdutcationCenter selectCenter={handleCenterSelect} selectedCenter={selectedEducationCenter} key={index} data={item}/>
                    ))}
                </ScrollView>
            ) }
            { !educationCenters && (
                <View style={{ flex: 1, width: '100%', justifyContent: 'center', alignItems: 'center' }}>
                    <Text style={styles.emptyListText}>{t("education-screen.empty-list")}</Text>
                </View>
            ) }
        </View>
    )
}

export default EducationMapScreen;
