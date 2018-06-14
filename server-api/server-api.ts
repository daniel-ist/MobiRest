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
import { LibraryProvider } from "../library/library";


declare var cordova: any;

export class endpoint_receiver {
  path: string;
  method: string;
  function : (app: any, request: any) => void;
  obj: any;
}

@Injectable()
export class ServerApiProvider {
  public theBoundCallback : Function;

  

  model: Photo;

  array_endpoint_receiver : endpoint_receiver[];
  

  constructor(public http: HttpClient, public platform: Platform, public photosProvider: PhotosProvider,
    private sqlite: SQLite, private user: User, private dbProvider: DatabaseProvider,
    public addFriendProvider: AddFriendProvider, private library: LibraryProvider,
    public toastCtrl: ToastController) {
    console.log('Hello ServerApiProvider Provider');

    this.array_endpoint_receiver = new Array<endpoint_receiver>();
    }

  
    public addRoute(path, method, funcao, obj){

      //para cada entrada do vector
      this.array_endpoint_receiver.push({path: path, method: method,  function: funcao, obj: obj});
      
    }

  enableServer(){
    cordova.plugins.CorHttpd.startServer({
      'www_root' : "htdocs",
      'port' : 8080
    });

    var apiProvider = this;
    cordova.plugins.CorHttpd.onRequest(
      function(request) { 
            // apiProvider.array_endpoint_receiver is a vector that contains the
            // list of endpoints that the developer programmed
        for(let entry of apiProvider.array_endpoint_receiver){

              //path is the URI, method is the HTTP method
            if((entry.path == request.path ) &&( entry.method == request.method)){
                  entry.function(apiProvider, request);
            }
        }
      }
    );
  }
}
