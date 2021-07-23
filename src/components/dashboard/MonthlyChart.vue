<script>
import { defineComponent } from 'vue'
import { Doughnut } from 'vue3-chart-v2'

export default defineComponent({
  name: 'MonthlyChart',
  extends: Doughnut,
  mounted () {
    this.renderChart({
      labels: ['IT Recruiters', 'Developers', 'Others'],
      datasets: [
        {
          label: 'Profile views',
          backgroundColor: ['#f87979','#5073d4','#45e237'],
          data: [60, 30, 10]
        }
      ]
    })
  }
})
</script>