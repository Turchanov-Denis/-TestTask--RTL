import { defineStore } from 'pinia'

export const useInventoryStore = defineStore('inventory', {
    state: () => {
        return {
            listItems: [{
                id: 0,
                localindex: 0
            }, {
                id: 1,
                localindex: 3
            }]
        }
    },
    actions: {
        changePlace(to, from) {

            this.listItems = this.listItems.map((item, index, arr) => {
                if (!this.listItems.find(el => el.localindex == to) && item.localindex == from) {
                    item.localindex = to
                }
                return item
            })

            console.log(this.listItems);
        },
        delPlace(order) {
            console.log(order);
            this.listItems = this.listItems.filter(item => item.id !== order)
        }
    },
})