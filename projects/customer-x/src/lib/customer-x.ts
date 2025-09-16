import { EnvironmentProviders, makeEnvironmentProviders } from '@angular/core';

import { SkillsUserInfoComponent } from './components/skills-user-info/skills-user-info.component';

export function provideCustomer(): EnvironmentProviders {
  return makeEnvironmentProviders([SkillsUserInfoComponent]);
}
