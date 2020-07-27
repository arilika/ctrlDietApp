import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { User } from '../modelos/user';
@Injectable({
  providedIn: 'root'
})
export class UserService {
  baseUrl = environment.webapiURL + "users/";
  constructor(private http: HttpClient) { }

  obtenerUsuario(usuarioId: string): Observable<User> {
    const url = this.baseUrl + usuarioId;
    return this.http.get<User>(url);
  }
}
