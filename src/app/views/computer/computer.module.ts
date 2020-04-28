import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComputerComponent } from './computer.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [ComputerComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: ComputerComponent }]),
  ],
})
export class ComputerModule {}
