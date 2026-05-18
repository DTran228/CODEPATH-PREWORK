import { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { supabase } from '../client'

function ViewCreator() {
  const { id } = useParams()
  const [creator, setCreator] = useState(null)

  useEffect(() => {
    async function getCreator() {
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

    getCreator()
  }, [id])

  if (!creator) {
    return <p>Loading creator...</p>
  }

  return (
    <div>
      <h1>{creator.name}</h1>

      {creator.imageURL && (
        <img
          src={creator.imageURL}
          alt={creator.name}
          width="300"
        />
      )}

      <p>{creator.description}</p>

      <a href={creator.url} target="_blank" rel="noreferrer">
        Visit Channel
      </a>

      <br /><br />

      <Link to={`/edit/${creator.id}`}>
        Edit Creator
      </Link>

      <br />

      <Link to="/">
        Back Home
      </Link>
    </div>
  )
}

export default ViewCreator