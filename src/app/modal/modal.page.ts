import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.page.html',
  styleUrls: ['./modal.page.scss'],
})
export class ModalPage implements OnInit {

  @Input() ficha;
  constructor(private modalCtrl:ModalController) { }

  ngOnInit() {
  }


  dismiss() {
    // using the injected ModalController this page
    // can "dismiss" itself and optionally pass back data
    this.modalCtrl.dismiss({
      'dismissed': true
    });
  }

  masFicha(id){           
    this.ficha.cantidad++;
    let fichas = JSON.parse(localStorage.getItem('fichas'));
    fichas.map(ficha => ficha.id === id ? ficha.cantidad++ : ficha.cantidad);        
    localStorage.setItem('fichas',JSON.stringify(fichas));  
  }

  menosFicha(ficha){
    if(ficha.cantidad > 0){
      this.ficha.cantidad--;
      let fichas = JSON.parse(localStorage.getItem('fichas'));
      fichas.map(fic => fic.id === ficha.id ? fic.cantidad-- : fic.cantidad);        
      localStorage.setItem('fichas',JSON.stringify(fichas));
    }    
  }

}
