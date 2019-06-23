<template>
  <div id="app">
    <!-- 头部 -->
    <!-- <nav class="navbar navbar-inverse navbar-fixed-top">
      <div class="container-fluid">
        <div class="navbar-header">
          <button
            type="button"
            class="navbar-toggle collapsed"
            data-toggle="collapse"
            data-target="#navbar"
            aria-expanded="false"
            aria-controls="navbar"
          >
            <span class="sr-only">Toggle navigation</span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </button>
          <a class="navbar-brand" href="#">王者荣耀-英雄列表</a>
        </div>
      </div>
    </nav>-->
    <TopHead></TopHead>

    <!-- 侧栏和主要内容 -->
    <!-- <div class="container-fluid">
      <div class="row">
        <div class="col-sm-3 col-md-2 sidebar">
          <ul class="nav nav-sidebar">
            <li class="active">
              <a href="#">
                英雄列表
                <span class="sr-only">(current)</span>
              </a>
            </li>
            <li>
              <a href="#">武器列表</a>
            </li>
            <li>
              <a href="#">装备列表</a>
            </li>
          </ul>
        </div>
        <div class="col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main">
          <h1 class="page-header">HeroList</h1>
          <button>Add</button>
          <div class="table-responsive">
            <table class="table table-striped">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>name</th>
                  <th>gender</th>
                  <th>操作</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1,001</td>
                  <td>Lorem</td>
                  <td>ipsum</td>
                  <td>dolor</td>
                  <td>sit</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>-->
    <SideBar></SideBar>
  </div>
</template>

<script>
//注册组件
import TopHead from "@/components/topHead.vue";
import SideBar from "@/components/sideBar.vue";
export default {
  components: {
    TopHead: TopHead,
    SideBar: SideBar
  }
};
</script>

<style>
</style>
