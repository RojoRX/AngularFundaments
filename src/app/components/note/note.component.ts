import { Component, Input, OnInit } from '@angular/core';
import { Event } from '@angular/router';
import { stringify } from 'querystring';

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.css']
})
export class NoteComponent implements OnInit {
  name: string="Nombre Hello World";
  button: boolean= true;
  enlace="https://cdn.searchenginejournal.com/wp-content/uploads/2019/04/the-seo-guide-to-angular.png";
  namePerson="UsuarioSinNombre";
  activate: boolean=false;
  ngifstate: boolean=false;

  datos:object=[{
    "id": 1,
    "first_name": "Lon",
    "email": "lweaben0@imdb.com",
    "gender": "Male"
  }, {
    "id": 2,
    "first_name": "Daven",
    "email": "dcomoletti1@cbslocal.com",
    "gender": "Genderqueer"
  }, {
    "id": 3,
    "first_name": "Gennifer",
    "email": "gizatson2@hao123.com",
    "gender": "Female"
  }, {
    "id": 4,
    "first_name": "Aurelia",
    "email": "amolder3@booking.com",
    "gender": "Female"
  }, {
    "id": 5,
    "first_name": "Howey",
    "email": "hsaint4@taobao.com",
    "gender": "Genderfluid"
  }, {
    "id": 6,
    "first_name": "Meyer",
    "email": "manfusso5@delicious.com",
    "gender": "Agender"
  }, {
    "id": 7,
    "first_name": "Clint",
    "email": "cklimecki6@meetup.com",
    "gender": "Male"
  }, {
    "id": 8,
    "first_name": "Gipsy",
    "email": "gwragge7@yellowbook.com",
    "gender": "Female"
  }, {
    "id": 9,
    "first_name": "Ephrem",
    "email": "elefranc8@zimbio.com",
    "gender": "Male"
  }, {
    "id": 10,
    "first_name": "Linet",
    "email": "lgooder9@hatena.ne.jp",
    "gender": "Female"
  }, {
    "id": 11,
    "first_name": "Lorna",
    "email": "ljasika@lulu.com",
    "gender": "Female"
  }, {
    "id": 12,
    "first_name": "Guenevere",
    "email": "ggrogorb@storify.com",
    "gender": "Female"
  }, {
    "id": 13,
    "first_name": "Magdalena",
    "email": "mpiddingtonc@cnn.com",
    "gender": "Female"
  }, {
    "id": 14,
    "first_name": "Roley",
    "email": "rkeeland@paginegialle.it",
    "gender": "Male"
  }, {
    "id": 15,
    "first_name": "Verine",
    "email": "vquesnee@cnbc.com",
    "gender": "Female"
  }, {
    "id": 16,
    "first_name": "Freddi",
    "email": "fgylesf@prweb.com",
    "gender": "Female"
  }, {
    "id": 17,
    "first_name": "Francene",
    "email": "fmattityahoug@newsvine.com",
    "gender": "Female"
  }, {
    "id": 18,
    "first_name": "Nelson",
    "email": "ntallonh@furl.net",
    "gender": "Male"
  }, {
    "id": 19,
    "first_name": "Cass",
    "email": "cmacveani@kickstarter.com",
    "gender": "Male"
  }, {
    "id": 20,
    "first_name": "Saw",
    "email": "ssiddaleyj@photobucket.com",
    "gender": "Male"
  }];

  arrayObject=Object.values(this.datos);


  constructor() { 
    
  }

  ngOnInit(): void {
  }

  sayHello=()=>{
    alert("Hi!!");
  }
  showKeys():void{
    let keys=event;
     console.log(keys);
 }
 changeColor=()=>{
  if(this.activate==false){
    this.activate=true;
  }
    else{
      this.activate=false
    }
  }

  @Input() childMessage: string | undefined;
  
 }



