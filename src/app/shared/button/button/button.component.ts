import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styles: [
    'button { color:red; background: aquamarine; border: 1px solid black; border-radius: 2px; height: 40px; width: 60px }'
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ButtonComponent implements OnInit {
  @Input() title=''
  constructor() { }

  ngOnInit(): void {
  }

}
