import { Component } from '@angular/core';

@Component({
  selector: 'app-views-home',
  templateUrl: './views-home.component.html',
  styleUrls: ['./views-home.component.css']
})
export class ViewsHomeComponent {
  stats=[
    {
      value:22, label: '# of Users'
    },
    {
      value:900, label: 'Revenue'
    },
    {
      value:500, label: 'Reviews'
    }
  ];

  items=[
    {
      image: '/assets/images/R.jpg',
      description:'Fantastic'
    },
    {
      image: '/assets/images/T.jpg',
      description:'greate'
    }
  ];
}
