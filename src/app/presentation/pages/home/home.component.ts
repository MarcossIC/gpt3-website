import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, type OnInit } from '@angular/core';
import { HeroComponent } from './layouts/hero/hero.component';
import { NavBarComponent } from '../../components/nav-bar/nav-bar.component';
import { BrandsComponent } from '@components/brands/brands.component';
import { Gpt3PresentationComponent } from './layouts/gpt3-presentation/gpt3-presentation.component';
import { FeaturesComponent } from './layouts/features/features.component';
import { PosibilityComponent } from './layouts/posibility/posibility.component';
import { CtaComponent } from './layouts/cta/cta.component';
import { GptArticleComponent } from '@components/gpt-article/gpt-article.component';
import { BlogComponent } from './layouts/blog/blog.component';
import { FooterComponent } from '@components/footer/footer.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    HeroComponent,
    NavBarComponent,
    BrandsComponent,
    Gpt3PresentationComponent,
    FeaturesComponent,
    PosibilityComponent,
    CtaComponent,
    BlogComponent,
    FooterComponent,
  ],
  template: `
    <div class="home">
      <div class="relative">
        <div class="z-10 relative">
          <nav-bar />
          <hero-layout />
        </div>
        <div class="blur-one"></div>
        <div class="blur-two"></div>
      </div>
      <brands-logos />
      <gpt3-presentation-layout />
      <features-layout />
      <posibility-layout />
      <cta-layout />
      <blog-layout />
      <gpt-footer />
    </div>
  `,
  styles: `
  .home{
    max-width: 1800px;
    display: flex;
    flex-direction: column;
    margin-inline: auto;
  }
    .blur-one {
      width: 55rem;
      height: 59rem;
      border-radius: 100%;
      background: #053d79a6;
      filter: blur(268px);
      z-index: 5;
      position: absolute;
      top: -47%;
      left: -30%;
    }

    .blur-two {
      width: 44.5rem;
      height: 31rem;
      border-radius: 100%;
      background: #053d79;
      filter: blur(255px);
      z-index: 5;
      position: absolute;
      top: 56%;
      right: -28%;
    }

  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent implements OnInit {
  ngOnInit(): void {}
}
