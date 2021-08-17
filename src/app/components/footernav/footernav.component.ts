import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { faClipboard, faHome, faShoppingCart } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-footernav',
  templateUrl: './footernav.component.html',
  styleUrls: ['./footernav.component.css']
})
export class FooternavComponent implements OnInit {
  @Output() onFooter = new EventEmitter();
  faHome = faHome;
  faShopping = faShoppingCart;
  faClipboard = faClipboard;
  
  constructor() { }

  ngOnInit(): void {
  }
  home(){
    this.onFooter.emit({url:'ordenesDisponibles',data:'datas'})
  }
  register(){
    this.onFooter.emit({url:'ordenes',data:'datas'})
  }
}
