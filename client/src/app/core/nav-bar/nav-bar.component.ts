import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Observable } from 'rxjs';
import { BasketService } from 'src/app/basket/basket.service';
import { IBasket } from 'src/app/shared/models/basket';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit, AfterViewInit {
  basket$ : Observable <IBasket>;

//  @ViewChild("cartCount") test: ElementRef;


  constructor(private basketService: BasketService) { }

  ngOnInit(): void {
    this.basket$ = this.basketService.basket$;
  }

  ngAfterViewInit(): void {
  /*  console.log('this.cartCount after--->', this.test)
    this.basket$.subscribe((basket: IBasket ) => { 
      console.log('basket-->', basket)
      this.test.nativeElement.setAttribute('data-count', basket?.items?.length || 0 )
    })*/
     //this.test.nativeElement.removeAttribute('data-counter');
  }

}
