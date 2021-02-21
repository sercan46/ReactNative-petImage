import React, { Component } from 'react';
import { View, Text, SafeAreaView, Image ,Dimensions, StyleSheet} from 'react-native';
import { StackActions } from '@react-navigation/native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import _ from 'lodash';
import axios from 'axios';
let deviceWidth = Dimensions.get('window').width
let deviceHeight = Dimensions.get('window').height

export default class CatScreen extends Component {
    constructor() {
        super();
        this.state = {
            cat: []
        };
    }

    getCat() {
        axios.get('https://api.thecatapi.com/v1/images/search').then((resp) => {
            this.setState({ cat: resp.data[0] })
        })
    }
    componentDidMount() {
        console.log('asdasd',deviceWidth)
        this.getCat();
    }
    goBack() {
        const popAction = StackActions.pop(1);

        this.props.navigation.dispatch(popAction);
    }
    render() {
        console.log('cat', this.state.cat.url)
        return (
            <View>
                <SafeAreaView>
                        <Image
                            style={{ width: deviceWidth, height: deviceHeight-150,resizeMode: 'stretch' }}
                            source={{
                                uri: this.state.cat.url,
                            }}
                        />                
                   <TouchableOpacity onPress={() => { this.getCat() }}>

                   <View style={styles.viewFooter}>
                       <Text style={styles.textView}>Diğer Pisicik :)</Text>
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