import { Component, OnInit } from '@angular/core';
import { InfiniteScrollCustomEvent, LoadingController } from '@ionic/angular';
import { NewsService } from 'src/app/services/news.service';

@Component({
  selector: 'app-football',
  templateUrl: './football.page.html',
  styleUrls: ['./football.page.scss'],
})

export class FootballPage implements OnInit {
  newsArticles: any[] = [];
  currentPage = 1;
  

  constructor(private newsService: NewsService, private loadingCtrl: LoadingController) { }

  ngOnInit() {
    this.loadArticles();
  }

  async loadArticles(event?: InfiniteScrollCustomEvent){
    const loading = await this.loadingCtrl.create({
      message: 'Loading...',
      spinner: 'bubbles',
    });

    await loading.present();

    this.newsService.getFootballNews(this.currentPage).subscribe((res) => {
      
      loading.dismiss();
      this.newsArticles.push(...res.articles)
      console.log(res);

      event?.target.complete();
    });
  }

  loadMore(event: any){
    this.currentPage++;
    this.loadArticles(event);
  }


}
