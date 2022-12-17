<script setup>
import InventoryItem from "./InventoryItem.vue";
</script>
<template>
  <div class="inventory">
    <div>
      <Container :lock-axis="x" :behaviour="drop-zone"  @drop="onDrop" class="inventory__container">
        <Draggable v-for="item in store.listItems" :key="item">
          <div class="draggable-item">
            <InventoryItem :order="item"></InventoryItem>
          </div>
        </Draggable>
      </Container>
    </div>
  </div>
</template>

<script>
import { Container, Draggable } from "vue3-smooth-dnd";
export default {
  name: "Simple",
  components: { Container, Draggable },
  props: ["store"],
  data() {
    return {};
  },
  methods: {
    onDrop(dropResult) {
      this.items = this.applyDrag(this.items, dropResult);
    },
    applyDrag(arr,dragResult) {
      console.log(dragResult);
    },
  },
};
</script>

<style lang="scss" scoped>
.inventory {
  margin-left: 20px;
  width: 527px;
  height: 500px;
  display: inline-block;
  overflow: hidden;
  background: #262626;
  border: 1px solid #4d4d4d;
  border-radius: 12px;
  &__container {
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    height: 100%;
  }
}
</style>