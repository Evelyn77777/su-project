<template>
  <div class="col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main">
    <h1 class="page-header">Add List</h1>
    <div class="form-group">
      <label for="inputEmail3" class="col-sm-2 control-label">Name</label>
      <div class="col-sm-10">
        <input type="email"  id="inputEmail3" v-model='addHeros.name'>
      </div>
    </div>
    <div class="form-group radio">
      <label for="inputEmail3" class="col-sm-2 control-label">Gender</label>
      <div class="col-sm-10">
        <input type="radio" id="inputEmail3" v-model='addHeros.gender' value="男">男&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <input
          type="radio"
          id="inputEmail3"
          v-model='addHeros.gender'
          value="女"
        >女
      </div>
    </div>
    <button type="button" class="btn btn-success" @click.prevent="Sub">添加</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      addHeros: {
        name: "",
        gender: ""
      }
    };
  },
  methods: {
    Sub() {
      this.$http({
        method: "post",
        url: "http://localhost:3000/heros",
        data:this.addHeros
      }).then(res=>{
          console.log(res);
        //解构：
        const {status}=res
        if(status===201){
            //添加成功跳转到herolist页面
            this.$router.push('/heroList')
        }
      })
    }
  }
};
</script>

<style>
.form-group {
  width: 500px;
}
</style>
