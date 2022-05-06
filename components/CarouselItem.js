import React from 'react'
import { View, StyleSheet, Text, Image, Dimensions } from 'react-native'

import colors from '../config/colors';
import fontsize from '../config/fontsize';
import defaultStyles from '../config/styles';

const { width, height } = Dimensions.get('window')



const CarouselItem = ({ item }) => {

  

    return (
        <View style={styles.container}>
            <View style={styles.cardView}>
                <Image style={styles.image} source={{ uri: item.url }} />
                <View style={styles.textView}>
                    {/* <Text style={styles.itemTitle}> {item.title}</Text>
                <Text style={styles.itemDescription}>{item.description}</Text> */}
                </View>
            </View>
            <View style={styles.textarea}>
                <Text style={styles.itemTitle1}> {item.title}</Text>
                <Text style={styles.itemDescription1}>{item.description}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {

    },
    cardView: {

        width: width - 20,
        height: 3 * (height / 5),
        backgroundColor: 'white',
        margin: 10,
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0.5, height: 0.5 },
        shadowOpacity: 0.5,
        shadowRadius: 3,
        elevation: 5,
    },

    textView: {
        position: 'absolute',
        bottom: 10,
        margin: 10,
        left: 5,
    },
    image: {
        width: width - 20,
        height: 3 * (height / 5),
        borderRadius: 10
    },
    itemTitle: {
        color: 'white',
        fontSize: 22,
        shadowColor: '#000',
        shadowOffset: { width: 0.8, height: 0.8 },
        shadowOpacity: 1,
        shadowRadius: 3,
        marginBottom: 5,
        fontWeight: "bold",
        elevation: 5
    },
    itemDescription: {
        color: 'white',
        fontSize: 12,
        shadowColor: '#000',
        shadowOffset: { width: 0.8, height: 0.8 },
        shadowOpacity: 1,
        shadowRadius: 3,
        elevation: 5
    },

    textarea: {
        width: width - 20,
        textAlign: 'center',
        justifyContent: 'center',
        marginTop: 10,
        marginLeft: 10,
        fontFamily:defaultStyles.fontFamily,
    },


    itemTitle1: {
        color: colors.dark,
        fontSize: fontsize.title,

        textAlign: 'center',
        justifyContent: 'center',
        fontWeight: "bold",
        fontFamily:'notoserif',

    },
    itemDescription1: {
        color: colors.grey,
        fontSize: fontsize.description,
        textAlign: 'center',
        justifyContent: 'center',
        marginTop: 10,
        fontFamily:defaultStyles.fontFamily,
    }
})

export default CarouselItem