import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  Renderer2,
  type OnInit,
  Input,
} from '@angular/core';

@Component({
  selector: 'close-icon',
  standalone: true,
  imports: [],
  template: `<svg
    id="open-svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
  >
    <path
      id="open-path"
      d="M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12L19 6.41Z"
      fill="black"
    />
  </svg>`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CloseIconComponent implements OnInit {
  @Input() public color: string = '';
  @Input() public width = '24';
  @Input() public height = '24';

  constructor(private renderer: Renderer2) {}

  ngOnInit(): void {
    const path = document.getElementById('open-path');
    this.renderer.setStyle(path, 'fill', this.color);

    const svg = document.getElementById('open-svg');
    this.renderer.setStyle(svg, 'width', this.width);
    this.renderer.setStyle(svg, 'height', this.height);
  }
}
