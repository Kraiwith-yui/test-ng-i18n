import { Component, LOCALE_ID, Inject } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'i18nDemo';
  languageList = [
    { code: 'en', label: 'English' },
    { code: 'hi', label: 'हिंदी' },
    { code: 'es', label: 'Espanol' },
  ];
  path: string;
  constructor(@Inject(LOCALE_ID) protected localeId: string) {
    this.path = location.pathname;
  }
}
