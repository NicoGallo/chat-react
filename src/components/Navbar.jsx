import React from 'react'
import { unstable_renderSubtreeIntoContainer } from 'react-dom'
import { ChatContext } from '../context/ChatProvider'

const Navbar = () => {

  const {user, userLogin, logOut} = React.useContext(ChatContext)


  return (
    <div className='navbar navbar-dark bg-dark'>
      <span className="navbar-brand">
        chat
      </span>
      <div>
        {
          user.state ? (
            <button
               className="btn btn-outline-danger my-2"
               onClick={logOut}
             >
            cerrar sesión
            </button>
          ) : (
            <button 
              className="btn btn-outline-success"
              onClick={userLogin}
              >
              Acceder
            </button>
          )
        }
          
         
      </div>
    </div>
  )
}

export default Navbar
