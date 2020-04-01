import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'

const ResultDetail = ({ info }) => {
  return (
    <View style={styles.detail}>
      <Image source={{ uri: info.image_url }} style={{ height: 200, width: 300 }} />
      <Text>{info.name}</Text>
      <Text>{info.price}</Text>
      <Text>{info.rating} Stars, {info.review_count} Reviews</Text>
    </View>
  )
}

export default ResultDetail

const styles = StyleSheet.create({
  detail: {
    borderWidth: 2,
    borderColor: '#4444',
    margin: 10,
    padding: 10,
    borderRadius: 15
  }
})
