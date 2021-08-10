<template>
  <div class="miniNav h-14 mt-10 mb-10 shadow-lg">
    <div class="row w-full pt-5">
      <a href="#" class="About bg-transparent text-gray-600 font-normal py-2 px-4 border border-blue-600 rounded-full">My Post</a>
      <a href="#" class="ml-5 text-gray-600">Timeline</a>
      <a href="#" class="ml-5 text-gray-600">Setting</a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MiniNavbar'
}
</script>

<style lang="scss" scoped>
.miniNav {
  width: 65em;
  border-radius: 9px;
  background: rgba(239, 240, 243, 0.6);
}

@media screen and (max-width: 1024px) {
  .miniNav {
    width: 45em;
    margin: 40px 10px 0 10px;
    font-size: 0.9rem;
  }
}

@media screen and (max-width: 800px) {
  .miniNav {
    width: 20em;
    margin: 40px 10px 0 10px;
    font-size: 0.9rem;
  }
}
</style>