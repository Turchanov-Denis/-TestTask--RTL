<template>
  <div class="description">
    <div style="overflow: hidden; border-radius: 8px">
      <div
        class="description__image"
        style="background-image: url('../src/assets/InventoryImage/descr.png')"
      ></div>
    </div>
    <div class="description__title">{{ title }}</div>
    <div class="description__descr">
      {{ descr }}
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: String,
    descr: String,
  },
};
</script>

<style lang="scss" scoped>
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
</style>