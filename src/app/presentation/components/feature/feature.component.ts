import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  Input,
  type OnInit,
} from '@angular/core';

@Component({
  selector: 'gpt-feature',
  standalone: true,
  imports: [],
  template: `
    <div class="feature-container">
      <div class="feature-title">
        <div></div>
        <h3>{{ featureTitle }}</h3>
      </div>

      <div class="feature-text">
        <p>{{ featureText }}</p>
      </div>
    </div>
  `,
  styleUrl: './feature.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GptFeatureComponent implements OnInit {
  @Input({ required: true }) public featureTitle: string = '';
  @Input({ required: true }) public featureText: string = '';

  constructor() {}
  ngOnInit(): void {}
}
