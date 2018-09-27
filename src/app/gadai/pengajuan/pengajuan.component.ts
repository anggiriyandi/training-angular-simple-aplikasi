import { Component, OnInit, Input } from '@angular/core';
import { PengajuanModel } from './pengajuan.model';

@Component({
  selector: 'app-pengajuan',
  templateUrl: './pengajuan.component.html',
  styleUrls: ['./pengajuan.component.css']
})
export class PengajuanComponent implements OnInit {

  @Input() pengajuan: PengajuanModel;
  constructor() { }

  ngOnInit() {
  }

}
