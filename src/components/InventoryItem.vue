<script setup>
import ModalDel from './ModalDel.vue';
import ModalAdd from './ModalAdd.vue';
</script>
<template>
  <div class="inventory-item">
    <div
      v-if="content"
      v-on:dblclick="()=>{this.isActive = !this.isActive;}"
      @mousedown="mousedown"
      @contextmenu.prevent
    >
      <img src="../assets/InventoryIcon/item1.png" alt="" />
      <div class="inventory-item__order">{{ content.id }}</div>
    </div>
  </div>
  <ModalDel :isActive="isActive" :switchMetod=" () => {this.isActive = !this.isActive;}" :delMetod="delMetod" :content="content"></ModalDel>
  <ModalAdd :isActive="isAdd" :switchMetod=" () => {this.isAdd = !this.isAdd;}" :addMetod="addMetod" :content="content"></ModalAdd>
 
</template>

<script>
export default {
  props: ["content", "store"],
  data() {
    return {
      isActive: false,
      isAdd: false
    };
  },
  methods: {
    mousedown(event) {
      console.log(event.buttons);
      if (event.buttons === 2) {
        this.isAdd = !this.isAdd
      }
      
    },
    delMetod() {
      this.store.delPlace(this.content.id);  this.isActive = !this.isActive;
    },
    addMetod(amount,order) {
    this.store.addPlace(amount,order)
  }
  },
  
};
</script>

<style lang="scss" scoped>
.inventory-item {
  width: 105px;
  height: 100px;
  display: flex;
  position: relative;
  justify-content: center;
  align-items: center;
  &:hover {
    background: #2F2F2F;
  }
  &__order {
    position: absolute;
    width: 16px;
    height: 16px;
    bottom: 0;
    right: 0;
    background: #262626;
    /* Primary Border */

    border: 1px solid #4d4d4d;
    border-radius: 6px 0px 0px 0px;
    font-family: "Inter";
    font-style: normal;
    font-weight: 500;
    font-size: 10px;
    line-height: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #ffffff;
    opacity: 0.6;
  }
}

</style>