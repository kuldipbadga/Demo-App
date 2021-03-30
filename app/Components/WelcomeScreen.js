import React from 'react';
import { ImageBackground, StyleSheet, Text, View, Image, Button } from 'react-native';
function WelcomeScreen(props) {
    return (
        <View

            style={styles.background}>

            <Image style={styles.logo} source={require("../assets/logo.png")}></Image>

            <View style={[{ width: "100%", margin: 10 }]}>
                <Button title="Login" style={styles.loginButton}></Button>
                <Button title="Register" style={styles.registerButton}></Button>
            </View>



        </View>
    )

}
const styles = StyleSheet.create({
    logo: {
        width: 210,
        height: 207,
        position: "absolute",
        top: 50

    },
    background: {
        flex: 1,
        backgroundColor: '#5073b5',
        justifyContent: "flex-end",
        alignItems: "center"

    },
    loginButton: {



    },
    registerButton: {


    }

})
export default WelcomeScreen;