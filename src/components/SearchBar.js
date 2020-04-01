import React from 'react'
import { StyleSheet, View, TextInput, Text } from 'react-native'
import { FontAwesome } from '@expo/vector-icons'
// aqui vai um comenta'rio
const SearchBar = ({ term, onTermChange, onTermSubmit }) => {
  return (
    <>
      <View style={styles.bar}>
        <FontAwesome name='search' style={styles.icon} />
        <TextInput
          style={styles.input}
          value={term}
          onChangeText={(e) => onTermChange(e)}
          onEndEditing={() => onTermSubmit()}
        />
      </View>
    </>
  )
}

export default SearchBar

const styles = StyleSheet.create({
  bar: {
    backgroundColor: '#3333',
    height: 50,
    borderRadius: 10,
    margin: 10,
    flexDirection: 'row',
    marginBottom: 0
  },
  icon: {
    fontSize: 35,
    marginLeft: 10,
    color: '#5D1D73',
    flexDirection: 'column',
    alignSelf: 'center'
  },
  input: {
    flex: 1,
    height: 50,
    fontSize: 20,
    marginLeft: 15
  }
})
