<script setup>
import { useInventoryStore } from "@/store/inventory";
import DescrCart from "../components/DescrCart.vue";
import SearchComponent from "../components/SearchComponent.vue";
import Inventory from "../components/Inventory.vue";
const inventory = useInventoryStore();
</script>

<template>
  <section class="inventory-section">
    <div class="inventory-section__row">
      <DescrCart
        title="Location"
        descr="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eveniet cumque culpa voluptate itaque iste impedit libero, dolores corporis quo asperiores debitis excepturi expedita velit hic, optio commodi voluptatem incidunt eum?"></DescrCart>
        <Inventory></Inventory>
    </div>
    <div class="inventory-section__row">
      <SearchComponent></SearchComponent>
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style lang="scss">
.inventory-section {
  display: flex;
  flex-direction: column;
  width: 800px;
  height: 600px;
  &__row {
    display: flex;
    align-items: start;
  }
}
</style>