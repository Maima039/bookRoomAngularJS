# BookRoom

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 15.0.4.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

⭐️ Course Contents ⭐️
# Introduction
⌨️ (0:00:23) Introduction to Angular
⌨️ (0:09:56) Introduction to Typescript
⌨️ (0:28:57) SPA and Local Setup
# Typescript
⌨️ (0:42:09) Typescript Data Types and Functions
⌨️ (1:25:56) Classes and Interface
⌨️ (2:11:10) Typescript decorators and tsconfig file
# Angular Installation and Basics
⌨️ (2:20:24) Angular Installation and Binding Syntax
⌨️ (3:25:04) Built-in Directives
⌨️ (4:07:36) Built-in Pipes
⌨️ (4:30:10) Adding Bootstrap CSS to App
# Lifecycle Hook and Component Communication
⌨️ (4:44:53) ngOnInt and Component Communication using Input and Output
⌨️ (5:09:32) Change Detection and ngOnChanges
⌨️ (5:36:51) ngDoCheck
⌨️ (5:42:01) ViewChild, ViewChildren and AfterViewInit
⌨️ (6:22:41) Content Projection, AfterContentInit and OnDestroy
# Dependency Injection
⌨️ (6:44:55) Introduction
⌨️ (7:09:34) Resolution Modifiers
⌨️ (7:24:06) Value Providers
# HttpClient and RxJs
⌨️ (7:41:04) Setting Up HttpClientModule
⌨️ (7:44:07) HttpService , RxJs observables and http get
⌨️ (8:01:28) RxJs Observable and Observer
⌨️ (8:11:59) Http Put and Delete
⌨️ (8:27:10) Http Request
⌨️ (8:40:55) ShareReplay RxJs Operators
⌨️ (8:47:17) Async Pipe
⌨️ (8:57:15) catchError operator
⌨️ (9:05:29) map operator
⌨️ (9:09:06) Http Interceptor
⌨️ (9:29:11) APP_INITIALIZER

# Routing Basics -- roomBooking
⌨️ (9:35:06) Angular Router and default Route
## setup Router
Import RouterModule (自动生成的)
forRoot method to add multiple route config(自动生成的)
default route
Dynamic route: {path:'room',component:RoomComponent}
wild card route
⌨️ (9:51:01) Adding Angular material and navigation
https://material.angular.io/guide/getting-started
ng add @angular/material
ng generate @angular/material:navigation <component-name>
<a mat-list-item routerLink="rooms">Rooms</a>
<router-outlet></router-outlet>
⌨️ (10:00:35) Wild card, dynamic route and ActivatedRoute service
NotFound Page
{path:'rooms/:id',component:RoomsBookingComponent},
[routerLink]="['/rooms',room.roomNumber]"
传参
[routerLink]="['/rooms',room.roomNumber]"
// 用pipe，不用subscribe
id$ = this.router.paramMap.pipe(map((params) => params.get('roomId')));
⌨️ (10:23:19) ParamMap and Activate Route Service

# Template Driven Forms -- roomAdd
⌨️ (10:25:45) Introduction
#roomsForm="ngForm"
two-way binding--[(ngModel)]
⌨️ (10:50:20) Validation
HTML5:required,minlength
*ngIf="roomamanaties.errors?.['minlength']"
Submit -- [disabled]="roomsForm.invalid" to prevent blank
⌨️ (11:09:26) Pristine, Dirty State and Reset Form
⌨️ (11:19:08) Custom Directives and Custom Validation -- Loggin
ng g d hover
hover;emailValidator

# Advanced Routing
⌨️ (11:49:33) Navigation using Router Service
⌨️ (11:52:34) Feature and Routing Module
$ ng g m rooms --routing --flat=true
各部分的Module移到各个部分routing中
app.Module中的要记得删除
⌨️ (12:10:57) Nested and Child Route
imports: [RouterModule.forChild(routes)]
app.module中import的顺序很重要，rooms要放在app之前，先搜索rooms
⌨️ (12:19:41) Lazy Loading
一些不常用的 isolated的module，只有用的时候才去load
app-routing:
{path:'rooms',
loadChildren:()=>import('./room/rooms.module').then(m=>m.RoomsModule)},
ng build -c=production
⌨️ (12:35:49) Configure Lazy Loading using CLI
first ng g m search
then ng g c search
⌨️ (12:42:46) Using ProvidedIn Any -- services/config
https://dev.to/christiankohler/improved-dependeny-injection-with-the-new-providedin-scopes-any-and-platform-30bb
⌨️ (12:59:15) Router Events
app.component中：
private router:Router
⌨️ (13:06:00) Listening to Router Events

# Route Guards  -- guards folder
ng g g login
/room/room.guard
⌨️ (13:08:49) CanActivate
⌨️ (13:21:24) CanActivateChild
区分Admin和user
⌨️ (13:26:53) CanLoad

# Reactive Forms --booking
https://juejin.cn/post/6844903566772011015
⌨️ (13:30:44) Introduction
⌨️ (13:41:33) Using Material Controls
⌨️ (13:59:54) Nested Form Controls
⌨️ (14:17:38) Dynamic Forms
⌨️ (14:45:09) Built-in Validators
⌨️ (14:51:50) Reset Form
⌨️ (14:55:15) Control Level Validation
⌨️ (15:05:22) SetValue and PatchValue
⌨️ (15:09:23) ValueChanges and UpdateOn
updateOn: 'blur'
⌨️ (15:17:40) map operator with Form
⌨️ (15:29:55) Custom Validator 
validator/CustomValidator

# CanDeactivate Guard --booking.guard
⌨️ (15:57:10) CanDeactivate Guard and Form
Activated Routes-booking.component-roomId

form not pristine--cant redirect

# Custom Pipe --filter price
⌨️ (16:15:04) Custom Pipe
不建议在前端filter

# Resolve Guard --comment
⌨️ (16:25:39) Resolve Guard
防止先空白页 后加载数据
ng g m comment --route=comments --routing --module=app

# Global Error Handling --errorHandler
⌨️ (16:45:46) Error Handling

# Testing Basics --test
⌨️ (16:50:08) Introduction
https://blog.csdn.net/liumiaocn/article/details/102844624
ng test --code-coverage

⌨️ (16:56:59) First test
⌨️ (17:01:43) Testing Component and Service

# Deployment and CI/CD
⌨️ (17:15:44) Using Netlify for Deployment
⌨️ (17:28:06) GitHub Actions to Automate Tasks
