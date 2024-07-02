import { Text, View, TouchableOpacity, Image } from 'react-native';
import styles from '../../styles/NavbarStyle';
import { StatusBar } from 'expo-status-bar';
import { Feather } from '@expo/vector-icons';
import { useState } from 'react';
import LeftMenu from './modals/LeftMenu';
import { useTheme } from '../../themes/ThemeProvider';

function Navbar({ isLogo, title, backgroundColor }) {
    const [isOpenLeftMenu, setIsOpenLeftMenu] = useState(false);
    const { dark, colors, setScheme } = useTheme();

    return (
        <View style={[styles.container, { backgroundColor: backgroundColor } ]}>
            <TouchableOpacity onPress={() => setIsOpenLeftMenu(true)} style={{ flexDirection: 'row', alignItems: 'center', display: 'flex' }}>
                <TouchableOpacity onPress={() => setIsOpenLeftMenu(true)}>
                    <Feather name="menu" size={32} color={colors.text} />
                </TouchableOpacity>
                <Text style={[styles.title, { color: colors.text }]}>{title}</Text>
            </TouchableOpacity>
            { isLogo && (
                <Image style={styles.logo} source={require("../../images/logo.png")}/>
            ) }
            <LeftMenu closeModal={() => setIsOpenLeftMenu(false)} modalVisible={isOpenLeftMenu}/>
        </View>
    )
};

export default Navbar;