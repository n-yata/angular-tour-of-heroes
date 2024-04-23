import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TmpComponent } from './tmp/tmp.component';
import { HeroFormReactiveComponent } from './hero-form-reactive/hero-form-reactive.component';
import { authGuardFn } from '@auth0/auth0-angular';
import { authGuard } from 'src/app/services/token/token.service';

const routes: Routes = [
  // { path: 'tmp', component: TmpComponent, canActivate: [authGuardFn] },
  { path: 'tmp', component: TmpComponent, canActivate: [authGuard] },
  { path: 'hero-form-reactive', component: HeroFormReactiveComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ExampleRoutingModule {}
