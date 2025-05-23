import { Component, OnInit } from '@angular/core';
import { PostService } from '../../services/post.service';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  public chart: any;

  constructor(private postService: PostService) {}

  ngOnInit(): void {
    this.loadDashboardData();
  }

  loadDashboardData(): void {
    // Carregar os dados de postagens e configurar o gráfico
    this.postService.getAllPosts().subscribe(posts => {
      let labels = posts.map(post => post.usuario.nome);
      let data = posts.map(post => post.id);

      this.chart = new Chart('canvas', {
        type: 'bar',
        data: {
          labels: labels,
          datasets: [{
            label: 'Posts por Autor',
            data: data,
            backgroundColor: '#42A5F5'
          }]
        }
      });
    });
  }
}
