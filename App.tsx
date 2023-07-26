import React, { useState, useEffect } from 'react'
import { 
  FlatList, 
  StyleSheet, 
  Text, 
  View, 
  ListRenderItemInfo
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
      <FlatList
        data={coins}
        renderItem={(props: ListRenderItemInfo<ICoin>) => <CoinItem coin={props.item} />}  
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#141414',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
