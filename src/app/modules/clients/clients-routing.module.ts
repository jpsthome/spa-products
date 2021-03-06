import { ClientsFormComponent } from './components/clients-form/clients-form.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientsListComponent } from './components/clients-list/clients-list.component';

const routes: Routes = [
  {
    path: '',
    component: ClientsListComponent,
  },
  {
    path: 'new',
    component: ClientsFormComponent,
  },
  {
    path: ':id',
    component: ClientsFormComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ClientsRoutingModule {}
