import {Component, Injectable, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'testing';
  product:any[] = []
  constructor(private appService:AppService ) { }

  ngOnInit() {
    this.appService.getProducts().subscribe((data:any) => {
      this.product = data;
      console.log(data)
    })
  }

}

@Injectable(
  {
    providedIn: 'root'
  }
)
class AppService{
  constructor(private http: HttpClient) {
  }
  // https://fakestoreapi.com/products/1

  getProducts(){
    return this.http.get("https://fakestoreapi.com/products")
  }

  getSingleProduct(id: number){
    return this.http.get(`https://fakestoreapi.com/products/${id}`)
  }

}
