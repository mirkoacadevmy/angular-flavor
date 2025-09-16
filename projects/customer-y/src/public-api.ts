/*
 * Public API Surface of customer-x
 */

import { EnvironmentProviders, makeEnvironmentProviders } from '@angular/core';
import { provideRouter } from '@angular/router';

export function provideCustomer(): EnvironmentProviders {
  return makeEnvironmentProviders([
    provideRouter([
      {
        path: 'details',
        loadComponent: () => {
          return import('./lib/pages/details-page/details-page.component');
        },
      },
    ]),
  ]);
}
