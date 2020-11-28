import { Component, OnInit } from '@angular/core';
import { FireStoreQuery } from '../services/firestorequery.service';

@Component({
    selector: 'app-charts',
    templateUrl: './charts.component.html',
    styleUrls: ['./charts.component.scss']
})
export class ChartsComponent implements OnInit {

    dataLoaded = false;
    categCounts: number[] = [];

    graph: any = {};

    constructor(private firestorequery: FireStoreQuery) { }

    ngOnInit(): void {
        this.firestorequery.getLawCategoryCodeCounts('FELONY').subscribe((felonySnapShot) => {
            this.categCounts.push(felonySnapShot.size);
            this.firestorequery.getLawCategoryCodeCounts('VIOLATION').subscribe((violationSnapshot) => {
                this.categCounts.push(violationSnapshot.size);
                this.firestorequery.getLawCategoryCodeCounts('MISDEMEANOR').subscribe((misdemeanorSnapshot) => {
                    this.categCounts.push(misdemeanorSnapshot.size);
                    this.dataLoaded = true;

                    this.graph.data = [
                        {
                            x: ['FELONY', 'VIOLATION', 'MISDEMEANOR'], y: this.categCounts, type: 'bar'
                        }
                    ];
                    this.graph.layout = {
                        width: 960, height: 600, title: 'Counts of different types of complaints'
                    }
                });
            });
        });
    }

}
