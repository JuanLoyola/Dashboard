<template>
  <div class="UserCard bg-white -mt-20 ml-8">
    <div class="row">
      <div class="imgBox">
        <img src="#" alt="Profile picture">
      </div>

      <div class="infoB">
        <p class="fullName"></p>
        <p class="role"></p>
        <p class="adress"></p>
        <p class="adressTwo"></p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'UserCard'
}
</script>

<style lang="scss" scoped>
.UserCard {
  width:  750px;
  height: 350px;
  border-radius: 9px;
}
</style>