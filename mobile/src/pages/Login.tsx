import React, { useState, useEffect } from "react";
import { Text, View, TouchableOpacity, Image, TextInput } from "react-native";
import eyesClosed from "../assets/eyes-closed.png";
import eyesOpened from "../assets/eyes-opened.png";
import arrow from "../assets/arrow.png";
import { theme, text } from "../styles";
import { isAuthenticated, login } from "../services/auth";

const Login: React.FC = () => {
    const [hidePassword, setHidePassword] = useState(true);
    const [userInfo, setUserInfo] = useState({ username: "", password: "" });

    useEffect(() => {
        isAuthenticated();
    }, []);
    
    async function handleLogin() {
        const data = await login(userInfo);
        console.warn(data);
    } 
    return (
        <View style={theme.loginContainer}>
            <Text style={text.loginTitle}>Login</Text>
            <View style={theme.form}>
                <TextInput
                    placeholder="Email"
                    autoCapitalize="none"
                    keyboardType="email-address"
                    style={theme.textInput}
                    value={userInfo.username}
                    onChangeText={(e) => {
                            const newUserInfo = { ...userInfo };
                            newUserInfo.username = e;
                            setUserInfo(newUserInfo);
                        }
                    }
                />
                <View style={theme.passwordGroup}>
                    <TextInput
                        placeholder="Senha"
                        autoCapitalize="none"
                        style={theme.textInput}
                        value={userInfo.password}
                        secureTextEntry={hidePassword}
                        onChangeText={(e) => {
                            const newUserInfo = { ...userInfo };
                            newUserInfo.password = e;
                            setUserInfo(newUserInfo);
                        }
                    }
                    />
                    <TouchableOpacity
                        style={theme.togle}
                        onPress={() => setHidePassword(!hidePassword)}
                    >
                        <Image
                            source={hidePassword ? eyesOpened : eyesClosed}
                            style={theme.eyes}
                        />
                    </TouchableOpacity>
                </View>
            </View>
            <TouchableOpacity
                style={theme.primaryButton} 
                activeOpacity={0.8}
                onPress={() => handleLogin()}
            >
                <Text style={text.primaryText}>fazer login</Text>
                <View style={theme.arrowContainer}>
                    <Image source={arrow} />
                </View>
            </TouchableOpacity>
        </View>
    );
};

export default Login;