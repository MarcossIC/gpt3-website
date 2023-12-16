import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, type OnInit } from '@angular/core';

@Component({
  selector: 'cta-layout',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './cta.component.html',
  styleUrl: './cta.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CtaComponent implements OnInit {

  ngOnInit(): void { }

}
