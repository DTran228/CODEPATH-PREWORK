import { useEffect, useState } from 'react'
import { supabase } from '../client'
import Card from '../components/Card'

function ShowCreators() {
  const [creators, setCreators] = useState([])

  useEffect(() => {
    async function getCreators() {
      const { data, error } = await supabase
        .from('creators')
        .select()

      if (error) {
        console.log(error)
      } else {
        setCreators(data)
      }
    }

    getCreators()
  }, [])

  return (
    <div>
      <h1>Show All Creators</h1>

      {creators.length === 0 ? (
        <p>No creators yet.</p>
      ) : (
        creators.map((creator) => (
          <Card key={creator.id || creator.name} creator={creator} />
        ))
      )}
    </div>
  )
}

export default ShowCreators