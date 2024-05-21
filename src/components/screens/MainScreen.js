import { Text, TouchableOpacity, View, Image } from 'react-native';
import styles from '../../styles/MainScreen';
import Navbar from '../ux/Navbar';
import { StatusBar } from 'expo-status-bar'
import { LinearGradient } from 'expo-linear-gradient';
import { FontAwesome6  } from '@expo/vector-icons';

function MainScreen() {
    return (
        <View style={styles.background}>
            <Navbar title="Неотложная помощь" isLogo={true}/>
            <View style={styles.container}>
                <View style={styles.onlineContainer}>
                    <View style={styles.dot}/>
                    <Text style={styles.onlineText}>0 спасателей рядом</Text>
                </View>
                <View style={styles.buttonHelpContainer}>
                    <View style={styles.shadow}/>
                    <TouchableOpacity style={{ width: 200, height: 200, position: 'absolute', zIndex: 10000 }}>
                        <LinearGradient
                            colors={['#FF545C', '#E13737', '#E02424']}
                            start={[0, 0]}  // верхняя часть
                            end={[0, 1]}    // нижняя часть
                            style={styles.buttonHelp}
                        >
                            <Text style={styles.needHelp}>Требуется помощь</Text>
                        </LinearGradient>
                    </TouchableOpacity>
                </View>
            </View>
            <TouchableOpacity style={styles.goBack}>
                <FontAwesome6  name="headphones" size={16} color="rgba(225, 55, 55, 1)" />
            </TouchableOpacity>
            <View style={styles.footer}>
                <Image style={styles.footer} source={require('../../images/footer.png')}/>
            </View>
            <StatusBar translucent={true} backgroundColor='transparent'/>
        </View>
    )
};

export default MainScreen;