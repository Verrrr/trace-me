import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthenticationService } from '../../services/authentication.service';
import { AlertController, MenuController } from '@ionic/angular';
import { Router } from '@angular/router';
import { SocketService } from '../../services/socket.service';
// import { Socket } from 'ngx-socket-io';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(
    private _auth: AuthenticationService,
    private alertController: AlertController,
    private router: Router,
    private menu: MenuController,
    private socketService: SocketService
    ) { }

  ngOnInit() {
    this.menu.enable(false);
  }

  onSubmit(f:NgForm){
    this._auth.login(f.value).subscribe(res=>{
      localStorage.setItem('token',res['token']);
      this.socketService.socket.emit('setId',this._auth.getDecodeToken().user.user_id);
      this.menu.enable(true);
      this.router.navigate(['/home']);
    }, err=>{
      this.presentAlert();
      f.reset();
    });
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Login Error',
      message: 'Invalid username/password',
      buttons: ['OK']
    });

    await alert.present();
  }

}
