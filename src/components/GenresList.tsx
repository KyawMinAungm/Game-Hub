import useGenre from '../hooks/useGenre'

const GenresList = () => {
  const {genres} = useGenre()
  return (
    <ul>
      {genres.map(g => <li key={g.id}>{g.name}</li>)}
    </ul>
  )
}

export default GenresList
