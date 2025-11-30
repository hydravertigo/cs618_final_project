import { Link } from 'react-router-dom'
import { jwtDecode } from 'jwt-decode'
import { User } from './User.jsx'

import { useSocket } from '../contexts/SocketIOContext.jsx'

import { useAuth } from '../contexts/AuthContext.jsx'

export function Popup() {
   const [token, setToken] = useAuth()
   const { socket } = useSocket()

   const handleLogout = () => {
      socket.disconnect()
      setToken(null)
   }

   if (token) {
      const { sub } = jwtDecode(token)
      return (
         <div>
            <h1>Welcome to my Recipes!</h1>
            <hr />
            Logged in as <User id={sub} />
            <br />
            <br />
            <button onClick={handleLogout}>Logout</button>
         </div>
      )
   } else {
      return (
         <div>
            <h1>Welcome to my Recipes!</h1>
            <Link to='/login'>Log In</Link> | <Link to='/signup'>Sign Up</Link>
         </div>
      )
   }
}
