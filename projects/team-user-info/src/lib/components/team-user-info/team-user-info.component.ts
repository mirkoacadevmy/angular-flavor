import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Plugin } from '@devmy/decorators/plugin.decorator';

@Plugin({ groupId: 'details-page' })
@Component({
  selector: 'app-team-user-info',
  template: `<div
    class="flex justify-between items-center py-3 border-b border-gray-200"
  >
    <span class="text-sm font-semibold tracking-wider text-gray-600 uppercase">
      Team:
    </span>
    <span class="text-base font-medium text-gray-800">
      Team R&D
    </span>
  </div>`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TeamUserInfoComponent {}
