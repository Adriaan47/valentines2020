import { Component, OnInit, ViewChild, ElementRef, Renderer2 } from '@angular/core';
import { element } from 'protractor';

@Component({
  selector: 'app-heartBeat',
  templateUrl: './heartBeat.component.html',
  styleUrls: ['./heartBeat.component.scss']
})
export class HeartBeatComponent implements OnInit {


  public img1: string = "../../../../assets/burningRose4K.jpg"
  public img2: string = "../../../../assets/roseFireSmoke4K.jpg"
  public img3: string = "../../../../assets/roseOled4K.jpg"
  public img4: string = "../../../../assets/Angel.jpeg"
  public header: string = "../../../../assets/Header.jpg"

  @ViewChild('nat') el: ElementRef;

  private nat: Element;

  constructor(private rend: Renderer2) { }

  ngOnInit() {
    this.showSlides();
  }
  public slideIndex: number = 0;


  private showSlides() {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    for (i = 0; i < slides.length; i++) {
      slides[i];
      // this.rend.addClass(this.el.nativeElement, 'top');
    }
    this.slideIndex++;
    if (this.slideIndex > slides.length) { this.slideIndex = 1 }
    slides[this.slideIndex - 1];
    setTimeout(this.showSlides, 2000); // Change image every 2 seconds
  }








}
