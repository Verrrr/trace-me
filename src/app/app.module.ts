import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { FormsModule } from "@angular/forms";
import { NativeStorage } from "@ionic-native/native-storage/ngx";

//Socket io
import { SocketIoModule, SocketIoConfig } from 'ngx-socket-io';
const config: SocketIoConfig = { url: 'http://localhost:8080', options: {} };

//Services
import { AuthenticationService } from "./services/authentication.service";
import { TokenInterceptorService } from "./services/token-interceptor.service";
import { AuthGuard } from './auth.guard';
import { NotificationService } from "./services/notification.service";
import { ContactsService } from "./services/contacts.service";
import { SocketService } from "./services/socket.service";

//Native services
import { Geolocation } from "@ionic-native/geolocation/ngx";



@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    SocketIoModule.forRoot(config) 
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    AuthenticationService,
    NativeStorage,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptorService,
      multi: true
    },
    AuthGuard,
    NotificationService,
    ContactsService,
    SocketService,
    Geolocation
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
