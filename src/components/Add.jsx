import React from 'react'

import { ChatContext } from '../context/ChatProvider'

const Add = () => {

    const {addMessages, user} = React.useContext(ChatContext);
    const [message, setMessage] =  React.useState('');

    const add = (e) => {
        e.preventDefault();
        if(!message.trim()){
            console.log('vacio');
            return;
        }
        addMessages(user.uid, message);
        setMessage('')
    }

  return (
    <form
     className="fixed-bottom input-group p-3 bg-dark"
     onSubmit={add}
     >
      <input 
        type="text" 
        className="form-control"
        value={message}
        onChange={e => setMessage(e.target.value)}
      />
      <div className="input-group-append">
            <button
                className="btn btn-primary"
                type="submit"
            >
              Enviar
            </button>
      </div>
    </form>
  )
}

export default Add
