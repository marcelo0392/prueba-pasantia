import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/@service/users.service';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {

  imagen:string = "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/rick-and-morty-season-4-trailer-1-1570450125.jpg?crop=0.564xw:1.00xh;0,0&resize=480:*"
  rows:any = [];

  constructor(private userService: UsersService) {
    this.fill();
   }

  ngOnInit(): void {
  }

  fill(): void{
    this.userService.getUsers().subscribe(
      data => {
        this.rows = data;
        console.log(data);

      }
    );
  }

}
