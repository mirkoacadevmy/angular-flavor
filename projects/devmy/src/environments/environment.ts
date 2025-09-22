import { Environment } from '../app/models/environment.model';

export const environment: Environment = {
  production: window.env.production,
  customerName: window.env.customerName,
};
