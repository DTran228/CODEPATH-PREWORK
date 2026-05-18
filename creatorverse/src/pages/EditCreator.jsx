import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { supabase } from '../client'

function EditCreator() {

  const { id } = useParams()
  const navigate = useNavigate()

  const [creator, setCreator] = useState({
    name: '',
    url: '',
    description: '',
    imageURL: ''
  })

  useEffect(() => {
    async function fetchCreator() {

      const { data, error } = await supabase
        .from('creators')
        .select()
        .eq('id', id)
        .single()

      if (error) {
        console.log(error)
      } else {
        setCreator(data)
      }
    }

    fetchCreator()
  }, [id])

  function handleChange(e) {
    setCreator({
      ...creator,
      [e.target.name]: e.target.value
    })
  }

  async function handleSubmit(e) {
    e.preventDefault()

    await supabase
      .from('creators')
      .update({
        name: creator.name,
        url: creator.url,
        description: creator.description,
        imageURL: creator.imageURL
      })
      .eq('id', id)

    navigate('/')
  }

  async function handleDelete() {

    await supabase
      .from('creators')
      .delete()
      .eq('id', id)

    navigate('/')
  }

  return (
    <div>
      <h1>Edit Creator</h1>

      <form onSubmit={handleSubmit}>

        <input
          type="text"
          name="name"
          value={creator.name}
          onChange={handleChange}
        />

        <br /><br />

        <input
          type="text"
          name="url"
          value={creator.url}
          onChange={handleChange}
        />

        <br /><br />

        <textarea
          name="description"
          value={creator.description}
          onChange={handleChange}
        />

        <br /><br />

        <input
          type="text"
          name="imageURL"
          value={creator.imageURL}
          onChange={handleChange}
        />

        <br /><br />

        <button type="submit">
          Update Creator
        </button>

      </form>

      <br />

      <button onClick={handleDelete}>
        Delete Creator
      </button>

    </div>
  )
}

export default EditCreator