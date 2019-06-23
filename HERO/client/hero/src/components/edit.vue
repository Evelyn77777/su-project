<template>
  <div class="col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main">
    <h1 class="page-header">Edit List</h1>
    <div class="form-group">
      <label for="inputEmail3" class="col-sm-2 control-label">Name</label>
      <div class="col-sm-10">
        <input type="email" id="inputEmail3" v-model="obj.name">
      </div>
    </div>
    <div class="form-group radio">
      <label for="inputEmail3" class="col-sm-2 control-label">Gender</label>
      <div class="col-sm-10">
        <input type="radio" id="inputEmail3" v-model="obj.gender" value="男">男&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <input
          type="radio"
          id="inputEmail3"
          v-model="obj.gender"
          value="女"
        >女
      </div>
    </div>
    <button type="button" class="btn btn-success" @click.prevent="edit">修改</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      url: "http://localhost:3000/heros",
      obj: {
        name: "",
        gender: ""
      }
    };
  },
  methods: {
      getdata(){
          //先获取id:
          const id=this.$route.params.id;
        //   console.log(id);
          this.$http({
              method:'get',
              url:`${this.url}/${id}`,
              data:this.obj
          }).then(res=>{
            //   console.log(res);
            if(res.status===200){
                this.obj.name=res.data.name;
                this.obj.gender=res.data.gender
            }
              
          })
          
      },
      edit(){
          //先获取id:
          const id=this.$route.params.id;
          this.$http({
              method:'put',
              url:`${this.url}/${id}`,
              data:this.obj
          }).then(res=>{
            //   console.log(res);
            if(res.status===200){
                this.$router.push('/heroList')
            }
              
          })
      }
  },
  mounted() {
      this.getdata()
  },
};
</script>

<style>
</style>
