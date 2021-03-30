import React from 'react';
import { Button, View, Alert } from 'react-native';

function ButtonView(props) {
    return (
        <>

            <View
                style={{
                    backgroundColor: "black",
                    flex: 1,
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center"

                }}>
                <View
                    style={{
                        backgroundColor: "orange",
                        width: 150,
                        height: 100,


                    }}>

                </View>
                <View
                    style={{
                        backgroundColor: 'white',
                        width: 200,
                        height: 100,


                    }}>

                </View>
                <View
                    style={{
                        width: 250,
                        height: 100,
                        backgroundColor: 'green'
                    }}>

                </View>
                <View
                    style={{
                        width: 250,
                        height: 50,
                        backgroundColor: 'grey'
                    }}>

                </View>
                <Button title="Click Me" onPress={() => Alert.alert("Confirmation", "Do you want to click??",
                    [
                        {
                            text: "yes", onPress: () => console.log("Yes")
                        },
                        {
                            text: "no", onPress: () => console.log("No")
                        }])
                } />
            </View>
        </>
    )
}
export default ButtonView;