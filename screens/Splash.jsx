import {ActivityIndicator, StyleSheet, Text, View} from 'react-native'

import React, {useEffect} from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage';
export default function Splash({navigation}) {

    
    
   
    useEffect(()=>{

        AsyncStorage.getItem('visited').then((value)=>{
            if(value){
                navigation.navigate('Home')
            }
            else{
                navigation.navigate('about')
            }
        })
        AsyncStorage.removeItem('visited')
    },[])

   
        return (
        <View>
            <ActivityIndicator color='red'/>
        </View>
    )
}

const styles = StyleSheet.create({})
