import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main.component';
import { SharedModule } from '../shared/shared.module';
import { CreateComponent } from './create/create.component';
import { StoryDetailsComponent } from './story-details/story-details.component';
import { StoriesListComponent } from './stories-list/stories-list.component';

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    children: [
      {
        path: 'stories-list',
        component: StoriesListComponent,
      },
      {
        path: 'create-story',
        component: CreateComponent,
      },
      {
        path: 'story/:id',
        component: StoryDetailsComponent,
      },
      {
        path: '',
        redirectTo: 'stories-list',
        pathMatch: 'full',
      },
      {
        path: '**',
        redirectTo: 'stories-list',
      },
    ],
  },
];
@NgModule({
  declarations: [
    MainComponent,
    CreateComponent,
    StoryDetailsComponent,
    StoriesListComponent,
  ],
  imports: [CommonModule, RouterModule.forChild(routes), SharedModule],
  entryComponents: [],
})
export class MainModule {}
