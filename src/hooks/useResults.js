import { useState, useEffect } from 'react'
import api from '../api/yelp'

export default () => {
  const [Result, setResult] = useState([])

  const searchApi = async (searchTerm, location) => {
    const response = await api.get('/search', {
      params: {
        term: searchTerm,
        limit: 50,
        location: location
      }
    })
    setResult(response.data.businesses)
  }

  useEffect(() => { searchApi('Italian', 'São Paulo') }, [])

  return [Result, searchApi]
}
