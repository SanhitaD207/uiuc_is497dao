import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    title = 'is497dao';
    links = [
        {
            name: 'Charts',
            url: 'charts'
        },
        {
            name: 'NYC Map',
            url: 'nyc-map'
        }
    ];
    constructor(public router: Router) { }
}
