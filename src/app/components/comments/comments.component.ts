import {Component, Input, OnInit} from '@angular/core';
import {IComment} from "../../interfaces";
import {CommentService} from "../../services";

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {
  @Input()
  comments: IComment[]

  constructor(private CommentService: CommentService) {
  }

  ngOnInit(): void {
    this.CommentService.getAllComments().subscribe(value => this.comments = value)
  }

}
