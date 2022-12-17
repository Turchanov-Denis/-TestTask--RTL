<script setup>
import InventoryItem from "./InventoryItem.vue";
</script>

<template>
  <div class="inventory">
    <InventoryItem></InventoryItem>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.inventory {
  margin-left: 20px;
  width: 525px;
  height: 500px;
  display: inline-flex;
  overflow: hidden;

  /* Seondary BG */

  background: #262626;
  /* Primary Border */

  border: 1px solid #4d4d4d;
  border-radius: 12px;
  &__container {
  }
}
</style>