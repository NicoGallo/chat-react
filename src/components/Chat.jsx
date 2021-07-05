import React from 'react'
import Add from './Add'

import { ChatContext } from '../context/ChatProvider'; 

const Chat = () => {

    const {messages, user} = React.useContext(ChatContext);
    const refZoneChat = React.useRef(null);

    React.useEffect(() => {
        console.log(refZoneChat);
        refZoneChat.current.scrollTop = refZoneChat.current.scrollHeight
    }, [messages])

  return (
    <div 
        className="mt-3 px-2"
        style={{height: '83vh', overflowY: 'scroll'}}
        ref={refZoneChat}
    > 
         {
        messages.map((item, index) => (
            user.uid === item.uid ? (
                <div className="d-flex justify-content-end mb-2" key={index}>
                    <span className="badge badge-pill badge-primary">
                        {item.text}
                    </span>
                </div>
            ) : (
                <div className="d-flex justify-content-start mb-2" key={index}>
                    <span className="badge badge-pill badge-secondary">
                        {item.text}
                    </span>
                </div>
            )
        ))
    }
        
        <Add />
    </div>
  )
}

export default Chat
