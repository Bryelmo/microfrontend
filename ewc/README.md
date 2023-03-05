# EWC - Components library


EWC is an Angular components library developed for provide and support an easy development for the new features releases on software management.

## Features

- Components documentation powered by [StorybookJS](https://storybook.js.org/)
- Base UI provided by [PrimeNG](https://primeng.org/)
- Base CSS Grid provided by [PrimeFlex](https://www.primefaces.org/primeflex/)
- Base Icon set provided by [PrimeIcons](https://primeng.org/icons)
- Built-in global SCSS styles
- Built-in Theme SCSS variables

EWC with StorybookJS creates an environment to **develop**, **test** and **document** new angular components for management.
Every component can be developed from zero or enhanched with advantages of **PrimeTek** technologies.
Basically EWC is standard Angular library and it can be built with Angular CLI, dispatched and used as an usual third part library in or in another desired project.

## Installation

EWC requires [Node.js](https://nodejs.org/) v16.17.0 and [NPM](https://www.npmjs.com/) v8.15.0 to run.
Clone the repo on your local machine, install dependencies and run StorybookJS.
```sh
git clone ssh://git@gitlab.wiz-team.com:2233/wiz-team-it/ewc.git
cd ewc
npm install
npm run storybook
```
## Development
You can create a new component with normal Angular CLI
```sh
cd ewc
ng generate component components/MyNewComponent --project ewc
```
Declare your new component into EWCModule and expose it outer the library
```sh
nano ewc/projects/ewc/src/lib/ewc.module.ts
nano ewc/projects/ewc/src/public-api.ts
```
Develop and test your new component writing a [Storybook Story](https://storybook.js.org/docs/7.0/angular/writing-stories/introduction)

## Build
When your work is done, remember to update tag version into workspace and library package.json files
```sh
nano ewc/package.json
nano ewc/projects/ewc/package.json
```
Now you can build it
```sh
cd ewc
npm run build
```
If you want pack the library into archive file for install it into an Angular project
```sh
cd ewc
npm run pack-lib
```
## Contacts
EWC developed by Gabriele Morero - [gabriele.morero@gmail.com](mailto:gabriele.morero@gmail.com)