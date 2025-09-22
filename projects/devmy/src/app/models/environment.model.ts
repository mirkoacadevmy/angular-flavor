export interface Environment {
  production: boolean;
  customerName: string[];
}

declare global {
  interface Window {
    env: Environment;
  }
}
