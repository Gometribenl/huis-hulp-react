import React from "react";
import {Platform, StyleSheet} from "react-native";

export class AppColors {
    static AppColors = {
        primary: {
            regular: '#363636',
            light: '#fff',
            dark: '#000',
        },
        secondary: {
            regular: '',
            light: '',
            dark: '',
        },
    };
}

export class Parameters {
    // static apiDomain = 'http://127.0.0.1:8000'; // No emulator
    static apiDomain = 'http://10.0.2.2:8000';  // Yes emulator
}
