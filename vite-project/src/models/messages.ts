import { defineStore } from 'pinia'

// useStore could be anything like useUser, useCart
// the first argument is a unique id of the store across your application
export const useMessages = defineStore('messages', {
  
    state: () => ({
        notifications: [
            { type: 'primary', message: 'This is a primary notification' },
            { type: 'link', message: 'This is a link notification' },
            { type: 'success', message: 'Yay you did it!' },
            { type: 'warning', message: 'Uh Oh! Watch out!' },
            { type: 'danger', message: 'I cant believe you just did that!' },
        ] 
    }),
    actions: {
        close(index: number) {
            this.notifications.splice(index, 1);
        }
    }
})