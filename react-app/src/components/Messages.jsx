import { useContext, useEffect, useState } from 'react';
import { MessagesContext } from '../models/messages.ts';
//import useMessages from '../models/messages.ts';


export default function Messages() {
    const messages = useContext(MessagesContext);

    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        messages.add({ type: 'info', message: 'Welcome to the app!' });
    }, []);

    return (
<div class={`navbar-item has-dropdown notification-component ${isOpen && 'is-active'}`} >
    <a class="navbar-link" onClick={()=> setIsOpen( !isOpen ) }>
        <span class="icon">
            <i class="fas fa-bell"></i>
        </span>
        {messages.notifications.length > 0 &&
            <span class="tag is-danger " >
                { messages.notifications.length }
            </span>            
        }
    </a>
    <div class="navbar-dropdown">
        {messages.notifications.map((x, i) => (
        <div class={`notification is-light is-${x.type}`} key={i}>
            <button class="delete" onClick={()=> messages.close(i)} ></button>
            { x.message }
        </div>
        ))}
    </div>
</div>
    );
}