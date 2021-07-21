<template>
  <div class="container">
    <div class="container_text">
      <p class="title">Profile</p>
      <p class="subtitle">Welcome back {{ name }}</p>
    </div>
  </div>
</template>

<script>

export default {
  name: 'ProfileBanner',

  data () {
    const firstName = this.$store.state.name
    return {
      name: firstName
    }
  }
}
</script>

<style lang="scss" scoped>
.container {
  min-width: 100%;
  height: 180px;
  background: #75a9c9;

  &_text {
    height: 10vh;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: flex-start;
    color: #f1f1f1;
    margin-left: 32px;

    .title {
      font-weight: 600;
      margin-bottom: 5px;
    }

    .subtitle {
      font-weight: 500;
    }
  }
}
</style>
