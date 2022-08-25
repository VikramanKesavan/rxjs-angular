import { Component, OnInit, VERSION } from '@angular/core';
import { of, from, map, tap, take } from 'rxjs';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  name = 'Angular ' + VERSION.major;

  ngOnInit() {
    // Creation of observable using of and from
    console.log('---Obseravle/Observer creation----');
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

    // Tip: Use Operator decision tree in rxjs website to
    // select the precise operator

    console.log('-----map Operator----');
    // Operators
    // source observable is the root of the data
    // map operator
    of(2, 4, 3, 6)
      .pipe(map((item) => item * 2))
      .subscribe({
        next: (item) => console.log(`map resulting item..${item}`),
        error: (err) => console.log(`map error occured ${err}`),
        complete: () => console.log(`map complete`),
      });

    console.log('----tap Operator----');
    // tap operator
    of(2, 4, 3, 6)
      .pipe(
        map((item) => item * 2),
        tap((item) => console.log(`$item am unchanged, but a here :)`))
      )
      .subscribe({
        next: (item) => console.log(`map resulting item..${item}`),
        error: (err) => console.log(`map error occured ${err}`),
        complete: () => console.log(`map complete`),
      });

    console.log('----take Operator----');
    of(2, 4, 3, 6)
      .pipe(
        map((item) => item * 2),
        take(2),
        tap((item) => console.log(`$item am unchanged, but a here :)`))
      )
      .subscribe({
        next: (item) => console.log(`map resulting item..${item}`),
        error: (err) => console.log(`map error occured ${err}`),
        complete: () => console.log(`map complete`),
      });
  }
}
