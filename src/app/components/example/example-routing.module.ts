import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TmpComponent } from './tmp/tmp.component';
import { HeroFormReactiveComponent } from './hero-form-reactive/hero-form-reactive.component';

const routes: Routes = [
  { path: 'tmp', component: TmpComponent },
  { path: 'hero-form-reactive', component: HeroFormReactiveComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ExampleRoutingModule {}
