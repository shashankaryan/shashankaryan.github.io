// ===================================================================================================

/*!
 * Bootstrap v3.3.5 (http://getbootstrap.com)
 * Copyright 2011-2015 Twitter, Inc.
 * Licensed under the MIT license
 */
if("undefined"==typeof jQuery)throw new Error("Bootstrap's JavaScript requires jQuery");+function(a){"use strict";var b=a.fn.jquery.split(" ")[0].split(".");if(b[0]<2&&b[1]<9||1==b[0]&&9==b[1]&&b[2]<1)throw new Error("Bootstrap's JavaScript requires jQuery version 1.9.1 or higher")}(jQuery),+function(a){"use strict";function b(){var a=document.createElement("bootstrap"),b={WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd otransitionend",transition:"transitionend"};for(var c in b)if(void 0!==a.style[c])return{end:b[c]};return!1}a.fn.emulateTransitionEnd=function(b){var c=!1,d=this;a(this).one("bsTransitionEnd",function(){c=!0});var e=function(){c||a(d).trigger(a.support.transition.end)};return setTimeout(e,b),this},a(function(){a.support.transition=b(),a.support.transition&&(a.event.special.bsTransitionEnd={bindType:a.support.transition.end,delegateType:a.support.transition.end,handle:function(b){return a(b.target).is(this)?b.handleObj.handler.apply(this,arguments):void 0}})})}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var c=a(this),e=c.data("bs.alert");e||c.data("bs.alert",e=new d(this)),"string"==typeof b&&e[b].call(c)})}var c='[data-dismiss="alert"]',d=function(b){a(b).on("click",c,this.close)};d.VERSION="3.3.5",d.TRANSITION_DURATION=150,d.prototype.close=function(b){function c(){g.detach().trigger("closed.bs.alert").remove()}var e=a(this),f=e.attr("data-target");f||(f=e.attr("href"),f=f&&f.replace(/.*(?=#[^\s]*$)/,""));var g=a(f);b&&b.preventDefault(),g.length||(g=e.closest(".alert")),g.trigger(b=a.Event("close.bs.alert")),b.isDefaultPrevented()||(g.removeClass("in"),a.support.transition&&g.hasClass("fade")?g.one("bsTransitionEnd",c).emulateTransitionEnd(d.TRANSITION_DURATION):c())};var e=a.fn.alert;a.fn.alert=b,a.fn.alert.Constructor=d,a.fn.alert.noConflict=function(){return a.fn.alert=e,this},a(document).on("click.bs.alert.data-api",c,d.prototype.close)}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.button"),f="object"==typeof b&&b;e||d.data("bs.button",e=new c(this,f)),"toggle"==b?e.toggle():b&&e.setState(b)})}var c=function(b,d){this.$element=a(b),this.options=a.extend({},c.DEFAULTS,d),this.isLoading=!1};c.VERSION="3.3.5",c.DEFAULTS={loadingText:"loading..."},c.prototype.setState=function(b){var c="disabled",d=this.$element,e=d.is("input")?"val":"html",f=d.data();b+="Text",null==f.resetText&&d.data("resetText",d[e]()),setTimeout(a.proxy(function(){d[e](null==f[b]?this.options[b]:f[b]),"loadingText"==b?(this.isLoading=!0,d.addClass(c).attr(c,c)):this.isLoading&&(this.isLoading=!1,d.removeClass(c).removeAttr(c))},this),0)},c.prototype.toggle=function(){var a=!0,b=this.$element.closest('[data-toggle="buttons"]');if(b.length){var c=this.$element.find("input");"radio"==c.prop("type")?(c.prop("checked")&&(a=!1),b.find(".active").removeClass("active"),this.$element.addClass("active")):"checkbox"==c.prop("type")&&(c.prop("checked")!==this.$element.hasClass("active")&&(a=!1),this.$element.toggleClass("active")),c.prop("checked",this.$element.hasClass("active")),a&&c.trigger("change")}else this.$element.attr("aria-pressed",!this.$element.hasClass("active")),this.$element.toggleClass("active")};var d=a.fn.button;a.fn.button=b,a.fn.button.Constructor=c,a.fn.button.noConflict=function(){return a.fn.button=d,this},a(document).on("click.bs.button.data-api",'[data-toggle^="button"]',function(c){var d=a(c.target);d.hasClass("btn")||(d=d.closest(".btn")),b.call(d,"toggle"),a(c.target).is('input[type="radio"]')||a(c.target).is('input[type="checkbox"]')||c.preventDefault()}).on("focus.bs.button.data-api blur.bs.button.data-api",'[data-toggle^="button"]',function(b){a(b.target).closest(".btn").toggleClass("focus",/^focus(in)?$/.test(b.type))})}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.carousel"),f=a.extend({},c.DEFAULTS,d.data(),"object"==typeof b&&b),g="string"==typeof b?b:f.slide;e||d.data("bs.carousel",e=new c(this,f)),"number"==typeof b?e.to(b):g?e[g]():f.interval&&e.pause().cycle()})}var c=function(b,c){this.$element=a(b),this.$indicators=this.$element.find(".carousel-indicators"),this.options=c,this.paused=null,this.sliding=null,this.interval=null,this.$active=null,this.$items=null,this.options.keyboard&&this.$element.on("keydown.bs.carousel",a.proxy(this.keydown,this)),"hover"==this.options.pause&&!("ontouchstart"in document.documentElement)&&this.$element.on("mouseenter.bs.carousel",a.proxy(this.pause,this)).on("mouseleave.bs.carousel",a.proxy(this.cycle,this))};c.VERSION="3.3.5",c.TRANSITION_DURATION=600,c.DEFAULTS={interval:5e3,pause:"hover",wrap:!0,keyboard:!0},c.prototype.keydown=function(a){if(!/input|textarea/i.test(a.target.tagName)){switch(a.which){case 37:this.prev();break;case 39:this.next();break;default:return}a.preventDefault()}},c.prototype.cycle=function(b){return b||(this.paused=!1),this.interval&&clearInterval(this.interval),this.options.interval&&!this.paused&&(this.interval=setInterval(a.proxy(this.next,this),this.options.interval)),this},c.prototype.getItemIndex=function(a){return this.$items=a.parent().children(".item"),this.$items.index(a||this.$active)},c.prototype.getItemForDirection=function(a,b){var c=this.getItemIndex(b),d="prev"==a&&0===c||"next"==a&&c==this.$items.length-1;if(d&&!this.options.wrap)return b;var e="prev"==a?-1:1,f=(c+e)%this.$items.length;return this.$items.eq(f)},c.prototype.to=function(a){var b=this,c=this.getItemIndex(this.$active=this.$element.find(".item.active"));return a>this.$items.length-1||0>a?void 0:this.sliding?this.$element.one("slid.bs.carousel",function(){b.to(a)}):c==a?this.pause().cycle():this.slide(a>c?"next":"prev",this.$items.eq(a))},c.prototype.pause=function(b){return b||(this.paused=!0),this.$element.find(".next, .prev").length&&a.support.transition&&(this.$element.trigger(a.support.transition.end),this.cycle(!0)),this.interval=clearInterval(this.interval),this},c.prototype.next=function(){return this.sliding?void 0:this.slide("next")},c.prototype.prev=function(){return this.sliding?void 0:this.slide("prev")},c.prototype.slide=function(b,d){var e=this.$element.find(".item.active"),f=d||this.getItemForDirection(b,e),g=this.interval,h="next"==b?"left":"right",i=this;if(f.hasClass("active"))return this.sliding=!1;var j=f[0],k=a.Event("slide.bs.carousel",{relatedTarget:j,direction:h});if(this.$element.trigger(k),!k.isDefaultPrevented()){if(this.sliding=!0,g&&this.pause(),this.$indicators.length){this.$indicators.find(".active").removeClass("active");var l=a(this.$indicators.children()[this.getItemIndex(f)]);l&&l.addClass("active")}var m=a.Event("slid.bs.carousel",{relatedTarget:j,direction:h});return a.support.transition&&this.$element.hasClass("slide")?(f.addClass(b),f[0].offsetWidth,e.addClass(h),f.addClass(h),e.one("bsTransitionEnd",function(){f.removeClass([b,h].join(" ")).addClass("active"),e.removeClass(["active",h].join(" ")),i.sliding=!1,setTimeout(function(){i.$element.trigger(m)},0)}).emulateTransitionEnd(c.TRANSITION_DURATION)):(e.removeClass("active"),f.addClass("active"),this.sliding=!1,this.$element.trigger(m)),g&&this.cycle(),this}};var d=a.fn.carousel;a.fn.carousel=b,a.fn.carousel.Constructor=c,a.fn.carousel.noConflict=function(){return a.fn.carousel=d,this};var e=function(c){var d,e=a(this),f=a(e.attr("data-target")||(d=e.attr("href"))&&d.replace(/.*(?=#[^\s]+$)/,""));if(f.hasClass("carousel")){var g=a.extend({},f.data(),e.data()),h=e.attr("data-slide-to");h&&(g.interval=!1),b.call(f,g),h&&f.data("bs.carousel").to(h),c.preventDefault()}};a(document).on("click.bs.carousel.data-api","[data-slide]",e).on("click.bs.carousel.data-api","[data-slide-to]",e),a(window).on("load",function(){a('[data-ride="carousel"]').each(function(){var c=a(this);b.call(c,c.data())})})}(jQuery),+function(a){"use strict";function b(b){var c,d=b.attr("data-target")||(c=b.attr("href"))&&c.replace(/.*(?=#[^\s]+$)/,"");return a(d)}function c(b){return this.each(function(){var c=a(this),e=c.data("bs.collapse"),f=a.extend({},d.DEFAULTS,c.data(),"object"==typeof b&&b);!e&&f.toggle&&/show|hide/.test(b)&&(f.toggle=!1),e||c.data("bs.collapse",e=new d(this,f)),"string"==typeof b&&e[b]()})}var d=function(b,c){this.$element=a(b),this.options=a.extend({},d.DEFAULTS,c),this.$trigger=a('[data-toggle="collapse"][href="#'+b.id+'"],[data-toggle="collapse"][data-target="#'+b.id+'"]'),this.transitioning=null,this.options.parent?this.$parent=this.getParent():this.addAriaAndCollapsedClass(this.$element,this.$trigger),this.options.toggle&&this.toggle()};d.VERSION="3.3.5",d.TRANSITION_DURATION=350,d.DEFAULTS={toggle:!0},d.prototype.dimension=function(){var a=this.$element.hasClass("width");return a?"width":"height"},d.prototype.show=function(){if(!this.transitioning&&!this.$element.hasClass("in")){var b,e=this.$parent&&this.$parent.children(".panel").children(".in, .collapsing");if(!(e&&e.length&&(b=e.data("bs.collapse"),b&&b.transitioning))){var f=a.Event("show.bs.collapse");if(this.$element.trigger(f),!f.isDefaultPrevented()){e&&e.length&&(c.call(e,"hide"),b||e.data("bs.collapse",null));var g=this.dimension();this.$element.removeClass("collapse").addClass("collapsing")[g](0).attr("aria-expanded",!0),this.$trigger.removeClass("collapsed").attr("aria-expanded",!0),this.transitioning=1;var h=function(){this.$element.removeClass("collapsing").addClass("collapse in")[g](""),this.transitioning=0,this.$element.trigger("shown.bs.collapse")};if(!a.support.transition)return h.call(this);var i=a.camelCase(["scroll",g].join("-"));this.$element.one("bsTransitionEnd",a.proxy(h,this)).emulateTransitionEnd(d.TRANSITION_DURATION)[g](this.$element[0][i])}}}},d.prototype.hide=function(){if(!this.transitioning&&this.$element.hasClass("in")){var b=a.Event("hide.bs.collapse");if(this.$element.trigger(b),!b.isDefaultPrevented()){var c=this.dimension();this.$element[c](this.$element[c]())[0].offsetHeight,this.$element.addClass("collapsing").removeClass("collapse in").attr("aria-expanded",!1),this.$trigger.addClass("collapsed").attr("aria-expanded",!1),this.transitioning=1;var e=function(){this.transitioning=0,this.$element.removeClass("collapsing").addClass("collapse").trigger("hidden.bs.collapse")};return a.support.transition?void this.$element[c](0).one("bsTransitionEnd",a.proxy(e,this)).emulateTransitionEnd(d.TRANSITION_DURATION):e.call(this)}}},d.prototype.toggle=function(){this[this.$element.hasClass("in")?"hide":"show"]()},d.prototype.getParent=function(){return a(this.options.parent).find('[data-toggle="collapse"][data-parent="'+this.options.parent+'"]').each(a.proxy(function(c,d){var e=a(d);this.addAriaAndCollapsedClass(b(e),e)},this)).end()},d.prototype.addAriaAndCollapsedClass=function(a,b){var c=a.hasClass("in");a.attr("aria-expanded",c),b.toggleClass("collapsed",!c).attr("aria-expanded",c)};var e=a.fn.collapse;a.fn.collapse=c,a.fn.collapse.Constructor=d,a.fn.collapse.noConflict=function(){return a.fn.collapse=e,this},a(document).on("click.bs.collapse.data-api",'[data-toggle="collapse"]',function(d){var e=a(this);e.attr("data-target")||d.preventDefault();var f=b(e),g=f.data("bs.collapse"),h=g?"toggle":e.data();c.call(f,h)})}(jQuery),+function(a){"use strict";function b(b){var c=b.attr("data-target");c||(c=b.attr("href"),c=c&&/#[A-Za-z]/.test(c)&&c.replace(/.*(?=#[^\s]*$)/,""));var d=c&&a(c);return d&&d.length?d:b.parent()}function c(c){c&&3===c.which||(a(e).remove(),a(f).each(function(){var d=a(this),e=b(d),f={relatedTarget:this};e.hasClass("open")&&(c&&"click"==c.type&&/input|textarea/i.test(c.target.tagName)&&a.contains(e[0],c.target)||(e.trigger(c=a.Event("hide.bs.dropdown",f)),c.isDefaultPrevented()||(d.attr("aria-expanded","false"),e.removeClass("open").trigger("hidden.bs.dropdown",f))))}))}function d(b){return this.each(function(){var c=a(this),d=c.data("bs.dropdown");d||c.data("bs.dropdown",d=new g(this)),"string"==typeof b&&d[b].call(c)})}var e=".dropdown-backdrop",f='[data-toggle="dropdown"]',g=function(b){a(b).on("click.bs.dropdown",this.toggle)};g.VERSION="3.3.5",g.prototype.toggle=function(d){var e=a(this);if(!e.is(".disabled, :disabled")){var f=b(e),g=f.hasClass("open");if(c(),!g){"ontouchstart"in document.documentElement&&!f.closest(".navbar-nav").length&&a(document.createElement("div")).addClass("dropdown-backdrop").insertAfter(a(this)).on("click",c);var h={relatedTarget:this};if(f.trigger(d=a.Event("show.bs.dropdown",h)),d.isDefaultPrevented())return;e.trigger("focus").attr("aria-expanded","true"),f.toggleClass("open").trigger("shown.bs.dropdown",h)}return!1}},g.prototype.keydown=function(c){if(/(38|40|27|32)/.test(c.which)&&!/input|textarea/i.test(c.target.tagName)){var d=a(this);if(c.preventDefault(),c.stopPropagation(),!d.is(".disabled, :disabled")){var e=b(d),g=e.hasClass("open");if(!g&&27!=c.which||g&&27==c.which)return 27==c.which&&e.find(f).trigger("focus"),d.trigger("click");var h=" li:not(.disabled):visible a",i=e.find(".dropdown-menu"+h);if(i.length){var j=i.index(c.target);38==c.which&&j>0&&j--,40==c.which&&j<i.length-1&&j++,~j||(j=0),i.eq(j).trigger("focus")}}}};var h=a.fn.dropdown;a.fn.dropdown=d,a.fn.dropdown.Constructor=g,a.fn.dropdown.noConflict=function(){return a.fn.dropdown=h,this},a(document).on("click.bs.dropdown.data-api",c).on("click.bs.dropdown.data-api",".dropdown form",function(a){a.stopPropagation()}).on("click.bs.dropdown.data-api",f,g.prototype.toggle).on("keydown.bs.dropdown.data-api",f,g.prototype.keydown).on("keydown.bs.dropdown.data-api",".dropdown-menu",g.prototype.keydown)}(jQuery),+function(a){"use strict";function b(b,d){return this.each(function(){var e=a(this),f=e.data("bs.modal"),g=a.extend({},c.DEFAULTS,e.data(),"object"==typeof b&&b);f||e.data("bs.modal",f=new c(this,g)),"string"==typeof b?f[b](d):g.show&&f.show(d)})}var c=function(b,c){this.options=c,this.$body=a(document.body),this.$element=a(b),this.$dialog=this.$element.find(".modal-dialog"),this.$backdrop=null,this.isShown=null,this.originalBodyPad=null,this.scrollbarWidth=0,this.ignoreBackdropClick=!1,this.options.remote&&this.$element.find(".modal-content").load(this.options.remote,a.proxy(function(){this.$element.trigger("loaded.bs.modal")},this))};c.VERSION="3.3.5",c.TRANSITION_DURATION=300,c.BACKDROP_TRANSITION_DURATION=150,c.DEFAULTS={backdrop:!0,keyboard:!0,show:!0},c.prototype.toggle=function(a){return this.isShown?this.hide():this.show(a)},c.prototype.show=function(b){var d=this,e=a.Event("show.bs.modal",{relatedTarget:b});this.$element.trigger(e),this.isShown||e.isDefaultPrevented()||(this.isShown=!0,this.checkScrollbar(),this.setScrollbar(),this.$body.addClass("modal-open"),this.escape(),this.resize(),this.$element.on("click.dismiss.bs.modal",'[data-dismiss="modal"]',a.proxy(this.hide,this)),this.$dialog.on("mousedown.dismiss.bs.modal",function(){d.$element.one("mouseup.dismiss.bs.modal",function(b){a(b.target).is(d.$element)&&(d.ignoreBackdropClick=!0)})}),this.backdrop(function(){var e=a.support.transition&&d.$element.hasClass("fade");d.$element.parent().length||d.$element.appendTo(d.$body),d.$element.show().scrollTop(0),d.adjustDialog(),e&&d.$element[0].offsetWidth,d.$element.addClass("in"),d.enforceFocus();var f=a.Event("shown.bs.modal",{relatedTarget:b});e?d.$dialog.one("bsTransitionEnd",function(){d.$element.trigger("focus").trigger(f)}).emulateTransitionEnd(c.TRANSITION_DURATION):d.$element.trigger("focus").trigger(f)}))},c.prototype.hide=function(b){b&&b.preventDefault(),b=a.Event("hide.bs.modal"),this.$element.trigger(b),this.isShown&&!b.isDefaultPrevented()&&(this.isShown=!1,this.escape(),this.resize(),a(document).off("focusin.bs.modal"),this.$element.removeClass("in").off("click.dismiss.bs.modal").off("mouseup.dismiss.bs.modal"),this.$dialog.off("mousedown.dismiss.bs.modal"),a.support.transition&&this.$element.hasClass("fade")?this.$element.one("bsTransitionEnd",a.proxy(this.hideModal,this)).emulateTransitionEnd(c.TRANSITION_DURATION):this.hideModal())},c.prototype.enforceFocus=function(){a(document).off("focusin.bs.modal").on("focusin.bs.modal",a.proxy(function(a){this.$element[0]===a.target||this.$element.has(a.target).length||this.$element.trigger("focus")},this))},c.prototype.escape=function(){this.isShown&&this.options.keyboard?this.$element.on("keydown.dismiss.bs.modal",a.proxy(function(a){27==a.which&&this.hide()},this)):this.isShown||this.$element.off("keydown.dismiss.bs.modal")},c.prototype.resize=function(){this.isShown?a(window).on("resize.bs.modal",a.proxy(this.handleUpdate,this)):a(window).off("resize.bs.modal")},c.prototype.hideModal=function(){var a=this;this.$element.hide(),this.backdrop(function(){a.$body.removeClass("modal-open"),a.resetAdjustments(),a.resetScrollbar(),a.$element.trigger("hidden.bs.modal")})},c.prototype.removeBackdrop=function(){this.$backdrop&&this.$backdrop.remove(),this.$backdrop=null},c.prototype.backdrop=function(b){var d=this,e=this.$element.hasClass("fade")?"fade":"";if(this.isShown&&this.options.backdrop){var f=a.support.transition&&e;if(this.$backdrop=a(document.createElement("div")).addClass("modal-backdrop "+e).appendTo(this.$body),this.$element.on("click.dismiss.bs.modal",a.proxy(function(a){return this.ignoreBackdropClick?void(this.ignoreBackdropClick=!1):void(a.target===a.currentTarget&&("static"==this.options.backdrop?this.$element[0].focus():this.hide()))},this)),f&&this.$backdrop[0].offsetWidth,this.$backdrop.addClass("in"),!b)return;f?this.$backdrop.one("bsTransitionEnd",b).emulateTransitionEnd(c.BACKDROP_TRANSITION_DURATION):b()}else if(!this.isShown&&this.$backdrop){this.$backdrop.removeClass("in");var g=function(){d.removeBackdrop(),b&&b()};a.support.transition&&this.$element.hasClass("fade")?this.$backdrop.one("bsTransitionEnd",g).emulateTransitionEnd(c.BACKDROP_TRANSITION_DURATION):g()}else b&&b()},c.prototype.handleUpdate=function(){this.adjustDialog()},c.prototype.adjustDialog=function(){var a=this.$element[0].scrollHeight>document.documentElement.clientHeight;this.$element.css({paddingLeft:!this.bodyIsOverflowing&&a?this.scrollbarWidth:"",paddingRight:this.bodyIsOverflowing&&!a?this.scrollbarWidth:""})},c.prototype.resetAdjustments=function(){this.$element.css({paddingLeft:"",paddingRight:""})},c.prototype.checkScrollbar=function(){var a=window.innerWidth;if(!a){var b=document.documentElement.getBoundingClientRect();a=b.right-Math.abs(b.left)}this.bodyIsOverflowing=document.body.clientWidth<a,this.scrollbarWidth=this.measureScrollbar()},c.prototype.setScrollbar=function(){var a=parseInt(this.$body.css("padding-right")||0,10);this.originalBodyPad=document.body.style.paddingRight||"",this.bodyIsOverflowing&&this.$body.css("padding-right",a+this.scrollbarWidth)},c.prototype.resetScrollbar=function(){this.$body.css("padding-right",this.originalBodyPad)},c.prototype.measureScrollbar=function(){var a=document.createElement("div");a.className="modal-scrollbar-measure",this.$body.append(a);var b=a.offsetWidth-a.clientWidth;return this.$body[0].removeChild(a),b};var d=a.fn.modal;a.fn.modal=b,a.fn.modal.Constructor=c,a.fn.modal.noConflict=function(){return a.fn.modal=d,this},a(document).on("click.bs.modal.data-api",'[data-toggle="modal"]',function(c){var d=a(this),e=d.attr("href"),f=a(d.attr("data-target")||e&&e.replace(/.*(?=#[^\s]+$)/,"")),g=f.data("bs.modal")?"toggle":a.extend({remote:!/#/.test(e)&&e},f.data(),d.data());d.is("a")&&c.preventDefault(),f.one("show.bs.modal",function(a){a.isDefaultPrevented()||f.one("hidden.bs.modal",function(){d.is(":visible")&&d.trigger("focus")})}),b.call(f,g,this)})}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.tooltip"),f="object"==typeof b&&b;(e||!/destroy|hide/.test(b))&&(e||d.data("bs.tooltip",e=new c(this,f)),"string"==typeof b&&e[b]())})}var c=function(a,b){this.type=null,this.options=null,this.enabled=null,this.timeout=null,this.hoverState=null,this.$element=null,this.inState=null,this.init("tooltip",a,b)};c.VERSION="3.3.5",c.TRANSITION_DURATION=150,c.DEFAULTS={animation:!0,placement:"top",selector:!1,template:'<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',trigger:"hover focus",title:"",delay:0,html:!1,container:!1,viewport:{selector:"body",padding:0}},c.prototype.init=function(b,c,d){if(this.enabled=!0,this.type=b,this.$element=a(c),this.options=this.getOptions(d),this.$viewport=this.options.viewport&&a(a.isFunction(this.options.viewport)?this.options.viewport.call(this,this.$element):this.options.viewport.selector||this.options.viewport),this.inState={click:!1,hover:!1,focus:!1},this.$element[0]instanceof document.constructor&&!this.options.selector)throw new Error("`selector` option must be specified when initializing "+this.type+" on the window.document object!");for(var e=this.options.trigger.split(" "),f=e.length;f--;){var g=e[f];if("click"==g)this.$element.on("click."+this.type,this.options.selector,a.proxy(this.toggle,this));else if("manual"!=g){var h="hover"==g?"mouseenter":"focusin",i="hover"==g?"mouseleave":"focusout";this.$element.on(h+"."+this.type,this.options.selector,a.proxy(this.enter,this)),this.$element.on(i+"."+this.type,this.options.selector,a.proxy(this.leave,this))}}this.options.selector?this._options=a.extend({},this.options,{trigger:"manual",selector:""}):this.fixTitle()},c.prototype.getDefaults=function(){return c.DEFAULTS},c.prototype.getOptions=function(b){return b=a.extend({},this.getDefaults(),this.$element.data(),b),b.delay&&"number"==typeof b.delay&&(b.delay={show:b.delay,hide:b.delay}),b},c.prototype.getDelegateOptions=function(){var b={},c=this.getDefaults();return this._options&&a.each(this._options,function(a,d){c[a]!=d&&(b[a]=d)}),b},c.prototype.enter=function(b){var c=b instanceof this.constructor?b:a(b.currentTarget).data("bs."+this.type);return c||(c=new this.constructor(b.currentTarget,this.getDelegateOptions()),a(b.currentTarget).data("bs."+this.type,c)),b instanceof a.Event&&(c.inState["focusin"==b.type?"focus":"hover"]=!0),c.tip().hasClass("in")||"in"==c.hoverState?void(c.hoverState="in"):(clearTimeout(c.timeout),c.hoverState="in",c.options.delay&&c.options.delay.show?void(c.timeout=setTimeout(function(){"in"==c.hoverState&&c.show()},c.options.delay.show)):c.show())},c.prototype.isInStateTrue=function(){for(var a in this.inState)if(this.inState[a])return!0;return!1},c.prototype.leave=function(b){var c=b instanceof this.constructor?b:a(b.currentTarget).data("bs."+this.type);return c||(c=new this.constructor(b.currentTarget,this.getDelegateOptions()),a(b.currentTarget).data("bs."+this.type,c)),b instanceof a.Event&&(c.inState["focusout"==b.type?"focus":"hover"]=!1),c.isInStateTrue()?void 0:(clearTimeout(c.timeout),c.hoverState="out",c.options.delay&&c.options.delay.hide?void(c.timeout=setTimeout(function(){"out"==c.hoverState&&c.hide()},c.options.delay.hide)):c.hide())},c.prototype.show=function(){var b=a.Event("show.bs."+this.type);if(this.hasContent()&&this.enabled){this.$element.trigger(b);var d=a.contains(this.$element[0].ownerDocument.documentElement,this.$element[0]);if(b.isDefaultPrevented()||!d)return;var e=this,f=this.tip(),g=this.getUID(this.type);this.setContent(),f.attr("id",g),this.$element.attr("aria-describedby",g),this.options.animation&&f.addClass("fade");var h="function"==typeof this.options.placement?this.options.placement.call(this,f[0],this.$element[0]):this.options.placement,i=/\s?auto?\s?/i,j=i.test(h);j&&(h=h.replace(i,"")||"top"),f.detach().css({top:0,left:0,display:"block"}).addClass(h).data("bs."+this.type,this),this.options.container?f.appendTo(this.options.container):f.insertAfter(this.$element),this.$element.trigger("inserted.bs."+this.type);var k=this.getPosition(),l=f[0].offsetWidth,m=f[0].offsetHeight;if(j){var n=h,o=this.getPosition(this.$viewport);h="bottom"==h&&k.bottom+m>o.bottom?"top":"top"==h&&k.top-m<o.top?"bottom":"right"==h&&k.right+l>o.width?"left":"left"==h&&k.left-l<o.left?"right":h,f.removeClass(n).addClass(h)}var p=this.getCalculatedOffset(h,k,l,m);this.applyPlacement(p,h);var q=function(){var a=e.hoverState;e.$element.trigger("shown.bs."+e.type),e.hoverState=null,"out"==a&&e.leave(e)};a.support.transition&&this.$tip.hasClass("fade")?f.one("bsTransitionEnd",q).emulateTransitionEnd(c.TRANSITION_DURATION):q()}},c.prototype.applyPlacement=function(b,c){var d=this.tip(),e=d[0].offsetWidth,f=d[0].offsetHeight,g=parseInt(d.css("margin-top"),10),h=parseInt(d.css("margin-left"),10);isNaN(g)&&(g=0),isNaN(h)&&(h=0),b.top+=g,b.left+=h,a.offset.setOffset(d[0],a.extend({using:function(a){d.css({top:Math.round(a.top),left:Math.round(a.left)})}},b),0),d.addClass("in");var i=d[0].offsetWidth,j=d[0].offsetHeight;"top"==c&&j!=f&&(b.top=b.top+f-j);var k=this.getViewportAdjustedDelta(c,b,i,j);k.left?b.left+=k.left:b.top+=k.top;var l=/top|bottom/.test(c),m=l?2*k.left-e+i:2*k.top-f+j,n=l?"offsetWidth":"offsetHeight";d.offset(b),this.replaceArrow(m,d[0][n],l)},c.prototype.replaceArrow=function(a,b,c){this.arrow().css(c?"left":"top",50*(1-a/b)+"%").css(c?"top":"left","")},c.prototype.setContent=function(){var a=this.tip(),b=this.getTitle();a.find(".tooltip-inner")[this.options.html?"html":"text"](b),a.removeClass("fade in top bottom left right")},c.prototype.hide=function(b){function d(){"in"!=e.hoverState&&f.detach(),e.$element.removeAttr("aria-describedby").trigger("hidden.bs."+e.type),b&&b()}var e=this,f=a(this.$tip),g=a.Event("hide.bs."+this.type);return this.$element.trigger(g),g.isDefaultPrevented()?void 0:(f.removeClass("in"),a.support.transition&&f.hasClass("fade")?f.one("bsTransitionEnd",d).emulateTransitionEnd(c.TRANSITION_DURATION):d(),this.hoverState=null,this)},c.prototype.fixTitle=function(){var a=this.$element;(a.attr("title")||"string"!=typeof a.attr("data-original-title"))&&a.attr("data-original-title",a.attr("title")||"").attr("title","")},c.prototype.hasContent=function(){return this.getTitle()},c.prototype.getPosition=function(b){b=b||this.$element;var c=b[0],d="BODY"==c.tagName,e=c.getBoundingClientRect();null==e.width&&(e=a.extend({},e,{width:e.right-e.left,height:e.bottom-e.top}));var f=d?{top:0,left:0}:b.offset(),g={scroll:d?document.documentElement.scrollTop||document.body.scrollTop:b.scrollTop()},h=d?{width:a(window).width(),height:a(window).height()}:null;return a.extend({},e,g,h,f)},c.prototype.getCalculatedOffset=function(a,b,c,d){return"bottom"==a?{top:b.top+b.height,left:b.left+b.width/2-c/2}:"top"==a?{top:b.top-d,left:b.left+b.width/2-c/2}:"left"==a?{top:b.top+b.height/2-d/2,left:b.left-c}:{top:b.top+b.height/2-d/2,left:b.left+b.width}},c.prototype.getViewportAdjustedDelta=function(a,b,c,d){var e={top:0,left:0};if(!this.$viewport)return e;var f=this.options.viewport&&this.options.viewport.padding||0,g=this.getPosition(this.$viewport);if(/right|left/.test(a)){var h=b.top-f-g.scroll,i=b.top+f-g.scroll+d;h<g.top?e.top=g.top-h:i>g.top+g.height&&(e.top=g.top+g.height-i)}else{var j=b.left-f,k=b.left+f+c;j<g.left?e.left=g.left-j:k>g.right&&(e.left=g.left+g.width-k)}return e},c.prototype.getTitle=function(){var a,b=this.$element,c=this.options;return a=b.attr("data-original-title")||("function"==typeof c.title?c.title.call(b[0]):c.title)},c.prototype.getUID=function(a){do a+=~~(1e6*Math.random());while(document.getElementById(a));return a},c.prototype.tip=function(){if(!this.$tip&&(this.$tip=a(this.options.template),1!=this.$tip.length))throw new Error(this.type+" `template` option must consist of exactly 1 top-level element!");return this.$tip},c.prototype.arrow=function(){return this.$arrow=this.$arrow||this.tip().find(".tooltip-arrow")},c.prototype.enable=function(){this.enabled=!0},c.prototype.disable=function(){this.enabled=!1},c.prototype.toggleEnabled=function(){this.enabled=!this.enabled},c.prototype.toggle=function(b){var c=this;b&&(c=a(b.currentTarget).data("bs."+this.type),c||(c=new this.constructor(b.currentTarget,this.getDelegateOptions()),a(b.currentTarget).data("bs."+this.type,c))),b?(c.inState.click=!c.inState.click,c.isInStateTrue()?c.enter(c):c.leave(c)):c.tip().hasClass("in")?c.leave(c):c.enter(c)},c.prototype.destroy=function(){var a=this;clearTimeout(this.timeout),this.hide(function(){a.$element.off("."+a.type).removeData("bs."+a.type),a.$tip&&a.$tip.detach(),a.$tip=null,a.$arrow=null,a.$viewport=null})};var d=a.fn.tooltip;a.fn.tooltip=b,a.fn.tooltip.Constructor=c,a.fn.tooltip.noConflict=function(){return a.fn.tooltip=d,this}}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.popover"),f="object"==typeof b&&b;(e||!/destroy|hide/.test(b))&&(e||d.data("bs.popover",e=new c(this,f)),"string"==typeof b&&e[b]())})}var c=function(a,b){this.init("popover",a,b)};if(!a.fn.tooltip)throw new Error("Popover requires tooltip.js");c.VERSION="3.3.5",c.DEFAULTS=a.extend({},a.fn.tooltip.Constructor.DEFAULTS,{placement:"right",trigger:"click",content:"",template:'<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'}),c.prototype=a.extend({},a.fn.tooltip.Constructor.prototype),c.prototype.constructor=c,c.prototype.getDefaults=function(){return c.DEFAULTS},c.prototype.setContent=function(){var a=this.tip(),b=this.getTitle(),c=this.getContent();a.find(".popover-title")[this.options.html?"html":"text"](b),a.find(".popover-content").children().detach().end()[this.options.html?"string"==typeof c?"html":"append":"text"](c),a.removeClass("fade top bottom left right in"),a.find(".popover-title").html()||a.find(".popover-title").hide()},c.prototype.hasContent=function(){return this.getTitle()||this.getContent()},c.prototype.getContent=function(){var a=this.$element,b=this.options;return a.attr("data-content")||("function"==typeof b.content?b.content.call(a[0]):b.content)},c.prototype.arrow=function(){return this.$arrow=this.$arrow||this.tip().find(".arrow")};var d=a.fn.popover;a.fn.popover=b,a.fn.popover.Constructor=c,a.fn.popover.noConflict=function(){return a.fn.popover=d,this}}(jQuery),+function(a){"use strict";function b(c,d){this.$body=a(document.body),this.$scrollElement=a(a(c).is(document.body)?window:c),this.options=a.extend({},b.DEFAULTS,d),this.selector=(this.options.target||"")+" .nav li > a",this.offsets=[],this.targets=[],this.activeTarget=null,this.scrollHeight=0,this.$scrollElement.on("scroll.bs.scrollspy",a.proxy(this.process,this)),this.refresh(),this.process()}function c(c){return this.each(function(){var d=a(this),e=d.data("bs.scrollspy"),f="object"==typeof c&&c;e||d.data("bs.scrollspy",e=new b(this,f)),"string"==typeof c&&e[c]()})}b.VERSION="3.3.5",b.DEFAULTS={offset:10},b.prototype.getScrollHeight=function(){return this.$scrollElement[0].scrollHeight||Math.max(this.$body[0].scrollHeight,document.documentElement.scrollHeight)},b.prototype.refresh=function(){var b=this,c="offset",d=0;this.offsets=[],this.targets=[],this.scrollHeight=this.getScrollHeight(),a.isWindow(this.$scrollElement[0])||(c="position",d=this.$scrollElement.scrollTop()),this.$body.find(this.selector).map(function(){var b=a(this),e=b.data("target")||b.attr("href"),f=/^#./.test(e)&&a(e);return f&&f.length&&f.is(":visible")&&[[f[c]().top+d,e]]||null}).sort(function(a,b){return a[0]-b[0]}).each(function(){b.offsets.push(this[0]),b.targets.push(this[1])})},b.prototype.process=function(){var a,b=this.$scrollElement.scrollTop()+this.options.offset,c=this.getScrollHeight(),d=this.options.offset+c-this.$scrollElement.height(),e=this.offsets,f=this.targets,g=this.activeTarget;if(this.scrollHeight!=c&&this.refresh(),b>=d)return g!=(a=f[f.length-1])&&this.activate(a);if(g&&b<e[0])return this.activeTarget=null,this.clear();for(a=e.length;a--;)g!=f[a]&&b>=e[a]&&(void 0===e[a+1]||b<e[a+1])&&this.activate(f[a])},b.prototype.activate=function(b){this.activeTarget=b,this.clear();var c=this.selector+'[data-target="'+b+'"],'+this.selector+'[href="'+b+'"]',d=a(c).parents("li").addClass("active");d.parent(".dropdown-menu").length&&(d=d.closest("li.dropdown").addClass("active")),
d.trigger("activate.bs.scrollspy")},b.prototype.clear=function(){a(this.selector).parentsUntil(this.options.target,".active").removeClass("active")};var d=a.fn.scrollspy;a.fn.scrollspy=c,a.fn.scrollspy.Constructor=b,a.fn.scrollspy.noConflict=function(){return a.fn.scrollspy=d,this},a(window).on("load.bs.scrollspy.data-api",function(){a('[data-spy="scroll"]').each(function(){var b=a(this);c.call(b,b.data())})})}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.tab");e||d.data("bs.tab",e=new c(this)),"string"==typeof b&&e[b]()})}var c=function(b){this.element=a(b)};c.VERSION="3.3.5",c.TRANSITION_DURATION=150,c.prototype.show=function(){var b=this.element,c=b.closest("ul:not(.dropdown-menu)"),d=b.data("target");if(d||(d=b.attr("href"),d=d&&d.replace(/.*(?=#[^\s]*$)/,"")),!b.parent("li").hasClass("active")){var e=c.find(".active:last a"),f=a.Event("hide.bs.tab",{relatedTarget:b[0]}),g=a.Event("show.bs.tab",{relatedTarget:e[0]});if(e.trigger(f),b.trigger(g),!g.isDefaultPrevented()&&!f.isDefaultPrevented()){var h=a(d);this.activate(b.closest("li"),c),this.activate(h,h.parent(),function(){e.trigger({type:"hidden.bs.tab",relatedTarget:b[0]}),b.trigger({type:"shown.bs.tab",relatedTarget:e[0]})})}}},c.prototype.activate=function(b,d,e){function f(){g.removeClass("active").find("> .dropdown-menu > .active").removeClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded",!1),b.addClass("active").find('[data-toggle="tab"]').attr("aria-expanded",!0),h?(b[0].offsetWidth,b.addClass("in")):b.removeClass("fade"),b.parent(".dropdown-menu").length&&b.closest("li.dropdown").addClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded",!0),e&&e()}var g=d.find("> .active"),h=e&&a.support.transition&&(g.length&&g.hasClass("fade")||!!d.find("> .fade").length);g.length&&h?g.one("bsTransitionEnd",f).emulateTransitionEnd(c.TRANSITION_DURATION):f(),g.removeClass("in")};var d=a.fn.tab;a.fn.tab=b,a.fn.tab.Constructor=c,a.fn.tab.noConflict=function(){return a.fn.tab=d,this};var e=function(c){c.preventDefault(),b.call(a(this),"show")};a(document).on("click.bs.tab.data-api",'[data-toggle="tab"]',e).on("click.bs.tab.data-api",'[data-toggle="pill"]',e)}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.affix"),f="object"==typeof b&&b;e||d.data("bs.affix",e=new c(this,f)),"string"==typeof b&&e[b]()})}var c=function(b,d){this.options=a.extend({},c.DEFAULTS,d),this.$target=a(this.options.target).on("scroll.bs.affix.data-api",a.proxy(this.checkPosition,this)).on("click.bs.affix.data-api",a.proxy(this.checkPositionWithEventLoop,this)),this.$element=a(b),this.affixed=null,this.unpin=null,this.pinnedOffset=null,this.checkPosition()};c.VERSION="3.3.5",c.RESET="affix affix-top affix-bottom",c.DEFAULTS={offset:0,target:window},c.prototype.getState=function(a,b,c,d){var e=this.$target.scrollTop(),f=this.$element.offset(),g=this.$target.height();if(null!=c&&"top"==this.affixed)return c>e?"top":!1;if("bottom"==this.affixed)return null!=c?e+this.unpin<=f.top?!1:"bottom":a-d>=e+g?!1:"bottom";var h=null==this.affixed,i=h?e:f.top,j=h?g:b;return null!=c&&c>=e?"top":null!=d&&i+j>=a-d?"bottom":!1},c.prototype.getPinnedOffset=function(){if(this.pinnedOffset)return this.pinnedOffset;this.$element.removeClass(c.RESET).addClass("affix");var a=this.$target.scrollTop(),b=this.$element.offset();return this.pinnedOffset=b.top-a},c.prototype.checkPositionWithEventLoop=function(){setTimeout(a.proxy(this.checkPosition,this),1)},c.prototype.checkPosition=function(){if(this.$element.is(":visible")){var b=this.$element.height(),d=this.options.offset,e=d.top,f=d.bottom,g=Math.max(a(document).height(),a(document.body).height());"object"!=typeof d&&(f=e=d),"function"==typeof e&&(e=d.top(this.$element)),"function"==typeof f&&(f=d.bottom(this.$element));var h=this.getState(g,b,e,f);if(this.affixed!=h){null!=this.unpin&&this.$element.css("top","");var i="affix"+(h?"-"+h:""),j=a.Event(i+".bs.affix");if(this.$element.trigger(j),j.isDefaultPrevented())return;this.affixed=h,this.unpin="bottom"==h?this.getPinnedOffset():null,this.$element.removeClass(c.RESET).addClass(i).trigger(i.replace("affix","affixed")+".bs.affix")}"bottom"==h&&this.$element.offset({top:g-b-f})}};var d=a.fn.affix;a.fn.affix=b,a.fn.affix.Constructor=c,a.fn.affix.noConflict=function(){return a.fn.affix=d,this},a(window).on("load",function(){a('[data-spy="affix"]').each(function(){var c=a(this),d=c.data();d.offset=d.offset||{},null!=d.offsetBottom&&(d.offset.bottom=d.offsetBottom),null!=d.offsetTop&&(d.offset.top=d.offsetTop),b.call(c,d)})})}(jQuery);


/* Copyright (C) 2013 Justin Windle, http://soulwire.co.uk */

(function ( root, factory ) {

  if ( typeof exports === 'object' ) {

    // CommonJS like
    module.exports = factory(root, root.document);

  } else if ( typeof define === 'function' && define.amd ) {

    // AMD
    define( function() { return factory( root, root.document ); });

  } else {

    // Browser global
    root.Sketch = factory( root, root.document );
  }

}( typeof window !== "undefined" ? window : this, function ( window, document ) {


  "use strict";

  /*
  ----------------------------------------------------------------------

    Config

  ----------------------------------------------------------------------
  */

  var MATH_PROPS = 'E LN10 LN2 LOG2E LOG10E PI SQRT1_2 SQRT2 abs acos asin atan ceil cos exp floor log round sin sqrt tan atan2 pow max min'.split( ' ' );
  var HAS_SKETCH = '__hasSketch';
  var M = Math;

  var CANVAS = 'canvas';
  var WEBGL = 'webgl';
  var DOM = 'dom';

  var doc = document;
  var win = window;

  var instances = [];

  var defaults = {

    fullscreen: true,
    autostart: true,
    autoclear: true,
    autopause: true,
    container: doc.body,
    interval: 1,
    globals: true,
    retina: false,
    type: CANVAS
  };

  var keyMap = {

     8: 'BACKSPACE',
     9: 'TAB',
    13: 'ENTER',
    16: 'SHIFT',
    27: 'ESCAPE',
    32: 'SPACE',
    37: 'LEFT',
    38: 'UP',
    39: 'RIGHT',
    40: 'DOWN'
  };

  /*
  ----------------------------------------------------------------------

    Utilities

  ----------------------------------------------------------------------
  */

  function isArray( object ) {

    return Object.prototype.toString.call( object ) == '[object Array]';
  }

  function isFunction( object ) {

    return typeof object == 'function';
  }

  function isNumber( object ) {

    return typeof object == 'number';
  }

  function isString( object ) {

    return typeof object == 'string';
  }

  function keyName( code ) {

    return keyMap[ code ] || String.fromCharCode( code );
  }

  function extend( target, source, overwrite ) {

    for ( var key in source )

      if ( overwrite || !( key in target ) )

        target[ key ] = source[ key ];

    return target;
  }

  function proxy( method, context ) {

    return function() {

      method.apply( context, arguments );
    };
  }

  function clone( target ) {

    var object = {};

    for ( var key in target ) {

      if ( key === 'webkitMovementX' || key === 'webkitMovementY' )
        continue;

      if ( isFunction( target[ key ] ) )

        object[ key ] = proxy( target[ key ], target );

      else

        object[ key ] = target[ key ];
    }

    return object;
  }

  /*
  ----------------------------------------------------------------------

    Constructor

  ----------------------------------------------------------------------
  */

  function constructor( context ) {

    var request, handler, target, parent, bounds, index, suffix, clock, node, copy, type, key, val, min, max, w, h;

    var counter = 0;
    var touches = [];
    var resized = false;
    var setup = false;
    var ratio = win.devicePixelRatio || 1;
    var isDiv = context.type == DOM;
    var is2D = context.type == CANVAS;

    var mouse = {
      x:  0.0, y:  0.0,
      ox: 0.0, oy: 0.0,
      dx: 0.0, dy: 0.0
    };

    var eventMap = [

      context.eventTarget || context.element,

        pointer, 'mousedown', 'touchstart',
        pointer, 'mousemove', 'touchmove',
        pointer, 'mouseup', 'touchend',
        pointer, 'click',
        pointer, 'mouseout',
        pointer, 'mouseover',

      doc,

        keypress, 'keydown', 'keyup',

      win,

        active, 'focus', 'blur',
        resize, 'resize'
    ];

    var keys = {}; for ( key in keyMap ) keys[ keyMap[ key ] ] = false;

    function trigger( method ) {

      if ( isFunction( method ) )

        method.apply( context, [].splice.call( arguments, 1 ) );
    }

    function bind( on ) {

      for ( index = 0; index < eventMap.length; index++ ) {

        node = eventMap[ index ];

        if ( isString( node ) )

          target[ ( on ? 'add' : 'remove' ) + 'EventListener' ].call( target, node, handler, false );

        else if ( isFunction( node ) )

          handler = node;

        else target = node;
      }
    }

    function update() {

      cAF( request );
      request = rAF( update );

      if ( !setup ) {

        trigger( context.setup );
        setup = isFunction( context.setup );
      }

      if ( !resized ) {
        trigger( context.resize );
        resized = isFunction( context.resize );
      }

      if ( context.running && !counter ) {

        context.dt = ( clock = +new Date() ) - context.now;
        context.millis += context.dt;
        context.now = clock;

        trigger( context.update );

        // Pre draw

        if ( is2D ) {

          if ( context.retina ) {

            context.save();

            if (context.autoclear) {
              context.scale( ratio, ratio );
            }
          }

          if ( context.autoclear )

            context.clear();
        }

        // Draw

        trigger( context.draw );

        // Post draw

        if ( is2D && context.retina )

          context.restore();
      }

      counter = ++counter % context.interval;
    }

    function resize() {

      target = isDiv ? context.style : context.canvas;
      suffix = isDiv ? 'px' : '';

      w = context.width;
      h = context.height;

      if ( context.fullscreen ) {

        h = context.height = win.innerHeight;
        w = context.width = win.innerWidth;
      }

      if ( context.retina && is2D && ratio ) {

        target.style.height = h + 'px';
        target.style.width = w + 'px';

        w *= ratio;
        h *= ratio;
      }

      if ( target.height !== h )

        target.height = h + suffix;

      if ( target.width !== w )

        target.width = w + suffix;

      if ( is2D && !context.autoclear && context.retina )

        context.scale( ratio, ratio );

      if ( setup ) trigger( context.resize );
    }

    function align( touch, target ) {

      bounds = target.getBoundingClientRect();

      touch.x = touch.pageX - bounds.left - (win.scrollX || win.pageXOffset);
      touch.y = touch.pageY - bounds.top - (win.scrollY || win.pageYOffset);

      return touch;
    }

    function augment( touch, target ) {

      align( touch, context.element );

      target = target || {};

      target.ox = target.x || touch.x;
      target.oy = target.y || touch.y;

      target.x = touch.x;
      target.y = touch.y;

      target.dx = target.x - target.ox;
      target.dy = target.y - target.oy;

      return target;
    }

    function process( event ) {

      event.preventDefault();

      copy = clone( event );
      copy.originalEvent = event;

      if ( copy.touches ) {

        touches.length = copy.touches.length;

        for ( index = 0; index < copy.touches.length; index++ )

          touches[ index ] = augment( copy.touches[ index ], touches[ index ] );

      } else {

        touches.length = 0;
        touches[0] = augment( copy, mouse );
      }

      extend( mouse, touches[0], true );

      return copy;
    }

    function pointer( event ) {

      event = process( event );

      min = ( max = eventMap.indexOf( type = event.type ) ) - 1;

      context.dragging =

        /down|start/.test( type ) ? true :

        /up|end/.test( type ) ? false :

        context.dragging;

      while( min )

        isString( eventMap[ min ] ) ?

          trigger( context[ eventMap[ min-- ] ], event ) :

        isString( eventMap[ max ] ) ?

          trigger( context[ eventMap[ max++ ] ], event ) :

        min = 0;
    }

    function keypress( event ) {

      key = event.keyCode;
      val = event.type == 'keyup';
      keys[ key ] = keys[ keyName( key ) ] = !val;

      trigger( context[ event.type ], event );
    }

    function active( event ) {

      if ( context.autopause )

        ( event.type == 'blur' ? stop : start )();

      trigger( context[ event.type ], event );
    }

    // Public API

    function start() {

      context.now = +new Date();
      context.running = true;
    }

    function stop() {

      context.running = false;
    }

    function toggle() {

      ( context.running ? stop : start )();
    }

    function clear() {

      if ( is2D )

        context.clearRect( 0, 0, context.width * ratio, context.height * ratio );
    }

    function destroy() {

      parent = context.element.parentNode;
      index = instances.indexOf( context );

      if ( parent ) parent.removeChild( context.element );
      if ( ~index ) instances.splice( index, 1 );

      bind( false );
      stop();
    }

    extend( context, {

      touches: touches,
      mouse: mouse,
      keys: keys,

      dragging: false,
      running: false,
      millis: 0,
      now: NaN,
      dt: NaN,

      destroy: destroy,
      toggle: toggle,
      clear: clear,
      start: start,
      stop: stop
    });

    instances.push( context );

    return ( context.autostart && start(), bind( true ), resize(), update(), context );
  }

  /*
  ----------------------------------------------------------------------

    Global API

  ----------------------------------------------------------------------
  */

  var element, context, Sketch = {

    CANVAS: CANVAS,
    WEB_GL: WEBGL,
    WEBGL: WEBGL,
    DOM: DOM,

    instances: instances,

    install: function( context ) {

      if ( !context[ HAS_SKETCH ] ) {

        for ( var i = 0; i < MATH_PROPS.length; i++ )

          context[ MATH_PROPS[i] ] = M[ MATH_PROPS[i] ];

        extend( context, {

          TWO_PI: M.PI * 2,
          HALF_PI: M.PI / 2,
          QUARTER_PI: M.PI / 4,

          random: function( min, max ) {

            if ( isArray( min ) )

              return min[ ~~( M.random() * min.length ) ];

            if ( !isNumber( max ) )

              max = min || 1, min = 0;

            return min + M.random() * ( max - min );
          },

          lerp: function( min, max, amount ) {

            return min + amount * ( max - min );
          },

          map: function( num, minA, maxA, minB, maxB ) {

            return ( num - minA ) / ( maxA - minA ) * ( maxB - minB ) + minB;
          }
        });

        context[ HAS_SKETCH ] = true;
      }
    },

    create: function( options ) {

      options = extend( options || {}, defaults );

      if ( options.globals ) Sketch.install( self );

      element = options.element = options.element || doc.createElement( options.type === DOM ? 'div' : 'canvas' );

      context = options.context = options.context || (function() {

        switch( options.type ) {

          case CANVAS:

            return element.getContext( '2d', options );

          case WEBGL:

            return element.getContext( 'webgl', options ) || element.getContext( 'experimental-webgl', options );

          case DOM:

            return element.canvas = element;
        }

      })();

      ( options.container || doc.body ).appendChild( element );

      return Sketch.augment( context, options );
    },

    augment: function( context, options ) {

      options = extend( options || {}, defaults );

      options.element = context.canvas || context;
      options.element.className += ' sketch';

      extend( context, options, true );

      return constructor( context );
    }
  };

  /*
  ----------------------------------------------------------------------

    Shims

  ----------------------------------------------------------------------
  */

  var vendors = [ 'ms', 'moz', 'webkit', 'o' ];
  var scope = self;
  var then = 0;

  var a = 'AnimationFrame';
  var b = 'request' + a;
  var c = 'cancel' + a;

  var rAF = scope[ b ];
  var cAF = scope[ c ];

  for ( var i = 0; i < vendors.length && !rAF; i++ ) {

    rAF = scope[ vendors[ i ] + 'Request' + a ];
    cAF = scope[ vendors[ i ] + 'Cancel' + a ];
  }

  scope[ b ] = rAF = rAF || function( callback ) {

    var now = +new Date();
    var dt = M.max( 0, 16 - ( now - then ) );
    var id = setTimeout( function() {
      callback( now + dt );
    }, dt );

    then = now + dt;
    return id;
  };

  scope[ c ] = cAF = cAF || function( id ) {
    clearTimeout( id );
  };

  /*
  ----------------------------------------------------------------------

    Output

  ----------------------------------------------------------------------
  */

  return Sketch;

}));


// ===================================================================================================

/* Copyright (C) 2013 Justin Windle, http://soulwire.co.uk */
!function(e,t){"object"==typeof exports?module.exports=t(e,e.document):"function"==typeof define&&define.amd?define(function(){return t(e,e.document)}):e.Sketch=t(e,e.document)}("undefined"!=typeof window?window:this,function(e,t){"use strict";function n(e){return"[object Array]"==Object.prototype.toString.call(e)}function o(e){return"function"==typeof e}function r(e){return"number"==typeof e}function i(e){return"string"==typeof e}function u(e){return C[e]||String.fromCharCode(e)}function a(e,t,n){for(var o in t)!n&&o in e||(e[o]=t[o]);return e}function c(e,t){return function(){e.apply(t,arguments)}}function l(e){var t={};for(var n in e)"webkitMovementX"!==n&&"webkitMovementY"!==n&&(o(e[n])?t[n]=c(e[n],e):t[n]=e[n]);return t}function s(e){function t(t){o(t)&&t.apply(e,[].splice.call(arguments,1))}function n(e){for(_=0;_<ee.length;_++)B=ee[_],i(B)?S[(e?"add":"remove")+"EventListener"].call(S,B,N,!1):o(B)?N=B:S=B}function r(){I(A),A=R(r),K||(t(e.setup),K=o(e.setup)),U||(t(e.resize),U=o(e.resize)),e.running&&!q&&(e.dt=(z=+new Date)-e.now,e.millis+=e.dt,e.now=z,t(e.update),Z&&(e.retina&&(e.save(),e.autoclear&&e.scale(V,V)),e.autoclear&&e.clear()),t(e.draw),Z&&e.retina&&e.restore()),q=++q%e.interval}function c(){S=J?e.style:e.canvas,D=J?"px":"",Y=e.width,j=e.height,e.fullscreen&&(j=e.height=v.innerHeight,Y=e.width=v.innerWidth),e.retina&&Z&&V&&(S.style.height=j+"px",S.style.width=Y+"px",Y*=V,j*=V),S.height!==j&&(S.height=j+D),S.width!==Y&&(S.width=Y+D),Z&&!e.autoclear&&e.retina&&e.scale(V,V),K&&t(e.resize)}function s(e,t){return L=t.getBoundingClientRect(),e.x=e.pageX-L.left-(v.scrollX||v.pageXOffset),e.y=e.pageY-L.top-(v.scrollY||v.pageYOffset),e}function f(t,n){return s(t,e.element),n=n||{},n.ox=n.x||t.x,n.oy=n.y||t.y,n.x=t.x,n.y=t.y,n.dx=n.x-n.ox,n.dy=n.y-n.oy,n}function d(e){if(e.preventDefault(),G=l(e),G.originalEvent=e,G.touches)for(Q.length=G.touches.length,_=0;_<G.touches.length;_++)Q[_]=f(G.touches[_],Q[_]);else Q.length=0,Q[0]=f(G,$);return a($,Q[0],!0),G}function p(n){for(n=d(n),M=(X=ee.indexOf(W=n.type))-1,e.dragging=!!/down|start/.test(W)||!/up|end/.test(W)&&e.dragging;M;)i(ee[M])?t(e[ee[M--]],n):i(ee[X])?t(e[ee[X++]],n):M=0}function g(n){F=n.keyCode,H="keyup"==n.type,te[F]=te[u(F)]=!H,t(e[n.type],n)}function m(n){e.autopause&&("blur"==n.type?E:y)(),t(e[n.type],n)}function y(){e.now=+new Date,e.running=!0}function E(){e.running=!1}function k(){(e.running?E:y)()}function P(){Z&&e.clearRect(0,0,e.width*V,e.height*V)}function T(){O=e.element.parentNode,_=b.indexOf(e),O&&O.removeChild(e.element),~_&&b.splice(_,1),n(!1),E()}var A,N,S,O,L,_,D,z,B,G,W,F,H,M,X,Y,j,q=0,Q=[],U=!1,K=!1,V=v.devicePixelRatio||1,J=e.type==w,Z=e.type==h,$={x:0,y:0,ox:0,oy:0,dx:0,dy:0},ee=[e.eventTarget||e.element,p,"mousedown","touchstart",p,"mousemove","touchmove",p,"mouseup","touchend",p,"click",p,"mouseout",p,"mouseover",x,g,"keydown","keyup",v,m,"focus","blur",c,"resize"],te={};for(F in C)te[C[F]]=!1;return a(e,{touches:Q,mouse:$,keys:te,dragging:!1,running:!1,millis:0,now:NaN,dt:NaN,destroy:T,toggle:k,clear:P,start:y,stop:E}),b.push(e),e.autostart&&y(),n(!0),c(),r(),e}for(var f,d,p="E LN10 LN2 LOG2E LOG10E PI SQRT1_2 SQRT2 abs acos asin atan ceil cos exp floor log round sin sqrt tan atan2 pow max min".split(" "),g="__hasSketch",m=Math,h="canvas",y="webgl",w="dom",x=t,v=e,b=[],E={fullscreen:!0,autostart:!0,autoclear:!0,autopause:!0,container:x.body,interval:1,globals:!0,retina:!1,type:h},C={8:"BACKSPACE",9:"TAB",13:"ENTER",16:"SHIFT",27:"ESCAPE",32:"SPACE",37:"LEFT",38:"UP",39:"RIGHT",40:"DOWN"},k={CANVAS:h,WEB_GL:y,WEBGL:y,DOM:w,instances:b,install:function(e){if(!e[g]){for(var t=0;t<p.length;t++)e[p[t]]=m[p[t]];a(e,{TWO_PI:2*m.PI,HALF_PI:m.PI/2,QUARTER_PI:m.PI/4,random:function(e,t){return n(e)?e[~~(m.random()*e.length)]:(r(t)||(t=e||1,e=0),e+m.random()*(t-e))},lerp:function(e,t,n){return e+n*(t-e)},map:function(e,t,n,o,r){return(e-t)/(n-t)*(r-o)+o}}),e[g]=!0}},create:function(e){return e=a(e||{},E),e.globals&&k.install(self),f=e.element=e.element||x.createElement(e.type===w?"div":"canvas"),d=e.context=e.context||function(){switch(e.type){case h:return f.getContext("2d",e);case y:return f.getContext("webgl",e)||f.getContext("experimental-webgl",e);case w:return f.canvas=f}}(),(e.container||x.body).appendChild(f),k.augment(d,e)},augment:function(e,t){return t=a(t||{},E),t.element=e.canvas||e,t.element.className+=" sketch",a(e,t,!0),s(e)}},P=["ms","moz","webkit","o"],T=self,A=0,N="AnimationFrame",S="request"+N,O="cancel"+N,R=T[S],I=T[O],L=0;L<P.length&&!R;L++)R=T[P[L]+"Request"+N],I=T[P[L]+"Cancel"+N];return T[S]=R=R||function(e){var t=+new Date,n=m.max(0,16-(t-A)),o=setTimeout(function(){e(t+n)},n);return A=t+n,o},T[O]=I=I||function(e){clearTimeout(e)},k});

// ===================================================================================================

// The MIT License (MIT)

// Typed.js | Copyright (c) 2014 Matt Boldt | www.mattboldt.com

// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the "Software"), to deal
// in the Software without restriction, including without limitation the rights
// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
// copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:

// The above copyright notice and this permission notice shall be included in
// all copies or substantial portions of the Software.

// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
// THE SOFTWARE.




! function($) {

    "use strict";

    var Typed = function(el, options) {

        // chosen element to manipulate text
        this.el = $(el);

        // options
        this.options = $.extend({}, $.fn.typed.defaults, options);

        // attribute to type into
        this.isInput = this.el.is('input');
        this.attr = this.options.attr;

        // show cursor
        this.showCursor = this.isInput ? false : this.options.showCursor;

        // text content of element
        this.elContent = this.attr ? this.el.attr(this.attr) : this.el.text()

        // html or plain text
        this.contentType = this.options.contentType;

        // typing speed
        this.typeSpeed = this.options.typeSpeed;

        // add a delay before typing starts
        this.startDelay = this.options.startDelay;

        // backspacing speed
        this.backSpeed = this.options.backSpeed;

        // amount of time to wait before backspacing
        this.backDelay = this.options.backDelay;

        // div containing strings
        this.stringsElement = this.options.stringsElement;

        // input strings of text
        this.strings = this.options.strings;

        // character number position of current string
        this.strPos = 0;

        // current array position
        this.arrayPos = 0;

        // number to stop backspacing on.
        // default 0, can change depending on how many chars
        // you want to remove at the time
        this.stopNum = 0;

        // Looping logic
        this.loop = this.options.loop;
        this.loopCount = this.options.loopCount;
        this.curLoop = 0;

        // for stopping
        this.stop = false;

        // custom cursor
        this.cursorChar = this.options.cursorChar;

        // shuffle the strings
        this.shuffle = this.options.shuffle;
        // the order of strings
        this.sequence = [];

        // All systems go!
        this.build();
    };

    Typed.prototype = {

        constructor: Typed

        ,
        init: function() {
            // begin the loop w/ first current string (global self.strings)
            // current string will be passed as an argument each time after this
            var self = this;
            self.timeout = setTimeout(function() {
                for (var i=0;i<self.strings.length;++i) self.sequence[i]=i;

                // shuffle the array if true
                if(self.shuffle) self.sequence = self.shuffleArray(self.sequence);

                // Start typing
                self.typewrite(self.strings[self.sequence[self.arrayPos]], self.strPos);
            }, self.startDelay);
        }

        ,
        build: function() {
            var self = this;
            // Insert cursor
            if (this.showCursor === true) {
                this.cursor = $("<span class=\"typed-cursor\">" + this.cursorChar + "</span>");
                this.el.after(this.cursor);
            }
            if (this.stringsElement) {
                self.strings = [];
                this.stringsElement.hide();
                var strings = this.stringsElement.find('p');
                $.each(strings, function(key, value){
                    self.strings.push($(value).html());
                });
            }
            this.init();
        }

        // pass current string state to each function, types 1 char per call
        ,
        typewrite: function(curString, curStrPos) {
            // exit when stopped
            if (this.stop === true) {
                return;
            }

            // varying values for setTimeout during typing
            // can't be global since number changes each time loop is executed
            var humanize = Math.round(Math.random() * (100 - 30)) + this.typeSpeed;
            var self = this;

            // ------------- optional ------------- //
            // backpaces a certain string faster
            // ------------------------------------ //
            // if (self.arrayPos == 1){
            //  self.backDelay = 50;
            // }
            // else{ self.backDelay = 500; }

            // contain typing function in a timeout humanize'd delay
            self.timeout = setTimeout(function() {
                // check for an escape character before a pause value
                // format: \^\d+ .. eg: ^1000 .. should be able to print the ^ too using ^^
                // single ^ are removed from string
                var charPause = 0;
                var substr = curString.substr(curStrPos);
                if (substr.charAt(0) === '^') {
                    var skip = 1; // skip atleast 1
                    if (/^\^\d+/.test(substr)) {
                        substr = /\d+/.exec(substr)[0];
                        skip += substr.length;
                        charPause = parseInt(substr);
                    }

                    // strip out the escape character and pause value so they're not printed
                    curString = curString.substring(0, curStrPos) + curString.substring(curStrPos + skip);
                }

                if (self.contentType === 'html') {
                    // skip over html tags while typing
                    var curChar = curString.substr(curStrPos).charAt(0)
                    if (curChar === '<' || curChar === '&') {
                        var tag = '';
                        var endTag = '';
                        if (curChar === '<') {
                            endTag = '>'
                        } else {
                            endTag = ';'
                        }
                        while (curString.substr(curStrPos).charAt(0) !== endTag) {
                            tag += curString.substr(curStrPos).charAt(0);
                            curStrPos++;
                        }
                        curStrPos++;
                        tag += endTag;
                    }
                }

                // timeout for any pause after a character
                self.timeout = setTimeout(function() {
                    if (curStrPos === curString.length) {
                        // fires callback function
                        self.options.onStringTyped(self.arrayPos);

                        // is this the final string
                        if (self.arrayPos === self.strings.length - 1) {
                            // animation that occurs on the last typed string
                            self.options.callback();

                            self.curLoop++;

                            // quit if we wont loop back
                            if (self.loop === false || self.curLoop === self.loopCount)
                                return;
                        }

                        self.timeout = setTimeout(function() {
                            self.backspace(curString, curStrPos);
                        }, self.backDelay);
                    } else {

                        /* call before functions if applicable */
                        if (curStrPos === 0)
                            self.options.preStringTyped(self.arrayPos);

                        // start typing each new char into existing string
                        // curString: arg, self.el.html: original text inside element
                        var nextString = curString.substr(0, curStrPos + 1);
                        if (self.attr) {
                            self.el.attr(self.attr, nextString);
                        } else {
                            if (self.isInput) {
                                self.el.val(nextString);
                            } else if (self.contentType === 'html') {
                                self.el.html(nextString);
                            } else {
                                self.el.text(nextString);
                            }
                        }

                        // add characters one by one
                        curStrPos++;
                        // loop the function
                        self.typewrite(curString, curStrPos);
                    }
                    // end of character pause
                }, charPause);

                // humanized value for typing
            }, humanize);

        }

        ,
        backspace: function(curString, curStrPos) {
            // exit when stopped
            if (this.stop === true) {
                return;
            }

            // varying values for setTimeout during typing
            // can't be global since number changes each time loop is executed
            var humanize = Math.round(Math.random() * (100 - 30)) + this.backSpeed;
            var self = this;

            self.timeout = setTimeout(function() {

                // ----- this part is optional ----- //
                // check string array position
                // on the first string, only delete one word
                // the stopNum actually represents the amount of chars to
                // keep in the current string. In my case it's 14.
                // if (self.arrayPos == 1){
                //  self.stopNum = 14;
                // }
                //every other time, delete the whole typed string
                // else{
                //  self.stopNum = 0;
                // }

                if (self.contentType === 'html') {
                    // skip over html tags while backspacing
                    if (curString.substr(curStrPos).charAt(0) === '>') {
                        var tag = '';
                        while (curString.substr(curStrPos).charAt(0) !== '<') {
                            tag -= curString.substr(curStrPos).charAt(0);
                            curStrPos--;
                        }
                        curStrPos--;
                        tag += '<';
                    }
                }

                // ----- continue important stuff ----- //
                // replace text with base text + typed characters
                var nextString = curString.substr(0, curStrPos);
                if (self.attr) {
                    self.el.attr(self.attr, nextString);
                } else {
                    if (self.isInput) {
                        self.el.val(nextString);
                    } else if (self.contentType === 'html') {
                        self.el.html(nextString);
                    } else {
                        self.el.text(nextString);
                    }
                }

                // if the number (id of character in current string) is
                // less than the stop number, keep going
                if (curStrPos > self.stopNum) {
                    // subtract characters one by one
                    curStrPos--;
                    // loop the function
                    self.backspace(curString, curStrPos);
                }
                // if the stop number has been reached, increase
                // array position to next string
                else if (curStrPos <= self.stopNum) {
                    self.arrayPos++;

                    if (self.arrayPos === self.strings.length) {
                        self.arrayPos = 0;

                        // Shuffle sequence again
                        if(self.shuffle) self.sequence = self.shuffleArray(self.sequence);

                        self.init();
                    } else
                        self.typewrite(self.strings[self.sequence[self.arrayPos]], curStrPos);
                }

                // humanized value for typing
            }, humanize);

        }
        /**
         * Shuffles the numbers in the given array.
         * @param {Array} array
         * @returns {Array}
         */
        ,shuffleArray: function(array) {
            var tmp, current, top = array.length;
            if(top) while(--top) {
                current = Math.floor(Math.random() * (top + 1));
                tmp = array[current];
                array[current] = array[top];
                array[top] = tmp;
            }
            return array;
        }

        // Start & Stop currently not working

        // , stop: function() {
        //     var self = this;

        //     self.stop = true;
        //     clearInterval(self.timeout);
        // }

        // , start: function() {
        //     var self = this;
        //     if(self.stop === false)
        //        return;

        //     this.stop = false;
        //     this.init();
        // }

        // Reset and rebuild the element
        ,
        reset: function() {
            var self = this;
            clearInterval(self.timeout);
            var id = this.el.attr('id');
            this.el.after('<span id="' + id + '"/>')
            this.el.remove();
            if (typeof this.cursor !== 'undefined') {
                this.cursor.remove();
            }
            // Send the callback
            self.options.resetCallback();
        }

    };

    $.fn.typed = function(option) {
        return this.each(function() {
            var $this = $(this),
                data = $this.data('typed'),
                options = typeof option == 'object' && option;
            if (!data) $this.data('typed', (data = new Typed(this, options)));
            if (typeof option == 'string') data[option]();
        });
    };

    $.fn.typed.defaults = {
        strings: ["These are the default values...", "You know what you should do?", "Use your own!", "Have a great day!"],
        stringsElement: null,
        // typing speed
        typeSpeed: 0,
        // time before typing starts
        startDelay: 0,
        // backspacing speed
        backSpeed: 0,
        // shuffle the strings
        shuffle: false,
        // time before backspacing
        backDelay: 500,
        // loop
        loop: false,
        // false = infinite
        loopCount: false,
        // show cursor
        showCursor: true,
        // character for cursor
        cursorChar: "|",
        // attribute to type (null == text)
        attr: null,
        // either html or text
        contentType: 'html',
        // call when done callback function
        callback: function() {},
        // starting callback function before each string
        preStringTyped: function() {},
        //callback for every typed string
        onStringTyped: function() {},
        // callback for reset
        resetCallback: function() {}
    };


}(window.jQuery);


// ===================================================================================================

/* Modernizr 2.8.3 (Custom Build) | MIT & BSD
 * Build: http://modernizr.com/download/#-fontface-backgroundsize-borderimage-borderradius-boxshadow-opacity-rgba-cssanimations-generatedcontent-csstransforms-csstransforms3d-csstransitions-shiv-cssclasses-teststyles-testprop-testallprops-prefixes-domprefixes-load
 */
;window.Modernizr=function(a,b,c){function A(a){j.cssText=a}function B(a,b){return A(n.join(a+";")+(b||""))}function C(a,b){return typeof a===b}function D(a,b){return!!~(""+a).indexOf(b)}function E(a,b){for(var d in a){var e=a[d];if(!D(e,"-")&&j[e]!==c)return b=="pfx"?e:!0}return!1}function F(a,b,d){for(var e in a){var f=b[a[e]];if(f!==c)return d===!1?a[e]:C(f,"function")?f.bind(d||b):f}return!1}function G(a,b,c){var d=a.charAt(0).toUpperCase()+a.slice(1),e=(a+" "+p.join(d+" ")+d).split(" ");return C(b,"string")||C(b,"undefined")?E(e,b):(e=(a+" "+q.join(d+" ")+d).split(" "),F(e,b,c))}var d="2.8.3",e={},f=!0,g=b.documentElement,h="modernizr",i=b.createElement(h),j=i.style,k,l=":)",m={}.toString,n=" -webkit- -moz- -o- -ms- ".split(" "),o="Webkit Moz O ms",p=o.split(" "),q=o.toLowerCase().split(" "),r={},s={},t={},u=[],v=u.slice,w,x=function(a,c,d,e){var f,i,j,k,l=b.createElement("div"),m=b.body,n=m||b.createElement("body");if(parseInt(d,10))while(d--)j=b.createElement("div"),j.id=e?e[d]:h+(d+1),l.appendChild(j);return f=["&#173;",'<style id="s',h,'">',a,"</style>"].join(""),l.id=h,(m?l:n).innerHTML+=f,n.appendChild(l),m||(n.style.background="",n.style.overflow="hidden",k=g.style.overflow,g.style.overflow="hidden",g.appendChild(n)),i=c(l,a),m?l.parentNode.removeChild(l):(n.parentNode.removeChild(n),g.style.overflow=k),!!i},y={}.hasOwnProperty,z;!C(y,"undefined")&&!C(y.call,"undefined")?z=function(a,b){return y.call(a,b)}:z=function(a,b){return b in a&&C(a.constructor.prototype[b],"undefined")},Function.prototype.bind||(Function.prototype.bind=function(b){var c=this;if(typeof c!="function")throw new TypeError;var d=v.call(arguments,1),e=function(){if(this instanceof e){var a=function(){};a.prototype=c.prototype;var f=new a,g=c.apply(f,d.concat(v.call(arguments)));return Object(g)===g?g:f}return c.apply(b,d.concat(v.call(arguments)))};return e}),r.rgba=function(){return A("background-color:rgba(150,255,150,.5)"),D(j.backgroundColor,"rgba")},r.backgroundsize=function(){return G("backgroundSize")},r.borderimage=function(){return G("borderImage")},r.borderradius=function(){return G("borderRadius")},r.boxshadow=function(){return G("boxShadow")},r.opacity=function(){return B("opacity:.55"),/^0.55$/.test(j.opacity)},r.cssanimations=function(){return G("animationName")},r.csstransforms=function(){return!!G("transform")},r.csstransforms3d=function(){var a=!!G("perspective");return a&&"webkitPerspective"in g.style&&x("@media (transform-3d),(-webkit-transform-3d){#modernizr{left:9px;position:absolute;height:3px;}}",function(b,c){a=b.offsetLeft===9&&b.offsetHeight===3}),a},r.csstransitions=function(){return G("transition")},r.fontface=function(){var a;return x('@font-face {font-family:"font";src:url("https://")}',function(c,d){var e=b.getElementById("smodernizr"),f=e.sheet||e.styleSheet,g=f?f.cssRules&&f.cssRules[0]?f.cssRules[0].cssText:f.cssText||"":"";a=/src/i.test(g)&&g.indexOf(d.split(" ")[0])===0}),a},r.generatedcontent=function(){var a;return x(["#",h,"{font:0/0 a}#",h,':after{content:"',l,'";visibility:hidden;font:3px/1 a}'].join(""),function(b){a=b.offsetHeight>=3}),a};for(var H in r)z(r,H)&&(w=H.toLowerCase(),e[w]=r[H](),u.push((e[w]?"":"no-")+w));return e.addTest=function(a,b){if(typeof a=="object")for(var d in a)z(a,d)&&e.addTest(d,a[d]);else{a=a.toLowerCase();if(e[a]!==c)return e;b=typeof b=="function"?b():b,typeof f!="undefined"&&f&&(g.className+=" "+(b?"":"no-")+a),e[a]=b}return e},A(""),i=k=null,function(a,b){function l(a,b){var c=a.createElement("p"),d=a.getElementsByTagName("head")[0]||a.documentElement;return c.innerHTML="x<style>"+b+"</style>",d.insertBefore(c.lastChild,d.firstChild)}function m(){var a=s.elements;return typeof a=="string"?a.split(" "):a}function n(a){var b=j[a[h]];return b||(b={},i++,a[h]=i,j[i]=b),b}function o(a,c,d){c||(c=b);if(k)return c.createElement(a);d||(d=n(c));var g;return d.cache[a]?g=d.cache[a].cloneNode():f.test(a)?g=(d.cache[a]=d.createElem(a)).cloneNode():g=d.createElem(a),g.canHaveChildren&&!e.test(a)&&!g.tagUrn?d.frag.appendChild(g):g}function p(a,c){a||(a=b);if(k)return a.createDocumentFragment();c=c||n(a);var d=c.frag.cloneNode(),e=0,f=m(),g=f.length;for(;e<g;e++)d.createElement(f[e]);return d}function q(a,b){b.cache||(b.cache={},b.createElem=a.createElement,b.createFrag=a.createDocumentFragment,b.frag=b.createFrag()),a.createElement=function(c){return s.shivMethods?o(c,a,b):b.createElem(c)},a.createDocumentFragment=Function("h,f","return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&("+m().join().replace(/[\w\-]+/g,function(a){return b.createElem(a),b.frag.createElement(a),'c("'+a+'")'})+");return n}")(s,b.frag)}function r(a){a||(a=b);var c=n(a);return s.shivCSS&&!g&&!c.hasCSS&&(c.hasCSS=!!l(a,"article,aside,dialog,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}mark{background:#FF0;color:#000}template{display:none}")),k||q(a,c),a}var c="3.7.0",d=a.html5||{},e=/^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,f=/^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,g,h="_html5shiv",i=0,j={},k;(function(){try{var a=b.createElement("a");a.innerHTML="<xyz></xyz>",g="hidden"in a,k=a.childNodes.length==1||function(){b.createElement("a");var a=b.createDocumentFragment();return typeof a.cloneNode=="undefined"||typeof a.createDocumentFragment=="undefined"||typeof a.createElement=="undefined"}()}catch(c){g=!0,k=!0}})();var s={elements:d.elements||"abbr article aside audio bdi canvas data datalist details dialog figcaption figure footer header hgroup main mark meter nav output progress section summary template time video",version:c,shivCSS:d.shivCSS!==!1,supportsUnknownElements:k,shivMethods:d.shivMethods!==!1,type:"default",shivDocument:r,createElement:o,createDocumentFragment:p};a.html5=s,r(b)}(this,b),e._version=d,e._prefixes=n,e._domPrefixes=q,e._cssomPrefixes=p,e.testProp=function(a){return E([a])},e.testAllProps=G,e.testStyles=x,g.className=g.className.replace(/(^|\s)no-js(\s|$)/,"$1$2")+(f?" js "+u.join(" "):""),e}(this,this.document),function(a,b,c){function d(a){return"[object Function]"==o.call(a)}function e(a){return"string"==typeof a}function f(){}function g(a){return!a||"loaded"==a||"complete"==a||"uninitialized"==a}function h(){var a=p.shift();q=1,a?a.t?m(function(){("c"==a.t?B.injectCss:B.injectJs)(a.s,0,a.a,a.x,a.e,1)},0):(a(),h()):q=0}function i(a,c,d,e,f,i,j){function k(b){if(!o&&g(l.readyState)&&(u.r=o=1,!q&&h(),l.onload=l.onreadystatechange=null,b)){"img"!=a&&m(function(){t.removeChild(l)},50);for(var d in y[c])y[c].hasOwnProperty(d)&&y[c][d].onload()}}var j=j||B.errorTimeout,l=b.createElement(a),o=0,r=0,u={t:d,s:c,e:f,a:i,x:j};1===y[c]&&(r=1,y[c]=[]),"object"==a?l.data=c:(l.src=c,l.type=a),l.width=l.height="0",l.onerror=l.onload=l.onreadystatechange=function(){k.call(this,r)},p.splice(e,0,u),"img"!=a&&(r||2===y[c]?(t.insertBefore(l,s?null:n),m(k,j)):y[c].push(l))}function j(a,b,c,d,f){return q=0,b=b||"j",e(a)?i("c"==b?v:u,a,b,this.i++,c,d,f):(p.splice(this.i++,0,a),1==p.length&&h()),this}function k(){var a=B;return a.loader={load:j,i:0},a}var l=b.documentElement,m=a.setTimeout,n=b.getElementsByTagName("script")[0],o={}.toString,p=[],q=0,r="MozAppearance"in l.style,s=r&&!!b.createRange().compareNode,t=s?l:n.parentNode,l=a.opera&&"[object Opera]"==o.call(a.opera),l=!!b.attachEvent&&!l,u=r?"object":l?"script":"img",v=l?"script":u,w=Array.isArray||function(a){return"[object Array]"==o.call(a)},x=[],y={},z={timeout:function(a,b){return b.length&&(a.timeout=b[0]),a}},A,B;B=function(a){function b(a){var a=a.split("!"),b=x.length,c=a.pop(),d=a.length,c={url:c,origUrl:c,prefixes:a},e,f,g;for(f=0;f<d;f++)g=a[f].split("="),(e=z[g.shift()])&&(c=e(c,g));for(f=0;f<b;f++)c=x[f](c);return c}function g(a,e,f,g,h){var i=b(a),j=i.autoCallback;i.url.split(".").pop().split("?").shift(),i.bypass||(e&&(e=d(e)?e:e[a]||e[g]||e[a.split("/").pop().split("?")[0]]),i.instead?i.instead(a,e,f,g,h):(y[i.url]?i.noexec=!0:y[i.url]=1,f.load(i.url,i.forceCSS||!i.forceJS&&"css"==i.url.split(".").pop().split("?").shift()?"c":c,i.noexec,i.attrs,i.timeout),(d(e)||d(j))&&f.load(function(){k(),e&&e(i.origUrl,h,g),j&&j(i.origUrl,h,g),y[i.url]=2})))}function h(a,b){function c(a,c){if(a){if(e(a))c||(j=function(){var a=[].slice.call(arguments);k.apply(this,a),l()}),g(a,j,b,0,h);else if(Object(a)===a)for(n in m=function(){var b=0,c;for(c in a)a.hasOwnProperty(c)&&b++;return b}(),a)a.hasOwnProperty(n)&&(!c&&!--m&&(d(j)?j=function(){var a=[].slice.call(arguments);k.apply(this,a),l()}:j[n]=function(a){return function(){var b=[].slice.call(arguments);a&&a.apply(this,b),l()}}(k[n])),g(a[n],j,b,n,h))}else!c&&l()}var h=!!a.test,i=a.load||a.both,j=a.callback||f,k=j,l=a.complete||f,m,n;c(h?a.yep:a.nope,!!i),i&&c(i)}var i,j,l=this.yepnope.loader;if(e(a))g(a,0,l,0);else if(w(a))for(i=0;i<a.length;i++)j=a[i],e(j)?g(j,0,l,0):w(j)?B(j):Object(j)===j&&h(j,l);else Object(a)===a&&h(a,l)},B.addPrefix=function(a,b){z[a]=b},B.addFilter=function(a){x.push(a)},B.errorTimeout=1e4,null==b.readyState&&b.addEventListener&&(b.readyState="loading",b.addEventListener("DOMContentLoaded",A=function(){b.removeEventListener("DOMContentLoaded",A,0),b.readyState="complete"},0)),a.yepnope=k(),a.yepnope.executeStack=h,a.yepnope.injectJs=function(a,c,d,e,i,j){var k=b.createElement("script"),l,o,e=e||B.errorTimeout;k.src=a;for(o in d)k.setAttribute(o,d[o]);c=j?h:c||f,k.onreadystatechange=k.onload=function(){!l&&g(k.readyState)&&(l=1,c(),k.onload=k.onreadystatechange=null)},m(function(){l||(l=1,c(1))},e),i?k.onload():n.parentNode.insertBefore(k,n)},a.yepnope.injectCss=function(a,c,d,e,g,i){var e=b.createElement("link"),j,c=i?h:c||f;e.href=a,e.rel="stylesheet",e.type="text/css";for(j in d)e.setAttribute(j,d[j]);g||(n.parentNode.insertBefore(e,n),m(c,0))}}(this,document),Modernizr.load=function(){yepnope.apply(window,[].slice.call(arguments,0))};

// ===================================================================================================

/**
 * Copyright (C) 2010-2015 Graham Breach
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Lesser General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Lesser General Public License for more details.
 *
 * You should have received a copy of the GNU Lesser General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */
/**
 * jQuery.tagcanvas 2.9
 * For more information, please contact <graham@goat1000.com>
 */
(function(ap){var M,K,L=Math.abs,ah=Math.sin,w=Math.cos,s=Math.max,aE=Math.min,aq=Math.ceil,F=Math.sqrt,au=Math.pow,h={},l={},m={0:"0,",1:"17,",2:"34,",3:"51,",4:"68,",5:"85,",6:"102,",7:"119,",8:"136,",9:"153,",a:"170,",A:"170,",b:"187,",B:"187,",c:"204,",C:"204,",d:"221,",D:"221,",e:"238,",E:"238,",f:"255,",F:"255,"},x,c,Q,aG,H,aH,aa,C=document,p,b={};for(M=0;M<256;++M){K=M.toString(16);if(M<16){K="0"+K}l[K]=l[K.toUpperCase()]=M.toString()+","}function ai(i){return typeof i!="undefined"}function I(i){return typeof i=="object"&&i!=null}function aw(i,j,aI){return isNaN(i)?aI:aE(aI,s(j,i))}function aB(){return false}function G(){return new Date().valueOf()}function A(aI,aL){var j=[],aJ=aI.length,aK;for(aK=0;aK<aJ;++aK){j.push(aI[aK])}j.sort(aL);return j}function an(j){var aJ=j.length-1,aI,aK;while(aJ){aK=~~(Math.random()*aJ);aI=j[aJ];j[aJ]=j[aK];j[aK]=aI;--aJ}}function ae(i,aI,j){this.x=i;this.y=aI;this.z=j}H=ae.prototype;H.length=function(){return F(this.x*this.x+this.y*this.y+this.z*this.z)};H.dot=function(i){return this.x*i.x+this.y*i.y+this.z*i.z};H.cross=function(j){var i=this.y*j.z-this.z*j.y,aJ=this.z*j.x-this.x*j.z,aI=this.x*j.y-this.y*j.x;return new ae(i,aJ,aI)};H.angle=function(j){var i=this.dot(j),aI;if(i==0){return Math.PI/2}aI=i/(this.length()*j.length());if(aI>=1){return 0}if(aI<=-1){return Math.PI}return Math.acos(aI)};H.unit=function(){var i=this.length();return new ae(this.x/i,this.y/i,this.z/i)};function aj(aI,j){j=j*Math.PI/180;aI=aI*Math.PI/180;var i=ah(aI)*w(j),aK=-ah(j),aJ=-w(aI)*w(j);return new ae(i,aK,aJ)}function R(i){this[1]={1:i[0],2:i[1],3:i[2]};this[2]={1:i[3],2:i[4],3:i[5]};this[3]={1:i[6],2:i[7],3:i[8]}}aG=R.prototype;R.Identity=function(){return new R([1,0,0,0,1,0,0,0,1])};R.Rotation=function(aJ,i){var j=ah(aJ),aI=w(aJ),aK=1-aI;return new R([aI+au(i.x,2)*aK,i.x*i.y*aK-i.z*j,i.x*i.z*aK+i.y*j,i.y*i.x*aK+i.z*j,aI+au(i.y,2)*aK,i.y*i.z*aK-i.x*j,i.z*i.x*aK-i.y*j,i.z*i.y*aK+i.x*j,aI+au(i.z,2)*aK])};aG.mul=function(aI){var aJ=[],aM,aL,aK=(aI.xform?1:0);for(aM=1;aM<=3;++aM){for(aL=1;aL<=3;++aL){if(aK){aJ.push(this[aM][1]*aI[1][aL]+this[aM][2]*aI[2][aL]+this[aM][3]*aI[3][aL])}else{aJ.push(this[aM][aL]*aI)}}}return new R(aJ)};aG.xform=function(aI){var j={},i=aI.x,aK=aI.y,aJ=aI.z;j.x=i*this[1][1]+aK*this[2][1]+aJ*this[3][1];j.y=i*this[1][2]+aK*this[2][2]+aJ*this[3][2];j.z=i*this[1][3]+aK*this[2][3]+aJ*this[3][3];return j};function q(aJ,aL,aR,aO,aQ){var aM,aP,j,aN,aS=[],aI=2/aJ,aK;aK=Math.PI*(3-F(5)+(parseFloat(aQ)?parseFloat(aQ):0));for(aM=0;aM<aJ;++aM){aP=aM*aI-1+(aI/2);j=F(1-aP*aP);aN=aM*aK;aS.push([w(aN)*j*aL,aP*aR,ah(aN)*j*aO])}return aS}function W(aK,aI,aN,aU,aR,aT){var aS,aV=[],aJ=2/aK,aL,aQ,aP,aO,aM;aL=Math.PI*(3-F(5)+(parseFloat(aT)?parseFloat(aT):0));for(aQ=0;aQ<aK;++aQ){aP=aQ*aJ-1+(aJ/2);aS=aQ*aL;aO=w(aS);aM=ah(aS);aV.push(aI?[aP*aN,aO*aU,aM*aR]:[aO*aN,aP*aU,aM*aR])}return aV}function N(aI,aJ,aM,aS,aQ,aO){var aR,aT=[],aK=Math.PI*2/aJ,aP,aN,aL;for(aP=0;aP<aJ;++aP){aR=aP*aK;aN=w(aR);aL=ah(aR);aT.push(aI?[aO*aM,aN*aS,aL*aQ]:[aN*aM,aO*aS,aL*aQ])}return aT}function am(aK,j,aI,aJ,i){return W(aK,0,j,aI,aJ,i)}function av(aK,j,aI,aJ,i){return W(aK,1,j,aI,aJ,i)}function d(aK,i,j,aI,aJ){aJ=isNaN(aJ)?0:aJ*1;return N(0,aK,i,j,aI,aJ)}function n(aK,i,j,aI,aJ){aJ=isNaN(aJ)?0:aJ*1;return N(1,aK,i,j,aI,aJ)}function ao(aI){var j=new Image;j.onload=function(){var aJ=j.width/2,i=j.height/2;aI.centreFunc=function(aO,aL,aM,aK,aN){aO.setTransform(1,0,0,1,0,0);aO.globalAlpha=1;aO.drawImage(j,aK-aJ,aN-i)}};j.src=aI.centreImage}function U(aL,i){var aK=aL,aJ,aI,j=(i*1).toPrecision(3)+")";if(aL[0]==="#"){if(!h[aL]){if(aL.length===4){h[aL]="rgba("+m[aL[1]]+m[aL[2]]+m[aL[3]]}else{h[aL]="rgba("+l[aL.substr(1,2)]+l[aL.substr(3,2)]+l[aL.substr(5,2)]}}aK=h[aL]+j}else{if(aL.substr(0,4)==="rgb("||aL.substr(0,4)==="hsl("){aK=(aL.replace("(","a(").replace(")",","+j))}else{if(aL.substr(0,5)==="rgba("||aL.substr(0,5)==="hsla("){aJ=aL.lastIndexOf(",")+1,aI=aL.indexOf(")");i*=parseFloat(aL.substring(aJ,aI));aK=aL.substr(0,aJ)+i.toPrecision(3)+")"}}}return aK}function P(i,j){if(window.G_vmlCanvasManager){return null}var aI=C.createElement("canvas");aI.width=i;aI.height=j;return aI}function al(){var j=P(3,3),aJ,aI;if(!j){return false}aJ=j.getContext("2d");aJ.strokeStyle="#000";aJ.shadowColor="#fff";aJ.shadowBlur=3;aJ.globalAlpha=0;aJ.strokeRect(2,2,2,2);aJ.globalAlpha=1;aI=aJ.getImageData(2,2,1,1);j=null;return(aI.data[0]>0)}function ak(aM,j,aL,aK){var aJ=aM.createLinearGradient(0,0,j,0),aI;for(aI in aK){aJ.addColorStop(1-aI,aK[aI])}aM.fillStyle=aJ;aM.fillRect(0,aL,j,1)}function k(aK,aI,j){var aJ=1024,aO=1,aN=aK.weightGradient,aM,aQ,aL,aP;if(aK.gCanvas){aQ=aK.gCanvas.getContext("2d");aO=aK.gCanvas.height}else{if(I(aN[0])){aO=aN.length}else{aN=[aN]}aK.gCanvas=aM=P(aJ,aO);if(!aM){return null}aQ=aM.getContext("2d");for(aL=0;aL<aO;++aL){ak(aQ,aJ,aL,aN[aL])}}j=s(aE(j||0,aO-1),0);aP=aQ.getImageData(~~((aJ-1)*aI),j,1,1).data;return"rgba("+aP[0]+","+aP[1]+","+aP[2]+","+(aP[3]/255)+")"}function X(aR,aK,j,aV,aU,aS,aQ,aM,aJ,aT,aL,aP){var aO=aU+(aM||0)+(aJ.length&&aJ[0]<0?L(aJ[0]):0),aI=aS+(aM||0)+(aJ.length&&aJ[1]<0?L(aJ[1]):0),aN,aW;aR.font=aK;aR.textBaseline="top";aR.fillStyle=j;aQ&&(aR.shadowColor=aQ);aM&&(aR.shadowBlur=aM);aJ.length&&(aR.shadowOffsetX=aJ[0],aR.shadowOffsetY=aJ[1]);for(aN=0;aN<aV.length;++aN){aW=0;if(aL){if("right"==aP){aW=aT-aL[aN]}else{if("centre"==aP){aW=(aT-aL[aN])/2}}}aR.fillText(aV[aN],aO+aW,aI);aI+=parseInt(aK)}}function at(aM,i,aL,j,aJ,aK,aI){if(aK){aM.beginPath();aM.moveTo(i,aL+aJ-aK);aM.arcTo(i,aL,i+aK,aL,aK);aM.arcTo(i+j,aL,i+j,aL+aK,aK);aM.arcTo(i+j,aL+aJ,i+j-aK,aL+aJ,aK);aM.arcTo(i,aL+aJ,i,aL+aJ-aK,aK);aM.closePath();aM[aI?"stroke":"fill"]()}else{aM[aI?"strokeRect":"fillRect"](i,aL,j,aJ)}}function g(aO,i,aM,aJ,aN,aI,aK,aL,j){this.strings=aO;this.font=i;this.width=aM;this.height=aJ;this.maxWidth=aN;this.stringWidths=aI;this.align=aK;this.valign=aL;this.scale=j}aa=g.prototype;aa.SetImage=function(aL,j,aJ,i,aK,aN,aI,aM){this.image=aL;this.iwidth=j*this.scale;this.iheight=aJ*this.scale;this.ipos=i;this.ipad=aK*this.scale;this.iscale=aM;this.ialign=aN;this.ivalign=aI};aa.Align=function(j,aI,i){var aJ=0;if(i=="right"||i=="bottom"){aJ=aI-j}else{if(i!="left"&&i!="top"){aJ=(aI-j)/2}}return aJ};aa.Create=function(aV,a1,aU,a2,a0,aZ,i,aY,aQ){var aO,aM,aW,a7,a4,a3,aK,aJ,aI,j,aN,aL,aP,aX,aT,a6=L(i[0]),a5=L(i[1]),aR,aS;aY=s(aY,a6+aZ,a5+aZ);a4=2*(aY+a2);aK=2*(aY+a2);aM=this.width+a4;aW=this.height+aK;aI=j=aY+a2;if(this.image){aN=aL=aY+a2;aP=this.iwidth;aX=this.iheight;if(this.ipos=="top"||this.ipos=="bottom"){if(aP<this.width){aN+=this.Align(aP,this.width,this.ialign)}else{aI+=this.Align(this.width,aP,this.align)}if(this.ipos=="top"){j+=aX+this.ipad}else{aL+=this.height+this.ipad}aM=s(aM,aP+a4);aW+=aX+this.ipad}else{if(aX<this.height){aL+=this.Align(aX,this.height,this.ivalign)}else{j+=this.Align(this.height,aX,this.valign)}if(this.ipos=="right"){aN+=this.width+this.ipad}else{aI+=aP+this.ipad}aM+=aP+this.ipad;aW=s(aW,aX+aK)}}aO=P(aM,aW);if(!aO){return null}a4=aK=a2/2;a3=aM-a2;aJ=aW-a2;aT=aE(aQ,a3/2,aJ/2);a7=aO.getContext("2d");if(a1){a7.fillStyle=a1;at(a7,a4,aK,a3,aJ,aT)}if(a2){a7.strokeStyle=aU;a7.lineWidth=a2;at(a7,a4,aK,a3,aJ,aT,true)}if(aZ||a6||a5){aR=P(aM,aW);if(aR){aS=a7;a7=aR.getContext("2d")}}X(a7,this.font,aV,this.strings,aI,j,0,0,[],this.maxWidth,this.stringWidths,this.align);if(this.image){a7.drawImage(this.image,aN,aL,aP,aX)}if(aS){a7=aS;a0&&(a7.shadowColor=a0);aZ&&(a7.shadowBlur=aZ);a7.shadowOffsetX=i[0];a7.shadowOffsetY=i[1];a7.drawImage(aR,0,0)}return aO};function v(aJ,j,aK){var aI=P(j,aK),aL;if(!aI){return null}aL=aI.getContext("2d");aL.drawImage(aJ,(j-aJ.width)/2,(aK-aJ.height)/2);return aI}function ay(aJ,j,aK){var aI=P(j,aK),aL;if(!aI){return null}aL=aI.getContext("2d");aL.drawImage(aJ,0,0,j,aK);return aI}function aD(aV,aQ,aW,a0,aR,aP,aN,aT,aL,aM){var aJ=aQ+((2*aT)+aP)*a0,aS=aW+((2*aT)+aP)*a0,aK=P(aJ,aS),aZ,aY,aI,aX,j,a1,aU,aO;if(!aK){return null}aP*=a0;aL*=a0;aY=aI=aP/2;aX=aJ-aP;j=aS-aP;aT=(aT*a0)+aY;aZ=aK.getContext("2d");aO=aE(aL,aX/2,j/2);if(aR){aZ.fillStyle=aR;at(aZ,aY,aI,aX,j,aO)}if(aP){aZ.strokeStyle=aN;aZ.lineWidth=aP;at(aZ,aY,aI,aX,j,aO,true)}if(aM){a1=P(aJ,aS);aU=a1.getContext("2d");aU.drawImage(aV,aT,aT,aQ,aW);aU.globalCompositeOperation="source-in";aU.fillStyle=aN;aU.fillRect(0,0,aJ,aS);aU.globalCompositeOperation="destination-over";aU.drawImage(aK,0,0);aU.globalCompositeOperation="source-over";aZ.drawImage(a1,0,0)}else{aZ.drawImage(aV,aT,aT,aV.width,aV.height)}return{image:aK,width:aJ/a0,height:aS/a0}}function ar(aL,j,aK,aO,aP){var aM,aN,aI=parseFloat(j),aJ=s(aK,aO);aM=P(aK,aO);if(!aM){return null}if(j.indexOf("%")>0){aI=aJ*aI/100}else{aI=aI*aP}aN=aM.getContext("2d");aN.globalCompositeOperation="source-over";aN.fillStyle="#fff";if(aI>=aJ/2){aI=aE(aK,aO)/2;aN.beginPath();aN.moveTo(aK/2,aO/2);aN.arc(aK/2,aO/2,aI,0,2*Math.PI,false);aN.fill();aN.closePath()}else{aI=aE(aK/2,aO/2,aI);at(aN,0,0,aK,aO,aI,true);aN.fill()}aN.globalCompositeOperation="source-in";aN.drawImage(aL,0,0,aK,aO);return aM}function Z(aO,aU,aQ,aK,aS,aT,aJ){var aV=L(aJ[0]),aP=L(aJ[1]),aL=aU+(aV>aT?aV+aT:aT*2)*aK,j=aQ+(aP>aT?aP+aT:aT*2)*aK,aN=aK*((aT||0)+(aJ[0]<0?aV:0)),aI=aK*((aT||0)+(aJ[1]<0?aP:0)),aM,aR;aM=P(aL,j);if(!aM){return null}aR=aM.getContext("2d");aS&&(aR.shadowColor=aS);aT&&(aR.shadowBlur=aT*aK);aJ&&(aR.shadowOffsetX=aJ[0]*aK,aR.shadowOffsetY=aJ[1]*aK);aR.drawImage(aO,aN,aI,aU,aQ);return{image:aM,width:aL/aK,height:j/aK}}function t(aU,aM,aS){var aT=parseInt(aU.toString().length*aS),aL=parseInt(aS*2*aU.length),aJ=P(aT,aL),aP,j,aK,aO,aR,aQ,aI,aN;if(!aJ){return null}aP=aJ.getContext("2d");aP.fillStyle="#000";aP.fillRect(0,0,aT,aL);X(aP,aS+"px "+aM,"#fff",aU,0,0,0,0,[],"centre");j=aP.getImageData(0,0,aT,aL);aK=j.width;aO=j.height;aN={min:{x:aK,y:aO},max:{x:-1,y:-1}};for(aQ=0;aQ<aO;++aQ){for(aR=0;aR<aK;++aR){aI=(aQ*aK+aR)*4;if(j.data[aI+1]>0){if(aR<aN.min.x){aN.min.x=aR}if(aR>aN.max.x){aN.max.x=aR}if(aQ<aN.min.y){aN.min.y=aQ}if(aQ>aN.max.y){aN.max.y=aQ}}}}if(aK!=aT){aN.min.x*=(aT/aK);aN.max.x*=(aT/aK)}if(aO!=aL){aN.min.y*=(aT/aO);aN.max.y*=(aT/aO)}aJ=null;return aN}function o(i){return"'"+i.replace(/(\'|\")/g,"").replace(/\s*,\s*/g,"', '")+"'"}function ad(i,j,aI){aI=aI||C;if(aI.addEventListener){aI.addEventListener(i,j,false)}else{aI.attachEvent("on"+i,j)}}function a(i,j,aI){aI=aI||C;if(aI.removeEventListener){aI.removeEventListener(i,j)}else{aI.detachEvent("on"+i,j)}}function ax(aM,aI,aQ,aL){var aR=aL.imageScale,aO,aJ,aN,j,aK,aP;if(!aI.complete){return ad("load",function(){ax(aM,aI,aQ,aL)},aI)}if(!aM.complete){return ad("load",function(){ax(aM,aI,aQ,aL)},aM)}aI.width=aI.width;aI.height=aI.height;if(aR){aM.width=aI.width*aR;aM.height=aI.height*aR}aQ.iw=aM.width;aQ.ih=aM.height;if(aL.txtOpt){aJ=aM;aO=aL.zoomMax*aL.txtScale;aK=aQ.iw*aO;aP=aQ.ih*aO;if(aK<aI.naturalWidth||aP<aI.naturalHeight){aJ=ay(aM,aK,aP);if(aJ){aQ.fimage=aJ}}else{aK=aQ.iw;aP=aQ.ih;aO=1}if(parseFloat(aL.imageRadius)){aQ.image=aQ.fimage=aM=ar(aQ.image,aL.imageRadius,aK,aP,aO)}if(!aQ.HasText()){if(aL.shadow){aJ=Z(aQ.image,aK,aP,aO,aL.shadow,aL.shadowBlur,aL.shadowOffset);if(aJ){aQ.fimage=aJ.image;aQ.w=aJ.width;aQ.h=aJ.height}}if(aL.bgColour||aL.bgOutlineThickness){aN=aL.bgColour=="tag"?Y(aQ.a,"background-color"):aL.bgColour;j=aL.bgOutline=="tag"?Y(aQ.a,"color"):(aL.bgOutline||aL.textColour);aK=aQ.fimage.width;aP=aQ.fimage.height;if(aL.outlineMethod=="colour"){aJ=aD(aQ.fimage,aK,aP,aO,aN,aL.bgOutlineThickness,aQ.outline.colour,aL.padding,aL.bgRadius,1);if(aJ){aQ.oimage=aJ.image}}aJ=aD(aQ.fimage,aK,aP,aO,aN,aL.bgOutlineThickness,j,aL.padding,aL.bgRadius);if(aJ){aQ.fimage=aJ.image;aQ.w=aJ.width;aQ.h=aJ.height}}if(aL.outlineMethod=="size"){if(aL.outlineIncrease>0){aQ.iw+=2*aL.outlineIncrease;aQ.ih+=2*aL.outlineIncrease;aK=aO*aQ.iw;aP=aO*aQ.ih;aJ=ay(aQ.fimage,aK,aP);aQ.oimage=aJ;aQ.fimage=v(aQ.fimage,aQ.oimage.width,aQ.oimage.height)}else{aK=aO*(aQ.iw+(2*aL.outlineIncrease));aP=aO*(aQ.ih+(2*aL.outlineIncrease));aJ=ay(aQ.fimage,aK,aP);aQ.oimage=v(aJ,aQ.fimage.width,aQ.fimage.height)}}}}aQ.Init()}function Y(aJ,aI){var j=C.defaultView,i=aI.replace(/\-([a-z])/g,function(aK){return aK.charAt(1).toUpperCase()});return(j&&j.getComputedStyle&&j.getComputedStyle(aJ,null).getPropertyValue(aI))||(aJ.currentStyle&&aJ.currentStyle[i])}function u(j,aJ,aI){var i=1,aK;if(aJ){i=1*(j.getAttribute(aJ)||aI)}else{if(aK=Y(j,"font-size")){i=(aK.indexOf("px")>-1&&aK.replace("px","")*1)||(aK.indexOf("pt")>-1&&aK.replace("pt","")*1.25)||aK*3.3}}return i}function f(i){return i.target&&ai(i.target.id)?i.target.id:i.srcElement.parentNode.id}function S(aK,aL){var aJ,aI,i=parseInt(Y(aL,"width"))/aL.width,j=parseInt(Y(aL,"height"))/aL.height;if(ai(aK.offsetX)){aJ={x:aK.offsetX,y:aK.offsetY}}else{aI=ab(aL.id);if(ai(aK.changedTouches)){aK=aK.changedTouches[0]}if(aK.pageX){aJ={x:aK.pageX-aI.x,y:aK.pageY-aI.y}}}if(aJ&&i&&j){aJ.x/=i;aJ.y/=j}return aJ}function B(aI){var j=aI.target||aI.fromElement.parentNode,i=y.tc[j.id];if(i){i.mx=i.my=-1;i.UnFreeze();i.EndDrag()}}function af(aM){var aJ,aI=y,j,aL,aK=f(aM);for(aJ in aI.tc){j=aI.tc[aJ];if(j.tttimer){clearTimeout(j.tttimer);j.tttimer=null}}if(aK&&aI.tc[aK]){j=aI.tc[aK];if(aL=S(aM,j.canvas)){j.mx=aL.x;j.my=aL.y;j.Drag(aM,aL)}j.drawn=0}}function z(aJ){var j=y,i=C.addEventListener?0:1,aI=f(aJ);if(aI&&aJ.button==i&&j.tc[aI]){j.tc[aI].BeginDrag(aJ)}}function aF(aK){var aI=y,j=C.addEventListener?0:1,aJ=f(aK),i;if(aJ&&aK.button==j&&aI.tc[aJ]){i=aI.tc[aJ];af(aK);if(!i.EndDrag()&&!i.touchState){i.Clicked(aK)}}}function T(aJ){var j=f(aJ),i=(j&&y.tc[j]),aI;if(i&&aJ.changedTouches){if(aJ.touches.length==1&&i.touchState==0){i.touchState=1;i.BeginDrag(aJ);if(aI=S(aJ,i.canvas)){i.mx=aI.x;i.my=aI.y;i.drawn=0}}else{if(aJ.targetTouches.length==2&&i.pinchZoom){i.touchState=3;i.EndDrag();i.BeginPinch(aJ)}else{i.EndDrag();i.EndPinch();i.touchState=0}}}}function r(aI){var j=f(aI),i=(j&&y.tc[j]);if(i&&aI.changedTouches){switch(i.touchState){case 1:i.Draw();i.Clicked();break;case 2:i.EndDrag();break;case 3:i.EndPinch()}i.touchState=0}}function aA(aM){var aJ,aI=y,j,aL,aK=f(aM);for(aJ in aI.tc){j=aI.tc[aJ];if(j.tttimer){clearTimeout(j.tttimer);j.tttimer=null}}j=(aK&&aI.tc[aK]);if(j&&aM.changedTouches&&j.touchState){switch(j.touchState){case 1:case 2:if(aL=S(aM,j.canvas)){j.mx=aL.x;j.my=aL.y;if(j.Drag(aM,aL)){j.touchState=2}}break;case 3:j.Pinch(aM)}j.drawn=0}}function ag(aI){var i=y,j=f(aI);if(j&&i.tc[j]){aI.cancelBubble=true;aI.returnValue=false;aI.preventDefault&&aI.preventDefault();i.tc[j].Wheel((aI.wheelDelta||aI.detail)>0)}}function ac(aJ){var aI,j=y;clearTimeout(j.scrollTimer);for(aI in j.tc){j.tc[aI].Pause()}j.scrollTimer=setTimeout(function(){var aL,aK=y;for(aL in aK.tc){aK.tc[aL].Resume()}},j.scrollPause)}function O(){E(G())}function E(aJ){var j=y.tc,aI;y.NextFrame(y.interval);aJ=aJ||G();for(aI in j){j[aI].Draw(aJ)}}function ab(aI){var aL=C.getElementById(aI),i=aL.getBoundingClientRect(),aO=C.documentElement,aM=C.body,aN=window,aJ=aN.pageXOffset||aO.scrollLeft,aP=aN.pageYOffset||aO.scrollTop,aK=aO.clientLeft||aM.clientLeft,j=aO.clientTop||aM.clientTop;return{x:i.left+aJ-aK,y:i.top+aP-j}}function V(j,aJ,aK,aI){var i=j.radius*j.z1/(j.z1+j.z2+aJ.z);return{x:aJ.x*i*aK,y:aJ.y*i*aI,z:aJ.z,w:(j.z1-aJ.z)/j.z2}}function aC(i){this.e=i;this.br=0;this.line=[];this.text=[];this.original=i.innerText||i.textContent}aH=aC.prototype;aH.Empty=function(){for(var j=0;j<this.text.length;++j){if(this.text[j].length){return false}}return true};aH.Lines=function(aK){var aJ=aK?1:0,aL,j,aI;aK=aK||this.e;aL=aK.childNodes;j=aL.length;for(aI=0;aI<j;++aI){if(aL[aI].nodeName=="BR"){this.text.push(this.line.join(" "));this.br=1}else{if(aL[aI].nodeType==3){if(this.br){this.line=[aL[aI].nodeValue];this.br=0}else{this.line.push(aL[aI].nodeValue)}}else{this.Lines(aL[aI])}}}aJ||this.br||this.text.push(this.line.join(" "));return this.text};aH.SplitWidth=function(aI,aP,aM,aL){var aK,aJ,aO,aN=[];aP.font=aL+"px "+aM;for(aK=0;aK<this.text.length;++aK){aO=this.text[aK].split(/\s+/);this.line=[aO[0]];for(aJ=1;aJ<aO.length;++aJ){if(aP.measureText(this.line.join(" ")+" "+aO[aJ]).width>aI){aN.push(this.line.join(" "));this.line=[aO[aJ]]}else{this.line.push(aO[aJ])}}aN.push(this.line.join(" "))}return this.text=aN};function J(i,j){this.ts=null;this.tc=i;this.tag=j;this.x=this.y=this.w=this.h=this.sc=1;this.z=0;this.pulse=1;this.pulsate=i.pulsateTo<1;this.colour=i.outlineColour;this.adash=~~i.outlineDash;this.agap=~~i.outlineDashSpace||this.adash;this.aspeed=i.outlineDashSpeed*1;if(this.colour=="tag"){this.colour=Y(j.a,"color")}else{if(this.colour=="tagbg"){this.colour=Y(j.a,"background-color")}}this.Draw=this.pulsate?this.DrawPulsate:this.DrawSimple;this.radius=i.outlineRadius|0;this.SetMethod(i.outlineMethod)}x=J.prototype;x.SetMethod=function(aI){var j={block:["PreDraw","DrawBlock"],colour:["PreDraw","DrawColour"],outline:["PostDraw","DrawOutline"],classic:["LastDraw","DrawOutline"],size:["PreDraw","DrawSize"],none:["LastDraw"]},i=j[aI]||j.outline;if(aI=="none"){this.Draw=function(){return 1}}else{this.drawFunc=this[i[1]]}this[i[0]]=this.Draw};x.Update=function(aO,aN,aP,aK,aL,aM,aJ,i){var j=this.tc.outlineOffset,aI=2*j;this.x=aL*aO+aJ-j;this.y=aL*aN+i-j;this.w=aL*aP+aI;this.h=aL*aK+aI;this.sc=aL;this.z=aM};x.Ants=function(aN){if(!this.adash){return}var aK=this.adash,aM=this.agap,aQ=this.aspeed,j=aK+aM,aL=0,aJ=aK,i=aM,aP=0,aO=0,aI;if(aQ){aO=L(aQ)*(G()-this.ts)/50;if(aQ<0){aO=8640000-aO}aQ=~~aO%j}if(aQ){if(aK>=aQ){aL=aK-aQ;aJ=aQ}else{i=j-aQ;aP=aM-i}aI=[aL,i,aJ,aP]}else{aI=[aK,aM]}aN.setLineDash(aI)};x.DrawOutline=function(aM,i,aL,j,aI,aK){var aJ=aE(this.radius,aI/2,j/2);aM.strokeStyle=aK;this.Ants(aM);at(aM,i,aL,j,aI,aJ,true)};x.DrawSize=function(aP,aS,aQ,aT,aN,j,aU,aJ,aR){var aM=aU.w,aI=aU.h,aK,aL,aO;if(this.pulsate){if(aU.image){aO=(aU.image.height+this.tc.outlineIncrease)/aU.image.height}else{aO=aU.oscale}aL=aU.fimage||aU.image;aK=1+((aO-1)*(1-this.pulse));aU.h*=aK;aU.w*=aK}else{aL=aU.oimage}aU.alpha=1;aU.Draw(aP,aJ,aR,aL);aU.h=aI;aU.w=aM;return 1};x.DrawColour=function(aJ,aM,aK,aN,aI,i,aO,j,aL){if(aO.oimage){if(this.pulse<1){aO.alpha=1-au(this.pulse,2);aO.Draw(aJ,j,aL,aO.fimage);aO.alpha=this.pulse}else{aO.alpha=1}aO.Draw(aJ,j,aL,aO.oimage);return 1}return this[aO.image?"DrawColourImage":"DrawColourText"](aJ,aM,aK,aN,aI,i,aO,j,aL)};x.DrawColourText=function(aK,aN,aL,aO,aI,i,aP,j,aM){var aJ=aP.colour;aP.colour=i;aP.alpha=1;aP.Draw(aK,j,aM);aP.colour=aJ;return 1};x.DrawColourImage=function(aN,aQ,aO,aR,aM,i,aU,j,aP){var aS=aN.canvas,aK=~~s(aQ,0),aJ=~~s(aO,0),aL=aE(aS.width-aK,aR)+0.5|0,aT=aE(aS.height-aJ,aM)+0.5|0,aI;if(p){p.width=aL,p.height=aT}else{p=P(aL,aT)}if(!p){return this.SetMethod("outline")}aI=p.getContext("2d");aI.drawImage(aS,aK,aJ,aL,aT,0,0,aL,aT);aN.clearRect(aK,aJ,aL,aT);if(this.pulsate){aU.alpha=1-au(this.pulse,2)}else{aU.alpha=1}aU.Draw(aN,j,aP);aN.setTransform(1,0,0,1,0,0);aN.save();aN.beginPath();aN.rect(aK,aJ,aL,aT);aN.clip();aN.globalCompositeOperation="source-in";aN.fillStyle=i;aN.fillRect(aK,aJ,aL,aT);aN.restore();aN.globalAlpha=1;aN.globalCompositeOperation="destination-over";aN.drawImage(p,0,0,aL,aT,aK,aJ,aL,aT);aN.globalCompositeOperation="source-over";return 1};x.DrawBlock=function(aM,i,aL,j,aI,aK){var aJ=aE(this.radius,aI/2,j/2);aM.fillStyle=aK;at(aM,i,aL,j,aI,aJ)};x.DrawSimple=function(aM,i,j,aJ,aL,aK){var aI=this.tc;aM.setTransform(1,0,0,1,0,0);aM.strokeStyle=this.colour;aM.lineWidth=aI.outlineThickness;aM.shadowBlur=aM.shadowOffsetX=aM.shadowOffsetY=0;aM.globalAlpha=aK?aL:1;return this.drawFunc(aM,this.x,this.y,this.w,this.h,this.colour,i,j,aJ)};x.DrawPulsate=function(aM,i,j,aJ){var aK=G()-this.ts,aI=this.tc,aL=aI.pulsateTo+((1-aI.pulsateTo)*(0.5+(w(2*Math.PI*aK/(1000*aI.pulsateTime))/2)));this.pulse=aL=y.Smooth(1,aL);return this.DrawSimple(aM,i,j,aJ,aL,1)};x.Active=function(aJ,i,aI){var j=(i>=this.x&&aI>=this.y&&i<=this.x+this.w&&aI<=this.y+this.h);if(j){this.ts=this.ts||G()}else{this.ts=null}return j};x.PreDraw=x.PostDraw=x.LastDraw=aB;function e(aJ,aT,aP,aS,aQ,aK,aI,aM,aR,aL,aO,j,aN,i){this.tc=aJ;this.image=null;this.text=aT;this.text_original=i;this.line_widths=[];this.title=aP.title||null;this.a=aP;this.position=new ae(aS[0],aS[1],aS[2]);this.x=this.y=this.z=0;this.w=aQ;this.h=aK;this.colour=aI||aJ.textColour;this.bgColour=aM||aJ.bgColour;this.bgRadius=aR|0;this.bgOutline=aL||this.colour;this.bgOutlineThickness=aO|0;this.textFont=j||aJ.textFont;this.padding=aN|0;this.sc=this.alpha=1;this.weighted=!aJ.weight;this.outline=new J(aJ,this)}c=e.prototype;c.Init=function(j){var i=this.tc;this.textHeight=i.textHeight;if(this.HasText()){this.Measure(i.ctxt,i)}else{this.w=this.iw;this.h=this.ih}this.SetShadowColour=i.shadowAlpha?this.SetShadowColourAlpha:this.SetShadowColourFixed;this.SetDraw(i)};c.Draw=aB;c.HasText=function(){return this.text&&this.text[0].length>0};c.EqualTo=function(aI){var j=aI.getElementsByTagName("img");if(this.a.href!=aI.href){return 0}if(j.length){return this.image.src==j[0].src}return(aI.innerText||aI.textContent)==this.text_original};c.SetImage=function(j){this.image=this.fimage=j};c.SetDraw=function(i){this.Draw=this.fimage?(i.ie>7?this.DrawImageIE:this.DrawImage):this.DrawText;i.noSelect&&(this.CheckActive=aB)};c.MeasureText=function(aL){var aJ,aI=this.text.length,j=0,aK;for(aJ=0;aJ<aI;++aJ){this.line_widths[aJ]=aK=aL.measureText(this.text[aJ]).width;j=s(j,aK)}return j};c.Measure=function(aN,aQ){var aO=t(this.text,this.textFont,this.textHeight),aR,i,aK,j,aI,aM,aP,aJ,aL;aP=aO?aO.max.y+aO.min.y:this.textHeight;aN.font=this.font=this.textHeight+"px "+this.textFont;aM=this.MeasureText(aN);if(aQ.txtOpt){aR=aQ.txtScale;i=aR*this.textHeight;aK=i+"px "+this.textFont;j=[aR*aQ.shadowOffset[0],aR*aQ.shadowOffset[1]];aN.font=aK;aI=this.MeasureText(aN);aL=new g(this.text,aK,aI+aR,(aR*aP)+aR,aI,this.line_widths,aQ.textAlign,aQ.textVAlign,aR);if(this.image){aL.SetImage(this.image,this.iw,this.ih,aQ.imagePosition,aQ.imagePadding,aQ.imageAlign,aQ.imageVAlign,aQ.imageScale)}aJ=aL.Create(this.colour,this.bgColour,this.bgOutline,aR*this.bgOutlineThickness,aQ.shadow,aR*aQ.shadowBlur,j,aR*this.padding,aR*this.bgRadius);if(aQ.outlineMethod=="colour"){this.oimage=aL.Create(this.outline.colour,this.bgColour,this.outline.colour,aR*this.bgOutlineThickness,aQ.shadow,aR*aQ.shadowBlur,j,aR*this.padding,aR*this.bgRadius)}else{if(aQ.outlineMethod=="size"){aO=t(this.text,this.textFont,this.textHeight+aQ.outlineIncrease);i=aO.max.y+aO.min.y;aK=(aR*(this.textHeight+aQ.outlineIncrease))+"px "+this.textFont;aN.font=aK;aI=this.MeasureText(aN);aL=new g(this.text,aK,aI+aR,(aR*i)+aR,aI,this.line_widths,aQ.textAlign,aQ.textVAlign,aR);if(this.image){aL.SetImage(this.image,this.iw+aQ.outlineIncrease,this.ih+aQ.outlineIncrease,aQ.imagePosition,aQ.imagePadding,aQ.imageAlign,aQ.imageVAlign,aQ.imageScale)}this.oimage=aL.Create(this.colour,this.bgColour,this.bgOutline,aR*this.bgOutlineThickness,aQ.shadow,aR*aQ.shadowBlur,j,aR*this.padding,aR*this.bgRadius);this.oscale=this.oimage.width/aJ.width;if(aQ.outlineIncrease>0){aJ=v(aJ,this.oimage.width,this.oimage.height)}else{this.oimage=v(this.oimage,aJ.width,aJ.height)}}}if(aJ){this.fimage=aJ;aM=this.fimage.width/aR;aP=this.fimage.height/aR}this.SetDraw(aQ);aQ.txtOpt=!!this.fimage}this.h=aP;this.w=aM};c.SetFont=function(j,aJ,aI,i){this.textFont=j;this.colour=aJ;this.bgColour=aI;this.bgOutline=i;this.Measure(this.tc.ctxt,this.tc)};c.SetWeight=function(aI){var j=this.tc,aK=j.weightMode.split(/[, ]/),i,aJ,aL=aI.length;if(!this.HasText()){return}this.weighted=true;for(aJ=0;aJ<aL;++aJ){i=aK[aJ]||"size";if("both"==i){this.Weight(aI[aJ],j.ctxt,j,"size",j.min_weight[aJ],j.max_weight[aJ],aJ);this.Weight(aI[aJ],j.ctxt,j,"colour",j.min_weight[aJ],j.max_weight[aJ],aJ)}else{this.Weight(aI[aJ],j.ctxt,j,i,j.min_weight[aJ],j.max_weight[aJ],aJ)}}this.Measure(j.ctxt,j)};c.Weight=function(aI,aN,aJ,j,aM,aK,aL){aI=isNaN(aI)?1:aI;var i=(aI-aM)/(aK-aM);if("colour"==j){this.colour=k(aJ,i,aL)}else{if("bgcolour"==j){this.bgColour=k(aJ,i,aL)}else{if("bgoutline"==j){this.bgOutline=k(aJ,i,aL)}else{if("outline"==j){this.outline.colour=k(aJ,i,aL)}else{if("size"==j){if(aJ.weightSizeMin>0&&aJ.weightSizeMax>aJ.weightSizeMin){this.textHeight=aJ.weightSize*(aJ.weightSizeMin+(aJ.weightSizeMax-aJ.weightSizeMin)*i)}else{this.textHeight=s(1,aI*aJ.weightSize)}}}}}}};c.SetShadowColourFixed=function(aI,j,i){aI.shadowColor=j};c.SetShadowColourAlpha=function(aI,j,i){aI.shadowColor=U(j,i)};c.DrawText=function(aK,aN,aJ){var aO=this.tc,aM=this.x,aL=this.y,aP=this.sc,j,aI;aK.globalAlpha=this.alpha;aK.fillStyle=this.colour;aO.shadow&&this.SetShadowColour(aK,aO.shadow,this.alpha);aK.font=this.font;aM+=aN/aP;aL+=(aJ/aP)-(this.h/2);for(j=0;j<this.text.length;++j){aI=aM;if("right"==aO.textAlign){aI+=this.w/2-this.line_widths[j]}else{if("centre"==aO.textAlign){aI-=this.line_widths[j]/2}else{aI-=this.w/2}}aK.setTransform(aP,0,0,aP,aP*aI,aP*aL);aK.fillText(this.text[j],0,0);aL+=this.textHeight}};c.DrawImage=function(aK,aR,aJ,aM){var aO=this.x,aL=this.y,aS=this.sc,j=aM||this.fimage,aP=this.w,aI=this.h,aN=this.alpha,aQ=this.shadow;aK.globalAlpha=aN;aQ&&this.SetShadowColour(aK,aQ,aN);aO+=(aR/aS)-(aP/2);aL+=(aJ/aS)-(aI/2);aK.setTransform(aS,0,0,aS,aS*aO,aS*aL);aK.drawImage(j,0,0,aP,aI)};c.DrawImageIE=function(aK,aO,aJ){var j=this.fimage,aP=this.sc,aN=j.width=this.w*aP,aI=j.height=this.h*aP,aM=(this.x*aP)+aO-(aN/2),aL=(this.y*aP)+aJ-(aI/2);aK.setTransform(1,0,0,1,0,0);aK.globalAlpha=this.alpha;aK.drawImage(j,aM,aL)};c.Calc=function(i,aI){var j,aL=this.tc,aK=aL.minBrightness,aJ=aL.maxBrightness,aM=aL.max_radius;j=i.xform(this.position);this.xformed=j;j=V(aL,j,aL.stretchX,aL.stretchY);this.x=j.x;this.y=j.y;this.z=j.z;this.sc=j.w;this.alpha=aI*aw(aK+(aJ-aK)*(aM-this.z)/(2*aM),0,1);return this.xformed};c.UpdateActive=function(aN,aI,aL){var aK=this.outline,j=this.w,aJ=this.h,i=this.x-j/2,aM=this.y-aJ/2;aK.Update(i,aM,j,aJ,this.sc,this.z,aI,aL);return aK};c.CheckActive=function(aK,i,aJ){var j=this.tc,aI=this.UpdateActive(aK,i,aJ);return aI.Active(aK,j.mx,j.my)?aI:null};c.Clicked=function(aL){var j=this.a,aI=j.target,aJ=j.href,i;if(aI!=""&&aI!="_self"){if(self.frames[aI]){self.frames[aI].document.location=aJ}else{try{if(top.frames[aI]){top.frames[aI].document.location=aJ;return}}catch(aK){}window.open(aJ,aI)}return}if(C.createEvent){i=C.createEvent("MouseEvents");i.initMouseEvent("click",1,1,window,0,0,0,0,0,0,0,0,0,0,null);if(!j.dispatchEvent(i)){return}}else{if(j.fireEvent){if(!j.fireEvent("onclick")){return}}}C.location=aJ};function y(aO,j,aJ){var aI,aL,aN=C.getElementById(aO),aK=["id","class","innerHTML"],aM;if(!aN){throw 0}if(ai(window.G_vmlCanvasManager)){aN=window.G_vmlCanvasManager.initElement(aN);this.ie=parseFloat(navigator.appVersion.split("MSIE")[1])}if(aN&&(!aN.getContext||!aN.getContext("2d").fillText)){aL=C.createElement("DIV");for(aI=0;aI<aK.length;++aI){aL[aK[aI]]=aN[aK[aI]]}aN.parentNode.insertBefore(aL,aN);aN.parentNode.removeChild(aN);throw 0}for(aI in y.options){this[aI]=aJ&&ai(aJ[aI])?aJ[aI]:(ai(y[aI])?y[aI]:y.options[aI])}this.canvas=aN;this.ctxt=aN.getContext("2d");this.z1=250/s(this.depth,0.001);this.z2=this.z1/this.zoom;this.radius=aE(aN.height,aN.width)*0.0075;this.max_radius=100;this.max_weight=[];this.min_weight=[];this.textFont=this.textFont&&o(this.textFont);this.textHeight*=1;this.imageRadius=this.imageRadius.toString();this.pulsateTo=aw(this.pulsateTo,0,1);this.minBrightness=aw(this.minBrightness,0,1);this.maxBrightness=aw(this.maxBrightness,this.minBrightness,1);this.ctxt.textBaseline="top";this.lx=(this.lock+"").indexOf("x")+1;this.ly=(this.lock+"").indexOf("y")+1;this.frozen=this.dx=this.dy=this.fixedAnim=this.touchState=0;this.fixedAlpha=1;this.source=j||aO;this.repeatTags=aE(64,~~this.repeatTags);this.minTags=aE(200,~~this.minTags);if(~~this.scrollPause>0){y.scrollPause=~~this.scrollPause}else{this.scrollPause=0}if(this.minTags>0&&this.repeatTags<1&&(aI=this.GetTags().length)){this.repeatTags=aq(this.minTags/aI)-1}this.transform=R.Identity();this.startTime=this.time=G();this.mx=this.my=-1;this.centreImage&&ao(this);this.Animate=this.dragControl?this.AnimateDrag:this.AnimatePosition;this.animTiming=(typeof y[this.animTiming]=="function"?y[this.animTiming]:y.Smooth);if(this.shadowBlur||this.shadowOffset[0]||this.shadowOffset[1]){this.ctxt.shadowColor=this.shadow;this.shadow=this.ctxt.shadowColor;this.shadowAlpha=al()}else{delete this.shadow}this.Load();if(j&&this.hideTags){(function(i){if(y.loaded){i.HideTags()}else{ad("load",function(){i.HideTags()},window)}})(this)}this.yaw=this.initial?this.initial[0]*this.maxSpeed:0;this.pitch=this.initial?this.initial[1]*this.maxSpeed:0;if(this.tooltip){this.ctitle=aN.title;aN.title="";if(this.tooltip=="native"){this.Tooltip=this.TooltipNative}else{this.Tooltip=this.TooltipDiv;if(!this.ttdiv){this.ttdiv=C.createElement("div");this.ttdiv.className=this.tooltipClass;this.ttdiv.style.position="absolute";this.ttdiv.style.zIndex=aN.style.zIndex+1;ad("mouseover",function(i){i.target.style.display="none"},this.ttdiv);C.body.appendChild(this.ttdiv)}}}else{this.Tooltip=this.TooltipNone}if(!this.noMouse&&!b[aO]){b[aO]=[["mousemove",af],["mouseout",B],["mouseup",aF],["touchstart",T],["touchend",r],["touchcancel",r],["touchmove",aA]];if(this.dragControl){b[aO].push(["mousedown",z]);b[aO].push(["selectstart",aB])}if(this.wheelZoom){b[aO].push(["mousewheel",ag]);b[aO].push(["DOMMouseScroll",ag])}if(this.scrollPause){b[aO].push(["scroll",ac,window])}for(aI=0;aI<b[aO].length;++aI){aL=b[aO][aI];ad(aL[0],aL[1],aL[2]?aL[2]:aN)}}if(!y.started){aM=window.requestAnimationFrame=window.requestAnimationFrame||window.mozRequestAnimationFrame||window.webkitRequestAnimationFrame||window.msRequestAnimationFrame;y.NextFrame=aM?y.NextFrameRAF:y.NextFrameTimeout;y.interval=this.interval;y.NextFrame(this.interval);y.started=1}}Q=y.prototype;Q.SourceElements=function(){if(C.querySelectorAll){return C.querySelectorAll("#"+this.source)}return[C.getElementById(this.source)]};Q.HideTags=function(){var aI=this.SourceElements(),j;for(j=0;j<aI.length;++j){aI[j].style.display="none"}};Q.GetTags=function(){var aN=this.SourceElements(),aM,aJ=[],aL,aK,aI;for(aI=0;aI<=this.repeatTags;++aI){for(aL=0;aL<aN.length;++aL){aM=aN[aL].getElementsByTagName("a");for(aK=0;aK<aM.length;++aK){aJ.push(aM[aK])}}}return aJ};Q.Message=function(aN){var aP=[],aJ,j,aI=aN.split(""),aL,aO,aM,aK;for(aJ=0;aJ<aI.length;++aJ){if(aI[aJ]!=" "){j=aJ-aI.length/2;aL=C.createElement("A");aL.href="#";aL.innerText=aI[aJ];aM=100*ah(j/9);aK=-100*w(j/9);aO=new e(this,aI[aJ],aL,[aM,0,aK],2,18,"#000","#fff",0,0,0,"monospace",2,aI[aJ]);aO.Init();aP.push(aO)}}return aP};Q.CreateTag=function(aM){var aP,aK,aQ,aL,aO,aI,aN,aJ,j=[0,0,0];if("text"!=this.imageMode){aP=aM.getElementsByTagName("img");if(aP.length){aK=new Image;aK.src=aP[0].src;if(!this.imageMode){aQ=new e(this,"",aM,j,0,0);aQ.SetImage(aK);ax(aK,aP[0],aQ,this);return aQ}}}if("image"!=this.imageMode){aO=new aC(aM);aL=aO.Lines();if(!aO.Empty()){aI=this.textFont||o(Y(aM,"font-family"));if(this.splitWidth){aL=aO.SplitWidth(this.splitWidth,this.ctxt,aI,this.textHeight)}aN=this.bgColour=="tag"?Y(aM,"background-color"):this.bgColour;aJ=this.bgOutline=="tag"?Y(aM,"color"):this.bgOutline}else{aO=null}}if(aO||aK){aQ=new e(this,aL,aM,j,2,this.textHeight+2,this.textColour||Y(aM,"color"),aN,this.bgRadius,aJ,this.bgOutlineThickness,aI,this.padding,aO&&aO.original);if(aK){aQ.SetImage(aK);ax(aK,aP[0],aQ,this)}else{aQ.Init()}return aQ}};Q.UpdateTag=function(aI,i){var aL=this.textColour||Y(i,"color"),j=this.textFont||o(Y(i,"font-family")),aK=this.bgColour=="tag"?Y(i,"background-color"):this.bgColour,aJ=this.bgOutline=="tag"?Y(i,"color"):this.bgOutline;aI.a=i;aI.title=i.title;if(aI.colour!=aL||aI.textFont!=j||aI.bgColour!=aK||aI.bgOutline!=aJ){aI.SetFont(j,aL,aK,aJ)}};Q.Weight=function(aO){var aK=aO.length,aM,aI,aP,aL=[],j,aJ=this.weightFrom?this.weightFrom.split(/[, ]/):[null],aN=aJ.length;for(aI=0;aI<aK;++aI){aL[aI]=[];for(aP=0;aP<aN;++aP){aM=u(aO[aI].a,aJ[aP],this.textHeight);if(!this.max_weight[aP]||aM>this.max_weight[aP]){this.max_weight[aP]=aM}if(!this.min_weight[aP]||aM<this.min_weight[aP]){this.min_weight[aP]=aM}aL[aI][aP]=aM}}for(aP=0;aP<aN;++aP){if(this.max_weight[aP]>this.min_weight[aP]){j=1}}if(j){for(aI=0;aI<aK;++aI){aO[aI].SetWeight(aL[aI])}}};Q.Load=function(){var aS=this.GetTags(),aN=[],aQ,aR,aM,aJ,aI,j,aK,aP,aL=[],aO={sphere:q,vcylinder:am,hcylinder:av,vring:d,hring:n};if(aS.length){aL.length=aS.length;for(aP=0;aP<aS.length;++aP){aL[aP]=aP}this.shuffleTags&&an(aL);aJ=100*this.radiusX;aI=100*this.radiusY;j=100*this.radiusZ;this.max_radius=s(aJ,s(aI,j));for(aP=0;aP<aS.length;++aP){aR=this.CreateTag(aS[aL[aP]]);if(aR){aN.push(aR)}}this.weight&&this.Weight(aN,true);if(this.shapeArgs){this.shapeArgs[0]=aN.length}else{aM=this.shape.toString().split(/[(),]/);aQ=aM.shift();if(typeof window[aQ]==="function"){this.shape=window[aQ]}else{this.shape=aO[aQ]||aO.sphere}this.shapeArgs=[aN.length,aJ,aI,j].concat(aM)}aK=this.shape.apply(this,this.shapeArgs);this.listLength=aN.length;for(aP=0;aP<aN.length;++aP){aN[aP].position=new ae(aK[aP][0],aK[aP][1],aK[aP][2])}}if(this.noTagsMessage&&!aN.length){aP=(this.imageMode&&this.imageMode!="both"?this.imageMode+" ":"");aN=this.Message("No "+aP+"tags")}this.taglist=aN};Q.Update=function(){var aR=this.GetTags(),aQ=[],aL=this.taglist,aS,aP=[],aN=[],aJ,aO,aI,aM,aK;if(!this.shapeArgs){return this.Load()}if(aR.length){aI=this.listLength=aR.length;aO=aL.length;for(aM=0;aM<aO;++aM){aQ.push(aL[aM]);aN.push(aM)}for(aM=0;aM<aI;++aM){for(aK=0,aS=0;aK<aO;++aK){if(aL[aK].EqualTo(aR[aM])){this.UpdateTag(aQ[aK],aR[aM]);aS=aN[aK]=-1}}if(!aS){aP.push(aM)}}for(aM=0,aK=0;aM<aO;++aM){if(aN[aK]==-1){aN.splice(aK,1)}else{++aK}}if(aN.length){an(aN);while(aN.length&&aP.length){aM=aN.shift();aK=aP.shift();aQ[aM]=this.CreateTag(aR[aK])}aN.sort(function(j,i){return j-i});while(aN.length){aQ.splice(aN.pop(),1)}}aK=aQ.length/(aP.length+1);aM=0;while(aP.length){aQ.splice(aq(++aM*aK),0,this.CreateTag(aR[aP.shift()]))}this.shapeArgs[0]=aI=aQ.length;aJ=this.shape.apply(this,this.shapeArgs);for(aM=0;aM<aI;++aM){aQ[aM].position=new ae(aJ[aM][0],aJ[aM][1],aJ[aM][2])}this.weight&&this.Weight(aQ)}this.taglist=aQ};Q.SetShadow=function(i){i.shadowBlur=this.shadowBlur;i.shadowOffsetX=this.shadowOffset[0];i.shadowOffsetY=this.shadowOffset[1]};Q.Draw=function(aS){if(this.paused){return}var aM=this.canvas,aK=aM.width,aR=aM.height,aU=0,aJ=(aS-this.time)*y.interval/1000,aQ=aK/2+this.offsetX,aP=aR/2+this.offsetY,aY=this.ctxt,aO,aZ,aW,aI=-1,aL=this.taglist,aV=aL.length,j=this.frontSelect,aT=(this.centreFunc==aB),aN;this.time=aS;if(this.frozen&&this.drawn){return this.Animate(aK,aR,aJ)}aN=this.AnimateFixed();aY.setTransform(1,0,0,1,0,0);for(aW=0;aW<aV;++aW){aL[aW].Calc(this.transform,this.fixedAlpha)}aL=A(aL,function(a0,i){return i.z-a0.z});if(aN&&this.fixedAnim.active){aO=this.fixedAnim.tag.UpdateActive(aY,aQ,aP)}else{this.active=null;for(aW=0;aW<aV;++aW){aZ=this.mx>=0&&this.my>=0&&this.taglist[aW].CheckActive(aY,aQ,aP);if(aZ&&aZ.sc>aU&&(!j||aZ.z<=0)){aO=aZ;aI=aW;aO.tag=this.taglist[aW];aU=aZ.sc}}this.active=aO}this.txtOpt||(this.shadow&&this.SetShadow(aY));aY.clearRect(0,0,aK,aR);for(aW=0;aW<aV;++aW){if(!aT&&aL[aW].z<=0){try{this.centreFunc(aY,aK,aR,aQ,aP)}catch(aX){alert(aX);this.centreFunc=aB}aT=true}if(!(aO&&aO.tag==aL[aW]&&aO.PreDraw(aY,aL[aW],aQ,aP))){aL[aW].Draw(aY,aQ,aP)}aO&&aO.tag==aL[aW]&&aO.PostDraw(aY)}if(this.freezeActive&&aO){this.Freeze()}else{this.UnFreeze();this.drawn=(aV==this.listLength)}if(this.fixedCallback){this.fixedCallback(this,this.fixedCallbackTag);this.fixedCallback=null}aN||this.Animate(aK,aR,aJ);aO&&aO.LastDraw(aY);aM.style.cursor=aO?this.activeCursor:"";this.Tooltip(aO,this.taglist[aI])};Q.TooltipNone=function(){};Q.TooltipNative=function(j,i){if(j){this.canvas.title=i&&i.title?i.title:""}else{this.canvas.title=this.ctitle}};Q.SetTTDiv=function(aJ,j){var i=this,aI=i.ttdiv.style;if(aJ!=i.ttdiv.innerHTML){aI.display="none"}i.ttdiv.innerHTML=aJ;j&&(j.title=i.ttdiv.innerHTML);if(aI.display=="none"&&!i.tttimer){i.tttimer=setTimeout(function(){var aK=ab(i.canvas.id);aI.display="block";aI.left=aK.x+i.mx+"px";aI.top=aK.y+i.my+24+"px";i.tttimer=null},i.tooltipDelay)}};Q.TooltipDiv=function(j,i){if(j&&i&&i.title){this.SetTTDiv(i.title,i)}else{if(!j&&this.mx!=-1&&this.my!=-1&&this.ctitle.length){this.SetTTDiv(this.ctitle)}else{this.ttdiv.style.display="none"}}};Q.Transform=function(aL,i,aN){if(i||aN){var j=ah(i),aM=w(i),aO=ah(aN),aK=w(aN),aI=new R([aK,0,aO,0,1,0,-aO,0,aK]),aJ=new R([1,0,0,0,aM,-j,0,j,aM]);aL.transform=aL.transform.mul(aI.mul(aJ))}};Q.AnimateFixed=function(){var aI,j,aK,i,aJ;if(this.fadeIn){j=G()-this.startTime;if(j>=this.fadeIn){this.fadeIn=0;this.fixedAlpha=1}else{this.fixedAlpha=j/this.fadeIn}}if(this.fixedAnim){if(!this.fixedAnim.transform){this.fixedAnim.transform=this.transform}aI=this.fixedAnim,j=G()-aI.t0,aK=aI.angle,i,aJ=this.animTiming(aI.t,j);this.transform=aI.transform;if(j>=aI.t){this.fixedCallbackTag=aI.tag;this.fixedCallback=aI.cb;this.fixedAnim=this.yaw=this.pitch=0}else{aK*=aJ}i=R.Rotation(aK,aI.axis);this.transform=this.transform.mul(i);return(this.fixedAnim!=0)}return false};Q.AnimatePosition=function(aI,aL,aJ){var j=this,i=j.mx,aN=j.my,aK,aM;if(!j.frozen&&i>=0&&aN>=0&&i<aI&&aN<aL){aK=j.maxSpeed,aM=j.reverse?-1:1;j.lx||(j.yaw=((i*2*aK/aI)-aK)*aM*aJ);j.ly||(j.pitch=((aN*2*aK/aL)-aK)*-aM*aJ);j.initial=null}else{if(!j.initial){if(j.frozen&&!j.freezeDecel){j.yaw=j.pitch=0}else{j.Decel(j)}}}this.Transform(j,j.pitch,j.yaw)};Q.AnimateDrag=function(j,aK,aJ){var i=this,aI=100*aJ*i.maxSpeed/i.max_radius/i.zoom;if(i.dx||i.dy){i.lx||(i.yaw=i.dx*aI/i.stretchX);i.ly||(i.pitch=i.dy*-aI/i.stretchY);i.dx=i.dy=0;i.initial=null}else{if(!i.initial){i.Decel(i)}}this.Transform(i,i.pitch,i.yaw)};Q.Freeze=function(){if(!this.frozen){this.preFreeze=[this.yaw,this.pitch];this.frozen=1;this.drawn=0}};Q.UnFreeze=function(){if(this.frozen){this.yaw=this.preFreeze[0];this.pitch=this.preFreeze[1];this.frozen=0}};Q.Decel=function(i){var aI=i.minSpeed,aJ=L(i.yaw),j=L(i.pitch);if(!i.lx&&aJ>aI){i.yaw=aJ>i.z0?i.yaw*i.decel:0}if(!i.ly&&j>aI){i.pitch=j>i.z0?i.pitch*i.decel:0}};Q.Zoom=function(i){this.z2=this.z1*(1/i);this.drawn=0};Q.Clicked=function(aI){var i=this.active;try{if(i&&i.tag){if(this.clickToFront===false||this.clickToFront===null){i.tag.Clicked(aI)}else{this.TagToFront(i.tag,this.clickToFront,function(){i.tag.Clicked(aI)},true)}}}catch(j){}};Q.Wheel=function(j){var aI=this.zoom+this.zoomStep*(j?1:-1);this.zoom=aE(this.zoomMax,s(this.zoomMin,aI));this.Zoom(this.zoom)};Q.BeginDrag=function(i){this.down=S(i,this.canvas);i.cancelBubble=true;i.returnValue=false;i.preventDefault&&i.preventDefault()};Q.Drag=function(aK,aJ){if(this.dragControl&&this.down){var aI=this.dragThreshold*this.dragThreshold,j=aJ.x-this.down.x,i=aJ.y-this.down.y;if(this.dragging||j*j+i*i>aI){this.dx=j;this.dy=i;this.dragging=1;this.down=aJ}}return this.dragging};Q.EndDrag=function(){var i=this.dragging;this.dragging=this.down=null;return i};function D(aI){var j=aI.targetTouches[0],i=aI.targetTouches[1];return F(au(i.pageX-j.pageX,2)+au(i.pageY-j.pageY,2))}Q.BeginPinch=function(i){this.pinched=[D(i),this.zoom];i.preventDefault&&i.preventDefault()};Q.Pinch=function(j){var aJ,aI,i=this.pinched;if(!i){return}aI=D(j);aJ=i[1]*aI/i[0];this.zoom=aE(this.zoomMax,s(this.zoomMin,aJ));this.Zoom(this.zoom)};Q.EndPinch=function(i){this.pinched=null};Q.Pause=function(){this.paused=true};Q.Resume=function(){this.paused=false};Q.SetSpeed=function(j){this.initial=j;this.yaw=j[0]*this.maxSpeed;this.pitch=j[1]*this.maxSpeed};Q.FindTag=function(aI){if(!ai(aI)){return null}ai(aI.index)&&(aI=aI.index);if(!I(aI)){return this.taglist[aI]}var aJ,aK,j;if(ai(aI.id)){aJ="id",aK=aI.id}else{if(ai(aI.text)){aJ="innerText",aK=aI.text}}for(j=0;j<this.taglist.length;++j){if(this.taglist[j].a[aJ]==aK){return this.taglist[j]}}};Q.RotateTag=function(aQ,aJ,aP,i,aN,aI){var aO=aQ.Calc(this.transform,1),aL=new ae(aO.x,aO.y,aO.z),aK=aj(aP,aJ),j=aL.angle(aK),aM=aL.cross(aK).unit();if(j==0){this.fixedCallbackTag=aQ;this.fixedCallback=aN}else{this.fixedAnim={angle:-j,axis:aM,t:i,t0:G(),cb:aN,tag:aQ,active:aI}}};Q.TagToFront=function(i,aI,aJ,j){this.RotateTag(i,0,0,aI,aJ,j)};y.Start=function(aI,i,j){y.Delete(aI);y.tc[aI]=new y(aI,i,j)};function az(i,j){y.tc[j]&&y.tc[j][i]()}y.Linear=function(i,j){return j/i};y.Smooth=function(i,j){return 0.5-w(j*Math.PI/i)/2};y.Pause=function(i){az("Pause",i)};y.Resume=function(i){az("Resume",i)};y.Reload=function(i){az("Load",i)};y.Update=function(i){az("Update",i)};y.SetSpeed=function(j,i){if(I(i)&&y.tc[j]&&!isNaN(i[0])&&!isNaN(i[1])){y.tc[j].SetSpeed(i);return true}return false};y.TagToFront=function(j,i){if(!I(i)){return false}i.lat=i.lng=0;return y.RotateTag(j,i)};y.RotateTag=function(aI,i){if(I(i)&&y.tc[aI]){if(isNaN(i.time)){i.time=500}var j=y.tc[aI].FindTag(i);if(j){y.tc[aI].RotateTag(j,i.lat,i.lng,i.time,i.callback,i.active);return true}}return false};y.Delete=function(aJ){var j,aI;if(b[aJ]){aI=C.getElementById(aJ);if(aI){for(j=0;j<b[aJ].length;++j){a(b[aJ][j][0],b[aJ][j][1],aI)}}}delete b[aJ];delete y.tc[aJ]};y.NextFrameRAF=function(){requestAnimationFrame(E)};y.NextFrameTimeout=function(i){setTimeout(O,i)};y.tc={};y.options={z1:20000,z2:20000,z0:0.0002,freezeActive:false,freezeDecel:false,activeCursor:"pointer",pulsateTo:1,pulsateTime:3,reverse:false,depth:0.5,maxSpeed:0.05,minSpeed:0,decel:0.95,interval:20,minBrightness:0.1,maxBrightness:1,outlineColour:"#ffff99",outlineThickness:2,outlineOffset:5,outlineMethod:"outline",outlineRadius:0,textColour:"#ff99ff",textHeight:15,textFont:"Helvetica, Arial, sans-serif",shadow:"#000",shadowBlur:0,shadowOffset:[0,0],initial:null,hideTags:true,zoom:1,weight:false,weightMode:"size",weightFrom:null,weightSize:1,weightSizeMin:null,weightSizeMax:null,weightGradient:{0:"#f00",0.33:"#ff0",0.66:"#0f0",1:"#00f"},txtOpt:true,txtScale:2,frontSelect:false,wheelZoom:true,zoomMin:0.3,zoomMax:3,zoomStep:0.05,shape:"sphere",lock:null,tooltip:null,tooltipDelay:300,tooltipClass:"tctooltip",radiusX:1,radiusY:1,radiusZ:1,stretchX:1,stretchY:1,offsetX:0,offsetY:0,shuffleTags:false,noSelect:false,noMouse:false,imageScale:1,paused:false,dragControl:false,dragThreshold:4,centreFunc:aB,splitWidth:0,animTiming:"Smooth",clickToFront:false,fadeIn:0,padding:0,bgColour:null,bgRadius:0,bgOutline:null,bgOutlineThickness:0,outlineIncrease:4,textAlign:"centre",textVAlign:"middle",imageMode:null,imagePosition:null,imagePadding:2,imageAlign:"centre",imageVAlign:"middle",noTagsMessage:true,centreImage:null,pinchZoom:false,repeatTags:0,minTags:0,imageRadius:0,scrollPause:false,outlineDash:0,outlineDashSpace:0,outlineDashSpeed:1};for(M in y.options){y[M]=y.options[M]}window.TagCanvas=y;jQuery.fn.tagcanvas=function(j,i){var aI={pause:function(){ap(this).each(function(){az("Pause",ap(this)[0].id)})},resume:function(){ap(this).each(function(){az("Resume",ap(this)[0].id)})},reload:function(){ap(this).each(function(){az("Load",ap(this)[0].id)})},update:function(){ap(this).each(function(){az("Update",ap(this)[0].id)})},tagtofront:function(){ap(this).each(function(){y.TagToFront(ap(this)[0].id,i)})},rotatetag:function(){ap(this).each(function(){y.RotateTag(ap(this)[0].id,i)})},"delete":function(){ap(this).each(function(){y.Delete(ap(this)[0].id)})},setspeed:function(){ap(this).each(function(){y.SetSpeed(ap(this)[0].id,i)})}};if(typeof j=="string"&&aI[j]){aI[j].apply(this);return this}else{y.jquery=1;ap(this).each(function(){y.Start(ap(this)[0].id,i,j)});return y.started}};ad("load",function(){y.loaded=1},window)})(jQuery);
// ===================================================================================================
// ===================================================================================================
// ===================================================================================================
