import { useNavigation, useRoute } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { doLogout, isAuthenticated } from "../services/auth";
import { nav, text } from '../styles';

const NavBar: React.FC = () => {
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
                (authenticated && (route.name !== "Home") || (route.name !== "Login")) ? (
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

export default NavBar;