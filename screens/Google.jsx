import * as React from 'react';
import { StyleSheet, View, Image, TouchableOpacity, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';


import WebView from 'react-native-webview';
import Footer from '../common/Footer';
import Header from '../common/Header';


export default class Google extends React.Component {
    render() {
        const { navigation } = this.props
        return (
            <SafeAreaView style={{flex: 1}}>
                <View style={{flex: 1}}>
                    <Header navigation={navigation}/>
                    <WebView
                        source={{ uri: 'https://google.com' }}
                        style={{ marginTop: 20 }}
                    />
                    <Footer navigation={navigation}/>
                </View>
            </SafeAreaView>
        )
    }
}