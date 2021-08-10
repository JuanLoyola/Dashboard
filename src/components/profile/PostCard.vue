<template>
  <div class="post mt-20 shadow-lg text-gray-400" style="background:#2a2d3c">

      <div class="flex w-full justify-center items-center">
        <div class="w-full pt-4 rounded" style="background:#2a2d3c">
          <div class="mt-3 p-2 w-full">
            <textarea rows="3" class="border p-2 rounded w-full" placeholder="Type something..." v-model="newNameTitle"
          @keyup.enter="addPost" name="name" style="background:#354057"></textarea>
          </div>
          <div class="flex justify-between mx-3">
            <div><button class="px-4 py-1 bg-blue-400 text-white rounded font-light hover:bg-blue-500" @click="addPost">Submit</button></div>
            <div><a href="#">...</a></div>
          </div>
        </div>
    </div>

    <div 
          class="flex flex-row px-5 py-2 w-full text-gray-400"
          v-for="name in names"
          :key="name.id"
          >
          <div class="itemList flex w-full justify-between">
            <div class="names text-gray-400">
                {{ name.title }}
            </div>
            <div
              class="trash material-icons"
              @click="deletePost(name.id)"
              >
              <i class="fas fa-trash-alt"></i>
            </div>
          </div>
      </div>

  </div>
</template>

<script>
export default {
  name:'PostCard',
  data() {
    return {
      names: [
        {
          id: 1,
          title: 'Please try my comment box'
        }
      ]
    }
  },
  methods: {
    addPost() {
      let newName = {
          id: Date.now(),
          title: this.newNameTitle
      }
      this.names.push(newName)
      this.newNameTitle = ''
    },
    deletePost(id) {
        this.names = this.names.filter(names => names.id !== id)
    }
  }
}
</script>

<style lang="scss" scoped>
.post {
  width: 65em;
  border-radius: 9px;
}

@media screen and (max-width: 1024px) {
  .post {
    width: 45em;
    margin: 40px 10px 0 10px;
    font-size: 0.9rem;
  }
}

@media screen and (max-width: 768px) {
  .post {
    width: 20em;
    margin: 40px 10px 0 10px;
    font-size: 0.9rem;
  }
}
</style>