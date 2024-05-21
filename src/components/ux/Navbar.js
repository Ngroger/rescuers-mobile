import { Text, View, TouchableOpacity, Image } from 'react-native';
import styles from '../../styles/NavbarStyle';
import { StatusBar } from 'expo-status-bar';
import { Feather } from '@expo/vector-icons';
import { useState } from 'react';
import LeftMenu from './modals/LeftMenu';

function Navbar({ isLogo, title }) {
    const [isOpenLeftMenu, setIsOpenLeftMenu] = useState(false);
    return (
        <View style={styles.container}>
            <View style={{ flexDirection: 'row', alignItems: 'center', display: 'flex' }}>
                <TouchableOpacity onPress={() => setIsOpenLeftMenu(true)}>
                    <Feather name="menu" size={24} color="black" />
                </TouchableOpacity>
                <Text style={styles.title}>{title}</Text>
            </View>
            { isLogo && (
                <Image style={styles.logo} source={require("../../images/logo.png")}/>
            ) }
            <LeftMenu closeModal={() => setIsOpenLeftMenu(false)} modalVisible={isOpenLeftMenu}/>
        </View>
    )
};

export default Navbar;