import { Component, OnInit } from '@angular/core';
import { FireStoreQuery } from '../services/firestorequery.service';

@Component({
    selector: 'app-nyc-map',
    templateUrl: './nyc-map.component.html',
    styleUrls: ['./nyc-map.component.scss']
})
export class NycMapComponent implements OnInit {

    lats: number[] = [];
    lons: number[] = [];
    ofnsDesc: string[] = [];

    dataLoaded = false;

    graph: any = {
    };

    constructor(private firestorequery: FireStoreQuery) { }

    ngOnInit(): void {
        this.firestorequery.getLatLon().subscribe((querySnapshot) => {
            querySnapshot.forEach((doc: { data: () => any; }) => {
                if (doc.data().Latitude) {
                    if (doc.data().Longitude) {
                        this.lats.push(doc.data().Latitude);
                        this.lons.push(doc.data().Longitude);
                        this.ofnsDesc.push(`${doc.data().LAW_CAT_CD} - ${doc.data().OFNS_DESC}`);
                    }
                }
            });
            this.dataLoaded = true;
            this.graph.data = [
                {
                    type: 'scattermapbox',
                    lon: this.lons,
                    lat: this.lats,
                    mode: 'markers',
                    marker: {
                        size: 5
                    },
                    text: this.ofnsDesc
                }
            ];
            this.graph.layout = {
                width: 960,
                height: 600,
                autosize: true,
                hovermode: 'closest',
                mapbox: {
                    bearing: 0,
                    center: {
                        lat: 40.7,
                        lon: -74
                    },
                    pitch: 0,
                    zoom: 8
                },
                title: 'NYC Map View of Complaints'
            }
        });
    }


}
