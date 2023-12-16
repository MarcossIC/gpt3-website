import { CommonModule, NgOptimizedImage } from '@angular/common';
import { ChangeDetectionStrategy, Component, type OnInit } from '@angular/core';

@Component({
  selector: 'brands-logos',
  standalone: true,
  imports: [NgOptimizedImage],
  template: `
    <section class="section-padding">
      <picture>
        <img src="../../../../assets/google.webp" alt="Google Logo" />
      </picture>
      <picture
        ><img src="../../../../assets/slack.webp" alt="Slack Logo" />
      </picture>
      <picture
        ><img src="../../../../assets/atlassian.webp" alt="Atlassian Logo" />
      </picture>
      <picture
        ><img src="../../../../assets/dropbox.webp" alt="Dropbox Logo" />
      </picture>
      <picture
        ><img src="../../../../assets/shopify.webp" alt="Shopify Logo" />
      </picture>
    </section>
  `,
  styles: `
    section{
      display: flex;
      align-items: center;
      justify-content: center;
      flex-wrap: wrap;
    }

    section picture {
      flex: 1;
      max-width: 150px;
      max-width: 120px;
      margin: 1rem;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    section picture {
      aspec-ration: 4/1;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BrandsComponent implements OnInit {
  ngOnInit(): void {}
}
