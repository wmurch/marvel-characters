import React, { useState, useEffect } from 'react'
import axios from 'axios'

const PUBLIC_KEY = '4fe2465f1b99095bf3cff6d9096dcdab'
const API_URL = `http://gateway.marvel.com/v1/public/characters?apikey=${PUBLIC_KEY}`

export default function DataMain() {
  const [characters, setCharacters] = useState([])

  useEffect(() => {
    axios.get(`${API_URL}`).then(resp => {
      setCharacters(resp.data.data.results)
      //console.log({ resp })
    })
  }, [])

  console.log({ characters })
  return (
    <section>
      {characters.map((character, key) => (
        <p>
          key = {character.id}
          character = {character.name}
        </p>
      ))}
    </section>
  )
}
