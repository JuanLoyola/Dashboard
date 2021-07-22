<template>
  <div class="bg-gray-200 h-full">
    <ProfileBanner/>
    <div class="row">
    <UserCard/>
    <InformationCard/>
    </div>
    <div class="section-two">
      <AboutCard/>
      <div class="col mt-0 mb-10">
        <MiniNavbar/>
        <PostCard/>
      </div>
    </div>
  </div>
</template>

<script>
import ProfileBanner from '@/components/profile/ProfileBanner.vue'
import UserCard from '@/components/profile/UserCard.vue'
import InformationCard from '@/components/profile/InformationCard.vue'
import AboutCard from '@/components/profile/AboutCard.vue'
import PostCard from '@/components/profile/PostCard.vue'
import MiniNavbar from '@/components/profile/MiniNavbar.vue'

export default {
  name: 'Profile',
  
  components: {
    ProfileBanner,
    UserCard,
    InformationCard,
    AboutCard,
    PostCard,
    MiniNavbar
  }
}
</script>

<style lang="scss" scoped>
.row {
  display: flex;
  flex-flow: row wrap;
  justify-content: space-evenly;
  align-items: center;
}

.section-two {
  display: flex;
  flex-flow: row wrap;
  justify-content: space-evenly;
  align-items: center;
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