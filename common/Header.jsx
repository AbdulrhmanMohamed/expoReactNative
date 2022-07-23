import * as React from 'react';
import { StyleSheet, View, Image, TouchableOpacity, Text } from 'react-native';


export default Header = ({navigation}) => {
    
    console.log('props',navigation)
    return (
        <View style={styles.views}>
            <TouchableOpacity
                onPress={() => navigation.navigate("Home")}>
                <Image
                    style={{ width: 40, height: 40 ,backgroundColor:'white'}}
                    source={require('../images/home.png')}
                />
            </TouchableOpacity>
            <Text style={{ fontSize: 20, fontWeight: 'bold', color: '#fff' }}>Latest news</Text>
            <TouchableOpacity
                onPress={() => navigation.navigate("Google")}>
                <Image
                    style={{ width: 40, height: 40 }}
                    source={require('../images/chrome.png')}
                />
            </TouchableOpacity>
        </View>
    )
}


const styles = StyleSheet.create({
    views: {
        flexShrink: 1,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: "black",
        padding: 15
    }
})