import * as React from 'react';
import { StyleSheet, View, Image, Text, TouchableOpacity } from 'react-native';


export default class Card extends React.Component {

    render() {
        const { navigation } = this.props
        return (
            <TouchableOpacity
                style={styles.views}
                onPress={() => navigation.navigate("Info",{text:'The Title of The Info',data:'SubTitle of The Info'})}>
                    <Image
                        style={styles.img}
                        source={require('../images/star.png')}
                    />
                    <View style={{flexShrink: 1}}>
                        <Text style={styles.header}>Ford Recalls Escape</Text>
                        <Text style={styles.data}>Ford is recalling more than 29 million vehicles to correct  a problem with the automatic transimission. According to Ford's filling with the National Highway Traffic Safety </Text>
                    </View>
            </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create({
    views: {
        flexDirection: "row",
        backgroundColor: "#fff",
        padding: 8,
        borderRadius: 10,
        marginBottom: 10
    },
    img: {
        width: 120,
        height: 200,
        borderRadius: 10,
    },
    header: {
        fontSize: 19,
        fontWeight: 'bold',
        marginLeft: 10,
        marginBottom: 10,
    },
    data: {
        fontSize: 16,
        marginLeft: 10
    }
})