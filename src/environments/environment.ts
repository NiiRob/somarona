// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  fireConfig: {
    apiKey: 'AIzaSyBBEPdJErSYTN42Vcg1e7s1szj3vnbOJWA',
    authDomain: 'ronatrack-957c0.firebaseapp.com',
    databaseURL: 'https://ronatrack-957c0.firebaseio.com',
    projectId: 'ronatrack-957c0',
    storageBucket: 'ronatrack-957c0.appspot.com',
    messagingSenderId: '966343968495',
    appId: '1:966343968495:web:2c10acde9c8e6c96b43d1a',
    measurementId: 'G-80GW4Q1HSL'
  },
  coronaApi: 'https://api.covid19api.com',
  ipapi: 'https://ipapi.co',
  restApi: 'https://restcountries.eu/rest/v2/all?fields=name;flag',
  gapi: 'AIzaSyB-97njo5JCAj6Ju468pWI5IygpuAGzBW0'
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
