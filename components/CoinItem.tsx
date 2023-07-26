import React, { FC } from 'react'
import { Text, View, StyleSheet, Image } from 'react-native';
import { ICoin } from '../types'

interface CoinItemProps {
    coin: ICoin
}

const CoinItem: FC<CoinItemProps> = ({ coin }) => {
    return (
        <View style={styles.container}>
            <View style={styles.coinName}>
                <Image style={styles.image} source={{ uri: coin.image }} />
                <Text style={styles.text}>{coin.name}</Text>
            </View>
            <Text style={styles.text}>{coin.current_price}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        backgroundColor: '#121212',
        paddingTop: 10,
        justifyContent: 'space-between'
    },
    coinName: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    text: {
        paddingLeft: 10,
        color: '#fff'
    },
    image: {
        height: 30,
        width: 30
    }
})

export default CoinItem