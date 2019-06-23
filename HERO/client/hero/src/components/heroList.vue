<template>
  <div class="col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main">
    <h1 class="page-header">HeroList</h1>
    <button type="button" class="btn btn-success" @click.prevent="Add">Add</button>
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
          <tr v-for="(item,index) in dataList" :key="index">
            <td>{{item.id}}</td>
            <td>{{item.name}}</td>
            <td>{{item.gender}}</td>
            <td>
              <a href="#" @click.prevent="del(item.id)">删除</a>
              <a href="#" @click.prevent="edit(item.id)">编辑</a>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      url: "http://localhost:3000/heros",
      dataList: []
    };
  },
  methods: {
    //获取后台数据：
    getData() {
      this.$http({
        method: "get",
        url: this.url
      }).then(res => {
        this.dataList = res.data;
      });
    },
    //点击Add跳转到添加页面
    Add() {
      //跳转页面：
      this.$router.push("/add");
    },
    //删除数据：
    del(id) {
      if (confirm("确定删除吗？")) {
        this.$http({
          method: "delete",
          url: `${this.url}/${id}`
        }).then(res => {
          // console.log(res);
          if (res.status === 200) {
            this.getData();
          }
        });
      }
    },
    //编辑数据：
    edit(id) {
      this.$router.push("/edit/" + id);
    }
  },
  mounted() {
    this.getData();
  }
};
</script>

<style>
</style>
