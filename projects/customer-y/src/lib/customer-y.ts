import { EnvironmentProviders, makeEnvironmentProviders } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';

export function provideCustomer(): EnvironmentProviders {
  return makeEnvironmentProviders([provideRouter(routes)]);
}
