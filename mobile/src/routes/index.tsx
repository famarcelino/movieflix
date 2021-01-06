import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { Home, Login, Movies, MovieDetail } from "../pages";
import { Image, Text, TouchableOpacity, View } from "react-native";
import leftArrow from "../assets/leftArrow.png";
import { colors, nav } from "../styles";
import { useRoute } from "@react-navigation/native";

const Stack = createStackNavigator();

const HeaderText: React.FC = () => {
    const route = useRoute();

    return (
        <View style={nav.container}>
            { route.name !== "Home" ? (
                <TouchableOpacity activeOpacity={0.8} style={nav.backArrow} >
                    <Image source={leftArrow} />
                </TouchableOpacity>) : null
            }
            <Text style={nav.leftText}>MovieFlix</Text>
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
                headerLeft: () => <HeaderText />,
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