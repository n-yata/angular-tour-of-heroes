import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboadComponent } from './components/shared/dashboad/dashboad.component';
import { Code404Component } from './components/shared/code404/code404.component';
import { Code500Component } from './components/shared/code500/code500.component';
import { SystemErrorComponent } from './components/shared/system-error/system-error.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboadComponent },
  { path: 'code404', component: Code404Component },
  { path: 'code500', component: Code500Component },
  { path: 'systemError', component: SystemErrorComponent },
  {
    path: 'example',
    loadChildren: () =>
      import('./components/example/example.module').then(
        (m) => m.ExampleModule,
      ),
  },
  {
    path: 'hero',
    loadChildren: () =>
      import('./components/hero/hero.module').then((m) => m.HeroModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
