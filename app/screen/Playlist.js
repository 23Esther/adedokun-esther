import React from 'react';
import { View, StyleSheet, Text } from 'react-native';


const Playlist = () => {
    return (
        <View style ={styles.container}>
            <Text>Play list</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        color: 'green',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',

    },
});

export default Playlist;

