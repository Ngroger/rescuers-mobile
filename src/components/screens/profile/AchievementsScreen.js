import { View, Text, TouchableOpacity, ScrollView, Image } from 'react-native';
import styles from '../../../styles/AchievementsScreenStyle';
import { StatusBar } from 'expo-status-bar';
import { MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import Svg, { Polygon } from 'react-native-svg';
import image2 from '../../../images/achievements/1.png';
import image1 from '../../../images/achievements/2.png';
import { useTranslation } from 'react-i18next';
import { useTheme } from '../../../themes/ThemeProvider';

const Hexagon = ({ size, color, borderColor, borderWidth, imageSource }) => {
    const points = [
      { x: size * Math.cos(0), y: size * Math.sin(0) },
      { x: size * Math.cos((2 * Math.PI) / 6), y: size * Math.sin((2 * Math.PI) / 6) },
      { x: size * Math.cos((4 * Math.PI) / 6), y: size * Math.sin((4 * Math.PI) / 6) },
      { x: size * Math.cos((6 * Math.PI) / 6), y: size * Math.sin((6 * Math.PI) / 6) },
      { x: size * Math.cos((8 * Math.PI) / 6), y: size * Math.sin((8 * Math.PI) / 6) },
      { x: size * Math.cos((10 * Math.PI) / 6), y: size * Math.sin((10 * Math.PI) / 6) },
    ].map(point => `${point.x},${point.y}`).join(' ');

    return (
        <View style={{ width: size * 2 + borderWidth, height: size * 2 + borderWidth }}>
            <Svg
                height={size * 2 + borderWidth}
                width={size * 2 + borderWidth}
                viewBox={`-${size + borderWidth / 2} -${size + borderWidth / 2} ${size * 2 + borderWidth} ${size * 2 + borderWidth}`}
                style={{ transform: [{ rotate: '90deg' }] }}
            >
                <Polygon
                    points={points}
                    fill={color}
                    stroke={borderColor}
                    strokeWidth={borderWidth}
                />
            </Svg>
            <Image
                source={imageSource}
                style={[
                    styles.image,
                    { width: size, height: size }
                ]}
            />
        </View>
    );
};

function AchievementsScreen() {
    const navigation = useNavigation();
    const {t} = useTranslation();
    const { colors } = useTheme();

    return (
        <View style={[styles.background, { backgroundColor: colors.background }]}>
            <View style={styles.navbar}>
                <View style={{ flexDirection: 'row', alignItems: 'center', display: 'flex' }}>
                    <TouchableOpacity onPress={() => navigation.goBack()} style={styles.goBack}>
                        <MaterialIcons name="arrow-left" size={20} color="rgba(225, 55, 55, 1)" />
                    </TouchableOpacity>
                    <Text style={[styles.title, { color: colors.text }]}>{t("blog-screen.back-button")}</Text>
                </View>
            </View>
            <ScrollView style={{ marginTop: 12 }}>
                <View style={styles.container}>
                    <View style={styles.achievement}>
                        <Hexagon size={50} color="rgba(225, 55, 55, 0.7)" borderColor="rgba(225, 55, 55, 1)" borderWidth={5} imageSource={image1}/>
                        <View style={styles.achievementInfo}>
                            <Text style={[ styles.achievementTitle, { color: colors.text } ]}>{t("achievments.golded-star")}</Text>
                            <Text style={[ styles.achievementSubtitle, { color: colors.text } ]}>{t("achievments.golded-star-description")}</Text>
                            <View style={styles.progress}>
                                <Text style={[ [ styles.progressText, { color: colors.text } ], { color: colors.text } ]}>0 / 100</Text>
                                <View style={[ styles.progressBar, { backgroundColor: colors.thinText } ]}>
                                    <View style={styles.bar}/>
                                </View>
                            </View>
                        </View>
                    </View>
                    <View style={styles.achievement}>
                        <Hexagon size={50} color="rgba(225, 55, 55, 0.7)" borderColor="rgba(225, 55, 55, 1)" borderWidth={5} imageSource={image2}/>
                        <View style={styles.achievementInfo}>
                            <Text style={[ styles.achievementTitle, { color: colors.text } ]}>{t("achievments.active-user")}</Text>
                            <Text style={[ styles.achievementSubtitle, { color: colors.text } ]}>{t("achievments.active-user-description")}</Text>
                            <View style={styles.progress}>
                                <Text style={[ [ styles.progressText, { color: colors.text } ], { color: colors.text } ]}>0 / 100</Text>
                                <View style={[ styles.progressBar, { backgroundColor: colors.thinText } ]}>
                                    <View style={styles.bar}/>
                                </View>
                            </View>
                        </View>
                    </View>
                </View>
            </ScrollView>
            <StatusBar translucent={true} backgroundColor='transparent'/>
        </View>
    )
};

export default AchievementsScreen;