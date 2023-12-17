import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  Input,
  type OnInit,
} from '@angular/core';

@Component({
  selector: 'gpt-article',
  standalone: true,
  imports: [CommonModule],
  template: `
    <article>
      <picture>
        <img
          src="{{ imgUrl }}"
          loading="lazy"
          fetchpriority="auto"
          alt="Article cover image"
          role="img"
        />
      </picture>
      <div class="article-content">
        <div>
          <p>{{ date }}</p>
          <h3>{{ text }}</h3>
        </div>
        <a>Read Full Article</a>
      </div>
    </article>
  `,
  styles: `
    article{
      width: 100%;
      height: 100%;

      display: flex;
      flex-direction: column;
      background-color: var(--color-blog);
          border-bottom-left-radius: 0.5rem;
    border-bottom-right-radius: 0.5rem;
    }
    article .article-content {
      display: flex;
      flex-grow: 1;
      flex-shrink: 1;
      flex-direction: column;
      justify-content: space-between;
      align-items: flex-start;
      padding: 1rem 1.5rem;
      height: 100%;
    }
    article .article-content p {
      color: #fff;
      font-family: var(--font-family);
      font-size: 12px;
      font-weight: 700;
      line-height: 34.95px;
    }
     article .article-content h3 {
      color: #fff;
      font-family: var(--font-family);
      line-height: 30.29px;
      font-size: 26px;
      font-weight: 700;
      margin-block-end: 4rem;
    }
    article .article-content a {
      color: #fff;
      font-family: var(--font-family);
      justify-self: flex-end;
      font-weight: 700;
      line-height: 34.95px;
      font-size: 13px;
      word-spacing: 1px;
      cursor: pointer;
    }
    article picture {
      width: 100%;
      height: 100%;
      background: var(--color-bg);
    max-height: 350px;
    overflow: hidden;

    }

    article img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      border-top-left-radius: 2rem;
      transition: transform .3s ease;
      cursor: pointer;
    }

    article img:hover {
      transform: scale(1.15);
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GptArticleComponent implements OnInit {
  @Input() public date: string = '';
  @Input() public text: string = '';
  @Input() public imgUrl: string = '';

  ngOnInit(): void {}
}
