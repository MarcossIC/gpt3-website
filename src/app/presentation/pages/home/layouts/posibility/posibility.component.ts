import { CommonModule, NgOptimizedImage } from '@angular/common';
import { ChangeDetectionStrategy, Component, type OnInit } from '@angular/core';

@Component({
  selector: 'posibility-layout',
  standalone: true,
  imports: [
    CommonModule, NgOptimizedImage
  ],
  templateUrl: './posibility.component.html',
  styleUrl: './posibility.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PosibilityComponent implements OnInit {

  ngOnInit(): void { }

}
