import * as React from 'react';
import { StyleSheet, View, Image, TouchableOpacity, Linking } from 'react-native';


export default Footer = ({ navigation }) => {

    return (
        <View style={styles.views}>
            <TouchableOpacity
                onPress={() => navigation.navigate("Info")}>
                <Image
                    style={{ width: 35, height: 30 }}
                    source={require('../images/info.png')}
                />
            </TouchableOpacity>

            <TouchableOpacity
                onPress={() => Linking.openURL("whatsapp://send?text=Hi there&phone=+2001201392000")}>
                <Image
                    style={{ width: 35, height: 30 ,backgroundColor:'white'}}
                    source={require('../images/whatsapp.png')}
                />
            </TouchableOpacity>
            <TouchableOpacity
                onPress={() => navigation.navigate("Home")}>
                <Image
                    style={{ width: 35, height: 30,backgroundColor:'white' }}
                    source={require('../images/home.png')}
                />
            </TouchableOpacity>
        </View>
    );
}


const styles = StyleSheet.create({
    views: {
        flexShrink: 1,
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
        backgroundColor: "black",
        padding: 12
    }
})