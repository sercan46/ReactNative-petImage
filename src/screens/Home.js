import React, { Component } from 'react';
import { View, Text, SafeAreaView, TouchableOpacity, StyleSheet, Image, ScrollView } from 'react-native';
import { StackActions } from '@react-navigation/native';
import { CATIMAGE } from '../../image';
import { DOGIMAGE } from '../../image';

export default class HomeScreen extends Component {
    goToDog = () => {
        const pushAction = StackActions.push('DogPage');
        this.props.navigation.dispatch(pushAction);
    };
    goToCat = () => {
        const pushAction = StackActions.push('CatPage');
        this.props.navigation.dispatch(pushAction);
    };
    render() {
        return (
            <View>

                <SafeAreaView style={styles.container}>
                    <View style={styles.textWelcomeContainer}>
                        <Text style={styles.textWelcome}>Welcome to Our Little Friends Application</Text>
                    </View>
                    <View style={styles.textInfoContainer}>

                        <Text style={styles.textInfo}>Our application shows random pictures of cats and dogs. Would you like to say hello to our new friends :)</Text>
                    </View>
                    <View style={styles.imageContainer}>

                        <TouchableOpacity onPress={() => { this.goToDog() }}>
                            <Image style={styles.catImage} source={DOGIMAGE} />

                            <Text style={styles.textPet}>Cute Dogs</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => { this.goToCat() }}>
                            <Image style={styles.catImage} source={CATIMAGE} />

                            <Text style={styles.textPet}>Cute Cats</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.textFoonter}>
                        <Text style={styles.textFooter}>The greatness and moral development of a nation is judged by the way it treats animals.</Text>
                        <Text style={styles.textPerson}>Mahatma Gandhi</Text>

                    </View>
                </SafeAreaView>

            </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        height: '100%',
        backgroundColor: 'tomato',
    },
    textWelcomeContainer: {
        flex: 1
    },
    textInfoContainer: {
        flex: 2
    },
    imageContainer: {
        flex: 3,
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginLeft: 5,
        marginRight: 5
    },
    textFoonter: {
        flex: 2
    },

    textWelcome: {
        textAlign: 'center',
        marginTop: 40,
        fontSize: 18,
        color: 'black',
        fontWeight: 'bold',
    },
    textInfo: {
        color: 'white',
        marginTop: 30,
        fontSize: 18,
        marginLeft: 5
    },
    catImage: {
        width: '100%',
        height: 200
    },
    textPet: {
        fontSize: 20,
        marginTop: 5,
        textAlign: 'center',
        color: '#b8fffa'
    },
    textFooter: {
        marginLeft: 5,
        fontSize: 15,
        color: 'black'
    },
    textPerson: {
        textAlign: 'right',
        marginRight: 25,
        fontWeight: 'bold'
    }
})