import { Text, View, TouchableOpacity, Modal, Image } from 'react-native';
import styles from '../../../styles/modals/LeftMenuStyle';
import { FontAwesome5, MaterialCommunityIcons, Feather, FontAwesome  } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

function LeftMenu({ modalVisible, closeModal }) {
    const navigation = useNavigation();
    return (
        <Modal
            animationType='fade'
            transparent={true}
            visible={modalVisible}
            onRequestClose={closeModal}
        >
            <View style={styles.background}>
                <TouchableOpacity style={styles.buttonBack} onPress={closeModal} />
                <View style={styles.container}>
                    <View style={styles.header}>
                        <Image source={require("../../../images/logo.png")} style={styles.logo}/>
                        <Text style={styles.logoText}>СПАСАТЕЛЬ</Text>
                    </View>
                    <View style={styles.profile}>
                        <Image style={styles.photoProfile}/>
                        <View style={{ marginLeft: 6 }}>
                            <Text style={styles.fullname}>Иван Иванов</Text>
                            <Text style={styles.typeOfAccount}>Очевидец</Text>
                        </View>
                    </View>
                    <TouchableOpacity style={styles.buttonContainer}>
                        <FontAwesome5 name="hands-helping" size={17} color="rgba(31, 31, 31, 1)" />
                        <Text style={styles.buttonText}>Неотложная помощь</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.buttonContainer}>
                        <Image source={require("../../../images/Filled.png")} style={{ width: 17, height: 17 }}/>
                        <Text style={styles.buttonText}>Тестовый вызов</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.buttonContainer}>
                        <FontAwesome5 name="graduation-cap" size={17} color="rgba(31, 31, 31, 1)" />
                        <Text style={styles.buttonText}>Пройти обучение</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.buttonContainer}>
                        <MaterialCommunityIcons  name="forum" size={17} color="rgba(31, 31, 31, 1)" />
                        <Text style={styles.buttonText}>Форум</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.buttonContainer}>
                        <MaterialCommunityIcons  name="smart-card" size={17} color="rgba(31, 31, 31, 1)" />
                        <Text style={styles.buttonText}>Блог</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.buttonContainer}>
                        <Feather   name="wind" size={17} color="rgba(31, 31, 31, 1)" />
                        <Text style={styles.buttonText}>Стихийные бедствия</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.buttonContainer}>
                        <FontAwesome name="user" size={17} color="rgba(31, 31, 31, 1)" />
                        <Text style={styles.buttonText}>Пропал без вести</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.buttonContainer}>
                        <MaterialCommunityIcons  name="contacts" size={17} color="rgba(31, 31, 31, 1)" />
                        <Text style={styles.buttonText}>Контакты</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.buttonContainer}>
                        <Feather  name="users" size={17} color="rgba(31, 31, 31, 1)" />
                        <Text style={styles.buttonText}>Партнёры</Text>
                    </TouchableOpacity>
                    <View style={{ width: '70%', justifyContent: 'space-between', alignItems: 'center', display: 'flex', flexDirection: 'row', marginTop: 12 }}>
                        <View style={{ backgroundColor: '#FFF', width: 50, height: 50, shadowColor: "#000", borderRadius: 12, shadowColor: "#000", shadowOffset: { width: 0, height: 3, }, shadowOpacity: 0.2, shadowRadius: 4.65, elevation: 7, justifyContent: 'center', alignItems: 'center' }}>
                            <Image style={{ width: 32, height: 25 }} source={require("../../../images/partners/free-icon-font-sony-6424321.png")}/>
                        </View>
                        <View style={{ backgroundColor: '#FFF', width: 50, height: 50, shadowColor: "#000", borderRadius: 12, shadowColor: "#000", shadowOffset: { width: 0, height: 3, }, shadowOpacity: 0.2, shadowRadius: 4.65, elevation: 7, justifyContent: 'center', alignItems: 'center' }}>
                            <Image style={{ width: 32, height: 6.68 }} source={require("../../../images/partners/Group.png")}/>
                        </View>
                        <View style={{ backgroundColor: '#FFF', width: 50, height: 50, shadowColor: "#000", borderRadius: 12, shadowColor: "#000", shadowOffset: { width: 0, height: 3, }, shadowOpacity: 0.2, shadowRadius: 4.65, elevation: 7, justifyContent: 'center', alignItems: 'center' }}>
                            <Image style={{ width: 22, height: 22 }} source={require("../../../images/partners/free-icon-font-unsplash-6423310.png")}/>
                        </View>
                    </View>
                </View>
            </View>
        </Modal>
    )
};

export default LeftMenu;