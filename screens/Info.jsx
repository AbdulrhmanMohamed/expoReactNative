import {
    StyleSheet,
    Text,
    View,
    SafeAreaView,
    Image
} from 'react-native'
import React, {useEffect} from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'
import Header from '../common/Header';

export default function Info(props) {
  const navigation=props.navigation;
    // const {body, title} = route.params;
    console.log('image', props)
    useEffect(() => {
        AsyncStorage.setItem('visited', 'true ')
    }, [])
    console.log('props', props.route.params)
    const{title,image,body}=props.route.params;
    return (
        <SafeAreaView 
        
        >

          <Header navigation={navigation}/>
            <View  >
                
                <Image source={
                        {uri: image}
                    }
                    style={
                        {
                           
                            height: 300,
                            
                            resizeMode:'cover'
                        }
                    }/>
                  <View style={{padding:20}}>

                <Text>{title}</Text>
                <Text>{body}</Text>
                  </View>
            </View>
            
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    
})
