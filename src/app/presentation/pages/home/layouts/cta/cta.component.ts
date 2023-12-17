import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  Renderer2,
  type OnInit,
  ElementRef,
} from '@angular/core';

@Component({
  selector: 'cta-layout',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cta.component.html',
  styleUrl: './cta.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CtaComponent implements OnInit {
  constructor(private renderer: Renderer2, private el: ElementRef) {}
  ngOnInit(): void {}

  radialHover(event: MouseEvent) {
    const buttonElement = event.currentTarget as HTMLElement;

    this.renderer.setStyle(
      buttonElement,
      'background',
      `radial-gradient(circle at ${event.offsetX }px ${
        event.offsetY
      }px, rgba(255, 164, 0, 0.99) 3%, rgba(169, 11, 203, 1) 100%) no-repeat`
    );
  }

  cleanRadial(event: MouseEvent) {
    const buttonElement = event.currentTarget as HTMLElement;


    this.renderer.setStyle(buttonElement, 'background', `#000`);
  }
}
