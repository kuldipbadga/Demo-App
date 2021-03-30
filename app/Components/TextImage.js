import React from 'react';
import { SafeAreaView, Image, TouchableHighlight, Text, StyleSheet } from 'react-native';

function TextImage(props) {
    return (
        <SafeAreaView style={styles.container}>


            <TouchableHighlight onPress={() => console.log("Image pressed")}>
                <Image
                    blurRadius={1}
                    fadeDuration={1000}

                    source={{
                        width: 200,
                        height: 300,
                        uri: "https://picsum.photos/id/1/200/300"
                    }} ></Image>
            </TouchableHighlight>
            <Text style={styles.text} onPress={() => console.log("text pressed")}>This is simple image demo
         </Text>
        </SafeAreaView>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    }

})

export default TextImage;