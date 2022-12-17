<script setup>
import { useInventoryStore } from "@/store/inventory";
const inventory = useInventoryStore();
</script>

<template>
  <section class="inventory-section">
    <div class="inventory-section__row">
      <div class="description">
        <div style="overflow: hidden; border-radius: 8px">
          <div
            class="description__image"
            style="
              background-image: url('../src/assets/InventoryImage/descr.png');
            "
          ></div>
        </div>
        <div class="description__title">Location</div>
        <div class="description__descr">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sapiente
          deserunt optio provident quidem a, quam repellendus hic ad, nam
          laudantium expedita earum, itaque illum ipsum culpa mollitia! Quas,
          rerum corrupti.
        </div>
      </div>
      <div class="inventory"></div>
    </div>
    <div class="inventory-section__row">
      <div class="search">
        <input type="text" disabled />
        <button class="search__close">
          <img src="../assets/InventoryIcon/carbon_close.png" alt="" />
        </button>
      </div>
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
.description {
  display: inline-block;
  width: 236px;
  height: 500px;
  padding: 14px;
  box-sizing: border-box;
  background: #262626;
  border: 1px solid #4d4d4d;
  border-radius: 12px;
  &__image {
    display: block;
    width: 208px;
    height: 240px;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    filter: blur(2px);
    /* Note: backdrop-filter has minimal browser support */
    border-radius: 8px;
  }
  &__title {
    margin-top: 20px;
    font-family: "VT323";
    font-style: normal;
    font-weight: 400;
    font-size: 22px;
    line-height: 39px;
    /* identical to box height */

    color: #ffffff;
    text-align: center;
  }
  &__descr {
    overflow: hidden;
    width: 190px;
    height: 150px;
    margin: 10px auto;
    font-family: "VT323";
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    /* identical to box height */

    color: #ffffff;
    text-align: center;
  }
}
.inventory {
  margin-left: 20px;
  width: 525px;
  height: 500px;
  display: inline-flex;

  /* Seondary BG */

  background: #262626;
  /* Primary Border */

  border: 1px solid #4d4d4d;
  border-radius: 12px;
  &__container {
  }
}

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