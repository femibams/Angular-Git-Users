import { Component, OnInit, Input } from '@angular/core';
import { GitUsers } from '../gitusers';

@Component({
  selector: 'app-gituser-detail',
  templateUrl: './gituser-detail.component.html',
  styleUrls: ['./gituser-detail.component.css']
})
export class GituserDetailComponent implements OnInit {
  @Input() user: GitUsers;

  constructor() { }

  ngOnInit() {
  }

}
