import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-poll',
  templateUrl: './poll.component.html',
  styleUrls: ['./poll.component.css']
})
export class PollComponent implements OnInit {


  @Input()
  item: any = {};

  constructor() { }

  ngOnInit() {
  }

}