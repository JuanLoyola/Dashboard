<script>
import { defineComponent } from 'vue'
import { PolarArea } from 'vue3-chart-v2'

export default defineComponent({
  name: 'PolarChart',
  extends: PolarArea,
  mounted () {
    this.renderChart({
      labels: ['Orientation stage', 'Comparison stage', 'Decision stage'],
      datasets: [
        {
          label: 'Comparation Chart',
          borderColor: 'rgba(0, 0, 0, 0.5)',
          color: '#333',
          backgroundColor: [
            '#16cdc5',
            '#ff6f88',
            '#44acfd'
          ],
          data: [11, 16, 15]
        }
      ]
    })
  }
})
</script>