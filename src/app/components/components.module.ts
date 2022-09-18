import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';
import { HeaderComponent } from './header/header.component';
import { InputComponent } from './input/input.component';
import { ListComponent } from './list/list.component';
import { CardComponent } from './card/card.component';
import { ListfooterComponent } from './listfooter/listfooter.component';

@NgModule({
  declarations: [
    HeaderComponent,
    InputComponent,
    ListComponent,
    CardComponent,
    ListfooterComponent,
  ],
  imports: [CommonModule, MatFormFieldModule, MatCardModule],
  exports: [HeaderComponent, InputComponent, ListComponent, MatFormFieldModule],
})
export class ComponentsModule {}
