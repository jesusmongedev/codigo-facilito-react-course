import './styles.css'
import { TodoContext } from '../TodoContext'
import { useContext } from 'react'

const Header = () => {
  const { quote, author } = useContext(TodoContext)
  return (
    <header>
      <blockquote>
        <h2>{quote}</h2>
        <h3> {author} </h3>
      </blockquote>
    </header>
  )
}

export default Header
