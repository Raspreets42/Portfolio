import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit {

  constructor() { }

  whatIDo = [
    "Demonstrate proficiency in both front-end and back-end technologies, including HTML & CSS, JavaScript, Angular, React, Node.js, MongoDB and SQL.",
    "Responsible for Built and optimized RESTful APIs, improving response times by 20-30 %.",
    "Participate in code reviews and code optimization, ensuring adherence to best practices and improving overall code quality.",
    "Demonstrate adaptability by quickly learning and implementing new tools and frameworks as needed.",
    "Participate in Agile/Scrum methodologies, ensuring timely delivery of high-quality software solutions.",
    "Collaboration with cross-functional teams, including designers and other developers, contributing to a positive and productive team environment",
  ];

  ngOnInit(): void {
  }

}
