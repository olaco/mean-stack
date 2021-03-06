import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostListComponent } from './posts/post-list/post-list.component';
import { PostCreateComponent } from './posts/posts-create/posts-create.component';
import { LoginComponent } from './auth/login/login.component';
import { SignUpComponent } from './auth/signup/signup.component';


const routes:Routes = [

  {path: '', component: PostListComponent},
  {path: 'create', component: PostCreateComponent},
  {path: 'edit/:postId', component: PostCreateComponent},
  {path: 'login', component: LoginComponent},
  {path: 'signup', component: SignUpComponent}
]

@NgModule({

  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]

})
export class AppRoutingModule {}


