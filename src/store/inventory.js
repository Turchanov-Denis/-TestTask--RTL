import { defineStore } from 'pinia'



export const useInventoryStore = defineStore('inventory', {
    state: () => {
        return {
            listItems: (localStorage[['listItems']])? Object.values(JSON.parse(localStorage['listItems'])) : [{
                id: 0,
                localindex: 0
            }, {
                id: 1,
                localindex: 10
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
            localStorage.setItem('listItems', JSON.stringify({...this.listItems}))
        },
        delPlace(order) {
            console.log(order);
            this.listItems = this.listItems.filter(item => item.id !== order)
        },
        addPlace(amount, order) {
            // console.log('order',order);
            for (let i = 0; i < amount; i++) {
                let id1 = order+1;
                
                let localindex1 = this.listItems.filter(el => el.id == order)[0].localindex+5;
                // console.log('awd',localindex1.localindex);
                while (this.listItems.find(el => el.id == id1)) {
                    id1++
                }

                while (this.listItems.find(el => el.localindex == localindex1)) {
                    localindex1++
                }
                this.listItems.push({
                        id: id1,
                        localindex: localindex1
                })
                console.log(this.listItems)
            }
        }
    },
})