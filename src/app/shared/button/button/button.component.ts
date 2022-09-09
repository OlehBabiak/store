import {ChangeDetectionStrategy, Component, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styles: [
    'button { color:red; background: aquamarine;  border-radius: 2px; border: 2px solid black; height: 30px; width: 60px}'
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ButtonComponent implements OnInit {
  @Input() title=''
  constructor() { }

  ngOnInit(): void {
  }

}
