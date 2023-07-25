import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';

const modules: any[] = [
  MatButtonModule,
  MatMenuModule,
]

@NgModule({
  declarations: [],
  imports: [
    ...modules,
    // AbrakadabraModule,
  ],
  exports: [
    ...modules,
  ],
})
export class MaterialModule {
}
