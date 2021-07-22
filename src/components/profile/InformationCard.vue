<template>
  <div class="informationCard bg-white -mt-20 mr-8 shadow-lg">

    <div class="
      container-card
      flex flex-col
      justify-evenly
      h-3/6
      "
      v-for="(item, index) in items.info[0].variant" :key="index"
      >
      <i :class="item.icon"></i>
      <p class="quantity font-bold text-blue-600 hover:text-blue-400 cursor-pointer">{{ item.quantity }}</p>
      <p class="tag font-medium">{{ item.tag }}</p>
    </div>

  </div>
</template>

<script>
export default {
  name: 'InformationCard',

  data () {
    return {
      items: {
        info: [
          {
            variant: [
              {
                icon:'fas fa-camera',
                quantity:'243',
                tag: 'Shots View'
              },
              {
                icon:'fas fa-thumbs-up',
                quantity:'404',
                tag: 'Likes'
              },
              {
                icon:'fas fa-comments',
                quantity:'324',
                tag: 'Comments'
              },
              {
                icon:'fas fa-users',
                quantity:'2380',
                tag: 'Profile views'
              },
              {
                icon:'fas fa-desktop',
                quantity:'251',
                tag: 'Website View'
              },
              {
                icon:'fas fa-paperclip',
                quantity:'52',
                tag: 'Attachment'
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
.informationCard {
  width:  30em;
  height: 350px;
  border-radius: 9px;
  display: flex;
  flex-flow: row wrap;
  justify-content: center;

  .container-card {
    width: calc(5% * 6);
  }
}

@media screen and (max-width: 1024px) {
  .informationCard {
    width: 23.5em;
    margin: -40px 10px 0 10px;
    font-size: 0.9rem;
  }
}

@media screen and (max-width: 800px) {
  .informationCard {
    width: 23.5em;
    margin: 30px 10px 0 10px;
    font-size: 0.9rem;
  }
}
</style>