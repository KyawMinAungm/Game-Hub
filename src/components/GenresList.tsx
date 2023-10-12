import useGenre from '../hooks/useGenre'

const GenresList = () => {
  const {Data} = useGenre()
  return (
    <ul>
      {Data.map(g => <li key={g.id}>{g.name}</li>)}
    </ul>
  )
}

export default GenresList
