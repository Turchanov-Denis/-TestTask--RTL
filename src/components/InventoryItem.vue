<template>
  <div class="inventory-item">
    <img src="../assets/InventoryIcon/item1.png" alt="" />
    <div class="inventory-item__order">0</div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.inventory-item {
  width: 105px;
  height: 100px;
  display: flex;
  position: relative;
  justify-content: center;
  align-items: center;
  border: 1px solid #4d4d4d;
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