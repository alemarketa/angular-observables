import { Component, OnDestroy, OnInit } from '@angular/core';

import { interval, Subscription, Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {

  private firstObsSubscription: Subscription;

  constructor() {
  }

  ngOnInit() {
    // this.firstObsSubscription = interval(1000).subscribe(count => {
    //   console.log(count);
    // });

    // build custom observable to replace interval
    let customInterval = Observable.create( observer => {
      let count = 0;
      setInterval(() => {
        observer.next(count);
        count ++
      }, 1000)
    })

    // subscribe to custom observable
   this.firstObsSubscription = customInterval.subscribe(data => console.log(data))

  }

  ngOnDestroy(): void {
    this.firstObsSubscription.unsubscribe();
  }

}
