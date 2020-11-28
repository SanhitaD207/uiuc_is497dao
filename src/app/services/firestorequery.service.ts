import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class FireStoreQuery {

    constructor(private firestore: AngularFirestore) { }

    getLatLon(): Observable<any> {
        const complaintsCollection = this.firestore.collection('Sample_NYC_Complaint');
        return complaintsCollection.get();
    }

    getLawCategoryCodeCounts(code: string): Observable<any> {
        const complaintsCollection = this.firestore.collection('Sample_NYC_Complaint', ref => ref.where('LAW_CAT_CD', '==', code));
        return complaintsCollection.get();
    }

}
