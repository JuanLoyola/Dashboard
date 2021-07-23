<script>
import { defineComponent } from 'vue'
import { Radar } from 'vue3-chart-v2'

export default defineComponent({
  name: 'ProfilesChart',
  extends: Radar,
  mounted () {
    this.renderChart({
      labels: [
        'Sleeping',
        'Designing',
        'Coding',
        'Cycling',
        'Running'
      ],
      datasets: [
        {
          label: 'My First Dataset',
          data: [65, 59, 90, 81, 56],
          fill: true,
          backgroundColor: 'rgba(255, 99, 132, 0.2)',
          borderColor: 'rgb(255, 99, 132)',
          pointBackgroundColor: 'rgb(255, 99, 132)',
          pointBorderColor: '#fff',
          pointHoverBackgroundColor: '#fff',
          pointHoverBorderColor: 'rgb(255, 99, 132)'
        },
        {
          label: 'My Second Dataset',
          data: [30, 48, 70, 19, 96],
          fill: true,
          backgroundColor: 'rgba(54, 162, 235, 0.2)',
          borderColor: 'rgb(54, 162, 235)',
          pointBackgroundColor: 'rgb(54, 162, 235)',
          pointBorderColor: '#fff',
          pointHoverBackgroundColor: '#fff',
          pointHoverBorderColor: 'rgb(54, 162, 235)'
        }
      ]
    })
  }
})
</script>