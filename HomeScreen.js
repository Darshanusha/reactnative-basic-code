import React from 'react';
import { Text, StyleSheet, View, Button } from 'react-native';
const HomeScreen = ({navigation}) =>{
    return <View>
        <Button title="Colour Screen" onPress = { ()=> navigation.navigate('ColourScreen')} />
        <Button title="Counter screen" onPress = {()=> navigation.navigate('CounterScreen')} />
    </View>
};

const styles = StyleSheet.create({});

export default HomeScreen;