import React, { Component } from 'react';
import { View, Text, SafeAreaView, Image ,Dimensions, StyleSheet} from 'react-native';
import { StackActions } from '@react-navigation/native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import _ from 'lodash';
import axios from 'axios';
let deviceWidth = Dimensions.get('window').width
let deviceHeight = Dimensions.get('window').height

export default class DogScreen extends Component {
    constructor() {
        super();
        this.state = {
            dog: []
        };
    }

    getCat() {
        axios.get('https://dog.ceo/api/breeds/image/random').then((resp) => {
            console.log('resp',resp.data)
           this.setState({ dog: resp.data })
        })
    }
    componentDidMount() {
        this.getCat();
    }

    render() {
        console.log('dog', this.state.dog)
        return (
            <View>
                <SafeAreaView>
                        <Image
                            style={{ width: deviceWidth, height: deviceHeight-150 ,resizeMode: 'stretch'}}
                            source={{
                                uri: this.state.dog.message,
                            }}
                        />                
                   <TouchableOpacity onPress={() => { this.getCat() }}>

                   <View style={styles.viewFooter}>
                       <Text style={styles.textView}>Diğer Kuçu :)</Text>
                   </View>
                   </TouchableOpacity>

                </SafeAreaView>

            </View>
        )
    }
}
const styles=StyleSheet.create({
        textView:{
            textAlign:'center',
            fontWeight:'bold',
            fontSize:20,
            color:'white'
      
        },
        viewFooter:{
            borderWidth:2,
            marginLeft:75,
            marginRight:75,
            backgroundColor:'crimson',
            marginTop:5,
            borderRadius:15,
            borderColor:'white'

        }
})