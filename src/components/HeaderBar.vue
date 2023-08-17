<script setup lang="ts">
import {User} from "../api/interfaces/user";

defineProps<{ user: User | null }>()
</script>

<template>
  <el-menu default-active="0" mode="horizontal" :ellipsis="false">
    <el-menu-item>
      <div class="app-title">
        <v-icon name="fa-empire" scale="2"/>
        <div>
          <span>Imperial Navy</span>
          <span>Resource Manager</span>
        </div>
      </div>
    </el-menu-item>
    <el-menu-item index="0">Starships</el-menu-item>
    <el-menu-item index="1" disabled>Personnel</el-menu-item>
    <el-menu-item index="1" disabled>Droids</el-menu-item>
    <el-menu-item index="1" disabled>Equipment</el-menu-item>

    <div class="user-area">
      <el-menu-item v-loading="!user" element-loading-background="rgba(0,0,0,0)">
        <template v-if="user">
          <el-text type="primary" tag="b">
            <el-text class="user-title" type="info" tag="sup">{{ user.designation }}</el-text>
            {{ user.name }}
          </el-text>
          <el-avatar :src="user.pic_url" shape="square" :size="45"/>
        </template>
      </el-menu-item>
    </div>
  </el-menu>
</template>

<style lang="scss" scoped>
.app-title {
  display: flex;
  align-items: center;
  font-weight: bold;
  height: 55px;

  > div {
    display: flex;
    flex-direction: column;
    margin-left: .5rem;

    span {
      line-height: 1.5;
    }
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
</style>

<style lang="scss">
.user-area .el-loading-spinner {
  top: 1rem;
  right: 5rem;
}
</style>
