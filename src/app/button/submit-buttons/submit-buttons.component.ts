import {Component, ElementRef, OnInit} from '@angular/core';

@Component({
  selector: 'app-submit-buttons',
  templateUrl: './submit-buttons.component.html',
  styleUrls: ['./submit-buttons.component.styl']
})
export class SubmitButtonsComponent implements OnInit {

  classname: any;

  constructor(private elementRef: ElementRef) {}

  ngOnInit() {
    // this.elementRef.nativeElement.querySelector('.button').addEventListener('click', this.animateButton, false);

    this.classname = this.elementRef.nativeElement.querySelectorAll('.button');
    for (let i = 0; i < this.classname.length; i++) {
      this.classname[0].classList.add('success');
      this.classname[1].classList.add('error');

      this.classname[i].addEventListener('click', this.animateButton, false);
    }
  }

  animateButton(event: Event) {
    console.log( event );

    /* Убираем стартовые стили */
    event.preventDefault();
    (event.target as HTMLButtonElement).classList.remove('animateSpin');
    (event.target as HTMLButtonElement).classList.remove('success');
    (event.target as HTMLButtonElement).classList.remove('error');


    (event.target as HTMLButtonElement).classList.add('animateSpin');

    setTimeout(function() {
      (event.target as HTMLButtonElement).classList.remove('animateSpin');
      (event.target as HTMLButtonElement).classList.add('success');
    }, 4000);

    setTimeout(function() {
      (event.target as HTMLButtonElement).classList.remove('success');
    }, 6000);

  }
}
