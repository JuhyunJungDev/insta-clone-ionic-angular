import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tab1Page } from './tab1.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { Tab1PageRoutingModule } from './tab1-routing.module';
import { PostComponent } from '../widget/post/post.component';
import { UserComponent } from '../widget/user/user.component';
import { CommentComponent } from '../widget/comment/comment.component';
import { StoryComponent } from '../widget/story/story.component';
import { HeaderComponent } from '../widget/header/header.component';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    Tab1PageRoutingModule
  ],
  declarations: [Tab1Page, PostComponent, UserComponent, CommentComponent, StoryComponent, HeaderComponent]
})
export class Tab1PageModule {}
