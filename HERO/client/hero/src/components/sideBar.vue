<template>
  <!-- 侧栏和主要内容 -->
  <div class="container-fluid">
    <div class="row">
      <div class="col-sm-3 col-md-2 sidebar">
        <ul class="nav nav-sidebar">
          <router-link active-class="active" tag='li' to="/heroList">
          <a>英雄列表</a>
          </router-link>
          <router-link active-class="active" tag='li' to="/weapon">
          <a>武器列表</a>
          </router-link>
          <router-link active-class="active" tag='li' to="/outfit">
          <a>装备列表</a>
          </router-link>
        </ul>
      </div>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {

};
</script>

<style>
</style>
