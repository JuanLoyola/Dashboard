<template>
  <div class="UserCard bg-white -mt-20 ml-8 shadow-lg">
    <div class="row flex w-full h-full flex-row mr-2 justify-items-center items-center">
      <div class="imgBox w-1/2 flex justify-center">
        <img class="image w-1/2 h-full rounded-full bg-white shadow-lg border-transparent cursor-pointer" src="@/assets/profile.png" alt="Profile picture">
      </div>

      <div class="infoBox flex flex-col justify-items-start items-start">
        <p class="fullName font-semibold">{{name}} {{lastname}}</p>
        <p class="role">{{role}}</p>
        <p class="adress mt-3 text-gray-500">{{adress}}</p>
        <p class="adressTwo text-gray-500">{{adressTwo}}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'UserCard',

  data () {
    const firstName = this.$store.state.name
    const lastName = this.$store.state.lastName
    let role = this.$store.state.role
    let adress = this.$store.state.adress
    let adressTwo = this.$store.state.adressTwo
    return {
      name: firstName,
      lastname: lastName,
      role: role,
      adress: adress,
      adressTwo: adressTwo
    }
  }
}
</script>

<style lang="scss" scoped>
.UserCard {
  width:  750px;
  height: 350px;
  border-radius: 9px;
  .image:hover {
    filter:contrast(0.7);
    border: dashed 1px rgb(165, 163, 163);
  }
}
</style>