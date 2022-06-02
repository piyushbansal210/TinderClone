import { View, Text, ImageBackground } from 'react-native'
import React from 'react';
import styles from './style'



export default function TinderCard(props) {
    const {image,name,bio} = props.items;
    return (
        <View style={styles.container}>
            <ImageBackground
                source={{ uri: image }}
                style={styles.imageContainer}
                imageStyle={{ borderRadius: 20 }}
            >
                <View style={styles.textContanier}>
                    <Text style={styles.name}>{name}</Text>
                    <Text numberOfLines={4} style={styles.bio}>{bio}</Text>
                </View>
            </ImageBackground>
        </View>

    )
}