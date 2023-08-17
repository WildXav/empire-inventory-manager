<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
import HelloWorld from './components/HelloWorld.vue';
import HeaderBar from "./components/HeaderBar.vue"
import {onMounted, reactive, ref} from "vue"
import {User} from "./api/interfaces/user"
import usersApi from "./api/users"

let user = ref<User | null>(null)

onMounted(async () => {
  user.value = await usersApi.fetchUserProfile()
})
</script>

<template>
  <div class="common-layout">
    <el-container>
      <el-container>
        <el-header>
          <HeaderBar :user="user"/>
        </el-header>
        <el-main>
          <el-text class="mx-1" size="large">Large</el-text>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<style lang="scss">
html,
body,
#app {
  margin: 0;
  width: 100%;
  height: 100%;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;

  &#app {
    background-image: url("/background.webp");
    background-size: cover;
  }
}

#app > .common-layout {
  background-color: rgba(20, 20, 20, 0.95);

  &,
  > .el-container {
    height: 100%;
  }
}
</style>
