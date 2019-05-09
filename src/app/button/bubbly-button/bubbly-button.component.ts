import {Component, ElementRef, OnInit} from '@angular/core';

@Component({
  selector: 'app-bubbly-button',
  templateUrl: './bubbly-button.component.html',
  styleUrls: ['./bubbly-button.component.styl']
})
export class BubblyButtonComponent implements OnInit {

  constructor(
    private elementRef: ElementRef
  ) {}

  ngOnInit() {
    this.elementRef.nativeElement.querySelector('#bodys>.bubbly-button').addEventListener('click', this.animateButton, false);
  }

  animateButton(event) {
    event.preventDefault();

    event.target.classList.remove('animate');
    // (event.target as HTMLButtonElement).classList.remove('animate');

    event.target.classList.add('animate');
    // (event.target as HTMLButtonElement).classList.add('animate');

    setTimeout(() => {
      event.target.classList.remove('animate');
      // (event.target as HTMLButtonElement).classList.remove('animate');
    }, 700);
  }
}
