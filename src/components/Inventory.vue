<template>
  <div class="inventory">
    <div class="groups">
      <div class="group">
        <Container
          group-name="1"
          :get-child-payload="getChildPayload1"
          @drop="onDrop('items1', $event)"
        >
          <Draggable v-for="item in items1" :key="item.id">
            <InventoryItem
            :store="store"
              :content="
                store.listItems.find(
                  (itemStore) => itemStore.localindex == item.id
                )
              "
            ></InventoryItem>
          </Draggable>
        </Container>
      </div>
      <div class="group">
        <Container
          group-name="1"
          :get-child-payload="getChildPayload2"
          @drop="onDrop('items2', $event)"
        >
          <Draggable v-for="item in items2" :key="item.id">
            <InventoryItem
                :store="store"
              :content="
                store.listItems.find(
                  (itemStore) => itemStore.localindex == item.id
                )
              "
            ></InventoryItem>
          </Draggable>
        </Container>
      </div>
      <div class="group">
        <Container
          group-name="1"
          :get-child-payload="getChildPayload3"
          @drop="onDrop('items3', $event)"
        >
          <Draggable v-for="item in items3" :key="item.id">
            <InventoryItem
            :store="store"
              :content="
                store.listItems.find(
                  (itemStore) => itemStore.localindex == item.id
                )
              "
            ></InventoryItem>
          </Draggable>
        </Container>
      </div>
      <div class="group">
        <Container
          group-name="1"
          :get-child-payload="getChildPayload4"
          @drop="onDrop('items4', $event)"
        >
          <Draggable v-for="item in items4" :key="item.id">
            <InventoryItem
            :store="store"
              :content="
                store.listItems.find(
                  (itemStore) => itemStore.localindex == item.id
                )
              "
            ></InventoryItem>
          </Draggable>
        </Container>
      </div>
      <div class="group">
        <Container
          group-name="1"
          :get-child-payload="getChildPayload5"
          @drop="onDrop('items5', $event)"
        >
          <Draggable v-for="item in items5" :key="item.id">
            <InventoryItem
            :store="store"
              :content="
                store.listItems.find(
                  (itemStore) => itemStore.localindex == item.id
                )
              "
            ></InventoryItem>
          </Draggable>
        </Container>
      </div>
    </div>
    <div class="layout">
      <div v-for="item in [...Array(25).keys()]" :key="item">
        <div
          style="width: 105px; height: 100px; border: 1px solid #4d4d4d"
        ></div>
      </div>
    </div>
  </div>
</template>
  
  <script>
import { Container, Draggable } from "vue3-smooth-dnd";
import { generateItems } from "./utils";
import InventoryItem from "./InventoryItem.vue";
export default {
  name: "Groups",

  components: { Container, Draggable, InventoryItem },
  props: ["store"],
  data() {
    return {
      items1: generateItems(5, (i) => ({
        id: i,
        data: "",
      })),
      items2: generateItems(5, (i) => ({
        id: i + 5,
        data: `Draggable 2 - ${i}`,
      })),
      items3: generateItems(5, (i) => ({
        id: i + 10,
        data: `Draggable 3 - ${i}`,
      })),
      items4: generateItems(5, (i) => ({
        id: i + 15,
        data: `Draggable 3 - ${i}`,
      })),
      items5: generateItems(5, (i) => ({
        id: i + 20,
        data: `Draggable 3 - ${i}`,
      })),
    };
  },

  methods: {
    onDrop(collection, dropResult) {
      console.log("ww", collection, dropResult);
      
      this.applyDrag(this[collection], dropResult);
    },

    getChildPayload1(index) {
      return this.items1[index];
    },

    getChildPayload2(index) {
      return this.items2[index];
    },

    getChildPayload3(index) {
     
      return this.items3[index];
    },

    getChildPayload4(index) {
      return this.items4[index];
    },
    getChildPayload5(index) {
      return this.items5[index];
    },
    applyDrag(arr, dragResult) {
      const { removedIndex, addedIndex, payload } = dragResult;
      if (addedIndex !== null) {
        // console.log(arr[addedIndex].id,payload.id);
        this.store.changePlace(arr[addedIndex].id, payload.id)
      }

     
    },
  },
};
</script>
  
  <style lang="scss" scoped>
.inventory {
  display: flex;
  position: relative;
  width: 525px;
  height: 500px;
}
.layout {
  position: absolute;
  display: flex;
  width: 525px;
  flex-wrap: wrap;
  top: 0;
  left: 50px;
  z-index: -1;
}
.groups {
  margin-left: 50px;
  display: flex;
  width: 100px;
  justify-content: stretch;
}

.group {
  flex: 1;
}
</style>