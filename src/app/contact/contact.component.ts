import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  contacts = [
    {
      class: 'fa-solid fa-phone',
      social: 'Phone',
      username: '+91-8962942505',
      href: 'tel:+918962942505'
    },
    {
      class: 'fa-solid fa-envelope',
      social: 'Contact Me',
      username: 'raspreetsp04@gmail.com',
      href: 'mailto:raspreetsp04@gmail.com'
    },
    {
      class: 'fa-brands fa-github',
      social: 'Github',
      username: 'Raspreets42',
      href: 'https://github.com/Raspreets42'
    },
    {
      class: 'fa-solid fa-code',
      social: 'Leetcode',
      username: 'RaspreetSingh',
      href: 'https://leetcode.com/u/RaspreetSingh/'
    },
  ];
}
