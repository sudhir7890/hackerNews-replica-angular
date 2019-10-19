import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { NewTopComponent } from './new-top/new-top.component';
import { AskShowComponent } from './ask-show/ask-show.component';
import { AppRowComponent } from './shared/app-row/app-row.component';
import { CommentsComponent } from './Commentss/comments/comments.component';
import {CommentComponent} from './Commentss/comment/comment.component';
import { PollComponent } from './Commentss/poll/poll.component';
import { PolloptComponent } from './Commentss/pollopt/pollopt.component';

@NgModule({
  declarations: [
    AppComponent,
    NewTopComponent,
    AskShowComponent,
    AppRowComponent,
    CommentsComponent,
    CommentComponent,
    PollComponent,
    PolloptComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule,
    HttpClientModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
