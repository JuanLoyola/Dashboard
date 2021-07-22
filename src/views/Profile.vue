<template>
  <div class="bg-gray-200 h-screen">
    <ProfileBanner/>
    <div class="row">
      <!-- fixear responsive -->
    <UserCard/>
    <InformationCard/>
    </div>
  </div>
</template>

<script>
import ProfileBanner from '@/components/profile/ProfileBanner.vue'
import UserCard from '@/components/profile/UserCard.vue'
import InformationCard from '@/components/profile/InformationCard.vue'

export default {
  name: 'Profile',
  
  components: {
    ProfileBanner,
    UserCard,
    InformationCard
  }
}
</script>

<style lang="scss" scoped>
.row {
  display: flex;
  flex-flow: row wrap;
  justify-content: space-evenly;
}

@media screen and (max-width: 1024px) {
  .row {
    flex-flow: row;
  }
}

@media screen and (max-width: 800px) {
  .row {
    flex-flow: column;
  }
}
</style>