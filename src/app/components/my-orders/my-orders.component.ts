import { Component, OnInit } from '@angular/core';
import { switchMap } from 'rxjs/operators';
import { AuthService } from 'app/services/auth.service';
import { OrderService } from 'app/services/order.service';



@Component({
  selector: 'app-my-orders',
  templateUrl: './my-orders.component.html',
  styleUrls: ['./my-orders.component.css']
})
export class MyOrdersComponent {
  order$;
  constructor(auth: AuthService, orderService: OrderService) {
    this.order$ = auth.user$
      .pipe(switchMap(u => orderService.getOrdersByUser(u.uid)));
  }

}
