<template>
  <div>
    <el-menu>
      <el-menu-item v-for="route in allRoutes" :key="route.name">
        <router-link :to="route.path">{{ route.name }}</router-link>
      </el-menu-item>
    </el-menu>
    <router-view></router-view>
  </div>
</template>

<script>
import routes from "../../configs/router.config";

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
