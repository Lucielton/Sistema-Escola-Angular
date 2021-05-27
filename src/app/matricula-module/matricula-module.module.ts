import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatriculaReadComponent } from './components/matricula-read/matricula-read.component';
import { MatriculaUpdateComponent } from './components/matricula-update/matricula-update.component';
import { MatriculaCreateComponent } from './components/matricula-create/matricula-create.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatRadioModule } from '@angular/material/radio';
import { MatPaginatorModule } from '@angular/material/paginator';
import {MatSelectModule} from '@angular/material/select';

@NgModule({
  declarations: [
    MatriculaReadComponent,
    MatriculaUpdateComponent,
    MatriculaCreateComponent
  ],
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatCardModule,
    MatTableModule,
    MatInputModule,
    MatButtonModule,
    MatRadioModule,
    MatPaginatorModule,
    MatSelectModule
  ]
})
export class MatriculaModuleModule { }
