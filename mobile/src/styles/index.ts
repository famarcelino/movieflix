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
    // navbar
    logoutText: {},
    // Movie 
    movieTitle: {
        fontSize: 20,
        fontWeight: "bold",
        color: colors.white,
    },
    movieYear: {
        fontSize: 16,
        fontWeight: "bold",
        color: colors.primary,
    },
    movieSubTitle: {
        fontSize: 18,
        color: colors.veryLightkGray,
    },
    moveViewTextDetails: {
        fontSize: 16,
        fontWeight: "bold",
        color: colors.white,
        textTransform: "uppercase",
    },
    // Movie Detail
    movieDetailTitle: {
        fontSize: 24,
        fontWeight: "bold",
        marginLeft: 25,
        marginTop: 17,
        color: colors.white,
    },
    movieDetailYear: {
        marginLeft: 25,
        marginTop: 15,
        fontSize: 24,
        fontWeight: "bold",
        color: colors.primary,
    },
    movieDetailSubtitle: {
        marginLeft: 25,
        fontSize: 18,
        color: colors.gray2,
    },
    movieDetailSinopseTitle: {
        marginLeft: 25,
        marginTop: 15,
        fontSize: 22,
        fontWeight: "bold",
        color: colors.white,
    },
    movieDetailSinopseText: {
        fontSize: 16,
        color: colors.gray2,
        textAlign: "justify",
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
        backgroundColor: colors.gray,
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
    // Movie
    scrollContainer: {
        padding: 20,
        backgroundColor: colors.darkGray,
    },
    movieContainer: {
        width: 374,
        backgroundColor: colors.gray,
        borderRadius: 10,
        marginBottom: 18,
    },
    movieContent: {
        paddingHorizontal: 18,
        marginVertical: 20,
    },
    movieImg: {
        marginTop: 18,
        width: 374,
        height: 227,
    },
    movieViewDetails: {
        marginTop: 10,
        width: "100%",
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        borderWidth: 1,
        borderColor: colors.white,
        borderRadius: 10,
        padding: 10,
    },
    // Search
    inputContainer: {
        width: 374,
        backgroundColor: colors.gray,
        padding: 20,
        borderRadius: 10,
        marginBottom: 18,
    },
    searchInput: {
        fontSize: 16,
        color: colors.white,
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        borderWidth: 1,
        borderColor: colors.white,
        borderRadius: 10,
        padding: 15,
    },
    // Movie Detail
    containerMovieDetail: {
        width: "100%",
        height: "100%",
        padding: 20,
        backgroundColor: colors.darkGray,
    },
    contentMovieDetail: {
        backgroundColor: colors.gray,
        borderRadius: 10,
    },
    movieDetailSinopseContent: {
        marginTop: 10,
        marginBottom: 14,
        marginHorizontal: 25,
        paddingHorizontal: 20,
        paddingVertical: 15,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: colors.veryLightkGray,
    },
    movieDetailInputContainer: {
        marginTop: 18,
        marginBottom: 18,
        backgroundColor: colors.gray,
        borderRadius: 10,
        paddingHorizontal: 20,
        paddingVertical: 15,
    },
    movieDetailInput: {
        height: 97, 
        backgroundColor: colors.white,
        paddingHorizontal: 10,
        borderRadius: 10,
    },
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
    // Logout
    logoutBtn: {
        width: 60,
        height: 30,
        borderWidth: 1,
        borderColor: colors.black,
        borderRadius: 10,
        alignItems: "center",
        justifyContent: "center",
        marginRight: 20,
    },
});

export { colors, theme, text, nav };