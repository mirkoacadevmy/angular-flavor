export interface PluginOptions {
  groupId: string;
}

export interface PluginConfig<T> extends PluginOptions {
  target: T;
}

export type Plugins<T = any> = Record<string, PluginConfig<T>[]>;
