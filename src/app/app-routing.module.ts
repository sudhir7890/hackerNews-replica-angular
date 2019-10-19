import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {NewTopComponent} from './new-top/new-top.component';
import {AskShowComponent} from './ask-show/ask-show.component';
import {CommentsComponent} from './Commentss/comments/comments.component';



const routes: Routes = [
  {path: '', redirectTo: 'news', pathMatch: 'full'},
  {path: 'news', component: NewTopComponent},
  {path: 'newest', component: NewTopComponent},
  {path: 'ask', component: AskShowComponent},
  {path: 'comments/:id', component: CommentsComponent},
  {path: 'show', component: AskShowComponent},
  {path: '**', redirectTo: 'news', pathMatch: 'full'},


];

@NgModule({
  imports: [RouterModule.forRoot(routes,{onSameUrlNavigation: 'reload'} )],
  exports: [RouterModule]
})
export class AppRoutingModule { }
