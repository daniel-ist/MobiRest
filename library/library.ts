import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Platform, ToastController } from 'ionic-angular';
import { Cordova } from '@ionic-native/core';
import { PhotosProvider } from '../photos/photos';
import { Photo } from '../../models/photo';
import { Item } from '../../models/item';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite';
import { User } from '../user/user';
import { DatabaseProvider } from '../database/database';
import {AddFriendProvider} from '../add-friend/add-friend';

declare var cordova: any;


/* This is the library of functions that each endpoint of the app will do. On file Content.ts call function
    addRoute() to add this endpoints to the server*/

@Injectable()
export class LibraryProvider {

      

    constructor(public http: HttpClient, public platform: Platform, public photosProvider: PhotosProvider,
        private sqlite: SQLite, private user: User, private dbProvider: DatabaseProvider,
        public addFriendProvider: AddFriendProvider, 
        public toastCtrl: ToastController) {
        console.log('Hello LibraryProvider Provider');
    }

    public verifyToken(tokenReceived: number, myToken: number){
        if(tokenReceived == myToken){
          return true;
        }else{
          return false;
        }
    }

    public generateString(size: number) {
      var text = "";
      var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    
      for (var i = 0; i < size; i++)
        text += possible.charAt(Math.floor(Math.random() * possible.length));
    
      return text;
    }
    
    
    public handle_Get_testLoader(app, request){
      
      let codigo = "loaderio-4cac4f666e13c0b99c26ba6eeed00ef0";
      let length  = codigo.length;

      

        //var Length = data.length;
        var res = {
                status: 200,
                headers: {
                    'Access-Control-Allow-Methods':'GET, POST, PUT, DELETE, OPTIONS',
                    'Access-Control-Allow-Origin':'*',
                    //'Connection':'keep-alive',
                    'Content-Length': length
                },
                body: codigo
              }
      cordova.plugins.CorHttpd.sendResponse(request.requestId, res);
        
    
    }

    public handle_Get_100B(app, request){
      let possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
      let text = "";
      for (var i = 0; i < 100; i++){
       text += possible.charAt(Math.floor(Math.random() * possible.length));
      }
        console.log("esta é a frase: " + text);
        //var Length = data.length;
        var res = {
                status: 200,
                headers: {
                    'Access-Control-Allow-Methods':'GET, POST, PUT, DELETE, OPTIONS',
                    'Access-Control-Allow-Origin':'*',
                    //'Connection':'keep-alive',
                    'Content-Length': 100
                },
                body: text
              }
      cordova.plugins.CorHttpd.sendResponse(request.requestId, res);
    }

    public handle_Get_1K(app, request){
      
      let possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
      
      let text = "";
      for (var i = 0; i < 1000; i++){
       text += possible.charAt(Math.floor(Math.random() * possible.length));
      }

      

        //var Length = data.length;
        var res = {
                status: 200,
                headers: {
                    'Access-Control-Allow-Methods':'GET, POST, PUT, DELETE, OPTIONS',
                    'Access-Control-Allow-Origin':'*',
                    //'Connection':'keep-alive',
                    'Content-Length': 1000
                },
                body: text
              }
      cordova.plugins.CorHttpd.sendResponse(request.requestId, res);
        
    
    }

    public handle_Get_10K(app, request){
      
      let possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
      
      let text = "";
      for (var i = 0; i < 10000; i++){
       text += possible.charAt(Math.floor(Math.random() * possible.length));
      }


        //var Length = data.length;
        var res = {
                status: 200,
                headers: {
                    'Access-Control-Allow-Methods':'GET, POST, PUT, DELETE, OPTIONS',
                    'Access-Control-Allow-Origin':'*',
                    //'Connection':'keep-alive',
                    'Content-Length': 10000
                },
                body: text
              }
      cordova.plugins.CorHttpd.sendResponse(request.requestId, res);
        
      
    }

    public handle_Get_100k(app, request){

      
      let possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
      
      let text = "";
      for (var i = 0; i < 100000; i++){
       text += possible.charAt(Math.floor(Math.random() * possible.length));
      }

      

        console.log("esta é a frase: " + text);


        //var Length = data.length;
        var res = {
                status: 200,
                headers: {
                    'Access-Control-Allow-Methods':'GET, POST, PUT, DELETE, OPTIONS',
                    'Access-Control-Allow-Origin':'*',
                    //'Connection':'keep-alive',
                    'Content-Length': 100000
                },
                body: text
              }
      cordova.plugins.CorHttpd.sendResponse(request.requestId, res);
        
      
    }

    public handle_Get_1M(app, request){

      
      let possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
      
      let text = "";
      for (var i = 0; i < 1000000; i++){
       text += possible.charAt(Math.floor(Math.random() * possible.length));
      }

      

        console.log("esta é a frase: " + text);


        //var Length = data.length;
        var res = {
                status: 200,
                headers: {
                    'Access-Control-Allow-Methods':'GET, POST, PUT, DELETE, OPTIONS',
                    'Access-Control-Allow-Origin':'*',
                    //'Connection':'keep-alive',
                    'Content-Length': 1000000
                },
                body: text
              }
      cordova.plugins.CorHttpd.sendResponse(request.requestId, res);
        
      
    }

    public handle_Get_10M(app, request){

      
      let possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
      
      let text = "";
      for (var i = 0; i < 10000000; i++){
       text += possible.charAt(Math.floor(Math.random() * possible.length));
      }

      

        console.log("esta é a frase: " + text);


        //var Length = data.length;
        var res = {
                status: 200,
                headers: {
                    'Access-Control-Allow-Methods':'GET, POST, PUT, DELETE, OPTIONS',
                    'Access-Control-Allow-Origin':'*',
                    //'Connection':'keep-alive',
                    'Content-Length': 10000000
                },
                body: text
              }
      cordova.plugins.CorHttpd.sendResponse(request.requestId, res);
        
      
    }
/********************************************************************** */

public handle_Post_test(app, request){

  let text = "";
    var res = {
            status: 200,
            headers: {
                'Access-Control-Allow-Methods':'GET, POST, PUT, DELETE, OPTIONS',
                'Access-Control-Allow-Origin':'*',
                //'Connection':'keep-alive',
                'Content-Length': 0
            },
            body: text
          }
  cordova.plugins.CorHttpd.sendResponse(request.requestId, res);
}

/********************************************************************** */

    public handle_Post_Photos(app, request){
      console.log("metodo POST, rawinput: " + request.rawInput);
              var mensagem = JSON.parse(request.rawInput);
              var photo = {
                id : new Date().getTime(),
                profilePic : mensagem.profilePic,
                name :  mensagem.name,
                about : mensagem.about
              };
              console.log(request.rawInput);
              
              console.log("o que estamos a ver: " + mensagem.name + mensagem.profilePic);
              
              //console.log("photo: " + photo.name);
              var res = {
                status: 200,
                headers: {
                    'Content-Type': 'text/html',
                    'Content-Length': '22',
                },
                body: "<b>Make a request!</b>"
              }
            cordova.plugins.CorHttpd.sendResponse(request.requestId, res);
              //console.log("photo: " + photo);
              
              app.photosProvider.insert(photo);
    }

    public handle_Post_Signup(app, request){
      console.log(request.rawInput);

                var mensagem = JSON.parse(request.rawInput);
                  var accountInfo = {
                  name : mensagem.name,
                  username :  mensagem.username,
                  password : mensagem.password
                };

                app.user.insert(accountInfo);

                var token = (new Date().getTime()).toString();
                var length= token.length.toString();
                console.log("resposta signup:" + token);

                var res = {
                  status: 200,
                  headers: {
                      'Content-Type': 'text/html',
                      'Content-Length': length,
                  },
                  body: token
                }
              cordova.plugins.CorHttpd.sendResponse(request.requestId, res);
    }

    public handle_Post_Friends(app, request){
            var mensagem = JSON.parse(request.rawInput);
            var friendInfo = {
                username :  mensagem.username,
                token : mensagem.token
            };
            var userInfo = app.user.getUserInfo();

            // FALTA VER SE O TOKEN COINCIDE COM O DO PROPRIO UTILIZADOR QUE GEROU O QR CODE, SE SIM,
            //ADICIONA NA BASE DE DADOS FRIENDS O USERNAME DO AMIGO QUE LEU O CODIGO
            const verifiedToken = this.verifyToken(friendInfo.token, userInfo.token);

            if(verifiedToken){
              //token received is the same as current user's token, so store friends username on database
              
              app.addFriendProvider.insert(friendInfo, verifiedToken);
            }
    }
}
