import {
  EnvironmentProviders,
  makeEnvironmentProviders,
  provideBrowserGlobalErrorListeners,
  provideZonelessChangeDetection,
} from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';

import { App } from './app/app';
import { routes } from './app/app.routes';
import { environment } from './environments/environment';

async function providePlannetCustomer(): Promise<EnvironmentProviders> {
  if (environment.customerName) {
    const module = await import(`../../customer-x/src/public-api`);

    return makeEnvironmentProviders([module.provideCustomer()]);
  }

  return makeEnvironmentProviders([]);
}

async function runApplication(): Promise<void> {
  bootstrapApplication(App, {
    providers: [
      await providePlannetCustomer(),
      provideBrowserGlobalErrorListeners(),
      provideZonelessChangeDetection(),
      provideRouter(routes),
    ],
  }).catch((err) => console.error(err));
}

runApplication();
