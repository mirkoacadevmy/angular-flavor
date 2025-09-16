import { PluginOptions } from '../models/plugin.model';
import { PluginRegistryService } from '../services/plugin-registry.service';

export function Plugin<T>(opts: PluginOptions) {
  return (target: T): void => {
    const registry = PluginRegistryService.getInstance();

    registry.push({ ...opts, target });
  };
}
