import React, { useState } from "react";
import { useRoute } from "@react-navigation/native";
import { Image, TouchableOpacity } from "react-native";
import leftArrow from "../assets/leftArrow.png";
import {nav} from '../styles';

const NavBar: React.FC = () => {

    return (
        <TouchableOpacity activeOpacity={0.8} style={nav.backArrow} >
            <Image source={leftArrow} />
        </TouchableOpacity>
    )
};

export default NavBar;