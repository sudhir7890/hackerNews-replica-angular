import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {HackerNewsApiService} from '../../hacker-news-api.service';
import {Router} from '@angular/router';


@Component({
  selector: 'app-app-row',
  templateUrl: './app-row.component.html',
  styleUrls: ['./app-row.component.css']
})
export class AppRowComponent implements OnInit {

  @Input()
  id: string;

  @Input()
  index: number;

  @Input()
  isCommentPage: boolean;

  @Output()
  disable = new EventEmitter();

  @Output()
  listFull = new EventEmitter();

  isPoll: boolean;

  new: any = {};

  discuss: string;

  constructor(private api: HackerNewsApiService, private router: Router) {
  }

  ngOnInit() {
    this.api.getItem(this.id).subscribe(r => {
      this.new = r;
      if (r === null) {
        this.disable.emit({id: this.id});
        return;
      }
      this.isPoll = this.new.type === 'poll';
      const hasKids = this.new.descendants !== undefined && this.new.descendants !== null;
      this.discuss = (!hasKids || this.new.descendants === 0) ?
        'discuss' : this.new.descendants + ' comment' + (this.new.descendants === 1 ? '' : 's');
      const show = (this.new.deleted !== true) && (this.new.dead !== true);
      if (show === false) {
        this.disable.emit({id: this.id});
      } else if (this.index % 30 === 0) {
        this.listFull.emit();
      }
    });
  }


}
