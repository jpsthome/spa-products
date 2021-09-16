import { ClientsRoutingModule } from './clients-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientsFormComponent } from './components/clients-form/clients-form.component';

@NgModule({
  declarations: [ClientsFormComponent],
  imports: [CommonModule, ClientsRoutingModule],
})
export class ClientsModule {}
