import { Component, OnInit } from '@angular/core';
import { Avenger } from '../../avengers';

@Component({
  selector: 'app-avengers-form',
  templateUrl: './avengers-form.component.html',
  styleUrls: ['./avengers-form.component.css']
})
export class AvengersFormComponent implements OnInit {
	superPowers=['Really Strong', 'Really Angry', 'Iron Man', 'God of Thunder'];
	model = new Avenger('Hulk', 'Bruce Banner',this.superPowers[1]);
	submitted=false;
	onSubmit(){
		this.submitted=true;
	}

	//discard later
	get diagnostic(){
		return JSON.stringify(this.model);
	}
	newAvenger(){
		this.model=new Avenger('','','');
	}
  constructor() { }

  ngOnInit(): void {
  }

}
