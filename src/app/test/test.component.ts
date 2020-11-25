import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
    selector: 'app-test',
    templateUrl: './test.component.html',
    styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit {

    constructor(private firestore: AngularFirestore) { }

    firestoreUsersCollection = this.firestore.collection('users');

    ngOnInit(): void {
        this.firestoreUsersCollection.snapshotChanges().subscribe((users) => {
            for(const user of users) {
                console.log(user.payload.doc.data());
            }
        })
    }

}
