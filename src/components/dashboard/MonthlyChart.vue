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
          borderColor: 'rgba(0, 0, 0, 0.5)',
          color: '#fff',
          backgroundColor: [
            '#ff6f88',
            '#44acfd',
            '#16cdc5'
          ],
          data: [60, 30, 10]
        }
      ]
    })
  }
})
</script>