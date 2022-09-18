import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { HeaderComponent } from './header/header.component';
import { InputComponent } from './input/input.component';

@NgModule({
  declarations: [HeaderComponent, InputComponent],
  imports: [CommonModule, MatFormFieldModule],
  exports: [HeaderComponent, InputComponent, MatFormFieldModule],
})
export class CompontentsModule {}
