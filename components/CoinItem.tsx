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
                <View>
                    <Text style={styles.text}>{coin.name}</Text>
                    <Text style={styles.symbol}>{coin.symbol}</Text>
                </View>
            </View>
            <View style={styles.priceContainer}>
                <Text style={styles.text}>${coin.current_price}</Text>
                <Text style={[styles.pricePercentage,
                    coin.price_change_percentage_24h > 0 ? styles.priceUp : styles.priceDown
                ]}>
                    {coin.price_change_percentage_24h}
                </Text>
            </View>                    
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
    priceContainer: {
        flexDirection: 'column',
        textAlign: 'right'
    },
    pricePercentage: {
        textAlign: 'right'
    },
    priceUp: {
        color: '#454B1B'
    },
    priceDown: {
        color: '#880808'
    },
    text: {
        paddingLeft: 10,
        color: '#fff'
    },
    image: {
        height: 30,
        width: 30
    },
    symbol: {
        color: '#434343',
        fontSize: 10,
        textTransform: 'uppercase',
        marginLeft: 10,
    }
})

export default CoinItem