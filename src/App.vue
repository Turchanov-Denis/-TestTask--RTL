<script setup>
import InventoryPage from "./layout/InventoryPage.vue";
</script>

<template>
  <div class="wrapper">
    <InventoryPage></InventoryPage>
  </div>
</template>


<style lang="scss">
@import './scss/nullstyle';
@import url('https://fonts.googleapis.com/css2?family=VT323&display=swap');
body {
  background: #1E1E1E;
  font-family: 'VT323', sans-serif;
}
.wrapper {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 40px;
}

</style>