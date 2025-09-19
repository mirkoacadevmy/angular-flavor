/*
 * Public API Surface of team-user-info
 */

import { EnvironmentProviders, makeEnvironmentProviders } from '@angular/core';
import { TeamUserInfoComponent } from './lib/components/team-user-info/team-user-info.component';

export function provideCustomer(): EnvironmentProviders {
  return makeEnvironmentProviders([TeamUserInfoComponent]);
}
