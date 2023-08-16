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
          <el-menu default-active="0" mode="horizontal" :ellipsis="false">
            <el-menu-item>
              <div class="app-title">
                <v-icon name="fa-empire" scale="2"/>
                <span>Inventory Manager</span>
              </div>
            </el-menu-item>
            <el-menu-item index="0">Spaceships</el-menu-item>
            <el-menu-item index="1" disabled>Troops</el-menu-item>
            <el-menu-item index="3" disabled>Droids</el-menu-item>
            <el-menu-item index="4" disabled>Arsenal</el-menu-item>

            <div class="user-area">
              <el-menu-item>
                <el-text type="primary" tag="b">
                  <el-text class="user-title" type="info" tag="sup">TK-4601</el-text>
                  Tarvyn Lareka
                </el-text>
                <el-avatar src="/avatar.png" shape="square" :size="45"/>
              </el-menu-item>
            </div>
          </el-menu>
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

  .app-title {
    display: flex;
    align-items: center;
    font-weight: bold;

    span {
      margin-left: .5rem;
    }
  }

  .user-area {
    display: flex;
    justify-content: flex-end;
    flex-grow: 1;

    .user-title {
      font-size: 10px;
    }

    .el-avatar {
      margin-left: 1rem;
    }
  }
}
</style>
