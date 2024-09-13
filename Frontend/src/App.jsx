import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [users, setUsers] = useState([])

  const getUsers = () => {
    fetch('http://localhost:3000/users')
      .then((response) => response.json())
      .then((json) => {
        console.log(json)
        setUsers(json)
      })
  }

  useEffect(() => {
    getUsers()
  }, [])

  return (
    <>
      <h1>Test</h1>

      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </>
  )
}

export default App
