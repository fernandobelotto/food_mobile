import React from 'react'
import { StyleSheet, Text, View, FlatList } from 'react-native'
import ResultDetail from './ResultDetail'

const ResultList = ({ data, title }) => {
  if (data.length === 0) {
    return null
  }
  return (
    <View>
      <Text style={styles.title}>{title}</Text>
      <FlatList
        showsHorizontalScrollIndicator={false}
        horizontal
        data={data}
        keyExtractor={(i) => i.item}
        renderItem={({ item }) => {
          return (
            <ResultDetail info={item} />
          )
        }}
      />
    </View>
  )
}

export default ResultList

const styles = StyleSheet.create({
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    marginLeft: 10
  }
})
