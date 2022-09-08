// @ts-ignore
import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styles: [
    'input {border: 1px solid black;height: 30px; width: 300px; font-size: 25px}'
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})


export class InputComponent implements OnInit {
  @Input()
  placeholder =  ''
  value = ''

  constructor() {
  }

  ngOnInit(): void {
  }

  onKeyUp(value: string) {
    this.value = value
  }
}
