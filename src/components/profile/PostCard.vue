<template>
  <div class="post bg-white mt-20 shadow-lg">

      <div class="flex w-full justify-center items-center">
        <div class="w-full bg-white p-2 pt-4 rounded">
          <div class="mt-3 p-3 w-full">
            <textarea rows="3" class="border p-2 rounded w-full" placeholder="Type something..." v-model="newNameTitle"
          @keyup.enter="addPost" name="name"></textarea>
          </div>
          <div class="flex justify-between mx-3">
            <div><button class="px-4 py-1 bg-blue-500 text-white rounded font-light hover:bg-blue-600" @click="addPost">Submit</button></div>
            <div><a href="#">...</a></div>
          </div>
        </div>
    </div>

    <div 
          class="flex flex-row px-5 py-2 w-full"
          v-for="name in names"
          :key="name.id">
          <div class="itemList flex w-full justify-between">
            <div class="names">
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

@media screen and (max-width: 800px) {
  .post {
    width: 23.5em;
    margin: 40px 10px 0 10px;
    font-size: 0.9rem;
  }
}
</style>