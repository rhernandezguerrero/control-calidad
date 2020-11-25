import { Component, OnInit } from '@angular/core';
import { MenuController} from '@ionic/angular';

interface Componente {
  icon: string;
  name: string;
  redirectTo: string;
}

@Component({
  selector: 'app-ingresar',
  templateUrl: './ingresar.page.html',
  styleUrls: ['./ingresar.page.scss'],
})
export class IngresarPage implements OnInit {

  componentes: Componente[] = [
    {
      icon: 'american-football',
      name: 'Datos Muestra',
      redirectTo: '/muestra'
    }

  ]

  slides: { img: string, titulo: string, desc: string }[] = [
    {
      img: '/assets/slides/photos.svg',
      titulo: 'Comparte Fotos',
      desc: 'Comparte la información a través de fotografías, dejando un registro constante'
    },
    {
      img: '/assets/slides/clima-2.svg',
      titulo: 'Atento al Clima',
      desc: 'Recuerda estar atento a las condiciones de cambios que resulten necesarios'
    },
    {
      img: '/assets/slides/calendar.svg',
      titulo: 'Nunca olvides nada',
      desc: 'Guarda los eventos en los días correspondientes llevando una agenda correcta de actividades'
    },
    {
      img: '/assets/slides/placeholder-1.svg',
      titulo: 'Tu ubicación',
      desc: 'Siempre sabremos donde estás, para ubicarte en tu trabajo'
    }
  ];

  constructor( private menuCtrl: MenuController) { }

  ngOnInit() {
  }

  mostrarMenu(){
    this.menuCtrl.open('first');

  }


}
