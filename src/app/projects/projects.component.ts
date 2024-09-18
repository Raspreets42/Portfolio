import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
})
export class ProjectsComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  @Output() closeModal = new EventEmitter<void>();

  onClose() {
    this.closeModal.emit();
    this.showModal = false;
  }

  showModal = false;

  clickedProject = {
    'role': '',
    'Desc': ''
  };

  assignClickedProject(proj: any){
    this.clickedProject = proj;
    this.showModal = true;
  }

  projects = [
    {
      Name: 'AgriPilot.AI',
      role: 'Full Stack Developer',
      Link: '',
      screenshot:
        '../../assets/img/external/Project-screenshots/agriculture.webp',
      headline: 'AgriPilot.AI is an AI-driven agriculture platform which provides analytics-driven sights to the farmers and agribusiness across their value chains to make farming sustainable and profitable.',
      Desc: '• Developed efficient and secure web applications, focusing on improving user interactions with websites and applications.\n' +
          '• Identified and resolved complex technical issues, showcasing strong analytical and problem-solving abilities.\n' +
          '• Collaborated with the web development team to design and implement user interfaces for client websites using HTML, JavaScript, and Angular.\n' +
          '• Designed and implemented RESTful APIs to ensure seamless communication between front-end and back-end systems.',
      stack: [
        {
          img: '../../assets/img/external/svg/javascript.svg',
        },
        {
          img: '../../assets/img/external/svg/angular.svg',
        },
        {
          img: '../../assets/img/external/svg/go.png',
        },
        {
          img: '../../assets/img/external/svg/api.svg',
        },
        {
          img: '../../assets/img/external/svg/sql.svg',
        },
        {
          img: '../../assets/img/external/svg/mongodb.svg',
        },
      ],
    },
    {
      Name: 'Landing Zone - CloudIntel',
      role: 'Full Stack Developer',
      Link: '',
      screenshot:
        '../../assets/img/external/Project-screenshots/landingzone.png',
      headline: 'Landing zone is an module integrated in our CloudIntel product which provides the features to deploy the resources on Microsoft services using terraform scripts.',
      Desc: '• As a Full-Stack Developer, I was responsible for efficient and secure web application, RESTful API’s\n' +
          '• Integrated third-party API’s to enhance functionality and streamline user experiences.\n' +
          '• Optimized code and application performance by implementing efficient debugging strategies, reducing errors and improving response times.\n' +
          '• Engaged in and led code reviews to uphold code quality, enforce best practices, and facilitate knowledge exchange within the team.\n',
      stack: [
        {
          img: '../../assets/img/external/svg/html.svg',
        },
        {
          img: '../../assets/img/external/svg/css..svg',
        },
        {
          img: '../../assets/img/external/svg/typescript.svg',
        },
        {
          img: '../../assets/img/external/svg/angular.svg',
        },
        {
          img: '../../assets/img/external/svg/nodejs.svg',
        },
        {
          img: '../../assets/img/external/svg/sql.svg',
        },
        {
          img: '../../assets/img/external/svg/express-js.svg',
        },
      ],
    },
    {
      Name: 'Talent Management Portal',
      role: 'Full Stack Developer',
      Link: '',
      screenshot:
        '../../assets/img/external/Project-screenshots/talent.png',
      headline: 'A software solution to oversee employee skills and development, enhancing the ability to attract and retain top talent.',
      Desc: '• Responsible for building a secure and efficient web application, designing RESTful APIs, and managing API integration.\n' +
          '• Implemented effective debugging strategies to streamline code and enhance overall application performance',
      stack: [
        {
          img: '../../assets/img/external/svg/javascript.svg',
        },
        {
          img: '../../assets/img/external/svg/angular.svg',
        },
        {
          img: '../../assets/img/external/svg/api.svg',
        },
        {
          img: '../../assets/img/external/svg/nodejs.svg',
        },
        {
          img: '../../assets/img/external/svg/express-js.svg',
        },
        {
          img: '../../assets/img/external/svg/sql.svg',
        },
      ],
    },
  ];
}
