import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig, TELEGRAM_WEB_APP } from './app/app.config';
import { AppComponent } from './app/app.component';
import WebApp from '@twa-dev/sdk';

bootstrapApplication(AppComponent, appConfig)
  .then(appRef => {
    WebApp.ready();
    console.log(WebApp.version);

    
    const injector = appRef.injector;
    const telegramWebApp = injector.get(TELEGRAM_WEB_APP);
    telegramWebApp.requestFullscreen();
  })
  .catch((err) => console.error(err));
