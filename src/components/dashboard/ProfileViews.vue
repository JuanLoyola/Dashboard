<template>
  <div class="profileViews py-3 h-1/3 flex flex-col-reverse justify-around items-center w-screen lg:h-screen lg:flex-row lg:w-3/4 xl:h-auto 2xl:flex-row">
    <MonthlyChart class="cursor-pointer bg-white mt-10 shadow-lg rounded-lg w-screen lg:w-auto lg:h-auto 2xl:w-auto"/>
    <div class="information bg-white shadow-lg lg:w-1/3 h-4/6 lg:h-1/3 py-20 flex flex-col justify-center items-center">
      <h1 class="font-semibold">Who has viewed your profile</h1>
      <p class="font-light text-gray-500">Profile views in the last 90 days</p>
      <div class="information-items w-3/4 mt-10 flex flex-row justify-around">
        <div>
        <p class="font-medium text-gray-500">Known profiles</p>
        <p class="font-bold">60</p>
        </div>
        <div class="mx-3">
        <p class="font-medium text-gray-500">Unknown profiles</p>
        <p class="font-bold">40</p>
        </div>
        <div>
        <p class="font-medium text-gray-500">Total profiles</p>
        <p class="font-bold">100</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import MonthlyChart from '@/components/dashboard/MonthlyChart.vue'

  export default {
    name:'ProfileViews',
    components: {
      MonthlyChart
    }
  }
</script>

<style lang="scss" scoped>
.information {
  border-radius: 9px;
}
</style>