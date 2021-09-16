import { MaterialModule } from './../core/material/material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConfirmDeleteDialogComponent } from './confirm-delete-dialog/confirm-delete-dialog.component';

@NgModule({
  declarations: [ConfirmDeleteDialogComponent],
  imports: [CommonModule, MaterialModule],
  exports: [ConfirmDeleteDialogComponent],
})
export class SharedModule {}
