
<template>
  <div class="headers">
    <img class="header-img" alt="admin" src="./../../assets/img/user.png">
  </div>
</template>
<script>
export default {
  name: "headers"
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.headers {
  height: 60px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  .header-img {
    height: 24px;
    width: 24px;
  }
}
</style>