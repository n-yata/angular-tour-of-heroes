import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboadComponent } from './dashboad/dashboad.component';
import { HeroesComponent } from './heroes/heroes.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { TmpComponent } from './tmp/tmp.component';
import { Code404Component } from './views/code404/code404.component';
import { Code500Component } from './views/code500/code500.component';
import { SystemErrorComponent } from './views/system-error/system-error.component';
import { HeroFormReactiveComponent } from './hero-form-reactive/hero-form-reactive.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboadComponent },
  { path: 'heroes', component: HeroesComponent },
  { path: 'detail/:id', component: HeroDetailComponent },
  { path: 'tmp', component: TmpComponent },
  { path: 'hero-form-reactive', component: HeroFormReactiveComponent },
  { path: 'code404', component: Code404Component },
  { path: 'code500', component: Code500Component },
  { path: 'systemError', component: SystemErrorComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
