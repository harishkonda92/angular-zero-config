/*
  this file is for style
*/

import { NgModule } from '@angular/core';

/* material modules */
import { MatCardModule, MatInputModule, MatButtonModule, MatToolbarModule, MatIconModule } from '@angular/material';

const modules = [
  MatCardModule,
  MatInputModule,
  MatButtonModule,
  MatToolbarModule,
  MatIconModule,
];


@NgModule({
  imports: modules,
  exports: modules,
})
export class MaterialModule { }
