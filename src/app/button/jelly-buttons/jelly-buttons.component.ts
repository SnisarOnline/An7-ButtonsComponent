import {AfterViewInit, Component, ElementRef} from '@angular/core';

@Component({
  selector: 'app-jelly-buttons',
  templateUrl: './jelly-buttons.component.html',
  styleUrls: ['./jelly-buttons.component.styl']
})
export class JellyButtonsComponent implements AfterViewInit  {
  // HTML Желе-Кнопка
  HTMLbutton: HTMLElement;
  colors = ['#f44336', '#e91e63', '#9c27b0', '#2196f3', '#4caf50', '#ff9800' ];

  constructor(private elementRef: ElementRef) {}

  ngAfterViewInit() {
    this.HTMLbutton = this.elementRef.nativeElement.querySelector('#body > #boxes > div'); // получим хтмл кнопку
    // this.HTMLbutton.addEventListener('mousemove', this.mouseMoveOriginal.bind(this)); // вешаем обработчик события, на движение мыши
    this.HTMLbutton.addEventListener('mousemove', this.newMouseMove.bind(this));

    // перебираем весь масив и на каждого вешаем
    // this.HTMLbutton = this.elementRef.nativeElement.querySelectorAll('#body > #boxes > div');
    // [].forEach.call(this.HTMLbutton, box => {
    //   box.addEventListener('mousemove', this.mouseMove.bind(this));
    // });
  }

  /**
   * Для одной кнопки. Работает.
   * Получение базвого цвета из переменной в стилях
   * @param event
   */
  mouseMoveOriginal(event) {
    // console.log( this.HTMLbutton );
    // console.log( event );
    // const size = Number.parseInt( getComputedStyle(event.path[0]).width );
    const size = Number.parseInt( getComputedStyle(this.HTMLbutton).width );
    const x = size * .3 * .7 + .7 * event.offsetX;
    const y = size * .3 * .7 + .7 * event.offsetY;
    const dx = size - x;
    const dy = size - y;

    const borderRadiusX1 = x / size;
    const borderRadiusX2 = dx / size;
    const borderRadiusX3 = dx / size;
    const borderRadiusX4 = x / size;

    const borderRadiusY1 = y / size;
    const borderRadiusY2 = y / size ;
    const borderRadiusY3 = dy / size ;
    const borderRadiusY4 = dy / size ;

    const selectedColor = this.HTMLbutton.style.getPropertyValue('background-color'); // получим цвет
    this.elementRef.nativeElement.querySelector('#body > #boxes').style.setProperty('--bg-color', selectedColor);// запишем цвет в переменную

// console.log( event.path[0] ); // только для Хрома
    this.HTMLbutton.style.setProperty('--BR-X1', '' + borderRadiusX1);
    this.HTMLbutton.style.setProperty('--BR-X2', '' + borderRadiusX2);
    this.HTMLbutton.style.setProperty('--BR-X3', '' + borderRadiusX3);
    this.HTMLbutton.style.setProperty('--BR-X4', '' + borderRadiusX4);

    this.HTMLbutton.style.setProperty('--BR-Y1', '' + borderRadiusY1);
    this.HTMLbutton.style.setProperty('--BR-Y2', '' + borderRadiusY2);
    this.HTMLbutton.style.setProperty('--BR-Y3', '' + borderRadiusY3);
    this.HTMLbutton.style.setProperty('--BR-Y4', '' + borderRadiusY4);
  }

  /**
   * Получение цета из CSS стилей
   * @param event
   */
  newMouseMove(event) {
    // console.log( this.HTMLbutton );
    // console.log( event );
    // const size = Number.parseInt( getComputedStyle(event.path[0]).width );
    const size = Number.parseInt( getComputedStyle(this.HTMLbutton).width );
    const x = size * .3 * .7 + .7 * event.offsetX;
    const y = size * .3 * .7 + .7 * event.offsetY;
    const dx = size - x;
    const dy = size - y;

    const borderRadiusX1 = x / size;
    const borderRadiusX2 = dx / size;
    const borderRadiusX3 = dx / size;
    const borderRadiusX4 = x / size;

    const borderRadiusY1 = y / size;
    const borderRadiusY2 = y / size ;
    const borderRadiusY3 = dy / size ;
    const borderRadiusY4 = dy / size ;

    const selectedColor = this.HTMLbutton.style.getPropertyValue('background-color'); // получим цвет
    this.elementRef.nativeElement.querySelector('#body > #boxes').style.setProperty('--bg-color', selectedColor);// запишем цвет в переменную

// console.log( event.path[0] ); // только для Хрома
    this.HTMLbutton.style.setProperty('--BR-X1', '' + borderRadiusX1);
    this.HTMLbutton.style.setProperty('--BR-X2', '' + borderRadiusX2);
    this.HTMLbutton.style.setProperty('--BR-X3', '' + borderRadiusX3);
    this.HTMLbutton.style.setProperty('--BR-X4', '' + borderRadiusX4);

    this.HTMLbutton.style.setProperty('--BR-Y1', '' + borderRadiusY1);
    this.HTMLbutton.style.setProperty('--BR-Y2', '' + borderRadiusY2);
    this.HTMLbutton.style.setProperty('--BR-Y3', '' + borderRadiusY3);
    this.HTMLbutton.style.setProperty('--BR-Y4', '' + borderRadiusY4);
  }
}


/*

  var boxes = document.querySelectorAll('#boxes > div');

  [].forEach.call(boxes, box => {
    box.addEventListener('mousemove', e => {
      document.body.style.setProperty(
        '--bg-color',
        box.style.getPropertyValue('--color')
      );

      var size = parseInt(getComputedStyle(box).width);

      // scaling
      var x = size * .3 * .7 + .7 * e.offsetX;
      var y = size * .3 * .7 + .7 * e.offsetY;

      box.style.setProperty('--x', x);
      box.style.setProperty('--y', y);
      box.style.setProperty('--size', size);
    });
  });

*/
