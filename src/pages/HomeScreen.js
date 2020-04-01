import React, { useState } from 'react'
import { ScrollView, Picker, Text, View } from 'react-native'
import SearchBar from '../components/SearchBar'
import ResultList from '../components/ResultList'
import { Ionicons } from '@expo/vector-icons'
import useResults from '../hooks/useResults'

const HomeScreen = () => {
  const [Term, setTerm] = useState('')
  const [Result, searchApi] = useResults([])
  const [SelectedValue, setSelectedValue] = useState('São Paulo')

  const filterResult = (price) => {
    return (
      Result.filter((value) => { return value.price === price })
    )
  }

  return (
    <ScrollView>
      <SearchBar
        term={Term}
        onTermChange={setTerm}
        onTermSubmit={() => { searchApi(Term, SelectedValue) }}
      />
      <Text style={{ margin: 15, fontSize: 18 }}>Selecione a região:</Text>
      <View style={{ flexDirection: 'row', justifyContent: 'flex-start', marginLeft: 10, marginRight: 200, marginBottom: 10, backgroundColor: 'purple' }}>
        <Picker
          mode='dropdown'
          selectedValue={SelectedValue}
          style={{ width: 200, height: 50, color: 'white', backgroundColor: 'transparent' }}
          onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
        >
          <Picker.Item label='Campinas' value='Campinas' />
          <Picker.Item label='São Paulo' value='São Paulo' />
          <Picker.Item label='Rio de Janeiro' value='Rio de Janeiro' />
        </Picker>
        <Ionicons name='md-arrow-dropdown-circle' style={{ alignSelf: 'center', fontSize: 20, position: 'absolute', right: 10, color: 'white' }} />
      </View>
      <ResultList data={filterResult('$')} title='Custo Benefício' />
      <ResultList data={filterResult('$$')} title='Preço Mediano' />
      <ResultList data={filterResult('$$$')} title='Mais Caro' />
      <ResultList data={filterResult('$$$$')} title='Luxo' />
    </ScrollView>
  )
}

export default HomeScreen
