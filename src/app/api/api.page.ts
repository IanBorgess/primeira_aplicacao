import { Component, OnInit } from '@angular/core';
import { ApiService, Post } from '../services/api';

@Component({
  selector: 'app-api',
  templateUrl: './api.page.html',
  styleUrls: ['./api.page.scss'],
  standalone: false,
})
export class ApiPage implements OnInit {
posts: Post[] = [];
  isLoading = true;


  constructor(private apiService: ApiService) {}

  ngOnInit() {
    this.carregarPosts();
  }

  carregarPosts() {
    this.isLoading = true;
    this.apiService.getPosts().subscribe(
      (data) => {
        this.posts = data;
        this.isLoading = false;
        console.log('Posts carregados!', this.posts);
      },
      (error) => {
        console.error('Erro ao buscar posts:', error);
        this.isLoading = false;
      }
    );
  }
}
