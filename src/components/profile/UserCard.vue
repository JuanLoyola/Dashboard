<template>
  <div class="UserCard -mt-20 shadow-lg" style="background:#2a2d3c">
    <div class="row flex w-full h-full flex-row mr-2 justify-items-center items-center">
      <div class="imgBox w-1/2 flex justify-center">
        <img class="image w-2/3 h-full rounded-full bg-white shadow-lg border-transparent cursor-pointer" src="@/assets/profile.png" alt="Profile picture">
      </div>

      <div class="infoBox flex flex-col justify-items-start items-start">
        <p class="fullName font-semibold text-gray-300">{{name}} {{lastname}}</p>
        <p class="role text-gray-400">{{role}}</p>
        <p class="adress mt-3 text-gray-500">{{adress}}</p>
        <p class="adressTwo mb-5 text-gray-500">{{adressTwo}}</p>

        <div class="interactions">
          <a href="#" class="follow bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full mr-3">Follow</a>
          <a href="#" class="message bg-transparent hover:bg-blue-500 text-blue-500 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded-full">Message</a>
        </div>
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
  width:  850px;
  height: 350px;
  border-radius: 9px;
  font-size: 0.9rem;
  .image:hover {
    filter:contrast(0.7);
    border: dashed 1px rgb(165, 163, 163);
  }
}

@media screen and (max-width: 1024px) {
  .UserCard {
    width: 50.5em;
    margin: -40px 10px 0 10px;
    font-size: 0.9rem;

    .row {
      flex-direction: column;
        .imgBox {
          width: 10em;
          height: 10em;
          margin-bottom: 10px;
  
          .image {
            width: 100%;
            height: 100%;
          }
        }
      .infoBox {
        width: 100%;
        align-items: center;
      }
    }
  }
}

@media screen and (max-width: 800px) {
  .UserCard {
    width: 23.5em;
    margin: -40px 10px 0 10px;
    font-size: 0.9rem;

    .row {
      flex-direction: column;
        .imgBox {
          width: 10em;
          height: 10em;
          margin-bottom: 10px;
  
          .image {
            width: 100%;
            height: 100%;
          }
        }
      .infoBox {
        width: 100%;
        align-items: center;
      }
    }
  }
}
</style>