/*
 * Public API Surface of skills-user-info
 */

import { EnvironmentProviders, makeEnvironmentProviders } from '@angular/core';
import { SkillsUserInfoComponent } from './lib/components/skills-user-info/skills-user-info.component';

export function provideCustomer(): EnvironmentProviders {
  return makeEnvironmentProviders([SkillsUserInfoComponent]);
}

