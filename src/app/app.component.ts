import { Component, OnInit, VERSION } from '@angular/core';
import { of, from, map } from 'rxjs';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  name = 'Angular ' + VERSION.major;

  ngOnInit() {
    // Creation of observable using of and from
    of(2, 4, 6, 8).subscribe((item) => console.log(item));
    from([2, 3, 4, 5, 6]).subscribe({
      next: (item) => console.log(`resulting item..${item}`),
      error: (err) => console.log(`error occured ${err}`),
      complete: () => console.log(`complete`),
    });

    of('hello', 'fellow', 'grello').subscribe((item) => console.log(item));
    from(['hello', 'fellow', 'grello']).subscribe({
      next: (item) => console.log(`resulting item..${item}`),
      error: (err) => console.log(`error occured ${err}`),
      complete: () => console.log(`complete`),
    });

    // Operators
    // source observable is the root of the data
    of(2, 4, 3, 6)
      .pipe(map((item) => item * 2))
      .subscribe({
        next: (item) => console.log(`map resulting item..${item}`),
        error: (err) => console.log(`map error occured ${err}`),
        complete: () => console.log(`map complete`),
      });
  }
}
