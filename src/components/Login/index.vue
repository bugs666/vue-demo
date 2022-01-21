<template>
  <el-form ref="form" :model="form" label-width="80px" class="login-form">
    <el-form-item label="用户名">
      <el-input v-model="form.name"/>
    </el-form-item>
    <el-form-item label="密码">
      <el-input v-model="form.password" type="password"/>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="onSubmit">登录</el-button>
    </el-form-item>
  </el-form>
</template>

<script>

import {USER_INFO} from "@/constant";

export default {
  name: "Login",
  data() {
    return {
      form: {name: '', password: ''},
      targetUrl: ''
    }
  },
  methods: {
    onSubmit() {
      localStorage.setItem(USER_INFO, this.form.name);
      this.$router.replace({name: this.targetUrl});
    }
  },
  beforeRouteEnter(to, from, next) {
    localStorage.removeItem(USER_INFO);
    next(vm => {
      vm.targetUrl = from.name || 'movie';
    })
  },
  beforeRouteLeave(to, from, next) {
    this.targetUrl = '';
    next();
  }
}
</script>

<style scoped>
.login-form {
  width: 40%;
  margin: 16px;
}
</style>
