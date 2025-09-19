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

async function provideModules(): Promise<EnvironmentProviders> {
  let providers: EnvironmentProviders[] = [];

  for (const customerName of environment.customerName) {
    const module = await import(`../../${customerName}/src/public-api.ts`);
    providers = [...providers, module.provideCustomer()];
  }

  return makeEnvironmentProviders(providers);
}

async function runApplication(): Promise<void> {
  bootstrapApplication(App, {
    providers: [
      await provideModules(),
      provideBrowserGlobalErrorListeners(),
      provideZonelessChangeDetection(),
      provideRouter(routes),
    ],
  }).catch((err) => console.error(err));
}

runApplication();
