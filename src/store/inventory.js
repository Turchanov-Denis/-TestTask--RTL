import { defineStore } from 'pinia'

export const useInventoryStore = defineStore('inventory', {
    state: () => {
        return { listItems: [{
            id: 0,
            localindex: 0
        },{
            id: 1,
            localindex: 3
        }] }
    },
    actions: {
    },
})