import { Storage } from '@ionic/storage';
import { Injectable } from '@angular/core';
import { Doacao } from './doacao';


@Injectable()
export class DoacaoDao {

    constructor(private _storage: Storage) {

    }

}