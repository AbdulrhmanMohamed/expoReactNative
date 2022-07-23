import React, {useState, useEffect} from 'react';

import {
    View,
    TouchableOpacity,
    ScrollView,
    FlatList,
    StyleSheet,
    Image,
    Text
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import AsyncStorage from '@react-native-async-storage/async-storage';
// import axios from 'axios'
import Card from '../common/Card';
import Header from '../common/Header';
import Footer from '../common/Footer';

export default Home = ({navigation}) => {

    const [data, setData] = useState([]);

   
    const getData = () => {
        fetch('https://mockend.com/HosamZewain/test/posts').then(value => value.json()).then(res => setData(res))

    } 
    useEffect(() => {
        
        getData();
    }, [])
    return (
        <SafeAreaView style={
            {flex: 1}
        }>
            <Header navigation={navigation}/>


            <View style={
                styles.container
            }>

                <FlatList data={data}
                    renderItem={
                        ({item, index}) => {

                            return (
                                <TouchableOpacity onPress={
                                    () => {
                                        navigation.navigate('Info', {
                                            image:item.image,
                                            title:item.title,
                                            body:item.body,
                                        })
                                    }
                                }>
                                    <View style={
                                        styles.viewRow
                                    }>
                                        <Image source={
                                                {uri: item.image}
                                            }
                                            style={
                                                {
                                                    width: 120,
                                                    height: 120,
                                                    borderRadius: 10
                                                }
                                            }/>
                                        <View style={
                                            {
                                                flexShrink: 1,
                                                paddingHorizontal: 10,
                                                marginVertical: 10,
                                                backgroundColor: '#f1f1f1'
                                            }
                                        }>
                                            <Text>{
                                                item.title
                                            }</Text>
                                            <Text>{
                                                item.body.substring(0, 150)
                                            }</Text>
                                        </View>
                                    </View>
                                </TouchableOpacity>
                            )
                        }
                    }/>
            </View>
        <Footer/>
    </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    viewRow: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center'
    }
})
