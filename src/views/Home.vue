<template>
  <div class="home">
    <el-container>
      <el-aside width="200px">
        <Asider/>
      </el-aside>
      <el-container>
        <el-header>
          <Header/>
        </el-header>
        <el-main>
          
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>
<style lang="scss">
.el-header {
  // background-color: #b3c0d1;
  color: #333;
  text-align: right;
  line-height: 60px;
}

.el-aside {
  // background: #002140;
  color: #333;
  text-align: center;
  line-height: 200px;
}

.el-main {
  background-color: #e9eef3;
  color: #333;
  text-align: center;
  line-height: 160px;
}

.home {
  min-height: 100vh;
  .el-container {
    min-height: 100vh;
  }
}
</style>

<script>
import Asider from "@/components/global/Asider.vue";
import Header from "@/components/global/Header.vue";

export default {
  name: "home",
  components: {
    Asider
  }
  // created() {
  //   console.log(process.env.BASE_URL);
  // }
};
</script>

