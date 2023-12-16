import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, type OnInit } from '@angular/core';
import { CloseIconComponent } from '@components/icons/CloseIcon/CloseIcon.component';
import { OpenBarIconComponent } from '@components/icons/OpenBarIcon/OpenBarIcon.component';

@Component({
  selector: 'nav-bar',
  standalone: true,
  imports: [CommonModule, CloseIconComponent, OpenBarIconComponent],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavBarComponent implements OnInit {
  protected toggleMenu: boolean = false;
  ngOnInit(): void {}
}
