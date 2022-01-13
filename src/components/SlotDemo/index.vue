<template>
  <div class="slot-div">
    <DefaultSlot title="匿名插槽">
      <ul>
        <li v-for="(f,i) in foods" :key="i">{{ f }}</li>
      </ul>
    </DefaultSlot>
    <DefaultSlot title="具名插槽">
      <template v-slot:games>
        <li v-for="(g,i) in games" :key="i">{{ g }}</li>
      </template>
    </DefaultSlot>
    <DefaultSlot title="作用域插槽">
      <template v-slot:default="params">
        <li v-for="(p,i) in params.projects" :key="i">{{ p }}</li>
      </template>
    </DefaultSlot>
  </div>
</template>

<script>
import DefaultSlot from "@/components/SlotDemo/DefaultSlot";

export default {
  name: "SlotDemo",
  components: {DefaultSlot},
  data() {
    return {
      foods: ['车厘子', '草莓', '春见柑橘', '释迦果'],
      games: ['明日方舟', '英雄联盟', '刺激战场', '只狼·影逝']
    }
  }
}
</script>

<style scoped lang="scss">
.slot-div {
  display: flex;
  justify-content: space-between;
  padding: 10px;
  margin: 10px;
  border-radius: 8px;
  border: 1px solid #42b983;
}
</style>
