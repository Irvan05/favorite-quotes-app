import { Component } from '@angular/core';
import { Toggle } from 'ionic-angular';
import { SettingsService } from '../../services/settings';

@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html',
})

export class SettingsPage {
  constructor ( private settingsSvc: SettingsService) {}
  onToggle(toggle: Toggle) {
    this.settingsSvc.setBackground(toggle.checked);
  }

  isChecked() {
    return this.settingsSvc.isAltBackground();
  }
}
