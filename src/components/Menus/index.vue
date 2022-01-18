<template>
  <div>
    <el-menu mode="horizontal">
      <el-menu-item v-for="route in allRoutes" :key="route.name">
        <router-link :to="route.path">{{ route.name }}</router-link>
      </el-menu-item>
    </el-menu>
  </div>
</template>

<script>
import {routes} from "../../router/router.config";

export default {
  name: "MyMenu",
  data() {
    return {
      allRoutes: routes
    }
  }
}
</script>

<style scoped>

</style>
