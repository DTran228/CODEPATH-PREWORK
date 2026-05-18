import { useState } from 'react'
import { supabase } from '../client'
import { useNavigate } from 'react-router-dom'

function AddCreator() {

  const navigate = useNavigate()

  const [creator, setCreator] = useState({
    name: '',
    url: '',
    description: '',
    imageURL: ''
  })

  async function handleSubmit(e) {
    e.preventDefault()

    await supabase
      .from('creators')
      .insert({
        name: creator.name,
        url: creator.url,
        description: creator.description,
        imageURL: creator.imageURL
      })

    navigate('/')
  }

  function handleChange(e) {
    setCreator({
      ...creator,
      [e.target.name]: e.target.value
    })
  }

  return (
    <div>
      <h1>Add Creator</h1>

      <form onSubmit={handleSubmit}>

        <input
          type="text"
          name="name"
          placeholder="Name"
          value={creator.name}
          onChange={handleChange}
        />

        <br /><br />

        <input
          type="text"
          name="url"
          placeholder="Channel URL"
          value={creator.url}
          onChange={handleChange}
        />

        <br /><br />

        <textarea
          name="description"
          placeholder="Description"
          value={creator.description}
          onChange={handleChange}
        />

        <br /><br />

        <input
          type="text"
          name="imageURL"
          placeholder="Image URL"
          value={creator.imageURL}
          onChange={handleChange}
        />

        <br /><br />

        <button type="submit">
          Add Creator
        </button>

      </form>
    </div>
  )
}

export default AddCreator