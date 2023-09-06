import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { ExampleRoutingModule } from './example-routing.module';
import { TmpComponent } from './tmp/tmp.component';
import { HeroFormReactiveComponent } from './hero-form-reactive/hero-form-reactive.component';

@NgModule({
  declarations: [TmpComponent, HeroFormReactiveComponent],
  imports: [
    CommonModule,
    ExampleRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
  ],
})
export class ExampleModule {}
