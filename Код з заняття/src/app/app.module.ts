import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Lesson01Component } from './lesson01/lesson01.component';
import { ComponentSkipTestsComponent } from './component-skip-tests/component-skip-tests.component';
import { ComponentSkipTestsAndStylesComponent } from './component-skip-tests-and-styles/component-skip-tests-and-styles.component';
import { ComponentSkipTestsAndStylesAndTemplatesComponent } from './component-skip-tests-and-styles-and-templates/component-skip-tests-and-styles-and-templates.component';
import { Lesson02Component } from './lesson02/lesson02.component';
import { Lesson03Component } from './lesson03/lesson03.component';
import { ChildComponent } from './lesson03/child/child.component';
import { ChildExtraComponent } from './lesson03/child-extra/child-extra.component';
import { Lesson04Component } from './lesson04/lesson04.component';
import { HryvniaPipe } from './lesson04/hryvnia.pipe';
import { SearchPipe } from './lesson04/search.pipe';
import { SortPipe } from './lesson04/sort.pipe';

@NgModule({
  declarations: [
    AppComponent,
    Lesson01Component,
    ComponentSkipTestsComponent,
    ComponentSkipTestsAndStylesComponent,
    ComponentSkipTestsAndStylesAndTemplatesComponent,
    Lesson02Component,
    Lesson03Component,
    ChildComponent,
    ChildExtraComponent,
    Lesson04Component,
    HryvniaPipe,
    SearchPipe,
    SortPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
