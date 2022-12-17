import { defineStore } from 'pinia'

export const useInventoryStore = defineStore('inventory', {
    state: () => {
        return { count: 0 }
    },
    actions: {
    },
})