import { Component, OnInit } from '@angular/core';
import { faUserFriends, faSave, faTimes, faInfoCircle, faUser, faMapMarkerAlt, faArrowAltCircleLeft } from '@fortawesome/free-solid-svg-icons';
import { Club } from 'src/app/models/club';
import { ClubService } from 'src/app/services/club.service';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-club-form',
  templateUrl: './club-form.component.html',
  styleUrls: ['./club-form.component.css']
})
export class ClubFormComponent implements OnInit {

  faUserFriends = faUserFriends;
  faTimes = faTimes;
  faSave = faSave;
  faInfoCircle = faInfoCircle;
  faUser = faUser;
  faMapMarkerAlt = faMapMarkerAlt;
  faArrowAltCircleLeft = faArrowAltCircleLeft;

  form: FormGroup;  
  submitted: boolean = false;

  club : Club;

  constructor(private clubService : ClubService, private router: Router,private formBuilder: FormBuilder,
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
        console.log(result);
        this.router.navigate(['/clubes']);
      }
    );
  }

  onReset() : void {
    this.submitted = false;
    this.form.reset();
    this.club = new Club();
  }


}
