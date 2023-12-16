import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, type OnInit } from '@angular/core';
import { GptFeatureComponent } from '@components/feature/feature.component';

@Component({
  selector: 'features-layout',
  standalone: true,
  imports: [CommonModule, GptFeatureComponent],
  templateUrl: './features.component.html',
  styleUrl: './features.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FeaturesComponent implements OnInit {
  ngOnInit(): void {}
}
