import React, { useEffect, useState } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { Home, Login, Movies, MovieDetail } from "../pages";
import { Image, Text, TouchableOpacity, View } from "react-native";
import leftArrow from "../assets/leftArrow.png";
import { colors, nav, text } from "../styles";
import { useNavigation, useRoute } from "@react-navigation/native";
import { doLogout, isAuthenticated } from "../services/auth";

const Stack = createStackNavigator();


const HeaderTextLeft: React.FC = () => {
    const route = useRoute();
    const navigation = useNavigation();
    return (
        <View style={nav.container}>
            { route.name !== "Home" ? (
                <TouchableOpacity
                    activeOpacity={0.8}
                    style={nav.backArrow}
                    onPress={() => navigation.goBack()}
                >
                    <Image source={leftArrow} />
                </TouchableOpacity>) : null
            }
            <Text style={nav.leftText}>MovieFlix</Text>
        </View>
    );
};


const HeaderTextRight: React.FC = () => {
    const route = useRoute();
    const navigation = useNavigation();
    const [authenticated, setAuthenticated] = useState(false);

    async function logged() {
        const result = await isAuthenticated();

        result ? setAuthenticated(true) : setAuthenticated(false);
    }

    function logout() {
        doLogout();
        navigation.navigate("Login");
    };

    useEffect(() => {
        logged();
    }, []);

    return (
        <View>
            {
                (authenticated && (route.name !== "Home")) ? (
                    <TouchableOpacity
                        onPress={() => logout()}
                        style={nav.logoutBtn}
                    >
                        <Text style={text.logoutText}>SAIR</Text>
                    </TouchableOpacity>
                ) :
                    null
            }
        </View>
    );
};


const Routes: React.FC = () => {
    return (
        <Stack.Navigator
            screenOptions={{
                headerTitle: " ",
                headerStyle: {
                    backgroundColor: colors.primary,
                },
                headerLeft: () => <HeaderTextLeft />,
                headerRight: () => <HeaderTextRight />,
            }}
        >
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Movies" component={Movies} />
            <Stack.Screen name="MovieDetail" component={MovieDetail} />
        </Stack.Navigator>
    );
};

export default Routes;