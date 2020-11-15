# SpaceX Launch Programs

An application which would help users list and browse the launches by SpaceX program.

Deployed URL : [https://xt-spacex-launch.herokuapp.com/](https://xt-spacex-launch.herokuapp.com/)

|                                               Mobile                                               |                                             Tablet                                              |                                               Desktop                                               |
| :------------------------------------------------------------------------------------------------: | :---------------------------------------------------------------------------------------------: | :-------------------------------------------------------------------------------------------------: |
| ![](https://res.cloudinary.com/dw9ojz2hi/image/upload/v1605441971/xt-media/report/mobile-view.png) | ![](https://res.cloudinary.com/dw9ojz2hi/image/upload/v1605441980/xt-media/report/tab-view.png) | ![](https://res.cloudinary.com/dw9ojz2hi/image/upload/v1605441972/xt-media/report/desktop-view.png) |

## Application features

- Browse all launches by SpaceX Program.
- Filter by the launche year.
- Filter by launche success/failure.
- Filter by landing success/failure.
- A fully functional PWA application
- Fast and reliable with [pagespeed insights](https://developers.google.com/speed/pagespeed/insights/?url=https%3A%2F%2Fxt-spacex-launch.herokuapp.com%2F) score of 90-100%
- [WCAG 2.0 (level AA) verified](https://achecker.ca/checker/index.php)

|                                                 Pagespeed                                                  |                                              Web Accessibility                                              |
| :--------------------------------------------------------------------------------------------------------: | :---------------------------------------------------------------------------------------------------------: |
| ![](https://res.cloudinary.com/dw9ojz2hi/image/upload/v1605441952/xt-media/report/page-speed-insights.png) | ![](https://res.cloudinary.com/dw9ojz2hi/image/upload/v1605441971/xt-media/report/accessibility-review.png) |

#### Lighthouse Report in Chrome

![](https://res.cloudinary.com/dw9ojz2hi/image/upload/v1605441970/xt-media/report/lighthouse.png)


## Unit test report with 100% code coverage

![](https://res.cloudinary.com/dw9ojz2hi/image/upload/v1605441971/xt-media/report/code-coverage.png)

## Tech stack

- Angular 11
- NodeJS
- Angular Universal
- Angular PWA
- SCSS
- Jasmin + Karma
- GitHub
- Heroku
- VS Code

## Code quality checks

- Jasmin + Karma
- SonarLint
- TsLint
- Prettier

## Approach

Initial application load happens with Angular Universal(SSR).

Once the application loads on the brower then onwards all the tasks are performed on the client side.

With Angular PWA add-on the application is PWA enabled.

## Performance Optimizations

**Angular Build Optimizer** - Enabled build optimizer for reduced bundle size.

**No CSS Framework** - No external CSS framework has been used. Which helped to reduce bundle size and less code shifting.

**Image** - Using Cloudinary CDN for optimized WEBP images. Using[ cloudinary remote upload api](https://cloudinary.com/documentation/fetch_remote_images#auto_upload_remote_resources) to automatically upload images fetched from API response to cloudinary CDN.

**Lazyload** - Lazyloading images using newly introduced [browser native lazy-loading](https://web.dev/native-lazy-loading/)

**CLS** - Following guidelines on cumulative layout shift to achieve a better performance.

**Lessen DOM Elements and CSS**: Reduced the DOM elements and CSS to improve on performace.

## Instructions

**Installation**

Install the dependencies and devDependencies and start the server.

```sh
$ npm install
```

**Development**

```sh
$ npm run start
```

**Run Unit Test**

```sh
$ npm run test
```

**Generate Code Coveraage Report**

```sh
$ npm run codecoverage
```

**Production**

Production build

```sh
$ npm run build
```

Start production server

```sh
$ npm run serve:ssr
```

---

> Author: Subhasis Debsharma
