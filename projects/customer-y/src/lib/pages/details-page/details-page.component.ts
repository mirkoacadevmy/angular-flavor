import { ChangeDetectionStrategy, Component } from '@angular/core';

interface User {
  firstName: string;
  lastName: string;
  age: number;
  company: string;
  job: string;
}

@Component({
  selector: 'app-details-page',
  templateUrl: './details-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class DetailsPageComponent {
  users: User[] = [
    {
      firstName: 'John',
      lastName: 'Doe',
      age: 28,
      company: 'Tech Corp',
      job: 'Software Engineer',
    },
    {
      firstName: 'Jane',
      lastName: 'Smith',
      age: 32,
      company: 'Design Studio',
      job: 'UX Designer',
    },
    {
      firstName: 'Mike',
      lastName: 'Johnson',
      age: 45,
      company: 'Finance Inc',
      job: 'Product Manager',
    },
  ];
}
