<template>
  <div id="dashboard" class="dashboard h-auto xl:h-full py-10 bg-gray-200 flex flex-col justify-center items-center">
    <ProfileViews/>
    <div class="flex flex-col w-screen xl:flex-row mt-5 lg:w-3/4  h-2/4 justify-center items-center bg-white shadow-lg rounded-lg">
      <ComparationChart class="w-screen lg:w-auto" />
      <ProfilesChart class=" w-screen lg:w-auto lg:mx-5 my-5"/>
    </div>
  </div>
</template>

<script>
import ProfileViews from '@/components/dashboard/ProfileViews.vue'
import ComparationChart from '@/components/dashboard/ComparationChart.vue'
import ProfilesChart from '@/components/dashboard/ProfilesChart.vue'

export default {
  name: 'Dashboard',
  components: {
    ProfileViews,
    ComparationChart,
    ProfilesChart
  }
};
</script>
