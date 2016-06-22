import {Component} from '@angular/core';
import * as _ from 'lodash';

@Component({
    selector: 'my-app',
    templateUrl: 'build/app.component.html',
    styleUrls: ['build/app.component.css']
})

export class AppComponent {
    public myTxt:string;
    public numArray:number[];

    constructor() {
        this.numArray = _.map([1, 2, 3], function (n) {
            return n * 3;
        });

        this.myTxt = 'uncovered';
        if (false === true) {
            console.log(this.myTxt);
        }
    }
}
