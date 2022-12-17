<template>
  <div class="inventory-item">
    <div
      v-if="content"
      @click="
        () => {
          this.isActive = !this.isActive;
        }
      "
      @mousedown="mousedown"
      @contextmenu.prevent
    >
      <img src="../assets/InventoryIcon/item1.png" alt="" />
      <div class="inventory-item__order">{{ content.id }}</div>
    </div>
  </div>
  <div v-if="isActive" class="modal">
    <img src="../assets/InventoryIcon/item1.png" alt="" />
    <div class="modal__title">item / {{ content.id }}</div>
    <div class="modal__descr">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum repudiandae
      iure est sapiente. Odio ratione, maxime ab vero placeat suscipit
      reprehenderit iusto aliquam neque dicta iste voluptatum! Exercitationem,
      nam maiores?
    </div>
    <button
      @click="
        () => {
          this.store.delPlace(content.id);
          isActive = !isActive;
        }
      "
    >
      Удалить предмет
    </button>
    <div
      @click="
        () => {
          this.isActive = !this.isActive;
        }
      "
      class="modal__close"
    >
      X
    </div>
  </div>
</template>

<script>
export default {
  props: ["content", "store"],
  data() {
    return {
      isActive: false,
    };
  },
  methods: {
    mousedown(event) {
      if (event.which === 3) {
        console.log("Right mouse down");
      }
    },
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
.modal {
  padding-top: 40px;
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  top: 0;
  right: -250px;
  width: 250px;
  height: 500px;
  background: rgba(38, 38, 38, 0.5);
  /* Primary Border */

  border-left: 1px solid #4d4d4d;
  backdrop-filter: blur(8px);
  z-index: 100;
  /* Note: backdrop-filter has minimal browser support */
  img {
    width: 120px;
    height: 120px;
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
  &__close {
    width: 20px;
    height: 20px;
    position: absolute;
    top: 10px;
    right: 10px;
    z-index: 1001;
    font-family: "VT323";
    font-style: normal;
    font-weight: 400;
    font-size: 24px;
    line-height: 17px;
    /* identical to box height */

    display: flex;
    align-items: center;
    text-align: center;

    /* Primary White */

    color: #ffffff;
    cursor: pointer;
  }
  button {
    margin-top: 20px;
    width: 220px;
    height: 39px;
    display: flex;
    justify-content: center;
    align-items: center;
    /* Red Hover */

    background: #ff8888;
    border-radius: 8px;
    font-family: "VT323";
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 17px;
    /* identical to box height */

    display: flex;
    align-items: center;
    text-align: center;

    /* Primary White */

    color: #ffffff;
  }
}
</style>