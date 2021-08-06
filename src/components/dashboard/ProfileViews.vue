<template>
  <div class="profileViews py-3 h-1/3 flex flex-col-reverse justify-center items-center w-screen lg:h-screen lg:flex-row lg:justify-evenly 2xl:justify-between 2xl:w-3/4 lg:w-screen xl:h-auto 2xl:flex-row">
    <MonthlyChart class="cursor-pointer bg-white mt-10 shadow-lg rounded-lg w-screen lg:w-1/3 lg:h-1/3 2xl:w-auto" style="background: #2a2d3c"/>
    <PolarChart class="cursor-pointer bg-white mt-10 shadow-lg rounded-lg w-screen lg:hidden 2xl:w-auto 2xl:flex lg:w-1/3" style="background: #2a2d3c"/>

    <div class="information bg-white shadow-lg h-4/6 lg:h-1/3 flex flex-col justify-center items-center">
      <h1 class="font-semibold">Who has viewed your profile</h1>
      <p class="font-light">Profile views in the last 90 days</p>

      <div class="information-items w-3/4 mt-10 flex flex-row justify-around">
        <div>
        <p class="font-medium">Known profiles</p>
        <p class="font-bold">60</p>
        </div>
        <div class="mx-3">
        <p class="font-medium">Unknown profiles</p>
        <p class="font-bold">40</p>
        </div>
        <div>
        <p class="font-medium">Total profiles</p>
        <p class="font-bold">100</p>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
import MonthlyChart from '@/components/dashboard/MonthlyChart.vue'
import PolarChart from '@/components/dashboard/PolarChart.vue'

  export default {
    name:'ProfileViews',
    components: {
      MonthlyChart,
      PolarChart
    }
  }
</script>

<style lang="scss" scoped>
.information {
  border-radius: 9px;
  background: #2a2d3c;
  color: #f1f1f1;
}
</style>