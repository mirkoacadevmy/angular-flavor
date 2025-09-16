import { Injectable } from '@angular/core';

import { PluginConfig, Plugins } from '../models/plugin.model';

@Injectable({
  providedIn: 'root',
})
export class PluginRegistryService {
  private plugins: Plugins = {};
  private static instance: PluginRegistryService;

  static getInstance(): PluginRegistryService {
    if (!this.instance) {
      this.instance = new PluginRegistryService();
    }

    return this.instance;
  }

  contains(groupId: string): boolean {
    return !!this.plugins[groupId];
  }

  findBy<T>(groupId: string): PluginConfig<T>[] {
    if (this.contains(groupId)) {
      return this.plugins[groupId];
    }

    return [];
  }

  push<T>(config: PluginConfig<T>): void {
    const plugins = this.plugins[config.groupId] ?? [];
    const updated = [...plugins, config];

    this.plugins = { ...this.plugins, [config.groupId]: updated };
  }
}
