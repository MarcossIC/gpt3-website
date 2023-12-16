import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input, Renderer2, type OnInit, ElementRef } from '@angular/core';

@Component({
  selector: 'open-bar-icon',
  standalone: true,
  imports: [],
  template: `<svg
    id="close-svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
  >
    <path
      id="close-path"
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M3 8V6H21V8H3ZM3 13H21V11H3V13ZM3 18H21V16H3V18Z"
      fill="black"
    />
  </svg>`,
  styles: `
  svg {
    fill: {{color}};
  }`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class OpenBarIconComponent implements OnInit {
  @Input() public color: string = '';
  @Input() public width = '24';
  @Input() public height = '24';

  constructor(private renderer: Renderer2) {}

  ngOnInit(): void {
    const path = document.getElementById('close-path');
    this.renderer.setStyle(path, 'fill', this.color);

    const svg = document.getElementById('close-svg');
    this.renderer.setStyle(svg, 'width', this.width);
    this.renderer.setStyle(svg, 'height', this.height);
  }
}
