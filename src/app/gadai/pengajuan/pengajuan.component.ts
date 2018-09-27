import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { PengajuanModel } from './pengajuan.model';

@Component({
  selector: 'app-pengajuan',
  templateUrl: './pengajuan.component.html',
  styleUrls: ['./pengajuan.component.css']
})
export class PengajuanComponent implements OnInit {
  @Input() pengajuan: PengajuanModel;
  @Output() tambahPengajuanEmitter = new EventEmitter<PengajuanModel>();

  constructor() { }

  ngOnInit(){
  }

  tambahPengajuan() {
    this.tambahPengajuanEmitter.emit(this.pengajuan);
  }

}
