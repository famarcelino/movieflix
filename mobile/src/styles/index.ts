import { StyleSheet } from "react-native";
import { color } from "react-native-reanimated";

const colors = {
    white: "#FFFFFF",
    black: "#000000",
    primary: "#FFC700",
    secondary: "#937d1c",
    grayText: "#F2F2F2",
    veryLightkGray: "#E1E1E1",
    lightGray: "#CDCDCD",
    mediumGray: "#BFBFBF",
    gray2: "#9E9E9E",
    gray: "#6C6C6C",
    darkGray: "#525252",

};

const text = StyleSheet.create({
    bold: {
        fontSize: 26,
        fontWeight: "700",
        textAlign: "center",
        color: colors.white,
        marginBottom: 50,
    },
    regular: {
        fontSize: 16,
        fontWeight: "400",
        textAlign: "center",
        color: colors.grayText,
        marginBottom: 25,
    },
    primaryText: {
        fontSize: 16,
        fontWeight: "700",
        textAlign: "center",
        textTransform: "uppercase",
        color: colors.black,
        marginLeft: 100,
    },
    // LoginPage
    loginTitle: {
        fontSize: 30,
        fontWeight: "400",
        color: colors.white,
        marginBottom: 50,
        textTransform: "uppercase",
    },
});

const theme = StyleSheet.create({
    container: {
        width: "100%",
        height: "100%",
        paddingHorizontal: 40,
        paddingVertical: 40,
        flex: 1,
        justifyContent: "space-around",
        alignItems: "center",
        backgroundColor: colors.darkGray,
    },
    draw: {
        width: 340,
        height: 262,
        //marginBottom: 40,
    },
    textContainer: {},
    primaryButton: {
        width: 334,
        height: 50,
        backgroundColor: colors.primary,
        borderRadius: 10,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    arrowContainer: {
        width: 50,
        height: 50,
        backgroundColor: colors.secondary,
        borderTopRightRadius: 10,
        borderBottomRightRadius: 10,
        alignItems: "center",
        justifyContent: "center",
    },
    // LoginPage
    loginContainer: {
        width: "100%",
        height: "100%",
        paddingHorizontal: 40,
        paddingVertical: 40,
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: colors.darkGray,
    },
    form: {
        marginVertical: 10,
    },
    textInput: {
        fontSize: 16,
        width: 334,
        height: 50,
        borderWidth: 1,
        borderColor: colors.veryLightkGray,
        borderRadius: 10,
        padding: 10,
        backgroundColor: colors.white,
    },
    passwordGroup: {
        flexDirection: "row",
        alignItems: "center",
        marginVertical: 25,
    },
    togle: {
        margin: -30,
    },
    eyes: {},
});

const nav = StyleSheet.create ({
    container: {
        flexDirection: "row",
        alignItems: "center",
    },
    leftText: {
        color: colors.black,
        fontSize: 18,
        fontWeight: "bold",
        marginLeft: 20,
    },
    backArrow: {
        marginLeft: 20,
    },
});

export { colors, theme, text, nav };