(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<app-header></app-header>\n<div class=\"body-place\">\n<router-outlet></router-outlet>\t\n</div>\n<app-left-nav></app-left-nav>\n<app-footer></app-footer>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/error/field-error-display/field-error-display.component.html":
/*!*******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/error/field-error-display/field-error-display.component.html ***!
  \*******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"displayError\" >\n  <span class=\"glyphicon glyphicon-remove form-control-feedback\"></span>\n  <span class=\"error help-block\">{{ errorMsg }}</span>\n  <span class=\"error help-block\" [innerHTML]=\"errorMsgHtml\"></span>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/error/not-found/not-found.component.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/error/not-found/not-found.component.html ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"wow fadeIn\" data-wow-duration=\"2000\" >\n\t<section class=\"top-section\">\n\t\t<div class=\"container\">\n\t\t\t<div class=\"row\">\n\t\t\t\t<div class=\"title\">\n\t\t\t\t\t<h2 class=\"text-center\" style=\"font-size:200px;\"><b class=\"theme_color\">404</b></h2>\n\t\t\t\t\t<div class=\"col-sm-12 col-md-8 col-md-offset-2 text-center mb40\">\n\t\t\t\t\t\t<p class=\"mb0\"><b>THIS PAGE YOU REQUESTED COULD NOT BE FOUND!</b></p>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\n\t\t\t\t<div class=\"col-sm-12 col-md-8 col-md-offset-2 text-center mb40\"><hr class=\"hr_styles\" /></div>\n\t\t\t</div>\n\t\t</div>\n\t</section>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/layout/footer/footer.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/layout/footer/footer.component.html ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<footer class=\"pt60\" >\n\t<section>\n\t\t<div class=\"hide_responsive container\">\n\t\t\t<div class=\"row columns_men mb20\">\n\t\t\t\t<div class=\"col-md-3 col-sm-3 col-xs-4\">\n\t\t\t\t\t<h5 class=\"mt0\"><b>COMPANY</b></h5>\n\t\t\t\t\t<p class=\"mb30 list-col\">\n\t\t\t\t\t\t<a [routerLink]=\"['/about-us']\" [routerLinkActive]=\"['active']\" class=\"option-about-us\">About Us</a><br />\n\t\t\t\t\t\t<a [routerLink]=\"['/magazine']\" [routerLinkActive]=\"['active']\" class=\"option-magazine\">Magazine</a><br />\n\t\t\t\t\t\t<a [routerLink]=\"['/careers']\" [routerLinkActive]=\"['active']\" class=\"option-careers\">Careers</a><br />\n\t\t\t\t\t\t<a [routerLink]=\"['/how-it-works-professionals']\" [routerLinkActive]=\"['active']\" class=\"option-how-it-works-professionals\">How it Works</a><br />\n\t\t\t\t\t\t<!-- <a [routerLink]=\"['/university']\" [routerLinkActive]=\"['active']\" class=\"option-salonhome-university\">SalonHome University</a><br /> -->\n\t\t\t\t\t\t<a [routerLink]=\"['/join-our-team']\" [routerLinkActive]=\"['active']\" class=\"option-join-our-team\">Join our Team</a><br />\n\t\t\t\t\t\t<a [routerLink]=\"['/events']\" [routerLinkActive]=\"['active']\" class=\"option-events\">Events</a>\n\t\t\t\t\t</p>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"col-md-3 col-sm-3 col-xs-4 p0\">\n\t\t\t\t\t<h5 class=\"mt0\"><b>SERVICES</b></h5>\n\t\t\t\t\t<p class=\"mb30 list-col\">\n\t\t\t\t\t\t<a [routerLink]=\"['/services-hair']\" [routerLinkActive]=\"['active']\" class=\"option-services-hair\">Hair</a><br />\n\t\t\t\t\t\t<a [routerLink]=\"['/services-barbers']\" [routerLinkActive]=\"['active']\" class=\"option-services-barbers\">Barber</a><br />\n\t\t\t\t\t\t<a [routerLink]=\"['/services-nail']\" [routerLinkActive]=\"['active']\" class=\"option-services-nail\">Nail</a><br />\n\t\t\t\t\t\t<a [routerLink]=\"['/services-makeup']\" [routerLinkActive]=\"['active']\" class=\"option-services-makeup\">Makeup</a><br />\n\t\t\t\t\t\t<a [routerLink]=\"['/services-massage']\" [routerLinkActive]=\"['active']\" class=\"option-services-massage\">Massage</a><br />\n\t\t\t\t\t\t<a [routerLink]=\"['/services-skin']\" [routerLinkActive]=\"['active']\" class=\"option-services-skin\">Spa</a><br />\n\t\t\t\t\t\t<a [routerLink]=\"['/services-available-spaces']\" [routerLinkActive]=\"['active']\" class=\"option-services-available-spaces\">Space Rental</a>\n\t\t\t\t\t</p>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"col-md-3 col-sm-3 col-xs-4 p0\">\n\t\t\t\t\t<h5 class=\"mt0\"><b>HELP</b></h5>\n\t\t\t\t\t<p class=\"mb30 list-col\">\n\t\t\t\t\t\t<a [routerLink]=\"['/help']\" [routerLinkActive]=\"['active']\" class=\"option-help\" data-du-smooth-scroll data-du-scrollspy>Help</a><br />\n\t\t\t\t\t\t<a [routerLink]=\"['/contact-us']\" [routerLinkActive]=\"['active']\" class=\"option-contact-us\">Contact Us</a><br />\n\t\t\t\t\t\t<a [routerLink]=\"['/terms-and-conditions']\" [routerLinkActive]=\"['active']\" class=\"option-terms-and-conditions\">Terms & Conditions</a><br />\n\t\t\t\t\t\t<a [routerLink]=\"['/privacy-policy']\" [routerLinkActive]=\"['active']\" class=\"option-privacy-policy\">Privacy Policy</a>\n\t\t\t\t\t</p>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"col-md-3 col-sm-3 col-xs-12 section_apps\">\n\t\t\t\t\t<div class=\"middle_footer text-right\">\n\t\t\t\t\t\t<a href=\"https://play.google.com/store/apps/details?id=com.salon.home\" target=\"_blank\"><img src=\"assets/images/gplay-small.jpg\" alt=\"\" class=\"mb10\" width=\"134\" height=\"47\" /></a>\n\t\t\t\t\t\t<img src=\"assets/images/apple-small.jpg\" alt=\"\" width=\"132\" height=\"46\" />\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\n\t\t<div class=\"container secondary\">\n\t\t\t<div class=\"row\">\n\t\t\t\t<div class=\"col-md-3 col-xs-12 text-left l-logo\"><a [routerLink]=\"['/home']\" title=\"\" class=\"logo-effect-res\"><img src=\"assets/images/logo-salon-new.png\" alt=\"Logo Salon Home\" width=\"121\" height=\"54\"/></a></div>\n\t\t\t\t<div class=\"col-md-6 col-xs-12 text-center l-copy\">\n\t\t\t\t\t<p>\n\t\t\t\t\t\t<span class=\"small_2\">Copyrights. &copy; {{anio}}. SalonHome All rights reserved.</span><br />\n\t\t\t\t\t</p>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"col-md-3 col-xs-12 text-right l-social\">\n\t\t\t\t\t<ul class=\"menu-socials\">\n\t\t\t\t\t\t<li><a target=\"_blank\" href=\"https://www.facebook.com/mysalonhome/\"><i class=\"fa fa-facebook\"></i></a></li>\n\t\t\t\t\t\t<li><a target=\"_blank\" href=\"https://twitter.com/salonhome\"><i class=\"fa fa-twitter\"></i></a></li>\n\t\t\t\t\t\t<li><a target=\"_blank\" href=\"https://www.instagram.com/mysalonhome/\"><i class=\"fa fa-instagram\"></i></a></li>\n\t\t\t\t\t\t<li><a target=\"_blank\" href=\"https://www.linkedin.com/company/salonhome-inc.\"><i class=\"fa fa-linkedin\"></i></a></li>\n\t\t\t\t\t</ul>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</section>\n</footer>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/layout/header/header.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/layout/header/header.component.html ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav id=\"top-main-nav\" class=\"navbar default\">\n\t<div class=\"container\">\n\t\t<div class=\"navbar-header\">\n\t\t\t<a [routerLink]=\"['/home']\" class=\"brand-logo logo-effect-res\">\n\t\t\t\t<img src=\"assets/images/logo-salon-new.png\" alt=\"Salon Home\" height=\"64\"/>\n\t\t\t</a>\n\t\t\t<button type=\"button\" class=\"navbar-toggle custom-button-toggle display_responsive\">\n\t\t\t\t<span class=\"icon-bar\"></span>\n\t\t\t\t<span class=\"icon-bar\"></span>\n\t\t\t\t<span class=\"icon-bar\"></span>\n\t\t\t</button>  \n\t\t</div> \n\t\t<div class=\"collapse navbar-collapse p0 hide_responsive\" id=\"myNavbar\">\n\t\t\t\n\t\t\t<ul class=\"nav navbar-nav pull-right\">\n\t\t\t\t<li>\n\t\t\t\t\t<a id=\"join-beta-2\" [routerLink]=\"['/try-it-free/Client']\" [routerLinkActive]=\"['active']\" class=\"child-c\" data-du-smooth-scroll data-du-scrollspy><span class=\"button-single\"> Customer Community</span></a>\n\t\t\t\t</li>\n\t\t\t\t<li>\t\t\t\t\n\t\t\t\t\t<a id=\"join-beta-2\" [routerLink]=\"['/try-it-free/Professional']\" [routerLinkActive]=\"['active']\" class=\"child-c\" data-du-smooth-scroll data-du-scrollspy><span class=\"button-single\"> Professional Community</span></a>\n\t\t\t\t</li>\n\t\t\t\t<li>\n\t\t\t\t\t<button type=\"button\" class=\"navbar-toggle custom-button-toggle\">\n\t\t\t\t\t\t<span class=\"icon-bar\"></span>\n\t\t\t\t\t\t<span class=\"icon-bar\"></span>\n\t\t\t\t\t\t<span class=\"icon-bar\"></span>\n\t\t\t\t\t</button>\n\t\t\t\t</li>\n\t\t\t</ul>\n\t\t</div>\n\t</div>\n</nav>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/layout/left-nav/left-nav.component.html":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/layout/left-nav/left-nav.component.html ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"collapse-left-nav p0 bg-primary\" id=\"myNavLeftBar\">\n\t<a href=\"javascript:;\" class=\"button-close pull-right\"></a>\n\t<ul class=\"nav-lbar pull-right text-right\">\n\t\t<li>\n\t\t\t<a id=\"join-beta\" [routerLink]=\"['/download']\" target=\"_blank\"><span class=\"btn-special\">Get SalonHome</span></a>\n\t\t</li>\n\t\t<li class=\"parent\">\n\t\t\t<a [routerLink]=\"['/home']\" [routerLinkActive]=\"['active']\" class=\"option-services-hair\">Home</a>\n\t\t</li>\n\t\t<li class=\"parent type-2\">\n\t\t\t<span class=\"sub-item\">How it Works</span>\n\t\t\t<div class=\"sub-menu\">\n\t\t\t\t<a [routerLink]=\"['/how-it-works-professionals']\" [routerLinkActive]=\"['active']\" class=\"option-how-it-works-professionals\" data-du-smooth-scroll data-du-scrollspy>For Professionals</a>\n\t\t\t\t<a [routerLink]=\"['/how-it-works-clients']\" [routerLinkActive]=\"['active']\" class=\"option-how-it-works-clients\" data-du-smooth-scroll data-du-scrollspy>For Clients</a>\n\t\t\t</div>\n\t\t</li>\n\t\t<li>\n\t\t\t<a [routerLink]=\"['/magazine']\" [routerLinkActive]=\"['active']\" class=\"option-magazine\">Magazine</a>\n\t\t</li>\n\t\t<li>\n\t\t\t<a [routerLink]=\"['/join-our-team']\" [routerLinkActive]=\"['active']\" class=\"option-join-our-team\">Join our Team</a>\n\t\t</li>\n\t\t<!-- <li>\n\t\t\t<a [routerLink]=\"['/university']\" [routerLinkActive]=\"['active']\" class=\"option-salonhome-university\">SalonHome University</a>\n\t\t</li> -->\n\t\t<li>\n\t\t\t<a [routerLink]=\"['/events']\" [routerLinkActive]=\"['active']\" class=\"option-events\">Events</a>\n\t\t</li>\n\t\t<li class=\"parent\">\n\t\t\t<span class=\"sub-item\">Services</span>\n\t\t\t<div class=\"sub-menu\">\n\t\t\t\t<a [routerLink]=\"['/services-hair']\" [routerLinkActive]=\"['active']\" class=\"option-services-hair\">Hair</a>\n\t\t\t\t<a [routerLink]=\"['/services-barbers']\" [routerLinkActive]=\"['active']\" class=\"option-services-barbers\">Barber</a>\n\t\t\t\t<a [routerLink]=\"['/services-nail']\" [routerLinkActive]=\"['active']\" class=\"option-services-nail\">Nail</a>\n\t\t\t\t<a [routerLink]=\"['/services-makeup']\" [routerLinkActive]=\"['active']\" class=\"option-services-makeup\">Makeup</a>\n\t\t\t\t<a [routerLink]=\"['/services-massage']\" [routerLinkActive]=\"['active']\" class=\"option-services-massage\">Massage</a>\n\t\t\t\t<a [routerLink]=\"['/services-skin']\" [routerLinkActive]=\"['active']\" class=\"option-services-skin\">Spa</a>\n\t\t\t\t<a [routerLink]=\"['/services-available-spaces']\" [routerLinkActive]=\"['active']\" class=\"option_available-spaces\">Space Rental</a>\n\t\t\t</div>\n\t\t</li>\t\n\t\t<li>\n\t\t\t<a [routerLink]=\"['/contact-us']\" [routerLinkActive]=\"['active']\" class=\"option-contact-us\">Contact Us</a>\n\t\t</li>\n\t\t<li>\n\t\t\t<a [routerLink]=\"['/help']\" [routerLinkActive]=\"['active']\" class=\"option-help\">Help</a>\n\t\t</li>\n\t</ul>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/layout/services-nav/services-nav.component.html":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/layout/services-nav/services-nav.component.html ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"top-section\">\n\t<div class=\"container\">\n\t\t<div class=\"style_menu_1 mb50\">\n\t\t\t<a [routerLink]=\"['/services-hair']\" [routerLinkActive]=\"['active']\" class=\"style_button_1\" id=\"s_hair\">Hair</a>\n\t\t\t<a [routerLink]=\"['/services-barbers']\" [routerLinkActive]=\"['active']\" class=\"style_button_1\" id=\"s_barbers\">Barber</a>\n\t\t\t<a [routerLink]=\"['/services-nail']\" [routerLinkActive]=\"['active']\" class=\"style_button_1\" id=\"s_nail\">Nail</a>\n\t\t\t<a [routerLink]=\"['/services-makeup']\" [routerLinkActive]=\"['active']\" class=\"style_button_1\" id=\"s_makeup\">Makeup</a>\n\t\t\t<a [routerLink]=\"['/services-massage']\" [routerLinkActive]=\"['active']\" class=\"style_button_1\" id=\"s_massage\">Massage</a>\n\t\t\t<a [routerLink]=\"['/services-skin']\" [routerLinkActive]=\"['active']\" class=\"style_button_1\" id=\"s_skin\">Spa</a>\n\t\t\t<a [routerLink]=\"['/services-available-spaces']\" [routerLinkActive]=\"['active']\" class=\"style_button_1\" id=\"option_available-spaces\">Space Rental</a>\n\t\t</div>\n\t</div>\n</section>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/pages/about-us/about-us.component.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/pages/about-us/about-us.component.html ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"wow fadeIn\" data-wow-duration=\"2000\" >\n<section class=\"top-section\">\n\t<div class=\"container\">\n\t\t<div class=\"row\">\n\t\t\t<div class=\"title\">\n\t\t\t\t<h2 class=\"text-center\"><b class=\"theme_color\">About Us</b></h2>\n\t\t\t\t<div class=\"col-sm-12 col-md-8 col-md-offset-2 text-center mb40\">\n\t\t\t\t\t<p class=\"mb0\">We’re the world’s leading marketplace for booking beauty services and events.</p>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t\t<div class=\"row mb40\">\n\t\t\t<div class=\"col-md-8 col-sm-12 text-justify mb20\">\n\t\t\t\t<p class=\"mb20\">Our mission is to provide a luxury experience whether you are a customer booking an in-home beauty service or a beauty professional booking a space for your next event. As a beauty professional, you will be able to expand, manage, and tend to the needs of your clientele with the tap of a finger. We connect you to the clientele you’ve dreamed of having while making the process of managing your bookings, clients, and business easier than ever before. </p>\n\t\t\t\t<p class=\"mb20\">We offer a unique opportunity for owners to open their professional spaces up to beauty professionals looking to book a private beauty service or book a Beauty Event. As a Salon Owner, you will have access to professionals actively waiting to book your space upon availability. You will have the opportunity to make more money and gain exposure for your location through SalonHome. </p>\n\t\t\t\t<p class=\"text_5\"><b>We are proud to bring you a new home for beauty, SalonHome!</b></p>\n\t\t\t</div>\n\t\t\t<div class=\"col-md-4 col-sm-12\">\n\t\t\t\t<img src=\"assets/images/about-images.jpg\" class=\"img-responsive img-circle m_auto\" alt=\"\">\n\t\t\t</div>\n\t\t</div>\n\t\t<div class=\"row\">\n\t\t\t<div class=\"col-sm-12 mb60 text-center\">\n\t\t\t\t<a [routerLink]=\"['/try-it-free']\" class=\"btn theme_btn size-big brd\">Get Started</a>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</section>\n\n<section class=\"pt40 pb40\">\n\t<div class=\"container\">\n\t\t<div class=\"row\">\n\t\t\t<div class=\"title\">\n\t\t\t\t<h2 class=\"text-center\"><b class=\"mb20\">A small team, making a big difference.</b></h2>\n\t\t\t</div>\n\t\t\t<div class=\"col-sm-12 col-md-12 text-center mb40\">\n\t\t\t\t<p class=\"mb0\">We are a small team of entrepreneurs committed to building something that<br /> is going to change the way beauty professionals.</p>\n\t\t\t</div>\n\t\t</div>\n\t\t<div class=\"row mb40 text-center layout_staff\">\n\t\t\t<div class=\"col-md-12\">\n\t\t\t\t<div class=\"col-md-4 col-sm-6 col-xs-6\">\n\t\t\t\t\t<div class=\"col-md-12\">\n\t\t\t\t\t<div class=\"row mb10\"><img src=\"assets/images/avatars/man-avatar.png\" class=\"img-responsive img-circle m_auto\" alt=\"\"/></div>\n\t\t\t\t\t<div class=\"row\"><span class=\"small_4 theme_color\">Alex Roberson</span>\n\t\t\t\t\t<p class=\"small_4\">Founder & CEO</p>\n\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"col-md-4 col-sm-6 col-xs-6\">\n\t\t\t\t\t<div class=\"col-md-12\">\n\t\t\t\t\t<div class=\"row mb10\"><img src=\"assets/images/avatars/man-avatar.png\" class=\"img-responsive img-circle m_auto\" alt=\"\"/></div>\n\t\t\t\t\t<div class=\"row\"><span class=\"small_4 theme_color\">Brian Bober</span>\n\t\t\t\t\t<p class=\"small_4\">Co-Founder & CTO</p>\n\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"col-md-4 col-sm-6 col-xs-6\">\n\t\t\t\t\t<div class=\"col-md-12\">\n\t\t\t\t\t<div class=\"row mb10\"><img src=\"assets/images/avatars/woman-avatar.png\" class=\"img-responsive img-circle m_auto\" alt=\"\"/></div>\n\t\t\t\t\t<div class=\"row\"><span class=\"small_4 theme_color\">Imani Simms</span>\n\t\t\t\t\t<p class=\"small_4\">Advisor</p>\n\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</section>\n\n<section class=\"pt30 pb60\">\n\t<div class=\"container\">\n\t\t<div class=\"row\">\n\t\t\t<div class=\"title\">\n\t\t\t\t<h2 class=\"text-center\"><b class=\"theme_color mb40\">Why book services with SalonHome?</b></h2>\n\t\t\t</div>\n\t\t</div>\n\t\t<div class=\"row\">\n\t\t\t<div class=\"col-sm-12 col-md-10 col-md-offset-1\">\n\t\t\t\t<ul class=\"l-bullets-2\">\n\t\t\t\t\t<li><p class=\"mb20\">Our technicians are licensed professionals licensed by the cosmetology board in the state that they are in.</p></li>\n\t\t\t\t\t<li><p class=\"mb20\">Beauty services at home! Enjoy the convenience of multi-tasking in home without compromising on your beauty regiment.</p></li>\n\t\t\t\t\t<li><p class=\"mb20\">Your home remains as clean as it was before the services.</p></li>\n\t\t\t\t\t<li><p class=\"mb20\">We do not compromise on product quality or brand names.</p></li>\n\t\t\t\t\t<li><p class=\"mb20\">Affordable pricing: Prices that make a regular beauty refinement possible every week!</p></li>\n\t\t\t\t\t<li><p class=\"mb20\">We offer the widest range of beauty services convenient to you and your location - from hair styling, barbering, makeup, nails, skincare, and the best choices of massages.</p></li>\n\t\t\t\t</ul>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</section>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/pages/apply-careers/apply-careers.component.html":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/pages/apply-careers/apply-careers.component.html ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"wow fadeIn\" data-wow-duration=\"2000\" >\n<section class=\"top-section\">\n\t<div class=\"container\">\n\t\t<div class=\"row\">\n\t\t\t<div class=\"title\">\n\t\t\t\t<h2 class=\"text-center\"><b class=\"theme_color\">Careers</b></h2>\n\t\t\t\t<div class=\"col-sm-12 col-md-8 col-md-offset-2 text-center mb40\">\n\t\t\t\t\t<h5 class=\"block\"><b>We’re hiring! See the positions we are looking to fill below.</b></h5>\n\t\t\t\t\t<p class=\"mb0\">If you want to be part of a fast-paced startup company creating a multitude of mobile products, drop us a line! Complete this application.</p>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t\t<div class=\"row mb60\">\n\t\t\t<div class=\"col-sm-12 col-md-6 col-md-offset-3\">\n\n\t\t\t\t<p class=\"text-center\">What position are you applying for?</p>\n\n\t\t\t\t\n\t\t\t\t<div class=\"layout-form mb20\">\n\t\t\t\t\t\n\t\t\t\t\t<form id=\"form-apply-careers\" [formGroup]=\"form\">\n\n\t        \t\t\t<div class=\"form-group display_control_professional\">\n\t        \t\t\t\t<div class=\"col-sm-12\">\n\t\t        \t\t\t\t<label for=\"field_position\" class=\"select_style\">\n\t\t        \t\t\t\t\t<span class=\"form-control mob_control set\">Sales and Account Management</span>\n\t\t\t        \t\t\t\t<select formControlName=\"position\" id=\"position\" class=\"form-control mob_control action_change_select selectable-texts\" >\n\t\t\t        \t\t\t\t\t<option data-text=\"Bringing new clients, professionals and partners on board, helping them digitalise their businesses and ensuring that they get the most out of our relationship is a critical and rewarding part of this role.\" selected>Sales and Account Management</option>\n\t\t\t        \t\t\t\t\t<option data-text=\"Using our brand’s creativity and integrated channels, our Marketing Team drives a constant stream of happy and satisfied customers and partners to SalonHome, in the most efficient way possible.\">Marketing</option>\n\t\t\t        \t\t\t\t\t<option data-text=\"While SalonHome is a beauty business, technology is at the front of the line. The products and services that our professionals provide in the SalonHome marketplace, along with our Partner programs.\">Technology</option>\n\t\t\t        \t\t\t\t\t<option data-text=\"Most of the Group Function will be held at or our offices in Atlanta. These comprise Finance, HR, Legal, Office Management, and Fraud and Compliance.\">Group Functions</option>\n\t\t\t        \t\t\t\t\t<option data-text=\"The Customer Care Operation is based out of our Atlanta location. Our main purpose is to be the backbone of our customers, whether that’s taking a call to help someone find their way to their next appointment or space, or making sure that the pages on our site I accurate and professionally for our customers.\">Customer Operations</option>\n\t\t\t        \t\t\t\t</select>\n\t\t        \t\t\t\t</label>\n\t        \t\t\t\t</div>\n\t        \t\t\t\t<div class=\"col-sm-12\">\n\t        \t\t\t\t<p class=\"mb0 position-desc\">\n\t\t\t\t\t\t\t\tBringing new clients, professionals and partners on board, helping them digitalise their businesses and ensuring that they get the most out of our relationship is a critical and rewarding part of this role.\n\t\t\t\t\t\t\t</p>\n\t\t\t\t\t\t\t</div>\n\t        \t\t\t</div>\n\n\t        \t\t\t<div class=\"form-group\" [ngClass]=\"displayFieldCss('fullname')\">\n\t        \t\t\t\t<div class=\"col-sm-12\">\n\t        \t\t\t\t\t<input type=\"text\" formControlName=\"fullname\" id=\"fullname\" placeholder=\"Full name *\" class=\"form-control mob_control\" />\n\t        \t\t\t\t\t<app-field-error-display \n\t        \t\t\t\t\t\t[displayError]=\"isFieldValid('fullname')\" \n\t        \t\t\t\t\t\terrorMsg=\"Please inform your Full Name\">\n\t        \t\t\t\t\t</app-field-error-display>\n\t        \t\t\t\t</div>\n\t        \t\t\t</div>\n\t        \t\t\t<div class=\"form-group\" [ngClass]=\"displayFieldCss('phone')\">\n\t        \t\t\t\t<div class=\"col-sm-12\">\n\t        \t\t\t\t\t<input type=\"text\" formControlName=\"phone\" id=\"phone\" placeholder=\"Phone *\" class=\"form-control mob_control numeric\" maxlength=\"15\"/>\n\t        \t\t\t\t\t<app-field-error-display \n\t        \t\t\t\t\t\t[displayError]=\"isFieldValid('phone')\" \n\t        \t\t\t\t\t\terrorMsg=\"Please inform your Phone\">\n\t        \t\t\t\t\t</app-field-error-display>\n\t        \t\t\t\t</div>\n\t        \t\t\t</div>\n\t        \t\t\t<div class=\"form-group\" [ngClass]=\"displayFieldCss('email')\">\n\t        \t\t\t\t<div class=\"col-sm-12\">\n\t        \t\t\t\t\t<input type=\"text\" formControlName=\"email\" id=\"email\" placeholder=\"Email *\" class=\"form-control mob_control\" />\n\t        \t\t\t\t\t<app-field-error-display \n\t        \t\t\t\t\t\t[displayError]=\"isFieldValid('email')\" \n\t        \t\t\t\t\t\terrorMsg=\"Please inform your Email\">\n\t        \t\t\t\t\t</app-field-error-display>\n\t        \t\t\t\t</div>\n\t        \t\t\t</div>\n\t        \t\t\t<div class=\"form-group\">\n\t        \t\t\t\t<div class=\"col-sm-12\">\n\t        \t\t\t\t\t<input type=\"text\" formControlName=\"linkedin\" id=\"linkedin\" placeholder=\"Linkedin\" class=\"form-control mob_control\" />\n\t        \t\t\t\t</div>\n\t        \t\t\t</div>\n\t        \t\t\t<div class=\"form-group\" [ngClass]=\"displayFieldCss('message')\">\n\t        \t\t\t\t<div class=\"col-sm-12\">\n\t        \t\t\t\t\t<textarea formControlName=\"message\" id=\"message\" placeholder=\"Tell us why your awesome. Be creative *\" class=\"form-control mob_control\"></textarea>\n\t        \t\t\t\t\t<app-field-error-display \n\t        \t\t\t\t\t\t[displayError]=\"isFieldValid('message')\" \n\t        \t\t\t\t\t\terrorMsg=\"Please inform your Message\">\n\t        \t\t\t\t\t</app-field-error-display>\n\t        \t\t\t\t</div>\n\t        \t\t\t</div>\n\t        \t\t\t<div class=\"form-group\">\n\t        \t\t\t\t<div class=\"col-sm-12\">\n\t        \t\t\t\t\t<input type=\"hidden\" name=\"send_submit_careers\" id=\"send_submit_careers\" value=\"1\"/>\n\t        \t\t\t\t\t<button (click)=\"onSubmit()\" id=\"submit_careers\" class=\"btn-submit btn theme_btn tinitial size-big-2 pu80\"><b><i class=\"fa fa-paper-plane\"></i> Submit</b></button>\n\t        \t\t\t\t</div>\n\t        \t\t\t</div>\n\t        \t\t\t<div class=\"set-response\"></div>\n\t\t    \t\t</form>\n\t\t    \t\t\n\t\t\t\t</div>\n\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</section>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/pages/careers/careers.component.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/pages/careers/careers.component.html ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"wow fadeIn\" data-wow-duration=\"2000\" >\n<section class=\"top-section\">\n\t<div class=\"container\">\n\t\t<div class=\"row\">\n\t\t\t<div class=\"title mb50 wow fadeInUp\">\n\t\t\t\t<h2 class=\"text-center\"><b class=\"theme_color\">Find your next career</b></h2>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</section>\n\n<section class=\"section-info pt30 pb30\" style=\"background-color: #f7f7f7;\">\n\t<div class=\"container\">\n\t\t<div class=\"row\">\n\t\t\t<div class=\"col-sm-12 mb20\">\n\t\t\t\t<img src=\"assets/images/icons/icon-world.png\" alt=\"\" class=\"img-left-paragraph type-2 wow fadeIn\" data-wow-duration=\"1300\"/>\n\t\t\t\t<h3 class=\"wow fadeInRight\" data-wow-delay=\"0.2s\"><b>Sales and Account Management</b></h3>\n\t\t\t\t<p class=\"wow fadeInRight\" data-wow-delay=\"0.2s\">\n\t\t\t\t\tBringing new clients, professionals and partners on board, helping them digitalise their businesses and ensuring that they get the most out of our relationship is a critical and rewarding part of this role. Our Sales Teams comprises of inside and outside sales working hand in hand to educate and shift an industry online. Once onboard our customers are carefully handed over to the Account Management Team who maintains, nurtures and grows each relationship, and in turn helps grow the beauty businesses themselves. Relationship building and the ability to understand and respond to the customer needs and aspirations are vital in this role.\n\t\t\t\t</p>\n\t\t\t\t<p class=\"wow fadeInRight\" data-wow-delay=\"0.2s\"><b>Positions</b></p>\n\t\t\t\t<ul class=\"l-bullets-4 wow fadeInRight\" data-wow-delay=\"0.2s\">\n\t\t\t\t\t<li><p class=\"mb0\">Account Management <br />Internship</p></li>\n\t\t\t\t\t<li><p class=\"mb0\">Business Developer <br />Internship</p></li>\n\t\t\t\t\t<li><p class=\"mb0\">Outside Sales <br />Internship</p></li>\n\t\t\t\t</ul>\n\t\t\t</div>\n\t\t</div>\n\t\t<div class=\"row wow fadeInRight\" data-wow-delay=\"0.2s\">\n\t\t\t<div class=\"col-sm-12 text-center\">\n\t\t\t\t<a [routerLink]=\"['/applying-for-position']\" class=\"btn theme_btn size-big brd button-target\">Apply</a>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</section>\n\n<section class=\"sequence-3 bg-careers\">\n    <div class=\"no-overlay wow fadeInDown\" style=\"background-image:url(assets/images/model-careers.jpg);background-position: center center;height: 359px;\" role=\"img\" aria-label=\"\">\n    </div>\n</section>\n\n<section class=\"section-info pt30 pb30\">\n\t<div class=\"container\">\n\t\t<div class=\"row\">\n\t\t\t<div class=\"col-sm-12 mb20\">\n\t\t\t\t<img src=\"assets/images/icons/icon-microphone.png\" class=\"img-left-paragraph wow fadeIn\" data-wow-duration=\"1300\" style=\"margin-bottom:566px;\" />\n\t\t\t\t<h3 class=\"wow fadeInRight\" data-wow-delay=\"0.2s\"><b>Marketing </b></h3>\n\t\t\t\t<p class=\"wow fadeInRight\" data-wow-delay=\"0.2s\">\n\t\t\t\t\tUsing our brand’s creativity and integrated channels, our Marketing Team drives a constant stream of happy and satisfied customers and partners to SalonHome, in the most efficient way possible. Dedicated to our vision of helping businesses grow by delivering the perfect beauty experience, this team is our eyes, ears and voice, engaging and inspiring beauty customers across many states. Our team is made up of Performance Marketing, Brand, Design, Editorial and Content, Local Marketing and CRM and make up the biggest function at SalonHome. To be a successful member of this team you must be driven by creativity, have an eye for impactful design and a unique love for data!\n\t\t\t\t</p>\n\t\t\t\t<p class=\"wow fadeInRight\" data-wow-delay=\"0.2s\"><b>Positions</b></p>\n\t\t\t\t<ul class=\"l-bullets-4 wow fadeInRight\" data-wow-delay=\"0.2s\">\n\t\t\t\t\t<li><p class=\"mb0\">Graphic Designer –Individual (not UI/UX) <br />Internship</p></li>\n\t\t\t\t\t<li><p class=\"mb0\">PR & Content Manager <br />Internship</p></li>\n\n\t\t\t\t\t<li><p class=\"mb0\">Affiliation & Strategic Partnerships <br />Internship</p></li>\n\t\t\t\t\t<li><p class=\"mb0\">Search Analyst <br />Internship </p></li>\n\t\t\t\t\t<li><p class=\"mb0\">Marketing Lead <br />Internship </p></li>\n\t\t\t\t\t<li><p class=\"mb0\">Marketing Communications <br />Internship </p></li>\n\t\t\t\t\t<li><p class=\"mb0\">Social Media <br />Internship</p></li>\n\t\t\t\t\t<li><p class=\"mb0\">Partner Acquisition Lead - Marketing <br />Internship</p></li>\n\t\t\t\t\t<li><p class=\"mb0\">Marketing Technologist (CRM) <br />Internship</p></li>\n\t\t\t\t\t<li><p class=\"mb0\">Technical SEO Specialist <br />Internship</p></li>\n\t\t\t\t</ul>\n\t\t\t</div>\n\t\t</div>\n\t\t<div class=\"row wow fadeInRight\" data-wow-delay=\"0.2s\">\n\t\t\t<div class=\"col-sm-12 text-center\">\n\t\t\t\t<a [routerLink]=\"['/applying-for-position']\" class=\"btn theme_btn size-big brd button-target\">Apply</a> </div>\n\t\t</div>\n\t</div>\n</section>\n\n<section class=\"section-info pt30 pb30\" style=\"background-color: #f7f7f7;\">\n\t<div class=\"container\">\n\t\t<div class=\"row\">\n\t\t\t<div class=\"col-sm-12 mb20\">\n\t\t\t\t<img src=\"assets/images/icons/icon-startup.png\" alt=\"\" class=\"img-left-paragraph wow fadeIn\" data-wow-duration=\"1300\" style=\"margin-bottom:250px;\"/>\n\t\t\t\t<h3 class=\"wow fadeInRight\" data-wow-delay=\"0.2s\"><b>Technology</b></h3>\n\t\t\t\t<p class=\"wow fadeInRight\" data-wow-delay=\"0.2s\">\n\t\t\t\t\tWhile SalonHome is a beauty business, technology is at the front of the line. The products and services that our professionals provide in the SalonHome marketplace, along with our Partner programs. Both are available on the web and as native apps for iOS and Android, in 20 cities across the USA. Our technology roles call for techs that are excited about changing our industry. We’re building a huge business and a technology platform to match it.\n\t\t\t\t</p>\n\t\t\t\t<p class=\"wow fadeInRight\" data-wow-delay=\"0.2s\"><b>Positions</b></p>\n\t\t\t\t<ul class=\"l-bullets-4 wow fadeInRight\" data-wow-delay=\"0.2s\">\n\t\t\t\t\t<li><p class=\"mb0\">Frontend Software Engineer</p></li>\n\t\t\t\t\t<li><p class=\"mb0\">Full Stack Developer </p></li>\n\t\t\t\t\t<li><p class=\"mb0\">Quality Assurance Engineer </p></li>\n\t\t\t\t\t<li><p class=\"mb0\">Software Engineer</p></li>\n\t\t\t\t</ul>\n\t\t\t</div>\n\t\t</div>\n\t\t<div class=\"row wow fadeInRight\" data-wow-delay=\"0.2s\">\n\t\t\t<div class=\"col-sm-12 text-center\">\n\t\t\t\t<a [routerLink]=\"['/applying-for-position']\" class=\"btn theme_btn size-big brd button-target\">Apply</a>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</section>\n\n\n<section class=\"section-info pt30 pb30\">\n\t<div class=\"container\">\n\t\t<div class=\"row\">\n\t\t\t<div class=\"col-sm-12 mb20\">\n\t\t\t\t<img src=\"assets/images/icons/icon-hr.png\" alt=\"\" class=\"img-left-paragraph wow fadeIn\" data-wow-duration=\"1300\" style=\"margin-bottom: 250px;\" />\n\t\t\t\t<h3 class=\"wow fadeInRight\" data-wow-delay=\"0.2s\"><b>Group Functions </b></h3>\n\t\t\t\t<p class=\"wow fadeInRight\" data-wow-delay=\"0.2s\">\n\t\t\t\t\tMost of the Group Function will be held at or our offices in Atlanta. These comprise Finance, HR, Legal, Office Management, and Fraud and Compliance. They are the serum that holds the other functions and business  together. The enablers of business efficiency and growth. Subject-matter expertise is critical for these teams but equally important is the ability to understand and support multiple cultures, functions, legislation and personalities, which makes working in these teams incredibly colorful and rewarding.\n\t\t\t\t</p>\n\t\t\t\t<p class=\"wow fadeInRight\" data-wow-delay=\"0.2s\"><b>Positions</b></p>\n\t\t\t\t<ul class=\"l-bullets-4 wow fadeInRight\" data-wow-delay=\"0.2s\">\n\t\t\t\t\t<li><p class=\"mb0\">HR Lead (20/40 hours week, m/f)</p></li>\n\t\t\t\t\t<li><p class=\"mb0\">Accounts Assistant</p></li>\n\t\t\t\t\t<li><p class=\"mb0\">Group Strategic Partnerships</p></li>\n\t\t\t\t\t<li><p class=\"mb0\">Marketing Lead</p></li>\n\t\t\t\t\t<li><p class=\"mb0\">Freelance Interior photographer – All States</p></li>\n\t\t\t\t</ul>\n\t\t\t</div>\n\t\t</div>\n\t\t<div class=\"row wow fadeInRight\" data-wow-delay=\"0.2s\">\n\t\t\t<div class=\"col-sm-12 text-center\">\n\t\t\t\t<a [routerLink]=\"['/applying-for-position']\" class=\"btn theme_btn size-big brd button-target\">Apply</a>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</section>\n\n<section class=\"section-info pt30 pb30\" style=\"background-color: #f7f7f7;\">\n\t<div class=\"container\">\n\t\t<div class=\"row\">\n\t\t\t<div class=\"col-sm-12 mb20\">\n\t\t\t\t<img src=\"assets/images/icons/icon-call-atend.png\" alt=\"\" class=\"img-left-paragraph wow fadeIn\" data-wow-duration=\"1300\" style=\"margin-bottom: 250px;\"/>\n\t\t\t\t<h3 class=\"wow fadeInRight\" data-wow-delay=\"0.2s\"><b>Customer Operations</b></h3>\n\t\t\t\t<p class=\"wow fadeInRight\" data-wow-delay=\"0.2s\">\n\t\t\t\t\tThe Customer Care Operation is based out of our Atlanta location. Our main purpose is to be the backbone of our customers, whether that’s taking a call to help someone find their way to their next appointment or space, or making sure that the pages on our site I accurate and professionally for our customers. The Customer Operations Team is a critical component of enabling the perfect experience using our platform. We look for people pleasers with bags of ideas, lots of initiative and a passion to serve. People who get a kick out of providing the best possible customer experience, every day will work well in this position.\n\t\t\t\t</p>\n\t\t\t\t<p class=\"wow fadeInRight\" data-wow-delay=\"0.2s\"><b>Positions</b></p>\n\t\t\t\t<ul class=\"l-bullets-4 wow fadeInRight\" data-wow-delay=\"0.2s\">\n\t\t\t\t\t<li><p class=\"mb0\">Customer Care Representative </p></li>\n\t\t\t\t\t<li><p class=\"mb0\">Content Lead – All States</p></li>\n\t\t\t\t\t<li><p class=\"mb0\">Operation Lead– All States</p></li>\n\t\t\t\t</ul>\n\t\t\t</div>\n\t\t</div>\n\t\t<div class=\"row wow fadeInRight\" data-wow-delay=\"0.2s\">\n\t\t\t<div class=\"col-sm-12 text-center\">\n\t\t\t\t<a [routerLink]=\"['/applying-for-position']\" class=\"btn theme_btn size-big brd button-target\">Apply</a>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</section>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/pages/contact-us/contact-us.component.html":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/pages/contact-us/contact-us.component.html ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"wow fadeIn\" data-wow-duration=\"2000\" >\n<section class=\"top-section\">\n\t<div class=\"container\">\n\t\t<div class=\"row\">\n\t\t\t<div class=\"title\">\n\t\t\t\t<h2 class=\"text-center\"><b class=\"theme_color\">Contact us</b></h2>\n\t\t\t</div>\n\t\t\t<div class=\"col-sm-12 col-md-8 col-md-offset-2 text-center mb70\">\n\t\t\t\t<p class=\"mb0 \">Our main office is located, in the heart of Atlanta, USA. Send us an email for partnership, buying ads, promotions, general questions or customer support.</p>\n\t\t\t</div>\n\t\t</div>\n\t\t<div class=\"row mb40\">\n\t\t\t<div class=\"col-md-6 col-sm-12 text-justify layout_form\">\n\t\t\t\t<p class=\"mb40 text-center\">Send us your details below and we will contact you.</p>\n\t\t\t\t<div class=\"row layout-form mb20\">\n\t\t\t\t\t<form id=\"form-contact\" [formGroup]=\"form\">\n\n\t        \t\t\t<div class=\"form-group has-feedback\" [ngClass]=\"displayFieldCss('name')\">\n\t        \t\t\t\t<div class=\"col-sm-12\">\n\t        \t\t\t\t\t<input type=\"text\" id=\"name\" formControlName=\"name\" placeholder=\"Name\" class=\"form-control mob_control\" required/>\n\t        \t\t\t\t\t<app-field-error-display \n\t        \t\t\t\t\t\t[displayError]=\"isFieldValid('name')\" \n\t        \t\t\t\t\t\terrorMsg=\"Please inform your name\">\n\t        \t\t\t\t\t</app-field-error-display>\n\t        \t\t\t\t</div>\n\t        \t\t\t</div>\n\t        \t\t\t<div class=\"form-group has-feedback\" [ngClass]=\"displayFieldCss('email')\">\n\t        \t\t\t\t<div class=\"col-sm-12\">\n\t        \t\t\t\t\t<input type=\"text\" id=\"email\" formControlName=\"email\" placeholder=\"Email address\" class=\"form-control mob_control\" pattern=\"^\\w+([\\.-]?\\w+)*@\\w+([\\.-]?\\w+)*(\\.\\w{2,3})+$\" required/>\n\t        \t\t\t\t\t<app-field-error-display \n\t        \t\t\t\t\t\t[displayError]=\"isFieldValid('email')\" \n\t        \t\t\t\t\t\terrorMsgHtml=\"Please inform your a valid email.<br />Please inform your email\">\n\t        \t\t\t\t\t</app-field-error-display>\n\t        \t\t\t\t</div>\n\t        \t\t\t</div>\n\t        \t\t\t<div class=\"form-group has-feedback\" [ngClass]=\"displayFieldCss('mobile')\">\n\t        \t\t\t\t<div class=\"col-sm-12\">\n\t        \t\t\t\t\t<input type=\"text\" id=\"mobile\" formControlName=\"mobile\" placeholder=\"Mobile\" class=\"numeric form-control mob_control\" pattern=\"[0-9]+\" maxlength=\"15\" required/>\n\t        \t\t\t\t\t<app-field-error-display \n\t        \t\t\t\t\t\t[displayError]=\"isFieldValid('mobile')\" \n\t        \t\t\t\t\t\terrorMsg=\"Please inform your mobile\">\n\t        \t\t\t\t\t</app-field-error-display>\n\t        \t\t\t\t</div>\n\t        \t\t\t</div>\n\t        \t\t\t<div class=\"form-group has-feedback\" [ngClass]=\"displayFieldCss('message')\">\n\t        \t\t\t\t<div class=\"col-sm-12\">\n\t        \t\t\t\t\t<textarea id=\"message\" formControlName=\"message\" placeholder=\"Message\" class=\"form-control mob_control\" required></textarea>\n\t        \t\t\t\t\t<app-field-error-display \n\t        \t\t\t\t\t\t[displayError]=\"isFieldValid('message')\" \n\t        \t\t\t\t\t\terrorMsg=\"Please inform your message\">\n\t        \t\t\t\t\t</app-field-error-display>\n\t        \t\t\t\t</div>\n\t        \t\t\t</div>\n\t        \t\t\t<div class=\"form-group has-feedback\">\n\t        \t\t\t\t<div class=\"col-sm-12\">\n\t        \t\t\t\t\t<input type=\"hidden\" name=\"Send_Mail_Contact\" value=\"1\" />\n\t        \t\t\t\t\t<button (click)=\"onSubmit()\" class=\"btn theme_btn tinitial size-big-2 pu80 btn-submit\"><b><i class=\"fa fa-paper-plane\"></i> Send</b></button>\n\t        \t\t\t\t</div>\n\t        \t\t\t</div>\n\t        \t\t\t\n\t        \t\t\t<div class=\"set-response\"></div>\n\t        \t\t</form>\t\n\n\t        \t</div>        \t\t\n\t\t\t</div>\n\t\t\t<div class=\"col-md-6 col-sm-12 layout_contact_i\">\n\t\t\t\t<p>\n\t\t\t\t\t<img src=\"assets/images/icons/icon-letter.jpg\" alt=\"\" class=\"i-img\">\n\t\t\t\t\t<b>Email Us</b><br />\n\t\t\t\t\t<span><a href=\"mailto:corporate@salonhome.com\">corporate&#64;salonhome&#46;com</a></span>\n\t\t\t\t</p>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</section>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/pages/download/download.component.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/pages/download/download.component.html ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"dl-container\">\n\t<div class=\"dl-section\">\n\t\t\t<img class=\"dl-avatar\" src=\"assets/images/download/download-avatar.png\">\n\n\t\t\t<div class=\"dl-page__title ng-binding\">Be Beautiful Anywhere, Anytime</div>\n\n\t\t\t<div class=\"dl-page__description\"><span class=\"dl-page__description-text\">Professionals:\n\t\tList Services, Unused Space &amp; Events\n\t\tClients:\n\t\tBook Services 24/7</span>\n\t\t\t</div>\n\n\t\t\t<!--\n\t\t\t<div ng-show=\"false\">\n\t\t\t\t<a class=\"dl-store-link\" href=\"https://apps.apple.com/us/app/[changethis]\">\n\t\t\t\t\t<img class=\"dl-store-link__image\" src=\"assets/images/download/download-apple-en.png\" alt=\"\">\n\t\t\t\t</a>\n\t\t\t</div>\n\t\t\t-->\n\n\t\t\t<div>\n\t\t\t\t<a class=\"dl-store-link\" href=\"https://play.google.com/store/apps/details?id=com.salon.home\">\n\t\t\t\t\t<img class=\"dl-store-link__image\" src=\"assets/images/download/download-google-en.png\" alt=\"\">\n\t\t\t\t</a>\n\t\t\t</div>\n\n\t\t\t<div ng-show=\"view.code.website\" class=\"dl-page__website-container\">\n\t\t\t\t<a class=\"dl-page__website ng-binding\" href=\"http://www.salonhome.com\" target=\"_blank\" ng-style=\"{color: getTextColor2()}\" style=\"color: rgb(255, 255, 255);\">\n\t\t\t\t\twww.salonhome.com\n\t\t\t\t</a>\n\t\t\t</div>\n\n\t\t</div>\n\t</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/pages/events/events-post.component.html":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/pages/events/events-post.component.html ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"wow fadeIn\" data-wow-duration=\"2000\" >\n\t\n\t<div *ngIf=\"!events_post\">\n\t\t<p>Loading post...</p>\n\t</div>\n\t\t\n\t<article *ngFor=\"let post of events_post\">\n\n\t\t<section class=\"top-section-2\" *ngIf=\"post.better_featured_image.source_url\">\n\t\t\t<div class=\"container center\">\n\t\t\t\t<img src=\"{{post.better_featured_image.source_url}}\" alt=\"{{post.title.rendered}}\" class=\"img img-responsive m_auto\"/>\n                <div class=\"text-block\">\n                        <h4>{{post.title.rendered}}<br>\n                            {{post.acf.start_date_time | date: 'fullDate' }}<br>\n                            {{post.acf.venue}}\n                        </h4>\n                      </div>\n            </div>\n\t\t</section>\n\n\t\t<section id=\"post-{{post.id}}\" class=\"section-mod mt20 pt20\">\n\t\t\t<div class=\"container\">\n\t\t\t\t<div class=\"row\">\n                        <div class=\"col-md-12\">\n                        <div class=\"col-md-4\">\n                                <div class=\"title mb20 wow fadeInUp\" data-wow-delay=\"0.2s\">\n                                        <time class=\"date entry-meta mb10\"><i class=\"fa fa-clock-o\" aria-hidden=\"true\"></i> Event Starts at: {{post.acf.start_date_time | date:'shortTime'}}</time>\n                                        <time class=\"date entry-meta mb10\"><i class=\"fa fa-external-link-square\" aria-hidden=\"true\"></i> Official Links <a href=\"{{post.acf.official_links }}\">{{post.acf.official_links }}</a></time>\n                                    </div>\n                        </div>\n                        <div class=\"col-md-4\">\n                                <div class=\"title mb20 wow fadeInUp\" data-wow-delay=\"0.2s\">\n                                        <time class=\"date entry-meta mb10\"><i class=\"fa fa-money\" aria-hidden=\"true\"></i> Entry Fees {{post.acf.entry_fees }}</time>\n                                        <time class=\"date entry-meta mb10\"><i class=\"fa fa-bandcamp\" aria-hidden=\"true\"></i> Frequency {{post.acf.frequency }}</time>\n                                    </div>\n                        </div>\n                        <div class=\"col-md-4\">\n                                <div class=\"title mb20 wow fadeInUp\" data-wow-delay=\"0.2s\">\n                                        <time class=\"date entry-meta mb10\"><i class=\"fa fa-clock-o\" aria-hidden=\"true\"></i> Event Ends: {{post.acf.end_date_time }}</time>\n                                        <time class=\"date entry-meta mb10\"><button>Interested</button></time>\n                                    </div>\n                        </div>\n                        \n                    </div>\n                        <div class=\"col-md-8\">\n                            <h3>Exhibition Details</h3>\n                            <div class=\"wow fadeInUp\" data-wow-delay=\"0.6s\" [innerHTML]=\"post.acf.exhibitors\"></div>\n                            <h3>Event Details</h3>\n                         <div class=\"wow fadeInUp\" data-wow-delay=\"0.6s\" [innerHTML]=\"post.content.rendered\"></div>\n                        \n                        </div>\n                        \n\t\t\t\t\t\n\t\t\t\t\t<div class=\"col-md-4\">\n                        <div>\n                            <h4 class=\"type2-title mb30\">Organizers</h4>  \n                 <time class=\"date entry-meta mb10\"><img src=\"{{ post.acf.organiser_imagelogo.url}}\"/> <br>{{post.acf.organizer }}</time>\n                </div>\n\t\t\t\t\t\t<app-events-recent></app-events-recent>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</section>\n\n\t</article>\n\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/pages/events/events-recent.component.html":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/pages/events/events-recent.component.html ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n<section class=\"recent_post mb40 wow fadeInUp\"  data-wow-delay=\"0.6s\">\t\n\t\t\n\t<h4 class=\"type2-title mb30\">Recent Events</h4>\n\t<div *ngFor=\"let post of events_posts | slice:0:5;\">\n\t\t<article id=\"post-recent-{{post.id}}\" class=\"article-recent\">\n\t\t\t<img width=\"65\" height=\"65\" class=\"img-post\" src=\"{{post.better_featured_image.media_details.sizes.thumbnail.source_url}}\" alt=\"{{post.title.rendered}}\"/>\n\t\t\t<h5 class=\"entry-title-min post-title color-inherit ease mt20 mb20\"><a [routerLink]=\"['/events', post.slug]\">{{post.title.rendered | slice:0:68}}</a></h5>\n\t\t\t<div class=\"excerpt-post mb20\" [innerHTML]=\"post.excerpt.rendered | slice:0:60\"></div>\n\t\t</article>\n\t</div>\n</section>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/pages/events/events.component.html":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/pages/events/events.component.html ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"wow fadeIn\" data-wow-duration=\"2000\" >\n\t\t<section class=\"top-section events-page\">\n\t\t\t<div class=\"container\">\n\t\t\t\t<div class=\"row\">\n\t\t\t\t\t<div class=\"title wow fadeInUp\">\n\t\t\t\t\t\t<h2 class=\"text-center\"><b class=\"theme_color\">SalonHome Events</b></h2>\n\t\t\t\t\t\t<div class=\"col-sm-12 col-md-8 col-md-offset-2 text-center mb60 wow fadeIn\" data-wow-duration=\"1500\" data-wow-delay=\"0.2s\">\n\t\t\t\t\t\t\t<p class=\"mb0\">We’re the world’s leading marketplace for booking beauty services and events.</p>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"row mb50\">\n\t\t\t\t\t<section *ngFor=\"let post of events_posts\" class=\"inline-blocks\">\n\t\t\t\t\t\t<div class=\"col-xs-12 col-md-3 col-sm-6 single-post-2 wow fadeInUp\" data-wow-delay=\"0.1s\" >\n\t\t\t\t\t\t\t<article id=\"post-{{post.id}}\" class=\"box\">\n\t\t\t\t\t\t\t\t<a [routerLink]=\"['/events', post.slug]\" class=\"routeImg\"><img src=\"{{post.better_featured_image.source_url}}\" alt=\"{{post.title.rendered}}\" class=\"photo\" /></a>\n\t\t\t\t\t\t\t\t<div class=\"description\">\n\t\t\t\t\t\t\t\t\t<h3 class=\"post-title mt0\"><a [routerLink]=\"['/events', post.slug]\" class=\"color-inherit ease\">{{post.title.rendered}}</a></h3>\n\t\t\t\t\t\t\t\t\t<time class=\"date entry-meta mb10\"><i class=\"fa fa-clock-o\" aria-hidden=\"true\"></i> {{post.acf.start_date_time | date: 'medium' }}  <br> Venue: {{post.acf.venue}} </time>\n\t\t\t\t\t\t\t\t\t<div class=\"description-post\" [innerHTML]=\"post.content.rendered\">\t\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<a class=\"btn theme_btn style_outlined\" [routerLink]=\"['/events', post.slug]\">Read More</a>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</article>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</section>\n\t\t\t\t\t<span *ngIf=\"!events_posts\">Loading list...</span>\n\t\t\t\t</div>\n\t\t\n\t\t\t</div>\n\t\t</section>\n\t\t</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/pages/help/help.component.html":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/pages/help/help.component.html ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"wow fadeIn\" data-wow-duration=\"2000\">\n\t<section class=\"top-section\">\n\t\t<div class=\"container\">\n\t\t\t<div class=\"row\">\n\t\t\t\t<div class=\"title wow fadeInUp\">\n\t\t\t\t\t<h2 class=\"text-center\"><span><b class=\"theme_color\">Help</b></span></h2>\n\t\t\t\t</div>\n\t\t\t</div>\n\n\t\t\n\t\t\t<div class=\"panel-group\" [id]=\"'accordion'+i\" (click)=\"toggleShowDiv(i)\" *ngFor=\"let post of help_posts; let i = index;\">\n\t\n\t\t\t\t<div class=\"panel panel-default\">\n\t\t\t\t\t<div class=\"panel-heading\">\n\t\t\t\t\t\t<h4 class=\"panel-title\">\n\t\t\t\t\t\t\t<a data-toggle=\"collapse\" [attr.data-parent]=\"'#accordion'+i\" [href]=\"'#collapse'+i\" [attr.aria-expanded]=\"(currentIndex === i)?true:false\"><b [innerHTML]='post.title.rendered'></b>\n\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t</h4>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div *ngIf=\"currentIndex === i\" [id]=\"'collapse'+i\" class=\"panel-collapse collapse\">\n\t\t\t\t\t\t<div class=\"panel-body\">\n\t\t\t\t\t\t\t<div *ngFor=\"let qa of post.acf.questionanswers\">\n\n\t\t\t\t\t\t\t<div class=\"scroll\"><b><p [innerHTML]='qa.question'></p></b>\n\t\t\t\t\t\t\t<p [innerHTML]='qa.answer'></p></div>\n\t\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\n\t\t\t</div>\n\n\n</div></section>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/pages/home/home.component.html":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/pages/home/home.component.html ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<header id=\"header\" class=\"valign_wrapper wow fadeIn content-banner-home-header\" data-backstretch data-backstretch-duration=\"4000\" data-backstretch-fade=\"1\">\n\t<div class=\"container\">\n\t\t<div class=\"row\">\n\t\t\t<section id=\"home\" class=\"mb0\" >\n\t\t\t\t<div class=\"container banner-home-header\">\n\t\t\t\t\t<div class=\"row layer-background banner-web\" style=\"background-image:url(assets/images/banner-home.jpg);background-position: top left;background-repeat: no-repeat;background-size: cover;\" role=\"img\">\n\t\t\t\t\t\t<div class=\"col-md-8 container-left photofront\">\n\t\t\t\t\t\t\t<p class=\"c_white\"><strong class=\"bit-letter\">Join Thousands    of Professionals<br>Getting Booked Everyday</strong></p>\n\t\t\t\t\t\t\t<span class=\"big-letter-1\">List Services & Get Booked</span>\t\t\t\t\t\t\n\t\t\t\t\t\t</div> \n\t\t\t\t\t\t<div class=\"col-md-8 mt--15\">\t\t\t\t\n\t\t\t\t\t\t\t<div class=\"col-sm-1 mb-0\">\n\t\t\t\t\t\t\t\t<a id=\"join-beta-3\" class=\"btn br2 text-normal size-medium btn-white mb20\" [routerLink]=\"['/download']\" target=\"_blank\">Get SalonHome</a>\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"col-md-8 text-get-banner\">\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t<span class=\"c_white f_min mt20\">Get your FREE account</span>\n\t\t\t\t\t\t</div>  \n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</section>\n\t\t</div>\n\t</div>\n</header>\n\n<section>\n\t<div class=\"container mt50 mb40\">\n\t\t<div class=\"row\">\n\t\t\t<div class=\"col-md-12\">\n\t\t\t\t<div class=\"title mb30\">\n\t\t\t\t\t<h2 class=\"mb0\"><b>Discover Professionals</b></h2>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"col-sm-12 p0\">\n\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t<a [routerLink]=\"['/services-hair']\">\n\t\t\t\t\t\t\t<div class=\"col-md-3 col-sm-6 col-xs-12\">\n\t\t\t\t\t\t\t\t<div class=\"module-box-left\" style=\"background-image:url(assets/images/listing/hair-miniatura.jpg);\">\n\t\t\t\t\t\t\t\t\t<div class=\"description\">Hair</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</a>\n\t\t\t\t\t\t<a [routerLink]=\"['/services-barbers']\">\n\t\t\t\t\t\t\t<div class=\"col-md-3 col-sm-6 col-xs-12\">\n\t\t\t\t\t\t\t\t<div class=\"module-box-left\" style=\"background-image:url(assets/images/listing/img_barber_salon_home.jpg);\">\n\t\t\t\t\t\t\t\t\t<div class=\"description\">Barber</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</a>\n\t\t\t\t\t\t<a [routerLink]=\"['/services-nail']\">\n\t\t\t\t\t\t\t<div class=\"col-md-3 col-sm-6 col-xs-12\">\n\t\t\t\t\t\t\t\t<div class=\"module-box-left\" style=\"background-image:url(assets/images/listing/nails-miniatura.jpg);\">\n\t\t\t\t\t\t\t\t\t<div class=\"description\">Nail</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</a>\n\t\t\t\t\t\t<a [routerLink]=\"['/services-makeup']\">\n\t\t\t\t\t\t\t<div class=\"col-md-3 col-sm-6 col-xs-12\">\n\t\t\t\t\t\t\t\t<div class=\"module-box-left\" style=\"background-image:url(assets/images/listing/profesional-makeup.jpg);\">\n\t\t\t\t\t\t\t\t\t<div class=\"description\">Makeup</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</a>\n\t\t\t\t\t\t<a [routerLink]=\"['/services-massage']\">\n\t\t\t\t\t\t\t<div class=\"col-md-3 col-sm-6 col-xs-12\">\n\t\t\t\t\t\t\t\t<div class=\"module-box-left\" style=\"background-image:url(assets/images/listing/massage-miniatura.jpg);\">\n\t\t\t\t\t\t\t\t\t<div class=\"description\">Massage</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</a>\n\t\t\t\t\t\t<a [routerLink]=\"['/services-skin']\">\n\t\t\t\t\t\t\t<div class=\"col-md-3 col-sm-6 col-xs-12\">\n\t\t\t\t\t\t\t\t<div class=\"module-box-left\" style=\"background-image:url(assets/images/listing/spa-miniatura.jpg);\">\n\t\t\t\t\t\t\t\t\t<div class=\"description\">Spa</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</a>\n\t\t\t\t\t\t<a [routerLink]=\"['/services-available-spaces']\">\n\t\t\t\t\t\t\t<div class=\"col-md-3 col-sm-6 col-xs-12\">\n\t\t\t\t\t\t\t\t<div class=\"module-box-left\" style=\"background-image:url(assets/images/listing/img_events_salon_home.jpg);\">\n\t\t\t\t\t\t\t\t\t<div class=\"description\">Space Rental</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</a>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</section>\n\n<section>\n\t<div class=\"container mt50 banner-pro\">\n\t\t<div class=\"row\">\n\t\t\t<div class=\"col-md-12\">\n\t\t\t\t<div class=\"title mb30\">\n\t\t\t\t\t<h2 class=\"mb0\"><b><br class=\"display_responsive\"/>SalonHome PRO <span class=\"label_top_blue\">PRO</span></b></h2>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"col-sm-12 mb10 p0 layer-background\" style=\"background-image:url(assets/images/listing/banner-salon-home-pro.jpg);background-position: center top;background-repeat: no-repeat;padding: 50px;\" role=\"img\">\n\t\t\t\t\t<p class=\"mt40 mb30\" style=\"font-size: 20px;\">\n\t\t\t\t\t\tA new way to reach new clients. <br />\n\t\t\t\t\t\tUnlock new opportunities for your business <br />\n\t\t\t\t\t\tby upgrading to a SalonHome PRO account\n\t\t\t\t\t</p>\n\t\t\t\t\t<a [routerLink]=\"['/how-it-works-professionals']\" class=\"btn theme_btn br2 text-normal size-medium\">Learn More</a>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</section>\n\n<section class=\"listing-modules\">\n\t<div class=\"container mt50\">\n\t\t<div class=\"row mb20\">\n\t\t\t<div class=\"col-md-12\">\n\t\t\t\t<div class=\"title\">\n\t\t\t\t\t<h2 class=\"mb0\"><b>Hair Stylist </b></h2>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"col-sm-12 mb10 p0\">\n\t\t\t\t\t<p class=\"paragraph_3 mb0\">Book experienced hair stylists in your area</p>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\n\t\t<div id=\"version2\" class=\"row tab-pane team_layout2 pb15\">\n\t\t\t<div class=\"text-center\">\n\t\t\t\t<div class=\"col-md-12 p0 content-carousel\">\n\t\t\t\t\t<div  class=\"swiper-container carousel\" [swiper]=\"slideConfig\" (init)=\"swiperInit($event)\" (reachEnd)=\"swiperReachEnd($event)\" (reachBeginning)=\"swiperReachBeginning($event)\" (slideChange)=\"swiperSlideChange($event)\">\n  \t\t\t\t\t\t<div class=\"swiper-wrapper\">\n\t\t\t\t\t\t\t<div *ngFor=\"let slide of HairStylist\" class=\"swiper-slide slide\">\n\n\t\t\t\t\t\t\t\t<div class=\"col-md-12 team-block\">\n\t\t\t\t\t\t\t\t\t<img class=\"img img-responsive\" src=\"{{ slide.img }}\" alt=\"team4\" width=\"270\" height=\"278\" alt=\"{{ slide.title }} - Hair Stylist\" />\n\t\t\t\t\t\t\t\t\t<div class=\"team-desc text-left\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"team-name text-left mb5\"><h3 class=\"mb0\">{{ slide.title }}</h3></div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"rating mb5\">\n\t\t\t\t\t\t\t\t\t\t\t<i class=\"i-star\"></i>\n\t\t\t\t\t\t\t\t\t\t\t<i class=\"i-star\"></i>\n\t\t\t\t\t\t\t\t\t\t\t<i class=\"i-star\"></i>\n\t\t\t\t\t\t\t\t\t\t\t<i class=\"i-star\" *ngIf=\"slide.stars != '3'\"></i>\n\t\t\t\t\t\t\t\t\t\t\t<i class=\"i-starg\" *ngIf=\"slide.stars == '3'\"></i>\n\t\t\t\t\t\t\t\t\t\t\t<i class=\"i-starg\" *ngIf=\"slide.stars == '3'\"></i>\n\t\t\t\t\t\t\t\t\t\t\t<i class=\"i-starg\" *ngIf=\"slide.stars == '4'\"></i>\n\t\t\t\t\t\t\t\t\t\t\t<i class=\"i-starm\" *ngIf=\"slide.stars == '4.5'\"></i>\n\t\t\t\t\t\t\t\t\t\t\t<i class=\"i-star\" *ngIf=\"slide.stars == '5'\"></i>\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"qty_reviews f_open color-primary\">{{ slide.reviews }} Reviews</span>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"team-position\">\n\t\t\t\t\t\t\t\t\t\t\t<p style=\"text-align: justify;\">{{ slide.description }}</p>\n\t\t\t\t\t\t\t\t\t\t\t<p class=\"f_open\" *ngIf=\"slide.price?.length > 0\" >{{ slide.price }}</p>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</section>\n\n<section class=\"listing-modules\">\n\t<div class=\"container\">\n\t\t<div class=\"row mb20\">\n\t\t\t<div class=\"col-md-12\">\n\t\t\t\t<div class=\"title\">\n\t\t\t\t\t<h2 class=\"mb0\"><b>Barbers</b></h2>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"col-sm-12 mb10 p0\">\n\t\t\t\t\t<p class=\"paragraph_3 mb0\">Book experienced barbers in your area</p>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\n\t\t<div id=\"version2\" class=\"row tab-pane team_layout2 pb15\">\n\t\t\t<div class=\"text-center\">\n\t\t\t\t<div class=\"col-md-12 p0 content-carousel\">\n\t\t\t\t\t<div id=\"version2\" class=\"row tab-pane team_layout2 pb15\">\n\t\t\t\t\t\t<div class=\"text-center\">\n\t\t\t\t\t\t\t<div class=\"col-md-12 p0 content-carousel\">\n\t\t\t\t\t\t\t\t<div  class=\"swiper-container carousel\" [swiper]=\"slideConfig\" (init)=\"swiperInit($event)\" (reachEnd)=\"swiperReachEnd($event)\" (reachBeginning)=\"swiperReachBeginning($event)\" (slideChange)=\"swiperSlideChange($event)\">\n\t\t\t\t\t\t\t\t\t<div class=\"swiper-wrapper\">\n\t\t\t\t\t\t\t\t\t\t<div *ngFor=\"let slide of Barbers\" class=\"swiper-slide slide\">\n\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-12 team-block\">\n\t\t\t\t\t\t\t\t\t\t\t\t<img class=\"img img-responsive\" src=\"{{ slide.img }}\" alt=\"team4\" width=\"270\" height=\"278\" alt=\"{{ slide.title }} - Barbers\" />\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"team-desc text-left\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"team-name text-left mb5\"><h3 class=\"mb0\">{{ slide.title }}</h3></div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"rating mb5\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"i-star\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"i-star\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"i-star\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"i-star\" *ngIf=\"slide.stars != '3'\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"i-starg\" *ngIf=\"slide.stars == '3'\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"i-starg\" *ngIf=\"slide.stars == '3'\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"i-starg\" *ngIf=\"slide.stars == '4'\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"i-starm\" *ngIf=\"slide.stars == '4.5'\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"i-star\" *ngIf=\"slide.stars == '5'\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"qty_reviews f_open color-primary\">{{ slide.reviews }} Reviews</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"team-position\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<p style=\"text-align: justify;\">{{ slide.description }}</p>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<p class=\"f_open\" *ngIf=\"slide.price?.length > 0\" >{{ slide.price }}</p>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</section>\n\n<section class=\"listing-modules\">\n\t<div class=\"container\">\n\t\t<div class=\"row mb20\">\n\t\t\t<div class=\"col-md-12\">\n\t\t\t\t<div class=\"title\">\n\t\t\t\t\t<h2 class=\"mb0\"><b>Massage Therapist</b></h2>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"col-sm-12 mb10 p0\">\n\t\t\t\t\t<p class=\"paragraph_3 mb0\">Book experienced massage therapists in your area</p>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\n\t\t<div id=\"version2\" class=\"row tab-pane team_layout2 pb15\">\n\t\t\t<div class=\"text-center\">\n\t\t\t\t<div class=\"col-md-12 p0 content-carousel\">\n\t\t\t\t\t<div  class=\"swiper-container carousel\" [swiper]=\"slideConfig\" (init)=\"swiperInit($event)\" (reachEnd)=\"swiperReachEnd($event)\" (reachBeginning)=\"swiperReachBeginning($event)\" (slideChange)=\"swiperSlideChange($event)\">\n  \t\t\t\t\t\t<div class=\"swiper-wrapper\">\n\t\t\t\t\t\t\t<div *ngFor=\"let slide of MassageTherapist\" class=\"swiper-slide slide\">\n\t\t\t\t\t\t\t\t<div class=\"col-md-12 team-block\">\n\t\t\t\t\t\t\t\t\t<img class=\"img img-responsive\" src=\"{{ slide.img }}\" alt=\"team4\" width=\"270\" height=\"278\" alt=\"{{ slide.title }} - Massage Therapist\" />\n\t\t\t\t\t\t\t\t\t<div class=\"team-desc text-left\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"team-name text-left mb5\"><h3 class=\"mb0\">{{ slide.title }}</h3></div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"rating mb5\">\n\t\t\t\t\t\t\t\t\t\t\t<i class=\"i-star\"></i>\n\t\t\t\t\t\t\t\t\t\t\t<i class=\"i-star\"></i>\n\t\t\t\t\t\t\t\t\t\t\t<i class=\"i-star\"></i>\n\t\t\t\t\t\t\t\t\t\t\t<i class=\"i-star\" *ngIf=\"slide.stars != '3'\"></i>\n\t\t\t\t\t\t\t\t\t\t\t<i class=\"i-starg\" *ngIf=\"slide.stars == '3'\"></i>\n\t\t\t\t\t\t\t\t\t\t\t<i class=\"i-starg\" *ngIf=\"slide.stars == '3'\"></i>\n\t\t\t\t\t\t\t\t\t\t\t<i class=\"i-starg\" *ngIf=\"slide.stars == '4'\"></i>\n\t\t\t\t\t\t\t\t\t\t\t<i class=\"i-starm\" *ngIf=\"slide.stars == '4.5'\"></i>\n\t\t\t\t\t\t\t\t\t\t\t<i class=\"i-star\" *ngIf=\"slide.stars == '5'\"></i>\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"qty_reviews f_open color-primary\">{{ slide.reviews }} Reviews</span>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"team-position\">\n\t\t\t\t\t\t\t\t\t\t\t<p style=\"text-align: justify;\">{{ slide.description }}</p>\n\t\t\t\t\t\t\t\t\t\t\t<p class=\"f_open\" *ngIf=\"slide.price?.length > 0\" >{{ slide.price }}</p>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</section>\n\n<section class=\"listing-modules\">\n\t<div class=\"container border-bottom-gray\">\n\t\t<div class=\"row mb20\">\n\t\t\t<div class=\"col-md-12\">\n\t\t\t\t<div class=\"title\">\n\t\t\t\t\t<h2 class=\"mb0\"><b>Spas</b></h2>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"col-sm-12 mb10 p0\">\n\t\t\t\t\t<p class=\"paragraph_3 mb0\">Book spa services in your area</p>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\n\t\t<div id=\"version2\" class=\"row tab-pane team_layout2 pb15\">\n\t\t\t<div class=\"text-center\">\n\t\t\t\t<div class=\"col-md-12 p0 content-carousel\">\n\t\t\t\t\t<div  class=\"swiper-container carousel\" [swiper]=\"slideConfig\" (init)=\"swiperInit($event)\" (reachEnd)=\"swiperReachEnd($event)\" (reachBeginning)=\"swiperReachBeginning($event)\" (slideChange)=\"swiperSlideChange($event)\">\n  \t\t\t\t\t\t<div class=\"swiper-wrapper\">\n\t\t\t\t\t\t\t<div *ngFor=\"let slide of Spas\" class=\"swiper-slide slide\">\n\t\t\t\t\t\t\t\t<div class=\"col-md-12 team-block\">\n\t\t\t\t\t\t\t\t\t<img class=\"img img-responsive\" src=\"{{ slide.img }}\" alt=\"team4\" width=\"270\" height=\"278\" alt=\"{{ slide.title }} - Spas\" />\n\t\t\t\t\t\t\t\t\t<div class=\"team-desc text-left\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"team-name text-left mb5\"><h3 class=\"mb0\">{{ slide.title }}</h3></div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"rating mb5\">\n\t\t\t\t\t\t\t\t\t\t\t<i class=\"i-star\"></i>\n\t\t\t\t\t\t\t\t\t\t\t<i class=\"i-star\"></i>\n\t\t\t\t\t\t\t\t\t\t\t<i class=\"i-star\"></i>\n\t\t\t\t\t\t\t\t\t\t\t<i class=\"i-star\" *ngIf=\"slide.stars != '3'\"></i>\n\t\t\t\t\t\t\t\t\t\t\t<i class=\"i-starg\" *ngIf=\"slide.stars == '3'\"></i>\n\t\t\t\t\t\t\t\t\t\t\t<i class=\"i-starg\" *ngIf=\"slide.stars == '3'\"></i>\n\t\t\t\t\t\t\t\t\t\t\t<i class=\"i-starg\" *ngIf=\"slide.stars == '4'\"></i>\n\t\t\t\t\t\t\t\t\t\t\t<i class=\"i-starm\" *ngIf=\"slide.stars == '4.5'\"></i>\n\t\t\t\t\t\t\t\t\t\t\t<i class=\"i-star\" *ngIf=\"slide.stars == '5'\"></i>\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"qty_reviews f_open color-primary\">{{ slide.reviews }} Reviews</span>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"team-position\">\n\t\t\t\t\t\t\t\t\t\t\t<p style=\"text-align: justify;\">{{ slide.description }}</p>\n\t\t\t\t\t\t\t\t\t\t\t<p class=\"f_open\" *ngIf=\"slide.price?.length > 0\" >{{ slide.price }}</p>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</section>\n\n<section id=\"layer-banner-home\" class=\"section-mod pt0 pb0\">\n\t<div class=\"container p0 mt70\">\n\t\t<div class=\"valign_middle row\">\n\t\t\t<div class=\"col-lg-5 col-sm-6 col-xs-12 text-center wow fadeInLeft f-img-post-top\" data-wow-duration=\"1300\" data-wow-delay=\"0.4s\">\n\t\t\t\t<div class=\"column-inner mb30\">\n\t\t\t\t\t<img src=\"assets/images/rent-now.jpg\" class=\"img img-responsive m_auto img-services-auto\" alt=\"A new way to reach new clients - Salon Home\" width=\"436\" height=\"227\" />\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class=\"col-lg-7 col-sm-6 col-xs-12 wow fadeInRight s-text-post-top\" data-wow-duration=\"1300\" data-wow-delay=\"0.4s\">\n\t\t\t\t<div class=\"column-inner\" style=\"padding-left: 20px;\">\n\t\t\t\t\t<h3 style=\"line-height: initial;\" class=\"mt0 mb20\"><strong>Find out how much you could earn renting a chair or space</strong><br />Turn your unused spots into extra profits</h3>\n\t\t\t\t\t<a [routerLink]=\"['/services-available-spaces']\" class=\"btn theme_btn br2 text-normal size-medium\">Rent Now</a>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</section>\n\n<section id=\"rent\" class=\"section-mod pb30\">\n\t<div class=\"container\">\n\t\t<div class=\"row mb20\">\n\t\t\t<div class=\"col-md-12\">\n\t\t\t\t<div class=\"title\">\n\t\t\t\t\t<h2 class=\"text-center mb10\"><b>Rent A Salon, Spa, or Shared Beauty Space</b></h2>\n\t\t\t\t\t<div class=\"col-sm-12 col-md-6 col-md-offset-3 text-center \" data-wow-delay=\"0.4s\">\n\t\t\t\t\t\t<p class=\"mb0\">Find thousands of business owners renting chairs & spaces.</p>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t\t<div class=\"row\">\n\n\t\t\t<div id=\"version2\" class=\"tab-pane team_layout2 col-md-12 layout-team four-layout\">\n\t\t\t\t<div class=\"text-center\">\n\t\t\t\t\t<div class=\"col-md-3 col-sm-6 team-block mb30\">\n\t\t\t\t\t\t<img class=\"img img-responsive\" src=\"assets/images/post/exclusive-hair-studio.jpg\" alt=\"Exclusive Hair Studio in Heart of Astoria\" width=\"270\" height=\"354\" />\n\t\t\t\t\t\t<div class=\"team-desc text-left\">\n\t\t\t\t\t\t\t<div class=\"team-name text-left mb10\"><h3>Exclusive Hair Studio in Heart of Astoria</h3></div>\n\t\t\t\t\t\t\t<div class=\"rating mb10\">\n\t\t\t\t\t\t\t\t<i class=\"i-star\"></i>\n\t\t\t\t\t\t\t\t<i class=\"i-star\"></i>\n\t\t\t\t\t\t\t\t<i class=\"i-star\"></i>\n\t\t\t\t\t\t\t\t<i class=\"i-star\"></i>\n\t\t\t\t\t\t\t\t<i class=\"i-star\"></i>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"team-position height_auto\"><p><span class=\"bmod\">10</span>Excellent</p></div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"col-md-3 col-sm-6 team-block mb30\">\n\t\t\t\t\t\t<img class=\"img img-responsive\" src=\"assets/images/post/exclusive-massage.jpg\" alt=\"Exclusive Massage in Heart of Astoria\" width=\"270\" height=\"354\" />\n\t\t\t\t\t\t<div class=\"team-desc text-left\">\n\t\t\t\t\t\t\t<div class=\"team-name text-left mb10\"><h3>Exclusive Massage in Heart of Astoria</h3></div>\n\t\t\t\t\t\t\t<div class=\"rating mb10\">\n\t\t\t\t\t\t\t\t<i class=\"i-star\"></i>\n\t\t\t\t\t\t\t\t<i class=\"i-star\"></i>\n\t\t\t\t\t\t\t\t<i class=\"i-star\"></i>\n\t\t\t\t\t\t\t\t<i class=\"i-star\"></i>\n\t\t\t\t\t\t\t\t<i class=\"i-star\"></i>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"team-position height_auto\"><p><span class=\"bmod\">10</span>Excellent</p></div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"col-md-3 col-sm-6 team-block mb30\">\n\t\t\t\t\t\t<img class=\"img img-responsive\" src=\"assets/images/post/marvelous-nail-table.jpg\" alt=\"Marvelous Nail Table with available\" width=\"270\" height=\"354\" />\n\t\t\t\t\t\t<div class=\"team-desc text-left\">\n\t\t\t\t\t\t\t<div class=\"team-name text-left mb10\"><h3>Marvelous Nail Table with available</h3></div>\n\t\t\t\t\t\t\t<div class=\"rating mb10\">\n\t\t\t\t\t\t\t\t<i class=\"i-star\"></i>\n\t\t\t\t\t\t\t\t<i class=\"i-star\"></i>\n\t\t\t\t\t\t\t\t<i class=\"i-star\"></i>\n\t\t\t\t\t\t\t\t<i class=\"i-star\"></i>\n\t\t\t\t\t\t\t\t<i class=\"i-starg\"></i>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"team-position height_auto\"><p><span class=\"bmod\">0.8</span>Very Good</p></div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"col-md-3 col-sm-6 team-block mb30\">\n\t\t\t\t\t\t<img class=\"img img-responsive\" src=\"assets/images/post/chairs-for-barbers.jpg\" alt=\"8 Chair available for local barbers\" width=\"270\" height=\"354\" />\n\t\t\t\t\t\t<div class=\"team-desc text-left\">\n\t\t\t\t\t\t\t<div class=\"team-name text-left mb10\"><h3>8 Chair available for local barbers</h3></div>\n\t\t\t\t\t\t\t<div class=\"rating mb10\">\n\t\t\t\t\t\t\t\t<i class=\"i-star\"></i>\n\t\t\t\t\t\t\t\t<i class=\"i-star\"></i>\n\t\t\t\t\t\t\t\t<i class=\"i-star\"></i>\n\t\t\t\t\t\t\t\t<i class=\"i-starg\"></i>\n\t\t\t\t\t\t\t\t<i class=\"i-starg\"></i>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"team-position height_auto\"><p><span class=\"bmod\">0.6</span>Good</p></div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t\n\t\t</div>\n\t</div>\n</section>\n\n<section class=\"section-mod pt0 pb0\" id=\"section_map\">\n\t<div class=\"container\">\n\t\t<div class=\"row mb20\">\n\t\t\t<div class=\"title\">\n\t\t\t\t<h2 class=\"text-center mb0\" data-wow-delay=\"0.2s\"><b class=\"mb20\">In Your Neighborhood</b></h2>\n\t\t\t\t<div class=\"col-sm-12 col-md-10 col-md-offset-1 text-center \" data-wow-delay=\"0.4s\">\n\t\t\t\t\t<p class=\"mb50\">SalonHome is coming to these cities soon. Don’t see your city yet? Contact Us and let us know where <br />we should bring beauty without boundaries</p>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</section>\n\n<section class=\"bg-opaque_2 c_relative\">\n    <div class=\"container\">\n        <div class=\"row\">\n\t\t\t<div class=\"col-md-12 mt40 mb50\">\n\t\t\t\t<h3 class=\"mb0\" data-wow-delay=\"0.2s\"><b class=\"mb20\">Find Trusted Professionals by market:</b></h3>\n\t\t\t\t<div class=\"col-sm-12 col-md-12 p0 content-colums_list_4\" data-wow-delay=\"0.4s\">\n\t\t\t\t\t\t\n\t\t\t\t\t<ul class=\"colums_list_4 mt40 col-md-3 col-sm-6 col-xs-6 p0\">\n\t\t\t\t\t\t<li>Atlanta</li>\n\t\t\t\t\t\t<li>Baltimore</li>\n\t\t\t\t\t\t<li>Birmingham</li>\n\t\t\t\t\t\t<li>Boston</li>\n\t\t\t\t\t\t<li>Charlotte</li>\n\t\t\t\t\t\t<li>Chicago</li>\n\t\t\t\t\t\t<li>Cincinnati</li>\n\t\t\t\t\t\t<li>Cleveland</li>\n\t\t\t\t\t\t<li>Dallas</li>\n\t\t\t\t\t\t<li>Denver</li>\t\t\t\t\t\t\n\t\t\t\t\t\t<li>Detroit</li>\n\t\t\t\t\t</ul>\n\n\t\t\t\t\t<ul class=\"colums_list_4 mt40 col-md-3 col-sm-6 col-xs-6 p0\">\n\t\t\t\t\t\t<li>Greenville</li>\n\t\t\t\t\t\t<li>Houston</li>\n\t\t\t\t\t\t<li>Indianapolis</li>\n\t\t\t\t\t\t<li>Jacksonville</li>\n\t\t\t\t\t\t<li>Kansas City</li>\n\t\t\t\t\t\t<li>Las Vegas</li>\n\t\t\t\t\t\t<li>Los Angeles</li>\n\t\t\t\t\t\t<li>Memphis</li>\n\t\t\t\t\t\t<li>Miami</li>\n\t\t\t\t\t\t<li>Milwaukee</li>\n\t\t\t\t\t\t<li>Minneapolis</li>\n\t\t\t\t\t</ul>\n\t\t\t\t\t<ul class=\"colums_list_4 mt40 col-md-3 col-sm-6 col-xs-6 p0\">\n\t\t\t\t\t\t<li>Myrtle Beach</li>\n\t\t\t\t\t\t<li>Nashville</li>\n\t\t\t\t\t\t<li>New Jersey</li>\n\t\t\t\t\t\t<li>New Orleans</li>\n\t\t\t\t\t\t<li>New York City</li>\n\t\t\t\t\t\t<li>Orlando</li>\n\t\t\t\t\t\t<li>Philadelphia</li>\n\t\t\t\t\t\t<li>Phoenix</li>\n\t\t\t\t\t\t<li>Pittsburgh</li>\n\t\t\t\t\t\t<li>Portland</li>\n\t\t\t\t\t\t<li>Raleigh</li>\n\t\t\t\t\t</ul>\n\t\t\t\t\t<ul class=\"colums_list_4 mt40 col-md-3 col-sm-6 col-xs-6 p0\">\n\t\t\t\t\t\t<li>Richmond</li>\n\t\t\t\t\t\t<li>Sacramento</li>\n\t\t\t\t\t\t<li>Salt Lake City</li>\n\t\t\t\t\t\t<li>San Antonio</li>\n\t\t\t\t\t\t<li>San Diego</li>\n\t\t\t\t\t\t<li>San Francisco</li>\n\t\t\t\t\t\t<li>Seattle</li>\n\t\t\t\t\t\t<li>St. Louis</li>\n\t\t\t\t\t\t<li>Tampa</li>\n\t\t\t\t\t\t<li>Virginia Beach</li>\n\t\t\t\t\t\t<li>District of Columbia</li>\n\t\t\t\t\t</ul>\n\t\t\t\t</div>\n\t\t\t</div>\n        </div>\n    </div>\n</section>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/pages/howitworks/howitworks-clients.component.html":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/pages/howitworks/howitworks-clients.component.html ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"wow fadeIn\" data-wow-duration=\"2000\" >\n\t<section class=\"section-mod pb0 bg-gray-3\">\n\t\t<div class=\"container\">\n\t\t\t<div class=\"row layout_clients_banner\">\n\t\t\t\t<div class=\"col-md-6 col-sm-6 text-center\">\n\t\t\t\t\t<img src=\"assets/images/app-capture-professionals1-new.png\" class=\"img-1 img img-responsive wow zoomInLeft\" data-wow-delay=\"0.2s\" alt=\"\" />\n\t\t\t\t\t<img src=\"assets/images/app-capture-zoom-professionals1.png\" class=\"img-2 img img-responsive wow zoomInLeft\" data-wow-delay=\"0.8s\" alt=\"\" />\n\t\t\t\t</div>\n\t\t\t\t<div class=\"col-md-6 col-sm-6 mt80\">\n\t\t\t\t\t<div class=\"title\">\n\t\t\t\t\t\t<h2 class=\"text-center wow fadeIn\" data-wow-duration=\"1300\" data-wow-delay=\"1.2s\"><b class=\"theme_color\">Book Your Perfect Beauty Match</b></h2>\n\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12 text-center mb40 p0 wow fadeIn\" data-wow-duration=\"1300\" data-wow-delay=\"1.6s\">\n\t\t\t\t\t\t\t<p class=\"mb0\">Trusted Beauty Professionals, when and where you need them</p>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"row wow fadeIn\" data-wow-duration=\"1300\" data-wow-delay=\"2.0s\">\n\t\t\t\t\t\t<div class=\"col-sm-12 text-center\">\n\t\t\t\t\t\t\t<a [routerLink]=\"['/try-it-free']\" class=\"btn theme_btn size-big brd\">Get Started</a>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</section>\n\n\t<section class=\"section-mod\">\n\t\t<div class=\"container\">\n\t\t\t<div class=\"row\">\n\t\t\t\t<div class=\"col-md-12\">\n\t\t\t\t\t<div class=\"title mb50 wow fadeInUp\" data-wow-delay=\"0.2s\">\n\t\t\t\t\t\t<h2 class=\"text-center theme_color\"><b>Beauty Specialist! Home Delivered!</b></h2>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"col-sm-12 col-md-10 col-md-offset-1 text-center mb40 wow fadeInUp\" data-wow-delay=\"0.4s\">\n\t\t\t\t\t<p>\n\t\t\t\t\tLet SalonHome bring you beauty without boundaries by connecting you to the Top Professionals in your next beauty appointment. SalonHome brings the stylist to you and we also give you the choice to come to a stylist for your next appointment. We offer more than just hair and nail services, we also offer esthetician services, massage services, and more! Download our app now on the Apple Store App or the Android Marketplace!\n\t\t\t\t\t</p>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"row text-center list-blocks\">\n\t\t\t\t\t<div class=\"col-md-4 col-sm-4 col-xs-12 single-block wow fadeInLeft\" data-wow-delay=\"0.6s\">\n\t\t\t\t\t\t<img class=\"img img-responsive m_auto\" src=\"assets/images/icons/icon-agent.jpg\" alt=\"\" />\n\t\t\t\t\t\t<div class=\"team-desc\">\n\t\t\t\t\t\t\t<h4 class=\"mt10 mb10\">Sign-up</h4>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<p>\n\t\t\t\t\t\t\tCreate an account with a<br /> few easy steps.\n\t\t\t\t\t\t</p>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"col-md-4 col-sm-4 col-xs-12 single-block wow fadeInLeft\" data-wow-delay=\"0.8s\">\n\t\t\t\t\t\t<img class=\"img img-responsive m_auto\" src=\"assets/images/icons/icon-finder.jpg\" alt=\"\" />\n\t\t\t\t\t\t<div class=\"team-desc\">\n\t\t\t\t\t\t\t<h4 class=\"mt10 mb10\">Search</h4>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<p>\n\t\t\t\t\t\t\tEnjoy access to thousands of trusted beauty professionals from what, nails, skincare and so much more.\n\t\t\t\t\t\t</p>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"col-md-4 col-sm-4 col-xs-12 single-block wow fadeInLeft\" data-wow-delay=\"1.0s\">\n\t\t\t\t\t\t<img class=\"img img-responsive m_auto\" src=\"assets/images/icons/icon-invoice.jpg\" alt=\"\" />\n\t\t\t\t\t\t<div class=\"team-desc\">\n\t\t\t\t\t\t\t<h4 class=\"mt10 mb10\">Book</h4>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<p>\n\t\t\t\t\t\t\tYour booking, Your way. We make it easy for you to book the professional of your choice at the time that's right for you.\n\t\t\t\t\t\t</p>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</section>\n\n\t<section class=\"mb60\">\n\t\t<div class=\"container\">\n\t\t\t<div class=\"row text-center\">\n\t\t\t\t<div class=\"col-md-4 col-sm-4 wow fadeInUp\" data-wow-delay=\"0.2s\">\n\t\t\t\t\t<img src=\"assets/images/app-how-it-works-clients-app-image12-new.png\" alt=\"\" class=\"img img-responsive m_autoimg-services-auto\" />\n\t\t\t\t</div>\n\t\t\t\t<div class=\"col-md-4 col-sm-4 wow fadeInUp\" data-wow-delay=\"0.4s\">\n\t\t\t\t\t<img src=\"assets/images/app-how-it-works-clients-app-image1b-new.png\" alt=\"\" class=\"img img-responsive m_auto img-services-auto\" />\n\t\t\t\t</div>\n\t\t\t\t<div class=\"col-md-4 col-sm-4 wow fadeInUp\" data-wow-delay=\"0.6s\">\n\t\t\t\t\t<img src=\"assets/images/app-how-it-works-clients-app-boo-new.png\" alt=\"\" class=\"img img-responsive m_auto img-services-auto\" />\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</section>\n\n\t<section class=\"mb60\">\n\t\t<div class=\"container\">\n\t\t\t<div class=\"row\">\n\t            <div class=\"col-md-10 col-md-offset-1 features_layout type2\">\n\t\t\t\t\t<div class=\"clearfix\"></div>\n\t            \t<div class=\"mb60 wow fadeInUp\" data-wow-delay=\"0.2s\">\n\t\t            \t<img class=\"ico\" src=\"assets/images/icons/icon-reserve.jpg\" alt=\"\"/>\n\t\t        \t\t<h5 class=\"theme_color_al\">Find & Book Your High-Quality Beauty Professional</h5>\n\t\t        \t\t<p>Search for quality beauty professionals from hair, nail, makeup, massage, skincare, and much more–in your city. Message them, read reviews, and find the perfect one for you.</p>\n\t        \t\t</div>\n\t        \t\t<div class=\"mb60 wow fadeInUp\" data-wow-delay=\"0.4s\">\n\t\t            \t<img class=\"ico\" src=\"assets/images/icons/icon-clock.jpg\" alt=\"\"/>\n\t\t        \t\t<h5 class=\"theme_color_al\">At A Time That’s Right For You</h5>\n\t\t        \t\t<p>Book your trusted professional outside of the normal business hours at a time that’s right for you and your lifestyle.</p>\n\t        \t\t</div>\n\t        \t\t<div class=\"mb40 wow fadeInUp\" data-wow-delay=\"0.6s\">\n\t\t            \t<img class=\"ico\" src=\"assets/images/icons/i-pmarker.png\" alt=\"\"/>\n\t\t        \t\t<h5 class=\"theme_color_al\">Right To Your Door</h5>\n\t\t        \t\t<p>You and your beauty professional can pick the perfect place for your services like salon, home or office–it’s all up to you.</p>\n\t        \t\t</div>\n\t            </div>\n\t\t\t</div>\n\t\t</div>\n\t</section>\n\n\t<section class=\"section-mod bg-gray-2 ng-scope pt40 pb50\">\n\t\t<div class=\"container\">\n\t\t\t<div class=\"row\">\n\t\t\t\t<div class=\"title text-center mb30 wow fadeInUp\" data-wow-delay=\"0.2s\">\n\t\t\t\t\t<h4><b class=\"c_white\">Our salon partners</b></h4>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"col-sm-12 text-center layout_inline mb30 layout_logos_foot wow fadeInUp\" data-wow-delay=\"0.4s\">\n\t\t\t\t\t<div class=\"col-sm-6 col-xs-10 block-img\"><div class=\"item\"><img src=\"assets/images/partners/logo-aveda.png\" alt=\"\" class=\"img img-responsive\"/></div></div>\n\t\t\t\t\t<div class=\"col-sm-6 col-xs-12 block-img\"><div class=\"item\"><img src=\"assets/images/partners/john-paul-m-systems.png\" alt=\"\" class=\"img img-responsive\"/></div></div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"col-sm-12 text-center layout_inline layout_logos_foot wow fadeInUp\" data-wow-delay=\"0.4s\">\n\t\t\t\t\t<div class=\"col-sm-6 col-xs-8 block-img\"><div class=\"item\"><img src=\"assets/images/partners/sustancity.png\" alt=\"\" class=\"img img-responsive\"/></div></div>\n\t\t\t\t\t<div class=\"col-sm-6 col-xs-7 block-img\" style=\"margin-top: 15px;\"><div class=\"item\"><img src=\"assets/images/partners/massage-envy.png\" alt=\"\" class=\"img img-responsive\"/></div></div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</section>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/pages/howitworks/howitworks-professionals.component.html":
/*!***************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/pages/howitworks/howitworks-professionals.component.html ***!
  \***************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"wow fadeIn\" data-wow-duration=\"2000\" >\n\t<section class=\"top-section-2\">\n\t    <div class=\"no-overlay\" style=\"background-image:url(assets/images/how-it-works-salon-home-1.jpg);background-position: center bottom;height: 525px;\" role=\"img\" aria-label=\"Salon Home - How it works Professionals\">\n\t    </div>\n\t</section>\n\n\t<section class=\"section-mod\">\n\t\t<div class=\"container\">\n\t\t\t<div class=\"row\">\n\t\t\t\t<div class=\"col-md-12\">\n\t\t\t\t\t<div class=\"title mb50 wow fadeInUp\" data-wow-delay=\"0.2s\">\n\t\t\t\t\t\t<h2 class=\"text-center\"><b class=\"theme_color\">Discover the true potential of your business</b></h2>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"col-sm-12 col-md-10 col-md-offset-1 text-center wow fadeInUp\" data-wow-delay=\"0.4s\">\n\t\t\t\t\t\t<p>\n\t\t\t\t\t\tWe’re the world’s leading marketplace for booking beauty services and events. Our mission is to provide a luxury experience whether you are a customer booking an in-home beauty service or a beauty professional booking a space for your next event. As a beauty professional, you will be able to expand, manage, and tend to the needs of your clientele with the tap of a finger. We connect you to the clientele you’ve dreamed of having while making the process of managing your bookings, clients, and business easier than ever before. \n\t\t\t\t\t\t</p>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</section>\n\n\t<section class=\"section-mod bg-primary pt40\">\n\t\t<div class=\"container\">\n\t\t\t<div class=\"row text-center\">\n\t\t\t\t<div class=\"col-md-12\">\n\t\t\t\t\t<img class=\"img img-responsive m_auto mb40 wow fadeInUp\" data-wow-delay=\"0.2s\" src=\"assets/images/salon-home-icon.png\" alt=\"\" />\n\t\t\t\t\t<div class=\"title text-center\">\n\t\t\t\t\t\t<p class=\"c_white wow fadeInUp\" data-wow-delay=\"0.4s\">\n\t\t\t\t\t\t\t<span class=\"big-letter\"><b>We offer a unique opportunity</b></span> for owners to open their professional spaces up to<br /> beauty professionals looking to book a private beauty service or book a Beauty Event.\n\t\t\t\t\t\t</p>\n\t\t\t\t\t\t<p class=\"c_white wow fadeInUp\" data-wow-delay=\"0.6s\">\n\t\t\t\t\t\t\tAs a Salon Owner, you will have access to professionals <br />\n\t\t\t\t\t\t\tactively waiting to book your space upon availability. \n\t\t\t\t\t\t</p>\n\t\t\t\t\t\t<p class=\"c_white mb0 wow fadeInUp\" data-wow-delay=\"0.8s\">\n\t\t\t\t\t\t\tYou will have the opportunity to make more money and gain exposure<br />\n\t\t\t\t\t\t\tfor your location through SalonHome. \n\t\t\t\t\t\t</p>\n\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</section>\n\n\t<section class=\"section-mod pb10 pb0\">\n\t\t<div class=\"container\">\n\t\t\t<div class=\"row\">\n\t\t\t\t<div class=\"title mb50 wow fadeInUp\" data-wow-delay=\"0.2s\">\n\t\t\t\t\t<h2 class=\"text-center theme_color\"><b>For Professionals</b></h2>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"row text-center list-blocks\">\n\t\t\t\t\t<div class=\"col-md-4 col-sm-4 col-xs-12 single-block wow fadeInUp\" data-wow-delay=\"0.4s\">\n\t\t\t\t\t\t<img class=\"img img-responsive m_auto\" src=\"assets/images/icons/icon-focus.jpg\" alt=\"\" />\n\t\t\t\t\t\t<div class=\"team-desc\">\n\t\t\t\t\t\t\t<h4 class=\"mt10 mb10\">Create</h4>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<p>\n\t\t\t\t\t\t\tSalonHome allows you to create <br />the beauty business you’ve always <br />dreamed of starting. \n\t\t\t\t\t\t</p>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"col-md-4 col-sm-4 col-xs-12 single-block wow fadeInUp\" data-wow-delay=\"0.6s\">\n\t\t\t\t\t\t<img class=\"img img-responsive m_auto\" src=\"assets/images/icons/icon-manager.jpg\" alt=\"\" />\n\t\t\t\t\t\t<div class=\"team-desc\">\n\t\t\t\t\t\t\t<h4 class=\"mt10 mb10\">Manage</h4>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<p>\n\t\t\t\t\t\t\tUse SalonHome to manage your <br />bookings, clients, and services.\n\t\t\t\t\t\t</p>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"col-md-4 col-sm-4 col-xs-12 single-block wow fadeInUp\" data-wow-delay=\"0.8s\">\n\t\t\t\t\t\t<img class=\"img img-responsive m_auto\" src=\"assets/images/icons/icon-grow.jpg\" alt=\"\" />\n\t\t\t\t\t\t<div class=\"team-desc\">\n\t\t\t\t\t\t\t<h4 class=\"mt10 mb10\">Grow</h4>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<p>\n\t\t\t\t\t\t\tExpand your clientele, host beauty <br />events, and enhance your customer <br />experience. \n\t\t\t\t\t\t</p>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</section>\n\n\t<section class=\"section-mod pb0\">\n\t\t<div class=\"container\">\n\t\t\t<div class=\"row text-center\">\n\t\t\t\t<div class=\"title text-center mb50 wow fadeInUp\" data-wow-delay=\"0.2s\">\n\t\t\t\t\t<h3><b>How do I become a partner?</b></h3>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"col-sm-12 layout_features_2\">\n\t\t\t\t\t<div class=\"row mb20 wow fadeInUp\" data-wow-delay=\"0.4s\">\n\t\t\t\t\t\t<div class=\"col-md-6 col-sm-6 text-right\">\n\t\t\t\t\t\t\t<div class=\"block-img\">\n\t\t\t\t\t\t\t\t<img class=\"img img-responsive m_auto\" src=\"assets/images/app-img-1.jpg\" alt=\"\" />\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"col-md-6 col-sm-6 text-left\">\n\t\t\t\t\t\t\t<div class=\"block-text mt30\">\n\t\t\t\t\t\t\t\t<span class=\"circle-span bg-secondary\">Step 1</span>\n\t\t\t\t\t\t\t\t<p>Set up your profile, add your menu and prices</p>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"row mb20 wow fadeInUp\" data-wow-delay=\"0.6s\">\n\t\t\t\t\t\t<div class=\"col-md-6 col-sm-6 text-right\">\n\t\t\t\t\t\t\t<div class=\"block-img\">\n\t\t\t\t\t\t\t\t<img class=\"img img-responsive m_auto\" src=\"assets/images/app-img-2.jpg\" alt=\"\" />\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"col-md-6 col-sm-6 text-left\">\n\t\t\t\t\t\t\t<div class=\"block-text mt30\">\n\t\t\t\t\t\t\t\t<span class=\"circle-span bg-primary\">Step 2</span>\n\t\t\t\t\t\t\t\t<p>Keep your calendar up to date so we can advertise your empty slots</p>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"row mb20 wow fadeInUp\" data-wow-delay=\"0.8s\">\n\t\t\t\t\t\t<div class=\"col-md-6 col-sm-6 text-right\">\n\t\t\t\t\t\t\t<div class=\"block-img\">\n\t\t\t\t\t\t\t\t<img class=\"img img-responsive m_auto\" src=\"assets/images/app-img-3.jpg\" alt=\"\" />\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"col-md-6 col-sm-6 text-left\">\n\t\t\t\t\t\t\t<div class=\"block-text mt30\">\n\t\t\t\t\t\t\t\t<span class=\"circle-span bg-gray\">Step 3</span>\n\t\t\t\t\t\t\t\t<p>Reach new customers and grow your revenue</p>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"row wow fadeIn\" data-wow-duration=\"1300\" data-wow-delay=\"1.4s\">\n\t\t\t\t\t<div class=\"col-sm-12 text-center\">\n\t\t\t\t\t\t<a [routerLink]=\"['/try-it-free']\" class=\"btn theme_btn size-big brd\">Get Started</a>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</section>\n\n\t<section class=\"section-mod\">\n\t\t<div class=\"container\">\n\t\t\t<div class=\"row\">\n\t\t\t\t<div class=\"col-sm-6 layout_features_3 mb40 wow fadeInLeft\" data-wow-delay=\"0.2s\">\n\t\t\t\t\t<div class=\"image text-center\"><img src=\"assets/images/tour_feature_reports.jpg\" alt=\"\" class=\"img img-responsive\"/></div>\n\t\t\t\t\t<div class=\"description\">\n\t\t\t\t\t\t<h4 class=\"theme_color\">Reports</h4>\n\t\t\t\t\t\t<p>Track sales and revenue, attendance, retention levels and much more. Figure out the trends and use what you learn to adjust your business plan.</p>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"col-sm-6 layout_features_3 mb40 wow fadeInRight\" data-wow-delay=\"0.2s\">\n\t\t\t\t\t<div class=\"image text-center\"><img src=\"assets/images/tour_feature_listing.jpg\" alt=\"\" class=\"img img-responsive\"/></div>\n\t\t\t\t\t<div class=\"description\">\n\t\t\t\t\t\t<h4 class=\"theme_color\">Listings</h4>\n\t\t\t\t\t\t<p>Finish your daily tasks quicker, from sending client reminders and confirmations to monitoring clients’ account status to calculating sales tax.</p>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"col-sm-6 layout_features_3 mb40 wow fadeInLeft\" data-wow-delay=\"0.4s\">\n\t\t\t\t\t<div class=\"image text-center\"><img src=\"assets/images/tour_feature_booking.jpg\" alt=\"\" class=\"img img-responsive\"/></div>\n\t\t\t\t\t<div class=\"description\">\n\t\t\t\t\t\t<h4 class=\"theme_color\">Online Booking</h4>\n\t\t\t\t\t\t<p>Give clients the freedom to view your schedule, book their next class online, and even pay before they arrive.</p>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"col-sm-6 layout_features_3 mb40 wow fadeInLeft\" data-wow-delay=\"0.4s\">\n\t\t\t\t\t<div class=\"image text-center\"><img src=\"assets/images/tour_feature_rent.jpg\" alt=\"\" class=\"img img-responsive\"/></div>\n\t\t\t\t\t<div class=\"description\">\n\t\t\t\t\t\t<h4 class=\"theme_color\">Rent a space</h4>\n\t\t\t\t\t\t<p>Attract new customers by getting exposure in front of the right people—and then track your results.</p>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</section>\n\n\t<section class=\"section-mod bg-gray-2 ng-scope pt40 pb50\">\n\t\t<div class=\"container\">\n\t\t\t<div class=\"row\">\n\t\t\t\t<div class=\"title text-center mb30 wow fadeInUp\" data-wow-delay=\"0.2s\">\n\t\t\t\t\t<h4><b class=\"c_white\">Our salon partners</b></h4>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"col-sm-12 text-center layout_inline mb30 layout_logos_foot wow fadeInUp\" data-wow-delay=\"0.4s\">\n\t\t\t\t\t<div class=\"col-sm-6 col-xs-10 block-img\"><div class=\"item\"><img src=\"assets/images/partners/logo-aveda.png\" alt=\"\" class=\"img img-responsive\"/></div></div>\n\t\t\t\t\t<div class=\"col-sm-6 col-xs-12 block-img\"><div class=\"item\"><img src=\"assets/images/partners/john-paul-m-systems.png\" alt=\"\" class=\"img img-responsive\"/></div></div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"col-sm-12 text-center layout_inline layout_logos_foot wow fadeInUp\" data-wow-delay=\"0.6s\">\n\t\t\t\t\t<div class=\"col-sm-6 col-xs-8 block-img\"><div class=\"item\"><img src=\"assets/images/partners/sustancity.png\" alt=\"\" class=\"img img-responsive\"/></div></div>\n\t\t\t\t\t<div class=\"col-sm-6 col-xs-7 block-img\" style=\"margin-top: 15px;\"><div class=\"item\"><img src=\"assets/images/partners/massage-envy.png\" alt=\"\" class=\"img img-responsive\"/></div></div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</section>\n\n\t<section class=\"bg-opaque c_relative\">\n\t    <div class=\"container\">\n\t        <div class=\"row\">\n\t            <div class=\"col-xs-12 col-sm-6 col-sm-offset-6 mb40 paragraphs_layout p95\">\n\t                <div class=\"title mb0 col-md-medium\">\n\t\t\t\t\t\t<div class=\"text-center wow fadeInUp\" data-wow-delay=\"0.2s\"><h2><b class=\"mb60\"><span class=\"middle\">Professionals </span><img src=\"assets/images/icons/icon-heart.png\" alt=\"Heart\"/><span class=\"middle\"> Us</span></b></h2></div>\n\t\t\t\t\t\t<p class=\"mb20 text-justify wow fadeInUp\" data-wow-delay=\"0.4s\">\n\t\t\t\t\t\tAll in one! This is literally the best app ever created! Talk about breakthrough for the Beauty  industry. With so many apps out there, SalonHome stands alone...Puts the professionalism back in our hands: networking beauty owners to beauty professionals, connecting and interacting with our clients on a whole new level with a plethora of services. \n\t\t\t\t\t\t</p>\n\t\t\t\t\t\t<p class=\"mb20 text-justify wow fadeInUp\" data-wow-delay=\"0.6s\">\n\t\t\t\t\t\tEverything you need is right here on the SalonHome Mobile App!\n\t\t\t\t\t\t</p>\n\t\t\t\t\t\t<p class=\"mb0 wow fadeInUp\" data-wow-delay=\"0.8s\">\n\t\t\t\t\t\t\t<span class=\"big-letter\"><b>Imani <span class=\"theme_color\">Simms</span></b></span>\n\t\t\t\t\t\t</p>\n\t\t\t\t\t</div>\n\t            </div>\n\t        </div>\n\t    </div>\n\t    <div class=\"col-xs-12 col-sm-6 col-sm-offset-0 feature-callout-image-pull feature-callout-cover wow fadeInLeft\"  style=\"background-image:url(assets/images/how-it-works-salon.jpg); background-position: center top;\" role=\"img\" aria-label=\"\"></div>\n\t</section>\n\n\t<section class=\"section-mod c_relative\">\n\t    <div class=\"container\">\n\t        <div class=\"row\">\n\t            <div class=\"title mb0 col-md-medium wow fadeInUp\" data-wow-delay=\"0.2s\">\n\t\t\t\t\t<div class=\"text-center\"><h2><b class=\"mb60\">Get in touch</b></h2></div>\n\t\t\t\t</div>\n\t        </div>\n\t        <div class=\"row\">\n\t        \t<form id=\"form-professionals\" [formGroup]=\"form\">\n\t\t        \t<div class=\"col-sm-6\">\n\t\t        \t\t<div class=\"row m0 wow fadeInUp\" data-wow-delay=\"0.4s\"><b class=\"mb35 text_5 blc\">About the business</b></div>\n\t\t        \t\t<div class=\"row layout-form mb20\">\n\t\t        \t\t\t<div class=\"form-group has-feedback\" [ngClass]=\"displayFieldCss('business')\">\n\t\t        \t\t\t\t<div class=\"col-sm-12 wow fadeInUp\" data-wow-delay=\"0.6s\">\n\t\t        \t\t\t\t\t<input type=\"text\" formControlName=\"business\" id=\"business\" placeholder=\"Business name\" class=\"form-control mob_control\" />\n\t\t        \t\t\t\t\t<app-field-error-display \n\t\t\t        \t\t\t\t\t\t[displayError]=\"isFieldValid('business')\" \n\t\t\t        \t\t\t\t\t\terrorMsg=\"Please inform your Business\">\n\t\t\t        \t\t\t\t\t</app-field-error-display>\n\t\t        \t\t\t\t</div>\n\t\t        \t\t\t</div>\n\t\t        \t\t\t<div class=\"form-group has-feedback\" [ngClass]=\"displayFieldCss('services')\">\n\t\t        \t\t\t\t<div class=\"col-sm-12 wow fadeInUp\" data-wow-delay=\"0.7s\">\n\t\t\t        \t\t\t\t<label for=\"services\" class=\"select_style\">\n\t\t\t        \t\t\t\t\t<span class=\"form-control mob_control set\">Type of services</span>\n\t\t\t\t        \t\t\t\t<select id=\"services\" formControlName=\"services\" class=\"form-control mob_control action_change_select\" >\n\t\t\t\t        \t\t\t\t\t<option value=\"\">Type of services</option>\n\t\t\t\t        \t\t\t\t\t<option value=\"Hair Stylist\">Hair</option>\n\t\t\t\t        \t\t\t\t\t<option value=\"Barbers\">Barber</option>\n\t\t\t\t        \t\t\t\t\t<option value=\"Massage Therapist\">Massage</option>\n\t\t\t\t        \t\t\t\t\t<option value=\"Spa Services\">Spa</option>\n\t\t\t\t        \t\t\t\t</select>\n\n\t\t\t\t        \t\t\t\t<app-field-error-display \n\t\t\t        \t\t\t\t\t\t[displayError]=\"isFieldValid('services')\" \n\t\t\t        \t\t\t\t\t\terrorMsg=\"Please inform your Type Services\">\n\t\t\t        \t\t\t\t\t</app-field-error-display>\n\n\t\t\t        \t\t\t\t</label>\n\t\t        \t\t\t\t</div>\n\t\t        \t\t\t</div>\n\t\t        \t\t\t<div class=\"form-group has-feedback\" [ngClass]=\"displayFieldCss('street')\">\n\t\t        \t\t\t\t<div class=\"col-sm-12 wow fadeInUp\" data-wow-delay=\"0.8s\">\n\t\t        \t\t\t\t\t<input type=\"text\" formControlName=\"street\" id=\"street\" placeholder=\"Street\" class=\"form-control mob_control\" />\n\t\t        \t\t\t\t\t<app-field-error-display \n\t\t        \t\t\t\t\t\t[displayError]=\"isFieldValid('street')\" \n\t\t        \t\t\t\t\t\terrorMsg=\"Please inform your Street\">\n\t\t        \t\t\t\t\t</app-field-error-display>\n\t\t        \t\t\t\t</div>\n\t\t        \t\t\t</div>\n\t\t        \t\t\t<div class=\"form-group has-feedback\">\n\t\t        \t\t\t\t<div class=\"col-sm-6 form-group has-feedback wow fadeInUp\" data-wow-delay=\"0.9s\" [ngClass]=\"displayFieldCss('code')\">\n\t\t        \t\t\t\t\t<input type=\"text\" formControlName=\"code\" id=\"code\" placeholder=\"Post code\" class=\"numeric form-control mob_control\" />\t\n\t\t        \t\t\t\t\t<app-field-error-display \n\t\t        \t\t\t\t\t\t[displayError]=\"isFieldValid('code')\" \n\t\t        \t\t\t\t\t\terrorMsg=\"Please inform your Zip Code\">\n\t\t        \t\t\t\t\t</app-field-error-display>\n\t\t        \t\t\t\t</div>\n\t\t        \t\t\t\t<div class=\"col-sm-6 form-group has-feedback wow fadeInUp\" data-wow-delay=\"1.0s\" [ngClass]=\"displayFieldCss('city')\">\n\t\t        \t\t\t\t\t<input type=\"text\" formControlName=\"city\" id=\"city\" placeholder=\"City\" class=\"form-control mob_control\" />\t\n\t\t        \t\t\t\t\t<app-field-error-display \n\t\t        \t\t\t\t\t\t[displayError]=\"isFieldValid('city')\" \n\t\t        \t\t\t\t\t\terrorMsg=\"Please inform your City\">\n\t\t        \t\t\t\t\t</app-field-error-display>\n\t\t        \t\t\t\t</div>\n\t\t        \t\t\t</div>\n\t\t        \t\t</div>\n\t\t        \t</div>\n\t\t        \t<div class=\"col-sm-6\">\n\t\t        \t\t<div class=\"row m0\"><b class=\"mb35 text_5 blc wow fadeInUp\" data-wow-delay=\"1.1s\">About you</b></div>\n\t\t        \t\t<div class=\"row layout-form mb20\">\n\t\t        \t\t\t<div class=\"form-group has-feedback\" [ngClass]=\"displayFieldCss('firstname')\">\n\t\t        \t\t\t\t<div class=\"col-sm-12 wow fadeInUp\" data-wow-delay=\"1.2s\">\n\t\t        \t\t\t\t\t<input type=\"text\" formControlName=\"firstname\" id=\"firstname\" placeholder=\"First Name\" class=\"form-control mob_control\" />\n\t\t        \t\t\t\t\t<app-field-error-display \n\t\t        \t\t\t\t\t\t[displayError]=\"isFieldValid('firstname')\" \n\t\t        \t\t\t\t\t\terrorMsg=\"Please inform your First Name\">\n\t\t        \t\t\t\t\t</app-field-error-display>\n\t\t        \t\t\t\t</div>\n\t\t        \t\t\t</div>\n\t\t        \t\t\t<div class=\"form-group has-feedback\" [ngClass]=\"displayFieldCss('lastname')\">\n\t\t        \t\t\t\t<div class=\"col-sm-12 wow fadeInUp\" data-wow-delay=\"1.3s\">\n\t\t        \t\t\t\t\t<input type=\"text\" formControlName=\"lastname\" id=\"lastname\" placeholder=\"Last Name\" class=\"form-control mob_control\" />\n\t\t        \t\t\t\t\t<app-field-error-display \n\t\t        \t\t\t\t\t\t[displayError]=\"isFieldValid('lastname')\" \n\t\t        \t\t\t\t\t\terrorMsg=\"Please inform your Last Name\">\n\t\t        \t\t\t\t\t</app-field-error-display>\n\t\t        \t\t\t\t</div>\n\t\t        \t\t\t</div>\n\t\t        \t\t\t<div class=\"form-group has-feedback\" [ngClass]=\"displayFieldCss('email')\">\n\t\t        \t\t\t\t<div class=\"col-sm-12 wow fadeInUp\" data-wow-delay=\"1.4s\">\n\t\t        \t\t\t\t\t<input type=\"text\" formControlName=\"email\" id=\"email\" placeholder=\"Email address\" class=\"form-control mob_control\" />\n\t\t        \t\t\t\t\t<app-field-error-display \n\t\t        \t\t\t\t\t\t[displayError]=\"isFieldValid('email')\" \n\t\t        \t\t\t\t\t\terrorMsg=\"Please inform your Email. Please inform your a valid email.\">\n\t\t        \t\t\t\t\t</app-field-error-display>\n\t\t        \t\t\t\t</div>\n\t\t        \t\t\t</div>\n\t\t        \t\t\t<div class=\"form-group has-feedback\" [ngClass]=\"displayFieldCss('contactnumber')\">\n\t\t        \t\t\t\t<div class=\"col-sm-12 wow fadeInUp\" data-wow-delay=\"1.5s\">\n\t\t        \t\t\t\t\t<input type=\"text\" formControlName=\"contactnumber\" id=\"contactnumber\" placeholder=\"Contact number\" class=\"numeric form-control mob_control\" />\n\t\t        \t\t\t\t\t<app-field-error-display \n\t\t        \t\t\t\t\t\t[displayError]=\"isFieldValid('contactnumber')\" \n\t\t        \t\t\t\t\t\terrorMsg=\"Please inform your Phone\">\n\t\t        \t\t\t\t\t</app-field-error-display>\n\t\t        \t\t\t\t</div>\n\t\t        \t\t\t</div>\n\t\t        \t\t</div>\n\t\t        \t</div>\n\t\t        \t<div class=\"row\">\n\t\t\t\t\t\t<div class=\"col-sm-12 text-center wow fadeInUp\" data-wow-delay=\"1.6s\">\n\t\t\t\t\t\t\t<input type=\"hidden\" name=\"send_submit_professional\" id=\"send_submit_professional\" value=\"1\">\n\t\t\t\t\t\t\t<button (click)=\"onSubmit()\" id=\"submit_professionals\" class=\"btn theme_btn tinitial size-big-2 btn-submit\"><b>Join our Beta</b></button>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"set-response mt30\"></div>\n\t\t        </form>\n\t        </div>\n\t    </div>\n\t</section>\n\t\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/pages/join-our-team/join-our-team.component.html":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/pages/join-our-team/join-our-team.component.html ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"wow fadeIn\" data-wow-duration=\"2000\" >\n\t<section class=\"top-section-2\">\n\t    <div class=\"no-overlay\" style=\"background-image:url(assets/images/join-our-team-salon-home.jpg);background-position: center bottom;height: 323px;\" role=\"img\" aria-label=\"Salon Home - Join our team\">\n\t    </div>\n\t</section>\n\n\t<section class=\"section-mod\">\n\t\t<div class=\"container\">\n\t\t\t<div class=\"row\">\n\t\t\t\t<div class=\"col-md-12\">\n\t\t\t\t\t<div class=\"col-sm-12 col-md-10 col-md-offset-1 text-center wow fadeInUp\" data-wow-delay=\"0.4s\">\n\t\t\t\t\t\t<p>\n\t\t\t\t\t\tBeing a leader means aiming high and executing better than anyone else. To do this we need more brilliantly-talented SalonHomers who share our mission to shift an industry online.\n\t\t\t\t\t\t</p>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\n\t\t\t<div class=\"row mt30\">\n\t\t\t\t<div class=\"row text-center list-blocks\">\n\t\t\t\t\t<div class=\"col-md-4 col-sm-4 col-xs-12 single-block wow fadeInUp\" data-wow-delay=\"0.4s\">\n\t\t\t\t\t\t<img class=\"img img-responsive m_auto\" src=\"assets/images/we-work-hard.png\" alt=\"\" />\n\t\t\t\t\t\t<div class=\"team-desc\">\n\t\t\t\t\t\t\t<h4 class=\"mt10 mb10 theme_color\">We work hard</h4>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<p>\n\t\t\t\t\t\t\tHere at SalonHome, our team works hard to keep your business running at its full potential.\n\t\t\t\t\t\t</p>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"col-md-4 col-sm-4 col-xs-12 single-block wow fadeInUp\" data-wow-delay=\"0.6s\">\n\t\t\t\t\t\t<img class=\"img img-responsive m_auto\" src=\"assets/images/we-are-one.png\" alt=\"\" />\n\t\t\t\t\t\t<div class=\"team-desc\">\n\t\t\t\t\t\t\t<h4 class=\"mt10 mb10 theme_color\">We are One</h4>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<p>\n\t\t\t\t\t\t\tOur team operates in 50 cities across the USA. That makes us a family of amazing SalonHomers, made up of tons of different nationalities and countless personalities. Diversity is our strength.\n\t\t\t\t\t\t</p>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"col-md-4 col-sm-4 col-xs-12 single-block wow fadeInUp\" data-wow-delay=\"0.8s\">\n\t\t\t\t\t\t<img class=\"img img-responsive m_auto\" src=\"assets/images/we-are-treatworthy.png\" alt=\"\" />\n\t\t\t\t\t\t<div class=\"team-desc\">\n\t\t\t\t\t\t\t<h4 class=\"mt10 mb10 theme_color\">We are Worthy</h4>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<p>\n\t\t\t\t\t\t\tOur goal is 'work hard to earn trust'. We offer flexible services 24/7, with regular social events and lots of magical moments - that’s what makes us glow.\n\t\t\t\t\t\t</p>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</section>\n\n\t<section class=\"section-mod bg-primary pt40 pb60\">\n\t\t<div class=\"container\">\n\t\t\t<div class=\"row text-center mb20\">\n\t\t\t\t<div class=\"col-md-12\">\n\t\t\t\t\t<div class=\"title text-center\">\n\t\t\t\t\t\t<h2 class=\"c_white\"><b>Our offices in Atlanta</b></h2>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class=\"row text-center\">\n\t\t\t\t<div class=\"col-md-12\">\n\t\t\t\t\t<div class=\"title text-center\">\n\t\t\t\t\t\t<a [routerLink]=\"['/careers']\" class=\"c_white outline_White big\">View Positions Opened</a>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</section>\n\n\t<section class=\"section-mod\">\n\t\t<div class=\"container\">\n\t\t\t<div class=\"row\">\n\t\t\t\t<div class=\"title mb50 wow fadeInUp text-center\" data-wow-delay=\"0.2s\">\n\t\t\t\t\t<h2 class=\"theme_color\"><b>Our values</b></h2>\n\t\t\t\t\t<p>Each one of us is empowered to take decisive actions every day. How? By being free to rise to our responsibilities, take ownership and get things done. Our unique culture is guided by a shared set of values. Values that define our actions, our brand and give us that extra-special glow.</p>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"row text-center list-blocks\">\n\t\t\t\t\t<div class=\"col-md-4 col-sm-4 col-xs-12 single-block wow fadeInUp\" data-wow-delay=\"0.4s\">\n\t\t\t\t\t\t<img class=\"img img-responsive m_auto\" src=\"assets/images/icons/icon-29.png\" alt=\"\" />\n\t\t\t\t\t\t<div class=\"team-desc\">\n\t\t\t\t\t\t\t<h4 class=\"mt10 mb10\">Be courageous</h4>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<p>\n\t\t\t\t\t\t\tPioneer a better way. Yes, you’re in charge, so step up, take ownership and prioritise. Be a smart-risk taker and don’t be afraid to question or do things differently. Make tough decisions and stand up for them. And if you make a mistake? Don’t bury your head in the sand. Own it. Blush a bit. Learn from it.\n\t\t\t\t\t\t</p>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"col-md-4 col-sm-4 col-xs-12 single-block wow fadeInUp\" data-wow-delay=\"0.6s\">\n\t\t\t\t\t\t<img class=\"img img-responsive m_auto\" src=\"assets/images/icons/icon-30.png\" alt=\"\" />\n\t\t\t\t\t\t<div class=\"team-desc\">\n\t\t\t\t\t\t\t<h4 class=\"mt10 mb10\">Be open</h4>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<p>\n\t\t\t\t\t\t\tKeep asking 'why?' Transparency is how we cultivate trust. Be straightforward, and honest. Be open and forever curious about new ideas - even if they’re not your own. Listen and be adaptable, opposing views are an opportunity to spark ideas, and we know that great stuff happens in happy, non-judgemental environments.\n\t\t\t\t\t\t</p>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"col-md-4 col-sm-4 col-xs-12 single-block wow fadeInUp\" data-wow-delay=\"0.8s\">\n\t\t\t\t\t\t<img class=\"img img-responsive m_auto\" src=\"assets/images/icons/icon-31.png\" alt=\"\" />\n\t\t\t\t\t\t<div class=\"team-desc\">\n\t\t\t\t\t\t\t<h4 class=\"mt10 mb10\">Be driven</h4>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<p>\n\t\t\t\t\t\t\tWe're here to win. We have our big idea and that’s what we’re building. Our goal is to craft the hell out of everything we do - constant, meticulous improvements. We view obstacles as challenges to overcome. We don’t bask in our successes, or get too comfortable, because we are never done. So if complacency calls, hang up.\n\t\t\t\t\t\t</p>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</section>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/pages/magazine/magazine-post.component.html":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/pages/magazine/magazine-post.component.html ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"wow\" >\n\t\n\t<div *ngIf=\"!magazine_post\">\n\t\t<p>Loading post...</p>\n\t</div>\n\t\t\n\t<article *ngFor=\"let post of magazine_post\">\n\n\t\t<section class=\"top-section-2\" *ngIf=\"post.better_featured_image.source_url\">\n\t\t\t<div class=\"container center\">\n\t\t\t\t<img src=\"{{post.better_featured_image.source_url}}\" alt=\"{{post.title.rendered}}\" class=\"img img-responsive m_auto\" style=\"max-height: 400px;\"/>\n\t\t\t</div>\n\t\t</section>\n\n\t\t<section id=\"post-{{post.id}}\" class=\"section-mod mt20 pt20\">\n\t\t\t<div class=\"container\">\n\t\t\t\t<div class=\"row\">\n\t\t\t\t\t<div class=\"col-md-8\">\n\t\t\t\t\t\t<div class=\"title mb20 wow fadeInUp\" data-wow-delay=\"0.2s\">\n\t\t\t\t\t\t\t<h1 class=\"entry-title mt0\">{{post.title.rendered}}</h1>\n\t\t\t\t\t\t\t<time class=\"date entry-meta mb10\"><i class=\"fa fa-clock-o\" aria-hidden=\"true\"></i> {{post.date_gmt | date: 'longDate'}}</time>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"wow fadeInUp\" data-wow-delay=\"0.6s\" [innerHTML]=\"post.content.rendered\"></div>\n\t\t\t\t\t\t\n\t\t\t\t\t\t<hr class=\"mt80 mb80\" />\n\n\t\t\t\t\t\t<div class=\"\">\n\t\t\t\t\t\t\t\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"col-md-4\">\n\t\t\t\t\t\t<app-magazine-recent></app-magazine-recent>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</section>\n\n\t</article>\n\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/pages/magazine/magazine-recent.component.html":
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/pages/magazine/magazine-recent.component.html ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <section class=\"search_bar mb40 wow fadeInUp\"  data-wow-delay=\"0.2s\">\n\t<h4 class=\"type2-title mt10 mb30\">News and Publications</h4>\n\t<div class=\"search-form\">\n\t\t<input type=\"search\" \n\t\t\t(keyup.enter)=\"searchPost(search_post.value)\" \n\t\t\t#search_post \n\t\t\tid=\"search-post\" class=\"search-field\" placeholder=\"Search …\" value=\"\" name=\"s\">\n\t\t<a href=\"javascript:;\" class=\"search-submit\" (click)=\"searchPost(search_post.value)\">\n\t\t\t<i class=\"fa fa-search\" aria-hidden=\"true\"></i>\n\t\t</a>\n\t</div>\n</section> -->\n\n<section class=\"recent_post mb40 wow\">\n\t<h4 class=\"type2-title mb30\">Recent Post</h4>\n\t<div *ngFor=\"let post of magazine_posts | slice:0:5;\">\n\t\t<article id=\"post-recent-{{post.id}}\" class=\"article-recent\">\n\t\t\t<img width=\"65\" height=\"65\" class=\"img-post\" src=\"{{post.better_featured_image.media_details.sizes.thumbnail.source_url}}\" alt=\"{{post.title.rendered}}\"/>\n\t\t\t<h5 class=\"entry-title-min post-title color-inherit ease mt20 mb20\"><a [routerLink]=\"['/magazine', post.slug]\">{{post.title.rendered | slice:0:68}}</a></h5>\n\t\t\t<div class=\"excerpt-post mb20\" [innerHTML]=\"post.excerpt.rendered | slice:0:60\"></div>\n\t\t</article>\n\t</div>\n</section>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/pages/magazine/magazine.component.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/pages/magazine/magazine.component.html ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"wow\" >\n\t<div class=\"top-section magazine-page\">\n\t\t<div class=\"container\">\n\n\t\t\t<section class=\"row\">\n\t\t\t\t<div class=\"col-md-12\">\n\t\t\t\t\t<div class=\"title mb60 wow\">\n\t\t\t\t\t\t<h2 class=\"text-center\"><b class=\"theme_color\">MAGAZINE</b></h2>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</section>\n\t\t\t<div class=\"row\">\n\t\t\t\t<div *ngFor=\"let post of magazine_posts\">\t\n\t\t\t\t\t\t<div class=\"col-sm-6\">\n\t\t\t\t\t\t\t<ul id=\"rig\">\n\t\t\t\t\t\t\t\t\t<article id=\"post-{{post.id}}\">\n\t\t\t\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t\t\t\t<a class=\"rig-cell\" [routerLink]=\"['/magazine', post.slug]\">\n\t\t\t\t\t\t\t\t\t\t\t<div><img class=\"rig-img\" src=\"{{post.better_featured_image.source_url}}\" alt=\"{{post.title.rendered}}\"/></div>\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t\t<a [routerLink]=\"['/magazine', post.slug]\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"rig-title-post\">\n\t\t\t\t\t\t\t\t\t\t\t\t<p class=\"text-date-post\"><i class=\"fa fa-clock-o\" aria-hidden=\"true\"></i> {{post.date_gmt | date: 'longDate'}}</p>\n\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"rig-text\">{{post.title.rendered}}</span>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t</article>\n\t\t\t\t\t\t\t\t</ul>\t\n\t\t\t\t\t\t\t</div>\t\n\t\t\t\t\t<span *ngIf=\"!magazine_posts\">Loading list...</span>\n\t\t\t\t\t\t</div>\n\t\t</div>\n\t</div>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/pages/privacy-policy/privacy-policy.component.html":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/pages/privacy-policy/privacy-policy.component.html ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"wow fadeIn\" data-wow-duration=\"2000\" >\n\t<section class=\"top-section\">\n\t\t<div class=\"container\">\n\t\t\t<div class=\"row\">\n\t\t\t\t<div class=\"title\">\n\t\t\t\t\t<h2 class=\"text-center\"><b class=\"theme_color\">Privacy Policy</b></h2>\n\t\t\t\t\t<div class=\"col-sm-12 col-md-8 col-md-offset-2 text-center mb40\">\n\t\t\t\t\t\t<p class=\"mb0\">SalonHome Privacy Policy Last updated: January 1, 2020.</p>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class=\"row mb40\">\n\t\t\t\t<div class=\"col-md-12 col-sm-12 text-justify\">\n\t\t\t\t\t\n\t\t\t\t\t<p class=\"mb30\">\n\t\t\t\t\tThis Privacy Policy is effective immediately for Users registering accounts.\n\t\t\t\t\t</p>\n\t\t\t\t\t<p class=\"mb30\">\n\t\t\t\t\tThis Privacy Policy describes Our policies on the collection, use, and disclosure of information about You in connection with Your use of Our services, including those offered through Our websites, emails, and mobile applications (collectively, the \"Service\"). This Privacy Policy does not apply to any third party sites that may be linked to the Service, or any relationships that You may have with the businesses, individuals or entities listed or advertised on the Service.\n\t\t\t\t\t</p>\n\t\t\t\t\t<p class=\"mb30\">\n\t\t\t\t\t\"User\" is someone who accesses, browses, crawls, scrapes or in any way uses the Service. The terms “We”, “Our” and “Us” refer exclusively to SalonHome, a Delaware corporation. The terms “You”, “Your” and “Yourself” refer exclusively to You, as a User of the Service. The term “Personal Information” means information that You provide to Us, which personally identifies You as an individual to be contacted or identified, such as Your name, telephone number, e-mailaddress and any other data that is tied to such information.\n\t\t\t\t\t</p>\n\t\t\t\t\t<p class=\"mb30\">\n\t\t\t\t\tBY USING THE SERVICE, YOU AGREE TO BE BOUND BY THE TERMS OF THIS PRIVACY POLICY. IF YOU DO NOT AGREE WITH THESE TERMS, PLEASE DO NOT USE THE SERVICE. YOU AGREE FURTHER TO BE BOUND BY ANY AND ALL ADDITIONAL POLICIES ADOPTED BY SALONHOME CONCERNING THE SERVICE INCLUDING, BUT NOT LIMITED TO THE USER AGREEMENT.\n\t\t\t\t\t</p>\n\t\t\t\t\t<p class=\"mb30\">\n\t\t\t\t\t<span><b>1. INFORMATION USE.</b></span>\n\t\t\t\t\t</p>\n\t\t\t\t\t<p class=\"mb30\">\n\t\t\t\t\tWe may collect and store information about You when You use the Service. We use the information to fulfill Your requests, improve the Service’s quality, provide the Service’s functionality, personalize Your experience, track usage of the Service, provide feedback to third-party businesses listed on the Service, display relevant advertising, market the Service, provide customer support, message You, back up Our systems to allow for disaster recovery, enhance the security of the Service, and comply with legal obligations.Among the information We collect, please note:\n\t\t\t\t\t</p>\n\t\t\t\t\t<p class=\"mb30\">\n\t\t\t\t\t(a) Account information: If You create an account with Us in order to take advantage of the full range of the Service offered by SalonHome, We may ask for and record Personal Information such as Your name, address, e-mail address, phone number(s) and other information You may provide with Your account, such as Your gender and birth date. Your name, as well as any photoYou submit through the registration process, will be publicly displayed as part of Your account profile. We may use Your e-mail address or phone number(s) to send You updates and news, and contact You on behalf of other users of the Service (such as other users who send messages to You). You may choose to not receive communication of this type by accessing the “Account” tab on the Service and updating Your notification settings.\n\t\t\t\t\t</p>\n\t\t\t\t\t<p class=\"mb30\">\n\t\t\t\t\t(b) Submissions: We may store, use and publicly display Your submissions. When We display Your submissions, We do so together with Your account user name. The term “submissions” refers to the information that You submit or post to the Service for public display, such as ratings, reviews, photos, compliments and the information that You display as part of Your account profile. We may display Your submissions through the Service, share it with businesses, and further distribute it to a wider audience through third-party sites and services.\n\t\t\t\t\t</p>\n\t\t\t\t\t<p class=\"mb30\">\n\t\t\t\t\t(c) Contact: You can invite Your friends to join the Service by providing Us with their contact information, or by allowing Us to access Your contacts from Your computer, mobile device, or third-party sites to select which friends You want to invite. If You allow Us to access Your contacts, We may transmit that information to SalonHome long enough to process Your invitations.\n\t\t\t\t\t</p>\n\t\t\t\t\t<p class=\"mb30\">\n\t\t\t\t\t(d) Feedback: If You contact Us in order to provide feedback, register a complaint or ask a question, We may record additional Personal Information and other content that You provide in Your communication so that We can effectively respond to Your communication.\n\t\t\t\t\t</p>\n\t\t\t\t\t<p class=\"mb30\">\n\t\t\t\t\t(e) Personal messaging: In order to allow You to send and receive personal messages to other registered Users of the Service, We record the messages that You send and receive using the Service’s personal messaging feature. We also record messages sent directly to Us.\n\t\t\t\t\t</p>\n\t\t\t\t\t<p class=\"mb30\">\n\t\t\t\t\t(f) Transactional Information: If You initiate a transaction through the Service, such as a reservation, We may collect and store information about You, such as Your name, phone number, address, email, and credit card information, as well as any other information You provide to Us, in order to process Your transaction, send communications about them to You, and populate forms for future transactions. This information may be shared with third parties for the same purposes, such as the Professional and Business Account listed on SalonHome you are requesting a reservation. SalonHome does not disclose Your Personal Information to third parties for the purpose of directly marketing their services to You unless You first agree to such disclosure. When You submit credit card numbers, We encrypt that information using industry standard technology. If You write reviews about a professional or business with which You transact through the Service, We may publicly display the fact that You transacted with those professionals and/or businesses. such as, if You make a haircut reservation through the Serviceand write a review about Your experience, We may publicly display the fact that You made Your haircut reservation through the Service.\n\t\t\t\t\t</p>\n\t\t\t\t\t<p class=\"mb30\">\n\t\t\t\t\t(g) Communications: When You sign up for an Account or use certain features, You are opting to receive messages from SalonHome professionals and/or businesses and SalonHome itself. Youcan manage some of Your messaging preferences, but note that You cannot opt out of receivingcertain administrative, transactional, or legal messages from SalonHome. such as, if You make a reservation through the Service, We may send You messages about Your reservation using the contact information You provide, including SMS text messages to Your phone. We may also track Your actions in response to the messages You receive from SalonHome or through the Service, such as whether You deleted, opened, or forwarded such messages. If You exchange messages with others through the Service, We may store the messages in order to process anddeliver them, allow You to manage them, and We may review and disclose them in connection with investigations related to the operation and use of the Service. We may not deliver messages that We believe are objectionable, such as spam messages or requests to exchange reviews for compensation. If You send or receive messages through the Service via SMS text message, We may log phone numbers, phone carriers, and the date and time that the messages were processed. Carriers may charge recipients for texts that they receive. We may also store information that You provide through communications to Us, including information from phone calls, letters, emails and other electronic messages, or in person. If You are a representative of a business listed on SalonHome, including Users of SalonHome Business Accounts, We may contact You, including by phone or email, using the contact information You provide us, make publicly available, or that We have on record for Your business.\n\t\t\t\t\t</p>\n\t\t\t\t\t<p class=\"mb30\">\n\t\t\t\t\t(h) Activity: We record information relating to Your use of the Service, including, but not limited to, the pages You view, Your browser type, cookies (as defined below), history, browsing history, IP address, requested URL, referring URL and timestamp information. We use this type of information in order to administer the Service and provide the highest possible level of service toYou. We may also use this information, in the aggregate and at the individual user-level, to perform statistical analyses of user behavior and characteristics in order to measure interest in and use of the various areas of the Service. We may also use the above-referenced information to promote certain SalonHome or third-party products or services to You.\n\t\t\t\t\t</p>\n\t\t\t\t\t<p class=\"mb30\">\n\t\t\t\t\t(i) Reformatting: We may reformat images You upload to match format sizes predefined in Our Service such as Your profile image as displayed on Our Service.\n\t\t\t\t\t</p>\n\t\t\t\t\t<p class=\"mb30\">\n\t\t\t\t\t\t<span><b>2. COOKIES.</b></span>\n\t\t\t\t\t</p>\n\t\t\t\t\t<p class=\"mb30\">\n\t\t\t\t\tWe, and third parties with whom We partner, may use cookies, web beacons, tags, scripts, localshared objects such as HTML5 and Flash (sometimes called \"flash cookies\"), advertising identifiers (including mobile identifiers such as Apple’s IDFA or Google’s Advertising ID) and similar technology (\"Cookies\") in connection with Your use of the Service, third-party websites, and mobile applications. Cookies may have unique identifiers, and reside, among other places, on Your computer or mobile device, in emails We send to You, and on Our Service. Cookies may transmit information about You and Your use of the Service, such as Your browser type, search preferences, IP address, data relating to advertisements that have been displayed to You or that You have clicked on, and the date and time of Your use. Cookies may be persistent or stored only during an individual session.\n\t\t\t\t\t</p>\n\t\t\t\t\t<p class=\"mb30\">\n\t\t\t\t\tThe purposes for which We use Cookies in the Service include:\n\t\t\t\t\t</p>\n\t\t\t\t\t<p class=\"mb30\">\n\t\t\t\t\t\t<b>Purpose:</b> Explanation<br>\n\t\t\t\t\t\t<b>Processes:</b> Intended to make the Service work in the way You expect.<br>\n\t\t\t\t\t\tAuthentication, Security, and Compliance\tIntended to prevent fraud, protect Your data from unauthorized parties, and comply with legal requirements.<br>\n\t\t\t\t\t\t<b>Preferences:</b> Intended to remember information about how You prefer the Service to behave and look.<br>\n\t\t\t\t\t\t<b>Notifications:</b> Intended to allow or prevent notices of information or options that We think could improve Your use of the Service.<br>\n\t\t\t\t\t\t<b>Advertising:</b> Intended to make advertising more relevant to Users and more valuable to advertisers.<br>\n\t\t\t\t\t\t<b>Analytics:</b> Intended to help Us understand how visitors use the Service.\n\t\t\t\t\t</p>\n\t\t\t\t\t<p class=\"mb30\">\n\t\t\t\t\tEnforcement. We may use the information that We collect in connection with Your use of the Service (including Your Personal Information) in order to investigate, enforce and apply Our User Agreement and this Privacy Policy.\n\t\t\t\t\t</p>\n\t\t\t\t\t<p class=\"mb30\">\n\t\t\t\t\t\t<span><b>3. TRANSFER OF INFORMATION.</b></span>\n\t\t\t\t\t</p>\n\t\t\t\t\t<p class=\"mb30\">\n\t\t\t\t\tWe may distribute Your submissions to third parties, as permitted pursuant to Our User Agreement. Such third parties, with or without Our knowledge or consent, may, in turn, publicly display or publish Your submissions in connection with their own websites and media platforms. When We distribute Your submissions to third parties, We typically include Your account name, but not Your Personal Information, unless You include Your Personal Information in Your submissions.\n\t\t\t\t\t</p>\n\t\t\t\t\t<p class=\"mb30\">\n\t\t\t\t\tWe may rely on third-party providers to support or provide some of the services that are available through the Service, such as booking appointments and promotion purchases. We may also rely on third party providers to perform certain services for Us in connection with Your use of the Service, such as network security, communications and hosting services, payment processing, Our own marketing of the Service, and other functions. We may share information from or about You with these third-party providers so that they can perform their services or complete Your requests. These third-party providers may share information with Us that they obtain from or about You in connection with providing their services or completing Your requests. Third-party providers may also share this information with their subsidiaries, joint ventures, or other companies under common control. Some of Our web pages utilize framing techniques to serve content to You from Our third-party providers, while preserving the look and feel of the Service. In such cases, please note that the information You provide is being provided to the third party.\n\t\t\t\t\t</p>\n\t\t\t\t\t<p class=\"mb30\">\n\t\t\t\t\tWe may share information from or about You, Your devices, and Your use of the Service (such as which businesses You bookmark) with businesses listed on SalonHome. Keep in mind that businesses may see Your submissions (as defined in Section 1(b) above) and receive information about Your transactions with them, regardless of Your settings.\n\t\t\t\t\t</p>\n\t\t\t\t\t<p class=\"mb30\">\n\t\t\t\t\tWe may share Your Personal Information with subsidiaries, joint ventures or other companies under a common control (collectively, “Affiliates”) that We may have now or in the future. If another company acquires Our company or Our assets, that company will possess Your Personal Information, and will assume the rights and obligations with respect to that information as described in this Privacy Policy, or any successor policy.\n\t\t\t\t\t</p>\n\t\t\t\t\t<p class=\"mb30\">\n\t\t\t\t\tWe may disclose Your Personal Information to third parties in a good faith belief that such disclosure is reasonably necessary to (a) take action regarding suspected illegal activities; (b) enforce or apply Our User Agreement and this Privacy Policy; (c) comply with legal process and law enforcement instructions and orders, such as a search warrant, subpoena, statute, court order, or other legal process served on Us; or (d) protect Our rights, reputation and property, or that of Our Users, Affiliates or the public. Please note that We are not required to question or contest the validity of any search warrant, subpoena or other similar governmental request that We receive.\n\t\t\t\t\t</p>\n\t\t\t\t\t<p class=\"mb30\">\n\t\t\t\t\tWe may share User information in the aggregate with third parties, such as advertisers and content distributors. such as, We may disclose the number of Users that have been exposed to, or clicked on, certain advertisements.\n\t\t\t\t\t</p>\n\t\t\t\t\t<p class=\"mb30\">\n\t\t\t\t\tWe may use third party advertising companies in order to issue internet advertisements when You use our Service. These companies may use information (not including Your name, address, e-mail address or telephone number) about Your visits to our Service and other websites in order to provide targeted advertisements of goods and services of interest to You. We do not guarantee or make any representations that We will not transfer Your information to third parties. Additionally, You acknowledge, confirm and assent to such transfer to third parties.\n\t\t\t\t\t</p>\n\t\t\t\t\t<p class=\"mb30\">\n\t\t\t\t\tIf You sign up for SalonHome using Your Facebook, Instagram or Google account or link Your SalonHome account to Your account with a third-party service like Facebook, Instagram or Google, We may receive information about You from such third-party service. We may use this information to help You create Your account on SalonHome and connect and share public content with Your friends and followers. Please note that if You interact with Facebook, Instagram, Google or other third-party icons through the Service, including \"Like\", \"Share\", or similar buttons, those companies may collect information about You, such as Your device’s IP address. Your interactions with these and other third parties are governed by the third parties’ privacy policies.\n\t\t\t\t\t</p>\n\t\t\t\t\t<p class=\"mb30\">\n\t\t\t\t\t\t<span><b>4. OTHERS’ INFORMATION.</b></span>\n\t\t\t\t\t</p>\n\t\t\t\t\t<p class=\"mb30\">\n\t\t\t\t\tYou may choose to provide Us with another person’s e-mail address so that that person may be invited to create an account or book with a business on the Service. We use this information in order to contact and, if necessary, remind that person about the invitation. By providing Us with another person’s e-mail address, You represent to Us that You have obtained the consent of the person concerned with regard to such disclosure to Us of their Personal Information. All invitees are provided with the option not to receive further invitations. We may disclose such information if required to do so in order to comply with legal process, as described above.\n\t\t\t\t\t</p>\n\t\t\t\t\t<p class=\"mb30\">\n\t\t\t\t\t\t<span><b>5. LINKS.</b></span>\n\t\t\t\t\t</p>\n\t\t\t\t\t<p class=\"mb30\">\n\t\t\t\t\tThe Service may contain links to third-party websites to which We have no affiliation. We may share Your Personal Information with those third parties, and are not responsible for their privacy practices. We suggest that You read the privacy policies of all such third-party websites.\n\t\t\t\t\t</p>\n\t\t\t\t\t<p class=\"mb30\">\n\t\t\t\t\t\t<span><b>6. CONTROLLING YOUR PERSONAL DATA.</b></span>\n\t\t\t\t\t</p>\n\t\t\t\t\t<p class=\"mb30\">\n\t\t\t\t\tTo the extent that You include Personal Information in Your submissions (such as a photo of Yourself), third parties may be able to identify You, associate You with Your user account and/or contact You. Please do not include information in Your submissions that You expect to keep private. In addition, You can reduce the risk of being identified personally by choosing a fictitious account name, though doing so could detract from the credibility of Your submissions. As a registered SalonHome User, You can modify some of Your Personal Information and Your privacy preferences by accessing the “Account” section of the Service.\n\t\t\t\t\t</p>\n\t\t\t\t\t<p class=\"mb30\">\n\t\t\t\t\t\t<span><b>7. SECURITY.</b></span>\n\t\t\t\t\t</p>\n\t\t\t\t\t<p class=\"mb30\">\n\t\t\t\t\tYour account is password protected. We use industry standard measures to protect the Personal Information that is stored in Our database. We limit the access to Your Personal Information to those employees and contractors who need access to perform their job function. If You have any questions about the security of the Service, please contact Us. Although We take appropriate measures to safeguard against unauthorized disclosure of information, We cannot assure You, or otherwise guarantee, that Your Personal Information will never be disclosed in a manner that is inconsistent with this Privacy Policy. You hereby acknowledge and agree that SalonHome is not responsible for any intercepted information sent via the internet, and You hereby release SalonHome, its members, agents, employees, affiliates, successors and assigns from and against any and all claims arising out of or related to the use of intercepted information in any unauthorized manner.\n\t\t\t\t\t</p>\n\t\t\t\t\t<p class=\"mb30\">\n\t\t\t\t\t\t<span><b>8. E-MAILS AND OPT-OUT.</b></span>\n\t\t\t\t\t</p>\n\t\t\t\t\t<p class=\"mb30\">\n\t\t\t\t\tYou may opt-out of receiving notifications from Us by changing Your notification settings under the “Account” tab after You login to the Service. Unregistered users who receive e-mails from Us may also opt-out of receiving further e-mails by following the instructions contained in Our e-mails. Despite Your indicated e-mail preferences, We may send You notices of any updates to Our User Agreement or this Privacy Policy.\n\t\t\t\t\t</p>\n\t\t\t\t\t<p class=\"mb30\">\n\t\t\t\t\t\t<span><b>9. TERMS AND MODIFICATIONS TO THIS PRIVACY POLICY.</b></span>\n\t\t\t\t\t</p>\n\t\t\t\t\t<p class=\"mb30\">\n\t\t\t\t\tWe may modify this Privacy Policy at any time, in Our sole discretion and We will post any new versions on the Service. If We make any material changes in the way that We use Your Personal Information, We will notify You by sending an e-mail to the last e-mail address that You provided to Us and/or by posting notice of the changes on the Service. Any such changes will be effective upon the earlier of five (5) calendar days following Our dispatch of an e-mail notice to You or five (5) calendar days following Our posting of notice of the changes on Our website. These changes will be effective immediately for new users of the Service. Please note that at all times You are solely responsible for updating Your Personal Information and to provide Us with Your most current e-mail address. In the event that the last e-mail address that You have provided Us is not valid, or for any reason is not capable of receiving the notice described above, Our dispatch of the e-mail containing such notice will nonetheless constitute effective notice of the changes described in the notice. In any event, changes to this Privacy Policy may affect Our use of the Personal Information that You provided Us prior to Our notification to You of the changes. If You do not wish to permit changes in Our use of Your Personal Information, You must notify Us, prior to the effective date of the changes, that You wish to deactivate Your account with Us. Continued use of the Service following notice of such changes shall confirm Your acknowledgment of such changes and agreement to be bound by the terms and conditions of such changes.\n\t\t\t\t\t</p>\n\t\t\t\t\t<p class=\"mb30\">\n\t\t\t\t\t\t<span><b>10. DATA RETENTION AND ACCOUNT TERMINATION.</b></span>\n\t\t\t\t\t</p>\n\t\t\t\t\t<p class=\"mb30\">\n\t\t\t\t\tWe may remove Your submissions from view and/or dissociate them from Your account profile, furthermore We may retain information about You for the purposes authorized under this Privacy Policy unless prohibited by law. such as, We may retain information to prevent, investigate, or identify possible wrongdoing in connection with the Service or to comply with legal obligations.\n\t\t\t\t\t</p>\n\t\t\t\t\t<p class=\"mb30\">\n\t\t\t\t\t\t<span><b>11. CHILDREN.</b></span>\n\t\t\t\t\t</p>\n\t\t\t\t\t<p class=\"mb30\">\n\t\t\t\t\tThe Service is intended for audiences above 13 years old. The Service is not directed to children 13 and under. We do not knowingly collect Personal Information from children under 14. If You become aware that a child has provided Us with Personal Information without parental consent, please write to Us using Our Contact address, as described in section 13 below. If We become aware that a child under 14 has provided Us with Personal Information without parental consent, We will take steps to remove such information and terminate the child's account\n\t\t\t\t\t</p>\n\t\t\t\t\t<p class=\"mb30\">\n\t\t\t\t\t\t<span><b>12. CALIFORNIA RESIDENTS: YOUR CALIFORNIA PRIVACY RIGHTS.</b></span>\n\t\t\t\t\t</p>\n\t\t\t\t\t<p class=\"mb30\">\n\t\t\t\t\tSalonHome does not disclose Your Personal Information to third parties for the purpose of directly marketing their services to You unless You first agree to such disclosure. If You have any questions regarding this policy, or would like to change Your preferences, You may contact Us at the address listed below in Section 13.\n\t\t\t\t\t</p>\n\t\t\t\t\t<p class=\"mb30\">\n\t\t\t\t\t\t<span><b>13. CONTACT.</b></span>\n\t\t\t\t\t</p>\n\t\t\t\t\t<p class=\"mb30\">\n\t\t\t\t\tYou have any concerns relating to this Privacy Policy, You may correspond with Us at the following address:\n\t\t\t\t\t</p>\n\t\t\t\t\t<p class=\"mb30\">\n\t\t\t\t\tSalonHome, Inc<br>\n\t\t\t\t\tPrivacy Officer\t\t\t\t\t\t\n\t\t\t\t\t</p>\n\t\t\t\t\t<p class=\"mb30\">\n\t\t\t\t\tE-mail: customersupport@salonhome.com\t\t\t\t\n\t\t\t\t\t</p>\n\t\t\t\t\t<p class=\"mb30\">\n\t\t\t\t\tIn Your letter, please describe as much detail as possible ways in which You believe the Privacy Policy has not been complied with. We will investigate Your complaint promptly.\n\t\t\t\t\t</p>\n\n\n\n\n\n\t\t\t\t</div>\n\n\t\t\t</div>\n\t\t\t\n\t\t\t<div class=\"col-sm-12 col-md-8 col-md-offset-2 text-center mb40\"><hr class=\"hr_styles\" /></div>\n\n\t\t</div>\n\t</section>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/pages/search/search.component.html":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/pages/search/search.component.html ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"wow fadeIn\" data-wow-duration=\"2000\" >\n\t<div class=\"top-section\">\n\t\t<div class=\"container\">\n\n\t\t\t<section class=\"row\">\n\t\t\t\t<div class=\"col-md-12\">\n\t\t\t\t\t<div class=\"title mb60 wow fadeInUp\">\n\t\t\t\t\t\t<h2 class=\"text-center\"><b class=\"theme_color\">RESULT OF SEARCH</b></h2>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</section>\n\t\t\t<div class=\"row\">\n\t\t\t\t<div class=\"col-md-8\">\n\t\t\t\t\t<div *ngFor=\"let post of result_posts\">\n\t\t\t\t\t\t<div class=\"col-xs-12 col-md-12 col-sm-6 single-post-2 mb70 wow fadeInUp\" data-wow-delay=\"0.1s\" >\n\t\t\t\t\t\t\t<article id=\"post-{{post.id}}\" class=\"box\">\n\t\t\t\t\t\t\t\t<a [routerLink]=\"['/magazine', post.slug]\" class=\"slash-hover\"><img src=\"{{post.better_featured_image.source_url}}\" alt=\"{{post.title.rendered}}\" class=\"img-responsive ease photo\" /></a>\n\t\t\t\t\t\t\t\t<div class=\"description\">\n\t\t\t\t\t\t\t\t\t<h3 class=\"entry-title post-title color-inherit ease mt20 mb20\"><a [routerLink]=\"['/magazine', post.slug]\">{{post.title.rendered}}</a></h3>\n\t\t\t\t\t\t\t\t\t<time class=\"date entry-meta mb10\"><i class=\"fa fa-clock-o\" aria-hidden=\"true\"></i> {{post.date_gmt | date: 'longDate'}}</time>\n\t\t\t\t\t\t\t\t\t<div class=\"description-post mb20\" [innerHTML]=\"post.excerpt.rendered\">\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<a class=\"btn theme_btn style_outlined\" [routerLink]=\"['/magazine', post.slug]\">Read More</a>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</article>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<span *ngIf=\"!result_posts\">Loading list...</span>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"col-md-4\">\n\t\t\t\t\t<app-magazine-recent></app-magazine-recent>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/pages/services/services-availablespace.component.html":
/*!************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/pages/services/services-availablespace.component.html ***!
  \************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-services-nav></app-services-nav>\n\n<div class=\"wow fadeIn\" data-wow-duration=\"2000\" >\n\t<section class=\"banner-section available-spaces b-spaces\">\n\t    <div class=\"no-overlay\" style=\"background-image:url(assets/images/services-rental-salon-home.jpg);background-position: center bottom;height:460px;\" role=\"img\" aria-label=\"Salon Home - Services Available Spaces\">\n\t    \t<div class=\"container\">\n\t\t\t\t<div class=\"row mt90 banner-container\">\n\t\t    \t\t<div class=\"col-md-12 banner-title\">\n\t\t\t    \t\t<div class=\"title top-01\">\n\t\t\t\t\t\t\t<h2 class=\"text-center mb20 text_12 theme_color\">\n\t\t\t\t\t\t\t<img src=\"assets/images/icons/o-check.png\" class=\"wow fadeInDown\" data-wow-delay=\"0.2s\" />\n\t\t\t\t\t\t\t<b class=\"wow fadeInDown\" data-wow-delay=\"0.6s\">Available Spaces</b></h2>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"col-sm-12 text-center mb20\">\n\t\t\t\t\t\t\t<p class=\"text_10 mb0 wow fadeIn\" data-wow-duration=\"1300\" data-wow-delay=\"1.0s\"><b>You can book this service with SalonHome</b></p>\n\t\t\t\t\t\t\t<p class=\"text_7 wow fadeIn\" data-wow-duration=\"1300\" data-wow-delay=\"1.4s\">Join the Beta and find the best professionals in your area.</p>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"row wow fadeIn\" data-wow-duration=\"1300\" data-wow-delay=\"1.8s\">\n\t\t\t\t\t\t\t<div class=\"col-sm-12 text-center\">\n\t\t\t\t\t\t\t\t<a id=\"join-beta-5\" href=\"#try-it-free\" class=\"btn theme_btn size-big brd br0\">Get Started</a>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t    \t\t</div>\n\t\t    \t</div>\n\t\t\t</div>\n\t    </div>\n\t</section>\n\t<section class=\"section-mod s-space content-services\">\n\t\t<div class=\"container\">\n\t\t\t<div class=\"container-type2\">\n\t\t\t\t<div class=\"valign_middle row\">\n\t\t\t\t\t<div class=\"col-lg-5 col-sm-4 col-xs-12 text-center wow fadeInLeft f-img-post-top\" data-wow-duration=\"1300\" data-wow-delay=\"0.4s\">\n\t\t\t\t\t\t<div class=\"column-inner\">\n\t\t\t\t\t\t\t<img src=\"assets/images/services-spaces-salon.jpg\" class=\"img img-responsive m_auto img-services-auto\" alt=\"\"/>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"col-lg-7 col-sm-8 col-xs-12 wow fadeInRight s-text-post-top\" data-wow-duration=\"1300\" data-wow-delay=\"0.4s\">\n\t\t\t\t\t\t<div class=\"column-inner\">\n\t\t\t\t\t\t\t<div class=\"title wow fadeIn\" data-wow-delay=\"0.2s\">\n\t\t\t\t\t\t\t\t<h2 class=\"mb20\"><b>Rent A Salon, Spa, or Shared Beauty Space</b></h2>\n\t\t\t\t\t\t\t\t<p class=\"mb50\">Find thousands of business owners renting chairs & spaces.</p>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<p class=\"wow fadeIn\" data-wow-delay=\"0.4s\">\n\t\t\t\t\t\t\t\tNo matter what type of beauty business you own, SalonHome makes it a breeze to rent your space or available chairs to Trusted Professionals in your area.  You’re in control of your availability and who you choose to work with. Earning money as an owner is as easy as setting up your profile and listing your business on the SalonHome Mobile Application.\n\t\t\t\t\t\t\t</p>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</section>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/pages/services/services-barbers.component.html":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/pages/services/services-barbers.component.html ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-services-nav></app-services-nav>\n\n<div class=\"wow fadeIn\" data-wow-duration=\"2000\" >\n\t<section class=\"banner-section b-barbers\">\n\t    <div class=\"no-overlay\" style=\"background-image:url(assets/images/banner-barber.jpg);background-position: center bottom;height:460px;\" role=\"img\" aria-label=\"Salon Home - Services Massage\">\n\t    \t<div class=\"container\">\n\t\t\t\t<div class=\"row mt90 banner-container\">\n\t\t    \t\t<div class=\"col-md-9 col-md-offset-0 pr0 banner-title\">\n\t\t\t    \t\t<div class=\"title wow fadeInLeftBig\" data-wow-delay=\"0.2s\">\n\t\t\t\t\t\t\t<h2 class=\"text-center mb20 text_12 theme_color\"><b>Barbers</b></h2>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"col-sm-12 text-center mb20 black-res\">\n\t\t\t\t\t\t\t<p class=\"text_10 mb0 wow fadeIn\" data-wow-duration=\"1300\" data-wow-delay=\"1.0s\" style=\"color: #fff;\"><b>You can book this service with SalonHome</b></p>\n\t\t\t\t\t\t\t<p class=\"text_7 wow fadeIn\" data-wow-duration=\"1300\" data-wow-delay=\"1.4s\" style=\"color: #fff;\">Join the Beta and find the best professionals in your area.</p>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"row wow fadeIn\" data-wow-duration=\"1300\" data-wow-delay=\"1.8s\">\n\t\t\t\t\t\t\t<div class=\"col-sm-12 text-center\">\n\t\t\t\t\t\t\t\t<a id=\"join-beta-6\" [routerLink]=\"['/try-it-free']\" class=\"btn theme_btn size-big brd br0\">Get Started</a>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t    \t\t</div>\n\t\t    \t</div>\n\t\t\t</div>\n\t    </div>\n\t</section>\n\n\t<section class=\"section-mod s-massage content-services\">\n\t\t<div class=\"container\">\n\t\t\t<div class=\"container-type2\">\n\t\t\t\t<div class=\"valign_middle row\">\n\t\t\t\t\t<div class=\"col-lg-7 col-sm-8 col-xs-12 wow fadeInLeft s-text-post-top\" data-wow-duration=\"1300\" data-wow-delay=\"0.4s\">\n\t\t\t\t\t\t<div class=\"column-inner\">\n\t\t\t\t\t\t\t<p class=\"mb20\">\n\t\t\t\t\t\t\t\tBook any hair services you’d like with a professional<br /> of your choice. Invite a professional into your home<br /> for your appointment or a stylist can service you at<br /> their Salon.\n\t\t\t\t\t\t\t</p>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"col-lg-5 col-sm-4 col-xs-12 text-center wow fadeInRight f-img-post-top\" data-wow-duration=\"1300\" data-wow-delay=\"0.4s\">\n\t\t\t\t\t\t<div class=\"column-inner\">\n\t\t\t\t\t\t\t<img src=\"assets/images/app-capture-professionals.png\" class=\"img img-responsive m_auto img-services-auto\" alt=\"\"/>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</section>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/pages/services/services-body.component.html":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/pages/services/services-body.component.html ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-services-nav></app-services-nav>\n\n<div class=\"wow fadeIn\" data-wow-duration=\"2000\" >\n\t<section class=\"banner-section b-body\">\n\t    <div class=\"no-overlay\" style=\"background-image:url(assets/images/services-body-salon-home.jpg);background-position: center bottom;height:460px;\" role=\"img\" aria-label=\"Salon Home - Services Body Treatments\">\n\t    \t<div class=\"container\">\n\t\t\t\t<div class=\"row mt90 banner-container\">\n\t\t    \t\t<div class=\"col-md-9 col-md-offset-3 pr0 banner-title\">\n\t\t\t    \t\t<div class=\"title wow fadeInLeftBig\" data-wow-delay=\"0.2s\">\n\t\t\t\t\t\t\t<h2 class=\"text-center mb20 text_12 theme_color\"><b>Spa</b></h2>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"col-sm-12 text-center mb20\">\n\t\t\t\t\t\t\t<p class=\"text_10 mb0 wow fadeIn\" data-wow-duration=\"1300\" data-wow-delay=\"1.0s\"><b>You can book this service with SalonHome</b></p>\n\t\t\t\t\t\t\t<p class=\"text_7 wow fadeIn\" data-wow-duration=\"1300\" data-wow-delay=\"1.4s\">Join the Beta and find the best professionals in your area.</p>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"row wow fadeIn\" data-wow-duration=\"1300\" data-wow-delay=\"1.8s\">\n\t\t\t\t\t\t\t<div class=\"col-sm-12 text-center\">\n\t\t\t\t\t\t\t\t<a id=\"join-beta-7\" [routerLink]=\"['/try-it-free']\" class=\"btn theme_btn size-big brd br0\">Get Started</a>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t    \t\t</div>\n\t\t    \t</div>\n\t\t\t</div>\n\t    </div>\n\t</section>\n\n\t<section class=\"section-mod s-body content-services\">\n\t\t<div class=\"container\">\n\t\t\t<div class=\"container-type2\">\n\t\t\t\t<div class=\"valign_middle row\">\n\t\t\t\t\t<div class=\"col-lg-5 col-sm-4 col-xs-12 text-center wow fadeInLeft f-img-post-top\" data-wow-delay=\"0.4s\">\n\t\t\t\t\t\t<div class=\"column-inner\">\n\t\t\t\t\t\t\t<img src=\"assets/images/body-salon-home-services-Recuperado.png\" class=\"img img-responsive m_auto\" alt=\"\" />\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"col-lg-7 col-sm-8 col-xs-12 wow fadeInRight s-text-post-top\" data-wow-delay=\"0.4s\">\n\t\t\t\t\t\t<div class=\"column-inner\">\n\t\t\t\t\t\t\t<p>\n\t\t\t\t\t\t\t\tClean, Exfoliate, and Hydrate your skin with a body treatment by a SalonHome Spas. Our professionals rejuvenate your body and mind through luxury body treatments that will leave you feeling new.\n\t\t\t\t\t\t\t</p>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</section>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/pages/services/services-hair.component.html":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/pages/services/services-hair.component.html ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-services-nav></app-services-nav>\n\n<div class=\"wow fadeIn\" data-wow-duration=\"2000\" >\n\t<section class=\"banner-section b-hair\">\n\t    <div class=\"no-overlay\" style=\"background-image:url(assets/images/hair-salon-home-services.jpg);background-position: center bottom;height:460px;\" role=\"img\" aria-label=\"Salon Home - Services Hair\">\n\t    \t<div class=\"container\">\n\t\t\t\t<div class=\"row mt90 banner-container\">\n\t\t    \t\t<div class=\"col-md-9 col-md-offset-3 pr0 banner-title\">\n\t\t\t    \t\t<div class=\"title wow fadeInLeftBig\" data-wow-delay=\"0.2s\">\n\t\t\t\t\t\t\t<h2 class=\"text-center mb20 text_12 theme_color\"><b>Hair</b></h2>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"col-sm-12 text-center mb20\">\n\t\t\t\t\t\t\t<p class=\"text_10 mb0 wow fadeIn\" data-wow-duration=\"1300\" data-wow-delay=\"1.0s\"><b>You can book this service with SalonHome</b></p>\n\t\t\t\t\t\t\t<p class=\"text_7 wow fadeIn\" data-wow-duration=\"1300\" data-wow-delay=\"1.4s\">Join the Beta and find the best professionals in your area.</p>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"row wow fadeIn\" data-wow-duration=\"1300\" data-wow-delay=\"1.8s\">\n\t\t\t\t\t\t\t<div class=\"col-sm-12 text-center\">\n\t\t\t\t\t\t\t\t<a id=\"join-beta-8\" [routerLink]=\"['/try-it-free']\" class=\"btn theme_btn size-big brd br0\">Get Started</a>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t    \t\t</div>\n\t\t    \t</div>\n\t\t\t</div>\n\t    </div>\n\t</section>\n\n\t<section class=\"section-mod s-hair content-services\">\n\t\t<div class=\"container\">\n\t\t\t<div class=\"container-type2\">\n\t\t\t\t<div class=\"valign_middle row\">\n\t\t\t\t\t<div class=\"col-lg-5 col-sm-4 col-xs-12 text-center wow fadeInLeft f-img-post-top\" data-wow-duration=\"1300\" data-wow-delay=\"0.4s\">\n\t\t\t\t\t\t<div class=\"column-inner\">\n\t\t\t\t\t\t\t<img src=\"assets/images/services-hair-salon.jpg\" class=\"img img-responsive m_auto img-services-auto\" alt=\"\"/>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"col-lg-7 col-sm-8 col-xs-12 wow fadeInRight s-text-post-top\" data-wow-duration=\"1300\" data-wow-delay=\"0.4s\">\n\t\t\t\t\t\t<div class=\"column-inner\">\n\t\t\t\t\t\t\t<p>\n\t\t\t\t\t\t\t\tBook any hair services you’d like with a professional<br /> of your choice. Invite a professional into your home<br /> for your appointment or a stylist can service you at<br /> their Salon.\n\t\t\t\t\t\t\t</p>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</section>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/pages/services/services-makeup.component.html":
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/pages/services/services-makeup.component.html ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-services-nav></app-services-nav>\n\n<div class=\"wow fadeIn\" data-wow-duration=\"2000\" >\n\t<section class=\"banner-section b-hair\">\n\t    <div class=\"no-overlay\" style=\"background-image:url(assets/images/banner-services-makeup.jpg);background-position: center bottom;height:460px;\" role=\"img\" aria-label=\"Salon Home - Services Hair\">\n\t    \t<div class=\"container\">\n\t\t\t\t<div class=\"row mt90 banner-container\">\n\t\t    \t\t<div class=\"col-md-12 pr0 banner-title\">\n\t\t\t    \t\t<div class=\"title wow fadeInLeftBig\" data-wow-delay=\"0.2s\">\n\t\t\t\t\t\t\t<h2 class=\"text-center mb20 text_12 theme_color\"><b>Makeup</b></h2>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"col-sm-12 text-center mb20\">\n\t\t\t\t\t\t\t<p class=\"text_10 mb0 wow fadeIn text-White\" data-wow-duration=\"1300\" data-wow-delay=\"1.0s\"><b>You can book this service with SalonHome</b></p>\n\t\t\t\t\t\t\t<p class=\"text_7 wow fadeIn text-White\" data-wow-duration=\"1300\" data-wow-delay=\"1.4s\">Join the Beta and find the best professionals in your area.</p>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"row wow fadeIn\" data-wow-duration=\"1300\" data-wow-delay=\"1.8s\">\n\t\t\t\t\t\t\t<div class=\"col-sm-12 text-center\">\n\t\t\t\t\t\t\t\t<a id=\"join-beta-9\" [routerLink]=\"['/try-it-free']\" class=\"btn theme_btn size-big brd br0\">Get Started</a>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t    \t\t</div>\n\t\t    \t</div>\n\t\t\t</div>\n\t    </div>\n\t</section>\n\n\t<section class=\"section-mod s-hair content-services\">\n\t\t<div class=\"container\">\n\t\t\t<div class=\"container-type2\">\n\t\t\t\t<div class=\"valign_middle row\">\n\t\t\t\t\t<div class=\"col-lg-5 col-sm-4 col-xs-12 text-center wow fadeInLeft f-img-post-top\" data-wow-duration=\"1300\" data-wow-delay=\"0.4s\">\n\t\t\t\t\t\t<div class=\"column-inner\">\n\t\t\t\t\t\t\t<img src=\"assets/images/services-makeup-salon.jpg\" class=\"img img-responsive m_auto img-services-auto\" alt=\"\"/>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"col-lg-7 col-sm-8 col-xs-12 wow fadeInRight s-text-post-top\" data-wow-duration=\"1300\" data-wow-delay=\"0.4s\">\n\t\t\t\t\t\t<div class=\"column-inner\">\n\t\t\t\t\t\t\t<p>\n\t\t\t\t\t\t\t\tBook any makeup services you’d like with a professional<br /> of your choice. Invite a professional into your home<br /> for your appointment or a stylist can service you at<br /> their Salon.\n\t\t\t\t\t\t\t</p>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</section>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/pages/services/services-massage.component.html":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/pages/services/services-massage.component.html ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-services-nav></app-services-nav>\n\n<div class=\"wow fadeIn\" data-wow-duration=\"2000\" >\n\t<section class=\"banner-section b-massage\">\n\t    <div class=\"no-overlay\" style=\"background-image:url(assets/images/banner-services-massage.jpg);background-position: center bottom;height:460px;\" role=\"img\" aria-label=\"Salon Home - Services Massage\">\n\t    \t<div class=\"container\">\n\t\t\t\t<div class=\"row mt90 banner-container\">\n\t\t    \t\t<div class=\"col-md-12 pr0 banner-title\">\n\t\t\t    \t\t<div class=\"title wow fadeInLeftBig\" data-wow-delay=\"0.2s\">\n\t\t\t\t\t\t\t<h2 class=\"text-center mb20 text_12 theme_color\"><b>Massage</b></h2>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"col-sm-12 text-center mb20\">\n\t\t\t\t\t\t\t<p class=\"text_10 mb0 wow fadeIn text-White\" data-wow-duration=\"1300\" data-wow-delay=\"1.0s\"><b>You can book this service with SalonHome</b></p>\n\t\t\t\t\t\t\t<p class=\"text_7 wow fadeIn text-White\" data-wow-duration=\"1300\" data-wow-delay=\"1.4s\">Join the Beta and find the best professionals in your area.</p>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"row wow fadeIn\" data-wow-duration=\"1300\" data-wow-delay=\"1.8s\">\n\t\t\t\t\t\t\t<div class=\"col-sm-12 text-center\">\n\t\t\t\t\t\t\t\t<a id=\"join-beta-10\" [routerLink]=\"['/try-it-free']\" class=\"btn theme_btn size-big brd br0\">Get Started</a>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t    \t\t</div>\n\t\t    \t</div>\n\t\t\t</div>\n\t    </div>\n\t</section>\n\n\t<section class=\"section-mod s-massage content-services\">\n\t\t<div class=\"container\">\n\t\t\t<div class=\"container-type2\">\n\t\t\t\t<div class=\"valign_middle row\">\n\t\t\t\t\t<div class=\"col-lg-7 col-sm-8 col-xs-12 wow fadeInLeft s-text-post-top\" data-wow-duration=\"1300\" data-wow-delay=\"0.4s\">\n\t\t\t\t\t\t<div class=\"column-inner\">\n\t\t\t\t\t\t\t<p class=\"mb20\">\n\t\t\t\t\t\t\t\tExperience a massage session like never before with a SalonHome Professional Masseuse. Book using the SalonHome App and prepare to release stress, pain, and tension through our Luxury Massages. \n\t\t\t\t\t\t\t</p>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"col-lg-5 col-sm-4 col-xs-12 text-center wow fadeInRight f-img-post-top\" data-wow-duration=\"1300\" data-wow-delay=\"0.4s\">\n\t\t\t\t\t\t<div class=\"column-inner\">\n\t\t\t\t\t\t\t<img src=\"assets/images/services-massage-salon.jpg\" class=\"img img-responsive m_auto img-services-auto\" alt=\"\"/>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</section>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/pages/services/services-nail.component.html":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/pages/services/services-nail.component.html ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-services-nav></app-services-nav>\n\n<div class=\"wow fadeIn\" data-wow-duration=\"2000\" >\n\t<section class=\"banner-section b-hair\">\n\t    <div class=\"no-overlay\" style=\"background-image:url(assets/images/banner-services-nail.jpg);background-position: center bottom;height:460px;\" role=\"img\" aria-label=\"Salon Home - Services Hair\">\n\t    \t<div class=\"container\">\n\t\t\t\t<div class=\"row mt90 banner-container\">\n\t\t    \t\t<div class=\"col-md-12 pr0 banner-title\">\n\t\t\t    \t\t<div class=\"title wow fadeInLeftBig\" data-wow-delay=\"0.2s\">\n\t\t\t\t\t\t\t<h2 class=\"text-center mb20 text_12 theme_color\"><b>Nail</b></h2>\n\t\t\t\t\t\t</div> \n\t\t\t\t\t\t<div class=\"col-sm-12 text-center mb20\">\n\t\t\t\t\t\t\t<p class=\"text_10 mb0 wow fadeIn text-White\" data-wow-duration=\"1300\" data-wow-delay=\"1.0s\"><b>You can book this service with SalonHome</b></p>\n\t\t\t\t\t\t\t<p class=\"text_7 wow fadeIn text-White\" data-wow-duration=\"1300\" data-wow-delay=\"1.4s\">Join the Beta and find the best professionals in your area.</p>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"row wow fadeIn\" data-wow-duration=\"1300\" data-wow-delay=\"1.8s\">\n\t\t\t\t\t\t\t<div class=\"col-sm-12 text-center\">\n\t\t\t\t\t\t\t\t<a id=\"join-beta-11\" [routerLink]=\"['/try-it-free']\" class=\"btn theme_btn size-big brd br0\">Get Started</a>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t    \t\t</div>\n\t\t    \t</div>\n\t\t\t</div>\n\t    </div>\n\t</section>\n\n\t<section class=\"section-mod s-hair content-services\">\n\t\t<div class=\"container\">\n\t\t\t<div class=\"container-type2\">\n\t\t\t\t<div class=\"valign_middle row\">\n\t\t\t\t\t<div class=\"col-lg-5 col-sm-4 col-xs-12 text-center wow fadeInLeft f-img-post-top\" data-wow-duration=\"1300\" data-wow-delay=\"0.4s\">\n\t\t\t\t\t\t<div class=\"column-inner\">\n\t\t\t\t\t\t\t<img src=\"assets/images/services-nail-salon.jpg\" class=\"img img-responsive m_auto img-services-auto\" alt=\"\"/>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"col-lg-7 col-sm-8 col-xs-12 wow fadeInRight s-text-post-top\" data-wow-duration=\"1300\" data-wow-delay=\"0.4s\">\n\t\t\t\t\t\t<div class=\"column-inner\">\n\t\t\t\t\t\t\t<p>\n\t\t\t\t\t\t\t\tBook any nail services you’d like with a professional<br /> of your choice. Invite a professional into your home<br /> for your appointment or a stylist can service you at<br /> their Salon.\n\t\t\t\t\t\t\t</p>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</section>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/pages/services/services-skin.component.html":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/pages/services/services-skin.component.html ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-services-nav></app-services-nav>\n\n<div class=\"wow fadeIn\" data-wow-duration=\"2000\" >\n\t<section class=\"banner-section b-hair\">\n\t    <div class=\"no-overlay\" style=\"background-image:url(assets/images/banner-services-skin.jpg);background-position: center bottom;height:460px;\" role=\"img\" aria-label=\"Salon Home - Services Hair\">\n\t    \t<div class=\"container\">\n\t\t\t\t<div class=\"row mt90 banner-container\">\n\t\t    \t\t<div class=\"col-md-12 pr0 banner-title\">\n\t\t\t    \t\t<div class=\"title wow fadeInLeftBig\" data-wow-delay=\"0.2s\">\n\t\t\t\t\t\t\t<h2 class=\"text-center mb20 text_12 theme_color\"><b>Spa</b></h2>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"col-sm-12 text-center mb20\">\n\t\t\t\t\t\t\t<p class=\"text_10 mb0 wow fadeIn text-White\" data-wow-duration=\"1300\" data-wow-delay=\"1.0s\"><b>You can book this service with SalonHome</b></p>\n\t\t\t\t\t\t\t<p class=\"text_7 wow fadeIn text-White\" data-wow-duration=\"1300\" data-wow-delay=\"1.4s\">Join the Beta and find the best professionals in your area.</p>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"row wow fadeIn\" data-wow-duration=\"1300\" data-wow-delay=\"1.8s\">\n\t\t\t\t\t\t\t<div class=\"col-sm-12 text-center\">\n\t\t\t\t\t\t\t\t<a id=\"join-beta-12\" [routerLink]=\"['/try-it-free']\" class=\"btn theme_btn size-big brd br0\">Get Started</a>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t    \t\t</div>\n\t\t    \t</div>\n\t\t\t</div>\n\t    </div>\n\t</section>\n\n\t<section class=\"section-mod s-hair content-services\">\n\t\t<div class=\"container\">\n\t\t\t<div class=\"container-type2\">\n\t\t\t\t<div class=\"valign_middle row\">\n\t\t\t\t\t<div class=\"col-lg-5 col-sm-4 col-xs-12 text-center wow fadeInLeft f-img-post-top\" data-wow-duration=\"1300\" data-wow-delay=\"0.4s\">\n\t\t\t\t\t\t<div class=\"column-inner\">\n\t\t\t\t\t\t\t<img src=\"assets/images/services-skin-salon.jpg\" class=\"img img-responsive m_auto img-services-auto\" alt=\"\"/>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"col-lg-7 col-sm-8 col-xs-12 wow fadeInRight s-text-post-top\" data-wow-duration=\"1300\" data-wow-delay=\"0.4s\">\n\t\t\t\t\t\t<div class=\"column-inner\">\n\t\t\t\t\t\t\t<p>\n\t\t\t\t\t\t\t\tBook any Spa services you’d like with a professional<br /> of your choice. Invite a professional into your home<br /> for your appointment or a stylist can service you at<br /> their Salon.\n\t\t\t\t\t\t\t</p>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</section>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/pages/terms/terms.component.html":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/pages/terms/terms.component.html ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"wow fadeIn\" data-wow-duration=\"2000\" >\r\n\t<section class=\"top-section\">\r\n\t\t<div class=\"container\">\r\n\t\t\t<div class=\"row\">\r\n\t\t\t\t<div class=\"title\">\r\n\t\t\t\t\t<h2 class=\"text-center\"><b class=\"theme_color\">Terms & Conditions</b></h2>\r\n\t\t\t\t\t<div class=\"col-sm-12 col-md-8 col-md-offset-2 text-center mb40\">\r\n\t\t\t\t\t\t<p class=\"mb0\">SalonHome Terms of Use Last updated: January 1, 2020</p>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"row mb40\">\r\n\t\t\t\t<div class=\"col-md-12 col-sm-12 text-justify\">\r\n\t\t\t\t\t\r\n\t\t\t\t\t<p class=\"mb30\">\r\n\t\t\t\t\tThese terms and conditions are effective immediately for those registering accounts (as herein defined) after that date and will become effective as of January 1, 2020.\r\n\t\t\t\t\t</p>\r\n\t\t\t\t\t<p class=\"mb30\">\r\n\t\t\t\t\tThese terms and conditions (hereinafter referred to as “Terms”) of this User Agreement (as herein defined) govern Your access to and use of SalonHome’s links, website and mobile applications (collectively, the \"Site\"). By accessing, browsing, crawling, scraping or in any way using the Site, You agree to the Terms set forth in this User Agreement, the SalonHome Privacy Policy and all other guidelines or policies referenced herein (collectively, the \"User Agreement\").\r\n\t\t\t\t\t</p>\r\n\t\t\t\t\t<p class=\"mb30\">\r\n\t\t\t\t\tPLEASE READ THIS USER AGREEMENT CAREFULLY. YOUR USE OF THE SITE CONSTITUTES YOUR ACCEPTANCE OF THE TERMS OF THIS USER AGREEMENT. DO NOT USE THE SITE IF YOU ARE UNWILLING OR UNABLE TO BE BOUND BY THIS USER AGREEMENT.\r\n\t\t\t\t\t</p>\r\n\r\n\t\t\t\t\t<p class=\"mb30\">\r\n\t\t\t\t\tThe SalonHome Services - SalonHome is a platform that powers the services and businesses of beauty and other professionals (collectively or individually, the “Professionals”) and facilitates interaction with clients seeking such services and Professionals (collectively or individually, the “Clients”). Such Professionals and Clients are both users of the SalonHome Services and may be collectively or individually referred to herein as “Users”. \r\n\t\t\t\t\t</p>\r\n\r\n\t\t\t\t\t<p class=\"mb30\">\r\n\t\t\t\t\t\t<span><b>1.DEFINITIONS.</b></span>\r\n\t\t\t\t\t</p>\r\n\t\t\t\t\t<p class=\"mb30\">\r\n\t\t\t\t\t(a)\t\"User\" is someone who accesses, browses, crawls, scrapes or in any way uses the Site. The terms \"You\", \"Your\" and \"Yourself\" refer exclusively to You, as a User of the Site. The terms \"We\", \"Us\", \"Our\", and \"SalonHome\" refer exclusively to SalonHome, Inc., a Delaware corporation, with its headquarters at 3423 Piedmont RD NE, Atlanta, GA 30305. Each of “You”, “Your”, “Yourself” and “We”, “Us”, “Our” and “SalonHome”, is a “Party” and together the “Parties”.\r\n\t\t\t\t\t</p>\r\n\t\t\t\t\t<p class=\"mb30\">\r\n\t\t\t\t\t(b)\t\"Content\" means text, images, photos, audio, video and all other forms of data or communication.\"Your Content\" means Content that You access, submit or transmit to or through the Site, such as ratings, reviews, compliments, invitations and information that You display as part of Your account profile. \"User Content\" means Content that Users submit or transmit to or through the Site. \"SalonHome Content\" means Content that We create and make available on the Site. \"Third Party Content\" means Content that is made available on the Site by parties other than SalonHome or its Users, such as data providers who license data to SalonHome for use on the Site. \"Site Content\" means all of the Content that is made available on the Site, including Your Content, User Content, Third Party Content, and SalonHome Content.\r\n\t\t\t\t\t</p>\r\n\t\t\t\t\t<p class=\"mb30\">\r\n\t\t\t\t\t\t<span><b>2. ELIGIBILITY.</b></span>\r\n\t\t\t\t\t</p>\r\n\t\t\t\t\t<p class=\"mb30\">\r\n\t\t\t\t\tMinors. If You are a minor (under the age of 18), You can use this service only with the consent and under the supervision of Your parents or legal guardians. If You are a minor, do not submit any personal information to this website. SalonHome is not liable for damages arising from the unauthorized use of minors. IF YOU ARE 13 YEARS OR YOUNGER, PLEASE DO NOT USE THIS SITE OR ANY OF ITS SERVICES FOR ANY PURPOSE.\r\n\t\t\t\t\t</p>\r\n\t\t\t\t\t<p class=\"mb30\">\r\n\t\t\t\t\tYOU MUST BE AT LEAST 18 YEARS OF AGE TO CREATE OR USE AN ACCOUNT (as herein defined).\r\n\t\t\t\t\t</p>\r\n\t\t\t\t\t<p class=\"mb30\">\r\n\t\t\t\t\tYou must have the requisite power and authority to enter into this User Agreement in order to use this Site. If You are between the ages of 14 to 18 years old, You must have consent and be under the supervision of Your parents before creating or using a Personal Account. You may not access or use the Site if: (1) You believe You are a competitor of Ours, (2) We deem You as a competitor of Ours, or (3) We have previously banned You from the Site. If You use the Site on behalf of a company, entity or organization, You represent that You are an authorized representative of such company, entity or organization with the authority to bind it to the this User Agreement (which authority You hereby exercise). To the extent that You do not meet the eligibility requirements as set forth herein, SalonHome may, at its sole discretion, elect to terminate Your account.\r\n\t\t\t\t\t</p>\r\n\t\t\t\t\t<p class=\"mb30\">\r\n\t\t\t\t\t\t<span><b>3. CHANGES TO THE USER AGREEMENT.</b></span>\r\n\t\t\t\t\t</p>\r\n\t\t\t\t\t<p class=\"mb30\">\r\n\t\t\t\t\tWe may modify this User Agreement from time to time, such as, to reflect changes to the law or changes to the Site. You should look at the User Agreement regularly. We’ll post notice of modifications to the User Agreement on this page. When changes are made, We will notify You by making the revised version available on the Site and will indicate on the Site the date on which revisions were last made. Changes will not apply retroactively and will become effective no sooner than thirty days after they are posted for pre-existing accounts. However, changes addressing new functions for the Site or changes made for legal reasons will be effective immediately. If You do not agree to the modified terms for this User Agreement, You must discontinue Your use of the Site. You should revisit this User Agreement on a regular basis as revised versions will be binding on You. Your continued use of the Site after any posted modification to this User Agreement indicates Your assent to the modified and/or restated User Agreement.\r\n\t\t\t\t\t</p>\r\n\t\t\t\t\t<p class=\"mb30\">\r\n\t\t\t\t\t\t<span><b>4. USER ACCOUNTS.</b></span>\r\n\t\t\t\t\t</p>\r\n\t\t\t\t\t<p class=\"mb30\">\r\n\t\t\t\t\tTo use some of the features on the Site, You may be required to create an account and provide information about Yourself to Us. You are exclusively responsible for maintaining the confidentiality of Your account password. You are also exclusively responsible for all activities that occur in connection with Your account. You agree to notify Us immediately of any unauthorized use of Your account. We reserve the right to close Your account at any time for any or no reason. There are two types of accounts:\r\n\t\t\t\t\t</p>\r\n\t\t\t\t\t<p class=\"mb30\">\r\n\t\t\t\t\t(a)\t\"Client Account \" is an account for Your personal, non-commercial use only. In creating a Client Account, We ask that You provide complete and accurate information about Yourself to bolster Your credibility as a contributor to the Site. You may not impersonate or provide an email address other than Your own, or create multiple Client Accounts.\r\n\t\t\t\t\t</p>\r\n\t\t\t\t\t<p class=\"mb30\">\r\n\t\t\t\t\t(b)\t\"Professional Account” is an account to be used solely for the purpose of representing You or Your business on the Site. In creating or updating a Professional Account, You must be an authorized representative of the business in question, and You must provide complete and accurate information about Yourself and the business You represent. You may not provide an email address that is not Your own or create multiple Professional Accounts for the same business. Your Professional Account accepts these terms. It will hold harmless and indemnify Us from any claim, suit or action arising from or related to the use of the Site or violation of these terms, including any liability or expense arising from claims, losses, damages, suits, judgments, litigation costs and attorneys’ fees. Additional terms associated with a Professional Account are further set forth in this “SalonHome User Agreement”, which, additional terms, applicable to all Professional Accounts, are incorporated herein by reference.\r\n\t\t\t\t\t</p>\r\n\t\t\t\t\t<p class=\"mb30\">\r\n\t\t\t\t\t\t<span><b>5. USE OF THE SITE.</b></span>\r\n\t\t\t\t\t</p>\r\n\t\t\t\t\t<p class=\"mb30\">\r\n\t\t\t\t\tWe grant You permission to use the Site subject to the restrictions in this User Agreement. In using the Site, You may be exposed to Content that is offensive, indecent, untruthful, inaccurate, objectionable, defamatory or otherwise inappropriate. SalonHome does not endorse such Content and as part and parcel of this User Agreement, specifically precludes all Users from submitting or posting such to the Site. See below section 8. Responsibility for your content. \r\n\t\t\t\t\t</p>\r\n\t\t\t\t\t<p class=\"mb30\">\r\n\t\t\t\t\tUse of the Site is available on mobile devices. Do not use the Site in a way that distracts You and prevents You from obeying traffic or safety laws.\r\n\t\t\t\t\t</p>\r\n\t\t\t\t\t<p class=\"mb30\">\r\n\t\t\t\t\t\t<span><b>6. USER RESTRICTIONS.</b></span>\r\n\t\t\t\t\t</p>\r\n\t\t\t\t\t<p class=\"mb30\">\r\n\t\t\t\t\tWe are under no obligation to enforce the User Agreement on Your behalf against another User. While We encourage You to let Us know if You believe another User has violated the User Agreement, We reserve the right to investigate and take appropriate action at Our sole discretion.\r\n\t\t\t\t\t</p>\r\n\t\t\t\t\t<p class=\"mb30\">\r\n\t\t\t\t\t\t<span><b>7. PAYMENT PROCESSING SERVICES.</b></span>\r\n\t\t\t\t\t</p>\r\n\t\t\t\t\t<p class=\"mb30\">\r\n\t\t\t\t\tThis Service allows Clients to pay and Professionals to accept payments, including Card-based payments initiated with Cards bearing the trademarks of MasterCard International Inc. and Visa Inc. (collectively, the \"Networks\"). We are not a bank and we do not offer banking services as defined by the United States Department of Treasury.\r\n\t\t\t\t\t</p>\r\n\t\t\t\t\t<p class=\"mb30\">\r\n\t\t\t\t\tSalonHome facilitates the processing of payments Professionals receive from Clients. This means that we collect, analyze and relay information generated in connection with these payments.\r\n\t\t\t\t\t</p>\r\n\t\t\t\t\t<p class=\"mb30\">\r\n\t\t\t\t\t\t<span><b>a.\tAuthorization</b></span>\r\n\t\t\t\t\t</p>\r\n\t\t\t\t\t<p class=\"mb30\">\r\n\t\t\t\t\tProfessionals authorize us to hold, receive, and disburse funds on your behalf. Your authorization permits us to generate a paper draft or an electronic funds transfer to process each payment transaction that you authorize. Your authorizations will remain in full force and effect until your Account is closed or terminated.\r\n\t\t\t\t\t</p>\r\n\t\t\t\t\t<p class=\"mb30\">\r\n\t\t\t\t\t\t<span><b>b. Third Party Payment Service Provider</b></span>\r\n\t\t\t\t\t</p>\r\n\t\t\t\t\t<p class=\"mb30\">\r\n\t\t\t\t\tUsers will be required to provide their credit card or bank account details to the Company and the Payment Service Provider retained by SalonHome (the \"PSP\"). As a condition of SalonHome enabling payment processing services through the PSP, you agree to provide SalonHome accurate and complete information about you and your business, and you authorize SalonHome to share it and transaction information related to your use of the PSP services.\r\n\t\t\t\t\t</p>\r\n\t\t\t\t\t<p class=\"mb30\">\r\n\t\t\t\t\tProfessionals may be required to register with the PSP, agree to a PSP Account Agreement and the Terms of Service of the PSP and go through a vetting process at the request of the PSP to set up their account with the PSP. The PSP Account Agreement and Terms of Service between Professionals and the PSP retained by the Company are available at https://stripe.com/docs/connect/updating-accounts#tos-acceptance (collectively, the \"PSP Agreement\"), which may be modified by the PSP from time to time. By accepting these Terms of Use, each Professional agrees that they have downloaded or printed, and reviewed and agreed to the PSP Agreement. Please note that the Company is not a party to the PSP Agreement and that you, the PSP and any other parties listed in the PSP Agreement are the parties to the PSP Agreement and that the Company has no obligations or liability to any Professional under the PSP Agreement.\r\n\t\t\t\t\t</p>\r\n\t\t\t\t\t<p class=\"mb30\">\r\n\t\t\t\t\tCompany reserves the right, in its sole discretion (but not the obligation), to (i) place on hold any payments from the Client for Styling Services and out of pocket expenses, or (ii) refund, provide credits or arrange for the PSP to do so.\r\n\t\t\t\t\t</p>\r\n\t\t\t\t\t<p class=\"mb30\">\r\n\t\t\t\t\t\t<span><b>c. Unauthorized or Illegal Use</b></span>\r\n\t\t\t\t\t</p>\r\n\t\t\t\t\t<p class=\"mb30\">\r\n\t\t\t\t\tWe may (i) decide not to authorize or settle any transaction that you submit to us, (ii) refund a payment, or (iii) terminate your Account if we believe in our sole discretion that the transaction and/or your Account is in violation of these Terms of Service or any other SalonHome agreement, or that it exposes Professionals, other SalonHome Users, the PSP or SalonHome to harm. Harm includes, but is not limited to, fraud and other criminal acts, as determined by SalonHome in its sole discretion. If we reasonably suspect that your Account has been used for an unauthorized, illegal, or criminal purpose, you give us express authorization to share information about you, your Account, and any of your transactions with law enforcement. We may also request information (including, but not limited to, information about services rendered, identity verification and copies of applicable professional licenses) from you at any time for any reason or no reason as part of internal ongoing reviews of transactions and accounts on our Services, and in particular, to assist in investigations of suspicious transactions and/or accounts.  You hereby agree to provide us with such information and assistance in a timely manner and acknowledge that payment processing in connection with a suspicious transaction and/or account may be delayed until such transaction and/or account has been cleared by SalonHome, in its sole discretion.  If you do not comply with SalonHome’s request for information and assistance pursuant to this Section (xv), SalonHome reserves the right to prohibit you from processing any additional payments through the Services until you have provided such requested information and assistance and are cleared by SalonHome If your access to or use of the Services has been restricted or terminated by SalonHome, you may not register a new SalonHome account or attempt to access and use the Services through the SalonHome account of another User.\r\n\t\t\t\t\t</p>\r\n\t\t\t\t\t<p class=\"mb30\">\r\n\t\t\t\t\t\t<span><b>d. Accepted Cardse</b></span>\r\n\t\t\t\t\t</p>\r\n\t\t\t\t\t<p class=\"mb30\">\r\n\t\t\t\t\tSalonHome works with any US-issued and most non-US issued credit, debit, prepaid, or gift cards (\"Cards\") with a Visa, MasterCard, or Discover logo. We may remove or add Cards that we accept at any time without prior notice. We will generally only process Cards that receive an authorization from the applicable Network and Card issuer. You understand that there may be times when the Client may not be the authorized user of the Card or that such Client may otherwise contest the transaction through the Chargeback process (described below). You agree to comply with the Chargeback process and to liability associated with such Chargebacks.\r\n\t\t\t\t\t</p>\r\n\t\t\t\t\t<p class=\"mb30\">\r\n\t\t\t\t\t\t<span><b>e. Network Rules that Apply</b></span>\r\n\t\t\t\t\t</p>\r\n\t\t\t\t\t<p class=\"mb30\">\r\n\t\t\t\t\tThe Networks require that you and SalonHome comply with all applicable bylaws, rules, and regulations (\"Network Rules\"). The Networks amend their rules and regulations from time to time. SalonHome may be required to change these Terms of Service in connection with amendments to the Network Rules. Significant portions of the Network Rules are available to the public at www.visa.com, www.mastercard.com, and www.americanexpress.com.\r\n\t\t\t\t\t</p>\r\n\t\t\t\t\t<p class=\"mb30\">\r\n\t\t\t\t\tNetwork Rules currently prohibit you from dispensing cash on any Card transaction. The Rules also restrict your ability to assess a surcharge or split a single transaction in to multiple transactions except in certain limited situations.\r\n\t\t\t\t\t</p>\r\n\t\t\t\t\t<p class=\"mb30\">\r\n\t\t\t\t\tYour use of Network logos is governed by the Rules; you agree to familiarize yourself with and to comply with these requirements.\r\n\t\t\t\t\t</p>\r\n\t\t\t\t\t<p class=\"mb30\">\r\n\t\t\t\t\t\t<span><b>7.1 ACCESS TO ACCOUNT FUNDS</b></span>\r\n\t\t\t\t\t</p>\r\n\t\t\t\t\t<p class=\"mb30\">\r\n\t\t\t\t\t\t<span><b>a.\tBank Account</b></span>\r\n\t\t\t\t\t</p>\r\n\t\t\t\t\t<p class=\"mb30\">\r\n\t\t\t\t\tSubject to the payout schedule identified below, we will deposit amounts received by us for transactions you submit through the Services (less any applicable fees) to your verified bank account.\r\n\t\t\t\t\t</p>\r\n\t\t\t\t\t<p class=\"mb30\">\r\n\t\t\t\t\tIn the event the bank account you link to your Account is incorrect and SalonHome is not able to debit or credit the bank account, the bank account will be de-linked from your Account.\r\n\t\t\t\t\t</p>\r\n\t\t\t\t\t<p class=\"mb30\">\r\n\t\t\t\t\t\t<span><b>b. Instant Payout</b></span>\r\n\t\t\t\t\t</p>\r\n\t\t\t\t\t<p class=\"mb30\">\r\n\t\t\t\t\tSalonHome also offers the option for instant payout. If you would like to receive your deposits via instant payout, you will need to elect for instant payout in your Account and link a valid U.S. debit card that is connected to a checking account to your Account. Note that pre-paid and reloadable debit cards will not be accepted. If you have elected instant payout, we will deposit amounts received by us for transactions you submit through the Services (less any applicable standard credit card processing fees or other additional fees) to your debit account.\r\n\t\t\t\t\t</p>\r\n\t\t\t\t\t<p class=\"mb30\">\r\n\t\t\t\t\tIn the event that you do not have an ACH-enabled bank account linked to your Account, you may request a physical check. Check requests may be subject to a processing fee and an identity verification process. It is your obligation to request a check or otherwise link an ACH-enabled bank account to your Account in order to receive your funds.\r\n\t\t\t\t\t</p>\r\n\t\t\t\t\t<p class=\"mb30\">\r\n\t\t\t\t\tFunds for any given transaction will not be deposited until the transaction is deemed complete. Transactions will be deemed complete when we have received or sent the funds and when we or the designated financial institutions have accepted the transaction or funds.\r\n\t\t\t\t\t</p>\r\n\t\t\t\t\t<p class=\"mb30\">\r\n\t\t\t\t\t\t<span><b>c. Standard Schedule of Payouts</b></span>\r\n\t\t\t\t\t</p>\r\n\t\t\t\t\t<p class=\"mb30\">\r\n\t\t\t\t\tOnce you validate your US bank account, and have ten dollars or more in your Account, SalonHome will automatically initiate a payout to your bank account at the end of every business day when you have more than ten dollars in your account. Payouts to your bank account for payments received before 4pm Pacific Time will usually fund the next business day.\r\n\t\t\t\t\t</p>\r\n\t\t\t\t\t<p class=\"mb30\">\r\n\t\t\t\t\t\t<span><b>d. Availability of Funds</b></span>\r\n\t\t\t\t\t</p>\r\n\t\t\t\t\t<p class=\"mb30\">\r\n\t\t\t\t\tShould SalonHome need to conduct an investigation or resolve any pending dispute related to your Account, we may defer payout or restrict access to your funds for the entire time it takes for us to do so. We also may defer payout or restrict access to your funds as necessary to comply with applicable law or court order, or if otherwise requested by law enforcement or governmental entity.\r\n\t\t\t\t\t</p>\r\n\t\t\t\t\t<p class=\"mb30\">\r\n\t\t\t\t\t\t<span><b>7.2 TAXES</b></span>\r\n\t\t\t\t\t</p>\r\n\t\t\t\t\t<p class=\"mb30\">\r\n\t\t\t\t\tYou are responsible for determining any and all taxes assessed, incurred, or required to be collected, paid, or withheld for any reason in connection your use of our software and services (\"Taxes\"). You also are solely responsible for collecting, withholding, reporting, and remitting correct Taxes to the appropriate tax authority. We are not obligated to, nor will we determine whether Taxes apply, or calculate, collect, report, or remit any Taxes to any tax authority arising from any transaction. SalonHome specifically disclaims any liability for Taxes.\r\n\t\t\t\t\t</p>\r\n\t\t\t\t\t<p class=\"mb30\">\r\n\t\t\t\t\tIf in a given calendar year you receive through the Services (i) more than $15,000 in gross amount of payments, and (ii) more than 150 payments, SalonHome reserves the right to prohibit you from processing any additional payments through the Services and to defer delivery of earned payouts until you have provided (and SalonHome has confirmed receipt of) your accurate User Tax Information (defined below). If in a given calendar year your payments through the Services meet the Internal Revenue Service (“IRS”) thresholds for required reporting, SalonHome will report your User Tax Information annually to the IRS, as required by law. If SalonHome receives a notification from the IRS at any time that your User Tax Information is incomplete or inaccurate, SalonHome will notify you immediately that you need to provide a completed W-9 form and reserves the right to (i) prohibit you from processing any additional payments through the Services and (ii) defer delivery of any earned payouts, until you have provided and SalonHome has confirmed receipt of updated accurate User Tax Information. If SalonHome does not receive such updated accurate User Tax Information within sixty (60) days of your receipt of SalonHome’s request for updated User Tax Information, SalonHome will deduct any applicable fees owed to SalonHome and will refund all undelivered earned payouts back to the applicable Client. SalonHome disclaims any and all liability related to such refunded payouts. “User Tax Information” means any information required to be provided to the IRS, which includes but is not limited to the following: your name, address, Tax Identification Number (such as a Social Security Number (SSN), or Employer Identification Number (EIN)), the total dollar amount of the payments you receive in a calendar year, and the total dollar amount of the payments you receive for each month in a calendar year. Whether you meet the IRS thresholds for required reporting in a given calendar year will be determined by looking at the Tax Identification Number associated with your Account.\r\n\t\t\t\t\t</p>\r\n\t\t\t\t\t<p class=\"mb30\">\r\n\t\t\t\t\t\t<span><b>7.3 CUSTOMER CARE</b></span>\r\n\t\t\t\t\t</p>\r\n\t\t\t\t\t<p class=\"mb30\">\r\n\t\t\t\t\tEach Professional, as a separate entity from SalonHome, is solely responsible for all customer service issues relating to such Professional's goods or services, including without limitation, any Styling Services, pricing, order fulfillment, order or appointment cancellation, returns, refunds and adjustments, rebates, functionality and warranty, and feedback concerning experiences with such Professional, any personnel, their policies or processes. In performing customer service, Professionals must present themselves as a separate entity from SalonHome. As between Professionals and SalonHome, SalonHome is solely responsible for customer service issues relating to any Account, payment, Card processing, debiting or crediting.\r\n\t\t\t\t\t</p>\r\n\t\t\t\t\t<p class=\"mb30\">\r\n\t\t\t\t\t\t<span><b>7.4 REFUNDS AND RETURNS</b></span>\r\n\t\t\t\t\t</p>\r\n\t\t\t\t\t<p class=\"mb30\">\r\n\t\t\t\t\tBy accepting payment Card transactions with SalonHome, you agree to process returns of, and provide refunds and adjustments for, your goods or services through your Account in accordance with these Terms of Service and Network Rules. Network Rules require that you will (a) maintain a fair return, cancellation or adjustment policy; (b) disclose your return or cancellation policy to Clients at the time of purchase, (c) not give cash refunds to a Client in connection with a Card sale, unless required by law, and (d) not accept cash or any other item of value for preparing a Card sale refund. The amount of the refund/adjustment must include any associated taxes required to be refunded and cannot exceed the amount shown as the total on the original sales data except by the exact amount required to reimburse the Client for postage that the Client paid to return merchandise. If you accept returns and are making an uneven exchange of merchandise (e.g., the sales price is not the same), you must issue a credit for the total amount of the merchandise being returned and complete a new sale for any new merchandise. Please be aware, if your refund policy prohibits returns or is unsatisfactory to the Client, you may still receive a Chargeback relating to such sales.\r\n\t\t\t\t\t</p>\r\n\t\t\t\t\t<p class=\"mb30\">\r\n\t\t\t\t\tYou can process a refund through your Account up to sixty (60) days from the day you accepted the payment. If your available SalonHome balance is insufficient to cover the refund, SalonHome will request your authorization to withdraw up to the requested refund amount from your bank account or debit card. SalonHome will then withdraw the amount you were paid (the sale amount minus the initial transaction fee) from your bank account or debit card, and credit it back into your Client's Card. The fees are also refunded by SalonHome, so the full purchase amount is always returned to your Client. SalonHome has no obligation to accept any returns of any of your goods or services on your behalf.\r\n\t\t\t\t\t</p>\r\n\t\t\t\t\t<p class=\"mb30\">\r\n\t\t\t\t\t\t<span><b>7.5 LIABILITY FOR CHARGEBACKS AND FRAUDULENT ACTIONS</b></span>\r\n\t\t\t\t\t</p>\r\n\t\t\t\t\t<p class=\"mb30\">\r\n\t\t\t\t\tThe amount of a transaction may be reversed or charged back to your Account (a \"Chargeback\") if the transaction (a) is disputed, (b) is reversed for any reason by the Network, our processor, or a Client or our financial institution, (c) was not authorized or we have any reason to believe that the transaction was not authorized, (d) is allegedly unlawful, suspicious, or in violation of the terms of these Terms of Service.\r\n\t\t\t\t\t</p>\r\n\t\t\t\t\t<p class=\"mb30\">\r\n\t\t\t\t\tSalonHome is not liable for any losses relating to Chargebacks, fraudulent charges, or other actions by any User that are deceptive, fraudulent or otherwise invalid as determined in SalonHome's sole discretion (\"Fraudulent Actions\"). By using the Services, you hereby release SalonHome from any liability arising from Fraudulent Actions. You will also use best efforts to promptly notify SalonHome of any Fraudulent Actions which may affect the Services. SalonHome reserves the right, in its sole discretion, to terminate the account of any User that engages in, or enables any other User to engage in, Fraudulent Actions.\r\n\t\t\t\t\t</p>\r\n\t\t\t\t\t<p class=\"mb30\">\r\n\t\t\t\t\t\t<span><b>7.6 SALONHOME COLLECTION RIGHTS FOR CHARGEBACKS</b></span>\r\n\t\t\t\t\t</p>\r\n\t\t\t\t\t<p class=\"mb30\">\r\n\t\t\t\t\tFor any transaction that results in a Chargeback, we may withhold the Chargeback amount in a Reserve. We may debit the amount of any Chargeback and any associated fees, fines, or penalties listed in the Fee Schedule or assessed by the Association or our processor from your Account (including without limitation any Reserve), any proceeds due to you, your bank account or debit card, or other payment instrument registered with us. If you have pending Chargebacks, we may delay payouts from your Account. Further, if we reasonably believe that a Chargeback is likely with respect to any transaction, we may withhold the amount of the potential Chargeback from payments otherwise due to you under these Terms of Service until such time that: (a) a Chargeback is assessed due to a Client's complaint, in which case we will retain the funds; (b) the period of time under applicable law or regulation by which the Client may dispute that the transaction has expired; or (c) we determine that a Chargeback on the transaction will not occur. If we are unable to recover funds related to a Chargeback for which you are liable, you will pay us the full amount of the Chargeback immediately upon demand. You agree to pay all costs and expenses, including without limitation attorneys' fees and other legal expenses, incurred by or on behalf of us in connection with the collection of all Account deficit balances unpaid by you.\r\n\t\t\t\t\t</p>\r\n\t\t\t\t\t<p class=\"mb30\">\r\n\t\t\t\t\t\t<span><b>7.7 EXCESSIVE CHARGEBACKS</b></span>\r\n\t\t\t\t\t</p>\r\n\t\t\t\t\t<p class=\"mb30\">\r\n\t\t\t\t\tIf we determine that you are incurring an excessive amount of Chargebacks, we may establish controls or conditions governing your Account, including without limitation, by (a) establishing new processing fees, (b) creating a Reserve in an amount reasonably determined by us to cover anticipated Chargebacks and related fees, (c) delaying payouts, and (d) terminating or suspending the Services.\r\n\t\t\t\t\t</p>\r\n\t\t\t\t\t<p class=\"mb30\">\r\n\t\t\t\t\t\t<span><b>7.8 CONTESTING CHARGEBACKS</b></span>\r\n\t\t\t\t\t</p>\r\n\t\t\t\t\t<p class=\"mb30\">\r\n\t\t\t\t\tYou agree to assist us when requested, at your expense, to investigate any of your transactions processed through the Services. To that end, you permit us to share information about a Chargeback with the Client, the Client's financial institution, and your financial institution in order to investigate and/or mediate a Chargeback. We will request necessary information from you to contest the Chargeback. If the Chargeback is contested successfully, we will release the reserved funds to your Account. If a Chargeback dispute is not resolved in your favor by the Network or issuing bank or you choose not to contest the Chargeback, we may recover the Chargeback amount and any associated fees as described in these Terms of Service. You acknowledge that your failure to assist us in a timely manner when investigating a transaction, including providing necessary documentation within five (5) days of our request, may result in an irreversible Chargeback. We reserve the right, upon notice to you, to charge a fee for mediating and/or investigating Chargeback disputes.\r\n\t\t\t\t\t</p>\r\n\t\t\t\t\t<p class=\"mb30\">\r\n\t\t\t\t\t\t<span><b>8. SALONHOME SET-OFF RIGHTS.</b></span>\r\n\t\t\t\t\t</p>\r\n\t\t\t\t\t<p class=\"mb30\">\r\n\t\t\t\t\tYou grant us a security interest in, as well as a right of setoff against, and hereby assign, convey, deliver, pledge and transfer to us, as security for repayment of any obligations due under these Terms of Service, all of your right, title, and interest in and to all of your accounts with us. However, this grant will not apply to any accounts for which the grant of a security interest would be prohibited by law. You authorize us, without prior notice to you and irrespective of (i) whether we have made demand under these Terms of Service or any other related agreements; and (ii) whether the obligation is contingent, matured or unmatured, to the extent permitted by law, to collect, charge, and/or setoff all sums owing on the indebtedness against any and all such accounts and other obligations, and our option, to administratively freeze or direct any third party bank holding the account to freeze all such accounts to allow us to protect our security interest, collection, charge and setoff rights as provided for in this section.\r\n\t\t\t\t\t</p>\t\r\n\t\t\t\t\t<p class=\"mb30\">\r\n\t\t\t\t\tTo the extent permitted by law, we may set off against the balances for any obligation you owe us under these Terms of Service, including without limitation any Chargebacks. All fees are charged at the time we process a transaction and are deducted first from the transferred or collected funds and thereafter from the balance in your Account. If you owe us an amount that exceeds your balance, we may charge or debit a payment instrument registered in your Account or any connected Account (as well as set off against any balance in any connected Account). Your failure to fully pay amounts that you owe us on demand will be a breach of these Terms of Service. You will be liable for our costs associated with collection in addition to the amount owed, including without limitation attorneys' fees and expenses, collection agency fees, and any applicable interest.\r\n\t\t\t\t\t</p>\r\n\t\t\t\t\t<p class=\"mb30\">\r\n\t\t\t\t\t\t<span><b>8.1 INACTIVE ACCOUNTS</b></span>\r\n\t\t\t\t\t</p>\r\n\t\t\t\t\t<p class=\"mb30\">\r\n\t\t\t\t\tIf there is no activity in your Account (including access or payment transactions) for at least two years, consecutively, and you have a balance, we will notify you by sending an email to the email address associated with your Account and give you the option of keeping your Account open and maintaining the balance, withdrawing the balance, or requesting a check. If you do not respond to our notice within thirty days, we will automatically close your Account and escheat your funds in accordance with applicable law, and if permitted, to SalonHome.\r\n\t\t\t\t\t</p>\r\n\t\t\t\t\t<p class=\"mb30\">\r\n\t\t\t\t\t\t<span><b>8.2 PROCESSING ERRORS</b></span>\r\n\t\t\t\t\t</p>\r\n\t\t\t\t\t<p class=\"mb30\">\r\n\t\t\t\t\tWe will attempt to rectify processing errors that we discover. If the error resulted in your receipt of less than the amount to which you were entitled, SalonHome will credit your Account for the difference. If the error results in your receipt of more than the amount to which you were entitled, SalonHome will debit the extra funds from your Account. SalonHome will only correct transactions that you process incorrectly if and when you notify us of such an error. Your failure to notify us of a processing error within thirty days of when it first appears on your electronic transaction history will be deemed a waiver of any right to amounts owed to you.\r\n\t\t\t\t\t</p>\r\n\t\t\t\t\t<p class=\"mb30\">\r\n\t\t\t\t\t\t<span><b>9. YOU AGREE NOT TO, AND WILL NOT ASSIST OR ENABLE OTHERS TO:</b></span>\r\n\t\t\t\t\t</p>\r\n\t\t\t\t\t<p class=\"mb30\">\r\n\t\t\t\t\t(a)\tuse the Site to threaten, stalk, defraud, incite, harass, or advocate the harassment of another person, or otherwise interfere with another User’s use of the Site;\r\n\t\t\t\t\t</p>\r\n\t\t\t\t\t<p class=\"mb30\">\r\n\t\t\t\t\t(b) use the Site to submit or transmit spam, chain letters, contests, junk email, pyramid schemes, surveys, or other mass messaging, whether commercial in nature or not;\r\n\t\t\t\t\t</p>\r\n\t\t\t\t\t<p class=\"mb30\">\r\n\t\t\t\t\t(c)\tuse the Site for promotional or commercial purposes, except in connection with a Professional Account and as expressly allowed in writing by SalonHome;\r\n\t\t\t\t\t</p>\r\n\t\t\t\t\t<p class=\"mb30\">\r\n\t\t\t\t\t(d)\tuse the Site in a manner that may create a conflict of interest, such as trading reviews with other professionals, business owners, compensating someone or being compensated to write or remove a review, or by writing a fake or defamatory review;\r\n\t\t\t\t\t</p>\r\n\t\t\t\t\t<p class=\"mb30\">\r\n\t\t\t\t\t(e)\tuse the Site for keyword spamming or to otherwise attempt to manipulate natural search results;\r\n\t\t\t\t\t</p>\r\n\t\t\t\t\t<p class=\"mb30\">\r\n\t\t\t\t\t(f)\tuse the Site to promote bigotry or discrimination against any persons or other Users for any reason;\r\n\t\t\t\t\t</p>\r\n\t\t\t\t\t<p class=\"mb30\">\r\n\t\t\t\t\t(g)\tuse the Site to violate any third-party rights, including any breach of confidence, copyright, trademark, patent, trade secret, moral right, privacy right, right of publicity, or any other intellectual property or proprietary right of any person or entity;\r\n\t\t\t\t\t</p>\r\n\t\t\t\t\t<p class=\"mb30\">\r\n\t\t\t\t\t(h)\tuse the Site to submit or transmit any nude images of any kind, pornography or illegal content;\r\n\t\t\t\t\t</p>\r\n\t\t\t\t\t<p class=\"mb30\">\r\n\t\t\t\t\t(i)\tuse the Site to solicit personal information from minors or to harm or threaten to cause harm to minors;\r\n\t\t\t\t\t</p>\r\n\t\t\t\t\t<p class=\"mb30\">\r\n\t\t\t\t\t(j)\tuse the Site in violation of this User Agreement or any applicable law;\r\n\t\t\t\t\t</p>\r\n\t\t\t\t\t<p class=\"mb30\">\r\n\t\t\t\t\t(k) modify, adapt, appropriate, reproduce, distribute, translate, create derivative works or adaptations of, publicly display, sell, trade, or in any way exploit the Site, or Site Content (other than Your Content) or other User Content, except as expressly authorized by SalonHome;\r\n\t\t\t\t\t</p>\r\n\t\t\t\t\t<p class=\"mb30\">\r\n\t\t\t\t\t(l)\treverse engineer any portion of the Site, except as may be permitted under the law;\r\n\t\t\t\t\t</p>\r\n\t\t\t\t\t<p class=\"mb30\">\r\n\t\t\t\t\t(m)\tremove or modify any copyright, trademark or other proprietary rights notice on the Site or on any materials printed or copied off of the Site;\r\n\t\t\t\t\t</p>\r\n\t\t\t\t\t<p class=\"mb30\">\r\n\t\t\t\t\t(n) record, process or mine information about other Users;\r\n\t\t\t\t\t</p>\r\n\t\t\t\t\t<p class=\"mb30\">\r\n\t\t\t\t\t(o)\tuse any robot, spider, site search/retrieval application or other automated device, process or means to access, retrieve, scrape or index the Site or any Site Content;\r\n\t\t\t\t\t</p>\r\n\t\t\t\t\t<p class=\"mb30\">\r\n\t\t\t\t\t(p) access, retrieve or index the Site to for purposes of constructing or populating a search-able database of business reviews;\r\n\t\t\t\t\t</p>\r\n\t\t\t\t\t<p class=\"mb30\">\r\n\t\t\t\t\t(q)\treformat or frame any portion of the Site;\r\n\t\t\t\t\t</p>\r\n\t\t\t\t\t<p class=\"mb30\">\r\n\t\t\t\t\t(r)\ttake any action that imposes, or may impose in Our sole discretion, an unreasonable or disproportionately large load on SalonHome’s computer systems;\r\n\t\t\t\t\t</p>\r\n\t\t\t\t\t<p class=\"mb30\">\r\n\t\t\t\t\t(s)\tattempt to gain unauthorized access to the Site, User accounts, computer systems or networks connected to the Site through hacking, password mining or any other means; use the Site or any Site Content to transmit any computer viruses, worms, defects, Trojan horses or other items of a destructive nature (collectively, \"Viruses\"); use any device, software or routine that interferes with the proper working of the Site, or otherwise attempt to interfere with the proper working of the Site; make excessive traffic demands; use the Site to violate the security of any computer network, crack passwords or security encryption codes; disrupt or interfere with the security of, or otherwise cause harm to, the Site or Site Content; remove, circumvent, disable, damage or otherwise interfere with any security-related features of the Site, features that prevent or restrict the use or copying of Site Content, or features that enforce limitations on the use of the Site; and make any untruthful or defamatory statements.\r\n\t\t\t\t\t</p>\r\n\t\t\t\t\t<p class=\"mb30\">\r\n\t\t\t\t\t\t<span><b>10. PERMISSION TO USE YOUR CONTENT.</b></span>\r\n\t\t\t\t\t</p>\r\n\t\t\t\t\t<p class=\"mb30\">\r\n\t\t\t\t\tSalonHome will never sell it's user contact information nor allow anyone to advertise to other businesses clients other than their own. For instance, if you book or register with a SalonHome Professional Account, you consent to receiving communications from that Professional Account such as marketing information or appointment reminders.\r\n\t\t\t\t\t</p>\r\n\t\t\t\t\t<p class=\"mb30\">\r\n\t\t\t\t\tWe may use Your Content in a number of different ways, including displaying it on the Site, reformatting it, incorporating it into other works, creating derivative works from it, promoting it, distributing it and allowing others to do the same in connection with their own websites and media platforms (collectively, \"Other Media\"). As such, You hereby irrevocably grant Us a world-wide, perpetual, non-exclusive, royalty-free, assignable, sublicensable, transferable rights to use Your Content for any purpose. You also irrevocably grant the Site’s Users and the Users of any Other Media the right to access Your Content in connection with their use of the Site and any Other Media. Finally, You irrevocably waive, and cause to be waived, against SalonHome and Our Users any claims and assertions of moral rights or attribution with respect to Your Content. By “use” We mean use, copy , publicly perform and display, reproduce, distribute, modify, translate, remove, analyze, commercialize, and prepare derivative works of Your Content.\r\n\t\t\t\t\t</p>\r\n\t\t\t\t\t<p class=\"mb30\">\r\n\t\t\t\t\t\t<span><b>11. RESPONSIBILITY FOR YOUR CONTENT.</b></span>\r\n\t\t\t\t\t</p>\r\n\t\t\t\t\t<p class=\"mb30\">\r\n\t\t\t\t\tYou alone are responsible for Your Content. You assume all risks associated with Your Content, including, but not limited to, anyone’s reliance on its accuracy, quality, reliability, completeness or usefulness, or any disclosure by You of information in Your Content that makes You personally identifiable. You represent that You own, or have the necessary permissions to use, and authorize the use of, Your Content as described herein. You may not imply that Your Content is in any way sponsored or endorsed by SalonHome. You may expose Yourself to liability if, such as, Your Content violates any third-party right, including, but not limited to, any copyright, trademark, patent, trade secret, moral right, privacy right, right of publicity or any other intellectual property or proprietary right; contains material that is false, intentionally misleading, or defamatory; contains material that is unlawful, including illegal hate speech or pornography; exploits or otherwise harms minors; or violates or advocates the violation of any law or regulation.\r\n\t\t\t\t\t</p>\r\n\t\t\t\t\t<p class=\"mb30\">\r\n\t\t\t\t\t\t<span><b>12. USE OF CONTENT.</b></span>\r\n\t\t\t\t\t</p>\r\n\t\t\t\t\t<p class=\"mb30\">\r\n\t\t\t\t\tWe may remove or reinstate User Content from time to time at Our sole discretion. such as, We may remove a review if We believe it violates this User Agreement. We have no obligation to retain or provide You with copies of Your Content, nor do We make any guarantees or representations concerning any confidentiality with respect to Your Content. SalonHome and its licensees may display advertisements and other information adjacent to or included with Your Content on the Site and Other Media. You are not entitled to any compensation for such advertisements. The manner, mode and extent of such advertising are subject to change without specific notice to You.\r\n\t\t\t\t\t</p>\r\n\t\t\t\t\t<p class=\"mb30\">\r\n\t\t\t\t\tUser Content (including any that may have been created by Users employed or contracted by SalonHome) does not necessarily reflect the opinion of SalonHome. We reserve the right to remove, screen, edit, or reinstate User Content from time to time at Our sole discretion for any reason or no reason, and without notice to You. such as, We may remove a review if We believe it violates the User Agreement. We have no obligation to retain or provide You with copies of Your Content, nor do We guarantee any confidentiality with respect to Your Content.\r\n\t\t\t\t\t</p>\r\n\t\t\t\t\t<p class=\"mb30\">\r\n\t\t\t\t\t\t<span><b>13. APPOINTMENT POLICY.</b></span>\r\n\t\t\t\t\t</p>\r\n\t\t\t\t\t<p class=\"mb30\">\r\n\t\t\t\t\tAs part of the services offered by the Site, SalonHome permits its Users to make appointments with certain professionals and businesses. In the event that a User elects to reserve an appointment with a professional or business on the Site, the User covenants and agrees that he/she/they/them/it will arrive at the designated appointment. In the event that the User is unable to make the appointment after scheduling such, he/she/it agrees to cancel such appointment not less than twenty-four (24) hours in advance of the originally scheduled time. If User does not cancel such appointment in compliance with the above terms, User agrees to pay twenty percent (20%) of the expected service amount. This payment will serve to compensate SalonHome and the Professional for lost wages. Furthermore, You acknowledge and agree that SalonHome may suspend or terminate Your account in the event that You fail to appear at any scheduled appointment. You represent, covenant and agree further that You will not make any appointments at which You do not intend to appear and You covenant and agree further to refrain from any and all conduct which may be adverse to the interest of each of the businesses featured on the Site. Each User covenants and agrees to defend, indemnify and hold harmless SalonHome from and against any and all conduct which may be adverse to any of the professionals or businesses soliciting appointments or bookings on the Site.\r\n\t\t\t\t\t</p>\r\n\t\t\t\t\t<p class=\"mb30\">\r\n\t\t\t\t\t\t<span><b>14. COPYRIGHT DISPUTE POLICY.</b></span>\r\n\t\t\t\t\t</p>\r\n\t\t\t\t\t<p class=\"mb30\">\r\n\t\t\t\t\tWe have adopted the following policies and procedures with regard and copyright infringement in accordance with Title 17, United States Code, Section 512(c), which is part of the Digital Millennium Copyright Act (\"DMCA\"). The address of SalonHome’s Designated Agent to Receive Notification of Claimed Infringement (\"Designated Agent\") is provided at the bottom of this section. It is SalonHome’s policy to (i) respond to notices of alleged copyright infringement that comply with the DMCA; and (ii) terminate the accounts of Users determined by SalonHome to be a \"repeat infringer\" as referenced in the DMCA. We reserve the right to remove content alleged to be infringing without prior notice and at Our sole discretion.}\r\n\t\t\t\t\t</p>\r\n\t\t\t\t\t<p class=\"mb30\">\r\n\t\t\t\t\t(a)\tProcedure for Reporting Copyright Infringements. If You are a copyright owner or agent thereof, and believe that Your copyright is being infringed in connection with the Site, please send a written notification to the Designated Agent detailing the alleged infringement. Your written notification must include:\r\n\t\t\t\t\t</p>\r\n\t\t\t\t\t<p class=\"mb30\">\r\n\t\t\t\t\t(i)\tIdentification of the copyrighted work that You claim has been infringed;\r\n\t\t\t\t\t</p>\r\n\t\t\t\t\t<p class=\"mb30\">\r\n\t\t\t\t\t(ii) Identification of the Content on the Site that allegedly infringes upon the copyrighted work at issue, and information reasonably sufficient to permit SalonHome to locate such Content;\r\n\t\t\t\t\t</p>\r\n\t\t\t\t\t<p class=\"mb30\">\r\n\t\t\t\t\t(iii) A statement by You that You have a good faith belief that the use of the Content identified in Your notice in the manner complained of is not authorized by the copyright owner, its agent, or the law;\r\n\t\t\t\t\t</p>\r\n\t\t\t\t\t<p class=\"mb30\">\r\n\t\t\t\t\t(iv) A statement by You that You attest, under penalty of perjury, that the information in Your notice is accurate and that You are the copyright owner or authorized to act on the copyright owner’s behalf; and\r\n\t\t\t\t\t</p>\r\n\t\t\t\t\t<p class=\"mb30\">\r\n\t\t\t\t\t(v)\tYour physical or electronic signature, together with proof of identity, and Your contact information (address, telephone number and, if available, email address).\r\n\t\t\t\t\t</p>\r\n\t\t\t\t\t<p class=\"mb30\">\r\n\t\t\t\t\tPlease note that SalonHome may, at its sole discretion, send a copy of such notices to third parties for publication. Please note that You may be subject to liability under Section 512(f) of the DMCA if You materially misrepresent that content on the Site infringes Your copyright.\r\n\t\t\t\t\t</p>\r\n\t\t\t\t\t<p class=\"mb30\">\r\n\t\t\t\t\t(b)\tProcedure to Supply a Counter-Notice to the Designated Agent. If You believe that Content has been mistakenly removed from the Site pursuant to this Copyright Dispute Policy, You may send a written counter-notice to the Designated Agent. Your written counter-notice must include:\r\n\t\t\t\t\t</p>\r\n\t\t\t\t\t<p class=\"mb30\">\r\n\t\t\t\t\t(i)\tIdentification of the copyrighted Content that was removed, and the location on the Site where it would have been found prior to its removal;\r\n\t\t\t\t\t</p>\r\n\t\t\t\t\t<p class=\"mb30\">\r\n\t\t\t\t\t(ii) A statement under penalty of perjury that You have a good faith belief that the Content was removed as a result of a mistake or misidentification;\r\n\t\t\t\t\t</p>\r\n\t\t\t\t\t<p class=\"mb30\">\r\n\t\t\t\t\t(iii) A statement that You consent to the jurisdiction of the Federal District Court for the judicial district in which Your address is located, or if Your address is located outside the United States, for any judicial district in which SalonHome is located, and that You will accept service of process from the person who sent the original infringement notice to SalonHome, or an agent of such person; and\r\n\t\t\t\t\t</p>\r\n\t\t\t\t\t<p class=\"mb30\">\r\n\t\t\t\t\t(iv) Your physical or electronic signature, together with Your contact information (address, telephone number and, if available, email address).\r\n\t\t\t\t\t</p>\r\n\t\t\t\t\t<p class=\"mb30\">\r\n\t\t\t\t\t(c)\tAddress for Designated Agent. Please contact the Designated Agent at the following address:\r\n\t\t\t\t\t</p>\r\n\t\t\t\t\t<p class=\"mb30\">\r\n\t\t\t\t\tSALONHOME, INC.\r\n\t\t\t\t\t</p>\t\r\n\t\t\t\t\t<p class=\"mb30\">\r\n\t\t\t\t\tAttn: Customer Support<br>\r\n\t\t\t\t\t3423 Piedmont Road NE<br>\r\n\t\t\t\t\tAtlanta, GA 30305<br>\r\n\t\t\t\t\tcustomersupport@salonhome.com<br>\r\n\t\t\t\t\t</p>\r\n\t\t\t\t\t<p class=\"mb30\">\r\n\t\t\t\t\t\t<span><b>15. SITE AVAILABILITY.</b></span>\r\n\t\t\t\t\t</p>\r\n\t\t\t\t\t<p class=\"mb30\">\r\n\t\t\t\t\tWe reserve the right to modify, update, or discontinue the Site at Our sole discretion, at any time, for any or no reason, and without notice or liability.\r\n\t\t\t\t\t</p>\r\n\t\t\t\t\t<p class=\"mb30\">\r\n\t\t\t\t\t\t<span><b>16. UNAUTHORIZED ACCESS.</b></span>\r\n\t\t\t\t\t</p>\r\n\t\t\t\t\t<p class=\"mb30\">\r\n\t\t\t\t\tWe reserve the right to exercise whatever lawful means We deem necessary in order to prevent unauthorized access to or use of the Site, including, but not limited to, technological barriers, IP mapping and contacting Your Internet Service Provider (ISP) regarding such unauthorized use.\r\n\t\t\t\t\t</p>\r\n\t\t\t\t\t<p class=\"mb30\">\r\n\t\t\t\t\t\t<span><b>17. INVESTIGATIONS.</b></span>\r\n\t\t\t\t\t</p>\r\n\t\t\t\t\t<p class=\"mb30\">\r\n\t\t\t\t\tWe are under no obligation to monitor the Site or Site Content. However, We reserve the right to investigate possible violations of the User Agreement, block Users from the Site, and refer matters to law enforcement authorities for further investigation. We may disclose information to third parties, including Your Content, in accordance with the Privacy Policy.\r\n\t\t\t\t\t</p>\r\n\t\t\t\t\t<p class=\"mb30\">\r\n\t\t\t\t\t\t<span><b>18. TERMINATION.</b></span>\r\n\t\t\t\t\t</p>\r\n\t\t\t\t\t<p class=\"mb30\">\r\n\t\t\t\t\tWe may terminate or suspend Your account or ability to use the Site, in whole or in part, at Our sole discretion, for any or no reason, and without notice or liability of any kind. such as, We may terminate or suspend Your account or ability to use the Site if You breach this User Agreement or are suspected of involvement in illegal activity. Any such termination or suspension could prevent You from accessing Your account, the Site, Your Content, Site Content or any other related information. You may terminate this User Agreement at any time by closing Your account, discontinuing Your use of any and all parts of the Site. If You close Your account, We will use commercially reasonable efforts to stop displaying Your account profile on the Site, but may continue to display Your Content. In the event of any termination, this User Agreement will continue in full force and effect, including Our right to use Your Content.\r\n\t\t\t\t\t</p>\r\n\t\t\t\t\t<p class=\"mb30\">\r\n\t\t\t\t\t\t<span><b>19. OWNERSHIP.</b></span>\r\n\t\t\t\t\t</p>\r\n\t\t\t\t\t<p class=\"mb30\">\r\n\t\t\t\t\tWe own the SalonHome Content, including but not limited to visual interfaces, interactive features, graphics, design, compilation, computer code, products, software, aggregate User review ratings and all other elements and components of the Site excluding User Content and Third Party Content. We also own the copyrights, trademarks, service marks, trade names and other intellectual and proprietary rights throughout the world (the “IP Rights”) associated with the SalonHome Content and the Site, which are protected by copyright, trade dress, patent, trademark laws and all other applicable intellectual and proprietary rights and laws. As such, You may not modify, reproduce, distribute, create derivative works or adaptations of, publicly display or in any way exploit any of the SalonHome Content in whole or in part except as expressly authorized by Us. Except as expressly and unambiguously provided herein, We do not grant You any express or implied rights, and all rights in and to the Site and the SalonHome Content are retained by Us.\r\n\t\t\t\t\t</p>\r\n\t\t\t\t\t<p class=\"mb30\">\r\n\t\t\t\t\t\t<span><b>20. WARRANTIES, DISCLAIMERS, AND LIMITATIONS OF LIABILITY.</b></span>\r\n\t\t\t\t\t</p>\r\n\t\t\t\t\t<p class=\"mb30\">\r\n\t\t\t\t\tTHE SITE AND ALL SITE CONTENT IS MADE AVAILABLE TO YOU ON AN “ AS IS ” BASIS. SALONHOME MAKES NO WARRANTIES, REPRESENTATIONS OR CONDITIONS OF ANY KIND, EXPRESS, STATUTORY OR IMPLIED AS TO (1) THE OPERATION AND FUNCTIONALITY OF THE SITE, (2) THE ACCURACY, INTEGRITY, COMPLETENESS, QUALITY, LEGALITY, USEFULNESS, SAFETY AND IP RIGHTS OF ANY OF THE SITE CONTENT, INCLUDING BUT NOT LIMITED TO THE ACCURACY OF PROFESSIONAL OR BUSINESS REVIEWS AND INFORMATION LISTED ON THE SITE AND/OR (3) THE PRODUCTS, SPACES AND SERVICES ASSOCIATED WITH THE SITE OR SITE CONTENT, INCLUDING BUT NOT LIMITED TO THE PRODUCTS, SPACES AND SERVICES SOLD BY PROFESSIONALS LISTED ON THE SITE. SALONHOME FURTHER DISCLAIMS ALL WARRANTIES, EXPRESS, STATUTORY OR IMPLIED, INCLUDING, BUT NOT LIMITED TO, IMPLIED WARRANTIES OF MERCHANTABILITY, MERCHANTABLE QUALITY, DURABILITY, FITNESS FOR A PARTICULAR PURPOSE AND/OR NON-INFRINGEMENT. NO ADVICE OR INFORMATION, WHETHER ORAL OR WRITTEN, THAT YOU OBTAIN FROM SALONHOME OR THE SITE SHALL CREATE ANY WARRANTY, REPRESENTATION OR CONDITION NOT EXPRESSLY STATED HEREIN. SALONHOME DISCLAIMS ALL LIABILITY FOR ANY (A) INDIRECT, SPECIAL, INCIDENTAL, PUNITIVE, EXEMPLARY, RELIANCE OR CONSEQUENTIAL DAMAGES, (B) LOSS OF PROFITS, (C) BUSINESS OR PROFESSIONAL INTERRUPTION, (D) LOSS OF OR DAMAGE TO REPUTATION OF SALONHOME OR ANY THIRD PARTY, OR (E) LOSS OF INFORMATION OR DATA. SALONHOME FURTHER DISCLAIMS ALL LIABILITY FOR ANY LOSS OR DAMAGE ARISING OUT OF YOUR USE OF THE SITE AND SITE CONTENT. YOUR USE OF THE SITE AND SITE CONTENT IS AT YOUR OWN DISCRETION AND RISK, AND YOU WILL BE SOLELY RESPONSIBLE FOR ANY RESULTING LOSS OR DAMAGE, INCLUDING BUT NOT LIMITED TO, ANY LOSS OF DATA OR DAMAGE TO YOUR COMPUTER(S) OR NETWORKS FROM VIRUSES THAT MAY BE DOWNLOADED TO YOUR COMPUTER IN THE COURSE OF USING THE SITE. SALONHOME ALSO DISCLAIMS ANY AND ALL LIABILITY FOR ANY LOSS OR DAMAGE ARISING OUT OF YOUR COMMUNICATIONS OR DEALINGS WITH ANY OF THE PROFESSIONALS, BUSINESSES, ADVERTISERS OR USERS ON THE SITE. YOUR COMMUNICATIONS OR DEALINGS WITH SUCH PROFESSIONALS, BUSINESSES, ADVERTISERS AND USERS ARE SOLELY BETWEEN YOU AND THEM, THOUGH SALONHOME RESERVES THE RIGHT TO MONITOR DISPUTES BETWEEN YOU AND THEM. SOME JURISDICTIONS DO NOT ALLOW THE EXCLUSION OF CERTAIN WARRANTIES, THE LIMITATION OR EXCLUSION OF IMPLIED WARRANTIES, OR LIMITATIONS ON HOW LONG AN IMPLIED WARRANTY MAY LAST, SO THE ABOVE LIMITATIONS MAY NOT APPLY TO YOU. IF YOU RESIDE IN SUCH A JURISDICTION, THE ABOVE LIMITATIONS SHALL APPLY TO YOU TO THE FULLEST EXTENT PERMITTED UNDER APPLICABLE LAW.\r\n\t\t\t\t\t</p>\r\n\t\t\t\t\t<p class=\"mb30\">\r\n\t\t\t\t\tSALONHOME'S MAXIMUM AGGREGATE LIABILITY TO YOU FOR ANY CLAIMS, DAMAGES, INJURIES OR CAUSES WHATSOEVER, AND REGARDLESS OF THE FORM OF ACTION (WHETHER SUCH LIABILITY ARISES DUE TO NEGLIGENCE, BREACH OF CONTRACT, MISREPRESENTATION OR FOR ANY OTHER REASON), WILL AT ALL TIMES BE LIMITED TO THE GREATER OF (I) THE AMOUNT PAID, IF ANY, BY YOU TO SALONHOME IN CONNECTION WITH THE SITE IN THE 12 MONTHS PRIOR TO THE ACTION GIVING RISE TO LIABILITY OR (II) US $1.00.\r\n\t\t\t\t\t</p>\r\n\t\t\t\t\t<p class=\"mb30\">\r\n\t\t\t\t\t\t<span><b>21. INDEMNITY.</b></span>\r\n\t\t\t\t\t</p>\r\n\t\t\t\t\t<p class=\"mb30\">\r\n\t\t\t\t\tYou agree to defend, indemnify and hold harmless SalonHome, its members, managers, subsidiaries, affiliates, any related companies, suppliers, licensors and partners, and the officers, directors, employees, agents and representatives of each of them, including costs, liabilities and legal fees, from any claim or demand made by any third party due to or arising out of: (i) Your access to or use of the Site, (ii) Your violation of this User Agreement, or (iii) the infringement by You, or any third party using Your account, of any intellectual property or other right of any person or entity. SalonHome reserves the right, at Your expense, to assume the exclusive defense and control of any matter for which You are required to indemnify Us and You agree to cooperate with Our defense of these claims. You agree not to settle any matter without the prior written consent of SalonHome. SalonHome will use reasonable efforts to notify You of any such claim, action or proceeding upon becoming aware of it.\r\n\t\t\t\t\t</p>\r\n\t\t\t\t\t<p class=\"mb30\">\r\n\t\t\t\t\t\t<span><b>22. THIRD PARTIES.</b></span>\r\n\t\t\t\t\t</p>\r\n\t\t\t\t\t<p class=\"mb30\">\r\n\t\t\t\t\tThe Site may include links to other websites (each, a “Third Party Site”). We do not control or endorse any Third Party Site, and You agree that We are not responsible for the availability or contents of such Third Party Sites. Your use of a Third Party Site is at Your own risk. You may not distribute, sell, rent, sublicense or lease such Third Party Content, in whole or in part, to any third party; and You may not use it for any other purpose other than Your personal, non-commercial use.\r\n\t\t\t\t\t</p>\r\n\t\t\t\t\t<p class=\"mb30\">\r\n\t\t\t\t\t\t<span><b>23. ADDITIONAL TERMS </b></span>\r\n\t\t\t\t\t</p>\r\n\t\t\t\t\t<p class=\"mb30\">\r\n\t\t\t\t\tYou are solely responsible for Your postings on SalonHome Sites. SalonHome is not to be considered a principal or an employer with respect to Your use of any SalonHome Site and SalonHome shall not be responsible for any contracting decisions, for whatever reason, made by any entity posting Site Leases on any SalonHome Site.\r\n\t\t\t\t\t</p>\r\n\t\t\t\t\t<p class=\"mb30\">\r\n\t\t\t\t\tYou understand and acknowledge that if You cancel Your SalonHome account or Your SalonHome account is terminated, all Your account information from SalonHome, including saved Site Lease Content, network contacts, and email mailing lists, will be marked as deleted in and may be deleted from SalonHome’s databases. Information may continue to be available for some period of time because of delays in propagating such deletion through SalonHome’s web servers.\r\n\t\t\t\t\t</p>\r\n\t\t\t\t\t<p class=\"mb30\">\r\n\t\t\t\t\tIn order to protect our SalonHome Users from commercial advertising or solicitation, SalonHome reserves the right to restrict the number of e-mails sent to Users to a number which SalonHome deems appropriate in its sole discretion. You shall use the SalonHome Networking and Profiles in accordance with all applicable privacy and data protection laws. \r\n\t\t\t\t\t</p>\r\n\t\t\t\t\t<p class=\"mb30\">\r\n\t\t\t\t\tSite Lease postings\r\n\t\t\t\t\t</p>\r\n\t\t\t\t\t<p class=\"mb30\">\r\n\t\t\t\t\tA Site Lease posting may not contain:\r\n\t\t\t\t\t</p>\r\n\t\t\t\t\t<p class=\"mb30\">\r\n\t\t\t\t\t(a) any hyperlinks, other than those specifically authorized by SalonHome;\r\n\t\t\t\t\t</p>\r\n\t\t\t\t\t<p class=\"mb30\">\r\n\t\t\t\t\t(b) misleading, unreadable, or “hidden” keywords, repeated keywords or keywords that are irrelevant to the Site Lease opportunity being presented, as determined in SalonHome’s reasonable discretion;\r\n\t\t\t\t\t</p>\r\n\t\t\t\t\t<p class=\"mb30\">\r\n\t\t\t\t\t(c) the names, logos or trademarks of unaffiliated companies other than those of your customer save where expressly agreed by SalonHome;\r\n\t\t\t\t\t</p>\r\n\t\t\t\t\t<p class=\"mb30\">\r\n\t\t\t\t\t(d) the names of cities, states, towns or countries that are unrelated to the posting;\r\n\t\t\t\t\t</p>\r\n\t\t\t\t\t<p class=\"mb30\">\r\n\t\t\t\t\t(e) more than one Site Lease or Site Lease description, more than one location, or more than one Site Lease category, unless the product so allows;\r\n\t\t\t\t\t</p>\r\n\t\t\t\t\t<p class=\"mb30\">\r\n\t\t\t\t\t(f) inaccurate, false, or misleading information; and\r\n\t\t\t\t\t</p>\r\n\t\t\t\t\t<p class=\"mb30\">\r\n\t\t\t\t\t(g) material or links to material that exploits people in a sexual, violent or other manner, or solicits personal information from anyone under 18.\r\n\t\t\t\t\t</p>\r\n\t\t\t\t\t<p class=\"mb30\">\r\n\t\t\t\t\tYou may not use Your SalonHome Site Lease posting, SalonHome Networking, or Profiles to:\r\n\t\t\t\t\t</p>\r\n\t\t\t\t\t<p class=\"mb30\">\r\n\t\t\t\t\t(a) post Site Leases in a manner that does not comply with applicable local, national and international laws, including but not limited to laws relating to labor and contracting, equal contracting opportunity and contracting eligibility requirements, data privacy, data access and use, and intellectual property;\r\n\t\t\t\t\t</p>\r\n\t\t\t\t\t<p class=\"mb30\">\r\n\t\t\t\t\t(b) post Site Leases that require citizenship of any particular country or lawful permanent residence in a country as a condition of contracting, unless otherwise required in order to comply with law, regulations, executive order, or federal, state or local government contract;\r\n\t\t\t\t\t</p>\r\n\t\t\t\t\t<p class=\"mb30\">\r\n\t\t\t\t\t(c) post Site Leases that include any screening requirement or criterion in connection with a Site Lease posting where such requirement or criterion is not an actual and legal requirement of the posted Site Lease;\r\n\t\t\t\t\t</p>\r\n\t\t\t\t\t<p class=\"mb30\">\r\n\t\t\t\t\t(d) with respect to Profiles, determine a consumer’s eligibility for: (i) credit or insurance for person, family, or household purposes; (ii) contracting; or (iii) a government license of benefit.\r\n\t\t\t\t\t</p>\r\n\t\t\t\t\t<p class=\"mb30\">\r\n\t\t\t\t\t(e) post Site Leases or other advertisements for competitors of SalonHome or post Site Leases or other content that contains links to any site competitive with SalonHome;\r\n\t\t\t\t\t</p>\r\n\t\t\t\t\t<p class=\"mb30\">\r\n\t\t\t\t\t(f) sell, promote or advertise products or services;\r\n\t\t\t\t\t</p>\r\n\t\t\t\t\t<p class=\"mb30\">\r\n\t\t\t\t\t(g) post any franchise, pyramid scheme, “club membership”, distributorship, multi-level marketing opportunity, or sales representative agency arrangement;\r\n\t\t\t\t\t</p>\r\n\t\t\t\t\t<p class=\"mb30\">\t\t\t\t\t\t\r\n\t\t\t\t\t(h) post any business opportunity that requires an up front or periodic payment or requires recruitment of other members, sub-distributors or sub-agents;\r\n\t\t\t\t\t</p>\r\n\t\t\t\t\t<p class=\"mb30\">\t\t\t\t\t\t\r\n\t\t\t\t\t(i) post Site Leases on any SalonHome Site for modeling, acting, talent or entertainment agencies or talent scouting positions;\r\n\t\t\t\t\t</p>\r\n\t\t\t\t\t<p class=\"mb30\">\t\t\t\t\t\t\r\n\t\t\t\t\t(j) advertise sexual services or seek employees for Site Leases of a sexual nature;\r\n\t\t\t\t\t</p>\r\n\t\t\t\t\t<p class=\"mb30\">\t\t\t\t\t\t\r\n\t\t\t\t\t(k) request the use of human body parts or the donation of human parts, including, without limitation, reproductive services such as egg donation and surrogacy;\r\n\t\t\t\t\t</p>\r\n\t\t\t\t\t<p class=\"mb30\">\t\t\t\t\t\t\r\n\t\t\t\t\t(l) endorse a particular political party, political agenda, political position or issue;\r\n\t\t\t\t\t</p>\r\n\t\t\t\t\t<p class=\"mb30\">\t\t\t\t\t\t\r\n\t\t\t\t\t(m) promote a particular religion;\r\n\t\t\t\t\t</p>\r\n\t\t\t\t\t<p class=\"mb30\">\t\t\t\t\t\t\r\n\t\t\t\t\t(n) post Site Leases located in countries subject to economic sanctions of the United States Government; and\r\n\t\t\t\t\t</p>\r\n\t\t\t\t\t<p class=\"mb30\">\t\t\t\t\t\t\r\n\t\t\t\t\t(o) except where allowed by applicable law, post Site Leases which require the person seeking the Site Lease to provide information relating to the person’s (i) racial or ethnic origin, (ii) political beliefs, (iii) philosophical or religious beliefs, (iv) membership in a trade union, (v) physical or mental health, (vi) sexual life, (vii) the commission of criminal offenses or proceedings, or (vii) age.\r\n\t\t\t\t\t</p>\r\n\t\t\t\t\t<p class=\"mb30\">\t\t\t\t\t\t\r\n\t\t\t\t\tSalonHome reserves the right to remove any Site Lease posting or content from any SalonHome Site, which in the reasonable exercise of SalonHome’s discretion, does not comply with the above Terms, or if any content is posted that SalonHome believes is not in the best interest of SalonHome.\r\n\t\t\t\t\t</p>\r\n\t\t\t\t\t<p class=\"mb30\">\t\t\t\t\t\t\r\n\t\t\t\t\tIf, at any time during Your use of the SalonHome Services, You made a misrepresentation of fact to SalonHome or otherwise misled SalonHome in regards to the nature of Your business activities, SalonHome will have grounds to terminate Your use of the SalonHome Services.\r\n\t\t\t\t\t</p>\r\n\t\t\t\t\t<p class=\"mb30\">\t\t\t\t\t\t\r\n\t\t\t\t\tSalonHome Database\r\n\t\t\t\t\t</p>\r\n\t\t\t\t\t<p class=\"mb30\">\t\t\t\t\t\t\r\n\t\t\t\t\tYou shall use the SalonHome Database as provided in these Terms and in any contract You have with SalonHome. You shall use the SalonHome Database in accordance with all applicable privacy and data protection laws, and You agree You shall not further disclose any of the data from SalonHome Database to any third party, unless You are an authorized recruitment agency, staffing agency, advertising or other agency, or using the SalonHome Database explicitly for contracting purposes.\r\n\t\t\t\t\t</p>\r\n\t\t\t\t\t<p class=\"mb30\">\t\t\t\t\t\t\r\n\t\t\t\t\tYou shall take appropriate physical, technical, and administrative measures to protect the data You have obtained from SalonHome Database from loss, misuse, unauthorized access, disclosure, alteration or destruction. You shall not share Database license login credentials with any other party, nor share Database pay-per-view license login credentials with any party.\r\n\t\t\t\t\t</p>\r\n\t\t\t\t\t<p class=\"mb30\">\t\t\t\t\t\t\r\n\t\t\t\t\tThe SalonHome Database shall not be used:\r\n\t\t\t\t\t</p>\r\n\t\t\t\t\t<p class=\"mb30\">\t\t\t\t\t\t\r\n\t\t\t\t\t(a) for any purpose other than as a SalonHome host/contractor/Site Lease seeker seeking contractors/temporary salon and barbershop space, including but not limited to advertising promotions, products, or services to any Site Leaseholders;\r\n\t\t\t\t\t</p>\r\n\t\t\t\t\t<p class=\"mb30\">\t\t\t\t\t\t\r\n\t\t\t\t\t(b) to make unsolicited phone calls or faxes or send unsolicited mail, email, or newsletters to Users or to contact any individual unless they have agreed to be contacted (where consent is required or, if express consent is not required, who has not informed you that they do not want to be contacted); or\r\n\t\t\t\t\t</p>\r\n\t\t\t\t\t<p class=\"mb30\">\t\t\t\t\t\t\r\n\t\t\t\t\t(c) to source workers or to contact Users in regards to career fairs and business opportunities prohibited by Section 3.\r\n\t\t\t\t\t</p>\r\n\t\t\t\t\t<p class=\"mb30\">\t\t\t\t\t\t\r\n\t\t\t\t\tIn order to ensure a safe and effective experience for all of our customers, SalonHome reserves the right to limit the amount of data (including Site Lease views) that may be accessed by You in any given time period. These limits may be amended in SalonHome’s sole discretion from time to time.\r\n\t\t\t\t\t</p>\r\n\t\t\t\t\t<p class=\"mb30\">\r\n\t\t\t\t\t\t<span><b>23.1. ADDITIONAL TERMS APPLICABLE TO SITE LEASE SEEKERS </b></span>\r\n\t\t\t\t\t</p>\r\n\t\t\t\t\t<p class=\"mb30\">\t\t\t\t\t\t\r\n\t\t\t\t\tWhen You register with any SalonHome Site, You will be asked to create an account and provide SalonHome with certain information including, without limitation, a valid email address and cosmetology license number (Your “Information”).\r\n\t\t\t\t\t</p>\r\n\t\t\t\t\t<p class=\"mb30\">\t\t\t\t\t\t\r\n\t\t\t\t\tAny Profile You submit must be accurate and describe You, an individual person. The Profile requires standard fields to be completed and you may not include in these fields any telephone numbers, street addresses, email addresses or other means of contacting You, other than Your last name and URLs.\r\n\t\t\t\t\t</p>\r\n\t\t\t\t\t<p class=\"mb30\">\t\t\t\t\t\t\r\n\t\t\t\t\tYou acknowledge and agree that You are solely responsible for the form, content and accuracy of any Site Lease or material contained therein placed by You on the SalonHome Sites.\r\n\t\t\t\t\t</p>\r\n\t\t\t\t\t<p class=\"mb30\">\t\t\t\t\t\t\r\n\t\t\t\t\tSalonHome reserves the right to offer third party services and products to You based on the preferences that You identify in Your registration and at any time thereafter or you have agreed to receive, such offers may be made by SalonHome or by third parties. Please see SalonHome’s Privacy Policy, for further details regarding Your Information.\r\n\t\t\t\t\t</p>\r\n\t\t\t\t\t<p class=\"mb30\">\t\t\t\t\t\t\r\n\t\t\t\t\tYou understand and acknowledge that You have no ownership rights in Your account and that if You cancel Your SalonHome account or Your SalonHome account is terminated, all Your account information from SalonHome, including Site Lease Content, Profiles, ratings, saved Site Leases, questionnaires will be marked as deleted in and may be deleted from SalonHome’s databases and will be removed from any public area of the SalonHome Sites. Information may continue to be available for some period of time because of delays in propagating such deletion through SalonHome’s web servers. In addition, third parties may retain saved copies of Your Information.\r\n\t\t\t\t\t</p>\r\n\t\t\t\t\t<p class=\"mb30\">\t\t\t\t\t\t\r\n\t\t\t\t\tSalonHome reserves the right to delete Your account and all of Your Information after a significant duration of inactivity.\r\n\t\t\t\t\t</p>\r\n\t\t\t\t\t<p class=\"mb30\">\r\n\t\t\t\t\t\t<span><b>24. RELEASE.</b></span>\r\n\t\t\t\t\t</p>\r\n\t\t\t\t\t<p class=\"mb30\">\t\t\t\t\t\t\r\n\t\t\t\t\tProfessional and Business Account such as hair, nails, barber, makeup, spa, fitness and photography on the Site are solely responsible for their interactions with You and any and all claims, injuries, illnesses, damages, liabilities, and costs (“Claims”) suffered by You as a result of Your interaction with or visit to any Professional or Business Account, whether online or physical location(s), or from any product or service of any Professional or Business Account. You hereby release SalonHome from any and all such Claims. IN CONNECTION WITH THE FOREGOING, IF YOU ARE A CALIFORNIA RESIDENT, YOU HEREBY WAIVE CALIFORNIA CIVIL CODE SECTION 1542, WHICH STATES: “A GENERAL RELEASE DOES NOT EXTEND TO CLAIMS WHICH THE CREDITOR DOES NOT KNOW OR SUSPECT TO EXIST IN HIS OR HER FAVOR AT THE TIME OF EXECUTING THE RELEASE, WHICH, IF KNOWN BY HIM OR HER MUST HAVE MATERIALLY AFFECTED HIS OR HER SETTLEMENT WITH THE DEBTOR.” You hereby expressly waive and relinquish all rights and benefits under that section and any law of any jurisdiction of similar effect with respect to the release of any unknown or unsuspected claims You may have against SalonHome pertaining to the subject matter of this Section 36.\r\n\t\t\t\t\t</p>\r\n\t\t\t\t\t<p class=\"mb30\">\r\n\t\t\t\t\t\t<span><b>25. CHOICE OF LAW AND VENUE.</b></span>\r\n\t\t\t\t\t</p>\r\n\t\t\t\t\t<p class=\"mb30\">\t\t\t\t\t\t\r\n\t\t\t\t\tIf there is any dispute about or involving the Site or SalonHome, You agree that any such dispute will be exclusively governed by the laws of the State of Delaware without regard to its conflict of law provisions. You agree to the personal and exclusive jurisdiction in, and the exclusive venue of, the state and federal courts in and for the State of Delaware.\r\n\t\t\t\t\t</p>\r\n\t\t\t\t\t<p class=\"mb30\">\t\t\t\t\t\t\r\n\t\t\t\t\tThe Parties do not intend for this provision to negate or limit any provision of this User Agreement, nor of any other agreement between the Parties, that requires (1) mediation, arbitration or other non-judicial dispute resolution procedure; nor (2) non-binding action to attempt to resolve a dispute by agreement, such as (such as) escalation of the dispute to higher levels of the Parties’ managements; early neutral evaluation; negotiation; and/or remediation\r\n\t\t\t\t\t</p>\r\n\t\t\t\t\t<p class=\"mb30\">\r\n\t\t\t\t\t\t<span><b>26. MEDIATION - ARBITRATION.</b></span>\r\n\t\t\t\t\t</p>\r\n\t\t\t\t\t<p class=\"mb30\">\t\t\t\t\t\t\r\n\t\t\t\t\tIf any dispute, controversy or claim arising out of or relating to the Site, SalonHome or this User Agreement or the breach, termination, non-renewal of this User Agreement or the validity of this User Agreement cannot be settled through negotiation, the Parties agree first to try in good faith to settle the dispute by mediation administered by the American Arbitration Association under its Commercial Mediation Procedures before resorting to arbitration, litigation, or some other dispute resolution procedure.\r\n\t\t\t\t\t</p>\r\n\t\t\t\t\t<p class=\"mb30\">\t\t\t\t\t\t\r\n\t\t\t\t\tIf mediation fails to settle the dispute, the Parties agree the dispute shall be finally settled by arbitration administered by the American Arbitration Association in accordance with its Commercial Arbitration Rules, and judgment on the award rendered by the arbitrator(s) may be entered in any court having jurisdiction thereof.\r\n\t\t\t\t\t</p>\r\n\t\t\t\t\t<p class=\"mb30\">\t\t\t\t\t\t\r\n\t\t\t\t\tTHE PARTIES HEREBY KNOWINGLY AND VOLUNTARILY AND IRREVOCABLY WAIVE THEIR RIGHT TO A TRIAL BY JURY and agree that if the foregoing binding arbitration provision is determined for any reason to be unenforceable or inapplicable to a particular dispute, then such dispute shall be decided solely by a judge, without the use of a jury, sitting in a court of competent jurisdiction.\r\n\t\t\t\t\t</p>\r\n\t\t\t\t\t<p class=\"mb30\">\t\t\t\t\t\t\r\n\t\t\t\t\tIn any action to enforce any right or remedy under this User Agreement or to interpret any provision of this User Agreement, the prevailing Party shall be entitled to recover its costs, including reasonable attorneys’ fees.\r\n\t\t\t\t\t</p>\r\n\t\t\t\t\t<p class=\"mb30\">\r\n\t\t\t\t\t\t<span><b>27. MISCELLANEOUS.</b></span>\r\n\t\t\t\t\t</p>\r\n\t\t\t\t\t<p class=\"mb30\">\t\t\t\t\t\t\r\n\t\t\t\t\t(a)\tNo agency, partnership, joint venture or employment is created as a result of this User Agreement, and You do not have any authority of any kind to bind Us in any respect whatsoever.\r\n\t\t\t\t\t</p>\r\n\t\t\t\t\t<p class=\"mb30\">\t\t\t\t\t\t\r\n\t\t\t\t\t(b) We may provide You with notices, including those regarding changes to this User Agreement by email, regular mail or postings on the Site, in Our sole discretion.\r\n\t\t\t\t\t</p>\r\n\t\t\t\t\t<p class=\"mb30\">\t\t\t\t\t\t\r\n\t\t\t\t\t(c)\tExcept as otherwise stated nothing herein is intended, nor will be deemed, to confer rights or remedies upon any third party.\t\r\n\t\t\t\t\t</p>\r\n\t\t\t\t\t<p class=\"mb30\">\t\t\t\t\t\t\r\n\t\t\t\t\t(d)\tThis User Agreement contains the entire agreement between You and Us regarding the use of the Site, and supersedes any prior agreement between You and Us on such subject matter. The Parties acknowledge that no reliance is placed on any representation made but not expressly contained in this User Agreement.\r\n\t\t\t\t\t</p>\r\n\t\t\t\t\t<p class=\"mb30\">\t\t\t\t\t\t\r\n\t\t\t\t\t(e) Any failure on Our part to exercise or enforce any right or provision of this User Agreement shall not constitute a waiver of such right or provision. The failure of either Party to exercise in any respect any right provided for herein shall not be deemed a waiver of any further rights hereunder.\r\n\t\t\t\t\t</p>\r\n\t\t\t\t\t<p class=\"mb30\">\t\t\t\t\t\t\r\n\t\t\t\t\t(f) If any provision of this User Agreement is found to be unenforceable or invalid under any applicable law or be so held by applicable court decision, such unenforceability or invalidity shall not render this User Agreement unenforceable or invalid as a whole. In such event, such provision shall be changed and interpreted so as to best accomplish the objectives of such provision within the limits of applicable law or applicable court decision to the minimum extent necessary so that this User Agreement shall otherwise remain in full force and effect and enforceable.\r\n\t\t\t\t\t</p>\r\n\t\t\t\t\t<p class=\"mb30\">\t\t\t\t\t\t\r\n\t\t\t\t\t(g)\tThis User Agreement is not assignable, transferable or sublicensable by You, except with SalonHome’s prior written consent, but may be assigned or transferred by Us without restriction. Any assignment attempted to be made by You in violation of this User Agreement shall be void.\r\n\t\t\t\t\t</p>\r\n\t\t\t\t\t<p class=\"mb30\">\t\t\t\t\t\t\r\n\t\t\t\t\t(h)\tThe section titles in this User Agreement are for convenience only and have no legal or contractual effect.\r\n\t\t\t\t\t</p>\r\n\r\n\t\r\n\r\n\r\n\r\n\t\t\t\t\r\n\r\n\t\t\t\t</div>\r\n\r\n\t\t\t\t<div class=\"col-sm-12 col-md-8 col-md-offset-2 text-center mb40\"><hr class=\"hr_styles\" /></div>\r\n\r\n\t\t\t</div>\r\n\r\n\t\t</div>\r\n\t</section>\r\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/pages/try-it-free/try-it-free.component.html":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/pages/try-it-free/try-it-free.component.html ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"wow fadeIn\" data-wow-duration=\"2000\" >\n\n\t<section class=\"c_relative\">\n\t    <div class=\"container\">\n\t        <div class=\"row\">\n\t            <div class=\"col-xs-12 col-sm-6 col-sm-offset-6 mb40 paragraphs_layout p95\">\n\t\t                \n\t\t            <div class=\"col-xs-12 pl20 pr20\">\n\n\t\t            \t<div class=\"top-section col-sm-12\">\n\t\t\t\t\t\t\t<div class=\"title text-center\">\n\t\t\t\t\t\t\t\t<h2><span><b class=\"theme_color\">Join our Community!</b></span></h2>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t<div class=\"layout-form mb20 text-center\">\n\t\t\t\t\t\t\t<form id=\"form-try\" [formGroup]=\"form\" class=\"formflow\">\n\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t        \t\t\t\t<div class=\"col-sm-12\">\n\t\t\t\t\t        \t\t\t<p class=\"mb20\">\nWe're looking for community members to provide feedback, get fixes and new features early. Get the latest updates by email. Talk with us about your experience. Get some rewards!\n\n</p>\n\n\t\t\t\t\t        \t\t\t<p class=\"mb20\">\n\t\t\t\t\t\t\t\t\t\tThis program will still be in place after the initial release, for a limited time.\n\t\t\t\t\t\t\t\t\t\t</p>\n\t\t\t        \t\t\t\t</div>\n\t\t\t        \t\t\t</div>\n\t\t\t        \t\t\t<div class=\"form-group\">\n\t\t\t        \t\t\t\t<div class=\"col-sm-12\">\n\t\t\t        \t\t\t\t\t<p class=\"mb0\">Select your type of account:</p>\n\t\t\t        \t\t\t\t</div>\n\t\t\t        \t\t\t</div>\n\t\t\t        \t\t\t<div class=\"form-group\">\n\t\t\t        \t\t\t\t<div class=\"col-sm-12\">\n\t\t\t        \t\t\t\t\t<div class=\"radio-group\">\n\t\t\t        \t\t\t\t\t\t<div class=\"col-md-5 p0\">\n\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"radio\" id=\"field_rd_clients\" name=\"type_account\" value=\"Client\" class=\"action_typeaccount\" [ngModel]=\"type_account_value\" (change)=\"onSelectionChange($event)\" [ngModelOptions]=\"{standalone: true}\"/>\n\t\t\t\t\t\t\t\t\t\t\t\t<label for=\"field_rd_clients\" class=\"cleft\">Customer</label>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-2 p0 medium-space\">\n\t\t\t\t\t\t\t\t\t\t\t\t<p class=\"medium mb0\">OR</p>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-5 p0\">\n\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"radio\" id=\"field_rd_professional\" name=\"type_account\" value=\"Professional\" class=\"action_typeaccount\" [ngModel]=\"type_account_value\" (change)=\"onSelectionChange($event)\" [ngModelOptions]=\"{standalone: true}\" />\n\t\t\t\t\t\t\t\t\t\t\t\t<label for=\"field_rd_professional\" class=\"cright\">Professional</label>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t        \t\t\t\t</div>\n\t\t\t        \t\t\t</div>\n\n\t\t\t        \t\t\t<input type=\"hidden\" name=\"type_account_value\" id=\"type_account_value\">\n\n\t\t\t        \t\t\t<div class=\"form-group display_control_professional\" style=\"display: none;\">\n\t\t\t        \t\t\t\t<div class=\"col-sm-12\">\n\t\t\t\t        \t\t\t\t<label for=\"field_type\" class=\"select_style\">\n\t\t\t\t        \t\t\t\t\t<span class=\"form-control mob_control set\">Type of services</span>\n\t\t\t\t        \t\t\t\t\t<select id=\"type_services\" formControlName=\"type_services\" class=\"form-control mob_control action_change_select\" >\n\t\t\t\t\t        \t\t\t\t\t<option value=\"\">Type of services</option>\n\t\t\t\t\t        \t\t\t\t\t<option value=\"Hair Stylist\">Hair</option>\n\t\t\t\t\t        \t\t\t\t\t<option value=\"Barbers\">Barber</option>\n\t\t\t\t\t        \t\t\t\t\t<option value=\"Massage Therapist\">Massage</option>\n\t\t\t\t\t        \t\t\t\t\t<option value=\"Spa Services\">Spa</option>\n\t\t\t\t\t        \t\t\t\t</select>\n\t\t\t\t        \t\t\t\t</label>\n\t\t\t        \t\t\t\t</div>\n\t\t\t        \t\t\t</div>\n\n\t\t\t        \t\t\t<div class=\"form-group has-feedback\" [ngClass]=\"displayFieldCss('first_name')\">\n\t\t\t        \t\t\t\t<div class=\"col-sm-12\">\n\t\t\t        \t\t\t\t\t<input  id=\"first_name\" formControlName=\"first_name\" type=\"text\" placeholder=\"First Name\" class=\"form-control mob_control\" required/>\n\t\t\t        \t\t\t\t\t<app-field-error-display \n\t\t\t        \t\t\t\t\t\t[displayError]=\"isFieldValid('first_name')\" \n\t\t\t        \t\t\t\t\t\terrorMsg=\"Please enter your first name\">\n\t\t\t        \t\t\t\t\t</app-field-error-display>\n\t\t\t        \t\t\t\t</div>\n\t\t\t        \t\t\t</div>\n\n\t\t\t        \t\t\t<div class=\"form-group has-feedback\" [ngClass]=\"displayFieldCss('last_name')\">\n\t\t\t        \t\t\t\t<div class=\"col-sm-12\">\n\t\t\t        \t\t\t\t\t<input id=\"last_name\" formControlName=\"last_name\" type=\"text\" placeholder=\"Last Name\" class=\"form-control mob_control\" required/>\n\t\t\t        \t\t\t\t\t<app-field-error-display \n\t\t\t        \t\t\t\t\t\t[displayError]=\"isFieldValid('last_name')\" \n\t\t\t        \t\t\t\t\t\terrorMsg=\"Please enter your last name\">\n\t\t\t        \t\t\t\t\t</app-field-error-display>\n\t\t\t        \t\t\t\t</div>\n\t\t\t        \t\t\t</div>\n\n\t\t\t        \t\t\t<div class=\"form-group has-feedback\" [ngClass]=\"displayFieldCss('email')\">\n\t\t\t        \t\t\t\t<div class=\"col-sm-12\">\n\t\t\t        \t\t\t\t\t<input id=\"email\" formControlName=\"email\" type=\"text\" placeholder=\"Email\" class=\"form-control mob_control\" pattern=\"^\\w+([\\.-]?\\w+)*@\\w+([\\.-]?\\w+)*(\\.\\w{2,3})+$\" required/>\n\t\t\t        \t\t\t\t\t<app-field-error-display \n\t\t\t        \t\t\t\t\t\t[displayError]=\"isFieldValid('email')\" \n\t\t\t        \t\t\t\t\t\terrorMsgHtml=\"Please select a valid email.<br />Please select your email\">\n\t\t\t        \t\t\t\t\t</app-field-error-display>\n\t\t\t        \t\t\t\t</div>\n\t\t\t        \t\t\t</div>\n\n\t\t\t        \t\t\t<div class=\"col-md-12\">\n\t\t\t        \t\t\t\t<div class=\"form-group has-feedback\" [ngClass]=\"displayFieldCss('city')\" >\n\t\t\t\t        \t\t\t\t<label for=\"field_city\" class=\"select_style\">\n\t\t\t\t        \t\t\t\t\t<span class=\"form-control mob_control set alignleft\">Select your city</span>\n\t\t\t\t\t        \t\t\t\t<select formControlName=\"city\" id=\"city\" class=\"form-control mob_control action_change_select\" >\n\t\t\t\t\t        \t\t\t\t\t<option value=\"\">Select your City</option>\n\t\t        \t\t\t\t\t\t\t\t<option value=\"Atlanta\">Atlanta</option>\n\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"Baltimore\">Baltimore</option>\n\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"Birmingham\">Birmingham</option>\n\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"Boston\">Boston</option>\n\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"Charlotte\">Charlotte</option>\n\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"Chicago\">Chicago</option>\n\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"Cincinnati\">Cincinnati</option>\n\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"Cleveland\">Cleveland</option>\n\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"Dallas\">Dallas</option>\n\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"Denver\">Denver</option>\n\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"Detroit\">Detroit</option>\n\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"Greenville\">Greenville</option>\n\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"Houston\">Houston</option>\n\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"Indianapolis\">Indianapolis</option>\n\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"Jacksonville\">Jacksonville</option>\n\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"Kansas City\">Kansas City</option>\n\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"Las Vegas\">Las Vegas</option>\n\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"Los Angeles\">Los Angeles</option>\n\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"Memphis\">Memphis</option>\n\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"Miami\">Miami</option>\n\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"Milwaukee\">Milwaukee</option>\n\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"Minneapolis\">Minneapolis</option>\n\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"Myrtle Beach\">Myrtle Beach</option>\n\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"Nashville\">Nashville</option>\n\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"New Jersey\">New Jersey</option>\n\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"New Orleans\">New Orleans</option>\n\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"New York City\">New York City</option>\n\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"Orlando\">Orlando</option>\n\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"Philadelphia\">Philadelphia</option>\n\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"Phoenix\">Phoenix</option>\n\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"Pittsburgh\">Pittsburgh</option>\n\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"Portland\">Portland</option>\n\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"Raleigh\">Raleigh</option>\n\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"Richmond\">Richmond</option>\n\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"Sacramento\">Sacramento</option>\n\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"Salt Lake City\">Salt Lake City</option>\n\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"San Antonio\">San Antonio</option>\n\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"San Diego\">San Diego</option>\n\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"San Francisco\">San Francisco</option>\n\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"Seattle\">Seattle</option>\n\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"St. Louis\">St. Louis</option>\n\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"Tampa\">Tampa</option>\n\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"Virginia Beach\">Virginia Beach</option>\n\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"Washington Dc\">District of Columbia</option>\n\t\t\t\t\t        \t\t\t\t</select>\n\t\t\t\t        \t\t\t\t</label>\n\t\t\t\t        \t\t\t\t<app-field-error-display \n\t\t\t        \t\t\t\t\t\t[displayError]=\"isFieldValid('city')\" \n\t\t\t        \t\t\t\t\t\terrorMsg=\"Please select your city\">\n\t\t\t        \t\t\t\t\t</app-field-error-display>\n\t\t\t        \t\t\t\t</div>\n\t\t\t        \t\t\t</div>\n\n\t\t\t\t        \t\t<div class=\"form-group\" style=\"clear: both;\">\n\t\t\t\t        \t\t\t<p class=\"text_3\">\nBy tapping Submit, you agree to our terms of use. You also agree to receive emails \nperiodically informing you about our official launch.\n\t\t\t\t        \t\t\t</p>\n\t\t\t        \t\t\t</div>\n\n\t\t\t        \t\t\t<div class=\"form-group\">\n\t\t\t        \t\t\t\t<div class=\"col-sm-12\">\n\t\t\t        \t\t\t\t\t<input type=\"hidden\" name=\"send_submit_try\" id=\"send_submit_try\" value=\"1\"/>\n\t\t\t        \t\t\t\t\t<button (click)=\"onSubmit()\" id=\"submit_register\" class=\"btn theme_btn tinitial size-big-2 pu80 btn-submit\"><b><i class=\"fa fa-paper-plane\"></i> Submit</b></button>\n\t\t\t        \t\t\t\t</div>\n\t\t\t        \t\t\t</div>\n\n\t\t\t        \t\t\t<div class=\"set-response\"></div>\n\t\t\t\t    \t\t</form>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\n\t            </div>\n\t        </div>\n\t    </div>\n\t    <div id=\"content-photo-beta-pro\" class=\"col-xs-12 col-sm-6 col-sm-offset-0 feature-callout-image-pull feature-callout-cover wow fadeInLeft hide_responsive\"   style=\"background-position: center top;\" role=\"img\" aria-label=\"\"></div>\n\t</section>\n</div>"

/***/ }),

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent.prototype.ngOnInit = function () {
    };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ngx_swiper_wrapper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-swiper-wrapper */ "./node_modules/ngx-swiper-wrapper/dist/ngx-swiper-wrapper.es5.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_routes__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app.routes */ "./src/app/app.routes.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_layout_header_header_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/layout/header/header.component */ "./src/app/components/layout/header/header.component.ts");
/* harmony import */ var _components_layout_footer_footer_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/layout/footer/footer.component */ "./src/app/components/layout/footer/footer.component.ts");
/* harmony import */ var _components_pages_home_home_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/pages/home/home.component */ "./src/app/components/pages/home/home.component.ts");
/* harmony import */ var _components_error_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/error/not-found/not-found.component */ "./src/app/components/error/not-found/not-found.component.ts");
/* harmony import */ var _components_error_field_error_display_field_error_display_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/error/field-error-display/field-error-display.component */ "./src/app/components/error/field-error-display/field-error-display.component.ts");
/* harmony import */ var _components_pages_about_us_about_us_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/pages/about-us/about-us.component */ "./src/app/components/pages/about-us/about-us.component.ts");
/* harmony import */ var _components_pages_careers_careers_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/pages/careers/careers.component */ "./src/app/components/pages/careers/careers.component.ts");
/* harmony import */ var _components_pages_howitworks_howitworks_professionals_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/pages/howitworks/howitworks-professionals.component */ "./src/app/components/pages/howitworks/howitworks-professionals.component.ts");
/* harmony import */ var _components_pages_howitworks_howitworks_clients_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/pages/howitworks/howitworks-clients.component */ "./src/app/components/pages/howitworks/howitworks-clients.component.ts");
/* harmony import */ var _components_pages_services_services_body_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/pages/services/services-body.component */ "./src/app/components/pages/services/services-body.component.ts");
/* harmony import */ var _components_pages_services_services_availablespace_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./components/pages/services/services-availablespace.component */ "./src/app/components/pages/services/services-availablespace.component.ts");
/* harmony import */ var _components_pages_services_services_barbers_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./components/pages/services/services-barbers.component */ "./src/app/components/pages/services/services-barbers.component.ts");
/* harmony import */ var _components_pages_services_services_hair_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./components/pages/services/services-hair.component */ "./src/app/components/pages/services/services-hair.component.ts");
/* harmony import */ var _components_pages_services_services_massage_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./components/pages/services/services-massage.component */ "./src/app/components/pages/services/services-massage.component.ts");
/* harmony import */ var _components_pages_services_services_skin_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./components/pages/services/services-skin.component */ "./src/app/components/pages/services/services-skin.component.ts");
/* harmony import */ var _components_pages_services_services_makeup_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./components/pages/services/services-makeup.component */ "./src/app/components/pages/services/services-makeup.component.ts");
/* harmony import */ var _components_pages_services_services_nail_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./components/pages/services/services-nail.component */ "./src/app/components/pages/services/services-nail.component.ts");
/* harmony import */ var _components_pages_privacy_policy_privacy_policy_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./components/pages/privacy-policy/privacy-policy.component */ "./src/app/components/pages/privacy-policy/privacy-policy.component.ts");
/* harmony import */ var _components_pages_contact_us_contact_us_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./components/pages/contact-us/contact-us.component */ "./src/app/components/pages/contact-us/contact-us.component.ts");
/* harmony import */ var _components_pages_try_it_free_try_it_free_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./components/pages/try-it-free/try-it-free.component */ "./src/app/components/pages/try-it-free/try-it-free.component.ts");
/* harmony import */ var _components_pages_terms_terms_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./components/pages/terms/terms.component */ "./src/app/components/pages/terms/terms.component.ts");
/* harmony import */ var _components_pages_join_our_team_join_our_team_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./components/pages/join-our-team/join-our-team.component */ "./src/app/components/pages/join-our-team/join-our-team.component.ts");
/* harmony import */ var _components_pages_help_help_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./components/pages/help/help.component */ "./src/app/components/pages/help/help.component.ts");
/* harmony import */ var _components_pages_apply_careers_apply_careers_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./components/pages/apply-careers/apply-careers.component */ "./src/app/components/pages/apply-careers/apply-careers.component.ts");
/* harmony import */ var _components_layout_services_nav_services_nav_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./components/layout/services-nav/services-nav.component */ "./src/app/components/layout/services-nav/services-nav.component.ts");
/* harmony import */ var _components_pages_magazine_magazine_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./components/pages/magazine/magazine.component */ "./src/app/components/pages/magazine/magazine.component.ts");
/* harmony import */ var _components_pages_magazine_magazine_post_component__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./components/pages/magazine/magazine-post.component */ "./src/app/components/pages/magazine/magazine-post.component.ts");
/* harmony import */ var _components_pages_magazine_magazine_recent_component__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./components/pages/magazine/magazine-recent.component */ "./src/app/components/pages/magazine/magazine-recent.component.ts");
/* harmony import */ var _components_pages_search_search_component__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./components/pages/search/search.component */ "./src/app/components/pages/search/search.component.ts");
/* harmony import */ var _components_layout_left_nav_left_nav_component__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./components/layout/left-nav/left-nav.component */ "./src/app/components/layout/left-nav/left-nav.component.ts");
/* harmony import */ var _components_pages_events_events_component__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ./components/pages/events/events.component */ "./src/app/components/pages/events/events.component.ts");
/* harmony import */ var _components_pages_events_events_post_component__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ./components/pages/events/events-post.component */ "./src/app/components/pages/events/events-post.component.ts");
/* harmony import */ var _components_pages_events_events_recent_component__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ./components/pages/events/events-recent.component */ "./src/app/components/pages/events/events-recent.component.ts");
/* harmony import */ var _components_pages_download_download_component__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! ./components/pages/download/download.component */ "./src/app/components/pages/download/download.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");








var DEFAULT_SWIPER_CONFIG = {
    direction: 'horizontal',
    slidesPerView: 'auto'
};




























// import { UniversityComponent } from './components/pages/university/university.component';
// import { UniversityPostComponent } from './components/pages/university/university-post.component';
// import { UniversityRecentComponent } from './components/pages/university/university-recent.component';










var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"],
                _components_layout_header_header_component__WEBPACK_IMPORTED_MODULE_9__["HeaderComponent"],
                _components_layout_footer_footer_component__WEBPACK_IMPORTED_MODULE_10__["FooterComponent"],
                _components_pages_home_home_component__WEBPACK_IMPORTED_MODULE_11__["HomeComponent"],
                _components_error_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_12__["NotFoundComponent"],
                _components_error_field_error_display_field_error_display_component__WEBPACK_IMPORTED_MODULE_13__["FieldErrorDisplayComponent"],
                _components_pages_about_us_about_us_component__WEBPACK_IMPORTED_MODULE_14__["AboutUsComponent"],
                _components_pages_careers_careers_component__WEBPACK_IMPORTED_MODULE_15__["CareersComponent"],
                _components_pages_howitworks_howitworks_professionals_component__WEBPACK_IMPORTED_MODULE_16__["HowitworksProfessionalsComponent"],
                _components_pages_howitworks_howitworks_clients_component__WEBPACK_IMPORTED_MODULE_17__["HowitworksClientsComponent"],
                _components_pages_services_services_body_component__WEBPACK_IMPORTED_MODULE_18__["ServicesBodyComponent"],
                _components_pages_services_services_availablespace_component__WEBPACK_IMPORTED_MODULE_19__["ServicesAvailablespaceComponent"],
                _components_pages_services_services_barbers_component__WEBPACK_IMPORTED_MODULE_20__["ServicesBarbersComponent"],
                _components_pages_services_services_hair_component__WEBPACK_IMPORTED_MODULE_21__["ServicesHairComponent"],
                _components_pages_services_services_massage_component__WEBPACK_IMPORTED_MODULE_22__["ServicesMassageComponent"],
                _components_pages_services_services_nail_component__WEBPACK_IMPORTED_MODULE_25__["ServicesNailComponent"],
                _components_pages_services_services_skin_component__WEBPACK_IMPORTED_MODULE_23__["ServicesSkinComponent"],
                _components_pages_services_services_makeup_component__WEBPACK_IMPORTED_MODULE_24__["ServicesMakeupComponent"],
                _components_pages_privacy_policy_privacy_policy_component__WEBPACK_IMPORTED_MODULE_26__["PrivacyPolicyComponent"],
                _components_pages_contact_us_contact_us_component__WEBPACK_IMPORTED_MODULE_27__["ContactUsComponent"],
                _components_pages_try_it_free_try_it_free_component__WEBPACK_IMPORTED_MODULE_28__["TryItFreeComponent"],
                _components_pages_terms_terms_component__WEBPACK_IMPORTED_MODULE_29__["TermsComponent"],
                _components_pages_join_our_team_join_our_team_component__WEBPACK_IMPORTED_MODULE_30__["JoinOurTeamComponent"],
                _components_pages_help_help_component__WEBPACK_IMPORTED_MODULE_31__["HelpComponent"],
                _components_pages_apply_careers_apply_careers_component__WEBPACK_IMPORTED_MODULE_32__["ApplyCareersComponent"],
                _components_layout_services_nav_services_nav_component__WEBPACK_IMPORTED_MODULE_33__["ServicesNavComponent"],
                // UniversityComponent,
                // UniversityPostComponent,
                // UniversityRecentComponent,
                _components_pages_magazine_magazine_component__WEBPACK_IMPORTED_MODULE_34__["MagazineComponent"],
                _components_pages_magazine_magazine_post_component__WEBPACK_IMPORTED_MODULE_35__["MagazinePostComponent"],
                _components_pages_magazine_magazine_recent_component__WEBPACK_IMPORTED_MODULE_36__["MagazineRecentComponent"],
                _components_pages_search_search_component__WEBPACK_IMPORTED_MODULE_37__["SearchPostComponent"],
                _components_layout_left_nav_left_nav_component__WEBPACK_IMPORTED_MODULE_38__["LeftNavComponent"],
                _components_pages_events_events_component__WEBPACK_IMPORTED_MODULE_39__["EventsComponent"],
                _components_pages_events_events_post_component__WEBPACK_IMPORTED_MODULE_40__["EventsPostComponent"],
                _components_pages_events_events_recent_component__WEBPACK_IMPORTED_MODULE_41__["EventsRecentComponent"],
                _components_pages_download_download_component__WEBPACK_IMPORTED_MODULE_42__["DownloadComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"],
                _app_routes__WEBPACK_IMPORTED_MODULE_7__["routing"],
                ngx_swiper_wrapper__WEBPACK_IMPORTED_MODULE_5__["SwiperModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"]
            ],
            providers: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["Title"],
                _app_routes__WEBPACK_IMPORTED_MODULE_7__["appRoutingProviders"],
                { provide: _angular_common__WEBPACK_IMPORTED_MODULE_43__["LocationStrategy"], useClass: _angular_common__WEBPACK_IMPORTED_MODULE_43__["HashLocationStrategy"] },
                { provide: ngx_swiper_wrapper__WEBPACK_IMPORTED_MODULE_5__["SWIPER_CONFIG"],
                    useValue: DEFAULT_SWIPER_CONFIG }
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/app.routes.ts":
/*!*******************************!*\
  !*** ./src/app/app.routes.ts ***!
  \*******************************/
/*! exports provided: appRoutingProviders, routing */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "appRoutingProviders", function() { return appRoutingProviders; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routing", function() { return routing; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _components_pages_home_home_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/pages/home/home.component */ "./src/app/components/pages/home/home.component.ts");
/* harmony import */ var _components_error_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/error/not-found/not-found.component */ "./src/app/components/error/not-found/not-found.component.ts");
/* harmony import */ var _components_pages_about_us_about_us_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/pages/about-us/about-us.component */ "./src/app/components/pages/about-us/about-us.component.ts");
/* harmony import */ var _components_pages_careers_careers_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/pages/careers/careers.component */ "./src/app/components/pages/careers/careers.component.ts");
/* harmony import */ var _components_pages_howitworks_howitworks_professionals_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/pages/howitworks/howitworks-professionals.component */ "./src/app/components/pages/howitworks/howitworks-professionals.component.ts");
/* harmony import */ var _components_pages_howitworks_howitworks_clients_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/pages/howitworks/howitworks-clients.component */ "./src/app/components/pages/howitworks/howitworks-clients.component.ts");
/* harmony import */ var _components_pages_services_services_body_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/pages/services/services-body.component */ "./src/app/components/pages/services/services-body.component.ts");
/* harmony import */ var _components_pages_services_services_barbers_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/pages/services/services-barbers.component */ "./src/app/components/pages/services/services-barbers.component.ts");
/* harmony import */ var _components_pages_services_services_availablespace_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/pages/services/services-availablespace.component */ "./src/app/components/pages/services/services-availablespace.component.ts");
/* harmony import */ var _components_pages_services_services_hair_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/pages/services/services-hair.component */ "./src/app/components/pages/services/services-hair.component.ts");
/* harmony import */ var _components_pages_services_services_massage_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/pages/services/services-massage.component */ "./src/app/components/pages/services/services-massage.component.ts");
/* harmony import */ var _components_pages_services_services_skin_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/pages/services/services-skin.component */ "./src/app/components/pages/services/services-skin.component.ts");
/* harmony import */ var _components_pages_services_services_nail_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/pages/services/services-nail.component */ "./src/app/components/pages/services/services-nail.component.ts");
/* harmony import */ var _components_pages_services_services_makeup_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/pages/services/services-makeup.component */ "./src/app/components/pages/services/services-makeup.component.ts");
/* harmony import */ var _components_pages_privacy_policy_privacy_policy_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/pages/privacy-policy/privacy-policy.component */ "./src/app/components/pages/privacy-policy/privacy-policy.component.ts");
/* harmony import */ var _components_pages_contact_us_contact_us_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/pages/contact-us/contact-us.component */ "./src/app/components/pages/contact-us/contact-us.component.ts");
/* harmony import */ var _components_pages_try_it_free_try_it_free_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/pages/try-it-free/try-it-free.component */ "./src/app/components/pages/try-it-free/try-it-free.component.ts");
/* harmony import */ var _components_pages_terms_terms_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/pages/terms/terms.component */ "./src/app/components/pages/terms/terms.component.ts");
/* harmony import */ var _components_pages_join_our_team_join_our_team_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./components/pages/join-our-team/join-our-team.component */ "./src/app/components/pages/join-our-team/join-our-team.component.ts");
/* harmony import */ var _components_pages_help_help_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./components/pages/help/help.component */ "./src/app/components/pages/help/help.component.ts");
/* harmony import */ var _components_pages_apply_careers_apply_careers_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./components/pages/apply-careers/apply-careers.component */ "./src/app/components/pages/apply-careers/apply-careers.component.ts");
/* harmony import */ var _components_pages_magazine_magazine_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./components/pages/magazine/magazine.component */ "./src/app/components/pages/magazine/magazine.component.ts");
/* harmony import */ var _components_pages_magazine_magazine_post_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./components/pages/magazine/magazine-post.component */ "./src/app/components/pages/magazine/magazine-post.component.ts");
/* harmony import */ var _components_pages_search_search_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./components/pages/search/search.component */ "./src/app/components/pages/search/search.component.ts");
/* harmony import */ var _components_pages_events_events_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./components/pages/events/events.component */ "./src/app/components/pages/events/events.component.ts");
/* harmony import */ var _components_pages_events_events_post_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./components/pages/events/events-post.component */ "./src/app/components/pages/events/events-post.component.ts");
/* harmony import */ var _components_pages_download_download_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./components/pages/download/download.component */ "./src/app/components/pages/download/download.component.ts");






















// import { UniversityComponent } from './components/pages/university/university.component';
// import { UniversityPostComponent } from './components/pages/university/university-post.component';






var appRoutes = [
    { path: '', component: _components_pages_home_home_component__WEBPACK_IMPORTED_MODULE_1__["HomeComponent"] },
    { path: 'home', component: _components_pages_home_home_component__WEBPACK_IMPORTED_MODULE_1__["HomeComponent"] },
    { path: 'about-us', component: _components_pages_about_us_about_us_component__WEBPACK_IMPORTED_MODULE_3__["AboutUsComponent"] },
    { path: 'careers', component: _components_pages_careers_careers_component__WEBPACK_IMPORTED_MODULE_4__["CareersComponent"] },
    { path: 'how-it-works-professionals', component: _components_pages_howitworks_howitworks_professionals_component__WEBPACK_IMPORTED_MODULE_5__["HowitworksProfessionalsComponent"] },
    { path: 'how-it-works-clients', component: _components_pages_howitworks_howitworks_clients_component__WEBPACK_IMPORTED_MODULE_6__["HowitworksClientsComponent"] },
    { path: 'services-body', component: _components_pages_services_services_body_component__WEBPACK_IMPORTED_MODULE_7__["ServicesBodyComponent"] },
    { path: 'services-available-spaces', component: _components_pages_services_services_availablespace_component__WEBPACK_IMPORTED_MODULE_9__["ServicesAvailablespaceComponent"] },
    { path: 'services-hair', component: _components_pages_services_services_hair_component__WEBPACK_IMPORTED_MODULE_10__["ServicesHairComponent"] },
    { path: 'services-massage', component: _components_pages_services_services_massage_component__WEBPACK_IMPORTED_MODULE_11__["ServicesMassageComponent"] },
    { path: 'services-barbers', component: _components_pages_services_services_barbers_component__WEBPACK_IMPORTED_MODULE_8__["ServicesBarbersComponent"] },
    { path: 'services-nail', component: _components_pages_services_services_nail_component__WEBPACK_IMPORTED_MODULE_13__["ServicesNailComponent"] },
    { path: 'services-makeup', component: _components_pages_services_services_makeup_component__WEBPACK_IMPORTED_MODULE_14__["ServicesMakeupComponent"] },
    { path: 'services-skin', component: _components_pages_services_services_skin_component__WEBPACK_IMPORTED_MODULE_12__["ServicesSkinComponent"] },
    { path: 'privacy-policy', component: _components_pages_privacy_policy_privacy_policy_component__WEBPACK_IMPORTED_MODULE_15__["PrivacyPolicyComponent"] },
    { path: 'contact-us', component: _components_pages_contact_us_contact_us_component__WEBPACK_IMPORTED_MODULE_16__["ContactUsComponent"] },
    { path: 'try-it-free', component: _components_pages_try_it_free_try_it_free_component__WEBPACK_IMPORTED_MODULE_17__["TryItFreeComponent"] },
    { path: 'try-it-free/:type', component: _components_pages_try_it_free_try_it_free_component__WEBPACK_IMPORTED_MODULE_17__["TryItFreeComponent"], runGuardsAndResolvers: 'always', },
    { path: 'terms-and-conditions', component: _components_pages_terms_terms_component__WEBPACK_IMPORTED_MODULE_18__["TermsComponent"] },
    { path: 'join-our-team', component: _components_pages_join_our_team_join_our_team_component__WEBPACK_IMPORTED_MODULE_19__["JoinOurTeamComponent"] },
    { path: 'help', component: _components_pages_help_help_component__WEBPACK_IMPORTED_MODULE_20__["HelpComponent"] },
    { path: 'applying-for-position', component: _components_pages_apply_careers_apply_careers_component__WEBPACK_IMPORTED_MODULE_21__["ApplyCareersComponent"] },
    { path: 'events', component: _components_pages_events_events_component__WEBPACK_IMPORTED_MODULE_25__["EventsComponent"] },
    { path: 'events/:slug', component: _components_pages_events_events_post_component__WEBPACK_IMPORTED_MODULE_26__["EventsPostComponent"] },
    // { path : 'university', component: UniversityComponent },
    // { path : 'university/:slug', component: UniversityPostComponent },
    { path: 'magazine', component: _components_pages_magazine_magazine_component__WEBPACK_IMPORTED_MODULE_22__["MagazineComponent"] },
    { path: 'magazine/:slug', component: _components_pages_magazine_magazine_post_component__WEBPACK_IMPORTED_MODULE_23__["MagazinePostComponent"] },
    { path: 'search/:keywords', component: _components_pages_search_search_component__WEBPACK_IMPORTED_MODULE_24__["SearchPostComponent"] },
    { path: 'download', component: _components_pages_download_download_component__WEBPACK_IMPORTED_MODULE_27__["DownloadComponent"] },
    { path: '**', component: _components_error_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_2__["NotFoundComponent"] }
];
var appRoutingProviders = [];
var routing = _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(appRoutes);


/***/ }),

/***/ "./src/app/components/error/field-error-display/field-error-display.component.css":
/*!****************************************************************************************!*\
  !*** ./src/app/components/error/field-error-display/field-error-display.component.css ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".error-msg {\n  color: #a94442;\n}\n.fix-error-icon {\n  top: 27px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9lcnJvci9maWVsZC1lcnJvci1kaXNwbGF5L2ZpZWxkLWVycm9yLWRpc3BsYXkuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGNBQWM7QUFDaEI7QUFDQTtFQUNFLFNBQVM7QUFDWCIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZXJyb3IvZmllbGQtZXJyb3ItZGlzcGxheS9maWVsZC1lcnJvci1kaXNwbGF5LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZXJyb3ItbXNnIHtcbiAgY29sb3I6ICNhOTQ0NDI7XG59XG4uZml4LWVycm9yLWljb24ge1xuICB0b3A6IDI3cHg7XG59Il19 */"

/***/ }),

/***/ "./src/app/components/error/field-error-display/field-error-display.component.ts":
/*!***************************************************************************************!*\
  !*** ./src/app/components/error/field-error-display/field-error-display.component.ts ***!
  \***************************************************************************************/
/*! exports provided: FieldErrorDisplayComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FieldErrorDisplayComponent", function() { return FieldErrorDisplayComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var FieldErrorDisplayComponent = /** @class */ (function () {
    function FieldErrorDisplayComponent() {
    }
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], FieldErrorDisplayComponent.prototype, "errorMsg", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], FieldErrorDisplayComponent.prototype, "errorMsgHtml", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
    ], FieldErrorDisplayComponent.prototype, "displayError", void 0);
    FieldErrorDisplayComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-field-error-display',
            template: __webpack_require__(/*! raw-loader!./field-error-display.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/error/field-error-display/field-error-display.component.html"),
            styles: [__webpack_require__(/*! ./field-error-display.component.css */ "./src/app/components/error/field-error-display/field-error-display.component.css")]
        })
    ], FieldErrorDisplayComponent);
    return FieldErrorDisplayComponent;
}());



/***/ }),

/***/ "./src/app/components/error/not-found/not-found.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/components/error/not-found/not-found.component.ts ***!
  \*******************************************************************/
/*! exports provided: NotFoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotFoundComponent", function() { return NotFoundComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var NotFoundComponent = /** @class */ (function () {
    function NotFoundComponent() {
    }
    NotFoundComponent.prototype.ngOnInit = function () {
    };
    NotFoundComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-not-found',
            template: __webpack_require__(/*! raw-loader!./not-found.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/error/not-found/not-found.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], NotFoundComponent);
    return NotFoundComponent;
}());



/***/ }),

/***/ "./src/app/components/layout/footer/footer.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/components/layout/footer/footer.component.ts ***!
  \**************************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
        this.anio = new Date().getFullYear();
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! raw-loader!./footer.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/layout/footer/footer.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/components/layout/header/header.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/components/layout/header/header.component.ts ***!
  \**************************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HeaderComponent = /** @class */ (function () {
    function HeaderComponent() {
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! raw-loader!./header.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/layout/header/header.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/components/layout/left-nav/left-nav.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/components/layout/left-nav/left-nav.component.ts ***!
  \******************************************************************/
/*! exports provided: LeftNavComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LeftNavComponent", function() { return LeftNavComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var LeftNavComponent = /** @class */ (function () {
    function LeftNavComponent() {
    }
    LeftNavComponent.prototype.ngOnInit = function () {
    };
    LeftNavComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-left-nav',
            template: __webpack_require__(/*! raw-loader!./left-nav.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/layout/left-nav/left-nav.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], LeftNavComponent);
    return LeftNavComponent;
}());



/***/ }),

/***/ "./src/app/components/layout/services-nav/services-nav.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/components/layout/services-nav/services-nav.component.ts ***!
  \**************************************************************************/
/*! exports provided: ServicesNavComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServicesNavComponent", function() { return ServicesNavComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ServicesNavComponent = /** @class */ (function () {
    function ServicesNavComponent() {
    }
    ServicesNavComponent.prototype.ngOnInit = function () {
    };
    ServicesNavComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-services-nav',
            template: __webpack_require__(/*! raw-loader!./services-nav.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/layout/services-nav/services-nav.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ServicesNavComponent);
    return ServicesNavComponent;
}());



/***/ }),

/***/ "./src/app/components/pages/about-us/about-us.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/components/pages/about-us/about-us.component.ts ***!
  \*****************************************************************/
/*! exports provided: AboutUsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutUsComponent", function() { return AboutUsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var AboutUsComponent = /** @class */ (function () {
    function AboutUsComponent(meta, title, router) {
        this.meta = meta;
        this.title = title;
        this.router = router;
        this.titlePage = 'About Us | Salon Home';
    }
    AboutUsComponent.prototype.ngOnInit = function () {
        this.initTop();
        this.setMeta();
    };
    AboutUsComponent.prototype.setMeta = function () {
        this.title.setTitle(this.titlePage);
        this.meta.updateTag({ property: 'og:title', content: this.titlePage });
        this.meta.updateTag({ name: 'twitter:title', content: this.titlePage });
    };
    AboutUsComponent.prototype.initTop = function () {
        this.router.events.subscribe(function (evt) {
            if (!(evt instanceof _angular_router__WEBPACK_IMPORTED_MODULE_3__["NavigationEnd"])) {
                return;
            }
            window.scrollTo(0, 0);
        });
    };
    AboutUsComponent.ctorParameters = function () { return [
        { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["Meta"] },
        { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["Title"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
    ]; };
    AboutUsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-about-us',
            template: __webpack_require__(/*! raw-loader!./about-us.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/pages/about-us/about-us.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["Meta"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["Title"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], AboutUsComponent);
    return AboutUsComponent;
}());



/***/ }),

/***/ "./src/app/components/pages/apply-careers/apply-careers.component.css":
/*!****************************************************************************!*\
  !*** ./src/app/components/pages/apply-careers/apply-careers.component.css ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".section-info .img-left-paragraph{float:left;margin:30px 40px 220px 40px;}\n@media screen and (max-width:700px){\n.section-info .img-left-paragraph{margin:-12px 12px 0px 0px !important;width:43px !important;}\n.section-info .img-left-paragraph.type-2{margin:-12px 12px 0px 0px !important;width:62px !important;}\n.bg-careers{height:225px !important;overflow: hidden;}\n.bg-careers .no-overlay{background-size:cover !important;background-position:74% center !important;height: 100%;}\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9wYWdlcy9hcHBseS1jYXJlZXJzL2FwcGx5LWNhcmVlcnMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxrQ0FBa0MsVUFBVSxDQUFDLDJCQUEyQixDQUFDO0FBQ3pFO0FBQ0Esa0NBQWtDLG9DQUFvQyxDQUFDLHFCQUFxQixDQUFDO0FBQzdGLHlDQUF5QyxvQ0FBb0MsQ0FBQyxxQkFBcUIsQ0FBQztBQUNwRyxZQUFZLHVCQUF1QixDQUFDLGdCQUFnQixDQUFDO0FBQ3JELHdCQUF3QixnQ0FBZ0MsQ0FBQyx5Q0FBeUMsQ0FBQyxZQUFZLENBQUM7QUFDaEgiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3BhZ2VzL2FwcGx5LWNhcmVlcnMvYXBwbHktY2FyZWVycy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNlY3Rpb24taW5mbyAuaW1nLWxlZnQtcGFyYWdyYXBoe2Zsb2F0OmxlZnQ7bWFyZ2luOjMwcHggNDBweCAyMjBweCA0MHB4O31cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6NzAwcHgpe1xuLnNlY3Rpb24taW5mbyAuaW1nLWxlZnQtcGFyYWdyYXBoe21hcmdpbjotMTJweCAxMnB4IDBweCAwcHggIWltcG9ydGFudDt3aWR0aDo0M3B4ICFpbXBvcnRhbnQ7fVxuLnNlY3Rpb24taW5mbyAuaW1nLWxlZnQtcGFyYWdyYXBoLnR5cGUtMnttYXJnaW46LTEycHggMTJweCAwcHggMHB4ICFpbXBvcnRhbnQ7d2lkdGg6NjJweCAhaW1wb3J0YW50O31cbi5iZy1jYXJlZXJze2hlaWdodDoyMjVweCAhaW1wb3J0YW50O292ZXJmbG93OiBoaWRkZW47fVxuLmJnLWNhcmVlcnMgLm5vLW92ZXJsYXl7YmFja2dyb3VuZC1zaXplOmNvdmVyICFpbXBvcnRhbnQ7YmFja2dyb3VuZC1wb3NpdGlvbjo3NCUgY2VudGVyICFpbXBvcnRhbnQ7aGVpZ2h0OiAxMDAlO31cbn0iXX0= */"

/***/ }),

/***/ "./src/app/components/pages/apply-careers/apply-careers.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/components/pages/apply-careers/apply-careers.component.ts ***!
  \***************************************************************************/
/*! exports provided: ApplyCareersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApplyCareersComponent", function() { return ApplyCareersComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _models_position__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../../../models/position */ "./src/app/models/position.ts");
/* harmony import */ var _services_email_services__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../../../services/email.services */ "./src/app/services/email.services.ts");







var ApplyCareersComponent = /** @class */ (function () {
    function ApplyCareersComponent(_EmailService, _route, _router, formBuilder, meta, title, router) {
        this._EmailService = _EmailService;
        this._route = _route;
        this._router = _router;
        this.formBuilder = formBuilder;
        this.meta = meta;
        this.title = title;
        this.router = router;
        this.titlePage = 'Apply Careers | Salon Home';
        this.position = new _models_position__WEBPACK_IMPORTED_MODULE_5__["Position"](0, '', '', '', '', '', null, '', false);
    }
    ApplyCareersComponent.prototype.setMeta = function () {
        this.title.setTitle(this.titlePage);
        this.meta.updateTag({ name: 'itemprop', content: this.titlePage });
        this.meta.updateTag({ name: 'og:title', content: this.titlePage });
        this.meta.updateTag({ name: 'twitter:title', content: this.titlePage });
    };
    ApplyCareersComponent.prototype.initTop = function () {
        this.router.events.subscribe(function (evt) {
            if (!(evt instanceof _angular_router__WEBPACK_IMPORTED_MODULE_3__["NavigationEnd"])) {
                return;
            }
            window.scrollTo(0, 0);
        });
    };
    ApplyCareersComponent.prototype.isFieldValid = function (field) {
        return !this.form.get(field).valid && this.form.get(field).touched;
    };
    ApplyCareersComponent.prototype.displayFieldCss = function (field) {
        return {
            'has-error': this.isFieldValid(field),
            'has-feedback': this.isFieldValid(field)
        };
    };
    ApplyCareersComponent.prototype.ngOnInit = function () {
        this.initTop();
        this.setMeta();
        this.addEventSelectable();
        this.InitValidForm();
    };
    ApplyCareersComponent.prototype.onSubmit = function () {
        var _this = this;
        if (this.form.valid) {
            this.position = new _models_position__WEBPACK_IMPORTED_MODULE_5__["Position"](0, this.form.get('position').value, this.form.get('fullname').value, this.form.get('phone').value, this.form.get('email').value, this.form.get('linkedin').value, null, this.form.get('message').value, true);
            this._EmailService.addPosition(this.position).subscribe(function (response) {
                if (response.status) {
                    _this.reset();
                    _this.position = new _models_position__WEBPACK_IMPORTED_MODULE_5__["Position"](0, '', '', '', '', '', null, '', false);
                    $('#form-apply-careers .set-response').html('<div class="message success">' + response.message + '</div>');
                }
                else {
                    console.log('Error Response:');
                    console.log(response);
                    $('#form-apply-careers .set-response').html('<div class="message error">' + response.message + '</div>');
                }
                $('html, body').stop().animate({ scrollTop: $('#form-apply-careers .set-response').offset().top - $('#myNavbar').height() - 64 }, 1000);
            }, function (error) {
                console.log('Error Exception:');
                console.log(error);
            });
        }
        else {
            $('html, body').stop().animate({ scrollTop: $('#form-apply-careers').offset().top - $('#myNavbar').height() - 64 }, 1000);
            this.validateAllFormFields(this.form);
        }
    };
    ApplyCareersComponent.prototype.validateAllFormFields = function (formGroup) {
        var _this = this;
        Object.keys(formGroup.controls).forEach(function (field) {
            var control = formGroup.get(field);
            if (control instanceof _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]) {
                control.markAsTouched({ onlySelf: true });
            }
            else if (control instanceof _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]) {
                _this.validateAllFormFields(control);
            }
        });
    };
    ApplyCareersComponent.prototype.InitValidForm = function () {
        this.form = this.formBuilder.group({
            position: ['', null],
            fullname: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            phone: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            email: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email]],
            linkedin: [null, null],
            message: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        });
    };
    ApplyCareersComponent.prototype.reset = function () {
        this.form.reset();
    };
    ApplyCareersComponent.prototype.addEventSelectable = function () {
        $(document).ready(function () {
            $(document).on('change', '.selectable-texts', function (e) {
                var _text = $(this).find('option:selected').attr('data-text');
                $('.position-desc').css('display', 'none').text(_text).fadeIn();
            });
        });
    };
    ApplyCareersComponent.ctorParameters = function () { return [
        { type: _services_email_services__WEBPACK_IMPORTED_MODULE_6__["EmailService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
        { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["Meta"] },
        { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["Title"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
    ]; };
    ApplyCareersComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-apply-careers',
            template: __webpack_require__(/*! raw-loader!./apply-careers.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/pages/apply-careers/apply-careers.component.html"),
            providers: [_services_email_services__WEBPACK_IMPORTED_MODULE_6__["EmailService"]],
            styles: [__webpack_require__(/*! ./apply-careers.component.css */ "./src/app/components/pages/apply-careers/apply-careers.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_email_services__WEBPACK_IMPORTED_MODULE_6__["EmailService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["Meta"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["Title"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], ApplyCareersComponent);
    return ApplyCareersComponent;
}());



/***/ }),

/***/ "./src/app/components/pages/careers/careers.component.css":
/*!****************************************************************!*\
  !*** ./src/app/components/pages/careers/careers.component.css ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".section-info .img-left-paragraph{float:left;margin:30px 40px 220px 40px;}\n@media screen and (max-width:700px){\n.section-info .img-left-paragraph{margin:-12px 12px 0px 0px !important;width:43px !important;}\n.section-info .img-left-paragraph.type-2{margin:-12px 12px 0px 0px !important;width:62px !important;}\n.bg-careers{height:225px !important;overflow: hidden;}\n.bg-careers .no-overlay{background-size:cover !important;background-position:74% center !important;height: 100% !important;}\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9wYWdlcy9jYXJlZXJzL2NhcmVlcnMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxrQ0FBa0MsVUFBVSxDQUFDLDJCQUEyQixDQUFDO0FBQ3pFO0FBQ0Esa0NBQWtDLG9DQUFvQyxDQUFDLHFCQUFxQixDQUFDO0FBQzdGLHlDQUF5QyxvQ0FBb0MsQ0FBQyxxQkFBcUIsQ0FBQztBQUNwRyxZQUFZLHVCQUF1QixDQUFDLGdCQUFnQixDQUFDO0FBQ3JELHdCQUF3QixnQ0FBZ0MsQ0FBQyx5Q0FBeUMsQ0FBQyx1QkFBdUIsQ0FBQztBQUMzSCIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcGFnZXMvY2FyZWVycy9jYXJlZXJzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2VjdGlvbi1pbmZvIC5pbWctbGVmdC1wYXJhZ3JhcGh7ZmxvYXQ6bGVmdDttYXJnaW46MzBweCA0MHB4IDIyMHB4IDQwcHg7fVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDo3MDBweCl7XG4uc2VjdGlvbi1pbmZvIC5pbWctbGVmdC1wYXJhZ3JhcGh7bWFyZ2luOi0xMnB4IDEycHggMHB4IDBweCAhaW1wb3J0YW50O3dpZHRoOjQzcHggIWltcG9ydGFudDt9XG4uc2VjdGlvbi1pbmZvIC5pbWctbGVmdC1wYXJhZ3JhcGgudHlwZS0ye21hcmdpbjotMTJweCAxMnB4IDBweCAwcHggIWltcG9ydGFudDt3aWR0aDo2MnB4ICFpbXBvcnRhbnQ7fVxuLmJnLWNhcmVlcnN7aGVpZ2h0OjIyNXB4ICFpbXBvcnRhbnQ7b3ZlcmZsb3c6IGhpZGRlbjt9XG4uYmctY2FyZWVycyAubm8tb3ZlcmxheXtiYWNrZ3JvdW5kLXNpemU6Y292ZXIgIWltcG9ydGFudDtiYWNrZ3JvdW5kLXBvc2l0aW9uOjc0JSBjZW50ZXIgIWltcG9ydGFudDtoZWlnaHQ6IDEwMCUgIWltcG9ydGFudDt9XG59Il19 */"

/***/ }),

/***/ "./src/app/components/pages/careers/careers.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/components/pages/careers/careers.component.ts ***!
  \***************************************************************/
/*! exports provided: CareersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CareersComponent", function() { return CareersComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var CareersComponent = /** @class */ (function () {
    function CareersComponent(meta, title, router) {
        this.meta = meta;
        this.title = title;
        this.router = router;
        this.titlePage = 'Careers | Salon Home';
    }
    CareersComponent.prototype.ngOnInit = function () {
        this.initTop();
        this.setMeta();
    };
    CareersComponent.prototype.setMeta = function () {
        this.title.setTitle(this.titlePage);
        this.meta.updateTag({ property: 'og:title', content: this.titlePage });
        this.meta.updateTag({ name: 'twitter:title', content: this.titlePage });
    };
    CareersComponent.prototype.initTop = function () {
        this.router.events.subscribe(function (evt) {
            if (!(evt instanceof _angular_router__WEBPACK_IMPORTED_MODULE_3__["NavigationEnd"])) {
                return;
            }
            window.scrollTo(0, 0);
        });
    };
    CareersComponent.ctorParameters = function () { return [
        { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["Meta"] },
        { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["Title"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
    ]; };
    CareersComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-careers',
            template: __webpack_require__(/*! raw-loader!./careers.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/pages/careers/careers.component.html"),
            styles: [__webpack_require__(/*! ./careers.component.css */ "./src/app/components/pages/careers/careers.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["Meta"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["Title"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], CareersComponent);
    return CareersComponent;
}());



/***/ }),

/***/ "./src/app/components/pages/contact-us/contact-us.component.css":
/*!**********************************************************************!*\
  !*** ./src/app/components/pages/contact-us/contact-us.component.css ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".features_layout .ico {\n    float: left;\n    margin-right: 30px;\n    margin-bottom: 38px;\n}\n.features_layout h5 {\n    font-size: 24px;\n}\n.layout_contact_i{padding-top:25px;padding-left:100px;}\n.layout_contact_i .i-img{float:left;margin-right:30px;}\n@media screen and (max-width:700px){\n.layout_contact_i{padding-top:20px;padding-left:25px;padding-right:25px;}\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9wYWdlcy9jb250YWN0LXVzL2NvbnRhY3QtdXMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIsbUJBQW1CO0FBQ3ZCO0FBQ0E7SUFDSSxlQUFlO0FBQ25CO0FBQ0Esa0JBQWtCLGdCQUFnQixDQUFDLGtCQUFrQixDQUFDO0FBQ3RELHlCQUF5QixVQUFVLENBQUMsaUJBQWlCLENBQUM7QUFDdEQ7QUFDQSxrQkFBa0IsZ0JBQWdCLENBQUMsaUJBQWlCLENBQUMsa0JBQWtCLENBQUM7QUFDeEUiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3BhZ2VzL2NvbnRhY3QtdXMvY29udGFjdC11cy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZlYXR1cmVzX2xheW91dCAuaWNvIHtcbiAgICBmbG9hdDogbGVmdDtcbiAgICBtYXJnaW4tcmlnaHQ6IDMwcHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMzhweDtcbn1cbi5mZWF0dXJlc19sYXlvdXQgaDUge1xuICAgIGZvbnQtc2l6ZTogMjRweDtcbn1cbi5sYXlvdXRfY29udGFjdF9pe3BhZGRpbmctdG9wOjI1cHg7cGFkZGluZy1sZWZ0OjEwMHB4O31cbi5sYXlvdXRfY29udGFjdF9pIC5pLWltZ3tmbG9hdDpsZWZ0O21hcmdpbi1yaWdodDozMHB4O31cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6NzAwcHgpe1xuLmxheW91dF9jb250YWN0X2l7cGFkZGluZy10b3A6MjBweDtwYWRkaW5nLWxlZnQ6MjVweDtwYWRkaW5nLXJpZ2h0OjI1cHg7fVxufVxuIl19 */"

/***/ }),

/***/ "./src/app/components/pages/contact-us/contact-us.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/components/pages/contact-us/contact-us.component.ts ***!
  \*********************************************************************/
/*! exports provided: ContactUsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactUsComponent", function() { return ContactUsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _models_contact__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../../../models/contact */ "./src/app/models/contact.ts");
/* harmony import */ var _services_email_services__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../../../services/email.services */ "./src/app/services/email.services.ts");







var ContactUsComponent = /** @class */ (function () {
    function ContactUsComponent(_EmailService, _route, _router, formBuilder, meta, title, router) {
        this._EmailService = _EmailService;
        this._route = _route;
        this._router = _router;
        this.formBuilder = formBuilder;
        this.meta = meta;
        this.title = title;
        this.router = router;
        this.titlePage = 'Contact Us | Salon Home';
        this.contact = new _models_contact__WEBPACK_IMPORTED_MODULE_5__["Contact"](0, '', '', null, '', true);
    }
    ContactUsComponent.prototype.isFieldValid = function (field) {
        return !this.form.get(field).valid && this.form.get(field).touched;
    };
    ContactUsComponent.prototype.displayFieldCss = function (field) {
        return {
            'has-error': this.isFieldValid(field),
            'has-feedback': this.isFieldValid(field)
        };
    };
    ContactUsComponent.prototype.ngOnInit = function () {
        this.initTop();
        this.InitValidForm();
        this.setMeta();
    };
    ContactUsComponent.prototype.initTop = function () {
        this.router.events.subscribe(function (evt) {
            if (!(evt instanceof _angular_router__WEBPACK_IMPORTED_MODULE_3__["NavigationEnd"])) {
                return;
            }
            window.scrollTo(0, 0);
        });
    };
    ContactUsComponent.prototype.setMeta = function () {
        this.title.setTitle(this.titlePage);
        this.meta.updateTag({ property: 'og:title', content: this.titlePage });
        this.meta.updateTag({ name: 'twitter:title', content: this.titlePage });
    };
    ContactUsComponent.prototype.onSubmit = function () {
        var _this = this;
        if (this.form.valid) {
            this.contact = new _models_contact__WEBPACK_IMPORTED_MODULE_5__["Contact"](0, this.form.get('name').value, this.form.get('email').value, this.form.get('mobile').value, this.form.get('message').value, true);
            this._EmailService.addContact(this.contact).subscribe(function (response) {
                if (response.status) {
                    _this.reset();
                    _this.contact = new _models_contact__WEBPACK_IMPORTED_MODULE_5__["Contact"](0, '', '', null, '', false);
                    $('#form-contact .set-response').html('<div class="message success">' + response.message + '</div>');
                }
                else {
                    console.log('Error Response:');
                    console.log(response);
                    $('#form-contact .set-response').html('<div class="message error">' + response.message + '</div>');
                }
                $('html, body').stop().animate({ scrollTop: $('#form-contact .set-response').offset().top - $('#myNavbar').height() - 64 }, 1000);
            }, function (error) {
                console.log('Error Exception:');
                console.log(error);
            });
        }
        else {
            $('html, body').stop().animate({ scrollTop: $('#form-contact').offset().top - $('#myNavbar').height() - 40 }, 1000);
            this.validateAllFormFields(this.form);
        }
    };
    ContactUsComponent.prototype.validateAllFormFields = function (formGroup) {
        var _this = this;
        Object.keys(formGroup.controls).forEach(function (field) {
            var control = formGroup.get(field);
            if (control instanceof _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]) {
                control.markAsTouched({ onlySelf: true });
            }
            else if (control instanceof _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]) {
                _this.validateAllFormFields(control);
            }
        });
    };
    ContactUsComponent.prototype.InitValidForm = function () {
        this.form = this.formBuilder.group({
            name: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            email: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email]],
            mobile: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            message: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        });
    };
    ContactUsComponent.prototype.reset = function () {
        this.form.reset();
    };
    ContactUsComponent.ctorParameters = function () { return [
        { type: _services_email_services__WEBPACK_IMPORTED_MODULE_6__["EmailService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
        { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["Meta"] },
        { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["Title"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
    ]; };
    ContactUsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-contact-us',
            template: __webpack_require__(/*! raw-loader!./contact-us.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/pages/contact-us/contact-us.component.html"),
            providers: [_services_email_services__WEBPACK_IMPORTED_MODULE_6__["EmailService"]],
            styles: [__webpack_require__(/*! ./contact-us.component.css */ "./src/app/components/pages/contact-us/contact-us.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_email_services__WEBPACK_IMPORTED_MODULE_6__["EmailService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["Meta"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["Title"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], ContactUsComponent);
    return ContactUsComponent;
}());



/***/ }),

/***/ "./src/app/components/pages/download/download.component.css":
/*!******************************************************************!*\
  !*** ./src/app/components/pages/download/download.component.css ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".dl-container {\n    max-width: 480px;\n    margin: 0 auto;\n}\n\n@media (min-width: 480px)\n.dl-section {\n    padding: 60px 80px 30px;\n    background: #fff !important;\n    height: auto !important;\n    border-radius: 2px;\n    box-shadow: 0px 10px 14.1px 0.9px rgba(0, 0, 0, 0.24), 0px 4px 19.6px 0.4px rgba(0, 0, 0, 0.16);\n}\n\n.dl-section {\n    margin: 100px 0 0 0;\n    padding: 0 20px 20px;\n    text-align: center;\n    position: relative;\n}\n\n@media (min-width: 480px)\n.dl-page__title {\n    color: #3c4245;\n}\n\n.dl-page__title {\n    font-size: 20px;\n    font-weight: bold;\n    padding: 0;\n    margin: 0 0 16px;\n}\n\n@media (min-width: 480px)\n.dl-page__description {\n    color: #3c4245;\n}\n\n.dl-page__description {\n    font-size: 14px;\n    line-height: 22px;\n    padding: 0;\n    margin: 0 0 20px;\n    word-wrap: break-word;\n    white-space: pre-line;\n    vertical-align: middle;\n}\n\n.dl-store-link {\n    padding: 0;\n    cursor: pointer;\n}\n\n.dl-store-link__image {\n    width: 200px;\n    height: auto;\n    border: 0;\n    margin: 0 0 15px;\n    padding: 0;\n}\n\n.dl-page__description-text {\n    opacity: 0.8;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9wYWdlcy9kb3dubG9hZC9kb3dubG9hZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGNBQWM7QUFDbEI7O0FBRUE7O0lBRUksdUJBQXVCO0lBQ3ZCLDJCQUEyQjtJQUMzQix1QkFBdUI7SUFHdkIsa0JBQWtCO0lBR2xCLCtGQUErRjtBQUNuRzs7QUFFQTtJQUNJLG1CQUFtQjtJQUNuQixvQkFBb0I7SUFDcEIsa0JBQWtCO0lBQ2xCLGtCQUFrQjtBQUN0Qjs7QUFFQTs7SUFFSSxjQUFjO0FBQ2xCOztBQUNBO0lBQ0ksZUFBZTtJQUNmLGlCQUFpQjtJQUNqQixVQUFVO0lBQ1YsZ0JBQWdCO0FBQ3BCOztBQUVBOztJQUVJLGNBQWM7QUFDbEI7O0FBQ0E7SUFDSSxlQUFlO0lBQ2YsaUJBQWlCO0lBQ2pCLFVBQVU7SUFDVixnQkFBZ0I7SUFDaEIscUJBQXFCO0lBQ3JCLHFCQUFxQjtJQUNyQixzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSxVQUFVO0lBQ1YsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLFlBQVk7SUFDWixZQUFZO0lBQ1osU0FBUztJQUNULGdCQUFnQjtJQUNoQixVQUFVO0FBQ2Q7O0FBRUE7SUFDSSxZQUFZO0FBQ2hCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9wYWdlcy9kb3dubG9hZC9kb3dubG9hZC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmRsLWNvbnRhaW5lciB7XG4gICAgbWF4LXdpZHRoOiA0ODBweDtcbiAgICBtYXJnaW46IDAgYXV0bztcbn1cblxuQG1lZGlhIChtaW4td2lkdGg6IDQ4MHB4KVxuLmRsLXNlY3Rpb24ge1xuICAgIHBhZGRpbmc6IDYwcHggODBweCAzMHB4O1xuICAgIGJhY2tncm91bmQ6ICNmZmYgIWltcG9ydGFudDtcbiAgICBoZWlnaHQ6IGF1dG8gIWltcG9ydGFudDtcbiAgICAtd2Via2l0LWJvcmRlci1yYWRpdXM6IDJweDtcbiAgICAtbW96LWJvcmRlci1yYWRpdXM6IDJweDtcbiAgICBib3JkZXItcmFkaXVzOiAycHg7XG4gICAgLXdlYmtpdC1ib3gtc2hhZG93OiAwcHggMTBweCAxNC4xcHggMC45cHggcmdiYSgwLCAwLCAwLCAwLjI0KSwgMHB4IDRweCAxOS42cHggMC40cHggcmdiYSgwLCAwLCAwLCAwLjE2KTtcbiAgICAtbW96LWJveC1zaGFkb3c6IDBweCAxMHB4IDE0LjFweCAwLjlweCByZ2JhKDAsIDAsIDAsIDAuMjQpLCAwcHggNHB4IDE5LjZweCAwLjRweCByZ2JhKDAsIDAsIDAsIDAuMTYpO1xuICAgIGJveC1zaGFkb3c6IDBweCAxMHB4IDE0LjFweCAwLjlweCByZ2JhKDAsIDAsIDAsIDAuMjQpLCAwcHggNHB4IDE5LjZweCAwLjRweCByZ2JhKDAsIDAsIDAsIDAuMTYpO1xufVxuXG4uZGwtc2VjdGlvbiB7XG4gICAgbWFyZ2luOiAxMDBweCAwIDAgMDtcbiAgICBwYWRkaW5nOiAwIDIwcHggMjBweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG5AbWVkaWEgKG1pbi13aWR0aDogNDgwcHgpXG4uZGwtcGFnZV9fdGl0bGUge1xuICAgIGNvbG9yOiAjM2M0MjQ1O1xufVxuLmRsLXBhZ2VfX3RpdGxlIHtcbiAgICBmb250LXNpemU6IDIwcHg7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgcGFkZGluZzogMDtcbiAgICBtYXJnaW46IDAgMCAxNnB4O1xufVxuXG5AbWVkaWEgKG1pbi13aWR0aDogNDgwcHgpXG4uZGwtcGFnZV9fZGVzY3JpcHRpb24ge1xuICAgIGNvbG9yOiAjM2M0MjQ1O1xufVxuLmRsLXBhZ2VfX2Rlc2NyaXB0aW9uIHtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgbGluZS1oZWlnaHQ6IDIycHg7XG4gICAgcGFkZGluZzogMDtcbiAgICBtYXJnaW46IDAgMCAyMHB4O1xuICAgIHdvcmQtd3JhcDogYnJlYWstd29yZDtcbiAgICB3aGl0ZS1zcGFjZTogcHJlLWxpbmU7XG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbn1cblxuLmRsLXN0b3JlLWxpbmsge1xuICAgIHBhZGRpbmc6IDA7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uZGwtc3RvcmUtbGlua19faW1hZ2Uge1xuICAgIHdpZHRoOiAyMDBweDtcbiAgICBoZWlnaHQ6IGF1dG87XG4gICAgYm9yZGVyOiAwO1xuICAgIG1hcmdpbjogMCAwIDE1cHg7XG4gICAgcGFkZGluZzogMDtcbn1cblxuLmRsLXBhZ2VfX2Rlc2NyaXB0aW9uLXRleHQge1xuICAgIG9wYWNpdHk6IDAuODtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/components/pages/download/download.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/components/pages/download/download.component.ts ***!
  \*****************************************************************/
/*! exports provided: DownloadComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DownloadComponent", function() { return DownloadComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var DownloadComponent = /** @class */ (function () {
    function DownloadComponent(meta, title, router) {
        this.meta = meta;
        this.title = title;
        this.router = router;
        this.titlePage = 'Download | Salon Home';
    }
    DownloadComponent.prototype.ngOnInit = function () {
        this.initTop();
        this.setMeta();
    };
    DownloadComponent.prototype.setMeta = function () {
        this.title.setTitle(this.titlePage);
        this.meta.updateTag({ property: 'og:title', content: this.titlePage });
        this.meta.updateTag({ name: 'twitter:title', content: this.titlePage });
    };
    DownloadComponent.prototype.initTop = function () {
        this.router.events.subscribe(function (evt) {
            if (!(evt instanceof _angular_router__WEBPACK_IMPORTED_MODULE_3__["NavigationEnd"])) {
                return;
            }
            window.scrollTo(0, 0);
        });
    };
    DownloadComponent.ctorParameters = function () { return [
        { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["Meta"] },
        { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["Title"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
    ]; };
    DownloadComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'download',
            template: __webpack_require__(/*! raw-loader!./download.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/pages/download/download.component.html"),
            styles: [__webpack_require__(/*! ./download.component.css */ "./src/app/components/pages/download/download.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["Meta"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["Title"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], DownloadComponent);
    return DownloadComponent;
}());



/***/ }),

/***/ "./src/app/components/pages/events/events-post.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/components/pages/events/events-post.component.ts ***!
  \******************************************************************/
/*! exports provided: EventsPostComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventsPostComponent", function() { return EventsPostComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_event_services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../../services/event.services */ "./src/app/services/event.services.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");





var EventsPostComponent = /** @class */ (function () {
    function EventsPostComponent(__EventService, _route, _router, meta, title, router) {
        this.__EventService = __EventService;
        this._route = _route;
        this._router = _router;
        this.meta = meta;
        this.title = title;
        this.router = router;
        this.titlePage = 'SalonHome Events | Salon Home';
    }
    EventsPostComponent.prototype.ngOnInit = function () {
        this.initTop();
        this.setMeta();
        this.getPost();
    };
    EventsPostComponent.prototype.setMeta = function () {
        this.title.setTitle(this.titlePage);
        this.meta.updateTag({ property: 'og:title', content: this.titlePage });
        this.meta.updateTag({ name: 'twitter:title', content: this.titlePage });
    };
    EventsPostComponent.prototype.getPost = function () {
        var _this = this;
        this._route.params.forEach(function (params) {
            var _slug = params['slug'];
            _this.__EventService.getPostEvent(_slug).subscribe(function (response) {
                _this.events_post = response;
                if (!_this.events_post) {
                    console.log('Not found data source.');
                }
            }, function (error) {
                console.log(error);
            });
        });
    };
    EventsPostComponent.prototype.initTop = function () {
        this.router.events.subscribe(function (evt) {
            if (!(evt instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationEnd"])) {
                return;
            }
            window.scrollTo(0, 0);
        });
    };
    EventsPostComponent.ctorParameters = function () { return [
        { type: _services_event_services__WEBPACK_IMPORTED_MODULE_3__["EventService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["Meta"] },
        { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["Title"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
    ]; };
    EventsPostComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-events-post',
            template: __webpack_require__(/*! raw-loader!./events-post.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/pages/events/events-post.component.html"),
            providers: [_services_event_services__WEBPACK_IMPORTED_MODULE_3__["EventService"]],
            styles: [__webpack_require__(/*! ./events.component.css */ "./src/app/components/pages/events/events.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_event_services__WEBPACK_IMPORTED_MODULE_3__["EventService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["Meta"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["Title"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], EventsPostComponent);
    return EventsPostComponent;
}());



/***/ }),

/***/ "./src/app/components/pages/events/events-recent.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/components/pages/events/events-recent.component.ts ***!
  \********************************************************************/
/*! exports provided: EventsRecentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventsRecentComponent", function() { return EventsRecentComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_event_services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../../services/event.services */ "./src/app/services/event.services.ts");




var EventsRecentComponent = /** @class */ (function () {
    function EventsRecentComponent(__EventService, _route, _router) {
        this.__EventService = __EventService;
        this._route = _route;
        this._router = _router;
    }
    EventsRecentComponent.prototype.ngOnInit = function () {
        this.getAllPost();
    };
    EventsRecentComponent.prototype.getAllPost = function () {
        var _this = this;
        this.__EventService.getEvent().subscribe(function (response) {
            _this.events_posts = response;
            if (!_this.events_posts) {
                console.log('Not found data source.');
            }
        }, function (error) {
            var errorMessage = error;
            console.log(errorMessage);
        });
    };
    EventsRecentComponent.prototype.searchPost = function (keyword) {
        this._router.navigate(['search', keyword]);
    };
    EventsRecentComponent.ctorParameters = function () { return [
        { type: _services_event_services__WEBPACK_IMPORTED_MODULE_3__["EventService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
    ]; };
    EventsRecentComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-events-recent',
            template: __webpack_require__(/*! raw-loader!./events-recent.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/pages/events/events-recent.component.html"),
            providers: [_services_event_services__WEBPACK_IMPORTED_MODULE_3__["EventService"]],
            styles: [__webpack_require__(/*! ./events.component.css */ "./src/app/components/pages/events/events.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_event_services__WEBPACK_IMPORTED_MODULE_3__["EventService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], EventsRecentComponent);
    return EventsRecentComponent;
}());



/***/ }),

/***/ "./src/app/components/pages/events/events.component.css":
/*!**************************************************************!*\
  !*** ./src/app/components/pages/events/events.component.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".single-post-2 {padding:0px;padding:1%;position:relative;}\n.single-post-2 .box{box-shadow:2px 2px 3px 3px rgba(0, 0, 0, 0.24);}\n.single-post-2 .box a.routeImg{display: block;overflow: hidden;}\n.single-post-2 .post-title{display: block;overflow: hidden;margin-bottom: 10px;}\n.single-post-2 .post-title a{font-size:22px;display:block;line-height:initial;margin-bottom:2px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;}\n.single-post-2 .photo{width:100%;}\n.single-post-2 .description{border:1px solid #f5f5f6;padding:20px 20px 25px 20px;}\n.single-post-2 .date{display:block;font-size:16px;margin-bottom:10px;}\n.single-post-2 p{font-size:14px;display:block;min-height:initial;}\n.description-post{height:150px;overflow:hidden;text-overflow:ellipsis;margin-bottom: 15px;}\n.text-block {\n    position: absolute;\n    top: 200px;\n    left: 175px;\n    background-color: black;\n    opacity: 0.8;\n    text-align: left;\n    color: white;\n    padding-left: 20px;\n    padding-right: 20px;\n  }\n@media only screen and (max-width:767px){.events-page .description-post{height: auto !important;}}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9wYWdlcy9ldmVudHMvZXZlbnRzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsZ0JBQWdCLFdBQVcsQ0FBQyxVQUFVLENBQUMsaUJBQWlCLENBQUM7QUFDekQsb0JBQTJFLDhDQUE4QyxDQUFDO0FBQzFILCtCQUErQixjQUFjLENBQUMsZ0JBQWdCLENBQUM7QUFDL0QsMkJBQTJCLGNBQWMsQ0FBQyxnQkFBZ0IsQ0FBQyxtQkFBbUIsQ0FBQztBQUMvRSw2QkFBNkIsY0FBYyxDQUFDLGFBQWEsQ0FBQyxtQkFBbUIsQ0FBQyxpQkFBaUIsQ0FBQyxrQkFBa0IsQ0FBQyxlQUFlLENBQUMsc0JBQXNCLENBQUM7QUFDMUosc0JBQXNCLFVBQVUsQ0FBQztBQUNqQyw0QkFBNEIsd0JBQXdCLENBQUMsMkJBQTJCLENBQUM7QUFDakYscUJBQXFCLGFBQWEsQ0FBQyxjQUFjLENBQUMsa0JBQWtCLENBQUM7QUFDckUsaUJBQWlCLGNBQWMsQ0FBQyxhQUFhLENBQUMsa0JBQWtCLENBQUM7QUFDakUsa0JBQWtCLFlBQVksQ0FBQyxlQUFlLENBQUMsc0JBQXNCLENBQUMsbUJBQW1CLENBQUM7QUFDMUY7SUFDSSxrQkFBa0I7SUFDbEIsVUFBVTtJQUNWLFdBQVc7SUFDWCx1QkFBdUI7SUFDdkIsWUFBWTtJQUNaLGdCQUFnQjtJQUNoQixZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLG1CQUFtQjtFQUNyQjtBQUNGLHlDQUF5QywrQkFBK0IsdUJBQXVCLENBQUMsQ0FBQyIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcGFnZXMvZXZlbnRzL2V2ZW50cy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNpbmdsZS1wb3N0LTIge3BhZGRpbmc6MHB4O3BhZGRpbmc6MSU7cG9zaXRpb246cmVsYXRpdmU7fVxuLnNpbmdsZS1wb3N0LTIgLmJveHstd2Via2l0LWJveC1zaGFkb3c6MnB4IDJweCAzcHggM3B4IHJnYmEoMCwgMCwgMCwgMC4xMCk7Ym94LXNoYWRvdzoycHggMnB4IDNweCAzcHggcmdiYSgwLCAwLCAwLCAwLjI0KTt9XG4uc2luZ2xlLXBvc3QtMiAuYm94IGEucm91dGVJbWd7ZGlzcGxheTogYmxvY2s7b3ZlcmZsb3c6IGhpZGRlbjt9XG4uc2luZ2xlLXBvc3QtMiAucG9zdC10aXRsZXtkaXNwbGF5OiBibG9jaztvdmVyZmxvdzogaGlkZGVuO21hcmdpbi1ib3R0b206IDEwcHg7fVxuLnNpbmdsZS1wb3N0LTIgLnBvc3QtdGl0bGUgYXtmb250LXNpemU6MjJweDtkaXNwbGF5OmJsb2NrO2xpbmUtaGVpZ2h0OmluaXRpYWw7bWFyZ2luLWJvdHRvbToycHg7d2hpdGUtc3BhY2U6bm93cmFwO292ZXJmbG93OmhpZGRlbjt0ZXh0LW92ZXJmbG93OmVsbGlwc2lzO31cbi5zaW5nbGUtcG9zdC0yIC5waG90b3t3aWR0aDoxMDAlO31cbi5zaW5nbGUtcG9zdC0yIC5kZXNjcmlwdGlvbntib3JkZXI6MXB4IHNvbGlkICNmNWY1ZjY7cGFkZGluZzoyMHB4IDIwcHggMjVweCAyMHB4O31cbi5zaW5nbGUtcG9zdC0yIC5kYXRle2Rpc3BsYXk6YmxvY2s7Zm9udC1zaXplOjE2cHg7bWFyZ2luLWJvdHRvbToxMHB4O31cbi5zaW5nbGUtcG9zdC0yIHB7Zm9udC1zaXplOjE0cHg7ZGlzcGxheTpibG9jazttaW4taGVpZ2h0OmluaXRpYWw7fVxuLmRlc2NyaXB0aW9uLXBvc3R7aGVpZ2h0OjE1MHB4O292ZXJmbG93OmhpZGRlbjt0ZXh0LW92ZXJmbG93OmVsbGlwc2lzO21hcmdpbi1ib3R0b206IDE1cHg7fVxuLnRleHQtYmxvY2sge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDIwMHB4O1xuICAgIGxlZnQ6IDE3NXB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xuICAgIG9wYWNpdHk6IDAuODtcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBwYWRkaW5nLWxlZnQ6IDIwcHg7XG4gICAgcGFkZGluZy1yaWdodDogMjBweDtcbiAgfVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjc2N3B4KXsuZXZlbnRzLXBhZ2UgLmRlc2NyaXB0aW9uLXBvc3R7aGVpZ2h0OiBhdXRvICFpbXBvcnRhbnQ7fX0iXX0= */"

/***/ }),

/***/ "./src/app/components/pages/events/events.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/pages/events/events.component.ts ***!
  \*************************************************************/
/*! exports provided: EventsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventsComponent", function() { return EventsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_event_services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../../services/event.services */ "./src/app/services/event.services.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");





var EventsComponent = /** @class */ (function () {
    function EventsComponent(__EventService, meta, title, router) {
        this.__EventService = __EventService;
        this.meta = meta;
        this.title = title;
        this.router = router;
        this.titlePage = 'Events | Salon Home';
    }
    EventsComponent.prototype.ngOnInit = function () {
        this.initTop();
        this.setMeta();
        this.getAllPost();
    };
    EventsComponent.prototype.setMeta = function () {
        this.title.setTitle(this.titlePage);
        this.meta.updateTag({ property: 'og:title', content: this.titlePage });
        this.meta.updateTag({ name: 'twitter:title', content: this.titlePage });
    };
    EventsComponent.prototype.getAllPost = function () {
        var _this = this;
        this.__EventService.getEvent().subscribe(function (response) {
            _this.events_posts = response;
            if (!_this.events_posts) {
                console.log('Not found data source.');
            }
        }, function (error) {
            var errorMessage = error;
            console.log(errorMessage);
        });
    };
    EventsComponent.prototype.initTop = function () {
        this.router.events.subscribe(function (evt) {
            if (!(evt instanceof _angular_router__WEBPACK_IMPORTED_MODULE_4__["NavigationEnd"])) {
                return;
            }
            window.scrollTo(0, 0);
        });
    };
    EventsComponent.ctorParameters = function () { return [
        { type: _services_event_services__WEBPACK_IMPORTED_MODULE_2__["EventService"] },
        { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["Meta"] },
        { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["Title"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
    ]; };
    EventsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-events',
            template: __webpack_require__(/*! raw-loader!./events.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/pages/events/events.component.html"),
            providers: [_services_event_services__WEBPACK_IMPORTED_MODULE_2__["EventService"]],
            styles: [__webpack_require__(/*! ./events.component.css */ "./src/app/components/pages/events/events.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_event_services__WEBPACK_IMPORTED_MODULE_2__["EventService"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["Meta"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["Title"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], EventsComponent);
    return EventsComponent;
}());



/***/ }),

/***/ "./src/app/components/pages/help/help.component.css":
/*!**********************************************************!*\
  !*** ./src/app/components/pages/help/help.component.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcGFnZXMvaGVscC9oZWxwLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/components/pages/help/help.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/pages/help/help.component.ts ***!
  \*********************************************************/
/*! exports provided: HelpComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HelpComponent", function() { return HelpComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_help_services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../../services/help.services */ "./src/app/services/help.services.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../../../shared/animations */ "./src/app/shared/animations.ts");






var HelpComponent = /** @class */ (function () {
    function HelpComponent(_HelpService, meta, title, router) {
        this._HelpService = _HelpService;
        this.meta = meta;
        this.title = title;
        this.router = router;
        this.animationState = false;
        this.currentIndex = 0;
        this.titlePage = 'Help | Salon Home';
    }
    HelpComponent.prototype.ngOnInit = function () {
        this.initTop();
        this.setMeta();
        this.getAllPost();
        this.currentIndex = -1;
    };
    HelpComponent.prototype.setMeta = function () {
        this.title.setTitle(this.titlePage);
        this.meta.updateTag({ property: 'og:title', content: this.titlePage });
        this.meta.updateTag({ name: 'twitter:title', content: this.titlePage });
    };
    HelpComponent.prototype.getAllPost = function () {
        var _this = this;
        this._HelpService.getHelp().subscribe(function (response) {
            _this.help_posts = response;
            if (!_this.help_posts) {
                console.log('Data source not found.');
            }
        }, function (error) {
            var errorMessage = error;
            console.log(errorMessage);
        });
    };
    HelpComponent.prototype.initTop = function () {
        this.router.events.subscribe(function (evt) {
            if (!(evt instanceof _angular_router__WEBPACK_IMPORTED_MODULE_4__["NavigationEnd"])) {
                return;
            }
            window.scrollTo(0, 0);
        });
    };
    HelpComponent.prototype.toggleShowDiv = function (index) {
        this.currentIndex = index;
    };
    HelpComponent.ctorParameters = function () { return [
        { type: _services_help_services__WEBPACK_IMPORTED_MODULE_2__["HelpService"] },
        { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["Meta"] },
        { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["Title"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
    ]; };
    HelpComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-help',
            template: __webpack_require__(/*! raw-loader!./help.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/pages/help/help.component.html"),
            providers: [_services_help_services__WEBPACK_IMPORTED_MODULE_2__["HelpService"]],
            animations: [_shared_animations__WEBPACK_IMPORTED_MODULE_5__["SlideInOutAnimation"]],
            styles: [__webpack_require__(/*! ./help.component.css */ "./src/app/components/pages/help/help.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_help_services__WEBPACK_IMPORTED_MODULE_2__["HelpService"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["Meta"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["Title"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], HelpComponent);
    return HelpComponent;
}());



/***/ }),

/***/ "./src/app/components/pages/home/home.component.css":
/*!**********************************************************!*\
  !*** ./src/app/components/pages/home/home.component.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/**\n * Swiper 4.5.1\n * Most modern mobile touch slider and framework with hardware accelerated transitions\n * http://www.idangero.us/swiper/\n *\n * Copyright 2014-2019 Vladimir Kharlampidi\n *\n * Released under the MIT License\n *\n * Released on: September 13, 2019\n */\n.swiper-container{margin-left:auto;margin-right:auto;position:relative;overflow:hidden;list-style:none;padding:0;z-index:1}\n.swiper-container-no-flexbox .swiper-slide{float:left}\n.swiper-container-vertical>.swiper-wrapper{flex-direction:column}\n.swiper-wrapper{position:relative;width:100%;height:100%;z-index:1;display:flex;transition-property:transform;box-sizing:content-box}\n.swiper-container-android .swiper-slide,.swiper-wrapper{transform:translate3d(0,0,0)}\n.swiper-container-multirow>.swiper-wrapper{flex-wrap:wrap}\n.swiper-container-free-mode>.swiper-wrapper{transition-timing-function:ease-out;margin:0 auto}\n.swiper-slide{flex-shrink:0;width:100%;height:100%;position:relative;transition-property:transform}\n.swiper-slide-invisible-blank{visibility:hidden}\n.swiper-container-autoheight,.swiper-container-autoheight .swiper-slide{height:auto}\n.swiper-container-autoheight .swiper-wrapper{align-items:flex-start;transition-property:transform,height}\n.swiper-container-3d{perspective:1200px}\n.swiper-container-3d .swiper-cube-shadow,.swiper-container-3d .swiper-slide,.swiper-container-3d .swiper-slide-shadow-bottom,.swiper-container-3d .swiper-slide-shadow-left,.swiper-container-3d .swiper-slide-shadow-right,.swiper-container-3d .swiper-slide-shadow-top,.swiper-container-3d .swiper-wrapper{transform-style:preserve-3d}\n.swiper-container-3d .swiper-slide-shadow-bottom,.swiper-container-3d .swiper-slide-shadow-left,.swiper-container-3d .swiper-slide-shadow-right,.swiper-container-3d .swiper-slide-shadow-top{position:absolute;left:0;top:0;width:100%;height:100%;pointer-events:none;z-index:10}\n.swiper-container-3d .swiper-slide-shadow-left{background-image:linear-gradient(to left,rgba(0,0,0,.5),rgba(0,0,0,0))}\n.swiper-container-3d .swiper-slide-shadow-right{background-image:linear-gradient(to right,rgba(0,0,0,.5),rgba(0,0,0,0))}\n.swiper-container-3d .swiper-slide-shadow-top{background-image:linear-gradient(to top,rgba(0,0,0,.5),rgba(0,0,0,0))}\n.swiper-container-3d .swiper-slide-shadow-bottom{background-image:linear-gradient(to bottom,rgba(0,0,0,.5),rgba(0,0,0,0))}\n.swiper-container-wp8-horizontal,.swiper-container-wp8-horizontal>.swiper-wrapper{touch-action:pan-y}\n.swiper-container-wp8-vertical,.swiper-container-wp8-vertical>.swiper-wrapper{touch-action:pan-x}\n.swiper-button-next,.swiper-button-prev{position:absolute;top:50%;width:27px;height:44px;margin-top:-22px;z-index:10;cursor:pointer;background-size:27px 44px;background-position:center;background-repeat:no-repeat}\n.swiper-button-next.swiper-button-disabled,.swiper-button-prev.swiper-button-disabled{opacity:.35;cursor:auto;pointer-events:none}\n.swiper-button-prev,.swiper-container-rtl .swiper-button-next{background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg'%20viewBox%3D'0%200%2027%2044'%3E%3Cpath%20d%3D'M0%2C22L22%2C0l2.1%2C2.1L4.2%2C22l19.9%2C19.9L22%2C44L0%2C22L0%2C22L0%2C22z'%20fill%3D'%23007aff'%2F%3E%3C%2Fsvg%3E\");left:10px;right:auto}\n.swiper-button-next,.swiper-container-rtl .swiper-button-prev{background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg'%20viewBox%3D'0%200%2027%2044'%3E%3Cpath%20d%3D'M27%2C22L27%2C22L5%2C44l-2.1-2.1L22.8%2C22L2.9%2C2.1L5%2C0L27%2C22L27%2C22z'%20fill%3D'%23007aff'%2F%3E%3C%2Fsvg%3E\");right:10px;left:auto}\n.swiper-button-prev.swiper-button-white,.swiper-container-rtl .swiper-button-next.swiper-button-white{background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg'%20viewBox%3D'0%200%2027%2044'%3E%3Cpath%20d%3D'M0%2C22L22%2C0l2.1%2C2.1L4.2%2C22l19.9%2C19.9L22%2C44L0%2C22L0%2C22L0%2C22z'%20fill%3D'%23ffffff'%2F%3E%3C%2Fsvg%3E\")}\n.swiper-button-next.swiper-button-white,.swiper-container-rtl .swiper-button-prev.swiper-button-white{background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg'%20viewBox%3D'0%200%2027%2044'%3E%3Cpath%20d%3D'M27%2C22L27%2C22L5%2C44l-2.1-2.1L22.8%2C22L2.9%2C2.1L5%2C0L27%2C22L27%2C22z'%20fill%3D'%23ffffff'%2F%3E%3C%2Fsvg%3E\")}\n.swiper-button-prev.swiper-button-black,.swiper-container-rtl .swiper-button-next.swiper-button-black{background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg'%20viewBox%3D'0%200%2027%2044'%3E%3Cpath%20d%3D'M0%2C22L22%2C0l2.1%2C2.1L4.2%2C22l19.9%2C19.9L22%2C44L0%2C22L0%2C22L0%2C22z'%20fill%3D'%23000000'%2F%3E%3C%2Fsvg%3E\")}\n.swiper-button-next.swiper-button-black,.swiper-container-rtl .swiper-button-prev.swiper-button-black{background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg'%20viewBox%3D'0%200%2027%2044'%3E%3Cpath%20d%3D'M27%2C22L27%2C22L5%2C44l-2.1-2.1L22.8%2C22L2.9%2C2.1L5%2C0L27%2C22L27%2C22z'%20fill%3D'%23000000'%2F%3E%3C%2Fsvg%3E\")}\n.swiper-button-lock{display:none}\n.swiper-pagination{position:absolute;text-align:center;transition:.3s opacity;transform:translate3d(0,0,0);z-index:10}\n.swiper-pagination.swiper-pagination-hidden{opacity:0}\n.swiper-container-horizontal>.swiper-pagination-bullets,.swiper-pagination-custom,.swiper-pagination-fraction{bottom:10px;left:0;width:100%}\n.swiper-pagination-bullets-dynamic{overflow:hidden;font-size:0}\n.swiper-pagination-bullets-dynamic .swiper-pagination-bullet{transform:scale(.33);position:relative}\n.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active{transform:scale(1)}\n.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-main{transform:scale(1)}\n.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-prev{transform:scale(.66)}\n.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-prev-prev{transform:scale(.33)}\n.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-next{transform:scale(.66)}\n.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-next-next{transform:scale(.33)}\n.swiper-pagination-bullet{width:8px;height:8px;display:inline-block;border-radius:100%;background:#000;opacity:.2}\nbutton.swiper-pagination-bullet{border:none;margin:0;padding:0;box-shadow:none;-webkit-appearance:none;-moz-appearance:none;appearance:none}\n.swiper-pagination-clickable .swiper-pagination-bullet{cursor:pointer}\n.swiper-pagination-bullet-active{opacity:1;background:#007aff}\n.swiper-container-vertical>.swiper-pagination-bullets{right:10px;top:50%;transform:translate3d(0,-50%,0)}\n.swiper-container-vertical>.swiper-pagination-bullets .swiper-pagination-bullet{margin:6px 0;display:block}\n.swiper-container-vertical>.swiper-pagination-bullets.swiper-pagination-bullets-dynamic{top:50%;transform:translateY(-50%);width:8px}\n.swiper-container-vertical>.swiper-pagination-bullets.swiper-pagination-bullets-dynamic .swiper-pagination-bullet{display:inline-block;transition:.2s top,.2s -webkit-transform;transition:.2s transform,.2s top;transition:.2s transform,.2s top,.2s -webkit-transform}\n.swiper-container-horizontal>.swiper-pagination-bullets .swiper-pagination-bullet{margin:0 4px}\n.swiper-container-horizontal>.swiper-pagination-bullets.swiper-pagination-bullets-dynamic{left:50%;transform:translateX(-50%);white-space:nowrap}\n.swiper-container-horizontal>.swiper-pagination-bullets.swiper-pagination-bullets-dynamic .swiper-pagination-bullet{transition:.2s left,.2s -webkit-transform;transition:.2s transform,.2s left;transition:.2s transform,.2s left,.2s -webkit-transform}\n.swiper-container-horizontal.swiper-container-rtl>.swiper-pagination-bullets-dynamic .swiper-pagination-bullet{transition:.2s right,.2s -webkit-transform;transition:.2s transform,.2s right;transition:.2s transform,.2s right,.2s -webkit-transform}\n.swiper-pagination-progressbar{background:rgba(0,0,0,.25);position:absolute}\n.swiper-pagination-progressbar .swiper-pagination-progressbar-fill{background:#007aff;position:absolute;left:0;top:0;width:100%;height:100%;transform:scale(0);transform-origin:left top}\n.swiper-container-rtl .swiper-pagination-progressbar .swiper-pagination-progressbar-fill{transform-origin:right top}\n.swiper-container-horizontal>.swiper-pagination-progressbar,.swiper-container-vertical>.swiper-pagination-progressbar.swiper-pagination-progressbar-opposite{width:100%;height:4px;left:0;top:0}\n.swiper-container-horizontal>.swiper-pagination-progressbar.swiper-pagination-progressbar-opposite,.swiper-container-vertical>.swiper-pagination-progressbar{width:4px;height:100%;left:0;top:0}\n.swiper-pagination-white .swiper-pagination-bullet-active{background:#fff}\n.swiper-pagination-progressbar.swiper-pagination-white{background:rgba(255,255,255,.25)}\n.swiper-pagination-progressbar.swiper-pagination-white .swiper-pagination-progressbar-fill{background:#fff}\n.swiper-pagination-black .swiper-pagination-bullet-active{background:#000}\n.swiper-pagination-progressbar.swiper-pagination-black{background:rgba(0,0,0,.25)}\n.swiper-pagination-progressbar.swiper-pagination-black .swiper-pagination-progressbar-fill{background:#000}\n.swiper-pagination-lock{display:none}\n.swiper-scrollbar{border-radius:10px;position:relative;-ms-touch-action:none;background:rgba(0,0,0,.1)}\n.swiper-container-horizontal>.swiper-scrollbar{position:absolute;left:1%;bottom:3px;z-index:50;height:5px;width:98%}\n.swiper-container-vertical>.swiper-scrollbar{position:absolute;right:3px;top:1%;z-index:50;width:5px;height:98%}\n.swiper-scrollbar-drag{height:100%;width:100%;position:relative;background:rgba(0,0,0,.5);border-radius:10px;left:0;top:0}\n.swiper-scrollbar-cursor-drag{cursor:move}\n.swiper-scrollbar-lock{display:none}\n.swiper-zoom-container{width:100%;height:100%;display:flex;justify-content:center;align-items:center;text-align:center}\n.swiper-zoom-container>canvas,.swiper-zoom-container>img,.swiper-zoom-container>svg{max-width:100%;max-height:100%;-o-object-fit:contain;object-fit:contain}\n.swiper-slide-zoomed{cursor:move}\n.swiper-lazy-preloader{width:42px;height:42px;position:absolute;left:50%;top:50%;margin-left:-21px;margin-top:-21px;z-index:10;transform-origin:50%;-webkit-animation:swiper-preloader-spin 1s steps(12,end) infinite;animation:swiper-preloader-spin 1s steps(12,end) infinite}\n.swiper-lazy-preloader:after{display:block;content:'';width:100%;height:100%;background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg%20viewBox%3D'0%200%20120%20120'%20xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg'%20xmlns%3Axlink%3D'http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink'%3E%3Cdefs%3E%3Cline%20id%3D'l'%20x1%3D'60'%20x2%3D'60'%20y1%3D'7'%20y2%3D'27'%20stroke%3D'%236c6c6c'%20stroke-width%3D'11'%20stroke-linecap%3D'round'%2F%3E%3C%2Fdefs%3E%3Cg%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.27'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.27'%20transform%3D'rotate(30%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.27'%20transform%3D'rotate(60%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.27'%20transform%3D'rotate(90%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.27'%20transform%3D'rotate(120%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.27'%20transform%3D'rotate(150%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.37'%20transform%3D'rotate(180%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.46'%20transform%3D'rotate(210%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.56'%20transform%3D'rotate(240%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.66'%20transform%3D'rotate(270%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.75'%20transform%3D'rotate(300%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.85'%20transform%3D'rotate(330%2060%2C60)'%2F%3E%3C%2Fg%3E%3C%2Fsvg%3E\");background-position:50%;background-size:100%;background-repeat:no-repeat}\n.swiper-lazy-preloader-white:after{background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg%20viewBox%3D'0%200%20120%20120'%20xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg'%20xmlns%3Axlink%3D'http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink'%3E%3Cdefs%3E%3Cline%20id%3D'l'%20x1%3D'60'%20x2%3D'60'%20y1%3D'7'%20y2%3D'27'%20stroke%3D'%23fff'%20stroke-width%3D'11'%20stroke-linecap%3D'round'%2F%3E%3C%2Fdefs%3E%3Cg%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.27'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.27'%20transform%3D'rotate(30%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.27'%20transform%3D'rotate(60%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.27'%20transform%3D'rotate(90%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.27'%20transform%3D'rotate(120%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.27'%20transform%3D'rotate(150%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.37'%20transform%3D'rotate(180%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.46'%20transform%3D'rotate(210%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.56'%20transform%3D'rotate(240%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.66'%20transform%3D'rotate(270%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.75'%20transform%3D'rotate(300%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.85'%20transform%3D'rotate(330%2060%2C60)'%2F%3E%3C%2Fg%3E%3C%2Fsvg%3E\")}\n@-webkit-keyframes swiper-preloader-spin{100%{transform:rotate(360deg)}}\n@keyframes swiper-preloader-spin{100%{transform:rotate(360deg)}}\n.swiper-container .swiper-notification{position:absolute;left:0;top:0;pointer-events:none;opacity:0;z-index:-1000}\n.swiper-container-fade.swiper-container-free-mode .swiper-slide{transition-timing-function:ease-out}\n.swiper-container-fade .swiper-slide{pointer-events:none;transition-property:opacity}\n.swiper-container-fade .swiper-slide .swiper-slide{pointer-events:none}\n.swiper-container-fade .swiper-slide-active,.swiper-container-fade .swiper-slide-active .swiper-slide-active{pointer-events:auto}\n.swiper-container-cube{overflow:visible}\n.swiper-container-cube .swiper-slide{pointer-events:none;-webkit-backface-visibility:hidden;backface-visibility:hidden;z-index:1;visibility:hidden;transform-origin:0 0;width:100%;height:100%}\n.swiper-container-cube .swiper-slide .swiper-slide{pointer-events:none}\n.swiper-container-cube.swiper-container-rtl .swiper-slide{transform-origin:100% 0}\n.swiper-container-cube .swiper-slide-active,.swiper-container-cube .swiper-slide-active .swiper-slide-active{pointer-events:auto}\n.swiper-container-cube .swiper-slide-active,.swiper-container-cube .swiper-slide-next,.swiper-container-cube .swiper-slide-next+.swiper-slide,.swiper-container-cube .swiper-slide-prev{pointer-events:auto;visibility:visible}\n.swiper-container-cube .swiper-slide-shadow-bottom,.swiper-container-cube .swiper-slide-shadow-left,.swiper-container-cube .swiper-slide-shadow-right,.swiper-container-cube .swiper-slide-shadow-top{z-index:0;-webkit-backface-visibility:hidden;backface-visibility:hidden}\n.swiper-container-cube .swiper-cube-shadow{position:absolute;left:0;bottom:0;width:100%;height:100%;background:#000;opacity:.6;filter:blur(50px);z-index:0}\n.swiper-container-flip{overflow:visible}\n.swiper-container-flip .swiper-slide{pointer-events:none;-webkit-backface-visibility:hidden;backface-visibility:hidden;z-index:1}\n.swiper-container-flip .swiper-slide .swiper-slide{pointer-events:none}\n.swiper-container-flip .swiper-slide-active,.swiper-container-flip .swiper-slide-active .swiper-slide-active{pointer-events:auto}\n.swiper-container-flip .swiper-slide-shadow-bottom,.swiper-container-flip .swiper-slide-shadow-left,.swiper-container-flip .swiper-slide-shadow-right,.swiper-container-flip .swiper-slide-shadow-top{z-index:0;-webkit-backface-visibility:hidden;backface-visibility:hidden}\n.swiper-container-coverflow .swiper-wrapper{-ms-perspective:1200px}\n.lk{font-size:25px;}\n.c_primary{color:#23527c;}\n.single-new{background:#fff;overflow:hidden;position:relative;border:1px solid #e6e6e6;transition-duration:0.4s;}\n.single-new:hover,\n.single-new.active{box-shadow:0 1px 10px rgba(0,0,0,.15);transition-duration:0.4s;transform:scale(1.1);z-index:9;}\n.single-new .image{float:left;margin-right:20px;}\n.single-new .image img{width:100%;}\n.single-new .dat{font-size:12px;color:#ffffff;line-height:12px;text-align:center;margin-right:10px;padding:2px 8px 4px 8px;display:inline-block;vertical-align:middle;background-color:#e0194a;}\n.single-new .dat span{display:block;font-size:13px;}\n.single-new .title{font-size:16.5px;display:inline-block;vertical-align:middle;}\n.single-new .description{padding:13px 20px 0px 10px;}\n.single-new .description p{font-size:12px;text-align:justify;}\n#features .layout_text{padding-left:50px;margin-right:-50px;}\n.features_layout{position:relative;padding-left:70px;}\n.features_layout.type2{position:relative;padding-left:0px;}\n.features_layout .ico{float:left;margin-right:30px;margin-bottom:38px}\n.features_layout h5{font-size:24px;}\n.features_layout p{margin-right:-10px;}\n.paragraphs_layout .title img{margin:0px 10px -8px 10px;vertical-align:bottom;}\n.paragraphs_layout .single-block p,\n.paragraphs_layout .single-block span{color:#515e73;font-size:15px;line-height:24px;padding-right:70px;}\n.banner-responsive{display: none;}\n@media screen and (max-width:1024px){\n.features_layout .title h2{margin-bottom:0px !important;padding-bottom:0px !important;}\n}\n@media screen and (max-width:768px){\n.banner-web{display: none;}\n.banner-responsive{display: block;}\n.features_layout .mb60{margin-bottom:15px !important;}\n.features_layout h5{font-size:18px;}\n#features .layout_text{margin-right:auto !important;}\n.team-desc *{text-align:center !important;}\n.list-items .item{display:inline-block;vertical-align:middle;margin:10px 40px;}\n.features_layout{padding-left:25px !important;}\n.banner-home-header{padding-right: 0px !important; padding-left: 0px !important;}\n}\n@media screen and (max-width:700px){\n.features_layout.type2{position:relative;padding-left:35px;padding-right:35px;}\n.devices-img-2{position:relative;top:initial;right:initial;margin:0 auto;width:200px;}\n#features .layout_text{margin-top:auto;padding-left:15px;margin-bottom:0px;}\n#features .apps img{width:48%;height:auto !important;display:inline-block;vertical-align:middle;}\n#features{padding:40px 0px !important;}\n#features .h2, #features h2{font-size:25px;}\n#features .title{text-align:center;}\n.r_redux_img{width:250px;display:block;margin-top:15px;margin-bottom:15px;}\n#customer_us{background:#f6f6f6 !important;}\n.paragraphs_layout .single-block p, .paragraphs_layout .single-block span{padding-right:0px !important;}\n#hservices{padding-bottom:30px !important;}\n#hservices .img-feature{display:none !important;}\n#hservices .single-module{margin-bottom:10px !important;}\n#hservices .team-desc{border:1px solid #b1b1b1;}\n#hservices .single-module .team-desc{margin-bottom:0px !important;padding-bottom:0px !important;}\n#hservices .single-module .team-desc h4{padding:25px 10px !important;font-size:15px !important;}\n#hevents{padding-bottom:50px !important;}\n#hevents .g-ev{padding-bottom:50px !important;}\n.list-items{text-align:center !important;}\n.list-items .item{width:45% !important;margin:10px 2% !important;}\n#home .element{font-size:22px !important;}\n.team_layout2 .team-block{margin-bottom:25px !important;}\n.team_layout2{padding-bottom:20px !important;}\n#features .devices-img-1{width:295px !important;height:auto !important;left:40px !important;}\n#features .devices-img-2{right:0px !important;margin-right:38px !important;width:125px !important;margin-bottom:15px;}\n#features h2{display:none !important;}\n#features .title p{margin-bottom:10px !important;}\n#features .bg-image2_cnt{margin-bottom:0px !important;}\n#hservices h2{padding-bottom:0px !important;}\n#hservices .description p{margin-bottom:10px !important;}\n#hevents .single-new:nth-child(1), #hevents .single-new:nth-child(3){display:none !important;}\n#hevents .single-new .image{position:relative;overflow:hidden;width:95px !important;height:130px !important;}\n#hevents .lk{display:none !important;}\n#hevents .fisrt-section{padding-bottom:20px !important;}\n#hevents .single-new .image img{position:absolute !important;width:207px;height:auto;left:-60%;top:0px;}\n#features-2 .space-imge-1{position:absolute;margin-top:110px;text-align:center;}\n#features-2 .space-imge-1-post{padding-bottom:290px;}\n#features-2 .space-imge-2{position:absolute;margin-top:135px;text-align:center;left:0px;}\n#features-2 .space-imge-2-post{padding-bottom:290px;}\n#features-2 .single-element{clear:both;}\n#features-2 .single-element p{display:none !important;}\n#features-2 .features_layout .ico{margin-bottom:14px;}\n.hide_responsive{display:none !important;}\n#customer_us{padding:50px 0px !important;}\n#customer_us .title h2{padding-bottom:0px !important;}\n#customer_us .single-block{margin-bottom:30px !important;}\n#rent .team-block:nth-child(2), #rent .team-block:nth-child(3), #rent .team-block:nth-child(4){display:none !important;}\n.features_layout h5{color:#515e73;}\n}\n@media screen and (max-width:700px){\n.r_redux_img{width:120px !important;}\n#section_map{display:none !important;}\n#rent{padding-bottom:0px !important;margin-bottom:-30px !important;}\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9zd2lwZXIvZGlzdC9jc3Mvc3dpcGVyLm1pbi5jc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvcGFnZXMvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7RUFVRTtBQUNGLGtCQUFrQixnQkFBZ0IsQ0FBQyxpQkFBaUIsQ0FBQyxpQkFBaUIsQ0FBQyxlQUFlLENBQUMsZUFBZSxDQUFDLFNBQVMsQ0FBQyxTQUFTO0FBQUMsMkNBQTJDLFVBQVU7QUFBQywyQ0FBNEoscUJBQXFCO0FBQUMsZ0JBQWdCLGlCQUFpQixDQUFDLFVBQVUsQ0FBQyxXQUFXLENBQUMsU0FBUyxDQUE4RCxZQUFZLENBQXNILDZCQUE2QixDQUFnRixzQkFBc0I7QUFBQyx3REFBNkYsNEJBQTRCO0FBQUMsMkNBQXFGLGNBQWM7QUFBQyw0Q0FBK0gsbUNBQW1DLENBQUMsYUFBYTtBQUFDLGNBQXdELGFBQWEsQ0FBQyxVQUFVLENBQUMsV0FBVyxDQUFDLGlCQUFpQixDQUFzSCw2QkFBNkU7QUFBQyw4QkFBOEIsaUJBQWlCO0FBQUMsd0VBQXdFLFdBQVc7QUFBQyw2Q0FBeUgsc0JBQXNCLENBQTJJLG9DQUEyRjtBQUFDLHFCQUFnRCxrQkFBa0I7QUFBQywrU0FBbVYsMkJBQTJCO0FBQUMsOExBQThMLGlCQUFpQixDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDLFdBQVcsQ0FBQyxtQkFBbUIsQ0FBQyxVQUFVO0FBQUMsK0NBQXdTLHNFQUFzRTtBQUFDLGdEQUF1Uyx1RUFBdUU7QUFBQyw4Q0FBMlMscUVBQXFFO0FBQUMsaURBQXdTLHdFQUF3RTtBQUFDLGtGQUF5RyxrQkFBa0I7QUFBQyw4RUFBcUcsa0JBQWtCO0FBQUMsd0NBQXdDLGlCQUFpQixDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUMsV0FBVyxDQUFDLGdCQUFnQixDQUFDLFVBQVUsQ0FBQyxjQUFjLENBQUMseUJBQXlCLENBQUMsMEJBQTBCLENBQUMsMkJBQTJCO0FBQUMsc0ZBQXNGLFdBQVcsQ0FBQyxXQUFXLENBQUMsbUJBQW1CO0FBQUMsOERBQThELG1SQUFtUixDQUFDLFNBQVMsQ0FBQyxVQUFVO0FBQUMsOERBQThELG1SQUFtUixDQUFDLFVBQVUsQ0FBQyxTQUFTO0FBQUMsc0dBQXNHLG1SQUFtUjtBQUFDLHNHQUFzRyxtUkFBbVI7QUFBQyxzR0FBc0csbVJBQW1SO0FBQUMsc0dBQXNHLG1SQUFtUjtBQUFDLG9CQUFvQixZQUFZO0FBQUMsbUJBQW1CLGlCQUFpQixDQUFDLGlCQUFpQixDQUEwRCxzQkFBc0IsQ0FBc0MsNEJBQTRCLENBQUMsVUFBVTtBQUFDLDRDQUE0QyxTQUFTO0FBQUMsOEdBQThHLFdBQVcsQ0FBQyxNQUFNLENBQUMsVUFBVTtBQUFDLG1DQUFtQyxlQUFlLENBQUMsV0FBVztBQUFDLDZEQUFtSCxvQkFBb0IsQ0FBQyxpQkFBaUI7QUFBQyxvRUFBc0gsa0JBQWtCO0FBQUMseUVBQTJILGtCQUFrQjtBQUFDLHlFQUErSCxvQkFBb0I7QUFBQyw4RUFBb0ksb0JBQW9CO0FBQUMseUVBQStILG9CQUFvQjtBQUFDLDhFQUFvSSxvQkFBb0I7QUFBQywwQkFBMEIsU0FBUyxDQUFDLFVBQVUsQ0FBQyxvQkFBb0IsQ0FBQyxrQkFBa0IsQ0FBQyxlQUFlLENBQUMsVUFBVTtBQUFDLGdDQUFnQyxXQUFXLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBeUIsZUFBZSxDQUFDLHVCQUF1QixDQUFDLG9CQUFvQixDQUFDLGVBQWU7QUFBQyx1REFBdUQsY0FBYztBQUFDLGlDQUFpQyxTQUFTLENBQUMsa0JBQWtCO0FBQUMsc0RBQXNELFVBQVUsQ0FBQyxPQUFPLENBQXlDLCtCQUErQjtBQUFDLGdGQUFnRixZQUFZLENBQUMsYUFBYTtBQUFDLHdGQUF3RixPQUFPLENBQW1FLDBCQUEwQixDQUFDLFNBQVM7QUFBQyxrSEFBa0gsb0JBQW9CLENBQWtELHdDQUF3QyxDQUFxQyxnQ0FBZ0MsQ0FBQyxzREFBc0Q7QUFBQyxrRkFBa0YsWUFBWTtBQUFDLDBGQUEwRixRQUFRLENBQW1FLDBCQUEwQixDQUFDLGtCQUFrQjtBQUFDLG9IQUFzSyx5Q0FBeUMsQ0FBc0MsaUNBQWlDLENBQUMsdURBQXVEO0FBQUMsK0dBQWtLLDBDQUEwQyxDQUF1QyxrQ0FBa0MsQ0FBQyx3REFBd0Q7QUFBQywrQkFBK0IsMEJBQTBCLENBQUMsaUJBQWlCO0FBQUMsbUVBQW1FLGtCQUFrQixDQUFDLGlCQUFpQixDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDLFdBQVcsQ0FBbUQsa0JBQWtCLENBQWlFLHlCQUF5QjtBQUFDLHlGQUEySiwwQkFBMEI7QUFBQyw2SkFBNkosVUFBVSxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsS0FBSztBQUFDLDZKQUE2SixTQUFTLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQyxLQUFLO0FBQUMsMERBQTBELGVBQWU7QUFBQyx1REFBdUQsZ0NBQWdDO0FBQUMsMkZBQTJGLGVBQWU7QUFBQywwREFBMEQsZUFBZTtBQUFDLHVEQUF1RCwwQkFBMEI7QUFBQywyRkFBMkYsZUFBZTtBQUFDLHdCQUF3QixZQUFZO0FBQUMsa0JBQWtCLGtCQUFrQixDQUFDLGlCQUFpQixDQUFDLHFCQUFxQixDQUFDLHlCQUF5QjtBQUFDLCtDQUErQyxpQkFBaUIsQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDLFVBQVUsQ0FBQyxVQUFVLENBQUMsU0FBUztBQUFDLDZDQUE2QyxpQkFBaUIsQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLFVBQVUsQ0FBQyxTQUFTLENBQUMsVUFBVTtBQUFDLHVCQUF1QixXQUFXLENBQUMsVUFBVSxDQUFDLGlCQUFpQixDQUFDLHlCQUF5QixDQUFDLGtCQUFrQixDQUFDLE1BQU0sQ0FBQyxLQUFLO0FBQUMsOEJBQThCLFdBQVc7QUFBQyx1QkFBdUIsWUFBWTtBQUFDLHVCQUF1QixVQUFVLENBQUMsV0FBVyxDQUE4RCxZQUFZLENBQTZFLHNCQUFzQixDQUEyRSxrQkFBa0IsQ0FBQyxpQkFBaUI7QUFBQyxvRkFBb0YsY0FBYyxDQUFDLGVBQWUsQ0FBQyxxQkFBcUIsQ0FBQyxrQkFBa0I7QUFBQyxxQkFBcUIsV0FBVztBQUFDLHVCQUF1QixVQUFVLENBQUMsV0FBVyxDQUFDLGlCQUFpQixDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsaUJBQWlCLENBQUMsZ0JBQWdCLENBQUMsVUFBVSxDQUF1RCxvQkFBb0IsQ0FBQyxpRUFBaUUsQ0FBQyx5REFBeUQ7QUFBQyw2QkFBNkIsYUFBYSxDQUFDLFVBQVUsQ0FBQyxVQUFVLENBQUMsV0FBVyxDQUFDLHc3Q0FBdzdDLENBQUMsdUJBQXVCLENBQUMsb0JBQW9CLENBQUMsMkJBQTJCO0FBQUMsbUNBQW1DLHE3Q0FBcTdDO0FBQUMseUNBQXlDLEtBQXNDLHdCQUF3QixDQUFDO0FBQUMsaUNBQWlDLEtBQXNDLHdCQUF3QixDQUFDO0FBQUMsdUNBQXVDLGlCQUFpQixDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsbUJBQW1CLENBQUMsU0FBUyxDQUFDLGFBQWE7QUFBQyxnRUFBbUosbUNBQW1DO0FBQUMscUNBQXFDLG1CQUFtQixDQUFvRSwyQkFBMkI7QUFBQyxtREFBbUQsbUJBQW1CO0FBQUMsNkdBQTZHLG1CQUFtQjtBQUFDLHVCQUF1QixnQkFBZ0I7QUFBQyxxQ0FBcUMsbUJBQW1CLENBQUMsa0NBQWtDLENBQUMsMEJBQTBCLENBQUMsU0FBUyxDQUFDLGlCQUFpQixDQUF1RCxvQkFBb0IsQ0FBQyxVQUFVLENBQUMsV0FBVztBQUFDLG1EQUFtRCxtQkFBbUI7QUFBQywwREFBc0gsdUJBQXVCO0FBQUMsNkdBQTZHLG1CQUFtQjtBQUFDLHdMQUF3TCxtQkFBbUIsQ0FBQyxrQkFBa0I7QUFBQyxzTUFBc00sU0FBUyxDQUFDLGtDQUFrQyxDQUFDLDBCQUEwQjtBQUFDLDJDQUEyQyxpQkFBaUIsQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLFVBQVUsQ0FBQyxXQUFXLENBQUMsZUFBZSxDQUFDLFVBQVUsQ0FBMkIsaUJBQWlCLENBQUMsU0FBUztBQUFDLHVCQUF1QixnQkFBZ0I7QUFBQyxxQ0FBcUMsbUJBQW1CLENBQUMsa0NBQWtDLENBQUMsMEJBQTBCLENBQUMsU0FBUztBQUFDLG1EQUFtRCxtQkFBbUI7QUFBQyw2R0FBNkcsbUJBQW1CO0FBQUMsc01BQXNNLFNBQVMsQ0FBQyxrQ0FBa0MsQ0FBQywwQkFBMEI7QUFBQyw0Q0FBNEMsc0JBQXNCO0FDVjVrbUIsSUFBSSxjQUFjLENBQUM7QUFDbkIsV0FBVyxhQUFhLENBQUM7QUFDekIsWUFBWSxlQUFlLENBQUMsZUFBZSxDQUFDLGlCQUFpQixDQUFDLHdCQUF3QixDQUF5SCx3QkFBd0IsQ0FBQztBQUN4TzttQkFDNEcscUNBQXFDLENBQXlILHdCQUF3QixDQUF5RyxvQkFBb0IsQ0FBQyxTQUFTLENBQUM7QUFDMWEsbUJBQW1CLFVBQVUsQ0FBQyxpQkFBaUIsQ0FBQztBQUNoRCx1QkFBdUIsVUFBVSxDQUFDO0FBQ2xDLGlCQUFpQixjQUFjLENBQUMsYUFBYSxDQUFDLGdCQUFnQixDQUFDLGlCQUFpQixDQUFDLGlCQUFpQixDQUFDLHVCQUF1QixDQUFDLG9CQUFvQixDQUFDLHFCQUFxQixDQUFDLHdCQUF3QixDQUFDO0FBQy9MLHNCQUFzQixhQUFhLENBQUMsY0FBYyxDQUFDO0FBQ25ELG1CQUFtQixnQkFBZ0IsQ0FBQyxvQkFBb0IsQ0FBQyxxQkFBcUIsQ0FBQztBQUMvRSx5QkFBeUIsMEJBQTBCLENBQUM7QUFDcEQsMkJBQTJCLGNBQWMsQ0FBQyxrQkFBa0IsQ0FBQztBQUM3RCx1QkFBdUIsaUJBQWlCLENBQUMsa0JBQWtCLENBQUM7QUFDNUQsaUJBQWlCLGlCQUFpQixDQUFDLGlCQUFpQixDQUFDO0FBQ3JELHVCQUF1QixpQkFBaUIsQ0FBQyxnQkFBZ0IsQ0FBQztBQUMxRCxzQkFBc0IsVUFBVSxDQUFDLGlCQUFpQixDQUFDLGtCQUFrQjtBQUNyRSxvQkFBb0IsY0FBYyxDQUFDO0FBQ25DLG1CQUFtQixrQkFBa0IsQ0FBQztBQUN0Qyw4QkFBOEIseUJBQXlCLENBQUMscUJBQXFCLENBQUM7QUFDOUU7c0NBQ3NDLGFBQWEsQ0FBQyxjQUFjLENBQUMsZ0JBQWdCLENBQUMsa0JBQWtCLENBQUM7QUFDdkcsbUJBQW1CLGFBQWEsQ0FBQztBQUNqQztBQUNBLDJCQUEyQiw0QkFBNEIsQ0FBQyw2QkFBNkIsQ0FBQztBQUN0RjtBQUNBO0FBQ0EsWUFBWSxhQUFhLENBQUM7QUFDMUIsbUJBQW1CLGNBQWMsQ0FBQztBQUNsQyx1QkFBdUIsNkJBQTZCLENBQUM7QUFDckQsb0JBQW9CLGNBQWMsQ0FBQztBQUNuQyx1QkFBdUIsNEJBQTRCLENBQUM7QUFDcEQsYUFBYSw0QkFBNEIsQ0FBQztBQUMxQyxrQkFBa0Isb0JBQW9CLENBQUMscUJBQXFCLENBQUMsZ0JBQWdCLENBQUM7QUFDOUUsaUJBQWlCLDRCQUE0QixDQUFDO0FBQzlDLG9CQUFvQiw2QkFBNkIsRUFBRSw0QkFBNEIsQ0FBQztBQUNoRjtBQUNBO0FBQ0EsdUJBQXVCLGlCQUFpQixDQUFDLGlCQUFpQixDQUFDLGtCQUFrQixDQUFDO0FBQzlFLGVBQWUsaUJBQWlCLENBQUMsV0FBVyxDQUFDLGFBQWEsQ0FBQyxhQUFhLENBQUMsV0FBVyxDQUFDO0FBQ3JGLHVCQUF1QixlQUFlLENBQUMsaUJBQWlCLENBQUMsaUJBQWlCLENBQUM7QUFDM0Usb0JBQW9CLFNBQVMsQ0FBQyxzQkFBc0IsQ0FBQyxvQkFBb0IsQ0FBQyxxQkFBcUIsQ0FBQztBQUNoRyxVQUFVLDJCQUEyQixDQUFDO0FBQ3RDLDRCQUE0QixjQUFjLENBQUM7QUFDM0MsaUJBQWlCLGlCQUFpQixDQUFDO0FBQ25DLGFBQWEsV0FBVyxDQUFDLGFBQWEsQ0FBQyxlQUFlLENBQUMsa0JBQWtCLENBQUM7QUFDMUUsYUFBYSw2QkFBNkIsQ0FBQztBQUMzQywwRUFBMEUsNEJBQTRCLENBQUM7QUFDdkcsV0FBVyw4QkFBOEIsQ0FBQztBQUMxQyx3QkFBd0IsdUJBQXVCLENBQUM7QUFDaEQsMEJBQTBCLDZCQUE2QixDQUFDO0FBQ3hELHNCQUFzQix3QkFBd0IsQ0FBQztBQUMvQyxxQ0FBcUMsNEJBQTRCLENBQUMsNkJBQTZCLENBQUM7QUFDaEcsd0NBQXdDLDRCQUE0QixDQUFDLHlCQUF5QixDQUFDO0FBQy9GLFNBQVMsOEJBQThCLENBQUM7QUFDeEMsZUFBZSw4QkFBOEIsQ0FBQztBQUM5QyxZQUFZLDRCQUE0QixDQUFDO0FBQ3pDLGtCQUFrQixvQkFBb0IsQ0FBQyx5QkFBeUIsQ0FBQztBQUNqRSxlQUFlLHlCQUF5QixDQUFDO0FBQ3pDLDBCQUEwQiw2QkFBNkIsQ0FBQztBQUN4RCxjQUFjLDhCQUE4QixDQUFDO0FBQzdDLHlCQUF5QixzQkFBc0IsQ0FBQyxzQkFBc0IsQ0FBQyxvQkFBb0IsQ0FBQztBQUM1Rix5QkFBeUIsb0JBQW9CLENBQUMsNEJBQTRCLENBQUMsc0JBQXNCLENBQUMsa0JBQWtCLENBQUM7QUFDckgsYUFBYSx1QkFBdUIsQ0FBQztBQUNyQyxtQkFBbUIsNkJBQTZCLENBQUM7QUFDakQseUJBQXlCLDRCQUE0QixDQUFDO0FBQ3RELGNBQWMsNkJBQTZCLENBQUM7QUFDNUMsMEJBQTBCLDZCQUE2QixDQUFDO0FBQ3hELHFFQUFxRSx1QkFBdUIsQ0FBQztBQUM3Riw0QkFBNEIsaUJBQWlCLENBQUMsZUFBZSxDQUFDLHFCQUFxQixDQUFDLHVCQUF1QixDQUFDO0FBQzVHLGFBQWEsdUJBQXVCLENBQUM7QUFDckMsd0JBQXdCLDhCQUE4QixDQUFDO0FBQ3ZELGdDQUFnQyw0QkFBNEIsQ0FBQyxXQUFXLENBQUMsV0FBVyxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUM7QUFDdkcsMEJBQTBCLGlCQUFpQixDQUFDLGdCQUFnQixDQUFDLGlCQUFpQixDQUFDO0FBQy9FLCtCQUErQixvQkFBb0IsQ0FBQztBQUNwRCwwQkFBMEIsaUJBQWlCLENBQUMsZ0JBQWdCLENBQUMsaUJBQWlCLENBQUMsUUFBUSxDQUFDO0FBQ3hGLCtCQUErQixvQkFBb0IsQ0FBQztBQUNwRCw0QkFBNEIsVUFBVSxDQUFDO0FBQ3ZDLDhCQUE4Qix1QkFBdUIsQ0FBQztBQUN0RCxrQ0FBa0Msa0JBQWtCLENBQUM7QUFDckQsaUJBQWlCLHVCQUF1QixDQUFDO0FBQ3pDLGFBQWEsMkJBQTJCLENBQUM7QUFDekMsdUJBQXVCLDZCQUE2QixDQUFDO0FBQ3JELDJCQUEyQiw2QkFBNkIsQ0FBQztBQUN6RCwrRkFBK0YsdUJBQXVCLENBQUM7QUFDdkgsb0JBQW9CLGFBQWEsQ0FBQztBQUNsQztBQUNBO0FBQ0EsYUFBYSxzQkFBc0IsQ0FBQztBQUNwQyxhQUFhLHVCQUF1QixDQUFDO0FBQ3JDLE1BQU0sNkJBQTZCLENBQUMsOEJBQThCLENBQUM7QUFDbkUiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3BhZ2VzL2hvbWUvaG9tZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBTd2lwZXIgNC41LjFcbiAqIE1vc3QgbW9kZXJuIG1vYmlsZSB0b3VjaCBzbGlkZXIgYW5kIGZyYW1ld29yayB3aXRoIGhhcmR3YXJlIGFjY2VsZXJhdGVkIHRyYW5zaXRpb25zXG4gKiBodHRwOi8vd3d3LmlkYW5nZXJvLnVzL3N3aXBlci9cbiAqXG4gKiBDb3B5cmlnaHQgMjAxNC0yMDE5IFZsYWRpbWlyIEtoYXJsYW1waWRpXG4gKlxuICogUmVsZWFzZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlXG4gKlxuICogUmVsZWFzZWQgb246IFNlcHRlbWJlciAxMywgMjAxOVxuICovXG4uc3dpcGVyLWNvbnRhaW5lcnttYXJnaW4tbGVmdDphdXRvO21hcmdpbi1yaWdodDphdXRvO3Bvc2l0aW9uOnJlbGF0aXZlO292ZXJmbG93OmhpZGRlbjtsaXN0LXN0eWxlOm5vbmU7cGFkZGluZzowO3otaW5kZXg6MX0uc3dpcGVyLWNvbnRhaW5lci1uby1mbGV4Ym94IC5zd2lwZXItc2xpZGV7ZmxvYXQ6bGVmdH0uc3dpcGVyLWNvbnRhaW5lci12ZXJ0aWNhbD4uc3dpcGVyLXdyYXBwZXJ7LXdlYmtpdC1ib3gtb3JpZW50OnZlcnRpY2FsOy13ZWJraXQtYm94LWRpcmVjdGlvbjpub3JtYWw7LXdlYmtpdC1mbGV4LWRpcmVjdGlvbjpjb2x1bW47LW1zLWZsZXgtZGlyZWN0aW9uOmNvbHVtbjtmbGV4LWRpcmVjdGlvbjpjb2x1bW59LnN3aXBlci13cmFwcGVye3Bvc2l0aW9uOnJlbGF0aXZlO3dpZHRoOjEwMCU7aGVpZ2h0OjEwMCU7ei1pbmRleDoxO2Rpc3BsYXk6LXdlYmtpdC1ib3g7ZGlzcGxheTotd2Via2l0LWZsZXg7ZGlzcGxheTotbXMtZmxleGJveDtkaXNwbGF5OmZsZXg7LXdlYmtpdC10cmFuc2l0aW9uLXByb3BlcnR5Oi13ZWJraXQtdHJhbnNmb3JtO3RyYW5zaXRpb24tcHJvcGVydHk6LXdlYmtpdC10cmFuc2Zvcm07LW8tdHJhbnNpdGlvbi1wcm9wZXJ0eTp0cmFuc2Zvcm07dHJhbnNpdGlvbi1wcm9wZXJ0eTp0cmFuc2Zvcm07dHJhbnNpdGlvbi1wcm9wZXJ0eTp0cmFuc2Zvcm0sLXdlYmtpdC10cmFuc2Zvcm07LXdlYmtpdC1ib3gtc2l6aW5nOmNvbnRlbnQtYm94O2JveC1zaXppbmc6Y29udGVudC1ib3h9LnN3aXBlci1jb250YWluZXItYW5kcm9pZCAuc3dpcGVyLXNsaWRlLC5zd2lwZXItd3JhcHBlcnstd2Via2l0LXRyYW5zZm9ybTp0cmFuc2xhdGUzZCgwLDAsMCk7dHJhbnNmb3JtOnRyYW5zbGF0ZTNkKDAsMCwwKX0uc3dpcGVyLWNvbnRhaW5lci1tdWx0aXJvdz4uc3dpcGVyLXdyYXBwZXJ7LXdlYmtpdC1mbGV4LXdyYXA6d3JhcDstbXMtZmxleC13cmFwOndyYXA7ZmxleC13cmFwOndyYXB9LnN3aXBlci1jb250YWluZXItZnJlZS1tb2RlPi5zd2lwZXItd3JhcHBlcnstd2Via2l0LXRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOmVhc2Utb3V0Oy1vLXRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOmVhc2Utb3V0O3RyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOmVhc2Utb3V0O21hcmdpbjowIGF1dG99LnN3aXBlci1zbGlkZXstd2Via2l0LWZsZXgtc2hyaW5rOjA7LW1zLWZsZXgtbmVnYXRpdmU6MDtmbGV4LXNocmluazowO3dpZHRoOjEwMCU7aGVpZ2h0OjEwMCU7cG9zaXRpb246cmVsYXRpdmU7LXdlYmtpdC10cmFuc2l0aW9uLXByb3BlcnR5Oi13ZWJraXQtdHJhbnNmb3JtO3RyYW5zaXRpb24tcHJvcGVydHk6LXdlYmtpdC10cmFuc2Zvcm07LW8tdHJhbnNpdGlvbi1wcm9wZXJ0eTp0cmFuc2Zvcm07dHJhbnNpdGlvbi1wcm9wZXJ0eTp0cmFuc2Zvcm07dHJhbnNpdGlvbi1wcm9wZXJ0eTp0cmFuc2Zvcm0sLXdlYmtpdC10cmFuc2Zvcm19LnN3aXBlci1zbGlkZS1pbnZpc2libGUtYmxhbmt7dmlzaWJpbGl0eTpoaWRkZW59LnN3aXBlci1jb250YWluZXItYXV0b2hlaWdodCwuc3dpcGVyLWNvbnRhaW5lci1hdXRvaGVpZ2h0IC5zd2lwZXItc2xpZGV7aGVpZ2h0OmF1dG99LnN3aXBlci1jb250YWluZXItYXV0b2hlaWdodCAuc3dpcGVyLXdyYXBwZXJ7LXdlYmtpdC1ib3gtYWxpZ246c3RhcnQ7LXdlYmtpdC1hbGlnbi1pdGVtczpmbGV4LXN0YXJ0Oy1tcy1mbGV4LWFsaWduOnN0YXJ0O2FsaWduLWl0ZW1zOmZsZXgtc3RhcnQ7LXdlYmtpdC10cmFuc2l0aW9uLXByb3BlcnR5OmhlaWdodCwtd2Via2l0LXRyYW5zZm9ybTt0cmFuc2l0aW9uLXByb3BlcnR5OmhlaWdodCwtd2Via2l0LXRyYW5zZm9ybTstby10cmFuc2l0aW9uLXByb3BlcnR5OnRyYW5zZm9ybSxoZWlnaHQ7dHJhbnNpdGlvbi1wcm9wZXJ0eTp0cmFuc2Zvcm0saGVpZ2h0O3RyYW5zaXRpb24tcHJvcGVydHk6dHJhbnNmb3JtLGhlaWdodCwtd2Via2l0LXRyYW5zZm9ybX0uc3dpcGVyLWNvbnRhaW5lci0zZHstd2Via2l0LXBlcnNwZWN0aXZlOjEyMDBweDtwZXJzcGVjdGl2ZToxMjAwcHh9LnN3aXBlci1jb250YWluZXItM2QgLnN3aXBlci1jdWJlLXNoYWRvdywuc3dpcGVyLWNvbnRhaW5lci0zZCAuc3dpcGVyLXNsaWRlLC5zd2lwZXItY29udGFpbmVyLTNkIC5zd2lwZXItc2xpZGUtc2hhZG93LWJvdHRvbSwuc3dpcGVyLWNvbnRhaW5lci0zZCAuc3dpcGVyLXNsaWRlLXNoYWRvdy1sZWZ0LC5zd2lwZXItY29udGFpbmVyLTNkIC5zd2lwZXItc2xpZGUtc2hhZG93LXJpZ2h0LC5zd2lwZXItY29udGFpbmVyLTNkIC5zd2lwZXItc2xpZGUtc2hhZG93LXRvcCwuc3dpcGVyLWNvbnRhaW5lci0zZCAuc3dpcGVyLXdyYXBwZXJ7LXdlYmtpdC10cmFuc2Zvcm0tc3R5bGU6cHJlc2VydmUtM2Q7dHJhbnNmb3JtLXN0eWxlOnByZXNlcnZlLTNkfS5zd2lwZXItY29udGFpbmVyLTNkIC5zd2lwZXItc2xpZGUtc2hhZG93LWJvdHRvbSwuc3dpcGVyLWNvbnRhaW5lci0zZCAuc3dpcGVyLXNsaWRlLXNoYWRvdy1sZWZ0LC5zd2lwZXItY29udGFpbmVyLTNkIC5zd2lwZXItc2xpZGUtc2hhZG93LXJpZ2h0LC5zd2lwZXItY29udGFpbmVyLTNkIC5zd2lwZXItc2xpZGUtc2hhZG93LXRvcHtwb3NpdGlvbjphYnNvbHV0ZTtsZWZ0OjA7dG9wOjA7d2lkdGg6MTAwJTtoZWlnaHQ6MTAwJTtwb2ludGVyLWV2ZW50czpub25lO3otaW5kZXg6MTB9LnN3aXBlci1jb250YWluZXItM2QgLnN3aXBlci1zbGlkZS1zaGFkb3ctbGVmdHtiYWNrZ3JvdW5kLWltYWdlOi13ZWJraXQtZ3JhZGllbnQobGluZWFyLHJpZ2h0IHRvcCxsZWZ0IHRvcCxmcm9tKHJnYmEoMCwwLDAsLjUpKSx0byhyZ2JhKDAsMCwwLDApKSk7YmFja2dyb3VuZC1pbWFnZTotd2Via2l0LWxpbmVhci1ncmFkaWVudChyaWdodCxyZ2JhKDAsMCwwLC41KSxyZ2JhKDAsMCwwLDApKTtiYWNrZ3JvdW5kLWltYWdlOi1vLWxpbmVhci1ncmFkaWVudChyaWdodCxyZ2JhKDAsMCwwLC41KSxyZ2JhKDAsMCwwLDApKTtiYWNrZ3JvdW5kLWltYWdlOmxpbmVhci1ncmFkaWVudCh0byBsZWZ0LHJnYmEoMCwwLDAsLjUpLHJnYmEoMCwwLDAsMCkpfS5zd2lwZXItY29udGFpbmVyLTNkIC5zd2lwZXItc2xpZGUtc2hhZG93LXJpZ2h0e2JhY2tncm91bmQtaW1hZ2U6LXdlYmtpdC1ncmFkaWVudChsaW5lYXIsbGVmdCB0b3AscmlnaHQgdG9wLGZyb20ocmdiYSgwLDAsMCwuNSkpLHRvKHJnYmEoMCwwLDAsMCkpKTtiYWNrZ3JvdW5kLWltYWdlOi13ZWJraXQtbGluZWFyLWdyYWRpZW50KGxlZnQscmdiYSgwLDAsMCwuNSkscmdiYSgwLDAsMCwwKSk7YmFja2dyb3VuZC1pbWFnZTotby1saW5lYXItZ3JhZGllbnQobGVmdCxyZ2JhKDAsMCwwLC41KSxyZ2JhKDAsMCwwLDApKTtiYWNrZ3JvdW5kLWltYWdlOmxpbmVhci1ncmFkaWVudCh0byByaWdodCxyZ2JhKDAsMCwwLC41KSxyZ2JhKDAsMCwwLDApKX0uc3dpcGVyLWNvbnRhaW5lci0zZCAuc3dpcGVyLXNsaWRlLXNoYWRvdy10b3B7YmFja2dyb3VuZC1pbWFnZTotd2Via2l0LWdyYWRpZW50KGxpbmVhcixsZWZ0IGJvdHRvbSxsZWZ0IHRvcCxmcm9tKHJnYmEoMCwwLDAsLjUpKSx0byhyZ2JhKDAsMCwwLDApKSk7YmFja2dyb3VuZC1pbWFnZTotd2Via2l0LWxpbmVhci1ncmFkaWVudChib3R0b20scmdiYSgwLDAsMCwuNSkscmdiYSgwLDAsMCwwKSk7YmFja2dyb3VuZC1pbWFnZTotby1saW5lYXItZ3JhZGllbnQoYm90dG9tLHJnYmEoMCwwLDAsLjUpLHJnYmEoMCwwLDAsMCkpO2JhY2tncm91bmQtaW1hZ2U6bGluZWFyLWdyYWRpZW50KHRvIHRvcCxyZ2JhKDAsMCwwLC41KSxyZ2JhKDAsMCwwLDApKX0uc3dpcGVyLWNvbnRhaW5lci0zZCAuc3dpcGVyLXNsaWRlLXNoYWRvdy1ib3R0b217YmFja2dyb3VuZC1pbWFnZTotd2Via2l0LWdyYWRpZW50KGxpbmVhcixsZWZ0IHRvcCxsZWZ0IGJvdHRvbSxmcm9tKHJnYmEoMCwwLDAsLjUpKSx0byhyZ2JhKDAsMCwwLDApKSk7YmFja2dyb3VuZC1pbWFnZTotd2Via2l0LWxpbmVhci1ncmFkaWVudCh0b3AscmdiYSgwLDAsMCwuNSkscmdiYSgwLDAsMCwwKSk7YmFja2dyb3VuZC1pbWFnZTotby1saW5lYXItZ3JhZGllbnQodG9wLHJnYmEoMCwwLDAsLjUpLHJnYmEoMCwwLDAsMCkpO2JhY2tncm91bmQtaW1hZ2U6bGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSxyZ2JhKDAsMCwwLC41KSxyZ2JhKDAsMCwwLDApKX0uc3dpcGVyLWNvbnRhaW5lci13cDgtaG9yaXpvbnRhbCwuc3dpcGVyLWNvbnRhaW5lci13cDgtaG9yaXpvbnRhbD4uc3dpcGVyLXdyYXBwZXJ7LW1zLXRvdWNoLWFjdGlvbjpwYW4teTt0b3VjaC1hY3Rpb246cGFuLXl9LnN3aXBlci1jb250YWluZXItd3A4LXZlcnRpY2FsLC5zd2lwZXItY29udGFpbmVyLXdwOC12ZXJ0aWNhbD4uc3dpcGVyLXdyYXBwZXJ7LW1zLXRvdWNoLWFjdGlvbjpwYW4teDt0b3VjaC1hY3Rpb246cGFuLXh9LnN3aXBlci1idXR0b24tbmV4dCwuc3dpcGVyLWJ1dHRvbi1wcmV2e3Bvc2l0aW9uOmFic29sdXRlO3RvcDo1MCU7d2lkdGg6MjdweDtoZWlnaHQ6NDRweDttYXJnaW4tdG9wOi0yMnB4O3otaW5kZXg6MTA7Y3Vyc29yOnBvaW50ZXI7YmFja2dyb3VuZC1zaXplOjI3cHggNDRweDtiYWNrZ3JvdW5kLXBvc2l0aW9uOmNlbnRlcjtiYWNrZ3JvdW5kLXJlcGVhdDpuby1yZXBlYXR9LnN3aXBlci1idXR0b24tbmV4dC5zd2lwZXItYnV0dG9uLWRpc2FibGVkLC5zd2lwZXItYnV0dG9uLXByZXYuc3dpcGVyLWJ1dHRvbi1kaXNhYmxlZHtvcGFjaXR5Oi4zNTtjdXJzb3I6YXV0bztwb2ludGVyLWV2ZW50czpub25lfS5zd2lwZXItYnV0dG9uLXByZXYsLnN3aXBlci1jb250YWluZXItcnRsIC5zd2lwZXItYnV0dG9uLW5leHR7YmFja2dyb3VuZC1pbWFnZTp1cmwoXCJkYXRhOmltYWdlL3N2Zyt4bWw7Y2hhcnNldD11dGYtOCwlM0NzdmclMjB4bWxucyUzRCdodHRwJTNBJTJGJTJGd3d3LnczLm9yZyUyRjIwMDAlMkZzdmcnJTIwdmlld0JveCUzRCcwJTIwMCUyMDI3JTIwNDQnJTNFJTNDcGF0aCUyMGQlM0QnTTAlMkMyMkwyMiUyQzBsMi4xJTJDMi4xTDQuMiUyQzIybDE5LjklMkMxOS45TDIyJTJDNDRMMCUyQzIyTDAlMkMyMkwwJTJDMjJ6JyUyMGZpbGwlM0QnJTIzMDA3YWZmJyUyRiUzRSUzQyUyRnN2ZyUzRVwiKTtsZWZ0OjEwcHg7cmlnaHQ6YXV0b30uc3dpcGVyLWJ1dHRvbi1uZXh0LC5zd2lwZXItY29udGFpbmVyLXJ0bCAuc3dpcGVyLWJ1dHRvbi1wcmV2e2JhY2tncm91bmQtaW1hZ2U6dXJsKFwiZGF0YTppbWFnZS9zdmcreG1sO2NoYXJzZXQ9dXRmLTgsJTNDc3ZnJTIweG1sbnMlM0QnaHR0cCUzQSUyRiUyRnd3dy53My5vcmclMkYyMDAwJTJGc3ZnJyUyMHZpZXdCb3glM0QnMCUyMDAlMjAyNyUyMDQ0JyUzRSUzQ3BhdGglMjBkJTNEJ00yNyUyQzIyTDI3JTJDMjJMNSUyQzQ0bC0yLjEtMi4xTDIyLjglMkMyMkwyLjklMkMyLjFMNSUyQzBMMjclMkMyMkwyNyUyQzIyeiclMjBmaWxsJTNEJyUyMzAwN2FmZiclMkYlM0UlM0MlMkZzdmclM0VcIik7cmlnaHQ6MTBweDtsZWZ0OmF1dG99LnN3aXBlci1idXR0b24tcHJldi5zd2lwZXItYnV0dG9uLXdoaXRlLC5zd2lwZXItY29udGFpbmVyLXJ0bCAuc3dpcGVyLWJ1dHRvbi1uZXh0LnN3aXBlci1idXR0b24td2hpdGV7YmFja2dyb3VuZC1pbWFnZTp1cmwoXCJkYXRhOmltYWdlL3N2Zyt4bWw7Y2hhcnNldD11dGYtOCwlM0NzdmclMjB4bWxucyUzRCdodHRwJTNBJTJGJTJGd3d3LnczLm9yZyUyRjIwMDAlMkZzdmcnJTIwdmlld0JveCUzRCcwJTIwMCUyMDI3JTIwNDQnJTNFJTNDcGF0aCUyMGQlM0QnTTAlMkMyMkwyMiUyQzBsMi4xJTJDMi4xTDQuMiUyQzIybDE5LjklMkMxOS45TDIyJTJDNDRMMCUyQzIyTDAlMkMyMkwwJTJDMjJ6JyUyMGZpbGwlM0QnJTIzZmZmZmZmJyUyRiUzRSUzQyUyRnN2ZyUzRVwiKX0uc3dpcGVyLWJ1dHRvbi1uZXh0LnN3aXBlci1idXR0b24td2hpdGUsLnN3aXBlci1jb250YWluZXItcnRsIC5zd2lwZXItYnV0dG9uLXByZXYuc3dpcGVyLWJ1dHRvbi13aGl0ZXtiYWNrZ3JvdW5kLWltYWdlOnVybChcImRhdGE6aW1hZ2Uvc3ZnK3htbDtjaGFyc2V0PXV0Zi04LCUzQ3N2ZyUyMHhtbG5zJTNEJ2h0dHAlM0ElMkYlMkZ3d3cudzMub3JnJTJGMjAwMCUyRnN2ZyclMjB2aWV3Qm94JTNEJzAlMjAwJTIwMjclMjA0NCclM0UlM0NwYXRoJTIwZCUzRCdNMjclMkMyMkwyNyUyQzIyTDUlMkM0NGwtMi4xLTIuMUwyMi44JTJDMjJMMi45JTJDMi4xTDUlMkMwTDI3JTJDMjJMMjclMkMyMnonJTIwZmlsbCUzRCclMjNmZmZmZmYnJTJGJTNFJTNDJTJGc3ZnJTNFXCIpfS5zd2lwZXItYnV0dG9uLXByZXYuc3dpcGVyLWJ1dHRvbi1ibGFjaywuc3dpcGVyLWNvbnRhaW5lci1ydGwgLnN3aXBlci1idXR0b24tbmV4dC5zd2lwZXItYnV0dG9uLWJsYWNre2JhY2tncm91bmQtaW1hZ2U6dXJsKFwiZGF0YTppbWFnZS9zdmcreG1sO2NoYXJzZXQ9dXRmLTgsJTNDc3ZnJTIweG1sbnMlM0QnaHR0cCUzQSUyRiUyRnd3dy53My5vcmclMkYyMDAwJTJGc3ZnJyUyMHZpZXdCb3glM0QnMCUyMDAlMjAyNyUyMDQ0JyUzRSUzQ3BhdGglMjBkJTNEJ00wJTJDMjJMMjIlMkMwbDIuMSUyQzIuMUw0LjIlMkMyMmwxOS45JTJDMTkuOUwyMiUyQzQ0TDAlMkMyMkwwJTJDMjJMMCUyQzIyeiclMjBmaWxsJTNEJyUyMzAwMDAwMCclMkYlM0UlM0MlMkZzdmclM0VcIil9LnN3aXBlci1idXR0b24tbmV4dC5zd2lwZXItYnV0dG9uLWJsYWNrLC5zd2lwZXItY29udGFpbmVyLXJ0bCAuc3dpcGVyLWJ1dHRvbi1wcmV2LnN3aXBlci1idXR0b24tYmxhY2t7YmFja2dyb3VuZC1pbWFnZTp1cmwoXCJkYXRhOmltYWdlL3N2Zyt4bWw7Y2hhcnNldD11dGYtOCwlM0NzdmclMjB4bWxucyUzRCdodHRwJTNBJTJGJTJGd3d3LnczLm9yZyUyRjIwMDAlMkZzdmcnJTIwdmlld0JveCUzRCcwJTIwMCUyMDI3JTIwNDQnJTNFJTNDcGF0aCUyMGQlM0QnTTI3JTJDMjJMMjclMkMyMkw1JTJDNDRsLTIuMS0yLjFMMjIuOCUyQzIyTDIuOSUyQzIuMUw1JTJDMEwyNyUyQzIyTDI3JTJDMjJ6JyUyMGZpbGwlM0QnJTIzMDAwMDAwJyUyRiUzRSUzQyUyRnN2ZyUzRVwiKX0uc3dpcGVyLWJ1dHRvbi1sb2Nre2Rpc3BsYXk6bm9uZX0uc3dpcGVyLXBhZ2luYXRpb257cG9zaXRpb246YWJzb2x1dGU7dGV4dC1hbGlnbjpjZW50ZXI7LXdlYmtpdC10cmFuc2l0aW9uOi4zcyBvcGFjaXR5Oy1vLXRyYW5zaXRpb246LjNzIG9wYWNpdHk7dHJhbnNpdGlvbjouM3Mgb3BhY2l0eTstd2Via2l0LXRyYW5zZm9ybTp0cmFuc2xhdGUzZCgwLDAsMCk7dHJhbnNmb3JtOnRyYW5zbGF0ZTNkKDAsMCwwKTt6LWluZGV4OjEwfS5zd2lwZXItcGFnaW5hdGlvbi5zd2lwZXItcGFnaW5hdGlvbi1oaWRkZW57b3BhY2l0eTowfS5zd2lwZXItY29udGFpbmVyLWhvcml6b250YWw+LnN3aXBlci1wYWdpbmF0aW9uLWJ1bGxldHMsLnN3aXBlci1wYWdpbmF0aW9uLWN1c3RvbSwuc3dpcGVyLXBhZ2luYXRpb24tZnJhY3Rpb257Ym90dG9tOjEwcHg7bGVmdDowO3dpZHRoOjEwMCV9LnN3aXBlci1wYWdpbmF0aW9uLWJ1bGxldHMtZHluYW1pY3tvdmVyZmxvdzpoaWRkZW47Zm9udC1zaXplOjB9LnN3aXBlci1wYWdpbmF0aW9uLWJ1bGxldHMtZHluYW1pYyAuc3dpcGVyLXBhZ2luYXRpb24tYnVsbGV0ey13ZWJraXQtdHJhbnNmb3JtOnNjYWxlKC4zMyk7LW1zLXRyYW5zZm9ybTpzY2FsZSguMzMpO3RyYW5zZm9ybTpzY2FsZSguMzMpO3Bvc2l0aW9uOnJlbGF0aXZlfS5zd2lwZXItcGFnaW5hdGlvbi1idWxsZXRzLWR5bmFtaWMgLnN3aXBlci1wYWdpbmF0aW9uLWJ1bGxldC1hY3RpdmV7LXdlYmtpdC10cmFuc2Zvcm06c2NhbGUoMSk7LW1zLXRyYW5zZm9ybTpzY2FsZSgxKTt0cmFuc2Zvcm06c2NhbGUoMSl9LnN3aXBlci1wYWdpbmF0aW9uLWJ1bGxldHMtZHluYW1pYyAuc3dpcGVyLXBhZ2luYXRpb24tYnVsbGV0LWFjdGl2ZS1tYWluey13ZWJraXQtdHJhbnNmb3JtOnNjYWxlKDEpOy1tcy10cmFuc2Zvcm06c2NhbGUoMSk7dHJhbnNmb3JtOnNjYWxlKDEpfS5zd2lwZXItcGFnaW5hdGlvbi1idWxsZXRzLWR5bmFtaWMgLnN3aXBlci1wYWdpbmF0aW9uLWJ1bGxldC1hY3RpdmUtcHJldnstd2Via2l0LXRyYW5zZm9ybTpzY2FsZSguNjYpOy1tcy10cmFuc2Zvcm06c2NhbGUoLjY2KTt0cmFuc2Zvcm06c2NhbGUoLjY2KX0uc3dpcGVyLXBhZ2luYXRpb24tYnVsbGV0cy1keW5hbWljIC5zd2lwZXItcGFnaW5hdGlvbi1idWxsZXQtYWN0aXZlLXByZXYtcHJldnstd2Via2l0LXRyYW5zZm9ybTpzY2FsZSguMzMpOy1tcy10cmFuc2Zvcm06c2NhbGUoLjMzKTt0cmFuc2Zvcm06c2NhbGUoLjMzKX0uc3dpcGVyLXBhZ2luYXRpb24tYnVsbGV0cy1keW5hbWljIC5zd2lwZXItcGFnaW5hdGlvbi1idWxsZXQtYWN0aXZlLW5leHR7LXdlYmtpdC10cmFuc2Zvcm06c2NhbGUoLjY2KTstbXMtdHJhbnNmb3JtOnNjYWxlKC42Nik7dHJhbnNmb3JtOnNjYWxlKC42Nil9LnN3aXBlci1wYWdpbmF0aW9uLWJ1bGxldHMtZHluYW1pYyAuc3dpcGVyLXBhZ2luYXRpb24tYnVsbGV0LWFjdGl2ZS1uZXh0LW5leHR7LXdlYmtpdC10cmFuc2Zvcm06c2NhbGUoLjMzKTstbXMtdHJhbnNmb3JtOnNjYWxlKC4zMyk7dHJhbnNmb3JtOnNjYWxlKC4zMyl9LnN3aXBlci1wYWdpbmF0aW9uLWJ1bGxldHt3aWR0aDo4cHg7aGVpZ2h0OjhweDtkaXNwbGF5OmlubGluZS1ibG9jaztib3JkZXItcmFkaXVzOjEwMCU7YmFja2dyb3VuZDojMDAwO29wYWNpdHk6LjJ9YnV0dG9uLnN3aXBlci1wYWdpbmF0aW9uLWJ1bGxldHtib3JkZXI6bm9uZTttYXJnaW46MDtwYWRkaW5nOjA7LXdlYmtpdC1ib3gtc2hhZG93Om5vbmU7Ym94LXNoYWRvdzpub25lOy13ZWJraXQtYXBwZWFyYW5jZTpub25lOy1tb3otYXBwZWFyYW5jZTpub25lO2FwcGVhcmFuY2U6bm9uZX0uc3dpcGVyLXBhZ2luYXRpb24tY2xpY2thYmxlIC5zd2lwZXItcGFnaW5hdGlvbi1idWxsZXR7Y3Vyc29yOnBvaW50ZXJ9LnN3aXBlci1wYWdpbmF0aW9uLWJ1bGxldC1hY3RpdmV7b3BhY2l0eToxO2JhY2tncm91bmQ6IzAwN2FmZn0uc3dpcGVyLWNvbnRhaW5lci12ZXJ0aWNhbD4uc3dpcGVyLXBhZ2luYXRpb24tYnVsbGV0c3tyaWdodDoxMHB4O3RvcDo1MCU7LXdlYmtpdC10cmFuc2Zvcm06dHJhbnNsYXRlM2QoMCwtNTAlLDApO3RyYW5zZm9ybTp0cmFuc2xhdGUzZCgwLC01MCUsMCl9LnN3aXBlci1jb250YWluZXItdmVydGljYWw+LnN3aXBlci1wYWdpbmF0aW9uLWJ1bGxldHMgLnN3aXBlci1wYWdpbmF0aW9uLWJ1bGxldHttYXJnaW46NnB4IDA7ZGlzcGxheTpibG9ja30uc3dpcGVyLWNvbnRhaW5lci12ZXJ0aWNhbD4uc3dpcGVyLXBhZ2luYXRpb24tYnVsbGV0cy5zd2lwZXItcGFnaW5hdGlvbi1idWxsZXRzLWR5bmFtaWN7dG9wOjUwJTstd2Via2l0LXRyYW5zZm9ybTp0cmFuc2xhdGVZKC01MCUpOy1tcy10cmFuc2Zvcm06dHJhbnNsYXRlWSgtNTAlKTt0cmFuc2Zvcm06dHJhbnNsYXRlWSgtNTAlKTt3aWR0aDo4cHh9LnN3aXBlci1jb250YWluZXItdmVydGljYWw+LnN3aXBlci1wYWdpbmF0aW9uLWJ1bGxldHMuc3dpcGVyLXBhZ2luYXRpb24tYnVsbGV0cy1keW5hbWljIC5zd2lwZXItcGFnaW5hdGlvbi1idWxsZXR7ZGlzcGxheTppbmxpbmUtYmxvY2s7LXdlYmtpdC10cmFuc2l0aW9uOi4ycyB0b3AsLjJzIC13ZWJraXQtdHJhbnNmb3JtO3RyYW5zaXRpb246LjJzIHRvcCwuMnMgLXdlYmtpdC10cmFuc2Zvcm07LW8tdHJhbnNpdGlvbjouMnMgdHJhbnNmb3JtLC4ycyB0b3A7dHJhbnNpdGlvbjouMnMgdHJhbnNmb3JtLC4ycyB0b3A7dHJhbnNpdGlvbjouMnMgdHJhbnNmb3JtLC4ycyB0b3AsLjJzIC13ZWJraXQtdHJhbnNmb3JtfS5zd2lwZXItY29udGFpbmVyLWhvcml6b250YWw+LnN3aXBlci1wYWdpbmF0aW9uLWJ1bGxldHMgLnN3aXBlci1wYWdpbmF0aW9uLWJ1bGxldHttYXJnaW46MCA0cHh9LnN3aXBlci1jb250YWluZXItaG9yaXpvbnRhbD4uc3dpcGVyLXBhZ2luYXRpb24tYnVsbGV0cy5zd2lwZXItcGFnaW5hdGlvbi1idWxsZXRzLWR5bmFtaWN7bGVmdDo1MCU7LXdlYmtpdC10cmFuc2Zvcm06dHJhbnNsYXRlWCgtNTAlKTstbXMtdHJhbnNmb3JtOnRyYW5zbGF0ZVgoLTUwJSk7dHJhbnNmb3JtOnRyYW5zbGF0ZVgoLTUwJSk7d2hpdGUtc3BhY2U6bm93cmFwfS5zd2lwZXItY29udGFpbmVyLWhvcml6b250YWw+LnN3aXBlci1wYWdpbmF0aW9uLWJ1bGxldHMuc3dpcGVyLXBhZ2luYXRpb24tYnVsbGV0cy1keW5hbWljIC5zd2lwZXItcGFnaW5hdGlvbi1idWxsZXR7LXdlYmtpdC10cmFuc2l0aW9uOi4ycyBsZWZ0LC4ycyAtd2Via2l0LXRyYW5zZm9ybTt0cmFuc2l0aW9uOi4ycyBsZWZ0LC4ycyAtd2Via2l0LXRyYW5zZm9ybTstby10cmFuc2l0aW9uOi4ycyB0cmFuc2Zvcm0sLjJzIGxlZnQ7dHJhbnNpdGlvbjouMnMgdHJhbnNmb3JtLC4ycyBsZWZ0O3RyYW5zaXRpb246LjJzIHRyYW5zZm9ybSwuMnMgbGVmdCwuMnMgLXdlYmtpdC10cmFuc2Zvcm19LnN3aXBlci1jb250YWluZXItaG9yaXpvbnRhbC5zd2lwZXItY29udGFpbmVyLXJ0bD4uc3dpcGVyLXBhZ2luYXRpb24tYnVsbGV0cy1keW5hbWljIC5zd2lwZXItcGFnaW5hdGlvbi1idWxsZXR7LXdlYmtpdC10cmFuc2l0aW9uOi4ycyByaWdodCwuMnMgLXdlYmtpdC10cmFuc2Zvcm07dHJhbnNpdGlvbjouMnMgcmlnaHQsLjJzIC13ZWJraXQtdHJhbnNmb3JtOy1vLXRyYW5zaXRpb246LjJzIHRyYW5zZm9ybSwuMnMgcmlnaHQ7dHJhbnNpdGlvbjouMnMgdHJhbnNmb3JtLC4ycyByaWdodDt0cmFuc2l0aW9uOi4ycyB0cmFuc2Zvcm0sLjJzIHJpZ2h0LC4ycyAtd2Via2l0LXRyYW5zZm9ybX0uc3dpcGVyLXBhZ2luYXRpb24tcHJvZ3Jlc3NiYXJ7YmFja2dyb3VuZDpyZ2JhKDAsMCwwLC4yNSk7cG9zaXRpb246YWJzb2x1dGV9LnN3aXBlci1wYWdpbmF0aW9uLXByb2dyZXNzYmFyIC5zd2lwZXItcGFnaW5hdGlvbi1wcm9ncmVzc2Jhci1maWxse2JhY2tncm91bmQ6IzAwN2FmZjtwb3NpdGlvbjphYnNvbHV0ZTtsZWZ0OjA7dG9wOjA7d2lkdGg6MTAwJTtoZWlnaHQ6MTAwJTstd2Via2l0LXRyYW5zZm9ybTpzY2FsZSgwKTstbXMtdHJhbnNmb3JtOnNjYWxlKDApO3RyYW5zZm9ybTpzY2FsZSgwKTstd2Via2l0LXRyYW5zZm9ybS1vcmlnaW46bGVmdCB0b3A7LW1zLXRyYW5zZm9ybS1vcmlnaW46bGVmdCB0b3A7dHJhbnNmb3JtLW9yaWdpbjpsZWZ0IHRvcH0uc3dpcGVyLWNvbnRhaW5lci1ydGwgLnN3aXBlci1wYWdpbmF0aW9uLXByb2dyZXNzYmFyIC5zd2lwZXItcGFnaW5hdGlvbi1wcm9ncmVzc2Jhci1maWxsey13ZWJraXQtdHJhbnNmb3JtLW9yaWdpbjpyaWdodCB0b3A7LW1zLXRyYW5zZm9ybS1vcmlnaW46cmlnaHQgdG9wO3RyYW5zZm9ybS1vcmlnaW46cmlnaHQgdG9wfS5zd2lwZXItY29udGFpbmVyLWhvcml6b250YWw+LnN3aXBlci1wYWdpbmF0aW9uLXByb2dyZXNzYmFyLC5zd2lwZXItY29udGFpbmVyLXZlcnRpY2FsPi5zd2lwZXItcGFnaW5hdGlvbi1wcm9ncmVzc2Jhci5zd2lwZXItcGFnaW5hdGlvbi1wcm9ncmVzc2Jhci1vcHBvc2l0ZXt3aWR0aDoxMDAlO2hlaWdodDo0cHg7bGVmdDowO3RvcDowfS5zd2lwZXItY29udGFpbmVyLWhvcml6b250YWw+LnN3aXBlci1wYWdpbmF0aW9uLXByb2dyZXNzYmFyLnN3aXBlci1wYWdpbmF0aW9uLXByb2dyZXNzYmFyLW9wcG9zaXRlLC5zd2lwZXItY29udGFpbmVyLXZlcnRpY2FsPi5zd2lwZXItcGFnaW5hdGlvbi1wcm9ncmVzc2Jhcnt3aWR0aDo0cHg7aGVpZ2h0OjEwMCU7bGVmdDowO3RvcDowfS5zd2lwZXItcGFnaW5hdGlvbi13aGl0ZSAuc3dpcGVyLXBhZ2luYXRpb24tYnVsbGV0LWFjdGl2ZXtiYWNrZ3JvdW5kOiNmZmZ9LnN3aXBlci1wYWdpbmF0aW9uLXByb2dyZXNzYmFyLnN3aXBlci1wYWdpbmF0aW9uLXdoaXRle2JhY2tncm91bmQ6cmdiYSgyNTUsMjU1LDI1NSwuMjUpfS5zd2lwZXItcGFnaW5hdGlvbi1wcm9ncmVzc2Jhci5zd2lwZXItcGFnaW5hdGlvbi13aGl0ZSAuc3dpcGVyLXBhZ2luYXRpb24tcHJvZ3Jlc3NiYXItZmlsbHtiYWNrZ3JvdW5kOiNmZmZ9LnN3aXBlci1wYWdpbmF0aW9uLWJsYWNrIC5zd2lwZXItcGFnaW5hdGlvbi1idWxsZXQtYWN0aXZle2JhY2tncm91bmQ6IzAwMH0uc3dpcGVyLXBhZ2luYXRpb24tcHJvZ3Jlc3NiYXIuc3dpcGVyLXBhZ2luYXRpb24tYmxhY2t7YmFja2dyb3VuZDpyZ2JhKDAsMCwwLC4yNSl9LnN3aXBlci1wYWdpbmF0aW9uLXByb2dyZXNzYmFyLnN3aXBlci1wYWdpbmF0aW9uLWJsYWNrIC5zd2lwZXItcGFnaW5hdGlvbi1wcm9ncmVzc2Jhci1maWxse2JhY2tncm91bmQ6IzAwMH0uc3dpcGVyLXBhZ2luYXRpb24tbG9ja3tkaXNwbGF5Om5vbmV9LnN3aXBlci1zY3JvbGxiYXJ7Ym9yZGVyLXJhZGl1czoxMHB4O3Bvc2l0aW9uOnJlbGF0aXZlOy1tcy10b3VjaC1hY3Rpb246bm9uZTtiYWNrZ3JvdW5kOnJnYmEoMCwwLDAsLjEpfS5zd2lwZXItY29udGFpbmVyLWhvcml6b250YWw+LnN3aXBlci1zY3JvbGxiYXJ7cG9zaXRpb246YWJzb2x1dGU7bGVmdDoxJTtib3R0b206M3B4O3otaW5kZXg6NTA7aGVpZ2h0OjVweDt3aWR0aDo5OCV9LnN3aXBlci1jb250YWluZXItdmVydGljYWw+LnN3aXBlci1zY3JvbGxiYXJ7cG9zaXRpb246YWJzb2x1dGU7cmlnaHQ6M3B4O3RvcDoxJTt6LWluZGV4OjUwO3dpZHRoOjVweDtoZWlnaHQ6OTglfS5zd2lwZXItc2Nyb2xsYmFyLWRyYWd7aGVpZ2h0OjEwMCU7d2lkdGg6MTAwJTtwb3NpdGlvbjpyZWxhdGl2ZTtiYWNrZ3JvdW5kOnJnYmEoMCwwLDAsLjUpO2JvcmRlci1yYWRpdXM6MTBweDtsZWZ0OjA7dG9wOjB9LnN3aXBlci1zY3JvbGxiYXItY3Vyc29yLWRyYWd7Y3Vyc29yOm1vdmV9LnN3aXBlci1zY3JvbGxiYXItbG9ja3tkaXNwbGF5Om5vbmV9LnN3aXBlci16b29tLWNvbnRhaW5lcnt3aWR0aDoxMDAlO2hlaWdodDoxMDAlO2Rpc3BsYXk6LXdlYmtpdC1ib3g7ZGlzcGxheTotd2Via2l0LWZsZXg7ZGlzcGxheTotbXMtZmxleGJveDtkaXNwbGF5OmZsZXg7LXdlYmtpdC1ib3gtcGFjazpjZW50ZXI7LXdlYmtpdC1qdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyOy1tcy1mbGV4LXBhY2s6Y2VudGVyO2p1c3RpZnktY29udGVudDpjZW50ZXI7LXdlYmtpdC1ib3gtYWxpZ246Y2VudGVyOy13ZWJraXQtYWxpZ24taXRlbXM6Y2VudGVyOy1tcy1mbGV4LWFsaWduOmNlbnRlcjthbGlnbi1pdGVtczpjZW50ZXI7dGV4dC1hbGlnbjpjZW50ZXJ9LnN3aXBlci16b29tLWNvbnRhaW5lcj5jYW52YXMsLnN3aXBlci16b29tLWNvbnRhaW5lcj5pbWcsLnN3aXBlci16b29tLWNvbnRhaW5lcj5zdmd7bWF4LXdpZHRoOjEwMCU7bWF4LWhlaWdodDoxMDAlOy1vLW9iamVjdC1maXQ6Y29udGFpbjtvYmplY3QtZml0OmNvbnRhaW59LnN3aXBlci1zbGlkZS16b29tZWR7Y3Vyc29yOm1vdmV9LnN3aXBlci1sYXp5LXByZWxvYWRlcnt3aWR0aDo0MnB4O2hlaWdodDo0MnB4O3Bvc2l0aW9uOmFic29sdXRlO2xlZnQ6NTAlO3RvcDo1MCU7bWFyZ2luLWxlZnQ6LTIxcHg7bWFyZ2luLXRvcDotMjFweDt6LWluZGV4OjEwOy13ZWJraXQtdHJhbnNmb3JtLW9yaWdpbjo1MCU7LW1zLXRyYW5zZm9ybS1vcmlnaW46NTAlO3RyYW5zZm9ybS1vcmlnaW46NTAlOy13ZWJraXQtYW5pbWF0aW9uOnN3aXBlci1wcmVsb2FkZXItc3BpbiAxcyBzdGVwcygxMixlbmQpIGluZmluaXRlO2FuaW1hdGlvbjpzd2lwZXItcHJlbG9hZGVyLXNwaW4gMXMgc3RlcHMoMTIsZW5kKSBpbmZpbml0ZX0uc3dpcGVyLWxhenktcHJlbG9hZGVyOmFmdGVye2Rpc3BsYXk6YmxvY2s7Y29udGVudDonJzt3aWR0aDoxMDAlO2hlaWdodDoxMDAlO2JhY2tncm91bmQtaW1hZ2U6dXJsKFwiZGF0YTppbWFnZS9zdmcreG1sO2NoYXJzZXQ9dXRmLTgsJTNDc3ZnJTIwdmlld0JveCUzRCcwJTIwMCUyMDEyMCUyMDEyMCclMjB4bWxucyUzRCdodHRwJTNBJTJGJTJGd3d3LnczLm9yZyUyRjIwMDAlMkZzdmcnJTIweG1sbnMlM0F4bGluayUzRCdodHRwJTNBJTJGJTJGd3d3LnczLm9yZyUyRjE5OTklMkZ4bGluayclM0UlM0NkZWZzJTNFJTNDbGluZSUyMGlkJTNEJ2wnJTIweDElM0QnNjAnJTIweDIlM0QnNjAnJTIweTElM0QnNyclMjB5MiUzRCcyNyclMjBzdHJva2UlM0QnJTIzNmM2YzZjJyUyMHN0cm9rZS13aWR0aCUzRCcxMSclMjBzdHJva2UtbGluZWNhcCUzRCdyb3VuZCclMkYlM0UlM0MlMkZkZWZzJTNFJTNDZyUzRSUzQ3VzZSUyMHhsaW5rJTNBaHJlZiUzRCclMjNsJyUyMG9wYWNpdHklM0QnLjI3JyUyRiUzRSUzQ3VzZSUyMHhsaW5rJTNBaHJlZiUzRCclMjNsJyUyMG9wYWNpdHklM0QnLjI3JyUyMHRyYW5zZm9ybSUzRCdyb3RhdGUoMzAlMjA2MCUyQzYwKSclMkYlM0UlM0N1c2UlMjB4bGluayUzQWhyZWYlM0QnJTIzbCclMjBvcGFjaXR5JTNEJy4yNyclMjB0cmFuc2Zvcm0lM0Qncm90YXRlKDYwJTIwNjAlMkM2MCknJTJGJTNFJTNDdXNlJTIweGxpbmslM0FocmVmJTNEJyUyM2wnJTIwb3BhY2l0eSUzRCcuMjcnJTIwdHJhbnNmb3JtJTNEJ3JvdGF0ZSg5MCUyMDYwJTJDNjApJyUyRiUzRSUzQ3VzZSUyMHhsaW5rJTNBaHJlZiUzRCclMjNsJyUyMG9wYWNpdHklM0QnLjI3JyUyMHRyYW5zZm9ybSUzRCdyb3RhdGUoMTIwJTIwNjAlMkM2MCknJTJGJTNFJTNDdXNlJTIweGxpbmslM0FocmVmJTNEJyUyM2wnJTIwb3BhY2l0eSUzRCcuMjcnJTIwdHJhbnNmb3JtJTNEJ3JvdGF0ZSgxNTAlMjA2MCUyQzYwKSclMkYlM0UlM0N1c2UlMjB4bGluayUzQWhyZWYlM0QnJTIzbCclMjBvcGFjaXR5JTNEJy4zNyclMjB0cmFuc2Zvcm0lM0Qncm90YXRlKDE4MCUyMDYwJTJDNjApJyUyRiUzRSUzQ3VzZSUyMHhsaW5rJTNBaHJlZiUzRCclMjNsJyUyMG9wYWNpdHklM0QnLjQ2JyUyMHRyYW5zZm9ybSUzRCdyb3RhdGUoMjEwJTIwNjAlMkM2MCknJTJGJTNFJTNDdXNlJTIweGxpbmslM0FocmVmJTNEJyUyM2wnJTIwb3BhY2l0eSUzRCcuNTYnJTIwdHJhbnNmb3JtJTNEJ3JvdGF0ZSgyNDAlMjA2MCUyQzYwKSclMkYlM0UlM0N1c2UlMjB4bGluayUzQWhyZWYlM0QnJTIzbCclMjBvcGFjaXR5JTNEJy42NiclMjB0cmFuc2Zvcm0lM0Qncm90YXRlKDI3MCUyMDYwJTJDNjApJyUyRiUzRSUzQ3VzZSUyMHhsaW5rJTNBaHJlZiUzRCclMjNsJyUyMG9wYWNpdHklM0QnLjc1JyUyMHRyYW5zZm9ybSUzRCdyb3RhdGUoMzAwJTIwNjAlMkM2MCknJTJGJTNFJTNDdXNlJTIweGxpbmslM0FocmVmJTNEJyUyM2wnJTIwb3BhY2l0eSUzRCcuODUnJTIwdHJhbnNmb3JtJTNEJ3JvdGF0ZSgzMzAlMjA2MCUyQzYwKSclMkYlM0UlM0MlMkZnJTNFJTNDJTJGc3ZnJTNFXCIpO2JhY2tncm91bmQtcG9zaXRpb246NTAlO2JhY2tncm91bmQtc2l6ZToxMDAlO2JhY2tncm91bmQtcmVwZWF0Om5vLXJlcGVhdH0uc3dpcGVyLWxhenktcHJlbG9hZGVyLXdoaXRlOmFmdGVye2JhY2tncm91bmQtaW1hZ2U6dXJsKFwiZGF0YTppbWFnZS9zdmcreG1sO2NoYXJzZXQ9dXRmLTgsJTNDc3ZnJTIwdmlld0JveCUzRCcwJTIwMCUyMDEyMCUyMDEyMCclMjB4bWxucyUzRCdodHRwJTNBJTJGJTJGd3d3LnczLm9yZyUyRjIwMDAlMkZzdmcnJTIweG1sbnMlM0F4bGluayUzRCdodHRwJTNBJTJGJTJGd3d3LnczLm9yZyUyRjE5OTklMkZ4bGluayclM0UlM0NkZWZzJTNFJTNDbGluZSUyMGlkJTNEJ2wnJTIweDElM0QnNjAnJTIweDIlM0QnNjAnJTIweTElM0QnNyclMjB5MiUzRCcyNyclMjBzdHJva2UlM0QnJTIzZmZmJyUyMHN0cm9rZS13aWR0aCUzRCcxMSclMjBzdHJva2UtbGluZWNhcCUzRCdyb3VuZCclMkYlM0UlM0MlMkZkZWZzJTNFJTNDZyUzRSUzQ3VzZSUyMHhsaW5rJTNBaHJlZiUzRCclMjNsJyUyMG9wYWNpdHklM0QnLjI3JyUyRiUzRSUzQ3VzZSUyMHhsaW5rJTNBaHJlZiUzRCclMjNsJyUyMG9wYWNpdHklM0QnLjI3JyUyMHRyYW5zZm9ybSUzRCdyb3RhdGUoMzAlMjA2MCUyQzYwKSclMkYlM0UlM0N1c2UlMjB4bGluayUzQWhyZWYlM0QnJTIzbCclMjBvcGFjaXR5JTNEJy4yNyclMjB0cmFuc2Zvcm0lM0Qncm90YXRlKDYwJTIwNjAlMkM2MCknJTJGJTNFJTNDdXNlJTIweGxpbmslM0FocmVmJTNEJyUyM2wnJTIwb3BhY2l0eSUzRCcuMjcnJTIwdHJhbnNmb3JtJTNEJ3JvdGF0ZSg5MCUyMDYwJTJDNjApJyUyRiUzRSUzQ3VzZSUyMHhsaW5rJTNBaHJlZiUzRCclMjNsJyUyMG9wYWNpdHklM0QnLjI3JyUyMHRyYW5zZm9ybSUzRCdyb3RhdGUoMTIwJTIwNjAlMkM2MCknJTJGJTNFJTNDdXNlJTIweGxpbmslM0FocmVmJTNEJyUyM2wnJTIwb3BhY2l0eSUzRCcuMjcnJTIwdHJhbnNmb3JtJTNEJ3JvdGF0ZSgxNTAlMjA2MCUyQzYwKSclMkYlM0UlM0N1c2UlMjB4bGluayUzQWhyZWYlM0QnJTIzbCclMjBvcGFjaXR5JTNEJy4zNyclMjB0cmFuc2Zvcm0lM0Qncm90YXRlKDE4MCUyMDYwJTJDNjApJyUyRiUzRSUzQ3VzZSUyMHhsaW5rJTNBaHJlZiUzRCclMjNsJyUyMG9wYWNpdHklM0QnLjQ2JyUyMHRyYW5zZm9ybSUzRCdyb3RhdGUoMjEwJTIwNjAlMkM2MCknJTJGJTNFJTNDdXNlJTIweGxpbmslM0FocmVmJTNEJyUyM2wnJTIwb3BhY2l0eSUzRCcuNTYnJTIwdHJhbnNmb3JtJTNEJ3JvdGF0ZSgyNDAlMjA2MCUyQzYwKSclMkYlM0UlM0N1c2UlMjB4bGluayUzQWhyZWYlM0QnJTIzbCclMjBvcGFjaXR5JTNEJy42NiclMjB0cmFuc2Zvcm0lM0Qncm90YXRlKDI3MCUyMDYwJTJDNjApJyUyRiUzRSUzQ3VzZSUyMHhsaW5rJTNBaHJlZiUzRCclMjNsJyUyMG9wYWNpdHklM0QnLjc1JyUyMHRyYW5zZm9ybSUzRCdyb3RhdGUoMzAwJTIwNjAlMkM2MCknJTJGJTNFJTNDdXNlJTIweGxpbmslM0FocmVmJTNEJyUyM2wnJTIwb3BhY2l0eSUzRCcuODUnJTIwdHJhbnNmb3JtJTNEJ3JvdGF0ZSgzMzAlMjA2MCUyQzYwKSclMkYlM0UlM0MlMkZnJTNFJTNDJTJGc3ZnJTNFXCIpfUAtd2Via2l0LWtleWZyYW1lcyBzd2lwZXItcHJlbG9hZGVyLXNwaW57MTAwJXstd2Via2l0LXRyYW5zZm9ybTpyb3RhdGUoMzYwZGVnKTt0cmFuc2Zvcm06cm90YXRlKDM2MGRlZyl9fUBrZXlmcmFtZXMgc3dpcGVyLXByZWxvYWRlci1zcGluezEwMCV7LXdlYmtpdC10cmFuc2Zvcm06cm90YXRlKDM2MGRlZyk7dHJhbnNmb3JtOnJvdGF0ZSgzNjBkZWcpfX0uc3dpcGVyLWNvbnRhaW5lciAuc3dpcGVyLW5vdGlmaWNhdGlvbntwb3NpdGlvbjphYnNvbHV0ZTtsZWZ0OjA7dG9wOjA7cG9pbnRlci1ldmVudHM6bm9uZTtvcGFjaXR5OjA7ei1pbmRleDotMTAwMH0uc3dpcGVyLWNvbnRhaW5lci1mYWRlLnN3aXBlci1jb250YWluZXItZnJlZS1tb2RlIC5zd2lwZXItc2xpZGV7LXdlYmtpdC10cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjplYXNlLW91dDstby10cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjplYXNlLW91dDt0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjplYXNlLW91dH0uc3dpcGVyLWNvbnRhaW5lci1mYWRlIC5zd2lwZXItc2xpZGV7cG9pbnRlci1ldmVudHM6bm9uZTstd2Via2l0LXRyYW5zaXRpb24tcHJvcGVydHk6b3BhY2l0eTstby10cmFuc2l0aW9uLXByb3BlcnR5Om9wYWNpdHk7dHJhbnNpdGlvbi1wcm9wZXJ0eTpvcGFjaXR5fS5zd2lwZXItY29udGFpbmVyLWZhZGUgLnN3aXBlci1zbGlkZSAuc3dpcGVyLXNsaWRle3BvaW50ZXItZXZlbnRzOm5vbmV9LnN3aXBlci1jb250YWluZXItZmFkZSAuc3dpcGVyLXNsaWRlLWFjdGl2ZSwuc3dpcGVyLWNvbnRhaW5lci1mYWRlIC5zd2lwZXItc2xpZGUtYWN0aXZlIC5zd2lwZXItc2xpZGUtYWN0aXZle3BvaW50ZXItZXZlbnRzOmF1dG99LnN3aXBlci1jb250YWluZXItY3ViZXtvdmVyZmxvdzp2aXNpYmxlfS5zd2lwZXItY29udGFpbmVyLWN1YmUgLnN3aXBlci1zbGlkZXtwb2ludGVyLWV2ZW50czpub25lOy13ZWJraXQtYmFja2ZhY2UtdmlzaWJpbGl0eTpoaWRkZW47YmFja2ZhY2UtdmlzaWJpbGl0eTpoaWRkZW47ei1pbmRleDoxO3Zpc2liaWxpdHk6aGlkZGVuOy13ZWJraXQtdHJhbnNmb3JtLW9yaWdpbjowIDA7LW1zLXRyYW5zZm9ybS1vcmlnaW46MCAwO3RyYW5zZm9ybS1vcmlnaW46MCAwO3dpZHRoOjEwMCU7aGVpZ2h0OjEwMCV9LnN3aXBlci1jb250YWluZXItY3ViZSAuc3dpcGVyLXNsaWRlIC5zd2lwZXItc2xpZGV7cG9pbnRlci1ldmVudHM6bm9uZX0uc3dpcGVyLWNvbnRhaW5lci1jdWJlLnN3aXBlci1jb250YWluZXItcnRsIC5zd2lwZXItc2xpZGV7LXdlYmtpdC10cmFuc2Zvcm0tb3JpZ2luOjEwMCUgMDstbXMtdHJhbnNmb3JtLW9yaWdpbjoxMDAlIDA7dHJhbnNmb3JtLW9yaWdpbjoxMDAlIDB9LnN3aXBlci1jb250YWluZXItY3ViZSAuc3dpcGVyLXNsaWRlLWFjdGl2ZSwuc3dpcGVyLWNvbnRhaW5lci1jdWJlIC5zd2lwZXItc2xpZGUtYWN0aXZlIC5zd2lwZXItc2xpZGUtYWN0aXZle3BvaW50ZXItZXZlbnRzOmF1dG99LnN3aXBlci1jb250YWluZXItY3ViZSAuc3dpcGVyLXNsaWRlLWFjdGl2ZSwuc3dpcGVyLWNvbnRhaW5lci1jdWJlIC5zd2lwZXItc2xpZGUtbmV4dCwuc3dpcGVyLWNvbnRhaW5lci1jdWJlIC5zd2lwZXItc2xpZGUtbmV4dCsuc3dpcGVyLXNsaWRlLC5zd2lwZXItY29udGFpbmVyLWN1YmUgLnN3aXBlci1zbGlkZS1wcmV2e3BvaW50ZXItZXZlbnRzOmF1dG87dmlzaWJpbGl0eTp2aXNpYmxlfS5zd2lwZXItY29udGFpbmVyLWN1YmUgLnN3aXBlci1zbGlkZS1zaGFkb3ctYm90dG9tLC5zd2lwZXItY29udGFpbmVyLWN1YmUgLnN3aXBlci1zbGlkZS1zaGFkb3ctbGVmdCwuc3dpcGVyLWNvbnRhaW5lci1jdWJlIC5zd2lwZXItc2xpZGUtc2hhZG93LXJpZ2h0LC5zd2lwZXItY29udGFpbmVyLWN1YmUgLnN3aXBlci1zbGlkZS1zaGFkb3ctdG9we3otaW5kZXg6MDstd2Via2l0LWJhY2tmYWNlLXZpc2liaWxpdHk6aGlkZGVuO2JhY2tmYWNlLXZpc2liaWxpdHk6aGlkZGVufS5zd2lwZXItY29udGFpbmVyLWN1YmUgLnN3aXBlci1jdWJlLXNoYWRvd3twb3NpdGlvbjphYnNvbHV0ZTtsZWZ0OjA7Ym90dG9tOjA7d2lkdGg6MTAwJTtoZWlnaHQ6MTAwJTtiYWNrZ3JvdW5kOiMwMDA7b3BhY2l0eTouNjstd2Via2l0LWZpbHRlcjpibHVyKDUwcHgpO2ZpbHRlcjpibHVyKDUwcHgpO3otaW5kZXg6MH0uc3dpcGVyLWNvbnRhaW5lci1mbGlwe292ZXJmbG93OnZpc2libGV9LnN3aXBlci1jb250YWluZXItZmxpcCAuc3dpcGVyLXNsaWRle3BvaW50ZXItZXZlbnRzOm5vbmU7LXdlYmtpdC1iYWNrZmFjZS12aXNpYmlsaXR5OmhpZGRlbjtiYWNrZmFjZS12aXNpYmlsaXR5OmhpZGRlbjt6LWluZGV4OjF9LnN3aXBlci1jb250YWluZXItZmxpcCAuc3dpcGVyLXNsaWRlIC5zd2lwZXItc2xpZGV7cG9pbnRlci1ldmVudHM6bm9uZX0uc3dpcGVyLWNvbnRhaW5lci1mbGlwIC5zd2lwZXItc2xpZGUtYWN0aXZlLC5zd2lwZXItY29udGFpbmVyLWZsaXAgLnN3aXBlci1zbGlkZS1hY3RpdmUgLnN3aXBlci1zbGlkZS1hY3RpdmV7cG9pbnRlci1ldmVudHM6YXV0b30uc3dpcGVyLWNvbnRhaW5lci1mbGlwIC5zd2lwZXItc2xpZGUtc2hhZG93LWJvdHRvbSwuc3dpcGVyLWNvbnRhaW5lci1mbGlwIC5zd2lwZXItc2xpZGUtc2hhZG93LWxlZnQsLnN3aXBlci1jb250YWluZXItZmxpcCAuc3dpcGVyLXNsaWRlLXNoYWRvdy1yaWdodCwuc3dpcGVyLWNvbnRhaW5lci1mbGlwIC5zd2lwZXItc2xpZGUtc2hhZG93LXRvcHt6LWluZGV4OjA7LXdlYmtpdC1iYWNrZmFjZS12aXNpYmlsaXR5OmhpZGRlbjtiYWNrZmFjZS12aXNpYmlsaXR5OmhpZGRlbn0uc3dpcGVyLWNvbnRhaW5lci1jb3ZlcmZsb3cgLnN3aXBlci13cmFwcGVyey1tcy1wZXJzcGVjdGl2ZToxMjAwcHh9IiwiQGltcG9ydCAnfnN3aXBlci9kaXN0L2Nzcy9zd2lwZXIubWluLmNzcyc7XG4ubGt7Zm9udC1zaXplOjI1cHg7fVxuLmNfcHJpbWFyeXtjb2xvcjojMjM1MjdjO31cbi5zaW5nbGUtbmV3e2JhY2tncm91bmQ6I2ZmZjtvdmVyZmxvdzpoaWRkZW47cG9zaXRpb246cmVsYXRpdmU7Ym9yZGVyOjFweCBzb2xpZCAjZTZlNmU2Oy13ZWJraXQtdHJhbnNpdGlvbi1kdXJhdGlvbjowLjRzOy1tb3otdHJhbnNpdGlvbi1kdXJhdGlvbjowLjRzOy1tcy10cmFuc2l0aW9uLWR1cmF0aW9uOjAuNHM7LW8tdHJhbnNpdGlvbi1kdXJhdGlvbjowLjRzO3RyYW5zaXRpb24tZHVyYXRpb246MC40czt9XG4uc2luZ2xlLW5ldzpob3Zlcixcbi5zaW5nbGUtbmV3LmFjdGl2ZXstd2Via2l0LWJveC1zaGFkb3c6MCAxcHggMTBweCByZ2JhKDAsMCwwLC4xNSk7LW1vei1ib3gtc2hhZG93OjAgMXB4IDEwcHggcmdiYSgwLDAsMCwuMTUpO2JveC1zaGFkb3c6MCAxcHggMTBweCByZ2JhKDAsMCwwLC4xNSk7LXdlYmtpdC10cmFuc2l0aW9uLWR1cmF0aW9uOjAuNHM7LW1vei10cmFuc2l0aW9uLWR1cmF0aW9uOjAuNHM7LW1zLXRyYW5zaXRpb24tZHVyYXRpb246MC40czstby10cmFuc2l0aW9uLWR1cmF0aW9uOjAuNHM7dHJhbnNpdGlvbi1kdXJhdGlvbjowLjRzOy13ZWJraXQtdHJhbnNmb3JtOnNjYWxlKDEuMSk7LW1vei10cmFuc2Zvcm06c2NhbGUoMS4xKTstbXMtdHJhbnNmb3JtOnNjYWxlKDEuMSk7LW8tdHJhbnNmb3JtOnNjYWxlKDEuMSk7dHJhbnNmb3JtOnNjYWxlKDEuMSk7ei1pbmRleDo5O31cbi5zaW5nbGUtbmV3IC5pbWFnZXtmbG9hdDpsZWZ0O21hcmdpbi1yaWdodDoyMHB4O31cbi5zaW5nbGUtbmV3IC5pbWFnZSBpbWd7d2lkdGg6MTAwJTt9XG4uc2luZ2xlLW5ldyAuZGF0e2ZvbnQtc2l6ZToxMnB4O2NvbG9yOiNmZmZmZmY7bGluZS1oZWlnaHQ6MTJweDt0ZXh0LWFsaWduOmNlbnRlcjttYXJnaW4tcmlnaHQ6MTBweDtwYWRkaW5nOjJweCA4cHggNHB4IDhweDtkaXNwbGF5OmlubGluZS1ibG9jazt2ZXJ0aWNhbC1hbGlnbjptaWRkbGU7YmFja2dyb3VuZC1jb2xvcjojZTAxOTRhO31cbi5zaW5nbGUtbmV3IC5kYXQgc3BhbntkaXNwbGF5OmJsb2NrO2ZvbnQtc2l6ZToxM3B4O31cbi5zaW5nbGUtbmV3IC50aXRsZXtmb250LXNpemU6MTYuNXB4O2Rpc3BsYXk6aW5saW5lLWJsb2NrO3ZlcnRpY2FsLWFsaWduOm1pZGRsZTt9XG4uc2luZ2xlLW5ldyAuZGVzY3JpcHRpb257cGFkZGluZzoxM3B4IDIwcHggMHB4IDEwcHg7fVxuLnNpbmdsZS1uZXcgLmRlc2NyaXB0aW9uIHB7Zm9udC1zaXplOjEycHg7dGV4dC1hbGlnbjpqdXN0aWZ5O31cbiNmZWF0dXJlcyAubGF5b3V0X3RleHR7cGFkZGluZy1sZWZ0OjUwcHg7bWFyZ2luLXJpZ2h0Oi01MHB4O31cbi5mZWF0dXJlc19sYXlvdXR7cG9zaXRpb246cmVsYXRpdmU7cGFkZGluZy1sZWZ0OjcwcHg7fVxuLmZlYXR1cmVzX2xheW91dC50eXBlMntwb3NpdGlvbjpyZWxhdGl2ZTtwYWRkaW5nLWxlZnQ6MHB4O31cbi5mZWF0dXJlc19sYXlvdXQgLmljb3tmbG9hdDpsZWZ0O21hcmdpbi1yaWdodDozMHB4O21hcmdpbi1ib3R0b206MzhweH1cbi5mZWF0dXJlc19sYXlvdXQgaDV7Zm9udC1zaXplOjI0cHg7fVxuLmZlYXR1cmVzX2xheW91dCBwe21hcmdpbi1yaWdodDotMTBweDt9XG4ucGFyYWdyYXBoc19sYXlvdXQgLnRpdGxlIGltZ3ttYXJnaW46MHB4IDEwcHggLThweCAxMHB4O3ZlcnRpY2FsLWFsaWduOmJvdHRvbTt9XG4ucGFyYWdyYXBoc19sYXlvdXQgLnNpbmdsZS1ibG9jayBwLFxuLnBhcmFncmFwaHNfbGF5b3V0IC5zaW5nbGUtYmxvY2sgc3Bhbntjb2xvcjojNTE1ZTczO2ZvbnQtc2l6ZToxNXB4O2xpbmUtaGVpZ2h0OjI0cHg7cGFkZGluZy1yaWdodDo3MHB4O31cbi5iYW5uZXItcmVzcG9uc2l2ZXtkaXNwbGF5OiBub25lO31cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6MTAyNHB4KXtcbi5mZWF0dXJlc19sYXlvdXQgLnRpdGxlIGgye21hcmdpbi1ib3R0b206MHB4ICFpbXBvcnRhbnQ7cGFkZGluZy1ib3R0b206MHB4ICFpbXBvcnRhbnQ7fVxufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDo3NjhweCl7XG4uYmFubmVyLXdlYntkaXNwbGF5OiBub25lO31cbi5iYW5uZXItcmVzcG9uc2l2ZXtkaXNwbGF5OiBibG9jazt9XG4uZmVhdHVyZXNfbGF5b3V0IC5tYjYwe21hcmdpbi1ib3R0b206MTVweCAhaW1wb3J0YW50O31cbi5mZWF0dXJlc19sYXlvdXQgaDV7Zm9udC1zaXplOjE4cHg7fVxuI2ZlYXR1cmVzIC5sYXlvdXRfdGV4dHttYXJnaW4tcmlnaHQ6YXV0byAhaW1wb3J0YW50O31cbi50ZWFtLWRlc2MgKnt0ZXh0LWFsaWduOmNlbnRlciAhaW1wb3J0YW50O31cbi5saXN0LWl0ZW1zIC5pdGVte2Rpc3BsYXk6aW5saW5lLWJsb2NrO3ZlcnRpY2FsLWFsaWduOm1pZGRsZTttYXJnaW46MTBweCA0MHB4O31cbi5mZWF0dXJlc19sYXlvdXR7cGFkZGluZy1sZWZ0OjI1cHggIWltcG9ydGFudDt9XG4uYmFubmVyLWhvbWUtaGVhZGVye3BhZGRpbmctcmlnaHQ6IDBweCAhaW1wb3J0YW50OyBwYWRkaW5nLWxlZnQ6IDBweCAhaW1wb3J0YW50O31cbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6NzAwcHgpe1xuLmZlYXR1cmVzX2xheW91dC50eXBlMntwb3NpdGlvbjpyZWxhdGl2ZTtwYWRkaW5nLWxlZnQ6MzVweDtwYWRkaW5nLXJpZ2h0OjM1cHg7fVxuLmRldmljZXMtaW1nLTJ7cG9zaXRpb246cmVsYXRpdmU7dG9wOmluaXRpYWw7cmlnaHQ6aW5pdGlhbDttYXJnaW46MCBhdXRvO3dpZHRoOjIwMHB4O31cbiNmZWF0dXJlcyAubGF5b3V0X3RleHR7bWFyZ2luLXRvcDphdXRvO3BhZGRpbmctbGVmdDoxNXB4O21hcmdpbi1ib3R0b206MHB4O31cbiNmZWF0dXJlcyAuYXBwcyBpbWd7d2lkdGg6NDglO2hlaWdodDphdXRvICFpbXBvcnRhbnQ7ZGlzcGxheTppbmxpbmUtYmxvY2s7dmVydGljYWwtYWxpZ246bWlkZGxlO31cbiNmZWF0dXJlc3twYWRkaW5nOjQwcHggMHB4ICFpbXBvcnRhbnQ7fVxuI2ZlYXR1cmVzIC5oMiwgI2ZlYXR1cmVzIGgye2ZvbnQtc2l6ZToyNXB4O31cbiNmZWF0dXJlcyAudGl0bGV7dGV4dC1hbGlnbjpjZW50ZXI7fVxuLnJfcmVkdXhfaW1ne3dpZHRoOjI1MHB4O2Rpc3BsYXk6YmxvY2s7bWFyZ2luLXRvcDoxNXB4O21hcmdpbi1ib3R0b206MTVweDt9XG4jY3VzdG9tZXJfdXN7YmFja2dyb3VuZDojZjZmNmY2ICFpbXBvcnRhbnQ7fVxuLnBhcmFncmFwaHNfbGF5b3V0IC5zaW5nbGUtYmxvY2sgcCwgLnBhcmFncmFwaHNfbGF5b3V0IC5zaW5nbGUtYmxvY2sgc3BhbntwYWRkaW5nLXJpZ2h0OjBweCAhaW1wb3J0YW50O31cbiNoc2VydmljZXN7cGFkZGluZy1ib3R0b206MzBweCAhaW1wb3J0YW50O31cbiNoc2VydmljZXMgLmltZy1mZWF0dXJle2Rpc3BsYXk6bm9uZSAhaW1wb3J0YW50O31cbiNoc2VydmljZXMgLnNpbmdsZS1tb2R1bGV7bWFyZ2luLWJvdHRvbToxMHB4ICFpbXBvcnRhbnQ7fVxuI2hzZXJ2aWNlcyAudGVhbS1kZXNje2JvcmRlcjoxcHggc29saWQgI2IxYjFiMTt9XG4jaHNlcnZpY2VzIC5zaW5nbGUtbW9kdWxlIC50ZWFtLWRlc2N7bWFyZ2luLWJvdHRvbTowcHggIWltcG9ydGFudDtwYWRkaW5nLWJvdHRvbTowcHggIWltcG9ydGFudDt9XG4jaHNlcnZpY2VzIC5zaW5nbGUtbW9kdWxlIC50ZWFtLWRlc2MgaDR7cGFkZGluZzoyNXB4IDEwcHggIWltcG9ydGFudDtmb250LXNpemU6MTVweCAhaW1wb3J0YW50O31cbiNoZXZlbnRze3BhZGRpbmctYm90dG9tOjUwcHggIWltcG9ydGFudDt9XG4jaGV2ZW50cyAuZy1ldntwYWRkaW5nLWJvdHRvbTo1MHB4ICFpbXBvcnRhbnQ7fVxuLmxpc3QtaXRlbXN7dGV4dC1hbGlnbjpjZW50ZXIgIWltcG9ydGFudDt9XG4ubGlzdC1pdGVtcyAuaXRlbXt3aWR0aDo0NSUgIWltcG9ydGFudDttYXJnaW46MTBweCAyJSAhaW1wb3J0YW50O31cbiNob21lIC5lbGVtZW50e2ZvbnQtc2l6ZToyMnB4ICFpbXBvcnRhbnQ7fVxuLnRlYW1fbGF5b3V0MiAudGVhbS1ibG9ja3ttYXJnaW4tYm90dG9tOjI1cHggIWltcG9ydGFudDt9XG4udGVhbV9sYXlvdXQye3BhZGRpbmctYm90dG9tOjIwcHggIWltcG9ydGFudDt9XG4jZmVhdHVyZXMgLmRldmljZXMtaW1nLTF7d2lkdGg6Mjk1cHggIWltcG9ydGFudDtoZWlnaHQ6YXV0byAhaW1wb3J0YW50O2xlZnQ6NDBweCAhaW1wb3J0YW50O31cbiNmZWF0dXJlcyAuZGV2aWNlcy1pbWctMntyaWdodDowcHggIWltcG9ydGFudDttYXJnaW4tcmlnaHQ6MzhweCAhaW1wb3J0YW50O3dpZHRoOjEyNXB4ICFpbXBvcnRhbnQ7bWFyZ2luLWJvdHRvbToxNXB4O31cbiNmZWF0dXJlcyBoMntkaXNwbGF5Om5vbmUgIWltcG9ydGFudDt9XG4jZmVhdHVyZXMgLnRpdGxlIHB7bWFyZ2luLWJvdHRvbToxMHB4ICFpbXBvcnRhbnQ7fVxuI2ZlYXR1cmVzIC5iZy1pbWFnZTJfY250e21hcmdpbi1ib3R0b206MHB4ICFpbXBvcnRhbnQ7fVxuI2hzZXJ2aWNlcyBoMntwYWRkaW5nLWJvdHRvbTowcHggIWltcG9ydGFudDt9XG4jaHNlcnZpY2VzIC5kZXNjcmlwdGlvbiBwe21hcmdpbi1ib3R0b206MTBweCAhaW1wb3J0YW50O31cbiNoZXZlbnRzIC5zaW5nbGUtbmV3Om50aC1jaGlsZCgxKSwgI2hldmVudHMgLnNpbmdsZS1uZXc6bnRoLWNoaWxkKDMpe2Rpc3BsYXk6bm9uZSAhaW1wb3J0YW50O31cbiNoZXZlbnRzIC5zaW5nbGUtbmV3IC5pbWFnZXtwb3NpdGlvbjpyZWxhdGl2ZTtvdmVyZmxvdzpoaWRkZW47d2lkdGg6OTVweCAhaW1wb3J0YW50O2hlaWdodDoxMzBweCAhaW1wb3J0YW50O31cbiNoZXZlbnRzIC5sa3tkaXNwbGF5Om5vbmUgIWltcG9ydGFudDt9XG4jaGV2ZW50cyAuZmlzcnQtc2VjdGlvbntwYWRkaW5nLWJvdHRvbToyMHB4ICFpbXBvcnRhbnQ7fVxuI2hldmVudHMgLnNpbmdsZS1uZXcgLmltYWdlIGltZ3twb3NpdGlvbjphYnNvbHV0ZSAhaW1wb3J0YW50O3dpZHRoOjIwN3B4O2hlaWdodDphdXRvO2xlZnQ6LTYwJTt0b3A6MHB4O31cbiNmZWF0dXJlcy0yIC5zcGFjZS1pbWdlLTF7cG9zaXRpb246YWJzb2x1dGU7bWFyZ2luLXRvcDoxMTBweDt0ZXh0LWFsaWduOmNlbnRlcjt9XG4jZmVhdHVyZXMtMiAuc3BhY2UtaW1nZS0xLXBvc3R7cGFkZGluZy1ib3R0b206MjkwcHg7fVxuI2ZlYXR1cmVzLTIgLnNwYWNlLWltZ2UtMntwb3NpdGlvbjphYnNvbHV0ZTttYXJnaW4tdG9wOjEzNXB4O3RleHQtYWxpZ246Y2VudGVyO2xlZnQ6MHB4O31cbiNmZWF0dXJlcy0yIC5zcGFjZS1pbWdlLTItcG9zdHtwYWRkaW5nLWJvdHRvbToyOTBweDt9XG4jZmVhdHVyZXMtMiAuc2luZ2xlLWVsZW1lbnR7Y2xlYXI6Ym90aDt9XG4jZmVhdHVyZXMtMiAuc2luZ2xlLWVsZW1lbnQgcHtkaXNwbGF5Om5vbmUgIWltcG9ydGFudDt9XG4jZmVhdHVyZXMtMiAuZmVhdHVyZXNfbGF5b3V0IC5pY297bWFyZ2luLWJvdHRvbToxNHB4O31cbi5oaWRlX3Jlc3BvbnNpdmV7ZGlzcGxheTpub25lICFpbXBvcnRhbnQ7fVxuI2N1c3RvbWVyX3Vze3BhZGRpbmc6NTBweCAwcHggIWltcG9ydGFudDt9XG4jY3VzdG9tZXJfdXMgLnRpdGxlIGgye3BhZGRpbmctYm90dG9tOjBweCAhaW1wb3J0YW50O31cbiNjdXN0b21lcl91cyAuc2luZ2xlLWJsb2Nre21hcmdpbi1ib3R0b206MzBweCAhaW1wb3J0YW50O31cbiNyZW50IC50ZWFtLWJsb2NrOm50aC1jaGlsZCgyKSwgI3JlbnQgLnRlYW0tYmxvY2s6bnRoLWNoaWxkKDMpLCAjcmVudCAudGVhbS1ibG9jazpudGgtY2hpbGQoNCl7ZGlzcGxheTpub25lICFpbXBvcnRhbnQ7fVxuLmZlYXR1cmVzX2xheW91dCBoNXtjb2xvcjojNTE1ZTczO31cbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6NzAwcHgpe1xuLnJfcmVkdXhfaW1ne3dpZHRoOjEyMHB4ICFpbXBvcnRhbnQ7fVxuI3NlY3Rpb25fbWFwe2Rpc3BsYXk6bm9uZSAhaW1wb3J0YW50O31cbiNyZW50e3BhZGRpbmctYm90dG9tOjBweCAhaW1wb3J0YW50O21hcmdpbi1ib3R0b206LTMwcHggIWltcG9ydGFudDt9XG59Il19 */"

/***/ }),

/***/ "./src/app/components/pages/home/home.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/pages/home/home.component.ts ***!
  \*********************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var HomeComponent = /** @class */ (function () {
    function HomeComponent(meta, title, router) {
        this.meta = meta;
        this.title = title;
        this.router = router;
        this.titlePage = 'Home | Salon Home';
        this.HairStylist = [
            {
                img: "assets/images/listing/hair-stylist/cherelle-renee.jpg",
                title: "Cherelle Renee",
                reviews: "1",
                stars: "5",
                description: "Cherelle Renee strives to continue to encourage and motivate aspiring artists and stylists in the hair industry. Presenting and providing broad opportunities...",
                price: ""
            },
            {
                img: "assets/images/listing/hair-stylist/jennifer-cho.jpg",
                title: "Jennifer Cho",
                reviews: "30",
                stars: "5",
                description: "Everyone knows that Los Angeles's Jennifer Cho Hair Designer is the best hair salon for a professional cut and color. Pamper your locks with a cut and color...",
                price: ""
            },
            {
                img: "assets/images/listing/hair-stylist/tanikas-torrice.jpg",
                title: "Tanika’s Torrice",
                reviews: "4",
                stars: "5",
                description: "Tanika Torrice is a Hair Extension Artist/Designer from Toronto, Canada. She currently owns and operates a private hair extension salon, Hair Enhancements ...",
                price: ""
            },
            {
                img: "assets/images/listing/hair-stylist/frankie-rosado-orlando.jpg",
                title: "Hair By Frankie Rosado",
                reviews: "9",
                stars: "5",
                description: "Frankie Rosado has been in the cosmetology business for over 10 years and has an incredible passion for hair. He strives to make his clients feel at...",
                price: ""
            },
            {
                img: "assets/images/listing/hair-stylist/imanis-essence-of-beauty.jpg",
                title: "Imani’s Essence of...",
                reviews: "5",
                stars: "5",
                description: "Dedicated to the happiness of her clients. Come experience a stylists that promotes inner as well as outer well being by making you look and...",
                price: ""
            },
            {
                img: "assets/images/listing/hair-stylist/jessica-portillo-new.jpg",
                title: "Jessica Portillo",
                reviews: "15",
                stars: "5",
                description: "She earned her reputation as a stylist and colorist and balayage technician over 15 years of working at such greats as David and Friends Hair Salon, the late...",
                price: ""
            },
            {
                img: "assets/images/listing/hair-stylist/cristophe-salon.jpg",
                title: "Cristophe Salon",
                reviews: "82",
                stars: "4.5",
                description: "Beauty should be simple. From inner to outer beauty, one should always radiate. Our stylists' approach is based on maximizing personal features by gently...",
                price: ""
            },
            {
                img: "assets/images/listing/hair-stylist/jasmine-milsap-hair.jpg",
                title: "Jasmine Milsap Hair",
                reviews: "21",
                stars: "5",
                description: "Stylist Jasmine is a natural hair expert, and specializes in everything from sew-in extensions, to weaves, to relaxer treatments. Jasmine makes...",
                price: ""
            }
        ];
        this.Barbers = [
            {
                img: "assets/images/listing/barbers/romeo-the-barber-smyrna.jpg",
                title: "Romeo The Barber",
                reviews: "5",
                stars: "5",
                description: "Men's, kids, women's, military, seniors haircuts and designs. If you have hair, i can cut it!! Come in and let me improve your look...",
                price: ""
            },
            {
                img: "assets/images/listing/barbers/christophers-barber-studio-elkridge.jpg",
                title: "Christopher’s Barber...",
                reviews: "42",
                stars: "4.5",
                description: "For those who haven't heard yet, Chris and Jeff (the Hall brothers) have left Miles Barber shop in Laurel and moved to a brand.",
                price: ""
            },
            {
                img: "assets/images/listing/barbers/rey-barber-shop-bloomfield.jpg",
                title: "Rey Barber Shop",
                reviews: "1",
                stars: "5",
                description: "Everyone knows that Bloomfield's Rey Barber Shop is the best hair salon for a professional cut and color. With services like hair cuts...",
                price: ""
            },
            {
                img: "assets/images/listing/barbers/xecutive-cutz-barbershop-jacksonville.jpg",
                title: "Xecutive Cutz Barbershop",
                reviews: "9",
                stars: "4.5",
                description: "At Xecutive Cutz Barbershop, our objective is to focus on great hair and superior customer service. To provide the best...",
                price: ""
            },
            {
                img: "assets/images/listing/barbers/leroys-barber-shop-philadelphia.jpg",
                title: "Leroy’s Barber Shop",
                reviews: "3",
                stars: "5",
                description: "Leroy's Barber Shop is operated right here in Philadelphia, PA. Since our shop opened its doors in 2013, we've treated every...",
                price: ""
            },
            {
                img: "assets/images/listing/barbers/el-catrin-barbershop-santa-ana.jpg",
                title: "El Catrin Barbershop",
                reviews: "170",
                stars: "4.5",
                description: "We are California licensed Barbers providing proper haircut and shaves. All of our services are cash only. If you have...",
                price: ""
            },
            {
                img: "assets/images/listing/barbers/troys-barber-shop-and-sues-hair-styling-baton-rouge.jpg",
                title: "Troy’s Barber Shop...",
                reviews: "13",
                stars: "5",
                description: "Baton Rouge's Troy's Barber Shop & Sue's Hair Styling is a highly-rated hair salon with hairstylist experts available...",
                price: ""
            },
            {
                img: "assets/images/listing/barbers/floyds-99-barbershop-minneapolis.jpg",
                title: "Floyd’s 99 Barbershop",
                reviews: "118",
                stars: "4",
                description: "Floyd’s 99 shops focus on old school satisfaction where customers are every employee's number one priority.",
                price: ""
            }
        ];
        this.MassageTherapist = [
            {
                img: "assets/images/listing/massage-therapist/laura-case-charlotte.jpg",
                title: "Laura Case",
                reviews: "4",
                stars: "5",
                description: "I am trained in Deep Tissue, Neuromuscular, Trigger Point, Swedish & Prenatal massage.  Prices are the same for all types...",
                price: ""
            },
            {
                img: "assets/images/listing/massage-therapist/heather-udomrat-cmt-san-francisco.jpg",
                title: "Heather Udomrat, CMT",
                reviews: "35",
                stars: "5",
                description: "Heather practices Thai Yoga Massage, Deep Tissue, Trigger-Point Release (Myofascial Therapy), NeuroMuscular...",
                price: ""
            },
            {
                img: "assets/images/listing/massage-therapist/spaland-detroit-3.jpg",
                title: "Spaland",
                reviews: "3",
                stars: "5",
                description: "Spaland is a a unique business where I come to you, take the time to recover from a bad injury, or escape from a hectic...",
                price: ""
            },
            {
                img: "assets/images/listing/massage-therapist/mike-case-cmt-denver.jpg",
                title: "Mike Case, CMT",
                reviews: "7",
                stars: "5",
                description: "Best massage studio in Denver Cherry Creek! 30% off 1st Appointment! 11 years in practice, licensed, certified, 5-STAR rated...",
                price: ""
            },
            {
                img: "assets/images/listing/massage-therapist/krista-harris-marietta.jpg",
                title: "Krista Harris",
                reviews: "7",
                stars: "5",
                description: "We specialize in Massage, Private & Group Instruction in Aerial Yoga and Therapeutic Sound (Soundfulness Meditation).",
                price: ""
            },
            {
                img: "assets/images/listing/massage-therapist/julian-turner-lmt-washington.jpg",
                title: "Julian Turner, LMT",
                reviews: "38",
                stars: "4.5",
                description: "We specialize in therapeutic massage, using deep tissue techniques to address aches, pains and stiffness.",
                price: ""
            },
            {
                img: "assets/images/listing/massage-therapist/mobile-massage-by-alicia-mcnair-aloha-breeze-mobile-massage-las-vegas.jpg",
                title: "Aloha Breeze Mobile...",
                reviews: "43",
                stars: "5",
                description: "I am a licensed Massage Therapist from the State of Nevada since 2013, I chose this field because I enjoy...",
                price: ""
            }
        ];
        this.Spas = [
            {
                img: "assets/images/listing/spas/chic-la-vie-med-spa-las-vegas.jpg",
                title: "Chic la Vie Med Spa",
                reviews: "65",
                stars: "5",
                description: "Chic La Vie Med Spa is a world-class medical spa in Las Vegas, Nevada just minutes from the Las Vegas Strip. Chic La Vie is a...",
                price: ""
            },
            {
                img: "assets/images/listing/spas/karine-kazarian-new-york.jpg",
                title: "Karine Kazarian",
                reviews: "12",
                stars: "5",
                description: "Authentic decor brings a classic aesthetic to this quaint little downtown shop, reminiscent of a 19th century French beauty parlor.",
                price: ""
            },
            {
                img: "assets/images/listing/spas/elina-organics-skin-care-chicago.jpg",
                title: "Elina Organics Skin Care",
                reviews: "28",
                stars: "4.5",
                description: "We know that beauty is more than skin deep and that a person is much more than a physical body. Our well being requires mental...",
                price: ""
            },
            {
                img: "assets/images/listing/spas/maddy-jean-permanent-makeup-orlando.jpg",
                title: "Maddy Jean Permanent...",
                reviews: "2",
                stars: "5",
                description: "Fall Sale! - $295 brows by Master Artist- Maddy jean-Expert in microblading, 3d hair strokes, eyebrow pigmentation...",
                price: ""
            },
            {
                img: "assets/images/listing/spas/lush-nail-bar-atlanta.jpg",
                title: "Lush Nail Bar",
                reviews: "25",
                stars: "4.5",
                description: "We also offer highly skilled microblading services so that you can have immaculate eyebrows to shape and frame your face.",
                price: ""
            },
            {
                img: "assets/images/listing/spas/dana-elise-solutions-beverly-hills.jpg",
                title: "Dana Elise Solutions",
                reviews: "41",
                stars: "5",
                description: "Dana Elise Solutions is Beverly Hills premier center for Expert Electrolysis and Advanced Skin Care treatments.",
                price: ""
            },
            {
                img: "assets/images/listing/spas/salon-joa-denver.jpg",
                title: "Salon Joa",
                reviews: "195",
                stars: "4.5",
                description: "Salon Joa is a modern barbershop, salon, nail bar, makeup studio, and wax studio all in one conveniently located haven.",
                price: ""
            },
            {
                img: "assets/images/listing/spas/nails-by-tammy-dickson.jpg",
                title: "Nails by Tammy",
                reviews: "9",
                stars: "3",
                description: "Tired of your nail polish color? Head on over to Dickson's Nails by Tammy for a fresh, colorful new coat. Keep your nails in tip-top...",
                price: ""
            }
        ];
        this.slideConfig = {
            "arrows": true,
            "slidesPerView": 4,
            "loop": true,
            autoplay: {
                delay: 2800,
                disableOnInteraction: false
            },
            "breakpoints": {
                1023: {
                    "slidesPerView": 2
                }
            },
        };
    }
    HomeComponent.prototype.ngOnInit = function () {
        this.initTop();
        this.setMeta();
    };
    HomeComponent.prototype.setMeta = function () {
        this.title.setTitle(this.titlePage);
        this.meta.updateTag({ property: 'og:title', content: this.titlePage });
        this.meta.updateTag({ name: 'twitter:title', content: this.titlePage });
    };
    HomeComponent.prototype.initTop = function () {
        this.router.events.subscribe(function (evt) {
            if (!(evt instanceof _angular_router__WEBPACK_IMPORTED_MODULE_3__["NavigationEnd"])) {
                return;
            }
            window.scrollTo(0, 0);
        });
    };
    HomeComponent.prototype.swiperInit = function (target) {
    };
    HomeComponent.prototype.swiperReachEnd = function (e) {
    };
    HomeComponent.prototype.swiperReachBeginning = function (e) {
    };
    HomeComponent.prototype.swiperSlideChange = function (e) {
    };
    HomeComponent.ctorParameters = function () { return [
        { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["Meta"] },
        { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["Title"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
    ]; };
    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! raw-loader!./home.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/pages/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/components/pages/home/home.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["Meta"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["Title"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/components/pages/howitworks/howitworks-clients.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/components/pages/howitworks/howitworks-clients.component.ts ***!
  \*****************************************************************************/
/*! exports provided: HowitworksClientsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HowitworksClientsComponent", function() { return HowitworksClientsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var HowitworksClientsComponent = /** @class */ (function () {
    function HowitworksClientsComponent(meta, title, router) {
        this.meta = meta;
        this.title = title;
        this.router = router;
        this.titlePage = 'How It Works Clients | Salon Home';
    }
    HowitworksClientsComponent.prototype.ngOnInit = function () {
        this.initTop();
        this.setMeta();
    };
    HowitworksClientsComponent.prototype.setMeta = function () {
        this.title.setTitle(this.titlePage);
        this.meta.updateTag({ property: 'og:title', content: this.titlePage });
        this.meta.updateTag({ name: 'twitter:title', content: this.titlePage });
    };
    HowitworksClientsComponent.prototype.initTop = function () {
        this.router.events.subscribe(function (evt) {
            if (!(evt instanceof _angular_router__WEBPACK_IMPORTED_MODULE_3__["NavigationEnd"])) {
                return;
            }
            window.scrollTo(0, 0);
        });
    };
    HowitworksClientsComponent.ctorParameters = function () { return [
        { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["Meta"] },
        { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["Title"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
    ]; };
    HowitworksClientsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-howitworks-clients',
            template: __webpack_require__(/*! raw-loader!./howitworks-clients.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/pages/howitworks/howitworks-clients.component.html"),
            styles: [__webpack_require__(/*! ./howitworks.component.css */ "./src/app/components/pages/howitworks/howitworks.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["Meta"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["Title"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], HowitworksClientsComponent);
    return HowitworksClientsComponent;
}());



/***/ }),

/***/ "./src/app/components/pages/howitworks/howitworks-professionals.component.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/components/pages/howitworks/howitworks-professionals.component.ts ***!
  \***********************************************************************************/
/*! exports provided: HowitworksProfessionalsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HowitworksProfessionalsComponent", function() { return HowitworksProfessionalsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _models_professional__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../../../models/professional */ "./src/app/models/professional.ts");
/* harmony import */ var _services_email_services__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../../../services/email.services */ "./src/app/services/email.services.ts");







var HowitworksProfessionalsComponent = /** @class */ (function () {
    function HowitworksProfessionalsComponent(_EmailService, _route, _router, formBuilder, meta, title, router) {
        this._EmailService = _EmailService;
        this._route = _route;
        this._router = _router;
        this.formBuilder = formBuilder;
        this.meta = meta;
        this.title = title;
        this.router = router;
        this.titlePage = 'How It Works Professionals | Salon Home';
        this.professional = new _models_professional__WEBPACK_IMPORTED_MODULE_5__["Professional"](0, '', '', '', '', '', '', '', '', '', false);
    }
    HowitworksProfessionalsComponent.prototype.isFieldValid = function (field) {
        return !this.form.get(field).valid && this.form.get(field).touched;
    };
    HowitworksProfessionalsComponent.prototype.displayFieldCss = function (field) {
        return {
            'has-error': this.isFieldValid(field),
            'has-feedback': this.isFieldValid(field)
        };
    };
    HowitworksProfessionalsComponent.prototype.ngOnInit = function () {
        this.initTop();
        this.InitValidForm();
        this.setMeta();
    };
    HowitworksProfessionalsComponent.prototype.setMeta = function () {
        this.title.setTitle(this.titlePage);
        this.meta.updateTag({ property: 'og:title', content: this.titlePage });
        this.meta.updateTag({ name: 'twitter:title', content: this.titlePage });
    };
    HowitworksProfessionalsComponent.prototype.initTop = function () {
        this.router.events.subscribe(function (evt) {
            if (!(evt instanceof _angular_router__WEBPACK_IMPORTED_MODULE_3__["NavigationEnd"])) {
                return;
            }
            window.scrollTo(0, 0);
        });
    };
    HowitworksProfessionalsComponent.prototype.onSubmit = function () {
        var _this = this;
        if (this.form.valid) {
            this.professional = new _models_professional__WEBPACK_IMPORTED_MODULE_5__["Professional"](0, this.form.get('business').value, this.form.get('services').value, this.form.get('street').value, this.form.get('code').value, this.form.get('city').value, this.form.get('firstname').value, this.form.get('lastname').value, this.form.get('email').value, this.form.get('contactnumber').value, true);
            this._EmailService.addProfessional(this.professional).subscribe(function (response) {
                if (response.status) {
                    _this.reset();
                    _this.professional = new _models_professional__WEBPACK_IMPORTED_MODULE_5__["Professional"](0, '', '', '', '', '', '', '', '', '', false);
                    $('#form-professionals .set-response').html('<div class="message success">' + response.message + '</div>');
                }
                else {
                    console.log('Error Response:');
                    console.log(response);
                    $('#form-professionals .set-response').html('<div class="message error">' + response.message + '</div>');
                }
                $('html, body').stop().animate({ scrollTop: $('#form-professionals .set-response').offset().top - $('#myNavbar').height() - 64 }, 1000);
            }, function (error) {
                console.log('Error Exception:');
                console.log(error);
            });
        }
        else {
            $('html, body').stop().animate({ scrollTop: $('#form-professionals').offset().top - $('#myNavbar').height() - 64 }, 1000);
            this.validateAllFormFields(this.form);
        }
    };
    HowitworksProfessionalsComponent.prototype.validateAllFormFields = function (formGroup) {
        var _this = this;
        Object.keys(formGroup.controls).forEach(function (field) {
            var control = formGroup.get(field);
            if (control instanceof _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]) {
                control.markAsTouched({ onlySelf: true });
            }
            else if (control instanceof _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]) {
                _this.validateAllFormFields(control);
            }
        });
    };
    HowitworksProfessionalsComponent.prototype.InitValidForm = function () {
        this.form = this.formBuilder.group({
            business: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            services: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            street: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            code: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            city: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            firstname: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            lastname: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            email: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email]],
            contactnumber: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
        });
    };
    HowitworksProfessionalsComponent.prototype.reset = function () {
        this.form.reset();
    };
    HowitworksProfessionalsComponent.ctorParameters = function () { return [
        { type: _services_email_services__WEBPACK_IMPORTED_MODULE_6__["EmailService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
        { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["Meta"] },
        { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["Title"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
    ]; };
    HowitworksProfessionalsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-howitworks-professionals',
            template: __webpack_require__(/*! raw-loader!./howitworks-professionals.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/pages/howitworks/howitworks-professionals.component.html"),
            providers: [_services_email_services__WEBPACK_IMPORTED_MODULE_6__["EmailService"]],
            styles: [__webpack_require__(/*! ./howitworks.component.css */ "./src/app/components/pages/howitworks/howitworks.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_email_services__WEBPACK_IMPORTED_MODULE_6__["EmailService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["Meta"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["Title"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], HowitworksProfessionalsComponent);
    return HowitworksProfessionalsComponent;
}());



/***/ }),

/***/ "./src/app/components/pages/howitworks/howitworks.component.css":
/*!**********************************************************************!*\
  !*** ./src/app/components/pages/howitworks/howitworks.component.css ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#features .layout_text{padding-left:50px;margin-right:-50px;}\n.features_layout{position:relative;padding-left:70px;}\n.features_layout.type2{position:relative;padding-left:0px;}\n.features_layout .ico{float:left;margin-right:30px;margin-bottom:38px}\n.features_layout h5{font-size:24px;}\n.features_layout p{margin-right:-10px;}\n.layout_features_2 .block-text{display:inline-block;vertical-align:middle;}\n.layout_features_2 .block-img{display:inline-block;vertical-align:middle;overflow:hidden;}\n.layout_features_2 .block-text .circle-span{color:#fff;height:110px;width:110px;text-align:center;font-size:25px;line-height:110px;display:inline-block;vertical-align:middle;border-radius:50%;}\n.layout_features_2 .block-text p{font-size:17px;width:50%;display:inline-block;vertical-align:middle;padding-left:20px;text-align:left;}\n.layout_features_2 .block-img img{margin:auto -33px;width:475px;max-width:475px;}\n.layout_features_3 .image{display:inline-block;vertical-align:top;width:32%;}\n.layout_features_3 .description{display:inline-block;vertical-align:top;width:58%;margin-left:4%;}\n.layout_features_3 .description h4{margin:auto auto 10px auto;}\n.layout_features_3 .description p{font-size:17px;text-align:justify;line-height:initial;}\n.layout_features_3 .description a.more{font-size:16px;color:#515e73;text-decoration:underline;}\n.layout_inline .item{display:inline-block;vertical-align:middle;margin:0px 15px;}\n.p95{padding:95px 0px;}\n.col-md-medium{padding:0px 88px;}\n.layout_clients_banner .img-1{}\n.layout_clients_banner .img-2{position:absolute;right:0px;top:0px;margin-right:10px;margin-top:110px;}\n@media screen and (max-width:1024px){\n.top-section-2 .no-overlay{background-size:cover !important;height:300px !important;}\n.top-section-2{padding-top:58px !important;}\n.features_layout .title h2{margin-bottom:0px !important;padding-bottom:0px !important;}\n}\n@media screen and (max-width:768px){\n.col-md-medium{padding:0px 25px !important;}\n.features_layout .mb60{margin-bottom:15px !important;}\n.features_layout h5{font-size:18px;}\n.features_layout{padding-left:25px !important;}\n}\n@media screen and (max-width:700px){\n.features_layout.type2{position:relative;padding-left:35px;padding-right:35px;}\n.layout_features_2 .block-text .circle-span{float:left !important;width:100px !important;height:100px !important;line-height:100px !important;margin:0px 20px 0px 20px !important;}\n.layout_features_2 .block-text p{width:100% !important;display:block !important;margin-top:20px !important;}\n.layout_features_2 .block-img img{margin:0 auto !important;width:350px;max-width:350px;}\n.layout_features_2 .text-right{text-align:center !important;}\n.feature-callout-image-pull{position:relative;top:initial;bottom:initial;height:250px;min-height:200px;}\n.layout_clients_banner .mt80{margin:auto;padding:40px 15px;}\n#features .devices-img-1{width:295px !important;height:auto !important;left:40px !important;}\n#features .devices-img-2{right:0px !important;margin-right:38px !important;width:125px !important;margin-bottom:15px;}\n#features h2{display:none !important;}\n#features .title p{margin-bottom:10px !important;}\n#features .bg-image2_cnt{margin-bottom:0px !important;}\n#features-2 .space-imge-1{position:absolute;margin-top:110px;text-align:center;}\n#features-2 .space-imge-1-post{padding-bottom:290px;}\n#features-2 .space-imge-2{position:absolute;margin-top:135px;text-align:center;left:0px;}\n#features-2 .space-imge-2-post{padding-bottom:290px;}\n#features-2 .single-element{clear:both;}\n#features-2 .single-element p{display:none !important;}\n#features-2 .features_layout .ico{margin-bottom:14px;}\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9wYWdlcy9ob3dpdHdvcmtzL2hvd2l0d29ya3MuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSx1QkFBdUIsaUJBQWlCLENBQUMsa0JBQWtCLENBQUM7QUFDNUQsaUJBQWlCLGlCQUFpQixDQUFDLGlCQUFpQixDQUFDO0FBQ3JELHVCQUF1QixpQkFBaUIsQ0FBQyxnQkFBZ0IsQ0FBQztBQUMxRCxzQkFBc0IsVUFBVSxDQUFDLGlCQUFpQixDQUFDLGtCQUFrQjtBQUNyRSxvQkFBb0IsY0FBYyxDQUFDO0FBQ25DLG1CQUFtQixrQkFBa0IsQ0FBQztBQUN0QywrQkFBK0Isb0JBQW9CLENBQUMscUJBQXFCLENBQUM7QUFDMUUsOEJBQThCLG9CQUFvQixDQUFDLHFCQUFxQixDQUFDLGVBQWUsQ0FBQztBQUN6Riw0Q0FBNEMsVUFBVSxDQUFDLFlBQVksQ0FBQyxXQUFXLENBQUMsaUJBQWlCLENBQUMsY0FBYyxDQUFDLGlCQUFpQixDQUFDLG9CQUFvQixDQUFDLHFCQUFxQixDQUFrRCxpQkFBaUIsQ0FBQztBQUNqUCxpQ0FBaUMsY0FBYyxDQUFDLFNBQVMsQ0FBQyxvQkFBb0IsQ0FBQyxxQkFBcUIsQ0FBQyxpQkFBaUIsQ0FBQyxlQUFlLENBQUM7QUFDdkksa0NBQWtDLGlCQUFpQixDQUFDLFdBQVcsQ0FBQyxlQUFlLENBQUM7QUFDaEYsMEJBQTBCLG9CQUFvQixDQUFDLGtCQUFrQixDQUFDLFNBQVMsQ0FBQztBQUM1RSxnQ0FBZ0Msb0JBQW9CLENBQUMsa0JBQWtCLENBQUMsU0FBUyxDQUFDLGNBQWMsQ0FBQztBQUNqRyxtQ0FBbUMsMEJBQTBCLENBQUM7QUFDOUQsa0NBQWtDLGNBQWMsQ0FBQyxrQkFBa0IsQ0FBQyxtQkFBbUIsQ0FBQztBQUN4Rix1Q0FBdUMsY0FBYyxDQUFDLGFBQWEsQ0FBQyx5QkFBeUIsQ0FBQztBQUM5RixxQkFBcUIsb0JBQW9CLENBQUMscUJBQXFCLENBQUMsZUFBZSxDQUFDO0FBQ2hGLEtBQUssZ0JBQWdCLENBQUM7QUFDdEIsZUFBZSxnQkFBZ0IsQ0FBQztBQUNoQyw4QkFBOEI7QUFDOUIsOEJBQThCLGlCQUFpQixDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsaUJBQWlCLENBQUMsZ0JBQWdCLENBQUM7QUFDckc7QUFDQSwyQkFBMkIsZ0NBQWdDLENBQUMsdUJBQXVCLENBQUM7QUFDcEYsZUFBZSwyQkFBMkIsQ0FBQztBQUMzQywyQkFBMkIsNEJBQTRCLENBQUMsNkJBQTZCLENBQUM7QUFDdEY7QUFDQTtBQUNBLGVBQWUsMkJBQTJCLENBQUM7QUFDM0MsdUJBQXVCLDZCQUE2QixDQUFDO0FBQ3JELG9CQUFvQixjQUFjLENBQUM7QUFDbkMsaUJBQWlCLDRCQUE0QixDQUFDO0FBQzlDO0FBQ0E7QUFDQSx1QkFBdUIsaUJBQWlCLENBQUMsaUJBQWlCLENBQUMsa0JBQWtCLENBQUM7QUFDOUUsNENBQTRDLHFCQUFxQixDQUFDLHNCQUFzQixDQUFDLHVCQUF1QixDQUFDLDRCQUE0QixDQUFDLG1DQUFtQyxDQUFDO0FBQ2xMLGlDQUFpQyxxQkFBcUIsQ0FBQyx3QkFBd0IsQ0FBQywwQkFBMEIsQ0FBQztBQUMzRyxrQ0FBa0Msd0JBQXdCLENBQUMsV0FBVyxDQUFDLGVBQWUsQ0FBQztBQUN2RiwrQkFBK0IsNEJBQTRCLENBQUM7QUFDNUQsNEJBQTRCLGlCQUFpQixDQUFDLFdBQVcsQ0FBQyxjQUFjLENBQUMsWUFBWSxDQUFDLGdCQUFnQixDQUFDO0FBQ3ZHLDZCQUE2QixXQUFXLENBQUMsaUJBQWlCLENBQUM7QUFDM0QseUJBQXlCLHNCQUFzQixDQUFDLHNCQUFzQixDQUFDLG9CQUFvQixDQUFDO0FBQzVGLHlCQUF5QixvQkFBb0IsQ0FBQyw0QkFBNEIsQ0FBQyxzQkFBc0IsQ0FBQyxrQkFBa0IsQ0FBQztBQUNySCxhQUFhLHVCQUF1QixDQUFDO0FBQ3JDLG1CQUFtQiw2QkFBNkIsQ0FBQztBQUNqRCx5QkFBeUIsNEJBQTRCLENBQUM7QUFDdEQsMEJBQTBCLGlCQUFpQixDQUFDLGdCQUFnQixDQUFDLGlCQUFpQixDQUFDO0FBQy9FLCtCQUErQixvQkFBb0IsQ0FBQztBQUNwRCwwQkFBMEIsaUJBQWlCLENBQUMsZ0JBQWdCLENBQUMsaUJBQWlCLENBQUMsUUFBUSxDQUFDO0FBQ3hGLCtCQUErQixvQkFBb0IsQ0FBQztBQUNwRCw0QkFBNEIsVUFBVSxDQUFDO0FBQ3ZDLDhCQUE4Qix1QkFBdUIsQ0FBQztBQUN0RCxrQ0FBa0Msa0JBQWtCLENBQUM7QUFDckQiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3BhZ2VzL2hvd2l0d29ya3MvaG93aXR3b3Jrcy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI2ZlYXR1cmVzIC5sYXlvdXRfdGV4dHtwYWRkaW5nLWxlZnQ6NTBweDttYXJnaW4tcmlnaHQ6LTUwcHg7fVxuLmZlYXR1cmVzX2xheW91dHtwb3NpdGlvbjpyZWxhdGl2ZTtwYWRkaW5nLWxlZnQ6NzBweDt9XG4uZmVhdHVyZXNfbGF5b3V0LnR5cGUye3Bvc2l0aW9uOnJlbGF0aXZlO3BhZGRpbmctbGVmdDowcHg7fVxuLmZlYXR1cmVzX2xheW91dCAuaWNve2Zsb2F0OmxlZnQ7bWFyZ2luLXJpZ2h0OjMwcHg7bWFyZ2luLWJvdHRvbTozOHB4fVxuLmZlYXR1cmVzX2xheW91dCBoNXtmb250LXNpemU6MjRweDt9XG4uZmVhdHVyZXNfbGF5b3V0IHB7bWFyZ2luLXJpZ2h0Oi0xMHB4O31cbi5sYXlvdXRfZmVhdHVyZXNfMiAuYmxvY2stdGV4dHtkaXNwbGF5OmlubGluZS1ibG9jazt2ZXJ0aWNhbC1hbGlnbjptaWRkbGU7fVxuLmxheW91dF9mZWF0dXJlc18yIC5ibG9jay1pbWd7ZGlzcGxheTppbmxpbmUtYmxvY2s7dmVydGljYWwtYWxpZ246bWlkZGxlO292ZXJmbG93OmhpZGRlbjt9XG4ubGF5b3V0X2ZlYXR1cmVzXzIgLmJsb2NrLXRleHQgLmNpcmNsZS1zcGFue2NvbG9yOiNmZmY7aGVpZ2h0OjExMHB4O3dpZHRoOjExMHB4O3RleHQtYWxpZ246Y2VudGVyO2ZvbnQtc2l6ZToyNXB4O2xpbmUtaGVpZ2h0OjExMHB4O2Rpc3BsYXk6aW5saW5lLWJsb2NrO3ZlcnRpY2FsLWFsaWduOm1pZGRsZTstd2Via2l0LWJvcmRlci1yYWRpdXM6NTAlOy1tb3otYm9yZGVyLXJhZGl1czo1MCU7Ym9yZGVyLXJhZGl1czo1MCU7fVxuLmxheW91dF9mZWF0dXJlc18yIC5ibG9jay10ZXh0IHB7Zm9udC1zaXplOjE3cHg7d2lkdGg6NTAlO2Rpc3BsYXk6aW5saW5lLWJsb2NrO3ZlcnRpY2FsLWFsaWduOm1pZGRsZTtwYWRkaW5nLWxlZnQ6MjBweDt0ZXh0LWFsaWduOmxlZnQ7fVxuLmxheW91dF9mZWF0dXJlc18yIC5ibG9jay1pbWcgaW1ne21hcmdpbjphdXRvIC0zM3B4O3dpZHRoOjQ3NXB4O21heC13aWR0aDo0NzVweDt9XG4ubGF5b3V0X2ZlYXR1cmVzXzMgLmltYWdle2Rpc3BsYXk6aW5saW5lLWJsb2NrO3ZlcnRpY2FsLWFsaWduOnRvcDt3aWR0aDozMiU7fVxuLmxheW91dF9mZWF0dXJlc18zIC5kZXNjcmlwdGlvbntkaXNwbGF5OmlubGluZS1ibG9jazt2ZXJ0aWNhbC1hbGlnbjp0b3A7d2lkdGg6NTglO21hcmdpbi1sZWZ0OjQlO31cbi5sYXlvdXRfZmVhdHVyZXNfMyAuZGVzY3JpcHRpb24gaDR7bWFyZ2luOmF1dG8gYXV0byAxMHB4IGF1dG87fVxuLmxheW91dF9mZWF0dXJlc18zIC5kZXNjcmlwdGlvbiBwe2ZvbnQtc2l6ZToxN3B4O3RleHQtYWxpZ246anVzdGlmeTtsaW5lLWhlaWdodDppbml0aWFsO31cbi5sYXlvdXRfZmVhdHVyZXNfMyAuZGVzY3JpcHRpb24gYS5tb3Jle2ZvbnQtc2l6ZToxNnB4O2NvbG9yOiM1MTVlNzM7dGV4dC1kZWNvcmF0aW9uOnVuZGVybGluZTt9XG4ubGF5b3V0X2lubGluZSAuaXRlbXtkaXNwbGF5OmlubGluZS1ibG9jazt2ZXJ0aWNhbC1hbGlnbjptaWRkbGU7bWFyZ2luOjBweCAxNXB4O31cbi5wOTV7cGFkZGluZzo5NXB4IDBweDt9XG4uY29sLW1kLW1lZGl1bXtwYWRkaW5nOjBweCA4OHB4O31cbi5sYXlvdXRfY2xpZW50c19iYW5uZXIgLmltZy0xe31cbi5sYXlvdXRfY2xpZW50c19iYW5uZXIgLmltZy0ye3Bvc2l0aW9uOmFic29sdXRlO3JpZ2h0OjBweDt0b3A6MHB4O21hcmdpbi1yaWdodDoxMHB4O21hcmdpbi10b3A6MTEwcHg7fVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDoxMDI0cHgpe1xuLnRvcC1zZWN0aW9uLTIgLm5vLW92ZXJsYXl7YmFja2dyb3VuZC1zaXplOmNvdmVyICFpbXBvcnRhbnQ7aGVpZ2h0OjMwMHB4ICFpbXBvcnRhbnQ7fVxuLnRvcC1zZWN0aW9uLTJ7cGFkZGluZy10b3A6NThweCAhaW1wb3J0YW50O31cbi5mZWF0dXJlc19sYXlvdXQgLnRpdGxlIGgye21hcmdpbi1ib3R0b206MHB4ICFpbXBvcnRhbnQ7cGFkZGluZy1ib3R0b206MHB4ICFpbXBvcnRhbnQ7fVxufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDo3NjhweCl7XG4uY29sLW1kLW1lZGl1bXtwYWRkaW5nOjBweCAyNXB4ICFpbXBvcnRhbnQ7fVxuLmZlYXR1cmVzX2xheW91dCAubWI2MHttYXJnaW4tYm90dG9tOjE1cHggIWltcG9ydGFudDt9XG4uZmVhdHVyZXNfbGF5b3V0IGg1e2ZvbnQtc2l6ZToxOHB4O31cbi5mZWF0dXJlc19sYXlvdXR7cGFkZGluZy1sZWZ0OjI1cHggIWltcG9ydGFudDt9XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjcwMHB4KXtcbi5mZWF0dXJlc19sYXlvdXQudHlwZTJ7cG9zaXRpb246cmVsYXRpdmU7cGFkZGluZy1sZWZ0OjM1cHg7cGFkZGluZy1yaWdodDozNXB4O31cbi5sYXlvdXRfZmVhdHVyZXNfMiAuYmxvY2stdGV4dCAuY2lyY2xlLXNwYW57ZmxvYXQ6bGVmdCAhaW1wb3J0YW50O3dpZHRoOjEwMHB4ICFpbXBvcnRhbnQ7aGVpZ2h0OjEwMHB4ICFpbXBvcnRhbnQ7bGluZS1oZWlnaHQ6MTAwcHggIWltcG9ydGFudDttYXJnaW46MHB4IDIwcHggMHB4IDIwcHggIWltcG9ydGFudDt9XG4ubGF5b3V0X2ZlYXR1cmVzXzIgLmJsb2NrLXRleHQgcHt3aWR0aDoxMDAlICFpbXBvcnRhbnQ7ZGlzcGxheTpibG9jayAhaW1wb3J0YW50O21hcmdpbi10b3A6MjBweCAhaW1wb3J0YW50O31cbi5sYXlvdXRfZmVhdHVyZXNfMiAuYmxvY2staW1nIGltZ3ttYXJnaW46MCBhdXRvICFpbXBvcnRhbnQ7d2lkdGg6MzUwcHg7bWF4LXdpZHRoOjM1MHB4O31cbi5sYXlvdXRfZmVhdHVyZXNfMiAudGV4dC1yaWdodHt0ZXh0LWFsaWduOmNlbnRlciAhaW1wb3J0YW50O31cbi5mZWF0dXJlLWNhbGxvdXQtaW1hZ2UtcHVsbHtwb3NpdGlvbjpyZWxhdGl2ZTt0b3A6aW5pdGlhbDtib3R0b206aW5pdGlhbDtoZWlnaHQ6MjUwcHg7bWluLWhlaWdodDoyMDBweDt9XG4ubGF5b3V0X2NsaWVudHNfYmFubmVyIC5tdDgwe21hcmdpbjphdXRvO3BhZGRpbmc6NDBweCAxNXB4O31cbiNmZWF0dXJlcyAuZGV2aWNlcy1pbWctMXt3aWR0aDoyOTVweCAhaW1wb3J0YW50O2hlaWdodDphdXRvICFpbXBvcnRhbnQ7bGVmdDo0MHB4ICFpbXBvcnRhbnQ7fVxuI2ZlYXR1cmVzIC5kZXZpY2VzLWltZy0ye3JpZ2h0OjBweCAhaW1wb3J0YW50O21hcmdpbi1yaWdodDozOHB4ICFpbXBvcnRhbnQ7d2lkdGg6MTI1cHggIWltcG9ydGFudDttYXJnaW4tYm90dG9tOjE1cHg7fVxuI2ZlYXR1cmVzIGgye2Rpc3BsYXk6bm9uZSAhaW1wb3J0YW50O31cbiNmZWF0dXJlcyAudGl0bGUgcHttYXJnaW4tYm90dG9tOjEwcHggIWltcG9ydGFudDt9XG4jZmVhdHVyZXMgLmJnLWltYWdlMl9jbnR7bWFyZ2luLWJvdHRvbTowcHggIWltcG9ydGFudDt9XG4jZmVhdHVyZXMtMiAuc3BhY2UtaW1nZS0xe3Bvc2l0aW9uOmFic29sdXRlO21hcmdpbi10b3A6MTEwcHg7dGV4dC1hbGlnbjpjZW50ZXI7fVxuI2ZlYXR1cmVzLTIgLnNwYWNlLWltZ2UtMS1wb3N0e3BhZGRpbmctYm90dG9tOjI5MHB4O31cbiNmZWF0dXJlcy0yIC5zcGFjZS1pbWdlLTJ7cG9zaXRpb246YWJzb2x1dGU7bWFyZ2luLXRvcDoxMzVweDt0ZXh0LWFsaWduOmNlbnRlcjtsZWZ0OjBweDt9XG4jZmVhdHVyZXMtMiAuc3BhY2UtaW1nZS0yLXBvc3R7cGFkZGluZy1ib3R0b206MjkwcHg7fVxuI2ZlYXR1cmVzLTIgLnNpbmdsZS1lbGVtZW50e2NsZWFyOmJvdGg7fVxuI2ZlYXR1cmVzLTIgLnNpbmdsZS1lbGVtZW50IHB7ZGlzcGxheTpub25lICFpbXBvcnRhbnQ7fVxuI2ZlYXR1cmVzLTIgLmZlYXR1cmVzX2xheW91dCAuaWNve21hcmdpbi1ib3R0b206MTRweDt9XG59Il19 */"

/***/ }),

/***/ "./src/app/components/pages/join-our-team/join-our-team.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/components/pages/join-our-team/join-our-team.component.ts ***!
  \***************************************************************************/
/*! exports provided: JoinOurTeamComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JoinOurTeamComponent", function() { return JoinOurTeamComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var JoinOurTeamComponent = /** @class */ (function () {
    function JoinOurTeamComponent(meta, title, router) {
        this.meta = meta;
        this.title = title;
        this.router = router;
        this.titlePage = 'Join Our Team | Salon Home';
    }
    JoinOurTeamComponent.prototype.ngOnInit = function () {
        this.initTop();
        this.setMeta();
    };
    JoinOurTeamComponent.prototype.setMeta = function () {
        this.title.setTitle(this.titlePage);
        this.meta.updateTag({ property: 'og:title', content: this.titlePage });
        this.meta.updateTag({ name: 'twitter:title', content: this.titlePage });
    };
    JoinOurTeamComponent.prototype.initTop = function () {
        this.router.events.subscribe(function (evt) {
            if (!(evt instanceof _angular_router__WEBPACK_IMPORTED_MODULE_3__["NavigationEnd"])) {
                return;
            }
            window.scrollTo(0, 0);
        });
    };
    JoinOurTeamComponent.ctorParameters = function () { return [
        { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["Meta"] },
        { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["Title"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
    ]; };
    JoinOurTeamComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-join-our-team',
            template: __webpack_require__(/*! raw-loader!./join-our-team.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/pages/join-our-team/join-our-team.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["Meta"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["Title"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], JoinOurTeamComponent);
    return JoinOurTeamComponent;
}());



/***/ }),

/***/ "./src/app/components/pages/magazine/magazine-post.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/components/pages/magazine/magazine-post.component.ts ***!
  \**********************************************************************/
/*! exports provided: MagazinePostComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MagazinePostComponent", function() { return MagazinePostComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_magazine_services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/magazine.services */ "./src/app/services/magazine.services.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");





var MagazinePostComponent = /** @class */ (function () {
    function MagazinePostComponent(_MagazineService, _route, meta, title, router) {
        this._MagazineService = _MagazineService;
        this._route = _route;
        this.meta = meta;
        this.title = title;
        this.router = router;
        this.titlePage = 'Post | Salon Home';
    }
    MagazinePostComponent.prototype.ngOnInit = function () {
        this.initTop();
        this.getPost();
        this.getAllPost();
        this.setMeta();
    };
    MagazinePostComponent.prototype.initTop = function () {
        this.router.events.subscribe(function (evt) {
            if (!(evt instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationEnd"])) {
                return;
            }
            window.scrollTo(0, 0);
        });
    };
    MagazinePostComponent.prototype.setMeta = function () {
        this.title.setTitle(this.titlePage);
        this.meta.updateTag({ property: 'og:title', content: this.titlePage });
        this.meta.updateTag({ name: 'twitter:title', content: this.titlePage });
    };
    MagazinePostComponent.prototype.getPost = function () {
        var _this = this;
        this._route.params.forEach(function (params) {
            var _slug = params['slug'];
            _this._MagazineService.getPostMagazine(_slug).subscribe(function (response) {
                _this.magazine_post = response;
                if (!_this.magazine_post) {
                    console.log('Not found data source.');
                }
            }, function (error) {
                console.log(error);
            });
        });
    };
    MagazinePostComponent.prototype.getAllPost = function () {
        var _this = this;
        this._MagazineService.getMagazine().subscribe(function (response) {
            _this.magazine_posts = response;
            if (!_this.magazine_posts) {
                console.log('Not found data source.');
            }
        }, function (error) {
            var errorMessage = error;
            console.log(errorMessage);
        });
    };
    MagazinePostComponent.ctorParameters = function () { return [
        { type: _services_magazine_services__WEBPACK_IMPORTED_MODULE_3__["MagazineService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
        { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["Meta"] },
        { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["Title"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
    ]; };
    MagazinePostComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-magazine-post',
            template: __webpack_require__(/*! raw-loader!./magazine-post.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/pages/magazine/magazine-post.component.html"),
            providers: [_services_magazine_services__WEBPACK_IMPORTED_MODULE_3__["MagazineService"]]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_magazine_services__WEBPACK_IMPORTED_MODULE_3__["MagazineService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["Meta"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["Title"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], MagazinePostComponent);
    return MagazinePostComponent;
}());



/***/ }),

/***/ "./src/app/components/pages/magazine/magazine-recent.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/components/pages/magazine/magazine-recent.component.ts ***!
  \************************************************************************/
/*! exports provided: MagazineRecentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MagazineRecentComponent", function() { return MagazineRecentComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_magazine_services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/magazine.services */ "./src/app/services/magazine.services.ts");




var MagazineRecentComponent = /** @class */ (function () {
    function MagazineRecentComponent(_MagazineService, _router) {
        this._MagazineService = _MagazineService;
        this._router = _router;
    }
    MagazineRecentComponent.prototype.ngOnInit = function () {
        this.getRecentPost();
    };
    MagazineRecentComponent.prototype.getRecentPost = function () {
        var _this = this;
        this._MagazineService.getMagazine().subscribe(function (response) {
            _this.magazine_posts = response;
            if (!_this.magazine_posts) {
                console.log('Not found data source.');
            }
        }, function (error) {
            var errorMessage = error;
            console.log(errorMessage);
        });
    };
    MagazineRecentComponent.prototype.searchPost = function (keyword) {
        this._router.navigate(['search', keyword]);
    };
    MagazineRecentComponent.ctorParameters = function () { return [
        { type: _services_magazine_services__WEBPACK_IMPORTED_MODULE_3__["MagazineService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
    ]; };
    MagazineRecentComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-magazine-recent',
            template: __webpack_require__(/*! raw-loader!./magazine-recent.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/pages/magazine/magazine-recent.component.html"),
            providers: [_services_magazine_services__WEBPACK_IMPORTED_MODULE_3__["MagazineService"]]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_magazine_services__WEBPACK_IMPORTED_MODULE_3__["MagazineService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], MagazineRecentComponent);
    return MagazineRecentComponent;
}());



/***/ }),

/***/ "./src/app/components/pages/magazine/magazine.component.css":
/*!******************************************************************!*\
  !*** ./src/app/components/pages/magazine/magazine.component.css ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#rig {\n    max-width:1080px;\n    margin:0 auto; /*center aligned*/\n    padding:0;\n    font-size:0; /* Remember to change it back to normal font size if have captions */\n    list-style:none;\n    background-color:#fff;\n}\n#rig li {\n    display: inline-block;\n    *display:inline;/*for IE6 - IE7*/\n    width:100%;\n    vertical-align:middle;\n    box-sizing:border-box;\n    -moz-box-sizing: border-box;\n\t-webkit-box-sizing: border-box;\n    margin:0;\n    padding:10px 10px 5% 10px;\n}\n/* The wrapper for each item */\n.rig-cell {\n    /*margin:12px;\n    box-shadow:0 0 6px rgba(0,0,0,0.3);*/\n    display:block;\n    position: relative;\n    overflow:hidden;\n    box-shadow: 0px 0px 10px #00000042;\n}\n.rig-title-post{padding-top: 10px; padding-bottom: 10px; height: 86px; line-height: 1;}\n/* If have the image layer */\n.rig-img {\n    display:block;\n    width: 100%;\n    height: 300px;\n    border:none;\n    transform:scale(1);\n    transition:all 1s;\n    -o-object-fit: cover;\n       object-fit: cover;\n}\n#rig li:hover .rig-img {\n    transform:scale(1.05);\n}\n/* If have the overlay layer */\n.rig-overlay {\n    position: absolute;\n    display:block;\n    top: 0;\n    left: 0;\n    bottom: 0;\n    right: 0;\n    margin: auto;\n    background: #fff no-repeat center 20%;\n    background-size:50px 50px;\n    opacity:0;\n    filter:alpha(opacity=0);/*For IE6 - IE8*/\n    transition:all 0.6s;\n}\n#rig li:hover .rig-overlay {\n    opacity:0;\n}\n/* If have captions */\n.rig-text{text-align: left; color: #000; font-size: 20px; line-height: 1; font-weight: 600;}\n#rig li:hover .rig-text {\n    transform:translateY(0px);\n    opacity:0.9;\n}\n@media (max-width: 9000px) {\n    #rig li {\n        width:100%;\n    }\n}\n@media (max-width: 700px) {\n    #rig li {\n        width:100%;\n    }\n}\n@media (max-width: 550px) {\n    #rig li {\n        width:100%;\n    }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9wYWdlcy9tYWdhemluZS9tYWdhemluZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGFBQWEsRUFBRSxpQkFBaUI7SUFDaEMsU0FBUztJQUNULFdBQVcsRUFBRSxvRUFBb0U7SUFDakYsZUFBZTtJQUNmLHFCQUFxQjtBQUN6QjtBQUNBO0lBQ0kscUJBQXFCO0tBQ3JCLGNBQWUsQ0FBQyxnQkFBZ0I7SUFDaEMsVUFBVTtJQUNWLHFCQUFxQjtJQUNyQixxQkFBcUI7SUFDckIsMkJBQTJCO0NBQzlCLDhCQUE4QjtJQUMzQixRQUFRO0lBQ1IseUJBQXlCO0FBQzdCO0FBRUEsOEJBQThCO0FBQzlCO0lBQ0k7d0NBQ29DO0lBQ3BDLGFBQWE7SUFDYixrQkFBa0I7SUFDbEIsZUFBZTtJQUNmLGtDQUFrQztBQUN0QztBQUNBLGdCQUFnQixpQkFBaUIsRUFBRSxvQkFBb0IsRUFBRSxZQUFZLEVBQUUsY0FBYyxDQUFDO0FBQ3RGLDRCQUE0QjtBQUM1QjtJQUNJLGFBQWE7SUFDYixXQUFXO0lBQ1gsYUFBYTtJQUNiLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIsaUJBQWlCO0lBQ2pCLG9CQUFpQjtPQUFqQixpQkFBaUI7QUFDckI7QUFFQTtJQUNJLHFCQUFxQjtBQUN6QjtBQUNBLDhCQUE4QjtBQUM5QjtJQUNJLGtCQUFrQjtJQUNsQixhQUFhO0lBQ2IsTUFBTTtJQUNOLE9BQU87SUFDUCxTQUFTO0lBQ1QsUUFBUTtJQUNSLFlBQVk7SUFDWixxQ0FBcUM7SUFDckMseUJBQXlCO0lBQ3pCLFNBQVM7SUFDVCx1QkFBdUIsQ0FBQyxnQkFBZ0I7SUFDeEMsbUJBQW1CO0FBQ3ZCO0FBQ0E7SUFDSSxTQUFTO0FBQ2I7QUFFQSxxQkFBcUI7QUFDckIsVUFBVSxnQkFBZ0IsRUFBRSxXQUFXLEVBQUUsZUFBZSxFQUFFLGNBQWMsRUFBRSxnQkFBZ0IsQ0FBQztBQUMzRjtJQUNJLHlCQUF5QjtJQUN6QixXQUFXO0FBQ2Y7QUFFQTtJQUNJO1FBQ0ksVUFBVTtJQUNkO0FBQ0o7QUFFQTtJQUNJO1FBQ0ksVUFBVTtJQUNkO0FBQ0o7QUFFQTtJQUNJO1FBQ0ksVUFBVTtJQUNkO0FBQ0oiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3BhZ2VzL21hZ2F6aW5lL21hZ2F6aW5lLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjcmlnIHtcbiAgICBtYXgtd2lkdGg6MTA4MHB4O1xuICAgIG1hcmdpbjowIGF1dG87IC8qY2VudGVyIGFsaWduZWQqL1xuICAgIHBhZGRpbmc6MDtcbiAgICBmb250LXNpemU6MDsgLyogUmVtZW1iZXIgdG8gY2hhbmdlIGl0IGJhY2sgdG8gbm9ybWFsIGZvbnQgc2l6ZSBpZiBoYXZlIGNhcHRpb25zICovXG4gICAgbGlzdC1zdHlsZTpub25lO1xuICAgIGJhY2tncm91bmQtY29sb3I6I2ZmZjtcbn1cbiNyaWcgbGkge1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAqZGlzcGxheTppbmxpbmU7Lypmb3IgSUU2IC0gSUU3Ki9cbiAgICB3aWR0aDoxMDAlO1xuICAgIHZlcnRpY2FsLWFsaWduOm1pZGRsZTtcbiAgICBib3gtc2l6aW5nOmJvcmRlci1ib3g7XG4gICAgLW1vei1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xuXHQtd2Via2l0LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgbWFyZ2luOjA7XG4gICAgcGFkZGluZzoxMHB4IDEwcHggNSUgMTBweDtcbn1cbiAgICAgICAgXG4vKiBUaGUgd3JhcHBlciBmb3IgZWFjaCBpdGVtICovXG4ucmlnLWNlbGwge1xuICAgIC8qbWFyZ2luOjEycHg7XG4gICAgYm94LXNoYWRvdzowIDAgNnB4IHJnYmEoMCwwLDAsMC4zKTsqL1xuICAgIGRpc3BsYXk6YmxvY2s7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIG92ZXJmbG93OmhpZGRlbjtcbiAgICBib3gtc2hhZG93OiAwcHggMHB4IDEwcHggIzAwMDAwMDQyO1xufVxuLnJpZy10aXRsZS1wb3N0e3BhZGRpbmctdG9wOiAxMHB4OyBwYWRkaW5nLWJvdHRvbTogMTBweDsgaGVpZ2h0OiA4NnB4OyBsaW5lLWhlaWdodDogMTt9XG4vKiBJZiBoYXZlIHRoZSBpbWFnZSBsYXllciAqL1xuLnJpZy1pbWcge1xuICAgIGRpc3BsYXk6YmxvY2s7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAzMDBweDtcbiAgICBib3JkZXI6bm9uZTtcbiAgICB0cmFuc2Zvcm06c2NhbGUoMSk7XG4gICAgdHJhbnNpdGlvbjphbGwgMXM7XG4gICAgb2JqZWN0LWZpdDogY292ZXI7XG59XG5cbiNyaWcgbGk6aG92ZXIgLnJpZy1pbWcge1xuICAgIHRyYW5zZm9ybTpzY2FsZSgxLjA1KTtcbn1cbi8qIElmIGhhdmUgdGhlIG92ZXJsYXkgbGF5ZXIgKi9cbi5yaWctb3ZlcmxheSB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGRpc3BsYXk6YmxvY2s7XG4gICAgdG9wOiAwO1xuICAgIGxlZnQ6IDA7XG4gICAgYm90dG9tOiAwO1xuICAgIHJpZ2h0OiAwO1xuICAgIG1hcmdpbjogYXV0bztcbiAgICBiYWNrZ3JvdW5kOiAjZmZmIG5vLXJlcGVhdCBjZW50ZXIgMjAlO1xuICAgIGJhY2tncm91bmQtc2l6ZTo1MHB4IDUwcHg7XG4gICAgb3BhY2l0eTowO1xuICAgIGZpbHRlcjphbHBoYShvcGFjaXR5PTApOy8qRm9yIElFNiAtIElFOCovXG4gICAgdHJhbnNpdGlvbjphbGwgMC42cztcbn1cbiNyaWcgbGk6aG92ZXIgLnJpZy1vdmVybGF5IHtcbiAgICBvcGFjaXR5OjA7XG59XG5cbi8qIElmIGhhdmUgY2FwdGlvbnMgKi9cbi5yaWctdGV4dHt0ZXh0LWFsaWduOiBsZWZ0OyBjb2xvcjogIzAwMDsgZm9udC1zaXplOiAyMHB4OyBsaW5lLWhlaWdodDogMTsgZm9udC13ZWlnaHQ6IDYwMDt9XG4jcmlnIGxpOmhvdmVyIC5yaWctdGV4dCB7XG4gICAgdHJhbnNmb3JtOnRyYW5zbGF0ZVkoMHB4KTtcbiAgICBvcGFjaXR5OjAuOTtcbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDkwMDBweCkge1xuICAgICNyaWcgbGkge1xuICAgICAgICB3aWR0aDoxMDAlO1xuICAgIH1cbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDcwMHB4KSB7XG4gICAgI3JpZyBsaSB7XG4gICAgICAgIHdpZHRoOjEwMCU7XG4gICAgfVxufVxuXG5AbWVkaWEgKG1heC13aWR0aDogNTUwcHgpIHtcbiAgICAjcmlnIGxpIHtcbiAgICAgICAgd2lkdGg6MTAwJTtcbiAgICB9XG59Il19 */"

/***/ }),

/***/ "./src/app/components/pages/magazine/magazine.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/components/pages/magazine/magazine.component.ts ***!
  \*****************************************************************/
/*! exports provided: MagazineComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MagazineComponent", function() { return MagazineComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_magazine_services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/magazine.services */ "./src/app/services/magazine.services.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");





var MagazineComponent = /** @class */ (function () {
    function MagazineComponent(_MagazineService, meta, title, router) {
        this._MagazineService = _MagazineService;
        this.meta = meta;
        this.title = title;
        this.router = router;
        this.titlePage = 'Magazine | Salon Home';
    }
    MagazineComponent.prototype.ngOnInit = function () {
        this.initTop();
        this.setMeta();
        this.getAllPost();
    };
    MagazineComponent.prototype.setMeta = function () {
        this.title.setTitle(this.titlePage);
        this.meta.updateTag({ property: 'og:title', content: this.titlePage });
        this.meta.updateTag({ name: 'twitter:title', content: this.titlePage });
    };
    MagazineComponent.prototype.getAllPost = function () {
        var _this = this;
        this._MagazineService.getMagazine().subscribe(function (response) {
            _this.magazine_posts = response;
            if (!_this.magazine_posts) {
                console.log('Not found data source.');
            }
        }, function (error) {
            var errorMessage = error;
            console.log(errorMessage);
        });
    };
    MagazineComponent.prototype.initTop = function () {
        this.router.events.subscribe(function (evt) {
            if (!(evt instanceof _angular_router__WEBPACK_IMPORTED_MODULE_4__["NavigationEnd"])) {
                return;
            }
            window.scrollTo(0, 0);
        });
    };
    MagazineComponent.ctorParameters = function () { return [
        { type: _services_magazine_services__WEBPACK_IMPORTED_MODULE_2__["MagazineService"] },
        { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["Meta"] },
        { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["Title"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
    ]; };
    MagazineComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-magazine',
            template: __webpack_require__(/*! raw-loader!./magazine.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/pages/magazine/magazine.component.html"),
            providers: [_services_magazine_services__WEBPACK_IMPORTED_MODULE_2__["MagazineService"]],
            styles: [__webpack_require__(/*! ./magazine.component.css */ "./src/app/components/pages/magazine/magazine.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_magazine_services__WEBPACK_IMPORTED_MODULE_2__["MagazineService"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["Meta"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["Title"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], MagazineComponent);
    return MagazineComponent;
}());



/***/ }),

/***/ "./src/app/components/pages/privacy-policy/privacy-policy.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/components/pages/privacy-policy/privacy-policy.component.ts ***!
  \*****************************************************************************/
/*! exports provided: PrivacyPolicyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PrivacyPolicyComponent", function() { return PrivacyPolicyComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var PrivacyPolicyComponent = /** @class */ (function () {
    function PrivacyPolicyComponent(meta, title, router) {
        this.meta = meta;
        this.title = title;
        this.router = router;
        this.titlePage = 'Privacy Policy | Salon Home';
    }
    PrivacyPolicyComponent.prototype.ngOnInit = function () {
        this.initTop();
        this.setMeta();
    };
    PrivacyPolicyComponent.prototype.setMeta = function () {
        this.title.setTitle(this.titlePage);
        this.meta.updateTag({ property: 'og:title', content: this.titlePage });
        this.meta.updateTag({ name: 'twitter:title', content: this.titlePage });
    };
    PrivacyPolicyComponent.prototype.initTop = function () {
        this.router.events.subscribe(function (evt) {
            if (!(evt instanceof _angular_router__WEBPACK_IMPORTED_MODULE_3__["NavigationEnd"])) {
                return;
            }
            window.scrollTo(0, 0);
        });
    };
    PrivacyPolicyComponent.ctorParameters = function () { return [
        { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["Meta"] },
        { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["Title"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
    ]; };
    PrivacyPolicyComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-privacy-policy',
            template: __webpack_require__(/*! raw-loader!./privacy-policy.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/pages/privacy-policy/privacy-policy.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["Meta"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["Title"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], PrivacyPolicyComponent);
    return PrivacyPolicyComponent;
}());



/***/ }),

/***/ "./src/app/components/pages/search/search.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/pages/search/search.component.ts ***!
  \*************************************************************/
/*! exports provided: SearchPostComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchPostComponent", function() { return SearchPostComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_university_services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../../services/university.services */ "./src/app/services/university.services.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");





var SearchPostComponent = /** @class */ (function () {
    function SearchPostComponent(_UniversityService, _route, _router, meta, title, router) {
        this._UniversityService = _UniversityService;
        this._route = _route;
        this._router = _router;
        this.meta = meta;
        this.title = title;
        this.router = router;
        this.titlePage = 'Search Results | Salon Home';
    }
    SearchPostComponent.prototype.ngOnInit = function () {
        this.initTop();
        this.setMeta();
        this.getResults();
    };
    SearchPostComponent.prototype.setMeta = function () {
        this.title.setTitle(this.titlePage);
        this.meta.updateTag({ property: 'og:title', content: this.titlePage });
        this.meta.updateTag({ name: 'twitter:title', content: this.titlePage });
    };
    SearchPostComponent.prototype.getResults = function () {
        var _this = this;
        this._route.params.forEach(function (params) {
            var _keywords = params['keywords'];
            _this._UniversityService.searchPostUniversity(_keywords).subscribe(function (response) {
                _this.result_posts = response;
                if (!_this.result_posts) {
                    console.log('Not found data source.');
                }
            }, function (error) {
                console.log(error);
            });
        });
    };
    SearchPostComponent.prototype.initTop = function () {
        this.router.events.subscribe(function (evt) {
            if (!(evt instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationEnd"])) {
                return;
            }
            window.scrollTo(0, 0);
        });
    };
    SearchPostComponent.ctorParameters = function () { return [
        { type: _services_university_services__WEBPACK_IMPORTED_MODULE_3__["UniversityService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["Meta"] },
        { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["Title"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
    ]; };
    SearchPostComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-search',
            template: __webpack_require__(/*! raw-loader!./search.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/pages/search/search.component.html"),
            providers: [_services_university_services__WEBPACK_IMPORTED_MODULE_3__["UniversityService"]]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_university_services__WEBPACK_IMPORTED_MODULE_3__["UniversityService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["Meta"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["Title"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], SearchPostComponent);
    return SearchPostComponent;
}());



/***/ }),

/***/ "./src/app/components/pages/services/services-availablespace.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/components/pages/services/services-availablespace.component.ts ***!
  \********************************************************************************/
/*! exports provided: ServicesAvailablespaceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServicesAvailablespaceComponent", function() { return ServicesAvailablespaceComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var ServicesAvailablespaceComponent = /** @class */ (function () {
    function ServicesAvailablespaceComponent(meta, title, router) {
        this.meta = meta;
        this.title = title;
        this.router = router;
        this.titlePage = 'Available Spaces Services | Salon Home';
    }
    ServicesAvailablespaceComponent.prototype.ngOnInit = function () {
        this.initTop();
        this.setMeta();
    };
    ServicesAvailablespaceComponent.prototype.setMeta = function () {
        this.title.setTitle(this.titlePage);
        this.meta.updateTag({ property: 'og:title', content: this.titlePage });
        this.meta.updateTag({ name: 'twitter:title', content: this.titlePage });
    };
    ServicesAvailablespaceComponent.prototype.initTop = function () {
        this.router.events.subscribe(function (evt) {
            if (!(evt instanceof _angular_router__WEBPACK_IMPORTED_MODULE_3__["NavigationEnd"])) {
                return;
            }
            window.scrollTo(0, 0);
        });
    };
    ServicesAvailablespaceComponent.ctorParameters = function () { return [
        { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["Meta"] },
        { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["Title"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
    ]; };
    ServicesAvailablespaceComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-services-availablespace',
            template: __webpack_require__(/*! raw-loader!./services-availablespace.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/pages/services/services-availablespace.component.html"),
            styles: [__webpack_require__(/*! ./services.component.css */ "./src/app/components/pages/services/services.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["Meta"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["Title"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], ServicesAvailablespaceComponent);
    return ServicesAvailablespaceComponent;
}());



/***/ }),

/***/ "./src/app/components/pages/services/services-barbers.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/components/pages/services/services-barbers.component.ts ***!
  \*************************************************************************/
/*! exports provided: ServicesBarbersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServicesBarbersComponent", function() { return ServicesBarbersComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var ServicesBarbersComponent = /** @class */ (function () {
    function ServicesBarbersComponent(meta, title, router) {
        this.meta = meta;
        this.title = title;
        this.router = router;
        this.titlePage = 'Barbers Services | Salon Home';
    }
    ServicesBarbersComponent.prototype.ngOnInit = function () {
        this.initTop();
        this.setMeta();
    };
    ServicesBarbersComponent.prototype.setMeta = function () {
        this.title.setTitle(this.titlePage);
        this.meta.updateTag({ property: 'og:title', content: this.titlePage });
        this.meta.updateTag({ name: 'twitter:title', content: this.titlePage });
    };
    ServicesBarbersComponent.prototype.initTop = function () {
        this.router.events.subscribe(function (evt) {
            if (!(evt instanceof _angular_router__WEBPACK_IMPORTED_MODULE_3__["NavigationEnd"])) {
                return;
            }
            window.scrollTo(0, 0);
        });
    };
    ServicesBarbersComponent.ctorParameters = function () { return [
        { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["Meta"] },
        { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["Title"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
    ]; };
    ServicesBarbersComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-services-barbers',
            template: __webpack_require__(/*! raw-loader!./services-barbers.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/pages/services/services-barbers.component.html"),
            styles: [__webpack_require__(/*! ./services.component.css */ "./src/app/components/pages/services/services.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["Meta"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["Title"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], ServicesBarbersComponent);
    return ServicesBarbersComponent;
}());



/***/ }),

/***/ "./src/app/components/pages/services/services-body.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/components/pages/services/services-body.component.ts ***!
  \**********************************************************************/
/*! exports provided: ServicesBodyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServicesBodyComponent", function() { return ServicesBodyComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var ServicesBodyComponent = /** @class */ (function () {
    function ServicesBodyComponent(meta, title, router) {
        this.meta = meta;
        this.title = title;
        this.router = router;
        this.titlePage = 'Spa Services | Salon Home';
    }
    ServicesBodyComponent.prototype.ngOnInit = function () {
        this.initTop();
        this.setMeta();
    };
    ServicesBodyComponent.prototype.setMeta = function () {
        this.title.setTitle(this.titlePage);
        this.meta.updateTag({ property: 'og:title', content: this.titlePage });
        this.meta.updateTag({ name: 'twitter:title', content: this.titlePage });
    };
    ServicesBodyComponent.prototype.initTop = function () {
        this.router.events.subscribe(function (evt) {
            if (!(evt instanceof _angular_router__WEBPACK_IMPORTED_MODULE_3__["NavigationEnd"])) {
                return;
            }
            window.scrollTo(0, 0);
        });
    };
    ServicesBodyComponent.ctorParameters = function () { return [
        { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["Meta"] },
        { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["Title"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
    ]; };
    ServicesBodyComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-services-body',
            template: __webpack_require__(/*! raw-loader!./services-body.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/pages/services/services-body.component.html"),
            styles: [__webpack_require__(/*! ./services.component.css */ "./src/app/components/pages/services/services.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["Meta"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["Title"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], ServicesBodyComponent);
    return ServicesBodyComponent;
}());



/***/ }),

/***/ "./src/app/components/pages/services/services-hair.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/components/pages/services/services-hair.component.ts ***!
  \**********************************************************************/
/*! exports provided: ServicesHairComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServicesHairComponent", function() { return ServicesHairComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var ServicesHairComponent = /** @class */ (function () {
    function ServicesHairComponent(meta, title, router) {
        this.meta = meta;
        this.title = title;
        this.router = router;
        this.titlePage = 'Hair Services | Salon Home';
    }
    ServicesHairComponent.prototype.ngOnInit = function () {
        this.initTop();
        this.setMeta();
    };
    ServicesHairComponent.prototype.setMeta = function () {
        this.title.setTitle(this.titlePage);
        this.meta.updateTag({ property: 'og:title', content: this.titlePage });
        this.meta.updateTag({ name: 'twitter:title', content: this.titlePage });
    };
    ServicesHairComponent.prototype.initTop = function () {
        this.router.events.subscribe(function (evt) {
            if (!(evt instanceof _angular_router__WEBPACK_IMPORTED_MODULE_3__["NavigationEnd"])) {
                return;
            }
            window.scrollTo(0, 0);
        });
    };
    ServicesHairComponent.ctorParameters = function () { return [
        { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["Meta"] },
        { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["Title"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
    ]; };
    ServicesHairComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-services-hair',
            template: __webpack_require__(/*! raw-loader!./services-hair.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/pages/services/services-hair.component.html"),
            styles: [__webpack_require__(/*! ./services.component.css */ "./src/app/components/pages/services/services.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["Meta"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["Title"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], ServicesHairComponent);
    return ServicesHairComponent;
}());



/***/ }),

/***/ "./src/app/components/pages/services/services-makeup.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/components/pages/services/services-makeup.component.ts ***!
  \************************************************************************/
/*! exports provided: ServicesMakeupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServicesMakeupComponent", function() { return ServicesMakeupComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var ServicesMakeupComponent = /** @class */ (function () {
    function ServicesMakeupComponent(meta, title, router) {
        this.meta = meta;
        this.title = title;
        this.router = router;
        this.titlePage = 'Makeup Services | Salon Home';
    }
    ServicesMakeupComponent.prototype.ngOnInit = function () {
        this.initTop();
        this.setMeta();
    };
    ServicesMakeupComponent.prototype.setMeta = function () {
        this.title.setTitle(this.titlePage);
        this.meta.updateTag({ property: 'og:title', content: this.titlePage });
        this.meta.updateTag({ name: 'twitter:title', content: this.titlePage });
    };
    ServicesMakeupComponent.prototype.initTop = function () {
        this.router.events.subscribe(function (evt) {
            if (!(evt instanceof _angular_router__WEBPACK_IMPORTED_MODULE_3__["NavigationEnd"])) {
                return;
            }
            window.scrollTo(0, 0);
        });
    };
    ServicesMakeupComponent.ctorParameters = function () { return [
        { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["Meta"] },
        { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["Title"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
    ]; };
    ServicesMakeupComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-services-makeup',
            template: __webpack_require__(/*! raw-loader!./services-makeup.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/pages/services/services-makeup.component.html"),
            styles: [__webpack_require__(/*! ./services.component.css */ "./src/app/components/pages/services/services.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["Meta"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["Title"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], ServicesMakeupComponent);
    return ServicesMakeupComponent;
}());



/***/ }),

/***/ "./src/app/components/pages/services/services-massage.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/components/pages/services/services-massage.component.ts ***!
  \*************************************************************************/
/*! exports provided: ServicesMassageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServicesMassageComponent", function() { return ServicesMassageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var ServicesMassageComponent = /** @class */ (function () {
    function ServicesMassageComponent(meta, title, router) {
        this.meta = meta;
        this.title = title;
        this.router = router;
        this.titlePage = 'Massage Services | Salon Home';
    }
    ServicesMassageComponent.prototype.ngOnInit = function () {
        this.initTop();
        this.setMeta();
    };
    ServicesMassageComponent.prototype.setMeta = function () {
        this.title.setTitle(this.titlePage);
        this.meta.updateTag({ property: 'og:title', content: this.titlePage });
        this.meta.updateTag({ name: 'twitter:title', content: this.titlePage });
    };
    ServicesMassageComponent.prototype.initTop = function () {
        this.router.events.subscribe(function (evt) {
            if (!(evt instanceof _angular_router__WEBPACK_IMPORTED_MODULE_3__["NavigationEnd"])) {
                return;
            }
            window.scrollTo(0, 0);
        });
    };
    ServicesMassageComponent.ctorParameters = function () { return [
        { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["Meta"] },
        { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["Title"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
    ]; };
    ServicesMassageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-services-massage',
            template: __webpack_require__(/*! raw-loader!./services-massage.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/pages/services/services-massage.component.html"),
            styles: [__webpack_require__(/*! ./services.component.css */ "./src/app/components/pages/services/services.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["Meta"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["Title"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], ServicesMassageComponent);
    return ServicesMassageComponent;
}());



/***/ }),

/***/ "./src/app/components/pages/services/services-nail.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/components/pages/services/services-nail.component.ts ***!
  \**********************************************************************/
/*! exports provided: ServicesNailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServicesNailComponent", function() { return ServicesNailComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var ServicesNailComponent = /** @class */ (function () {
    function ServicesNailComponent(meta, title, router) {
        this.meta = meta;
        this.title = title;
        this.router = router;
        this.titlePage = 'Nail Services | Salon Home';
    }
    ServicesNailComponent.prototype.ngOnInit = function () {
        this.initTop();
        this.setMeta();
    };
    ServicesNailComponent.prototype.setMeta = function () {
        this.title.setTitle(this.titlePage);
        this.meta.updateTag({ property: 'og:title', content: this.titlePage });
        this.meta.updateTag({ name: 'twitter:title', content: this.titlePage });
    };
    ServicesNailComponent.prototype.initTop = function () {
        this.router.events.subscribe(function (evt) {
            if (!(evt instanceof _angular_router__WEBPACK_IMPORTED_MODULE_3__["NavigationEnd"])) {
                return;
            }
            window.scrollTo(0, 0);
        });
    };
    ServicesNailComponent.ctorParameters = function () { return [
        { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["Meta"] },
        { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["Title"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
    ]; };
    ServicesNailComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-services-nail',
            template: __webpack_require__(/*! raw-loader!./services-nail.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/pages/services/services-nail.component.html"),
            styles: [__webpack_require__(/*! ./services.component.css */ "./src/app/components/pages/services/services.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["Meta"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["Title"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], ServicesNailComponent);
    return ServicesNailComponent;
}());



/***/ }),

/***/ "./src/app/components/pages/services/services-skin.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/components/pages/services/services-skin.component.ts ***!
  \**********************************************************************/
/*! exports provided: ServicesSkinComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServicesSkinComponent", function() { return ServicesSkinComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var ServicesSkinComponent = /** @class */ (function () {
    function ServicesSkinComponent(meta, title, router) {
        this.meta = meta;
        this.title = title;
        this.router = router;
        this.titlePage = 'Skin Services | Salon Home';
    }
    ServicesSkinComponent.prototype.ngOnInit = function () {
        this.initTop();
        this.setMeta();
    };
    ServicesSkinComponent.prototype.setMeta = function () {
        this.title.setTitle(this.titlePage);
        this.meta.updateTag({ property: 'og:title', content: this.titlePage });
        this.meta.updateTag({ name: 'twitter:title', content: this.titlePage });
    };
    ServicesSkinComponent.prototype.initTop = function () {
        this.router.events.subscribe(function (evt) {
            if (!(evt instanceof _angular_router__WEBPACK_IMPORTED_MODULE_3__["NavigationEnd"])) {
                return;
            }
            window.scrollTo(0, 0);
        });
    };
    ServicesSkinComponent.ctorParameters = function () { return [
        { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["Meta"] },
        { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["Title"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
    ]; };
    ServicesSkinComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-services-skin',
            template: __webpack_require__(/*! raw-loader!./services-skin.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/pages/services/services-skin.component.html"),
            styles: [__webpack_require__(/*! ./services.component.css */ "./src/app/components/pages/services/services.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["Meta"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["Title"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], ServicesSkinComponent);
    return ServicesSkinComponent;
}());



/***/ }),

/***/ "./src/app/components/pages/services/services.component.css":
/*!******************************************************************!*\
  !*** ./src/app/components/pages/services/services.component.css ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@media screen and (max-width:1024px){\n.style_menu_1 .style_button_1{padding:5px 10px !important;}\n.banner-section .title h2{margin-bottom:0px;padding-bottom:0px;}\n.banner-section .text_10{font-size:32px;}\n.banner-section.available-spaces .top-01{margin-top:-40px !important;}\n.banner-section .banner-title{padding:0px !important;}\n}\n@media screen and (max-width:768px){\n.black-res, .black-res *{color: #000 !important;}\n.style_menu_1 .style_button_1{font-size:13px !important;}\n.banner-section .text_12{font-size:40px;}\n.banner-section .text_10{font-size:30px;}\n}\n@media screen and (max-width:700px){\n.container-type2 p{font-size:16px;}\n.style_menu_1 .style_button_1{font-size:16px !important;width:48% !important;}\n.style_menu_1 .style_button_1.active:after{display:none !important;}\n.banner-section .no-overlay{height:auto !important;padding-top:170px !important;background-size:auto 170px !important;background-repeat:no-repeat !important;}\n.banner-section .no-overlay:before{content:' ';height:170px;margin-top:62px;display:block;position:absolute;top:0px;z-index:-1;left:0px;width:100%;background-color:#f8f8f8 !important;}\n.banner-section.b-hair .no-overlay{background-position:-8% top !important;}\n.banner-section.b-tanning .no-overlay{background-position:97% top !important;}\n.banner-section.b-makeup .no-overlay{background-position:0% -16px !important;background-size:220% !important;}\n.banner-section.b-massage .no-overlay{background-position:left top !important;}\n.banner-section.b-nails .no-overlay{background-position:0px -21px !important;background-size:280% !important;}\n.banner-section.b-skincare .no-overlay{background-position:right top !important;}\n.banner-section.b-body .no-overlay{background-position:1% top !important;}\n.banner-section.b-bridal .no-overlay{background-position:right -4px !important;background-size:289% !important;}\n.banner-section.b-spaces .no-overlay{background-position:center top !important;background-size:195% !important;}\n.banner-section.b-barbers .no-overlay{background-position:80% top !important;}\n.banner-section .banner-container{padding-top:40px !important;margin-top:0px !important;padding-bottom:40px !important;background:#e2e2e2 !important;}\n.banner-section .text_12{font-size:32px !important;margin-bottom:10px !important;}\n.banner-section .text_10{font-size:22px !important;margin-bottom:10px !important;line-height:initial !important;}\n.banner-section .text_7{font-size:16px !important;}\n.banner-section{padding-bottom:0px !important;}\n.content-services{padding:40px 0px 0px 0px !important;}\n.banner-section .banner-title img{margin-top:40px !important;}\n.s-hair .f-img-post-top img{position:absolute;top:0px;margin-top:160px;width:200px;left:50%;margin-left:-100px;}\n.s-hair .s-text-post-top{padding-bottom:340px;}\n.s-tanning .f-img-post-top img{width:200px;}\n.s-nails .f-img-post-top img{position:absolute;top:0px;margin-top:220px;width:200px;left:50%;margin-left:-100px;}\n.s-nails .s-text-post-top{padding-bottom:340px;}\n.s-makeup .f-img-post-top img{position:absolute;top:0px;margin-top:170px;width:200px;left:50%;margin-left:-100px;}\n.s-makeup .s-text-post-top{padding-bottom:340px;}\n.s-massage .f-img-post-top img{width:200px;}\n.s-skincare .f-img-post-top img{position:absolute;top:0px;margin-top:205px;width:200px;left:50%;margin-left:-100px;}\n.s-skincare .s-text-post-top{padding-bottom:340px;}\n.s-body .f-img-post-top img{position:absolute;top:0px;margin-top:175px;width:200px;left:50%;margin-left:-100px;}\n.s-body .s-text-post-top{padding-bottom:340px;}\n.s-bridal .f-img-post-top img{position:absolute;top:0px;margin-top:195px;width:200px;left:50%;margin-left:-100px;}\n.s-bridal .s-text-post-top{padding-bottom:370px;}\n.s-space .f-img-post-top img{position:absolute;top:0px;margin-top:440px;width:200px;left:50%;margin-left:-100px;}\n.s-space .s-text-post-top{padding-bottom:288px;}\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9wYWdlcy9zZXJ2aWNlcy9zZXJ2aWNlcy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0EsOEJBQThCLDJCQUEyQixDQUFDO0FBQzFELDBCQUEwQixpQkFBaUIsQ0FBQyxrQkFBa0IsQ0FBQztBQUMvRCx5QkFBeUIsY0FBYyxDQUFDO0FBQ3hDLHlDQUF5QywyQkFBMkIsQ0FBQztBQUNyRSw4QkFBOEIsc0JBQXNCLENBQUM7QUFDckQ7QUFDQTtBQUNBLHlCQUF5QixzQkFBc0IsQ0FBQztBQUNoRCw4QkFBOEIseUJBQXlCLENBQUM7QUFDeEQseUJBQXlCLGNBQWMsQ0FBQztBQUN4Qyx5QkFBeUIsY0FBYyxDQUFDO0FBQ3hDO0FBQ0E7QUFDQSxtQkFBbUIsY0FBYyxDQUFDO0FBQ2xDLDhCQUE4Qix5QkFBeUIsQ0FBQyxvQkFBb0IsQ0FBQztBQUM3RSwyQ0FBMkMsdUJBQXVCLENBQUM7QUFDbkUsNEJBQTRCLHNCQUFzQixDQUFDLDRCQUE0QixDQUFDLHFDQUFxQyxDQUFDLHNDQUFzQyxDQUFDO0FBQzdKLG1DQUFtQyxXQUFXLENBQUMsWUFBWSxDQUFDLGVBQWUsQ0FBQyxhQUFhLENBQUMsaUJBQWlCLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQyxRQUFRLENBQUMsVUFBVSxDQUFDLG1DQUFtQyxDQUFDO0FBQ3ZMLG1DQUFtQyxzQ0FBc0MsQ0FBQztBQUMxRSxzQ0FBc0Msc0NBQXNDLENBQUM7QUFDN0UscUNBQXFDLHVDQUF1QyxDQUFDLCtCQUErQixDQUFDO0FBQzdHLHNDQUFzQyx1Q0FBdUMsQ0FBQztBQUM5RSxvQ0FBb0Msd0NBQXdDLENBQUMsK0JBQStCLENBQUM7QUFDN0csdUNBQXVDLHdDQUF3QyxDQUFDO0FBQ2hGLG1DQUFtQyxxQ0FBcUMsQ0FBQztBQUN6RSxxQ0FBcUMseUNBQXlDLENBQUMsK0JBQStCLENBQUM7QUFDL0cscUNBQXFDLHlDQUF5QyxDQUFDLCtCQUErQixDQUFDO0FBQy9HLHNDQUFzQyxzQ0FBc0MsQ0FBQztBQUM3RSxrQ0FBa0MsMkJBQTJCLENBQUMseUJBQXlCLENBQUMsOEJBQThCLENBQUMsNkJBQTZCLENBQUM7QUFDckoseUJBQXlCLHlCQUF5QixDQUFDLDZCQUE2QixDQUFDO0FBQ2pGLHlCQUF5Qix5QkFBeUIsQ0FBQyw2QkFBNkIsQ0FBQyw4QkFBOEIsQ0FBQztBQUNoSCx3QkFBd0IseUJBQXlCLENBQUM7QUFDbEQsZ0JBQWdCLDZCQUE2QixDQUFDO0FBQzlDLGtCQUFrQixtQ0FBbUMsQ0FBQztBQUN0RCxrQ0FBa0MsMEJBQTBCLENBQUM7QUFDN0QsNEJBQTRCLGlCQUFpQixDQUFDLE9BQU8sQ0FBQyxnQkFBZ0IsQ0FBQyxXQUFXLENBQUMsUUFBUSxDQUFDLGtCQUFrQixDQUFDO0FBQy9HLHlCQUF5QixvQkFBb0IsQ0FBQztBQUM5QywrQkFBK0IsV0FBVyxDQUFDO0FBQzNDLDZCQUE2QixpQkFBaUIsQ0FBQyxPQUFPLENBQUMsZ0JBQWdCLENBQUMsV0FBVyxDQUFDLFFBQVEsQ0FBQyxrQkFBa0IsQ0FBQztBQUNoSCwwQkFBMEIsb0JBQW9CLENBQUM7QUFDL0MsOEJBQThCLGlCQUFpQixDQUFDLE9BQU8sQ0FBQyxnQkFBZ0IsQ0FBQyxXQUFXLENBQUMsUUFBUSxDQUFDLGtCQUFrQixDQUFDO0FBQ2pILDJCQUEyQixvQkFBb0IsQ0FBQztBQUNoRCwrQkFBK0IsV0FBVyxDQUFDO0FBQzNDLGdDQUFnQyxpQkFBaUIsQ0FBQyxPQUFPLENBQUMsZ0JBQWdCLENBQUMsV0FBVyxDQUFDLFFBQVEsQ0FBQyxrQkFBa0IsQ0FBQztBQUNuSCw2QkFBNkIsb0JBQW9CLENBQUM7QUFDbEQsNEJBQTRCLGlCQUFpQixDQUFDLE9BQU8sQ0FBQyxnQkFBZ0IsQ0FBQyxXQUFXLENBQUMsUUFBUSxDQUFDLGtCQUFrQixDQUFDO0FBQy9HLHlCQUF5QixvQkFBb0IsQ0FBQztBQUM5Qyw4QkFBOEIsaUJBQWlCLENBQUMsT0FBTyxDQUFDLGdCQUFnQixDQUFDLFdBQVcsQ0FBQyxRQUFRLENBQUMsa0JBQWtCLENBQUM7QUFDakgsMkJBQTJCLG9CQUFvQixDQUFDO0FBQ2hELDZCQUE2QixpQkFBaUIsQ0FBQyxPQUFPLENBQUMsZ0JBQWdCLENBQUMsV0FBVyxDQUFDLFFBQVEsQ0FBQyxrQkFBa0IsQ0FBQztBQUNoSCwwQkFBMEIsb0JBQW9CLENBQUM7QUFDL0MiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3BhZ2VzL3NlcnZpY2VzL3NlcnZpY2VzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjEwMjRweCl7XG4uc3R5bGVfbWVudV8xIC5zdHlsZV9idXR0b25fMXtwYWRkaW5nOjVweCAxMHB4ICFpbXBvcnRhbnQ7fVxuLmJhbm5lci1zZWN0aW9uIC50aXRsZSBoMnttYXJnaW4tYm90dG9tOjBweDtwYWRkaW5nLWJvdHRvbTowcHg7fVxuLmJhbm5lci1zZWN0aW9uIC50ZXh0XzEwe2ZvbnQtc2l6ZTozMnB4O31cbi5iYW5uZXItc2VjdGlvbi5hdmFpbGFibGUtc3BhY2VzIC50b3AtMDF7bWFyZ2luLXRvcDotNDBweCAhaW1wb3J0YW50O31cbi5iYW5uZXItc2VjdGlvbiAuYmFubmVyLXRpdGxle3BhZGRpbmc6MHB4ICFpbXBvcnRhbnQ7fVxufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDo3NjhweCl7XG4uYmxhY2stcmVzLCAuYmxhY2stcmVzICp7Y29sb3I6ICMwMDAgIWltcG9ydGFudDt9XG4uc3R5bGVfbWVudV8xIC5zdHlsZV9idXR0b25fMXtmb250LXNpemU6MTNweCAhaW1wb3J0YW50O31cbi5iYW5uZXItc2VjdGlvbiAudGV4dF8xMntmb250LXNpemU6NDBweDt9XG4uYmFubmVyLXNlY3Rpb24gLnRleHRfMTB7Zm9udC1zaXplOjMwcHg7fVxufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDo3MDBweCl7XG4uY29udGFpbmVyLXR5cGUyIHB7Zm9udC1zaXplOjE2cHg7fVxuLnN0eWxlX21lbnVfMSAuc3R5bGVfYnV0dG9uXzF7Zm9udC1zaXplOjE2cHggIWltcG9ydGFudDt3aWR0aDo0OCUgIWltcG9ydGFudDt9XG4uc3R5bGVfbWVudV8xIC5zdHlsZV9idXR0b25fMS5hY3RpdmU6YWZ0ZXJ7ZGlzcGxheTpub25lICFpbXBvcnRhbnQ7fVxuLmJhbm5lci1zZWN0aW9uIC5uby1vdmVybGF5e2hlaWdodDphdXRvICFpbXBvcnRhbnQ7cGFkZGluZy10b3A6MTcwcHggIWltcG9ydGFudDtiYWNrZ3JvdW5kLXNpemU6YXV0byAxNzBweCAhaW1wb3J0YW50O2JhY2tncm91bmQtcmVwZWF0Om5vLXJlcGVhdCAhaW1wb3J0YW50O31cbi5iYW5uZXItc2VjdGlvbiAubm8tb3ZlcmxheTpiZWZvcmV7Y29udGVudDonICc7aGVpZ2h0OjE3MHB4O21hcmdpbi10b3A6NjJweDtkaXNwbGF5OmJsb2NrO3Bvc2l0aW9uOmFic29sdXRlO3RvcDowcHg7ei1pbmRleDotMTtsZWZ0OjBweDt3aWR0aDoxMDAlO2JhY2tncm91bmQtY29sb3I6I2Y4ZjhmOCAhaW1wb3J0YW50O31cbi5iYW5uZXItc2VjdGlvbi5iLWhhaXIgLm5vLW92ZXJsYXl7YmFja2dyb3VuZC1wb3NpdGlvbjotOCUgdG9wICFpbXBvcnRhbnQ7fVxuLmJhbm5lci1zZWN0aW9uLmItdGFubmluZyAubm8tb3ZlcmxheXtiYWNrZ3JvdW5kLXBvc2l0aW9uOjk3JSB0b3AgIWltcG9ydGFudDt9XG4uYmFubmVyLXNlY3Rpb24uYi1tYWtldXAgLm5vLW92ZXJsYXl7YmFja2dyb3VuZC1wb3NpdGlvbjowJSAtMTZweCAhaW1wb3J0YW50O2JhY2tncm91bmQtc2l6ZToyMjAlICFpbXBvcnRhbnQ7fVxuLmJhbm5lci1zZWN0aW9uLmItbWFzc2FnZSAubm8tb3ZlcmxheXtiYWNrZ3JvdW5kLXBvc2l0aW9uOmxlZnQgdG9wICFpbXBvcnRhbnQ7fVxuLmJhbm5lci1zZWN0aW9uLmItbmFpbHMgLm5vLW92ZXJsYXl7YmFja2dyb3VuZC1wb3NpdGlvbjowcHggLTIxcHggIWltcG9ydGFudDtiYWNrZ3JvdW5kLXNpemU6MjgwJSAhaW1wb3J0YW50O31cbi5iYW5uZXItc2VjdGlvbi5iLXNraW5jYXJlIC5uby1vdmVybGF5e2JhY2tncm91bmQtcG9zaXRpb246cmlnaHQgdG9wICFpbXBvcnRhbnQ7fVxuLmJhbm5lci1zZWN0aW9uLmItYm9keSAubm8tb3ZlcmxheXtiYWNrZ3JvdW5kLXBvc2l0aW9uOjElIHRvcCAhaW1wb3J0YW50O31cbi5iYW5uZXItc2VjdGlvbi5iLWJyaWRhbCAubm8tb3ZlcmxheXtiYWNrZ3JvdW5kLXBvc2l0aW9uOnJpZ2h0IC00cHggIWltcG9ydGFudDtiYWNrZ3JvdW5kLXNpemU6Mjg5JSAhaW1wb3J0YW50O31cbi5iYW5uZXItc2VjdGlvbi5iLXNwYWNlcyAubm8tb3ZlcmxheXtiYWNrZ3JvdW5kLXBvc2l0aW9uOmNlbnRlciB0b3AgIWltcG9ydGFudDtiYWNrZ3JvdW5kLXNpemU6MTk1JSAhaW1wb3J0YW50O31cbi5iYW5uZXItc2VjdGlvbi5iLWJhcmJlcnMgLm5vLW92ZXJsYXl7YmFja2dyb3VuZC1wb3NpdGlvbjo4MCUgdG9wICFpbXBvcnRhbnQ7fVxuLmJhbm5lci1zZWN0aW9uIC5iYW5uZXItY29udGFpbmVye3BhZGRpbmctdG9wOjQwcHggIWltcG9ydGFudDttYXJnaW4tdG9wOjBweCAhaW1wb3J0YW50O3BhZGRpbmctYm90dG9tOjQwcHggIWltcG9ydGFudDtiYWNrZ3JvdW5kOiNlMmUyZTIgIWltcG9ydGFudDt9XG4uYmFubmVyLXNlY3Rpb24gLnRleHRfMTJ7Zm9udC1zaXplOjMycHggIWltcG9ydGFudDttYXJnaW4tYm90dG9tOjEwcHggIWltcG9ydGFudDt9XG4uYmFubmVyLXNlY3Rpb24gLnRleHRfMTB7Zm9udC1zaXplOjIycHggIWltcG9ydGFudDttYXJnaW4tYm90dG9tOjEwcHggIWltcG9ydGFudDtsaW5lLWhlaWdodDppbml0aWFsICFpbXBvcnRhbnQ7fVxuLmJhbm5lci1zZWN0aW9uIC50ZXh0Xzd7Zm9udC1zaXplOjE2cHggIWltcG9ydGFudDt9XG4uYmFubmVyLXNlY3Rpb257cGFkZGluZy1ib3R0b206MHB4ICFpbXBvcnRhbnQ7fVxuLmNvbnRlbnQtc2VydmljZXN7cGFkZGluZzo0MHB4IDBweCAwcHggMHB4ICFpbXBvcnRhbnQ7fVxuLmJhbm5lci1zZWN0aW9uIC5iYW5uZXItdGl0bGUgaW1ne21hcmdpbi10b3A6NDBweCAhaW1wb3J0YW50O31cbi5zLWhhaXIgLmYtaW1nLXBvc3QtdG9wIGltZ3twb3NpdGlvbjphYnNvbHV0ZTt0b3A6MHB4O21hcmdpbi10b3A6MTYwcHg7d2lkdGg6MjAwcHg7bGVmdDo1MCU7bWFyZ2luLWxlZnQ6LTEwMHB4O31cbi5zLWhhaXIgLnMtdGV4dC1wb3N0LXRvcHtwYWRkaW5nLWJvdHRvbTozNDBweDt9XG4ucy10YW5uaW5nIC5mLWltZy1wb3N0LXRvcCBpbWd7d2lkdGg6MjAwcHg7fVxuLnMtbmFpbHMgLmYtaW1nLXBvc3QtdG9wIGltZ3twb3NpdGlvbjphYnNvbHV0ZTt0b3A6MHB4O21hcmdpbi10b3A6MjIwcHg7d2lkdGg6MjAwcHg7bGVmdDo1MCU7bWFyZ2luLWxlZnQ6LTEwMHB4O31cbi5zLW5haWxzIC5zLXRleHQtcG9zdC10b3B7cGFkZGluZy1ib3R0b206MzQwcHg7fVxuLnMtbWFrZXVwIC5mLWltZy1wb3N0LXRvcCBpbWd7cG9zaXRpb246YWJzb2x1dGU7dG9wOjBweDttYXJnaW4tdG9wOjE3MHB4O3dpZHRoOjIwMHB4O2xlZnQ6NTAlO21hcmdpbi1sZWZ0Oi0xMDBweDt9XG4ucy1tYWtldXAgLnMtdGV4dC1wb3N0LXRvcHtwYWRkaW5nLWJvdHRvbTozNDBweDt9XG4ucy1tYXNzYWdlIC5mLWltZy1wb3N0LXRvcCBpbWd7d2lkdGg6MjAwcHg7fVxuLnMtc2tpbmNhcmUgLmYtaW1nLXBvc3QtdG9wIGltZ3twb3NpdGlvbjphYnNvbHV0ZTt0b3A6MHB4O21hcmdpbi10b3A6MjA1cHg7d2lkdGg6MjAwcHg7bGVmdDo1MCU7bWFyZ2luLWxlZnQ6LTEwMHB4O31cbi5zLXNraW5jYXJlIC5zLXRleHQtcG9zdC10b3B7cGFkZGluZy1ib3R0b206MzQwcHg7fVxuLnMtYm9keSAuZi1pbWctcG9zdC10b3AgaW1ne3Bvc2l0aW9uOmFic29sdXRlO3RvcDowcHg7bWFyZ2luLXRvcDoxNzVweDt3aWR0aDoyMDBweDtsZWZ0OjUwJTttYXJnaW4tbGVmdDotMTAwcHg7fVxuLnMtYm9keSAucy10ZXh0LXBvc3QtdG9we3BhZGRpbmctYm90dG9tOjM0MHB4O31cbi5zLWJyaWRhbCAuZi1pbWctcG9zdC10b3AgaW1ne3Bvc2l0aW9uOmFic29sdXRlO3RvcDowcHg7bWFyZ2luLXRvcDoxOTVweDt3aWR0aDoyMDBweDtsZWZ0OjUwJTttYXJnaW4tbGVmdDotMTAwcHg7fVxuLnMtYnJpZGFsIC5zLXRleHQtcG9zdC10b3B7cGFkZGluZy1ib3R0b206MzcwcHg7fVxuLnMtc3BhY2UgLmYtaW1nLXBvc3QtdG9wIGltZ3twb3NpdGlvbjphYnNvbHV0ZTt0b3A6MHB4O21hcmdpbi10b3A6NDQwcHg7d2lkdGg6MjAwcHg7bGVmdDo1MCU7bWFyZ2luLWxlZnQ6LTEwMHB4O31cbi5zLXNwYWNlIC5zLXRleHQtcG9zdC10b3B7cGFkZGluZy1ib3R0b206Mjg4cHg7fVxufSJdfQ== */"

/***/ }),

/***/ "./src/app/components/pages/terms/terms.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/pages/terms/terms.component.ts ***!
  \***********************************************************/
/*! exports provided: TermsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TermsComponent", function() { return TermsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var TermsComponent = /** @class */ (function () {
    function TermsComponent(meta, title, router) {
        this.meta = meta;
        this.title = title;
        this.router = router;
        this.titlePage = 'Terms and Conditions | Salon Home';
    }
    TermsComponent.prototype.ngOnInit = function () {
        this.initTop();
        this.setMeta();
    };
    TermsComponent.prototype.setMeta = function () {
        this.title.setTitle(this.titlePage);
        this.meta.updateTag({ property: 'og:title', content: this.titlePage });
        this.meta.updateTag({ name: 'twitter:title', content: this.titlePage });
    };
    TermsComponent.prototype.initTop = function () {
        this.router.events.subscribe(function (evt) {
            if (!(evt instanceof _angular_router__WEBPACK_IMPORTED_MODULE_3__["NavigationEnd"])) {
                return;
            }
            window.scrollTo(0, 0);
        });
    };
    TermsComponent.ctorParameters = function () { return [
        { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["Meta"] },
        { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["Title"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
    ]; };
    TermsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-terms',
            template: __webpack_require__(/*! raw-loader!./terms.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/pages/terms/terms.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["Meta"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["Title"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], TermsComponent);
    return TermsComponent;
}());



/***/ }),

/***/ "./src/app/components/pages/try-it-free/try-it-free.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/components/pages/try-it-free/try-it-free.component.ts ***!
  \***********************************************************************/
/*! exports provided: TryItFreeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TryItFreeComponent", function() { return TryItFreeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _models_account__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../../../models/account */ "./src/app/models/account.ts");
/* harmony import */ var _services_email_services__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../../../services/email.services */ "./src/app/services/email.services.ts");







var TryItFreeComponent = /** @class */ (function () {
    function TryItFreeComponent(_EmailService, _route, _router, formBuilder, meta, title, router) {
        this._EmailService = _EmailService;
        this._route = _route;
        this._router = _router;
        this.formBuilder = formBuilder;
        this.meta = meta;
        this.title = title;
        this.router = router;
        this.titlePage = 'Join Our Community | Salon Home';
        this.account = new _models_account__WEBPACK_IMPORTED_MODULE_5__["Account"](0, '', '', '', '', '', '', false);
    }
    TryItFreeComponent.prototype.isFieldValid = function (field) {
        return !this.form.get(field).valid && this.form.get(field).touched;
    };
    TryItFreeComponent.prototype.displayFieldCss = function (field) {
        return {
            'has-error': this.isFieldValid(field),
            'has-feedback': this.isFieldValid(field)
        };
    };
    TryItFreeComponent.prototype.onSubmit = function () {
        var _this = this;
        if (this.form.valid) {
            this.account = new _models_account__WEBPACK_IMPORTED_MODULE_5__["Account"](0, $('#type_account_value').val(), this.form.get('type_services').value, this.form.get('first_name').value, this.form.get('last_name').value, this.form.get('email').value, this.form.get('city').value, true);
            this._EmailService.addTryifFree(this.account).subscribe(function (response) {
                if (response.status) {
                    _this.account = new _models_account__WEBPACK_IMPORTED_MODULE_5__["Account"](0, '', '', '', '', '', '', false);
                    $('#form-try .set-response').html('<div class="message success">' + response.message + '</div>');
                }
                else {
                    $('#form-try .set-response').html('<div class="message error">' + response.message + '</div>');
                    console.log(response);
                }
                $('html, body').stop().animate({ scrollTop: $('#form-try .set-response').offset().top - $('#myNavbar').height() + 64 }, 1000);
            }, function (error) {
                console.log('Error Exception:');
                console.log(error);
            });
        }
        else {
            $('html, body').stop().animate({ scrollTop: $('#form-try').offset().top - $('#myNavbar').height() + 64 }, 1000);
            this.validateAllFormFields(this.form);
        }
    };
    TryItFreeComponent.prototype.validateAllFormFields = function (formGroup) {
        var _this = this;
        Object.keys(formGroup.controls).forEach(function (field) {
            var control = formGroup.get(field);
            if (control instanceof _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]) {
                control.markAsTouched({ onlySelf: true });
            }
            else if (control instanceof _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]) {
                _this.validateAllFormFields(control);
            }
        });
    };
    TryItFreeComponent.prototype.ngOnInit = function () {
        this.initTop();
        this.setMeta();
        this.InitValidForm();
    };
    TryItFreeComponent.prototype.ngAfterViewInit = function () {
        this.accountTypeParamHandler();
    };
    TryItFreeComponent.prototype.accountTypeParamHandler = function () {
        var _this = this;
        var _accountType = "";
        this._route.params.forEach(function (params) {
            if (_accountType == "") // Only set once
             {
                _accountType = params['type'];
            }
        });
        if (_accountType == "Professional") {
            // Prevent ExpressionChangedAfterItHasBeenCheckedError		
            window.setTimeout(function () {
                _this.type_account_value = "Professional";
                _this.updateFields();
            });
        }
        else {
            // Prevent ExpressionChangedAfterItHasBeenCheckedError		
            window.setTimeout(function () {
                _this.type_account_value = "Client";
                _this.updateFields();
            });
        }
    };
    TryItFreeComponent.prototype.setMeta = function () {
        this.title.setTitle(this.titlePage);
        this.meta.updateTag({ property: 'og:title', content: this.titlePage });
        this.meta.updateTag({ name: 'twitter:title', content: this.titlePage });
    };
    TryItFreeComponent.prototype.InitValidForm = function () {
        this.form = this.formBuilder.group({
            first_name: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            type_services: ['', null],
            last_name: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            email: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email]],
            city: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        });
    };
    TryItFreeComponent.prototype.onSelectionChange = function (evt) {
        this.type_account_value = evt.target.value;
        this.updateFields();
    };
    TryItFreeComponent.prototype.updateFields = function () {
        if (this.type_account_value == "Professional") {
            $('.display_control_professional').css({ 'display': 'block' });
            $('#type_account_value').val('Professional');
            $("#content-photo-beta-pro").css("background-image", "url(assets/images/banner-image-try-salon-home.jpg)");
        }
        else {
            $('.display_control_professional').css({ 'display': 'none' });
            $('#type_account_value').val('Client');
            $("#content-photo-beta-pro").css("background-image", "url(assets/images/banner-image-try-salon-home-2.jpg)");
        }
    };
    TryItFreeComponent.prototype.initTop = function () {
        var _this = this;
        if (!this.navigationSubscription) {
            this.navigationSubscription = this.router.events.subscribe(function (evt) {
                if (!(evt instanceof _angular_router__WEBPACK_IMPORTED_MODULE_3__["NavigationEnd"])) {
                    return;
                }
                window.scrollTo(0, 0);
                _this.accountTypeParamHandler();
            });
        }
        this.router.onSameUrlNavigation = "reload";
    };
    TryItFreeComponent.prototype.ngOnDestroy = function () {
        // avoid memory leaks here by cleaning up after ourselves. If we  
        // don't then we will continue to run our initialiseInvites()   
        // method on every navigationEnd event.
        if (this.navigationSubscription) {
            this.navigationSubscription.unsubscribe();
        }
    };
    TryItFreeComponent.ctorParameters = function () { return [
        { type: _services_email_services__WEBPACK_IMPORTED_MODULE_6__["EmailService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
        { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["Meta"] },
        { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["Title"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
    ]; };
    TryItFreeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-try-it-free',
            template: __webpack_require__(/*! raw-loader!./try-it-free.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/pages/try-it-free/try-it-free.component.html"),
            providers: [_services_email_services__WEBPACK_IMPORTED_MODULE_6__["EmailService"]]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_email_services__WEBPACK_IMPORTED_MODULE_6__["EmailService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["Meta"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["Title"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], TryItFreeComponent);
    return TryItFreeComponent;
}());



/***/ }),

/***/ "./src/app/models/account.ts":
/*!***********************************!*\
  !*** ./src/app/models/account.ts ***!
  \***********************************/
/*! exports provided: Account */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Account", function() { return Account; });
var Account = /** @class */ (function () {
    function Account(id, type, services, first_name, last_name, email, city, send_submit_try) {
        this.id = id;
        this.type = type;
        this.services = services;
        this.first_name = first_name;
        this.last_name = last_name;
        this.email = email;
        this.city = city;
        this.send_submit_try = send_submit_try;
    }
    Account.ctorParameters = function () { return [
        { type: Number },
        { type: String },
        { type: String },
        { type: String },
        { type: String },
        { type: String },
        { type: String },
        { type: Boolean }
    ]; };
    return Account;
}());



/***/ }),

/***/ "./src/app/models/contact.ts":
/*!***********************************!*\
  !*** ./src/app/models/contact.ts ***!
  \***********************************/
/*! exports provided: Contact */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Contact", function() { return Contact; });
var Contact = /** @class */ (function () {
    function Contact(id, name, email, mobile, message, send_contact) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.mobile = mobile;
        this.message = message;
        this.send_contact = send_contact;
    }
    Contact.ctorParameters = function () { return [
        { type: Number },
        { type: String },
        { type: String },
        { type: Number },
        { type: String },
        { type: Boolean }
    ]; };
    return Contact;
}());



/***/ }),

/***/ "./src/app/models/position.ts":
/*!************************************!*\
  !*** ./src/app/models/position.ts ***!
  \************************************/
/*! exports provided: Position */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Position", function() { return Position; });
var Position = /** @class */ (function () {
    function Position(id, position, full_name, phone, email, linkedin, file, message, send_submit_careers) {
        this.id = id;
        this.position = position;
        this.full_name = full_name;
        this.phone = phone;
        this.email = email;
        this.linkedin = linkedin;
        this.file = file;
        this.message = message;
        this.send_submit_careers = send_submit_careers;
    }
    Position.ctorParameters = function () { return [
        { type: Number },
        { type: String },
        { type: String },
        { type: String },
        { type: String },
        { type: String },
        { type: Array },
        { type: String },
        { type: Boolean }
    ]; };
    return Position;
}());



/***/ }),

/***/ "./src/app/models/professional.ts":
/*!****************************************!*\
  !*** ./src/app/models/professional.ts ***!
  \****************************************/
/*! exports provided: Professional */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Professional", function() { return Professional; });
var Professional = /** @class */ (function () {
    function Professional(id, business_name, service, street, zipcode, city, first_name, last_name, email, phone, send_submit_professional) {
        this.id = id;
        this.business_name = business_name;
        this.service = service;
        this.street = street;
        this.zipcode = zipcode;
        this.city = city;
        this.first_name = first_name;
        this.last_name = last_name;
        this.email = email;
        this.phone = phone;
        this.send_submit_professional = send_submit_professional;
    }
    Professional.ctorParameters = function () { return [
        { type: Number },
        { type: String },
        { type: String },
        { type: String },
        { type: String },
        { type: String },
        { type: String },
        { type: String },
        { type: String },
        { type: String },
        { type: Boolean }
    ]; };
    return Professional;
}());



/***/ }),

/***/ "./src/app/services/email.services.ts":
/*!********************************************!*\
  !*** ./src/app/services/email.services.ts ***!
  \********************************************/
/*! exports provided: EmailService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmailService", function() { return EmailService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _global__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./global */ "./src/app/services/global.ts");




var EmailService = /** @class */ (function () {
    function EmailService(_http) {
        this._http = _http;
        this.base_api_url = _global__WEBPACK_IMPORTED_MODULE_3__["GLOBAL"].slim;
    }
    EmailService.prototype.addContact = function (contact) {
        var json = JSON.stringify(contact);
        var params = 'json=' + json;
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ 'Content-Type': 'application/x-www-form-urlencoded' });
        return this._http.post(this.base_api_url + 'contact', params, { headers: headers });
    };
    EmailService.prototype.addTryifFree = function (account) {
        var json = JSON.stringify(account);
        var params = 'json=' + json;
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ 'Content-Type': 'application/x-www-form-urlencoded' });
        return this._http.post(this.base_api_url + 'pre', params, { headers: headers });
    };
    EmailService.prototype.addProfessional = function (professional) {
        var json = JSON.stringify(professional);
        var params = 'json=' + json;
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ 'Content-Type': 'application/x-www-form-urlencoded' });
        return this._http.post(this.base_api_url + 'getintouch', params, { headers: headers });
    };
    EmailService.prototype.addPosition = function (position) {
        var json = JSON.stringify(position);
        var params = 'json=' + json;
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ 'Content-Type': 'application/x-www-form-urlencoded' });
        return this._http.post(this.base_api_url + 'applycareers', params, { headers: headers });
    };
    EmailService.prototype.makeFileRequest = function (url, params, files) {
        return new Promise(function (resolve, reject) {
            var formData = new FormData();
            var xhr = new XMLHttpRequest();
            for (var i = 0; i < files.length; i++) {
                formData.append('uploads[]', files[i], files[i].name);
            }
            xhr.onreadystatechange = function () {
                if (xhr.readyState == 4) {
                    if (xhr.status == 200) {
                        resolve(JSON.parse(xhr.response));
                    }
                    else {
                        reject(xhr.response);
                    }
                }
            };
            xhr.open("POST", url, true);
            xhr.send(formData);
        });
    };
    EmailService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
    ]; };
    EmailService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], EmailService);
    return EmailService;
}());



/***/ }),

/***/ "./src/app/services/event.services.ts":
/*!********************************************!*\
  !*** ./src/app/services/event.services.ts ***!
  \********************************************/
/*! exports provided: EventService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventService", function() { return EventService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _global__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./global */ "./src/app/services/global.ts");




var EventService = /** @class */ (function () {
    function EventService(_http) {
        this._http = _http;
        this.base_api_url = _global__WEBPACK_IMPORTED_MODULE_3__["GLOBAL"].url;
    }
    EventService.prototype.searchPostEvent = function (keyword) {
        return this._http.get(this.base_api_url + 'search/' + keyword + '/1');
    };
    EventService.prototype.getEvent = function () {
        return this._http.get(this.base_api_url + 'events?per_page=100');
    };
    EventService.prototype.getPostEvent = function (slug) {
        return this._http.get(this.base_api_url + 'events?slug=' + slug);
    };
    EventService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
    ]; };
    EventService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], EventService);
    return EventService;
}());



/***/ }),

/***/ "./src/app/services/global.ts":
/*!************************************!*\
  !*** ./src/app/services/global.ts ***!
  \************************************/
/*! exports provided: GLOBAL */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GLOBAL", function() { return GLOBAL; });
var GLOBAL = {
    url: 'https://www.salonhome.com/manager/wp-json/wp/v2/',
    slim: 'https://www.salonhome.com/ws/index.php/'
};


/***/ }),

/***/ "./src/app/services/help.services.ts":
/*!*******************************************!*\
  !*** ./src/app/services/help.services.ts ***!
  \*******************************************/
/*! exports provided: HelpService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HelpService", function() { return HelpService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _global__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./global */ "./src/app/services/global.ts");




var HelpService = /** @class */ (function () {
    function HelpService(_http) {
        this._http = _http;
        this.base_api_url = _global__WEBPACK_IMPORTED_MODULE_3__["GLOBAL"].url;
    }
    HelpService.prototype.searchPostHelp = function (keyword) {
        return this._http.get(this.base_api_url + 'search/' + keyword + '/1');
    };
    HelpService.prototype.getHelp = function () {
        return this._http.get(this.base_api_url + 'help?per_page=100');
    };
    HelpService.prototype.getPostHelp = function (slug) {
        return this._http.get(this.base_api_url + 'help?slug=' + slug);
    };
    HelpService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
    ]; };
    HelpService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], HelpService);
    return HelpService;
}());



/***/ }),

/***/ "./src/app/services/magazine.services.ts":
/*!***********************************************!*\
  !*** ./src/app/services/magazine.services.ts ***!
  \***********************************************/
/*! exports provided: MagazineService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MagazineService", function() { return MagazineService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _global__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./global */ "./src/app/services/global.ts");




var MagazineService = /** @class */ (function () {
    function MagazineService(_http) {
        this._http = _http;
        this.base_api_url = _global__WEBPACK_IMPORTED_MODULE_3__["GLOBAL"].url;
    }
    MagazineService.prototype.getMagazine = function () {
        return this._http.get(this.base_api_url + 'posts?per_page=100');
    };
    MagazineService.prototype.getPostMagazine = function (slug) {
        return this._http.get(this.base_api_url + 'posts?slug=' + slug);
    };
    MagazineService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
    ]; };
    MagazineService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], MagazineService);
    return MagazineService;
}());



/***/ }),

/***/ "./src/app/services/university.services.ts":
/*!*************************************************!*\
  !*** ./src/app/services/university.services.ts ***!
  \*************************************************/
/*! exports provided: UniversityService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UniversityService", function() { return UniversityService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _global__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./global */ "./src/app/services/global.ts");




var UniversityService = /** @class */ (function () {
    function UniversityService(_http) {
        this._http = _http;
        this.base_api_url = _global__WEBPACK_IMPORTED_MODULE_3__["GLOBAL"].url;
    }
    UniversityService.prototype.searchPostUniversity = function (keyword) {
        return this._http.get(this.base_api_url + 'search/' + keyword + '/1');
    };
    UniversityService.prototype.getUniversity = function () {
        return this._http.get(this.base_api_url + 'university?per_page=100');
    };
    UniversityService.prototype.getPostUniversity = function (slug) {
        return this._http.get(this.base_api_url + 'university?slug=' + slug);
    };
    UniversityService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
    ]; };
    UniversityService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], UniversityService);
    return UniversityService;
}());



/***/ }),

/***/ "./src/app/shared/animations.ts":
/*!**************************************!*\
  !*** ./src/app/shared/animations.ts ***!
  \**************************************/
/*! exports provided: SlideInOutAnimation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SlideInOutAnimation", function() { return SlideInOutAnimation; });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");

var SlideInOutAnimation = [
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('slideInOut', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('in', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
            'max-height': '500px', 'opacity': '1', 'visibility': 'visible'
        })),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
            'max-height': '0px', 'opacity': '0', 'visibility': 'hidden'
        })),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('in => out', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["group"])([
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('400ms ease-in-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
                    'opacity': '0'
                })),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('600ms ease-in-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
                    'max-height': '0px'
                })),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('700ms ease-in-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
                    'visibility': 'hidden'
                }))
            ])]),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('out => in', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["group"])([
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('1ms ease-in-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
                    'visibility': 'visible'
                })),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('600ms ease-in-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
                    'max-height': '500px'
                })),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('800ms ease-in-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
                    'opacity': '1'
                }))
            ])])
    ]),
];


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Volumes/Work/salonhome/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es5.js.map