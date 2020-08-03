import { Component, OnInit } from '@angular/core';
import { faUserPlus, faIdCard, faSave, faTimes, faUser, faCalendar, faMapMarkedAlt, faGenderless } from '@fortawesome/free-solid-svg-icons';
import { Club } from 'src/app/models/club';
import { ClubService } from 'src/app/services/club.service';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-club-form',
  templateUrl: './club-form.component.html',
  styleUrls: ['./club-form.component.css']
})
export class ClubFormComponent implements OnInit {

  faUserPlus =faUserPlus;
  faIdCard = faIdCard;
  faSave = faSave;
  faTimes = faTimes;
  faUser = faUser;
  faCalendar = faCalendar;
  faMapMarkedAlt = faMapMarkedAlt;
  faGenderless = faGenderless;

  form: FormGroup;  
  submitted: boolean = false;

  club : Club;
  title: string = "Nuevo Club";

  constructor(private clubService : ClubService, private formBuilder: FormBuilder,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.club = new Club();
    this.form = this.formBuilder.group({
      instructor: ['', [Validators.required, Validators.maxLength(55)]],
      minimo_integrantes: [''],
      lugar: ['', [Validators.required, Validators.maxLength(75)]],
      informacion: ['', [Validators.required, Validators.maxLength(75)]],
      nombre: ['', [Validators.required, Validators.maxLength(50)]]     
    });

    this.activatedRoute.params.subscribe(
      params => {
        if(params['id']){
          this.clubService.retrieve(params['id']).subscribe(
            result => this.club = result
          )
        }
      }
    );
  }

  get f(){
    return this.form.controls;
  }

  onSubmit() : void {

    this.submitted = true;

    if(this.form.invalid){
      console.error('Error en formulario');
      return;
    }

    this.clubService.save(this.club).subscribe(
      result => {
        this.submitted = false;
        this.club = new Club();
        console.log(result);
      }
    );
  }

  onReset() : void {
    this.submitted = false;
    this.form.reset();
    this.club = new Club();
  }


}
