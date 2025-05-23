import { Component, AfterViewInit } from '@angular/core';
import Chart from 'chart.js/auto';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements AfterViewInit {
  totalPosts = 10;
  recentPosts = [
    { titulo: 'Poema 1', data: new Date() },
    { titulo: 'Poema 2', data: new Date() }
  ];

  ngAfterViewInit(): void {
    const ctx = document.getElementById('postsChart') as HTMLCanvasElement;
    new Chart(ctx, {
      type: 'bar',
      data: {
        labels: ['Poema 1', 'Poema 2'],
        datasets: [{
          label: 'Postagens',
          data: [3, 7],
          backgroundColor: 'rgb(208, 114, 0)'
        }]
      }
    });
  }
}
