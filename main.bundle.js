webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/about/about.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"this.profile\">\r\n  <div [@visibilityChanged]=\"visible\" >\r\n      <div class=\"content\">\r\n        <div class=\"centeredImg\">\r\n          <img src=\"../../assets/muhFace.jpg\"/>\r\n        </div>\r\n        <div class=\"linksContainer\">\r\n          <div class=\"link\">\r\n            <a target=\"_blank\" href=\"https://www.linkedin.com/in/erkki-halinen-1104aa129/\">\r\n                <img src=\"./assets/iconmonstr-linkedin-1.svg\"/>\r\n            </a>\r\n          </div>\r\n          <div class=\"link\">\r\n            <a target=\"_blank\" href=\"https://github.com/ErkHal\">\r\n                <img src=\"./assets/github.svg\"/>\r\n            </a>\r\n          </div>\r\n          <div class=\"email\">\r\n            <a target=\"_blank\" href=\"mailto:erkkihalinen@gmail.com\"><i class=\"fa fa-at\"></i></a>\r\n          </div>\r\n        </div>\r\n        <section class=\"text\">\r\n          <h2 class=\"title\">About Me <i class=\"fa fa-male\"></i></h2>\r\n          <p>\r\n            I'm a {{ getAge() }}-year old ICT engineering student, who likes coding\r\n            with modern tools. I like to take the iniative when I'm starting a\r\n            new project, and consider myself equal parts teamplayer and independent\r\n            developer.\r\n\r\n          </p>\r\n          <p>\r\n            I like to do a lot of programming in my free-time,\r\n            since hobby projects are the best way to learn about new things.\r\n            The best thing about starting a new project is when you get something\r\n            to work for the first time, and you see the software starting to take\r\n            the right shape. I'm also interested in IoT, PCB Design and Hardware, and I \r\n            have a strong background as a hobbyist, who isn't afraid to get his hands dirty.\r\n          </p>\r\n          <p>\r\n\r\n          </p>\r\n        </section>\r\n        <section class=\"education\">\r\n            <h2 class=\"title\"> Education <i class=\"fa fa-graduation-cap\"></i></h2>\r\n            <p>\r\n              2016 - Metropolia UAS: Bsc of Engineering\r\n            </p>\r\n        </section>\r\n        <section class=\"job\">\r\n          <h2 class=\"title\">Experience <i class=\"fa fa-star\"></i></h2>\r\n          <div class=\"job\">\r\n                <h5>May - August 2018 - F-Secure Corporation, Helsinki</h5>\r\n                <p>Summer Trainee</p>\r\n                <p></p>\r\n                <p>AngularJS, Node.js, AWS, JavaEE, Spring, MySQL, Protractor, Jasmine</p>\r\n          </div>\r\n        </section>\r\n        <section class=\"skill-section\">\r\n          <h2 class=\"title\">Skills <i class=\"fa fa-wrench\"></i></h2>\r\n          <div class=\"flex\">\r\n            <div class=\"skill-section\">\r\n              <h4 class=\"subheader\">Languages</h4>\r\n              <p>Java (Android & Enterprise) <i class=\"fa fa-wrench\"></i> <i class=\"fa fa-wrench\"></i> <i class=\"fa fa-wrench\"></i></p>\r\n              <p>Javascript <i class=\"fa fa-wrench\"></i> <i class=\"fa fa-wrench\"></i> <i class=\"fa fa-wrench\"></i></p>\r\n              <p>Kotlin <i class=\"fa fa-wrench\"></i> <i class=\"fa fa-wrench\"></i></p>\r\n              <p>C# <i class=\"fa fa-wrench\"></i> <i class=\"fa fa-wrench\"></i></p>\r\n              <p>Swift <i class=\"fa fa-wrench\"></i> <i class=\"fa fa-wrench\"></i></p>\r\n              <p>MySQL <i class=\"fa fa-wrench\"></i> <i class=\"fa fa-wrench\"></i></p>\r\n            </div>\r\n\r\n            <div class=\"skill-section\">\r\n              <h4 class=\"subheader\">Frameworks</h4>\r\n              <p>Node.js <i class=\"fa fa-wrench\"></i> <i class=\"fa fa-wrench\"></i> <i class=\"fa fa-wrench\"></i></p>\r\n              <p>Angular <i class=\"fa fa-wrench\"></i> <i class=\"fa fa-wrench\"></i> <i class=\"fa fa-wrench\"></i></p>\r\n              <p>Protractor <i class=\"fa fa-wrench\"></i> <i class=\"fa fa-wrench\"></i> <i class=\"fa fa-wrench\"></i></p>\r\n              <p>AngularJS <i class=\"fa fa-wrench\"></i> <i class=\"fa fa-wrench\"></i></p>\r\n              <p>Spring <i class=\"fa fa-wrench\"></i> <i class=\"fa fa-wrench\"></i></p>\r\n            </div>\r\n            <div class=\"skill-section\">\r\n              <h4 class=\"subheader\">Other</h4>\r\n              <p>REST API development & integration <i class=\"fa fa-wrench\"></i> <i class=\"fa fa-wrench\"></i> <i class=\"fa fa-wrench\"></i></p>\r\n              <p>Linux OS Usage <i class=\"fa fa-wrench\"></i> <i class=\"fa fa-wrench\"></i> <i class=\"fa fa-wrench\"></i></p>\r\n              <p>IoT development <i class=\"fa fa-wrench\"></i> <i class=\"fa fa-wrench\"></i></p>\r\n              <p>Unity Game Engine <i class=\"fa fa-wrench\"></i></p>\r\n              <p>Amazon Web Services <i class=\"fa fa-wrench\"></i></p>\r\n            </div>\r\n          </div>\r\n        </section>\r\n      </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/about/about.component.scss":
/***/ (function(module, exports) {

module.exports = "/* You can add global styles to this file, and also import other style files */\nbody {\n  background-color: #d2ffe8;\n  margin: 0px;\n  padding: 0px; }\n.content {\n  -ms-flex-line-pack: center;\n      align-content: center;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center; }\n.content .centeredImg {\n    text-align: center;\n    -ms-flex-line-pack: center;\n        align-content: center; }\n.content .centeredImg img {\n      padding: 1rem;\n      max-width: 16rem;\n      max-height: 16rem;\n      border-radius: 50%; }\n.content .text {\n    -webkit-box-flex: 1;\n        -ms-flex: 1;\n            flex: 1;\n    background-color: #d2ffe8;\n    color: #333; }\n.content .education {\n    background-color: #8bbabb;\n    color: #333; }\n.content .education p {\n      font-size: 1.2rem;\n      font-size: 1.2rem; }\n.content .job {\n    background-color: #6c7b95;\n    list-style: none;\n    padding: 1rem;\n    color: #FFF; }\n.content .skill-section {\n    background-color: #464159;\n    color: #FFF;\n    width: 100%; }\n.content .skill-section .subheader {\n      padding-top: 1rem; }\n.content section {\n    padding: 2rem;\n    font-family: \"Montserrat\", \"Montserrat\", Helvetica, Arial, sans-serif;\n    text-align: center;\n    color: #FFF; }\n.content section .title {\n      padding-bottom: 1rem; }\n.flex {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between; }\n@media screen and (max-width: 1000px) {\n    .flex {\n      display: block; } }\n.linksContainer {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center; }\n.linksContainer .link {\n    display: inherit;\n    -ms-flex-line-pack: center;\n        align-content: center;\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center;\n    padding: 1%;\n    margin-bottom: 1.9rem; }\n.linksContainer .link img {\n      width: 5rem;\n      height: 5rem; }\n.linksContainer .link img:hover {\n        -webkit-filter: blur(5px);\n        filter: blur(5px); }\n.linksContainer .email {\n    display: inherit;\n    -ms-flex-line-pack: center;\n        align-content: center;\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center;\n    padding: 1%;\n    font-size: 5rem;\n    -webkit-text-decoration-color: #333;\n            text-decoration-color: #333; }\n.linksContainer .email a {\n      color: #333; }\n.linksContainer .email:hover {\n      -webkit-filter: blur(5px);\n      filter: blur(3px); }\n"

/***/ }),

/***/ "./src/app/about/about.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__github_service__ = __webpack_require__("./src/app/github.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_animations__ = __webpack_require__("./node_modules/@angular/animations/esm5/animations.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AboutComponent = /** @class */ (function () {
    function AboutComponent(gitService) {
        this.gitService = gitService;
    }
    // Loads my GitHub's profile pic for the About Me section
    AboutComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.gitService.getProfile()
            .subscribe(function (result) {
            _this.profile = result;
        }, function (err) {
            console.log('Oops !');
            console.log(err);
        });
    };
    AboutComponent.prototype.getAge = function () {
        var birthday = new Date('1995-02-24');
        var ageDifMs = Date.now() - birthday.getTime();
        var ageDate = new Date(ageDifMs);
        return Math.abs(ageDate.getUTCFullYear() - 1970);
    };
    AboutComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-about',
            template: __webpack_require__("./src/app/about/about.component.html"),
            styles: [__webpack_require__("./src/app/about/about.component.scss")],
            animations: [
                Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["j" /* trigger */])('visibilityChanged', [
                    Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["g" /* state */])('shown', Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["h" /* style */])({ opacity: 1 })),
                    Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["g" /* state */])('hidden', Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["h" /* style */])({ opacity: 0 })),
                    Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["i" /* transition */])('* => *', Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["e" /* animate */])('.5s'))
                ])
            ]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__github_service__["a" /* GithubService */]])
    ], AboutComponent);
    return AboutComponent;
}());



/***/ }),

/***/ "./src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__about_about_component__ = __webpack_require__("./src/app/about/about.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    { path: '', pathMatch: 'full', redirectTo: 'about' },
    { path: 'about', component: __WEBPACK_IMPORTED_MODULE_2__about_about_component__["a" /* AboutComponent */] },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */].forRoot(routes, { useHash: true })],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\r\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.scss")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_animations__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_routing_module__ = __webpack_require__("./src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__about_about_component__ = __webpack_require__("./src/app/about/about.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__github_service__ = __webpack_require__("./src/app/github.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_7__about_about_component__["a" /* AboutComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_4__app_routing_module__["a" /* AppRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["b" /* HttpClientModule */]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_8__github_service__["a" /* GithubService */], __WEBPACK_IMPORTED_MODULE_5__angular_common__["d" /* HashLocationStrategy */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/github.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GithubService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var GithubService = /** @class */ (function () {
    function GithubService(http) {
        this.http = http;
        this.rootApiUrl = 'https://api.github.com/';
    }
    GithubService.prototype.getProfile = function () {
        return this.http.get(this.rootApiUrl + 'users/ErkHal');
    };
    GithubService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], GithubService);
    return GithubService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map