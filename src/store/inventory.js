import { defineStore } from 'pinia'

export const useInventoryStore = defineStore('inventory', {
    state: () => {
        return { listItems: [1, 2, 3, 4, 5,6,7,8] }
    },
    actions: {
    },
})