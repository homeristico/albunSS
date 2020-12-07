import { Component,ViewChild } from '@angular/core';
import { IonInfiniteScroll,ModalController,AlertController,ToastController } from '@ionic/angular';


import { ModalPage } from './../modal/modal.page';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  @ViewChild(IonInfiniteScroll) infiniteScroll: IonInfiniteScroll;
  inicio:number = 12;
  editar:boolean = false;  
  fichas = [];  

  constructor(private _modal:ModalController, private _alert:AlertController,
              private _toast:ToastController){
    this.cargarFichas(12);
  }

  async alerta(){
    const alert = await this._alert.create({
      cssClass: 'my-custom-class',
      header: 'Armar',
      message: 'Confirma armar juego?',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
          }
        }, {
          text: 'Okay',
          handler: () => {
            const confirm = this.comprobarCantidad();
            console.log('Confirm Okay', confirm);
            if(confirm) this.armar();             
          }
        }
      ]
    });
    await alert.present();
  } 

  armar(){    
    const fichas = JSON.parse(localStorage.getItem('fichas'));
    fichas.map(item => item.cantidad ? item.cantidad-- : item.cantidad);      
    this.fichas = fichas;
    localStorage.setItem('fichas',JSON.stringify(this.fichas));  
  }

  comprobarCantidad(){
    const fichas = JSON.parse(localStorage.getItem('fichas'));
    for(let element of fichas){
      if(element.cantidad === 0){
        this.fichasInsuficientes();
        return false;
      }
    }
    return true;
  }

  cargarFichas(num){     
    this.inicio = num;
    let arreglo = JSON.parse(localStorage.getItem('fichas')); 

    if(arreglo === null || arreglo.length === 0){  
      this.fichas = [];     
      for(let i=num-12;i<this.inicio;i++){
        this.fichas.push(this.fichasInit[i]);
      }    
     localStorage.setItem('fichas',JSON.stringify(this.fichasInit));
    }else{      
      this.fichas = [];
      for(let i=0;i<this.inicio;i++){
        this.fichas.push(arreglo[i]);
      } 
    }    
   }

   async fichasInsuficientes(){
    const toast = await this._toast.create({
      message: 'Fichas insuficientes',
      position: 'middle',
      duration: 2000
    });
    await toast.present();
   }

   ionViewWillEnter(){
    this.cargarFichas(12);
  }

  // onWillDismiss(){
  //   this.cargarFichas(12);
  // }

  loadData(event) {
    setTimeout(() => {      
      event.target.complete();
      this.cargarFichas(this.inicio+12);
      // App logic to determine if all data is loaded
      // and disable the infinite scroll
      if(this.fichas.length >= 191) {
        event.target.disabled = true;
      }
    }, 500);
  }

  toggleInfiniteScroll() {
    this.infiniteScroll.disabled = !this.infiniteScroll.disabled;
  }    

  async mostrarEditarModals(ficha){
    const modal = await this._modal.create({
      component: ModalPage,
      cssClass: 'my-custom-class',
      componentProps: {
        'ficha': ficha,        
      }

    });
    return await modal.present();
  }

  fichasInit = [
    {id:1,name:1,cantidad:0},
    {id:2,name:2,cantidad:0},
    {id:3,name:3,cantidad:0},
    {id:4,name:4,cantidad:0},
    {id:5,name:5,cantidad:0},
    {id:6,name:6,cantidad:0},
    {id:7,name:7,cantidad:0},
    {id:8,name:8,cantidad:0},
    {id:9,name:9,cantidad:0},
    {id:10,name:10,cantidad:0},
    {id:11,name:11,cantidad:0},
    {id:12,name:12,cantidad:0},
    {id:13,name:13,cantidad:0},
    {id:14,name:14,cantidad:0},
    {id:15,name:15,cantidad:0},
    {id:16,name:16,cantidad:0},
    {id:17,name:17,cantidad:0},
    {id:18,name:18,cantidad:0},
    {id:19,name:19,cantidad:0},
    {id:20,name:20,cantidad:0},
    {id:21,name:21,cantidad:0},
    {id:22,name:22,cantidad:0},
    {id:23,name:23,cantidad:0},
    {id:24,name:24,cantidad:0},
    {id:25,name:25,cantidad:0},    
    {id:26,name:26,cantidad:0},
    {id:27,name:27,cantidad:0},
    {id:28,name:28,cantidad:0},
    {id:29,name:29,cantidad:0},
    {id:30,name:30,cantidad:0},
    {id:31,name:31,cantidad:0},
    {id:32,name:32,cantidad:0},
    {id:33,name:33,cantidad:0},
    {id:34,name:34,cantidad:0},
    {id:35,name:35,cantidad:0},
    {id:36,name:36,cantidad:0},    
    {id:37,name:37,cantidad:0},
    {id:38,name:38,cantidad:0},
    {id:39,name:39,cantidad:0},
    {id:40,name:40,cantidad:0},
    {id:41,name:41,cantidad:0},
    {id:42,name:42,cantidad:0},
    {id:43,name:43,cantidad:0},
    {id:44,name:44,cantidad:0},
    {id:45,name:45,cantidad:0},
    {id:46,name:46,cantidad:0},
    {id:47,name:47,cantidad:0},    
    {id:48,name:48,cantidad:0},
    {id:49,name:49,cantidad:0},
    {id:50,name:50,cantidad:0},
    {id:51,name:51,cantidad:0},
    {id:52,name:52,cantidad:0},
    {id:53,name:53,cantidad:0},
    {id:54,name:54,cantidad:0},
    {id:55,name:55,cantidad:0},
    {id:56,name:56,cantidad:0},
    {id:57,name:57,cantidad:0},
    {id:58,name:58,cantidad:0},
    {id:59,name:59,cantidad:0},    
    {id:60,name:60,cantidad:0},
    {id:61,name:61,cantidad:0},
    {id:62,name:62,cantidad:0},
    {id:63,name:63,cantidad:0},
    {id:64,name:64,cantidad:0},
    {id:65,name:65,cantidad:0},
    {id:66,name:66,cantidad:0},
    {id:67,name:67,cantidad:0},
    {id:68,name:68,cantidad:0},
    {id:69,name:69,cantidad:0},
    {id:70,name:70,cantidad:0},    
    {id:71,name:71,cantidad:0},
    {id:72,name:72,cantidad:0},
    {id:73,name:73,cantidad:0},
    {id:74,name:74,cantidad:0},
    {id:75,name:75,cantidad:0},
    {id:76,name:76,cantidad:0},
    {id:77,name:77,cantidad:0},
    {id:78,name:78,cantidad:0},
    {id:79,name:79,cantidad:0},
    {id:80,name:80,cantidad:0},
    {id:81,name:81,cantidad:0},    
    {id:82,name:82,cantidad:0},
    {id:83,name:83,cantidad:0},
    {id:84,name:84,cantidad:0},
    {id:85,name:85,cantidad:0},
    {id:86,name:86,cantidad:0},
    {id:87,name:87,cantidad:0},
    {id:88,name:88,cantidad:0},
    {id:89,name:89,cantidad:0},
    {id:90,name:90,cantidad:0},
    {id:91,name:91,cantidad:0},    
    {id:92,name:92,cantidad:0},
    {id:93,name:93,cantidad:0},
    {id:94,name:94,cantidad:0},
    {id:95,name:95,cantidad:0},
    {id:96,name:96,cantidad:0},
    {id:97,name:97,cantidad:0},
    {id:98,name:98,cantidad:0},
    {id:99,name:99,cantidad:0},
    {id:100,name:100,cantidad:0},
    {id:101,name:101,cantidad:0},
    {id:102,name:102,cantidad:0},
    {id:103,name:103,cantidad:0},
    {id:104,name:104,cantidad:0},
    {id:105,name:105,cantidad:0},
    {id:106,name:106,cantidad:0},
    {id:107,name:107,cantidad:0},
    {id:108,name:108,cantidad:0},
    {id:109,name:109,cantidad:0},
    {id:110,name:110,cantidad:0},
    {id:111,name:111,cantidad:0},
    {id:112,name:112,cantidad:0},
    {id:113,name:113,cantidad:0},
    {id:114,name:114,cantidad:0},
    {id:115,name:115,cantidad:0},
    {id:116,name:116,cantidad:0},
    {id:117,name:117,cantidad:0},
    {id:118,name:118,cantidad:0},
    {id:119,name:119,cantidad:0},
    {id:120,name:120,cantidad:0},
    {id:121,name:121,cantidad:0},
    {id:122,name:122,cantidad:0},
    {id:123,name:123,cantidad:0},
    {id:124,name:124,cantidad:0},
    {id:125,name:125,cantidad:0},
    {id:126,name:126,cantidad:0},
    {id:127,name:127,cantidad:0},
    {id:128,name:128,cantidad:0},
    {id:129,name:129,cantidad:0},
    {id:130,name:130,cantidad:0},
    {id:131,name:131,cantidad:0},
    {id:132,name:132,cantidad:0},
    {id:133,name:133,cantidad:0},
    {id:134,name:134,cantidad:0},
    {id:135,name:135,cantidad:0},
    {id:136,name:136,cantidad:0},
    {id:137,name:137,cantidad:0},
    {id:138,name:138,cantidad:0},
    {id:139,name:139,cantidad:0},
    {id:140,name:140,cantidad:0},
    {id:141,name:141,cantidad:0},
    {id:142,name:142,cantidad:0},
    {id:143,name:143,cantidad:0},
    {id:144,name:144,cantidad:0},
    {id:145,name:145,cantidad:0},
    {id:146,name:146,cantidad:0},
    {id:147,name:147,cantidad:0},
    {id:148,name:148,cantidad:0},
    {id:149,name:149,cantidad:0},
    {id:150,name:150,cantidad:0},
    {id:151,name:151,cantidad:0},
    {id:152,name:152,cantidad:0},
    {id:153,name:153,cantidad:0},
    {id:154,name:154,cantidad:0},
    {id:155,name:155,cantidad:0},
    {id:156,name:156,cantidad:0},
    {id:157,name:157,cantidad:0},
    {id:158,name:158,cantidad:0},
    {id:159,name:159,cantidad:0},
    {id:160,name:160,cantidad:0},
    {id:161,name:161,cantidad:0},
    {id:162,name:162,cantidad:0},
    {id:163,name:163,cantidad:0},
    {id:164,name:164,cantidad:0},
    {id:165,name:165,cantidad:0},
    {id:166,name:166,cantidad:0},
    {id:167,name:167,cantidad:0},
    {id:168,name:168,cantidad:0},
    {id:169,name:169,cantidad:0},
    {id:170,name:170,cantidad:0},
    {id:171,name:171,cantidad:0},
    {id:172,name:172,cantidad:0},
    {id:173,name:173,cantidad:0},
    {id:174,name:174,cantidad:0},
    {id:175,name:175,cantidad:0},
    {id:176,name:176,cantidad:0},
    {id:177,name:177,cantidad:0},
    {id:178,name:178,cantidad:0},
    {id:179,name:179,cantidad:0},
    {id:180,name:180,cantidad:0},
    {id:'A',name:'A',cantidad:0},
    {id:'B',name:'B',cantidad:0},
    {id:'C',name:'C',cantidad:0},
    {id:'D',name:'D',cantidad:0},
    {id:'E',name:'E',cantidad:0},
    {id:'F',name:'F',cantidad:0},
    {id:'G',name:'G',cantidad:0},
    {id:'H',name:'H',cantidad:0},
    {id:'I',name:'I',cantidad:0},
    {id:'J',name:'J',cantidad:0},
    {id:'K',name:'K',cantidad:0},
    {id:'L',name:'L',cantidad:0}    
  ];

}
