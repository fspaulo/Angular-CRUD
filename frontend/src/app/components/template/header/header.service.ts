import {Injectable} from '@angular/core';
import {HeaderData} from "./header-data.model";
import {BehaviorSubject} from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class HeaderService {

    // behavior vai detectar qnd ouver mudanças internas
    private _headerData = new BehaviorSubject<HeaderData>({
        title: 'Início',
        icon: 'Home',
        routeUrl: '',
    })

    constructor() {
    }

    get headerData(): HeaderData{
        return this._headerData.value
    }

    set headerData(value: HeaderData) {
        this._headerData.next(value);
    }
}
