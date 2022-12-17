<template>
  <div class="search">
    <input type="text" disabled />
    <button class="search__close">
      <img src="../assets/InventoryIcon/carbon_close.png" alt="" />
    </button>
  </div>
</template>

<script>
export default {
    
}
</script>

<style lang="scss" scoped>
.search {
  position: relative;
  display: flex;
  align-items: center;
  margin-top: 20px;
  box-sizing: border-box;
  width: 785px;
  height: 72px;
  background: #262626;
  /* Primary Border */

  border: 1px solid #4d4d4d;
  border-radius: 12px;
  input {
    margin-left: 18px;
    width: 699px;
    height: 36px;
    background: linear-gradient(
      90deg,
      #3c3c3c 0%,
      #444444 51.04%,
      #333333 100%
    );
    border-radius: 12px;
  }
  &__close {
    position: absolute;
    top: 6px;
    right: 5px;
    background-color: rgba(255, 255, 255, 0);
  }
}
</style>