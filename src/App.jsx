import React from 'react'
import {ChatContext} from './context/ChatProvider'
import Navbar from './components/Navbar.jsx'; 
import Chat from './components/Chat';

const App = () => {

    const {user} = React.useContext(ChatContext)

    return user !== null ? (
        <div>
            <Navbar />
            {
                user.state ? (
                    <Chat />
                ) : (
                    <div className="lead text-center mt-5">
                        Debes iniciar sesión
                    </div>
                )
            }
        </div>
    ) : (
        <div>Cargando</div>
    )
}

export default App
