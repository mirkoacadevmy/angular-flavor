import {
  Directive,
  effect,
  inject,
  input,
  TemplateRef,
  Type,
  ViewContainerRef,
} from '@angular/core';

import { PluginRegistryService } from '../services/plugin-registry.service';

@Directive({
  selector: '[libPluggable]',
})
export class PluggableDirective {
  private vcr = inject(ViewContainerRef);
  private template = inject<TemplateRef<unknown>>(TemplateRef);

  libPluggable = input<unknown>();
  libPluggableGroupId = input<string>('placeholder');

  constructor() {
    effect(() => {
      const registry = PluginRegistryService.getInstance();
      const plugins = registry.findBy<Type<unknown>>(
        this.libPluggableGroupId(),
      );

      if (!plugins.length) {
        this.vcr.createEmbeddedView(this.template);

        return;
      }

      plugins.forEach(({ target }) => {
        const ref = this.vcr.createComponent(target);
        ref.setInput('host', this.libPluggable());
      });
    });
  }
}
