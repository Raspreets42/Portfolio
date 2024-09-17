import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css'],
})
export class SkillsComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  skills = [
    {
      name: 'HTML',
      src: '../../assets/img/external/svg/html.svg',
    },
    {
      name: 'CSS',
      src: '../../assets/img/external/svg/css..svg',
    },
    {
      name: 'Javascript',
      src: '../../assets/img/external/svg/javascript.svg',
    },
    {
      name: 'Typescript',
      src: '../../assets/img/external/svg/typescript.svg',
    },
    {
      name: 'Angular',
      src: '../../assets/img/external/svg/angular.svg',
    },
    {
      name: 'React',
      src: '../../assets/img/external/svg/react.svg',
    },
    {
      name: 'Node JS',
      src: '../../assets/img/external/svg/nodejs.svg',
    },
    {
      name: 'Express JS',
      src: '../../assets/img/external/svg/express-js.svg',
    },
    {
      name: 'MongoDB',
      src: '../../assets/img/external/svg/mongodb.svg',
    },
    {
      name: 'SQL',
      src: '../../assets/img/external/svg/sql.svg',
    },
    {
      name: 'API',
      src: '../../assets/img/external/svg/api.svg',
    },
    {
      name: 'Git',
      src: '../../assets/img/external/svg/git..svg',
    },
  ];
}
