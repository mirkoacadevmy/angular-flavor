import { ChangeDetectionStrategy, Component } from '@angular/core';

import { PluggableDirective } from '../../directives/pluggable.directive';
import { User } from '../../models/user.model';

@Component({
  selector: 'app-details-page',
  templateUrl: './details-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [PluggableDirective],
})
export default class DetailsPageComponent {
  user: User = {
    firstName: 'Mario',
    lastName: 'Rossi',
    age: 30,
    company: 'Devmy',
    job: 'Software Engineer',
  };
}
