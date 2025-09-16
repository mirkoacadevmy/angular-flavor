/*
 * Public API Surface of customer-x
 */

import { EnvironmentProviders, makeEnvironmentProviders } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './lib/app.routes';

export function provideCustomer(): EnvironmentProviders {
  return makeEnvironmentProviders([provideRouter(routes)]);
}
