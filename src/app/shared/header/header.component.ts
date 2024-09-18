import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  phoneTo = "tel:+918962942505"
  mailTo = "mailto:raspreetsp04@gmail.com";

  ngOnInit(): void {
  }

}
