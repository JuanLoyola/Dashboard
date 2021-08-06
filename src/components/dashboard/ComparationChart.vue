<script>
import { defineComponent } from 'vue'
import { Bar } from 'vue3-chart-v2'

export default defineComponent({
  name: 'ComparationChart',
  extends: Bar,
  mounted () {
    this.renderChart({
      labels: ['Orientation stage', 'Comparison stage', 'Decision stage'],
      datasets: [
        {
          label: 'Comparation Chart',
          borderColor: 'rgba(255, 255, 255, 0.9)',
          color: '#666',
          backgroundColor: [
            'rgba(255, 99, 132, 0.5)',
            'rgba(255, 159, 64, 0.5)',
            'rgba(255, 205, 86, 0.5)',
          ],
          data: [56, 50, 45]
        }
      ]
    })
  }
})
</script>