import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginPagesComponent } from './components/pages/login-pages/login-pages.component';
import { RegisterPagesComponent } from './components/pages/register-pages/register-pages.component';
import { CollectionPagesComponent } from './components/pages/collection-pages/collection-pages.component';
import { SeriesPagesComponent } from './components/pages/series-pages/series-pages.component';
import { NotFoundPagesComponent } from './components/pages/not-found-pages/not-found-pages.component';
import { UserFormsComponent } from './components/templates/user-forms/user-forms.component';
import { AppComponent } from './app.component';

const routes: Routes = [
 {path: 'auth', component: AppComponent,
  children: [
    {path: '' , component: LoginPagesComponent},
    {path: 'register' , component: RegisterPagesComponent},
  ],
 },
 {path: 'collection' , component: CollectionPagesComponent},
 {path: 'series' , component: SeriesPagesComponent},
 {path: '**' , component: NotFoundPagesComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
