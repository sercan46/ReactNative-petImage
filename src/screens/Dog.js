import React, { Component } from 'react';
import { View, Text, SafeAreaView, Image, Dimensions, StyleSheet,ActivityIndicator } from 'react-native';
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
            dog: [],
            loading:false
        };
    }

    getDog() {
        this.setState({loading:false})
        axios.get('https://dog.ceo/api/breeds/image/random').then((resp) => {
            this.setState({loading:true})
            this.setState({ dog: resp.data })
        })
    }
    componentDidMount() {
        this.getDog();
    }
    renderImage() {
        if (this.state.loading == true) {
            return (
                <SafeAreaView>
                <Image
                    style={{ width: deviceWidth, height: deviceHeight - 150, resizeMode: 'stretch' }}
                    source={{
                        uri: this.state.dog.message,
                    }}
                />
                <TouchableOpacity onPress={() => { this.getDog() }}>

                    <View style={styles.viewFooter}>
                        <Text style={styles.textView}>Other Dog :)</Text>
                    </View>
                </TouchableOpacity>

            </SafeAreaView>
            )
        }
        else {
            return (
                <View style={[styles.container, styles.horizontal]}>
                    <ActivityIndicator size="large" color="crimson" />
                </View>

            )
        }
    }
    render() {
        return (
            <View>
         
                {this.renderImage()}
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: 'center'
    },
    horizontal: {
        flexDirection: "row",
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: '100%'
    },
    textView: {
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 20,
        color: 'white'
    },
    viewFooter: {
        borderWidth: 2,
        backgroundColor: 'crimson',
        borderRadius: 10,
        borderColor: 'white'
    }
})