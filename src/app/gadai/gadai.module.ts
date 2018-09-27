import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SimulasiComponent } from './simulasi/simulasi.component';
import { PengajuanComponent } from './pengajuan/pengajuan.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path: 'gadai/simulasi', component: SimulasiComponent},
  {path: 'gadai/pengajuan', component: PengajuanComponent}
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [SimulasiComponent, PengajuanComponent]
})
export class GadaiModule { }
