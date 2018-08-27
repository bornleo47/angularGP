import { Component } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {



constructor(private http: HttpClient){



}

submit(f){
this.http.post("http://localhost:8080/create", f.value)
.subscribe(() => {console.log(f.value)});



  }



}
