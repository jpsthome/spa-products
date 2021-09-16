import { NgxMaskModule } from 'ngx-mask';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from './../../core/material/material.module';
import { ClientsRoutingModule } from './clients-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientsFormComponent } from './components/clients-form/clients-form.component';

@NgModule({
  declarations: [ClientsFormComponent],
  imports: [
    CommonModule,
    ClientsRoutingModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    NgxMaskModule,
  ],
})
export class ClientsModule {}
