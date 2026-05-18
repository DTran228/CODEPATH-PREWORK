import { Link } from 'react-router-dom'

function Card({ creator }) {
  return (
    <div
      style={{
        border: '1px solid white',
        padding: '20px',
        margin: '20px',
        borderRadius: '10px'
      }}
    >

      {creator.imageURL && (
        <img
          src={creator.imageURL}
          alt={creator.name}
          width="250"
        />
      )}

      <h2>{creator.name}</h2>

      <a
        href={creator.url}
        target="_blank"
        rel="noreferrer"
      >
        Visit Channel
      </a>

      <p>{creator.description}</p>

      <Link to={`/creator/${creator.id}`}>
        View Creator
      </Link>

      <br />

      <Link to={`/edit/${creator.id}`}>
        Edit Creator
      </Link>

    </div>
  )
}

export default Card