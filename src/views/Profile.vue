<template>
  <div class="bg-gray-200 h-screen">
    <ProfileBanner/>
    <div class="row">
    <UserCard/>
    </div>
  </div>
</template>

<script>
import ProfileBanner from '@/components/profile/ProfileBanner.vue'
import UserCard from '@/components/profile/UserCard.vue'

export default {
  name: 'Profile',
  
  components: {
    ProfileBanner,
    UserCard
  }
}
</script>

<style lang="scss" scoped>
</style>