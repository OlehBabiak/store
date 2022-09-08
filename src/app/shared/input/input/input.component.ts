import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styles: [
    'input {border: 1px solid black; border-radius: 2px; height: 30px; width: 200px }'
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class InputComponent implements OnInit {
  @Input() placeholder=''
  constructor() { }

  ngOnInit(): void {
  }

}
