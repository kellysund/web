import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-about-the-firm',
  templateUrl: './about-the-firm.component.html',
  styleUrls: ['./about-the-firm.component.scss']
})
export class AboutTheFirmComponent implements OnInit {
  @Input()
  short = false;

  constructor() { }

  ngOnInit(): void {
  }

}
