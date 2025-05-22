import { createStackNavigator } from "@react-navigation/stack";
import AuthScreen from "../../screens/AuthScreen";
import { NavigationContainer } from '@react-navigation/native';
import RegScreen from "../../screens/RegScreen";
import MainScreen from "../../screens/MainScreen";
import SelectSituationScreen from "../../screens/situation/SelectSituationScreen";
import SituationAddressScreen from "../../screens/situation/SituationAddressScreen";
import AcceptSituation from "../../screens/situation/AcceptSituationScreen";
import EducationMapScreen from "../../screens/education/EducationMapScreen";
import ForumListScreen from "../../screens/forum/ForumListScreen";
import ForumScreen from "../../screens/forum/ForumScreen";
import WriteTreadScreen from "../../screens/forum/WriteTreadScreen";
import BlogListScreen from "../../screens/blog/BlogListScreen";
import BlogScreen from "../../screens/blog/BlogScreen";
import ProfileScreen from "../../screens/profile/ProfileScreen";
import PersonalDataScreen from "../../screens/profile/PersonalDataScreen";
import JournalScreen from "../../screens/profile/journal/JournalScreen";
import JournalInfoScreen from "../../screens/profile/journal/JournalInfoScreen";
import AchievementsScreen from "../../screens/profile/AchievementsScreen";
import PartnersScreen from "../../screens/profile/PartnersScreen";
import ContactScreen from "../../screens/ContactScreen";
import FaqScreen from "../../screens/profile/FaqScreen";
import TechSupportScreen from "../../screens/profile/TechSupport";
import ReferenceScreen from "../../screens/profile/ReferenceScreen";
import AboutProgramScreen from "../../screens/profile/AboutProgram";
import MissedPeopleScreen from "../../screens/missed/MissedPeopleScreen";
import MissedPeopleInfoScreen from "../../screens/missed/MissedPeopleInfoScreen";
import UserStorage from "../../../store/UserStorage";
import { useState, useEffect, useRef } from "react";
import { CommonActions } from '@react-navigation/native';
import DisastersListScreen from "../../screens/disasters/DisastersListScreen";
import DisasterScreen from "../../screens/disasters/DisasterScreen";
import DisasterAddScreen from "../../screens/disasters/DisasterAddScreen";
import WriteMissedPeopleScreen from "../../screens/missed/WriteMissedPeopleScreen";
import StatusScreen from "../../screens/status/StatusPage";
import MapIncidentsScreen from "../../screens/status/MapIncidentsScreen";
import Journal from "../../screens/status/JournalScreen";
import ActualIncidentScreen from "../../screens/actual/ActualIncidentScreen";
import ReasonScreen from "../../screens/actual/ReasonScreen";
import SelectLanguageScreen from "../../screens/SelectLanguageScreen";
import RouteMapScreen from "../../screens/situation/RouteMapScreen";
import RecoveryPassScreen from "../../screens/RecoveryPassword";
import OfferArgeement from "../../screens/documents/OfferAgreement";
import UsagePolicy from "../../screens/documents/UsagePolicy";
import RescuerCode from "../../screens/documents/RescuerCode";

function AppNavigation() {
    const Stack = createStackNavigator();
    const [isLogged, setIsLogged] = useState(false);
    const navigationRef = useRef();

    useEffect(() => {
        // Проверяем наличие userId в AsyncStorage
        const checkUserId = async () => {
            const userId = await UserStorage.getUserId();
            setIsLogged(!!userId); // Устанавливаем isLogged в true, если userId существует
        };

        checkUserId();
    }, []);

    useEffect(() => {
        if (isLogged && navigationRef.current) {
            navigationRef.current.dispatch(
                CommonActions.reset({
                    index: 0,
                    routes: [
                        {
                            name: 'MainScreen',
                            params: {
                                slug: "urgent-call",
                                type: 'Актуальный'
                            }
                        }
                    ],
                })
            );
        }
    }, [isLogged]);

    return (
        <NavigationContainer ref={navigationRef}>
            <Stack.Navigator initialRouteName={isLogged ? "MainScreen" : "SelectLanguage"}>
                <Stack.Screen name="AuthScreen" component={AuthScreen} options={{ headerShown: false }} />
                <Stack.Screen name="SelectLanguage" component={SelectLanguageScreen} options={{ headerShown: false }} />
                <Stack.Screen name="RegScreen" component={RegScreen} options={{ headerShown: false }} />
                <Stack.Screen name="MainScreen" component={MainScreen} options={{ headerShown: false }} />
                <Stack.Screen name="SelectSituationScreen" component={SelectSituationScreen} options={{ headerShown: false }} />
                <Stack.Screen name="SituationAddressScreen" component={SituationAddressScreen} options={{ headerShown: false }} />
                <Stack.Screen name="AcceptSituation" component={AcceptSituation} options={{ headerShown: false }} />
                <Stack.Screen name="EducationMapScreen" component={EducationMapScreen} options={{ headerShown: false }} />
                <Stack.Screen name="ForumListScreen" component={ForumListScreen} options={{ headerShown: false }} />
                <Stack.Screen name="ForumScreen" component={ForumScreen} options={{ headerShown: false }} />
                <Stack.Screen name="WriteTreadScreen" component={WriteTreadScreen} options={{ headerShown: false }} />
                <Stack.Screen name="BlogListScreen" component={BlogListScreen} options={{ headerShown: false }} />
                <Stack.Screen name="BlogScreen" component={BlogScreen} options={{ headerShown: false }} />
                <Stack.Screen name="ProfileScreen" component={ProfileScreen} options={{ headerShown: false }} />
                <Stack.Screen name="PersonalDataScreen" component={PersonalDataScreen} options={{ headerShown: false }} />
                <Stack.Screen name="JournalScreen" component={JournalScreen} options={{ headerShown: false }} />
                <Stack.Screen name="JournalInfoScreen" component={JournalInfoScreen} options={{ headerShown: false }} />
                <Stack.Screen name="AchievementsScreen" component={AchievementsScreen} options={{ headerShown: false }} />
                <Stack.Screen name="PartnersScreen" component={PartnersScreen} options={{ headerShown: false }} />
                <Stack.Screen name="ContactScreen" component={ContactScreen} options={{ headerShown: false }} />
                <Stack.Screen name="FaqScreen" component={FaqScreen} options={{ headerShown: false }} />
                <Stack.Screen name="TechSupportScreen" component={TechSupportScreen} options={{ headerShown: false }} />
                <Stack.Screen name="ReferenceScreen" component={ReferenceScreen} options={{ headerShown: false }} />
                <Stack.Screen name="AboutProgramScreen" component={AboutProgramScreen} options={{ headerShown: false }} />
                <Stack.Screen name="MissedPeopleScreen" component={MissedPeopleScreen} options={{ headerShown: false }} />
                <Stack.Screen name="MissedPeopleInfoScreen" component={MissedPeopleInfoScreen} options={{ headerShown: false }} />
                <Stack.Screen name="WriteMissedPeopleScreen" component={WriteMissedPeopleScreen} options={{ headerShown: false }} />
                <Stack.Screen name="DisastersListScreen" component={DisastersListScreen} options={{ headerShown: false }} />
                <Stack.Screen name="DisasterScreen" component={DisasterScreen} options={{ headerShown: false }} />
                <Stack.Screen name="DisasterAddScreen" component={DisasterAddScreen} options={{ headerShown: false }} />
                <Stack.Screen name="StatusScreen" component={StatusScreen} options={{ headerShown: false }} />
                <Stack.Screen name="MapIncidents" component={MapIncidentsScreen} options={{ headerShown: false }} />
                <Stack.Screen name="Journal" component={Journal} options={{ headerShown: false }} />
                <Stack.Screen name="ActualIncident" component={ActualIncidentScreen} options={{ headerShown: false }} />
                <Stack.Screen name="ReasonScreen" component={ReasonScreen} options={{ headerShown: false }} />
                <Stack.Screen name="RouteMap" component={RouteMapScreen} options={{ headerShown: false }} />
                <Stack.Screen name="Recovery" component={RecoveryPassScreen} options={{ headerShown: false }} />
                <Stack.Screen name="Offer" component={OfferArgeement} options={{ headerShown: false }} />
                <Stack.Screen name="UsagePolicy" component={UsagePolicy} options={{ headerShown: false }} />
                <Stack.Screen name="RescuerCode" component={RescuerCode} options={{ headerShown: false }} />
            </Stack.Navigator>
        </NavigationContainer>
    )
};

export default AppNavigation;