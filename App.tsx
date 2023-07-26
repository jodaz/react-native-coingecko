import React, { useState, useEffect } from 'react'
import { 
  FlatList, 
  StyleSheet, 
  Text, 
  View, 
  ListRenderItemInfo,
  TextInput,
  StatusBar
} from 'react-native';
import coinsData from './data/coins.json'
import { ICoin } from './types';
import CoinItem from './components/CoinItem';

export default function App() {
  const [coins, setCoins] = useState<ICoin[] | any>(coinsData);

  const loadData = async () => {
    try {
      const res = await fetch('https://api.coingecko.com/api/v3/coins/listhttps://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false&locale=en')

      const data = await res.json()
      setCoins(data)
    } catch (error) {
      console.log(error)
    }
  }

  /* useEffect(() => {
    loadData()
  }, []) */

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor='#141414' />
      <View style={styles.header}>
        <Text style={styles.title}>CryptoMarket</Text>
        <TextInput style={styles.searchbox} />
      </View>
      <FlatList
        style={styles.list}
        data={coins}
        renderItem={(props: ListRenderItemInfo<ICoin>) => <CoinItem coin={props.item} />}  
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#141414',
    alignItems: 'center',
    justifyContent: 'center'
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '90%',
    paddingBottom: 20
  },
  title: {
    color: '#fff',
    marginTop: 10,
    fontSize: 20
  },
  list: {
    width: '90%'
  },
  searchbox: {
    color: '#fff',
    borderBottomColor: '#4657CE',
    borderBottomWidth: 1,
    width: '40%',
    textAlign: 'center'
  }
});
