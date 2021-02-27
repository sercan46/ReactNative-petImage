import React, { Component } from 'react';
import { View, Text, SafeAreaView, Image, Dimensions, StyleSheet, ActivityIndicator } from 'react-native';
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
            cat: [],
            loading: false
        };
    }

    getCat() {
        this.setState({loading:false})
        axios.get('https://api.thecatapi.com/v1/images/search').then((resp) => {
            if (resp) {
                this.setState({ loading: true });
                this.setState({ cat: resp.data[0] })

            }
        })
    }
    componentDidMount() {
        this.getCat();
    }
    goBack() {
        const popAction = StackActions.pop(1);

        this.props.navigation.dispatch(popAction);
    }
    renderImage() {
        if (this.state.loading == true) {
            return (
                <SafeAreaView>
                    <Image
                        style={{ width: deviceWidth, height: deviceHeight - 150, resizeMode: 'stretch' }}
                        source={{
                            uri: this.state.cat.url,
                        }}
                    /> 
                    <TouchableOpacity onPress={() => { this.getCat() }}>
                        <View style={styles.viewFooter}>
                            <Text style={styles.textView}>Diğer Pisi :)</Text>
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