import { Component, OnInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';


@Component({
  selector: 'app-calculette',
  imports: [
    FormsModule,
    RouterModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatCardModule

  ],
  templateUrl: './calculette.component.html',
  styleUrl: './calculette.component.css'
})
export class CalculetteComponent implements  OnInit {

  listenombre = [7, 8, 9, 4, 5, 6, 1, 2, 3, 0];
  listeoperation = ['+', '*', '-', '/'];
  

  ngOnInit(): void {
    
  }

}

