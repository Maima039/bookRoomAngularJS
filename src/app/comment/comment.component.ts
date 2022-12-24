import {Component, OnInit} from '@angular/core';
import {pluck} from "rxjs";
import {CommentService} from "./comment.service";
import {ActivatedRoute} from "@angular/router";
import {Comments} from "./comment";

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit{
// 非实时
  comments$ = this.commentService.getComments();
// 实时
  comment$ = this.activatedRoute.data.pipe(pluck('comments'));

  comments : Comments[] = []

  constructor(
    private commentService: CommentService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.activatedRoute.data.subscribe((data) => {
      this.comments = data['comments'];
      // console.log(data,27)
    });
  }
}
