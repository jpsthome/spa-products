import { RouterModule } from '@angular/router';
import { MaterialModule } from './material/material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { LayoutModule } from '@angular/cdk/layout';

@NgModule({
  declarations: [FooterComponent, HeaderComponent],
  imports: [CommonModule, LayoutModule, MaterialModule, RouterModule],
  exports: [FooterComponent, HeaderComponent, MaterialModule],
})
export class CoreModule {}
