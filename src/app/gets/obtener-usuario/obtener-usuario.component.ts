import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/modelos/user';
import { UserService } from 'src/app/servicio/user.service';
@Component({
  selector: 'app-obtener-usuario',
  templateUrl: './obtener-usuario.component.html',
  styleUrls: ['./obtener-usuario.component.css']
})
export class ObtenerUsuarioComponent implements OnInit {
  noEncontrado = false;
  user: User;
  constructor(private usrService: UserService) { }

  ngOnInit(): void {
  }
  obtenerUsuario(usuarioId: string) {
    this.noEncontrado = false;
    this.user = null;
    this.usrService.obtenerUsuario(usuarioId).subscribe(
      (usrAPI: User) => { this.user = usrAPI },
      (err: any) => { console.log(err); this.noEncontrado = true; }
    );
  }
}
