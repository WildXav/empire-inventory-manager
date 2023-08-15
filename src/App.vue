<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
import HelloWorld from './components/HelloWorld.vue';
</script>

<template>
  <div class="common-layout">
    <el-container>
      <el-container>
        <el-header>
          <el-menu default-active="0" mode="horizontal">
            <el-menu-item
              ><strong
                ><v-icon name="fa-empire" scale="2" /> Inventory Manager</strong
              ></el-menu-item
            >
            <el-menu-item index="0">lINK</el-menu-item>
          </el-menu>
        </el-header>
        <el-main>Main</el-main>
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
}

#app > .common-layout {
  &,
  > .el-container {
    height: 100%;
  }
}
</style>
