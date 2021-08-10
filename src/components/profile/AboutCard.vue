<template>
  <div class="aboutCard mt-10 mb-10 shadow-l h-96 w-80" style="background:#2a2d3c">
    <div class="content flex flex-col justify-center items-center">
      <div class="row pt-5">
        <a href="#" class="About bg-transparent text-gray-400 font-normal py-2 px-4 border border-blue-500 rounded-full">About</a>
        <a href="#" class="ml-5 text-gray-400">Friends</a>
      </div>
      <br>
      <div class="flex-col w-60 flex justify-start items-start"
      v-for="(item, index) in item.info[0].variant" :key="index">
        <p class="item text-gray-400 text-sm">{{ item.item }}</p>
        <p class="text text-gray-300">{{ item.text }}</p>
        <hr class="separator w-full border-b-dashed mt-5 mb-5">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AboutCard',

  data () {
    return {
      item: {
        info:[
          {
            variant: [
              {
                item: 'Email address:',
                text:'juan@gmail.com'
              },
              {
                item:'Phone',
                text:'+54 011-223-344',
              },
              {
                item:'Mobile',
                text:'+54 011-334-455',
              },
              {
                item:'Birth Date:',
                text:'April 26, 1996',
              }
            ]
          }
        ]
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.aboutCard {
  border-radius: 9px;
}

.separator {
  border-color: #354057;
}

@media screen and (max-width: 800px) {
  .aboutCard {
    width: 20em;
    margin: 40px 10px 0 10px;
    font-size: 0.9rem;
  }
}
</style>