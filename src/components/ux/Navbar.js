import { Text, View, TouchableOpacity, Image, SafeAreaView } from 'react-native';
import styles from '../../styles/NavbarStyle';
import { StatusBar } from 'expo-status-bar';
import { Feather } from '@expo/vector-icons';
import { useState, useEffect } from 'react';
import LeftMenu from './modals/LeftMenu';
import { useTheme } from '../../themes/ThemeProvider';
import { useNavigationState } from '@react-navigation/native';

function Navbar({ isLogo, title, backgroundColor }) {
    const [isOpenLeftMenu, setIsOpenLeftMenu] = useState(false);
    const { dark, colors, setScheme } = useTheme();
    const index = useNavigationState(state => state.index);
    const routes = useNavigationState(state => state.routes);
    const currentRoute = routes[index].name;

    useEffect(() => {
        if (currentRoute === 'MainScreen') {
            setIsOpenLeftMenu(false);
        }
    }, [currentRoute]);

    const closeModal = () => {
        setIsOpenLeftMenu(false);
    }


    return (
        <>
            <SafeAreaView style={[styles.container, { backgroundColor: backgroundColor }]}>
                <TouchableOpacity onPress={() => setIsOpenLeftMenu(true)} style={{ flexDirection: 'row', alignItems: 'center', display: 'flex' }}>
                    <TouchableOpacity onPress={() => setIsOpenLeftMenu(true)}>
                        <Feather name="menu" size={32} color={colors.text} />
                    </TouchableOpacity>
                    <Text style={[styles.title, { color: colors.text }]}>{title}</Text>
                </TouchableOpacity>
                {isLogo && (
                    <Image style={styles.logo} source={require("../../images/logo.png")} />
                )}
            </SafeAreaView>
            {isOpenLeftMenu && <LeftMenu closeModal={() => closeModal()} />}
        </>
    )
};

export default Navbar;