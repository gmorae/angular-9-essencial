import { Injectable } from '@angular/core';
import { HeaderDataModel } from '../models/headerData.mode';
import { BehaviorSubject } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class HeaderService {

    private _headerData = new BehaviorSubject<HeaderDataModel>({
        title: 'Inicio',
        icon: 'home'
    })

    constructor() { }

    get headerData(): HeaderDataModel {
        return this._headerData.value
    }

    set headerData(headerDataModel: HeaderDataModel) {
        this._headerData.next(headerDataModel)
    }
}
