import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, type OnInit } from '@angular/core';
import { GptFeatureComponent } from '@components/feature/feature.component';

@Component({
  selector: 'gpt3-presentation-layout',
  standalone: true,
  imports: [CommonModule, GptFeatureComponent],
  templateUrl: './gpt3-presentation.component.html',
  styleUrl: './gpt3-presentation.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Gpt3PresentationComponent implements OnInit {
  ngOnInit(): void {}
}
