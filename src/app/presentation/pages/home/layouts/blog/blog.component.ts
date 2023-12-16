import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, type OnInit } from '@angular/core';
import { GptArticleComponent } from '@components/gpt-article/gpt-article.component';

@Component({
  selector: 'blog-layout',
  standalone: true,
  imports: [CommonModule, GptArticleComponent],
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BlogComponent implements OnInit {
  ngOnInit(): void {}
}
