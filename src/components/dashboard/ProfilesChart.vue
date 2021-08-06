<script>
import { defineComponent } from 'vue'
import { Line } from 'vue3-chart-v2'

export default defineComponent({
  name: 'ProfilesChart',
  extends: Line,
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
          label: 'One',
          data: [11, 13, 19, 20, 25],
          fill: false,
          backgroundColor: 'rgba(255, 99, 132, 0.2)',
          borderColor: 'rgb(255, 99, 132)',
          pointBackgroundColor: 'rgb(255, 99, 132)',
          pointBorderColor: '#fff',
          pointHoverBackgroundColor: '#fff',
          pointHoverBorderColor: 'rgb(255, 99, 132)'
        },
        {
          label: 'Two',
          data: [11, 15, 17, 25, 24],
          fill: false,
          backgroundColor: 'rgba(54, 162, 235, 0.2)',
          borderColor: 'rgb(54, 162, 235)',
          pointBackgroundColor: 'rgb(54, 162, 235)',
          pointBorderColor: '#fff',
          pointHoverBackgroundColor: '#fff',
          pointHoverBorderColor: 'rgb(54, 162, 235)'
        },
        {
          label: 'Three',
          data: [11, 22, 21, 23, 20],
          fill: false,
          backgroundColor: 'rgba(255, 99, 132, 0.2)',
          borderColor: 'cyan',
          pointBackgroundColor: 'cyan',
          pointBorderColor: '#fff',
          pointHoverBackgroundColor: '#fff',
          pointHoverBorderColor: 'rgb(255, 99, 132)'
        },
        {
          label: 'Four',
          data: [11, 20, 18, 22, 26],
          fill: false,
          backgroundColor: 'rgba(54, 162, 235, 0.2)',
          borderColor: 'orange',
          pointBackgroundColor: 'orange',
          pointBorderColor: '#fff',
          pointHoverBackgroundColor: '#fff',
          pointHoverBorderColor: 'rgb(54, 162, 235)'
        }
      ]
    })
  }
})
</script>