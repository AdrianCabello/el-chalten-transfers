import { mergeApplicationConfig, ApplicationConfig } from '@angular/core';
import { provideServerRendering, withAppShell, withRoutes } from '@angular/ssr';
import { appConfig } from './app.config';
import { App } from './app';
import { serverRoutes } from './app.routes.server';

const serverConfig: ApplicationConfig = {
  providers: [
    provideServerRendering(withRoutes(serverRoutes), withAppShell(App)),
  ],
};

export const config = mergeApplicationConfig(appConfig, serverConfig);
