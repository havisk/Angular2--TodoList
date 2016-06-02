import { bootstrap } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { TodoAppComponent, environment } from './app/';
import { ROUTER_PROVIDERS}  from '@angular/router';

if (environment.production) {
  enableProdMode();
}

bootstrap(TodoAppComponent, [
    ROUTER_PROVIDERS
]);

