import { Component, OnInit } from '@angular/core';
import { faEye, faPencilAlt, faTrash, faPlusSquare } from '@fortawesome/free-solid-svg-icons'
import swal from 'sweetalert2';
import { Club } from 'src/app/models/club';
import { ClubService } from 'src/app/services/club.service';

@Component({
  selector: 'app-club-list',
  templateUrl: './club-list.component.html',
  styleUrls: ['./club-list.component.css']
})
export class ClubListComponent implements OnInit {

  faPlusSquare = faPlusSquare;
  faEye = faEye;
  faPencilAlt = faPencilAlt;
  faTrash = faTrash;

  clubes : Club[];

  constructor(private clubService : ClubService) { }

  ngOnInit(): void {
    this.list();
  }

  list() : void{
    this.clubService.list().subscribe(result => {
      this.clubes = result;
    });
  }

  delete(c : Club) : void{
    swal.fire({
      title: '¿Estas seguro que desea continuar?',
      text: "El Club: " + c.nombre + " será eliminado.",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Confirmar',
      cancelButtonText: 'Cancelar'
    }).then((result) =>{
      if(result.value){
        this.clubService.delete(c).subscribe(
          result => console.log(result)
        ) 
      }
    })
  }

}
