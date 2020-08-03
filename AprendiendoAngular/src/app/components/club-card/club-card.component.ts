import { Component, OnInit } from '@angular/core';
import { faIdCard, faTimes, faUser, faCalendar, faMapMarkedAlt, faGenderless } from '@fortawesome/free-solid-svg-icons';
import { Club } from 'src/app/models/club';
import { ClubService } from 'src/app/services/club.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-club-card',
  templateUrl: './club-card.component.html',
  styleUrls: ['./club-card.component.css']
})
export class ClubCardComponent implements OnInit {

  faIdCard = faIdCard;
  faTimes = faTimes;
  faUser = faUser;
  faCalendar = faCalendar;
  faMapMarkedAlt = faMapMarkedAlt;
  faGenderless = faGenderless;

  club : Club;

  constructor(private clubService : ClubService,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.club = new Club();
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

}
