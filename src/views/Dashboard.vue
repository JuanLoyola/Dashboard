<template>
  <div id="dashboard" class="dashboard h-auto xl:h-full py-10 xl:pt-10 bg-gray-200 flex flex-col justify-center items-center">
    <ProfileViews/>
    <div class="flex flex-col w-screen h-2/4 mt-5 lg:h-auto lg:flex-row lg:mt-20 lg:w-3/4 py-10 xl:mt-10 xl:flex-row 2xl:flex-row justify-center items-center bg-white shadow-lg rounded-lg">
      <ComparationChart class="w-screen lg:w-1/3 xl:w-1/3" />
      <ProfilesChart class=" w-screen lg:w-1/3 xl:w-1/3"/>
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
