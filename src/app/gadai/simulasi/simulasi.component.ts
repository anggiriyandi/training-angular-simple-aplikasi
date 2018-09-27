import { Component, OnInit } from '@angular/core';
import { PengajuanModel } from '../pengajuan/pengajuan.model';

@Component({
  selector: 'app-simulasi',
  templateUrl: './simulasi.component.html',
  styleUrls: ['./simulasi.component.css']
})
export class SimulasiComponent implements OnInit {

  pengajuan: PengajuanModel = new PengajuanModel();
  daftarPengajuan : Pengajuan[] = [];
  totalNilai : number = 0;

  pilihanKaratase = [
    {'value':'1', 'label': '2'},
    {'value':'2', 'label': '3'}
  ]

  constructor() { }

  ngOnInit() {
  }

  lanjutkanPengajuan(): void{
    this.pengajuan.nilai = 55000 * this.pengajuan.beratBersih;
    this.totalNilai = this.totalNilai + this.pengajuan.nilai;
  }

  tambahPengajuan(data){
    this.daftarPengajuan.push(data);
  }

}
