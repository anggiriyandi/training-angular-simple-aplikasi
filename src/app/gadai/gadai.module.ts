import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SimulasiComponent } from './simulasi/simulasi.component';
import { PengajuanComponent } from './pengajuan/pengajuan.component';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '../auth-guard';
import { FormsModule } from '@angular/forms';

const routes: Routes = [
  {path: 'gadai/simulasi', component: SimulasiComponent, canActivate: [AuthGuard] },
  {path: 'gadai/pengajuan', component: PengajuanComponent, canActivate: [AuthGuard]}
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule
  ],
  declarations: [SimulasiComponent, PengajuanComponent]
})
export class GadaiModule { }
