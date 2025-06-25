import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterModule } from '@angular/router';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';

@Component({
  selector: 'app-calculatrice',
  imports: [
    FormsModule,
    RouterModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatDividerModule,
    MatCardModule,
    MatIconModule,
    MatFormFieldModule
  ],
  templateUrl: './calculatrice.component.html',
  styleUrl: './calculatrice.component.css'
})

export class CalculatriceComponent implements OnInit {
  formgroup!: FormGroup;
  constructor(private formbuilder: FormBuilder) {}

  Listoperateur = [
    { value: '+' },
    { value: '-' },
    { value: '*' },
    { value: '/' },
  ];
  resultat=0


  ngOnInit(): void {
    this.formgroup = this.formbuilder.group(
      {
      nombre1: ['', [Validators.required]] ,
      nombre2: ['', [Validators.required]] ,
      operateur: ['', [Validators.required]] 
  }

    );
  }
  onsubmit() {
    if (this.formgroup.valid) {
      console.log(this.formgroup.valid);
      console.log(this.formgroup.value.operateur);

  this.calculer(this.formgroup.value.operateur, this.formgroup.value.nombre1, this.formgroup.value.nombre2)
}else {alert("Attention les champs sont vide! Veuillez inserer des données :)")}

}

calculer(operateur:string, nombre1: number, nombre2:number){

  console.log(operateur);

 if (operateur=='+') {
  console.log("resultat")
  this.resultat = nombre1 + nombre2

 } else if (operateur=='-') {
   this.resultat = nombre1 - nombre2

 }else if(operateur == ''){
  this.resultat = nombre1 * nombre2

 } else if(operateur == '/'){ 
  if(nombre2 == 0)
    {alert("Opération Invalide !")}
  else{
    this.resultat = nombre1 / nombre2
  }

 }else{console.log("Un erreur est survenue! ")}
}
}


