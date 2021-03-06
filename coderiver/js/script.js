"use strict";

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/*
     _ _      _       _
 ___| (_) ___| | __  (_)___
/ __| | |/ __| |/ /  | / __|
\__ \ | | (__|   < _ | \__ \
|___/_|_|\___|_|\_(_)/ |___/
                   |__/

 Version: 1.9.0
  Author: Ken Wheeler
 Website: http://kenwheeler.github.io
    Docs: http://kenwheeler.github.io/slick
    Repo: http://github.com/kenwheeler/slick
  Issues: http://github.com/kenwheeler/slick/issues

 */
(function (i) {
  "use strict";

  "function" == typeof define && define.amd ? define(["jquery"], i) : "undefined" != typeof exports ? module.exports = i(require("jquery")) : i(jQuery);
})(function (i) {
  "use strict";

  var e = window.Slick || {};
  e = function () {
    function e(e, o) {
      var s,
          n = this;
      n.defaults = {
        accessibility: !0,
        adaptiveHeight: !1,
        appendArrows: i(e),
        appendDots: i(e),
        arrows: !0,
        asNavFor: null,
        prevArrow: '<button class="slick-prev" aria-label="Previous" type="button">Previous</button>',
        nextArrow: '<button class="slick-next" aria-label="Next" type="button">Next</button>',
        autoplay: !1,
        autoplaySpeed: 3e3,
        centerMode: !1,
        centerPadding: "50px",
        cssEase: "ease",
        customPaging: function customPaging(e, t) {
          return i('<button type="button" />').text(t + 1);
        },
        dots: !1,
        dotsClass: "slick-dots",
        draggable: !0,
        easing: "linear",
        edgeFriction: .35,
        fade: !1,
        focusOnSelect: !1,
        focusOnChange: !1,
        infinite: !0,
        initialSlide: 0,
        lazyLoad: "ondemand",
        mobileFirst: !1,
        pauseOnHover: !0,
        pauseOnFocus: !0,
        pauseOnDotsHover: !1,
        respondTo: "window",
        responsive: null,
        rows: 1,
        rtl: !1,
        slide: "",
        slidesPerRow: 1,
        slidesToShow: 1,
        slidesToScroll: 1,
        speed: 500,
        swipe: !0,
        swipeToSlide: !1,
        touchMove: !0,
        touchThreshold: 5,
        useCSS: !0,
        useTransform: !0,
        variableWidth: !1,
        vertical: !1,
        verticalSwiping: !1,
        waitForAnimate: !0,
        zIndex: 1e3
      }, n.initials = {
        animating: !1,
        dragging: !1,
        autoPlayTimer: null,
        currentDirection: 0,
        currentLeft: null,
        currentSlide: 0,
        direction: 1,
        $dots: null,
        listWidth: null,
        listHeight: null,
        loadIndex: 0,
        $nextArrow: null,
        $prevArrow: null,
        scrolling: !1,
        slideCount: null,
        slideWidth: null,
        $slideTrack: null,
        $slides: null,
        sliding: !1,
        slideOffset: 0,
        swipeLeft: null,
        swiping: !1,
        $list: null,
        touchObject: {},
        transformsEnabled: !1,
        unslicked: !1
      }, i.extend(n, n.initials), n.activeBreakpoint = null, n.animType = null, n.animProp = null, n.breakpoints = [], n.breakpointSettings = [], n.cssTransitions = !1, n.focussed = !1, n.interrupted = !1, n.hidden = "hidden", n.paused = !0, n.positionProp = null, n.respondTo = null, n.rowCount = 1, n.shouldClick = !0, n.$slider = i(e), n.$slidesCache = null, n.transformType = null, n.transitionType = null, n.visibilityChange = "visibilitychange", n.windowWidth = 0, n.windowTimer = null, s = i(e).data("slick") || {}, n.options = i.extend({}, n.defaults, o, s), n.currentSlide = n.options.initialSlide, n.originalSettings = n.options, "undefined" != typeof document.mozHidden ? (n.hidden = "mozHidden", n.visibilityChange = "mozvisibilitychange") : "undefined" != typeof document.webkitHidden && (n.hidden = "webkitHidden", n.visibilityChange = "webkitvisibilitychange"), n.autoPlay = i.proxy(n.autoPlay, n), n.autoPlayClear = i.proxy(n.autoPlayClear, n), n.autoPlayIterator = i.proxy(n.autoPlayIterator, n), n.changeSlide = i.proxy(n.changeSlide, n), n.clickHandler = i.proxy(n.clickHandler, n), n.selectHandler = i.proxy(n.selectHandler, n), n.setPosition = i.proxy(n.setPosition, n), n.swipeHandler = i.proxy(n.swipeHandler, n), n.dragHandler = i.proxy(n.dragHandler, n), n.keyHandler = i.proxy(n.keyHandler, n), n.instanceUid = t++, n.htmlExpr = /^(?:\s*(<[\w\W]+>)[^>]*)$/, n.registerBreakpoints(), n.init(!0);
    }

    var t = 0;
    return e;
  }(), e.prototype.activateADA = function () {
    var i = this;
    i.$slideTrack.find(".slick-active").attr({
      "aria-hidden": "false"
    }).find("a, input, button, select").attr({
      tabindex: "0"
    });
  }, e.prototype.addSlide = e.prototype.slickAdd = function (e, t, o) {
    var s = this;
    if ("boolean" == typeof t) o = t, t = null;else if (t < 0 || t >= s.slideCount) return !1;
    s.unload(), "number" == typeof t ? 0 === t && 0 === s.$slides.length ? i(e).appendTo(s.$slideTrack) : o ? i(e).insertBefore(s.$slides.eq(t)) : i(e).insertAfter(s.$slides.eq(t)) : o === !0 ? i(e).prependTo(s.$slideTrack) : i(e).appendTo(s.$slideTrack), s.$slides = s.$slideTrack.children(this.options.slide), s.$slideTrack.children(this.options.slide).detach(), s.$slideTrack.append(s.$slides), s.$slides.each(function (e, t) {
      i(t).attr("data-slick-index", e);
    }), s.$slidesCache = s.$slides, s.reinit();
  }, e.prototype.animateHeight = function () {
    var i = this;

    if (1 === i.options.slidesToShow && i.options.adaptiveHeight === !0 && i.options.vertical === !1) {
      var e = i.$slides.eq(i.currentSlide).outerHeight(!0);
      i.$list.animate({
        height: e
      }, i.options.speed);
    }
  }, e.prototype.animateSlide = function (e, t) {
    var o = {},
        s = this;
    s.animateHeight(), s.options.rtl === !0 && s.options.vertical === !1 && (e = -e), s.transformsEnabled === !1 ? s.options.vertical === !1 ? s.$slideTrack.animate({
      left: e
    }, s.options.speed, s.options.easing, t) : s.$slideTrack.animate({
      top: e
    }, s.options.speed, s.options.easing, t) : s.cssTransitions === !1 ? (s.options.rtl === !0 && (s.currentLeft = -s.currentLeft), i({
      animStart: s.currentLeft
    }).animate({
      animStart: e
    }, {
      duration: s.options.speed,
      easing: s.options.easing,
      step: function step(i) {
        i = Math.ceil(i), s.options.vertical === !1 ? (o[s.animType] = "translate(" + i + "px, 0px)", s.$slideTrack.css(o)) : (o[s.animType] = "translate(0px," + i + "px)", s.$slideTrack.css(o));
      },
      complete: function complete() {
        t && t.call();
      }
    })) : (s.applyTransition(), e = Math.ceil(e), s.options.vertical === !1 ? o[s.animType] = "translate3d(" + e + "px, 0px, 0px)" : o[s.animType] = "translate3d(0px," + e + "px, 0px)", s.$slideTrack.css(o), t && setTimeout(function () {
      s.disableTransition(), t.call();
    }, s.options.speed));
  }, e.prototype.getNavTarget = function () {
    var e = this,
        t = e.options.asNavFor;
    return t && null !== t && (t = i(t).not(e.$slider)), t;
  }, e.prototype.asNavFor = function (e) {
    var t = this,
        o = t.getNavTarget();
    null !== o && "object" == _typeof(o) && o.each(function () {
      var t = i(this).slick("getSlick");
      t.unslicked || t.slideHandler(e, !0);
    });
  }, e.prototype.applyTransition = function (i) {
    var e = this,
        t = {};
    e.options.fade === !1 ? t[e.transitionType] = e.transformType + " " + e.options.speed + "ms " + e.options.cssEase : t[e.transitionType] = "opacity " + e.options.speed + "ms " + e.options.cssEase, e.options.fade === !1 ? e.$slideTrack.css(t) : e.$slides.eq(i).css(t);
  }, e.prototype.autoPlay = function () {
    var i = this;
    i.autoPlayClear(), i.slideCount > i.options.slidesToShow && (i.autoPlayTimer = setInterval(i.autoPlayIterator, i.options.autoplaySpeed));
  }, e.prototype.autoPlayClear = function () {
    var i = this;
    i.autoPlayTimer && clearInterval(i.autoPlayTimer);
  }, e.prototype.autoPlayIterator = function () {
    var i = this,
        e = i.currentSlide + i.options.slidesToScroll;
    i.paused || i.interrupted || i.focussed || (i.options.infinite === !1 && (1 === i.direction && i.currentSlide + 1 === i.slideCount - 1 ? i.direction = 0 : 0 === i.direction && (e = i.currentSlide - i.options.slidesToScroll, i.currentSlide - 1 === 0 && (i.direction = 1))), i.slideHandler(e));
  }, e.prototype.buildArrows = function () {
    var e = this;
    e.options.arrows === !0 && (e.$prevArrow = i(e.options.prevArrow).addClass("slick-arrow"), e.$nextArrow = i(e.options.nextArrow).addClass("slick-arrow"), e.slideCount > e.options.slidesToShow ? (e.$prevArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"), e.$nextArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"), e.htmlExpr.test(e.options.prevArrow) && e.$prevArrow.prependTo(e.options.appendArrows), e.htmlExpr.test(e.options.nextArrow) && e.$nextArrow.appendTo(e.options.appendArrows), e.options.infinite !== !0 && e.$prevArrow.addClass("slick-disabled").attr("aria-disabled", "true")) : e.$prevArrow.add(e.$nextArrow).addClass("slick-hidden").attr({
      "aria-disabled": "true",
      tabindex: "-1"
    }));
  }, e.prototype.buildDots = function () {
    var e,
        t,
        o = this;

    if (o.options.dots === !0 && o.slideCount > o.options.slidesToShow) {
      for (o.$slider.addClass("slick-dotted"), t = i("<ul />").addClass(o.options.dotsClass), e = 0; e <= o.getDotCount(); e += 1) {
        t.append(i("<li />").append(o.options.customPaging.call(this, o, e)));
      }

      o.$dots = t.appendTo(o.options.appendDots), o.$dots.find("li").first().addClass("slick-active");
    }
  }, e.prototype.buildOut = function () {
    var e = this;
    e.$slides = e.$slider.children(e.options.slide + ":not(.slick-cloned)").addClass("slick-slide"), e.slideCount = e.$slides.length, e.$slides.each(function (e, t) {
      i(t).attr("data-slick-index", e).data("originalStyling", i(t).attr("style") || "");
    }), e.$slider.addClass("slick-slider"), e.$slideTrack = 0 === e.slideCount ? i('<div class="slick-track"/>').appendTo(e.$slider) : e.$slides.wrapAll('<div class="slick-track"/>').parent(), e.$list = e.$slideTrack.wrap('<div class="slick-list"/>').parent(), e.$slideTrack.css("opacity", 0), e.options.centerMode !== !0 && e.options.swipeToSlide !== !0 || (e.options.slidesToScroll = 1), i("img[data-lazy]", e.$slider).not("[src]").addClass("slick-loading"), e.setupInfinite(), e.buildArrows(), e.buildDots(), e.updateDots(), e.setSlideClasses("number" == typeof e.currentSlide ? e.currentSlide : 0), e.options.draggable === !0 && e.$list.addClass("draggable");
  }, e.prototype.buildRows = function () {
    var i,
        e,
        t,
        o,
        s,
        n,
        r,
        l = this;

    if (o = document.createDocumentFragment(), n = l.$slider.children(), l.options.rows > 0) {
      for (r = l.options.slidesPerRow * l.options.rows, s = Math.ceil(n.length / r), i = 0; i < s; i++) {
        var d = document.createElement("div");

        for (e = 0; e < l.options.rows; e++) {
          var a = document.createElement("div");

          for (t = 0; t < l.options.slidesPerRow; t++) {
            var c = i * r + (e * l.options.slidesPerRow + t);
            n.get(c) && a.appendChild(n.get(c));
          }

          d.appendChild(a);
        }

        o.appendChild(d);
      }

      l.$slider.empty().append(o), l.$slider.children().children().children().css({
        width: 100 / l.options.slidesPerRow + "%",
        display: "inline-block"
      });
    }
  }, e.prototype.checkResponsive = function (e, t) {
    var o,
        s,
        n,
        r = this,
        l = !1,
        d = r.$slider.width(),
        a = window.innerWidth || i(window).width();

    if ("window" === r.respondTo ? n = a : "slider" === r.respondTo ? n = d : "min" === r.respondTo && (n = Math.min(a, d)), r.options.responsive && r.options.responsive.length && null !== r.options.responsive) {
      s = null;

      for (o in r.breakpoints) {
        r.breakpoints.hasOwnProperty(o) && (r.originalSettings.mobileFirst === !1 ? n < r.breakpoints[o] && (s = r.breakpoints[o]) : n > r.breakpoints[o] && (s = r.breakpoints[o]));
      }

      null !== s ? null !== r.activeBreakpoint ? (s !== r.activeBreakpoint || t) && (r.activeBreakpoint = s, "unslick" === r.breakpointSettings[s] ? r.unslick(s) : (r.options = i.extend({}, r.originalSettings, r.breakpointSettings[s]), e === !0 && (r.currentSlide = r.options.initialSlide), r.refresh(e)), l = s) : (r.activeBreakpoint = s, "unslick" === r.breakpointSettings[s] ? r.unslick(s) : (r.options = i.extend({}, r.originalSettings, r.breakpointSettings[s]), e === !0 && (r.currentSlide = r.options.initialSlide), r.refresh(e)), l = s) : null !== r.activeBreakpoint && (r.activeBreakpoint = null, r.options = r.originalSettings, e === !0 && (r.currentSlide = r.options.initialSlide), r.refresh(e), l = s), e || l === !1 || r.$slider.trigger("breakpoint", [r, l]);
    }
  }, e.prototype.changeSlide = function (e, t) {
    var o,
        s,
        n,
        r = this,
        l = i(e.currentTarget);

    switch (l.is("a") && e.preventDefault(), l.is("li") || (l = l.closest("li")), n = r.slideCount % r.options.slidesToScroll !== 0, o = n ? 0 : (r.slideCount - r.currentSlide) % r.options.slidesToScroll, e.data.message) {
      case "previous":
        s = 0 === o ? r.options.slidesToScroll : r.options.slidesToShow - o, r.slideCount > r.options.slidesToShow && r.slideHandler(r.currentSlide - s, !1, t);
        break;

      case "next":
        s = 0 === o ? r.options.slidesToScroll : o, r.slideCount > r.options.slidesToShow && r.slideHandler(r.currentSlide + s, !1, t);
        break;

      case "index":
        var d = 0 === e.data.index ? 0 : e.data.index || l.index() * r.options.slidesToScroll;
        r.slideHandler(r.checkNavigable(d), !1, t), l.children().trigger("focus");
        break;

      default:
        return;
    }
  }, e.prototype.checkNavigable = function (i) {
    var e,
        t,
        o = this;
    if (e = o.getNavigableIndexes(), t = 0, i > e[e.length - 1]) i = e[e.length - 1];else for (var s in e) {
      if (i < e[s]) {
        i = t;
        break;
      }

      t = e[s];
    }
    return i;
  }, e.prototype.cleanUpEvents = function () {
    var e = this;
    e.options.dots && null !== e.$dots && (i("li", e.$dots).off("click.slick", e.changeSlide).off("mouseenter.slick", i.proxy(e.interrupt, e, !0)).off("mouseleave.slick", i.proxy(e.interrupt, e, !1)), e.options.accessibility === !0 && e.$dots.off("keydown.slick", e.keyHandler)), e.$slider.off("focus.slick blur.slick"), e.options.arrows === !0 && e.slideCount > e.options.slidesToShow && (e.$prevArrow && e.$prevArrow.off("click.slick", e.changeSlide), e.$nextArrow && e.$nextArrow.off("click.slick", e.changeSlide), e.options.accessibility === !0 && (e.$prevArrow && e.$prevArrow.off("keydown.slick", e.keyHandler), e.$nextArrow && e.$nextArrow.off("keydown.slick", e.keyHandler))), e.$list.off("touchstart.slick mousedown.slick", e.swipeHandler), e.$list.off("touchmove.slick mousemove.slick", e.swipeHandler), e.$list.off("touchend.slick mouseup.slick", e.swipeHandler), e.$list.off("touchcancel.slick mouseleave.slick", e.swipeHandler), e.$list.off("click.slick", e.clickHandler), i(document).off(e.visibilityChange, e.visibility), e.cleanUpSlideEvents(), e.options.accessibility === !0 && e.$list.off("keydown.slick", e.keyHandler), e.options.focusOnSelect === !0 && i(e.$slideTrack).children().off("click.slick", e.selectHandler), i(window).off("orientationchange.slick.slick-" + e.instanceUid, e.orientationChange), i(window).off("resize.slick.slick-" + e.instanceUid, e.resize), i("[draggable!=true]", e.$slideTrack).off("dragstart", e.preventDefault), i(window).off("load.slick.slick-" + e.instanceUid, e.setPosition);
  }, e.prototype.cleanUpSlideEvents = function () {
    var e = this;
    e.$list.off("mouseenter.slick", i.proxy(e.interrupt, e, !0)), e.$list.off("mouseleave.slick", i.proxy(e.interrupt, e, !1));
  }, e.prototype.cleanUpRows = function () {
    var i,
        e = this;
    e.options.rows > 0 && (i = e.$slides.children().children(), i.removeAttr("style"), e.$slider.empty().append(i));
  }, e.prototype.clickHandler = function (i) {
    var e = this;
    e.shouldClick === !1 && (i.stopImmediatePropagation(), i.stopPropagation(), i.preventDefault());
  }, e.prototype.destroy = function (e) {
    var t = this;
    t.autoPlayClear(), t.touchObject = {}, t.cleanUpEvents(), i(".slick-cloned", t.$slider).detach(), t.$dots && t.$dots.remove(), t.$prevArrow && t.$prevArrow.length && (t.$prevArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display", ""), t.htmlExpr.test(t.options.prevArrow) && t.$prevArrow.remove()), t.$nextArrow && t.$nextArrow.length && (t.$nextArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display", ""), t.htmlExpr.test(t.options.nextArrow) && t.$nextArrow.remove()), t.$slides && (t.$slides.removeClass("slick-slide slick-active slick-center slick-visible slick-current").removeAttr("aria-hidden").removeAttr("data-slick-index").each(function () {
      i(this).attr("style", i(this).data("originalStyling"));
    }), t.$slideTrack.children(this.options.slide).detach(), t.$slideTrack.detach(), t.$list.detach(), t.$slider.append(t.$slides)), t.cleanUpRows(), t.$slider.removeClass("slick-slider"), t.$slider.removeClass("slick-initialized"), t.$slider.removeClass("slick-dotted"), t.unslicked = !0, e || t.$slider.trigger("destroy", [t]);
  }, e.prototype.disableTransition = function (i) {
    var e = this,
        t = {};
    t[e.transitionType] = "", e.options.fade === !1 ? e.$slideTrack.css(t) : e.$slides.eq(i).css(t);
  }, e.prototype.fadeSlide = function (i, e) {
    var t = this;
    t.cssTransitions === !1 ? (t.$slides.eq(i).css({
      zIndex: t.options.zIndex
    }), t.$slides.eq(i).animate({
      opacity: 1
    }, t.options.speed, t.options.easing, e)) : (t.applyTransition(i), t.$slides.eq(i).css({
      opacity: 1,
      zIndex: t.options.zIndex
    }), e && setTimeout(function () {
      t.disableTransition(i), e.call();
    }, t.options.speed));
  }, e.prototype.fadeSlideOut = function (i) {
    var e = this;
    e.cssTransitions === !1 ? e.$slides.eq(i).animate({
      opacity: 0,
      zIndex: e.options.zIndex - 2
    }, e.options.speed, e.options.easing) : (e.applyTransition(i), e.$slides.eq(i).css({
      opacity: 0,
      zIndex: e.options.zIndex - 2
    }));
  }, e.prototype.filterSlides = e.prototype.slickFilter = function (i) {
    var e = this;
    null !== i && (e.$slidesCache = e.$slides, e.unload(), e.$slideTrack.children(this.options.slide).detach(), e.$slidesCache.filter(i).appendTo(e.$slideTrack), e.reinit());
  }, e.prototype.focusHandler = function () {
    var e = this;
    e.$slider.off("focus.slick blur.slick").on("focus.slick", "*", function (t) {
      var o = i(this);
      setTimeout(function () {
        e.options.pauseOnFocus && o.is(":focus") && (e.focussed = !0, e.autoPlay());
      }, 0);
    }).on("blur.slick", "*", function (t) {
      i(this);
      e.options.pauseOnFocus && (e.focussed = !1, e.autoPlay());
    });
  }, e.prototype.getCurrent = e.prototype.slickCurrentSlide = function () {
    var i = this;
    return i.currentSlide;
  }, e.prototype.getDotCount = function () {
    var i = this,
        e = 0,
        t = 0,
        o = 0;
    if (i.options.infinite === !0) {
      if (i.slideCount <= i.options.slidesToShow) ++o;else for (; e < i.slideCount;) {
        ++o, e = t + i.options.slidesToScroll, t += i.options.slidesToScroll <= i.options.slidesToShow ? i.options.slidesToScroll : i.options.slidesToShow;
      }
    } else if (i.options.centerMode === !0) o = i.slideCount;else if (i.options.asNavFor) for (; e < i.slideCount;) {
      ++o, e = t + i.options.slidesToScroll, t += i.options.slidesToScroll <= i.options.slidesToShow ? i.options.slidesToScroll : i.options.slidesToShow;
    } else o = 1 + Math.ceil((i.slideCount - i.options.slidesToShow) / i.options.slidesToScroll);
    return o - 1;
  }, e.prototype.getLeft = function (i) {
    var e,
        t,
        o,
        s,
        n = this,
        r = 0;
    return n.slideOffset = 0, t = n.$slides.first().outerHeight(!0), n.options.infinite === !0 ? (n.slideCount > n.options.slidesToShow && (n.slideOffset = n.slideWidth * n.options.slidesToShow * -1, s = -1, n.options.vertical === !0 && n.options.centerMode === !0 && (2 === n.options.slidesToShow ? s = -1.5 : 1 === n.options.slidesToShow && (s = -2)), r = t * n.options.slidesToShow * s), n.slideCount % n.options.slidesToScroll !== 0 && i + n.options.slidesToScroll > n.slideCount && n.slideCount > n.options.slidesToShow && (i > n.slideCount ? (n.slideOffset = (n.options.slidesToShow - (i - n.slideCount)) * n.slideWidth * -1, r = (n.options.slidesToShow - (i - n.slideCount)) * t * -1) : (n.slideOffset = n.slideCount % n.options.slidesToScroll * n.slideWidth * -1, r = n.slideCount % n.options.slidesToScroll * t * -1))) : i + n.options.slidesToShow > n.slideCount && (n.slideOffset = (i + n.options.slidesToShow - n.slideCount) * n.slideWidth, r = (i + n.options.slidesToShow - n.slideCount) * t), n.slideCount <= n.options.slidesToShow && (n.slideOffset = 0, r = 0), n.options.centerMode === !0 && n.slideCount <= n.options.slidesToShow ? n.slideOffset = n.slideWidth * Math.floor(n.options.slidesToShow) / 2 - n.slideWidth * n.slideCount / 2 : n.options.centerMode === !0 && n.options.infinite === !0 ? n.slideOffset += n.slideWidth * Math.floor(n.options.slidesToShow / 2) - n.slideWidth : n.options.centerMode === !0 && (n.slideOffset = 0, n.slideOffset += n.slideWidth * Math.floor(n.options.slidesToShow / 2)), e = n.options.vertical === !1 ? i * n.slideWidth * -1 + n.slideOffset : i * t * -1 + r, n.options.variableWidth === !0 && (o = n.slideCount <= n.options.slidesToShow || n.options.infinite === !1 ? n.$slideTrack.children(".slick-slide").eq(i) : n.$slideTrack.children(".slick-slide").eq(i + n.options.slidesToShow), e = n.options.rtl === !0 ? o[0] ? (n.$slideTrack.width() - o[0].offsetLeft - o.width()) * -1 : 0 : o[0] ? o[0].offsetLeft * -1 : 0, n.options.centerMode === !0 && (o = n.slideCount <= n.options.slidesToShow || n.options.infinite === !1 ? n.$slideTrack.children(".slick-slide").eq(i) : n.$slideTrack.children(".slick-slide").eq(i + n.options.slidesToShow + 1), e = n.options.rtl === !0 ? o[0] ? (n.$slideTrack.width() - o[0].offsetLeft - o.width()) * -1 : 0 : o[0] ? o[0].offsetLeft * -1 : 0, e += (n.$list.width() - o.outerWidth()) / 2)), e;
  }, e.prototype.getOption = e.prototype.slickGetOption = function (i) {
    var e = this;
    return e.options[i];
  }, e.prototype.getNavigableIndexes = function () {
    var i,
        e = this,
        t = 0,
        o = 0,
        s = [];

    for (e.options.infinite === !1 ? i = e.slideCount : (t = e.options.slidesToScroll * -1, o = e.options.slidesToScroll * -1, i = 2 * e.slideCount); t < i;) {
      s.push(t), t = o + e.options.slidesToScroll, o += e.options.slidesToScroll <= e.options.slidesToShow ? e.options.slidesToScroll : e.options.slidesToShow;
    }

    return s;
  }, e.prototype.getSlick = function () {
    return this;
  }, e.prototype.getSlideCount = function () {
    var e,
        t,
        o,
        s,
        n = this;
    return s = n.options.centerMode === !0 ? Math.floor(n.$list.width() / 2) : 0, o = n.swipeLeft * -1 + s, n.options.swipeToSlide === !0 ? (n.$slideTrack.find(".slick-slide").each(function (e, s) {
      var r, l, d;
      if (r = i(s).outerWidth(), l = s.offsetLeft, n.options.centerMode !== !0 && (l += r / 2), d = l + r, o < d) return t = s, !1;
    }), e = Math.abs(i(t).attr("data-slick-index") - n.currentSlide) || 1) : n.options.slidesToScroll;
  }, e.prototype.goTo = e.prototype.slickGoTo = function (i, e) {
    var t = this;
    t.changeSlide({
      data: {
        message: "index",
        index: parseInt(i)
      }
    }, e);
  }, e.prototype.init = function (e) {
    var t = this;
    i(t.$slider).hasClass("slick-initialized") || (i(t.$slider).addClass("slick-initialized"), t.buildRows(), t.buildOut(), t.setProps(), t.startLoad(), t.loadSlider(), t.initializeEvents(), t.updateArrows(), t.updateDots(), t.checkResponsive(!0), t.focusHandler()), e && t.$slider.trigger("init", [t]), t.options.accessibility === !0 && t.initADA(), t.options.autoplay && (t.paused = !1, t.autoPlay());
  }, e.prototype.initADA = function () {
    var e = this,
        t = Math.ceil(e.slideCount / e.options.slidesToShow),
        o = e.getNavigableIndexes().filter(function (i) {
      return i >= 0 && i < e.slideCount;
    });
    e.$slides.add(e.$slideTrack.find(".slick-cloned")).attr({
      "aria-hidden": "true",
      tabindex: "-1"
    }).find("a, input, button, select").attr({
      tabindex: "-1"
    }), null !== e.$dots && (e.$slides.not(e.$slideTrack.find(".slick-cloned")).each(function (t) {
      var s = o.indexOf(t);

      if (i(this).attr({
        role: "tabpanel",
        id: "slick-slide" + e.instanceUid + t,
        tabindex: -1
      }), s !== -1) {
        var n = "slick-slide-control" + e.instanceUid + s;
        i("#" + n).length && i(this).attr({
          "aria-describedby": n
        });
      }
    }), e.$dots.attr("role", "tablist").find("li").each(function (s) {
      var n = o[s];
      i(this).attr({
        role: "presentation"
      }), i(this).find("button").first().attr({
        role: "tab",
        id: "slick-slide-control" + e.instanceUid + s,
        "aria-controls": "slick-slide" + e.instanceUid + n,
        "aria-label": s + 1 + " of " + t,
        "aria-selected": null,
        tabindex: "-1"
      });
    }).eq(e.currentSlide).find("button").attr({
      "aria-selected": "true",
      tabindex: "0"
    }).end());

    for (var s = e.currentSlide, n = s + e.options.slidesToShow; s < n; s++) {
      e.options.focusOnChange ? e.$slides.eq(s).attr({
        tabindex: "0"
      }) : e.$slides.eq(s).removeAttr("tabindex");
    }

    e.activateADA();
  }, e.prototype.initArrowEvents = function () {
    var i = this;
    i.options.arrows === !0 && i.slideCount > i.options.slidesToShow && (i.$prevArrow.off("click.slick").on("click.slick", {
      message: "previous"
    }, i.changeSlide), i.$nextArrow.off("click.slick").on("click.slick", {
      message: "next"
    }, i.changeSlide), i.options.accessibility === !0 && (i.$prevArrow.on("keydown.slick", i.keyHandler), i.$nextArrow.on("keydown.slick", i.keyHandler)));
  }, e.prototype.initDotEvents = function () {
    var e = this;
    e.options.dots === !0 && e.slideCount > e.options.slidesToShow && (i("li", e.$dots).on("click.slick", {
      message: "index"
    }, e.changeSlide), e.options.accessibility === !0 && e.$dots.on("keydown.slick", e.keyHandler)), e.options.dots === !0 && e.options.pauseOnDotsHover === !0 && e.slideCount > e.options.slidesToShow && i("li", e.$dots).on("mouseenter.slick", i.proxy(e.interrupt, e, !0)).on("mouseleave.slick", i.proxy(e.interrupt, e, !1));
  }, e.prototype.initSlideEvents = function () {
    var e = this;
    e.options.pauseOnHover && (e.$list.on("mouseenter.slick", i.proxy(e.interrupt, e, !0)), e.$list.on("mouseleave.slick", i.proxy(e.interrupt, e, !1)));
  }, e.prototype.initializeEvents = function () {
    var e = this;
    e.initArrowEvents(), e.initDotEvents(), e.initSlideEvents(), e.$list.on("touchstart.slick mousedown.slick", {
      action: "start"
    }, e.swipeHandler), e.$list.on("touchmove.slick mousemove.slick", {
      action: "move"
    }, e.swipeHandler), e.$list.on("touchend.slick mouseup.slick", {
      action: "end"
    }, e.swipeHandler), e.$list.on("touchcancel.slick mouseleave.slick", {
      action: "end"
    }, e.swipeHandler), e.$list.on("click.slick", e.clickHandler), i(document).on(e.visibilityChange, i.proxy(e.visibility, e)), e.options.accessibility === !0 && e.$list.on("keydown.slick", e.keyHandler), e.options.focusOnSelect === !0 && i(e.$slideTrack).children().on("click.slick", e.selectHandler), i(window).on("orientationchange.slick.slick-" + e.instanceUid, i.proxy(e.orientationChange, e)), i(window).on("resize.slick.slick-" + e.instanceUid, i.proxy(e.resize, e)), i("[draggable!=true]", e.$slideTrack).on("dragstart", e.preventDefault), i(window).on("load.slick.slick-" + e.instanceUid, e.setPosition), i(e.setPosition);
  }, e.prototype.initUI = function () {
    var i = this;
    i.options.arrows === !0 && i.slideCount > i.options.slidesToShow && (i.$prevArrow.show(), i.$nextArrow.show()), i.options.dots === !0 && i.slideCount > i.options.slidesToShow && i.$dots.show();
  }, e.prototype.keyHandler = function (i) {
    var e = this;
    i.target.tagName.match("TEXTAREA|INPUT|SELECT") || (37 === i.keyCode && e.options.accessibility === !0 ? e.changeSlide({
      data: {
        message: e.options.rtl === !0 ? "next" : "previous"
      }
    }) : 39 === i.keyCode && e.options.accessibility === !0 && e.changeSlide({
      data: {
        message: e.options.rtl === !0 ? "previous" : "next"
      }
    }));
  }, e.prototype.lazyLoad = function () {
    function e(e) {
      i("img[data-lazy]", e).each(function () {
        var e = i(this),
            t = i(this).attr("data-lazy"),
            o = i(this).attr("data-srcset"),
            s = i(this).attr("data-sizes") || r.$slider.attr("data-sizes"),
            n = document.createElement("img");
        n.onload = function () {
          e.animate({
            opacity: 0
          }, 100, function () {
            o && (e.attr("srcset", o), s && e.attr("sizes", s)), e.attr("src", t).animate({
              opacity: 1
            }, 200, function () {
              e.removeAttr("data-lazy data-srcset data-sizes").removeClass("slick-loading");
            }), r.$slider.trigger("lazyLoaded", [r, e, t]);
          });
        }, n.onerror = function () {
          e.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"), r.$slider.trigger("lazyLoadError", [r, e, t]);
        }, n.src = t;
      });
    }

    var t,
        o,
        s,
        n,
        r = this;
    if (r.options.centerMode === !0 ? r.options.infinite === !0 ? (s = r.currentSlide + (r.options.slidesToShow / 2 + 1), n = s + r.options.slidesToShow + 2) : (s = Math.max(0, r.currentSlide - (r.options.slidesToShow / 2 + 1)), n = 2 + (r.options.slidesToShow / 2 + 1) + r.currentSlide) : (s = r.options.infinite ? r.options.slidesToShow + r.currentSlide : r.currentSlide, n = Math.ceil(s + r.options.slidesToShow), r.options.fade === !0 && (s > 0 && s--, n <= r.slideCount && n++)), t = r.$slider.find(".slick-slide").slice(s, n), "anticipated" === r.options.lazyLoad) for (var l = s - 1, d = n, a = r.$slider.find(".slick-slide"), c = 0; c < r.options.slidesToScroll; c++) {
      l < 0 && (l = r.slideCount - 1), t = t.add(a.eq(l)), t = t.add(a.eq(d)), l--, d++;
    }
    e(t), r.slideCount <= r.options.slidesToShow ? (o = r.$slider.find(".slick-slide"), e(o)) : r.currentSlide >= r.slideCount - r.options.slidesToShow ? (o = r.$slider.find(".slick-cloned").slice(0, r.options.slidesToShow), e(o)) : 0 === r.currentSlide && (o = r.$slider.find(".slick-cloned").slice(r.options.slidesToShow * -1), e(o));
  }, e.prototype.loadSlider = function () {
    var i = this;
    i.setPosition(), i.$slideTrack.css({
      opacity: 1
    }), i.$slider.removeClass("slick-loading"), i.initUI(), "progressive" === i.options.lazyLoad && i.progressiveLazyLoad();
  }, e.prototype.next = e.prototype.slickNext = function () {
    var i = this;
    i.changeSlide({
      data: {
        message: "next"
      }
    });
  }, e.prototype.orientationChange = function () {
    var i = this;
    i.checkResponsive(), i.setPosition();
  }, e.prototype.pause = e.prototype.slickPause = function () {
    var i = this;
    i.autoPlayClear(), i.paused = !0;
  }, e.prototype.play = e.prototype.slickPlay = function () {
    var i = this;
    i.autoPlay(), i.options.autoplay = !0, i.paused = !1, i.focussed = !1, i.interrupted = !1;
  }, e.prototype.postSlide = function (e) {
    var t = this;

    if (!t.unslicked && (t.$slider.trigger("afterChange", [t, e]), t.animating = !1, t.slideCount > t.options.slidesToShow && t.setPosition(), t.swipeLeft = null, t.options.autoplay && t.autoPlay(), t.options.accessibility === !0 && (t.initADA(), t.options.focusOnChange))) {
      var o = i(t.$slides.get(t.currentSlide));
      o.attr("tabindex", 0).focus();
    }
  }, e.prototype.prev = e.prototype.slickPrev = function () {
    var i = this;
    i.changeSlide({
      data: {
        message: "previous"
      }
    });
  }, e.prototype.preventDefault = function (i) {
    i.preventDefault();
  }, e.prototype.progressiveLazyLoad = function (e) {
    e = e || 1;
    var t,
        o,
        s,
        n,
        r,
        l = this,
        d = i("img[data-lazy]", l.$slider);
    d.length ? (t = d.first(), o = t.attr("data-lazy"), s = t.attr("data-srcset"), n = t.attr("data-sizes") || l.$slider.attr("data-sizes"), r = document.createElement("img"), r.onload = function () {
      s && (t.attr("srcset", s), n && t.attr("sizes", n)), t.attr("src", o).removeAttr("data-lazy data-srcset data-sizes").removeClass("slick-loading"), l.options.adaptiveHeight === !0 && l.setPosition(), l.$slider.trigger("lazyLoaded", [l, t, o]), l.progressiveLazyLoad();
    }, r.onerror = function () {
      e < 3 ? setTimeout(function () {
        l.progressiveLazyLoad(e + 1);
      }, 500) : (t.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"), l.$slider.trigger("lazyLoadError", [l, t, o]), l.progressiveLazyLoad());
    }, r.src = o) : l.$slider.trigger("allImagesLoaded", [l]);
  }, e.prototype.refresh = function (e) {
    var t,
        o,
        s = this;
    o = s.slideCount - s.options.slidesToShow, !s.options.infinite && s.currentSlide > o && (s.currentSlide = o), s.slideCount <= s.options.slidesToShow && (s.currentSlide = 0), t = s.currentSlide, s.destroy(!0), i.extend(s, s.initials, {
      currentSlide: t
    }), s.init(), e || s.changeSlide({
      data: {
        message: "index",
        index: t
      }
    }, !1);
  }, e.prototype.registerBreakpoints = function () {
    var e,
        t,
        o,
        s = this,
        n = s.options.responsive || null;

    if ("array" === i.type(n) && n.length) {
      s.respondTo = s.options.respondTo || "window";

      for (e in n) {
        if (o = s.breakpoints.length - 1, n.hasOwnProperty(e)) {
          for (t = n[e].breakpoint; o >= 0;) {
            s.breakpoints[o] && s.breakpoints[o] === t && s.breakpoints.splice(o, 1), o--;
          }

          s.breakpoints.push(t), s.breakpointSettings[t] = n[e].settings;
        }
      }

      s.breakpoints.sort(function (i, e) {
        return s.options.mobileFirst ? i - e : e - i;
      });
    }
  }, e.prototype.reinit = function () {
    var e = this;
    e.$slides = e.$slideTrack.children(e.options.slide).addClass("slick-slide"), e.slideCount = e.$slides.length, e.currentSlide >= e.slideCount && 0 !== e.currentSlide && (e.currentSlide = e.currentSlide - e.options.slidesToScroll), e.slideCount <= e.options.slidesToShow && (e.currentSlide = 0), e.registerBreakpoints(), e.setProps(), e.setupInfinite(), e.buildArrows(), e.updateArrows(), e.initArrowEvents(), e.buildDots(), e.updateDots(), e.initDotEvents(), e.cleanUpSlideEvents(), e.initSlideEvents(), e.checkResponsive(!1, !0), e.options.focusOnSelect === !0 && i(e.$slideTrack).children().on("click.slick", e.selectHandler), e.setSlideClasses("number" == typeof e.currentSlide ? e.currentSlide : 0), e.setPosition(), e.focusHandler(), e.paused = !e.options.autoplay, e.autoPlay(), e.$slider.trigger("reInit", [e]);
  }, e.prototype.resize = function () {
    var e = this;
    i(window).width() !== e.windowWidth && (clearTimeout(e.windowDelay), e.windowDelay = window.setTimeout(function () {
      e.windowWidth = i(window).width(), e.checkResponsive(), e.unslicked || e.setPosition();
    }, 50));
  }, e.prototype.removeSlide = e.prototype.slickRemove = function (i, e, t) {
    var o = this;
    return "boolean" == typeof i ? (e = i, i = e === !0 ? 0 : o.slideCount - 1) : i = e === !0 ? --i : i, !(o.slideCount < 1 || i < 0 || i > o.slideCount - 1) && (o.unload(), t === !0 ? o.$slideTrack.children().remove() : o.$slideTrack.children(this.options.slide).eq(i).remove(), o.$slides = o.$slideTrack.children(this.options.slide), o.$slideTrack.children(this.options.slide).detach(), o.$slideTrack.append(o.$slides), o.$slidesCache = o.$slides, void o.reinit());
  }, e.prototype.setCSS = function (i) {
    var e,
        t,
        o = this,
        s = {};
    o.options.rtl === !0 && (i = -i), e = "left" == o.positionProp ? Math.ceil(i) + "px" : "0px", t = "top" == o.positionProp ? Math.ceil(i) + "px" : "0px", s[o.positionProp] = i, o.transformsEnabled === !1 ? o.$slideTrack.css(s) : (s = {}, o.cssTransitions === !1 ? (s[o.animType] = "translate(" + e + ", " + t + ")", o.$slideTrack.css(s)) : (s[o.animType] = "translate3d(" + e + ", " + t + ", 0px)", o.$slideTrack.css(s)));
  }, e.prototype.setDimensions = function () {
    var i = this;
    i.options.vertical === !1 ? i.options.centerMode === !0 && i.$list.css({
      padding: "0px " + i.options.centerPadding
    }) : (i.$list.height(i.$slides.first().outerHeight(!0) * i.options.slidesToShow), i.options.centerMode === !0 && i.$list.css({
      padding: i.options.centerPadding + " 0px"
    })), i.listWidth = i.$list.width(), i.listHeight = i.$list.height(), i.options.vertical === !1 && i.options.variableWidth === !1 ? (i.slideWidth = Math.ceil(i.listWidth / i.options.slidesToShow), i.$slideTrack.width(Math.ceil(i.slideWidth * i.$slideTrack.children(".slick-slide").length))) : i.options.variableWidth === !0 ? i.$slideTrack.width(5e3 * i.slideCount) : (i.slideWidth = Math.ceil(i.listWidth), i.$slideTrack.height(Math.ceil(i.$slides.first().outerHeight(!0) * i.$slideTrack.children(".slick-slide").length)));
    var e = i.$slides.first().outerWidth(!0) - i.$slides.first().width();
    i.options.variableWidth === !1 && i.$slideTrack.children(".slick-slide").width(i.slideWidth - e);
  }, e.prototype.setFade = function () {
    var e,
        t = this;
    t.$slides.each(function (o, s) {
      e = t.slideWidth * o * -1, t.options.rtl === !0 ? i(s).css({
        position: "relative",
        right: e,
        top: 0,
        zIndex: t.options.zIndex - 2,
        opacity: 0
      }) : i(s).css({
        position: "relative",
        left: e,
        top: 0,
        zIndex: t.options.zIndex - 2,
        opacity: 0
      });
    }), t.$slides.eq(t.currentSlide).css({
      zIndex: t.options.zIndex - 1,
      opacity: 1
    });
  }, e.prototype.setHeight = function () {
    var i = this;

    if (1 === i.options.slidesToShow && i.options.adaptiveHeight === !0 && i.options.vertical === !1) {
      var e = i.$slides.eq(i.currentSlide).outerHeight(!0);
      i.$list.css("height", e);
    }
  }, e.prototype.setOption = e.prototype.slickSetOption = function () {
    var e,
        t,
        o,
        s,
        n,
        r = this,
        l = !1;
    if ("object" === i.type(arguments[0]) ? (o = arguments[0], l = arguments[1], n = "multiple") : "string" === i.type(arguments[0]) && (o = arguments[0], s = arguments[1], l = arguments[2], "responsive" === arguments[0] && "array" === i.type(arguments[1]) ? n = "responsive" : "undefined" != typeof arguments[1] && (n = "single")), "single" === n) r.options[o] = s;else if ("multiple" === n) i.each(o, function (i, e) {
      r.options[i] = e;
    });else if ("responsive" === n) for (t in s) {
      if ("array" !== i.type(r.options.responsive)) r.options.responsive = [s[t]];else {
        for (e = r.options.responsive.length - 1; e >= 0;) {
          r.options.responsive[e].breakpoint === s[t].breakpoint && r.options.responsive.splice(e, 1), e--;
        }

        r.options.responsive.push(s[t]);
      }
    }
    l && (r.unload(), r.reinit());
  }, e.prototype.setPosition = function () {
    var i = this;
    i.setDimensions(), i.setHeight(), i.options.fade === !1 ? i.setCSS(i.getLeft(i.currentSlide)) : i.setFade(), i.$slider.trigger("setPosition", [i]);
  }, e.prototype.setProps = function () {
    var i = this,
        e = document.body.style;
    i.positionProp = i.options.vertical === !0 ? "top" : "left", "top" === i.positionProp ? i.$slider.addClass("slick-vertical") : i.$slider.removeClass("slick-vertical"), void 0 === e.WebkitTransition && void 0 === e.MozTransition && void 0 === e.msTransition || i.options.useCSS === !0 && (i.cssTransitions = !0), i.options.fade && ("number" == typeof i.options.zIndex ? i.options.zIndex < 3 && (i.options.zIndex = 3) : i.options.zIndex = i.defaults.zIndex), void 0 !== e.OTransform && (i.animType = "OTransform", i.transformType = "-o-transform", i.transitionType = "OTransition", void 0 === e.perspectiveProperty && void 0 === e.webkitPerspective && (i.animType = !1)), void 0 !== e.MozTransform && (i.animType = "MozTransform", i.transformType = "-moz-transform", i.transitionType = "MozTransition", void 0 === e.perspectiveProperty && void 0 === e.MozPerspective && (i.animType = !1)), void 0 !== e.webkitTransform && (i.animType = "webkitTransform", i.transformType = "-webkit-transform", i.transitionType = "webkitTransition", void 0 === e.perspectiveProperty && void 0 === e.webkitPerspective && (i.animType = !1)), void 0 !== e.msTransform && (i.animType = "msTransform", i.transformType = "-ms-transform", i.transitionType = "msTransition", void 0 === e.msTransform && (i.animType = !1)), void 0 !== e.transform && i.animType !== !1 && (i.animType = "transform", i.transformType = "transform", i.transitionType = "transition"), i.transformsEnabled = i.options.useTransform && null !== i.animType && i.animType !== !1;
  }, e.prototype.setSlideClasses = function (i) {
    var e,
        t,
        o,
        s,
        n = this;

    if (t = n.$slider.find(".slick-slide").removeClass("slick-active slick-center slick-current").attr("aria-hidden", "true"), n.$slides.eq(i).addClass("slick-current"), n.options.centerMode === !0) {
      var r = n.options.slidesToShow % 2 === 0 ? 1 : 0;
      e = Math.floor(n.options.slidesToShow / 2), n.options.infinite === !0 && (i >= e && i <= n.slideCount - 1 - e ? n.$slides.slice(i - e + r, i + e + 1).addClass("slick-active").attr("aria-hidden", "false") : (o = n.options.slidesToShow + i, t.slice(o - e + 1 + r, o + e + 2).addClass("slick-active").attr("aria-hidden", "false")), 0 === i ? t.eq(t.length - 1 - n.options.slidesToShow).addClass("slick-center") : i === n.slideCount - 1 && t.eq(n.options.slidesToShow).addClass("slick-center")), n.$slides.eq(i).addClass("slick-center");
    } else i >= 0 && i <= n.slideCount - n.options.slidesToShow ? n.$slides.slice(i, i + n.options.slidesToShow).addClass("slick-active").attr("aria-hidden", "false") : t.length <= n.options.slidesToShow ? t.addClass("slick-active").attr("aria-hidden", "false") : (s = n.slideCount % n.options.slidesToShow, o = n.options.infinite === !0 ? n.options.slidesToShow + i : i, n.options.slidesToShow == n.options.slidesToScroll && n.slideCount - i < n.options.slidesToShow ? t.slice(o - (n.options.slidesToShow - s), o + s).addClass("slick-active").attr("aria-hidden", "false") : t.slice(o, o + n.options.slidesToShow).addClass("slick-active").attr("aria-hidden", "false"));

    "ondemand" !== n.options.lazyLoad && "anticipated" !== n.options.lazyLoad || n.lazyLoad();
  }, e.prototype.setupInfinite = function () {
    var e,
        t,
        o,
        s = this;

    if (s.options.fade === !0 && (s.options.centerMode = !1), s.options.infinite === !0 && s.options.fade === !1 && (t = null, s.slideCount > s.options.slidesToShow)) {
      for (o = s.options.centerMode === !0 ? s.options.slidesToShow + 1 : s.options.slidesToShow, e = s.slideCount; e > s.slideCount - o; e -= 1) {
        t = e - 1, i(s.$slides[t]).clone(!0).attr("id", "").attr("data-slick-index", t - s.slideCount).prependTo(s.$slideTrack).addClass("slick-cloned");
      }

      for (e = 0; e < o + s.slideCount; e += 1) {
        t = e, i(s.$slides[t]).clone(!0).attr("id", "").attr("data-slick-index", t + s.slideCount).appendTo(s.$slideTrack).addClass("slick-cloned");
      }

      s.$slideTrack.find(".slick-cloned").find("[id]").each(function () {
        i(this).attr("id", "");
      });
    }
  }, e.prototype.interrupt = function (i) {
    var e = this;
    i || e.autoPlay(), e.interrupted = i;
  }, e.prototype.selectHandler = function (e) {
    var t = this,
        o = i(e.target).is(".slick-slide") ? i(e.target) : i(e.target).parents(".slick-slide"),
        s = parseInt(o.attr("data-slick-index"));
    return s || (s = 0), t.slideCount <= t.options.slidesToShow ? void t.slideHandler(s, !1, !0) : void t.slideHandler(s);
  }, e.prototype.slideHandler = function (i, e, t) {
    var o,
        s,
        n,
        r,
        l,
        d = null,
        a = this;
    if (e = e || !1, !(a.animating === !0 && a.options.waitForAnimate === !0 || a.options.fade === !0 && a.currentSlide === i)) return e === !1 && a.asNavFor(i), o = i, d = a.getLeft(o), r = a.getLeft(a.currentSlide), a.currentLeft = null === a.swipeLeft ? r : a.swipeLeft, a.options.infinite === !1 && a.options.centerMode === !1 && (i < 0 || i > a.getDotCount() * a.options.slidesToScroll) ? void (a.options.fade === !1 && (o = a.currentSlide, t !== !0 && a.slideCount > a.options.slidesToShow ? a.animateSlide(r, function () {
      a.postSlide(o);
    }) : a.postSlide(o))) : a.options.infinite === !1 && a.options.centerMode === !0 && (i < 0 || i > a.slideCount - a.options.slidesToScroll) ? void (a.options.fade === !1 && (o = a.currentSlide, t !== !0 && a.slideCount > a.options.slidesToShow ? a.animateSlide(r, function () {
      a.postSlide(o);
    }) : a.postSlide(o))) : (a.options.autoplay && clearInterval(a.autoPlayTimer), s = o < 0 ? a.slideCount % a.options.slidesToScroll !== 0 ? a.slideCount - a.slideCount % a.options.slidesToScroll : a.slideCount + o : o >= a.slideCount ? a.slideCount % a.options.slidesToScroll !== 0 ? 0 : o - a.slideCount : o, a.animating = !0, a.$slider.trigger("beforeChange", [a, a.currentSlide, s]), n = a.currentSlide, a.currentSlide = s, a.setSlideClasses(a.currentSlide), a.options.asNavFor && (l = a.getNavTarget(), l = l.slick("getSlick"), l.slideCount <= l.options.slidesToShow && l.setSlideClasses(a.currentSlide)), a.updateDots(), a.updateArrows(), a.options.fade === !0 ? (t !== !0 ? (a.fadeSlideOut(n), a.fadeSlide(s, function () {
      a.postSlide(s);
    })) : a.postSlide(s), void a.animateHeight()) : void (t !== !0 && a.slideCount > a.options.slidesToShow ? a.animateSlide(d, function () {
      a.postSlide(s);
    }) : a.postSlide(s)));
  }, e.prototype.startLoad = function () {
    var i = this;
    i.options.arrows === !0 && i.slideCount > i.options.slidesToShow && (i.$prevArrow.hide(), i.$nextArrow.hide()), i.options.dots === !0 && i.slideCount > i.options.slidesToShow && i.$dots.hide(), i.$slider.addClass("slick-loading");
  }, e.prototype.swipeDirection = function () {
    var i,
        e,
        t,
        o,
        s = this;
    return i = s.touchObject.startX - s.touchObject.curX, e = s.touchObject.startY - s.touchObject.curY, t = Math.atan2(e, i), o = Math.round(180 * t / Math.PI), o < 0 && (o = 360 - Math.abs(o)), o <= 45 && o >= 0 ? s.options.rtl === !1 ? "left" : "right" : o <= 360 && o >= 315 ? s.options.rtl === !1 ? "left" : "right" : o >= 135 && o <= 225 ? s.options.rtl === !1 ? "right" : "left" : s.options.verticalSwiping === !0 ? o >= 35 && o <= 135 ? "down" : "up" : "vertical";
  }, e.prototype.swipeEnd = function (i) {
    var e,
        t,
        o = this;
    if (o.dragging = !1, o.swiping = !1, o.scrolling) return o.scrolling = !1, !1;
    if (o.interrupted = !1, o.shouldClick = !(o.touchObject.swipeLength > 10), void 0 === o.touchObject.curX) return !1;

    if (o.touchObject.edgeHit === !0 && o.$slider.trigger("edge", [o, o.swipeDirection()]), o.touchObject.swipeLength >= o.touchObject.minSwipe) {
      switch (t = o.swipeDirection()) {
        case "left":
        case "down":
          e = o.options.swipeToSlide ? o.checkNavigable(o.currentSlide + o.getSlideCount()) : o.currentSlide + o.getSlideCount(), o.currentDirection = 0;
          break;

        case "right":
        case "up":
          e = o.options.swipeToSlide ? o.checkNavigable(o.currentSlide - o.getSlideCount()) : o.currentSlide - o.getSlideCount(), o.currentDirection = 1;
      }

      "vertical" != t && (o.slideHandler(e), o.touchObject = {}, o.$slider.trigger("swipe", [o, t]));
    } else o.touchObject.startX !== o.touchObject.curX && (o.slideHandler(o.currentSlide), o.touchObject = {});
  }, e.prototype.swipeHandler = function (i) {
    var e = this;
    if (!(e.options.swipe === !1 || "ontouchend" in document && e.options.swipe === !1 || e.options.draggable === !1 && i.type.indexOf("mouse") !== -1)) switch (e.touchObject.fingerCount = i.originalEvent && void 0 !== i.originalEvent.touches ? i.originalEvent.touches.length : 1, e.touchObject.minSwipe = e.listWidth / e.options.touchThreshold, e.options.verticalSwiping === !0 && (e.touchObject.minSwipe = e.listHeight / e.options.touchThreshold), i.data.action) {
      case "start":
        e.swipeStart(i);
        break;

      case "move":
        e.swipeMove(i);
        break;

      case "end":
        e.swipeEnd(i);
    }
  }, e.prototype.swipeMove = function (i) {
    var e,
        t,
        o,
        s,
        n,
        r,
        l = this;
    return n = void 0 !== i.originalEvent ? i.originalEvent.touches : null, !(!l.dragging || l.scrolling || n && 1 !== n.length) && (e = l.getLeft(l.currentSlide), l.touchObject.curX = void 0 !== n ? n[0].pageX : i.clientX, l.touchObject.curY = void 0 !== n ? n[0].pageY : i.clientY, l.touchObject.swipeLength = Math.round(Math.sqrt(Math.pow(l.touchObject.curX - l.touchObject.startX, 2))), r = Math.round(Math.sqrt(Math.pow(l.touchObject.curY - l.touchObject.startY, 2))), !l.options.verticalSwiping && !l.swiping && r > 4 ? (l.scrolling = !0, !1) : (l.options.verticalSwiping === !0 && (l.touchObject.swipeLength = r), t = l.swipeDirection(), void 0 !== i.originalEvent && l.touchObject.swipeLength > 4 && (l.swiping = !0, i.preventDefault()), s = (l.options.rtl === !1 ? 1 : -1) * (l.touchObject.curX > l.touchObject.startX ? 1 : -1), l.options.verticalSwiping === !0 && (s = l.touchObject.curY > l.touchObject.startY ? 1 : -1), o = l.touchObject.swipeLength, l.touchObject.edgeHit = !1, l.options.infinite === !1 && (0 === l.currentSlide && "right" === t || l.currentSlide >= l.getDotCount() && "left" === t) && (o = l.touchObject.swipeLength * l.options.edgeFriction, l.touchObject.edgeHit = !0), l.options.vertical === !1 ? l.swipeLeft = e + o * s : l.swipeLeft = e + o * (l.$list.height() / l.listWidth) * s, l.options.verticalSwiping === !0 && (l.swipeLeft = e + o * s), l.options.fade !== !0 && l.options.touchMove !== !1 && (l.animating === !0 ? (l.swipeLeft = null, !1) : void l.setCSS(l.swipeLeft))));
  }, e.prototype.swipeStart = function (i) {
    var e,
        t = this;
    return t.interrupted = !0, 1 !== t.touchObject.fingerCount || t.slideCount <= t.options.slidesToShow ? (t.touchObject = {}, !1) : (void 0 !== i.originalEvent && void 0 !== i.originalEvent.touches && (e = i.originalEvent.touches[0]), t.touchObject.startX = t.touchObject.curX = void 0 !== e ? e.pageX : i.clientX, t.touchObject.startY = t.touchObject.curY = void 0 !== e ? e.pageY : i.clientY, void (t.dragging = !0));
  }, e.prototype.unfilterSlides = e.prototype.slickUnfilter = function () {
    var i = this;
    null !== i.$slidesCache && (i.unload(), i.$slideTrack.children(this.options.slide).detach(), i.$slidesCache.appendTo(i.$slideTrack), i.reinit());
  }, e.prototype.unload = function () {
    var e = this;
    i(".slick-cloned", e.$slider).remove(), e.$dots && e.$dots.remove(), e.$prevArrow && e.htmlExpr.test(e.options.prevArrow) && e.$prevArrow.remove(), e.$nextArrow && e.htmlExpr.test(e.options.nextArrow) && e.$nextArrow.remove(), e.$slides.removeClass("slick-slide slick-active slick-visible slick-current").attr("aria-hidden", "true").css("width", "");
  }, e.prototype.unslick = function (i) {
    var e = this;
    e.$slider.trigger("unslick", [e, i]), e.destroy();
  }, e.prototype.updateArrows = function () {
    var i,
        e = this;
    i = Math.floor(e.options.slidesToShow / 2), e.options.arrows === !0 && e.slideCount > e.options.slidesToShow && !e.options.infinite && (e.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false"), e.$nextArrow.removeClass("slick-disabled").attr("aria-disabled", "false"), 0 === e.currentSlide ? (e.$prevArrow.addClass("slick-disabled").attr("aria-disabled", "true"), e.$nextArrow.removeClass("slick-disabled").attr("aria-disabled", "false")) : e.currentSlide >= e.slideCount - e.options.slidesToShow && e.options.centerMode === !1 ? (e.$nextArrow.addClass("slick-disabled").attr("aria-disabled", "true"), e.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false")) : e.currentSlide >= e.slideCount - 1 && e.options.centerMode === !0 && (e.$nextArrow.addClass("slick-disabled").attr("aria-disabled", "true"), e.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false")));
  }, e.prototype.updateDots = function () {
    var i = this;
    null !== i.$dots && (i.$dots.find("li").removeClass("slick-active").end(), i.$dots.find("li").eq(Math.floor(i.currentSlide / i.options.slidesToScroll)).addClass("slick-active"));
  }, e.prototype.visibility = function () {
    var i = this;
    i.options.autoplay && (document[i.hidden] ? i.interrupted = !0 : i.interrupted = !1);
  }, i.fn.slick = function () {
    var i,
        t,
        o = this,
        s = arguments[0],
        n = Array.prototype.slice.call(arguments, 1),
        r = o.length;

    for (i = 0; i < r; i++) {
      if ("object" == _typeof(s) || "undefined" == typeof s ? o[i].slick = new e(o[i], s) : t = o[i].slick[s].apply(o[i].slick, n), "undefined" != typeof t) return t;
    }

    return o;
  };
});

;
/*!
 * fullPage 3.0.8
 * https://github.com/alvarotrigo/fullPage.js
 *
 * @license GPLv3 for open source use only
 * or Fullpage Commercial License for commercial use
 * http://alvarotrigo.com/fullPage/pricing/
 *
 * Copyright (C) 2018 http://alvarotrigo.com/fullPage - A project by Alvaro Trigo
 */

!function (e, t, n, o, r) {
  "function" == typeof define && define.amd ? define(function () {
    return e.fullpage = o(t, n), e.fullpage;
  }) : "object" == (typeof exports === "undefined" ? "undefined" : _typeof(exports)) ? module.exports = o(t, n) : t.fullpage = o(t, n);
}(void 0, window, document, function (Rt, Nt) {
  "use strict";

  var zt = "fullpage-wrapper",
      jt = "." + zt,
      Pt = "fp-responsive",
      Dt = "fp-notransition",
      Vt = "fp-destroyed",
      Wt = "fp-enabled",
      Yt = "fp-viewing",
      Ft = "active",
      Ut = "." + Ft,
      Xt = "fp-completely",
      Kt = "fp-section",
      _t = "." + Kt,
      $t = _t + Ut,
      qt = "fp-tableCell",
      Qt = "." + qt,
      Gt = "fp-auto-height",
      Jt = "fp-normal-scroll",
      Zt = "fp-nav",
      en = "#" + Zt,
      tn = "fp-tooltip",
      nn = "fp-slide",
      on = "." + nn,
      rn = on + Ut,
      ln = "fp-slides",
      an = "." + ln,
      sn = "fp-slidesContainer",
      cn = "." + sn,
      un = "fp-table",
      fn = "fp-slidesNav",
      dn = "." + fn,
      vn = dn + " a",
      e = "fp-controlArrow",
      pn = "." + e,
      hn = "fp-prev",
      gn = pn + ".fp-prev",
      mn = pn + ".fp-next";

  function Sn(e, t) {
    Rt.console && Rt.console[e] && Rt.console[e]("fullPage: " + t);
  }

  function wn(e, t) {
    return (t = 1 < arguments.length ? t : Nt) ? t.querySelectorAll(e) : null;
  }

  function bn(e) {
    e = e || {};

    for (var t = 1, n = arguments.length; t < n; ++t) {
      var o = arguments[t];
      if (o) for (var r in o) {
        o.hasOwnProperty(r) && ("[object Object]" !== Object.prototype.toString.call(o[r]) ? e[r] = o[r] : e[r] = bn(e[r], o[r]));
      }
    }

    return e;
  }

  function yn(e, t) {
    return null != e && (e.classList ? e.classList.contains(t) : new RegExp("(^| )" + t + "( |$)", "gi").test(e.className));
  }

  function En() {
    return "innerHeight" in Rt ? Rt.innerHeight : Nt.documentElement.offsetHeight;
  }

  function Ln() {
    return Rt.innerWidth;
  }

  function xn(e, t) {
    var n;

    for (n in e = l(e), t) {
      if (t.hasOwnProperty(n) && null !== n) for (var o = 0; o < e.length; o++) {
        e[o].style[n] = t[n];
      }
    }

    return e;
  }

  function n(e, t, n) {
    for (var o = e[n]; o && !_n(o, t);) {
      o = o[n];
    }

    return o;
  }

  function An(e, t) {
    return n(e, t, "previousElementSibling");
  }

  function Tn(e, t) {
    return n(e, t, "nextElementSibling");
  }

  function kn(e) {
    return e.previousElementSibling;
  }

  function On(e) {
    return e.nextElementSibling;
  }

  function Mn(e) {
    return e[e.length - 1];
  }

  function Cn(e, t) {
    e = i(e) ? e[0] : e;

    for (var n = null != t ? wn(t, e.parentNode) : e.parentNode.childNodes, o = 0, r = 0; r < n.length; r++) {
      if (n[r] == e) return o;
      1 == n[r].nodeType && o++;
    }

    return -1;
  }

  function l(e) {
    return i(e) ? e : [e];
  }

  function Hn(e) {
    e = l(e);

    for (var t = 0; t < e.length; t++) {
      e[t].style.display = "none";
    }

    return e;
  }

  function In(e) {
    e = l(e);

    for (var t = 0; t < e.length; t++) {
      e[t].style.display = "block";
    }

    return e;
  }

  function i(e) {
    return "[object Array]" === Object.prototype.toString.call(e) || "[object NodeList]" === Object.prototype.toString.call(e);
  }

  function Bn(e, t) {
    e = l(e);

    for (var n = 0; n < e.length; n++) {
      var o = e[n];
      o.classList ? o.classList.add(t) : o.className += " " + t;
    }

    return e;
  }

  function Rn(e, t) {
    e = l(e);

    for (var n = t.split(" "), o = 0; o < n.length; o++) {
      t = n[o];

      for (var r = 0; r < e.length; r++) {
        var i = e[r];
        i.classList ? i.classList.remove(t) : i.className = i.className.replace(new RegExp("(^|\\b)" + t.split(" ").join("|") + "(\\b|$)", "gi"), " ");
      }
    }

    return e;
  }

  function Nn(e, t) {
    t.appendChild(e);
  }

  function o(e, t, n) {
    var o;
    t = t || Nt.createElement("div");

    for (var r = 0; r < e.length; r++) {
      var i = e[r];
      (n && !r || !n) && (o = t.cloneNode(!0), i.parentNode.insertBefore(o, i)), o.appendChild(i);
    }

    return e;
  }

  function zn(e, t) {
    o(e, t, !0);
  }

  function jn(e, t) {
    for ("string" == typeof t && (t = qn(t)), e.appendChild(t); e.firstChild !== t;) {
      t.appendChild(e.firstChild);
    }
  }

  function Pn(e) {
    for (var t = Nt.createDocumentFragment(); e.firstChild;) {
      t.appendChild(e.firstChild);
    }

    e.parentNode.replaceChild(t, e);
  }

  function Dn(e, t) {
    return e && 1 === e.nodeType ? _n(e, t) ? e : Dn(e.parentNode, t) : null;
  }

  function Vn(e, t) {
    r(e, e.nextSibling, t);
  }

  function Wn(e, t) {
    r(e, e, t);
  }

  function r(e, t, n) {
    i(n) || ("string" == typeof n && (n = qn(n)), n = [n]);

    for (var o = 0; o < n.length; o++) {
      e.parentNode.insertBefore(n[o], t);
    }
  }

  function Yn() {
    var e = Nt.documentElement;
    return (Rt.pageYOffset || e.scrollTop) - (e.clientTop || 0);
  }

  function Fn(t) {
    return Array.prototype.filter.call(t.parentNode.children, function (e) {
      return e !== t;
    });
  }

  function Un(e) {
    e.preventDefault ? e.preventDefault() : e.returnValue = !1;
  }

  function Xn(e) {
    if ("function" == typeof e) return !0;
    var t = Object.prototype.toString(e);
    return "[object Function]" === t || "[object GeneratorFunction]" === t;
  }

  function Kn(e, t, n) {
    var o;
    n = void 0 === n ? {} : n, "function" == typeof Rt.CustomEvent ? o = new CustomEvent(t, {
      detail: n
    }) : (o = Nt.createEvent("CustomEvent")).initCustomEvent(t, !0, !0, n), e.dispatchEvent(o);
  }

  function _n(e, t) {
    return (e.matches || e.matchesSelector || e.msMatchesSelector || e.mozMatchesSelector || e.webkitMatchesSelector || e.oMatchesSelector).call(e, t);
  }

  function $n(e, t) {
    if ("boolean" == typeof t) for (var n = 0; n < e.length; n++) {
      e[n].style.display = t ? "block" : "none";
    }
    return e;
  }

  function qn(e) {
    var t = Nt.createElement("div");
    return t.innerHTML = e.trim(), t.firstChild;
  }

  function Qn(e) {
    e = l(e);

    for (var t = 0; t < e.length; t++) {
      var n = e[t];
      n && n.parentElement && n.parentNode.removeChild(n);
    }
  }

  function a(e, t, n) {
    for (var o = e[n], r = []; o;) {
      (_n(o, t) || null == t) && r.push(o), o = o[n];
    }

    return r;
  }

  function Gn(e, t) {
    return a(e, t, "nextElementSibling");
  }

  function Jn(e, t) {
    return a(e, t, "previousElementSibling");
  }

  return Rt.NodeList && !NodeList.prototype.forEach && (NodeList.prototype.forEach = function (e, t) {
    t = t || Rt;

    for (var n = 0; n < this.length; n++) {
      e.call(t, this[n], n, this);
    }
  }), Rt.fp_utils = {
    $: wn,
    deepExtend: bn,
    hasClass: yn,
    getWindowHeight: En,
    css: xn,
    until: n,
    prevUntil: An,
    nextUntil: Tn,
    prev: kn,
    next: On,
    last: Mn,
    index: Cn,
    getList: l,
    hide: Hn,
    show: In,
    isArrayOrList: i,
    addClass: Bn,
    removeClass: Rn,
    appendTo: Nn,
    wrap: o,
    wrapAll: zn,
    wrapInner: jn,
    unwrap: Pn,
    closest: Dn,
    after: Vn,
    before: Wn,
    insertBefore: r,
    getScrollTop: Yn,
    siblings: Fn,
    preventDefault: Un,
    isFunction: Xn,
    trigger: Kn,
    matches: _n,
    toggle: $n,
    createElementFromHTML: qn,
    remove: Qn,
    filter: function filter(e, t) {
      Array.prototype.filter.call(e, t);
    },
    untilAll: a,
    nextAll: Gn,
    prevAll: Jn,
    showError: Sn
  }, function (e, E) {
    var n = E && new RegExp("([\\d\\w]{8}-){3}[\\d\\w]{8}|^(?=.*?[A-Y])(?=.*?[a-y])(?=.*?[0-8])(?=.*?[#?!@$%^&*-]).{8,}$").test(E.licenseKey) || -1 < Nt.domain.indexOf("alvarotrigo.com"),
        r = wn("html, body"),
        u = wn("html")[0],
        L = wn("body")[0];

    if (!yn(u, Wt)) {
      var h = {};
      E = bn({
        menu: !1,
        anchors: [],
        lockAnchors: !1,
        navigation: !1,
        navigationPosition: "right",
        navigationTooltips: [],
        showActiveTooltip: !1,
        slidesNavigation: !1,
        slidesNavPosition: "bottom",
        scrollBar: !1,
        hybrid: !1,
        css3: !0,
        scrollingSpeed: 700,
        autoScrolling: !0,
        fitToSection: !0,
        fitToSectionDelay: 1e3,
        easing: "easeInOutCubic",
        easingcss3: "ease",
        loopBottom: !1,
        loopTop: !1,
        loopHorizontal: !0,
        continuousVertical: !1,
        continuousHorizontal: !1,
        scrollHorizontally: !1,
        interlockedSlides: !1,
        dragAndMove: !1,
        offsetSections: !1,
        resetSliders: !1,
        fadingEffect: !1,
        normalScrollElements: null,
        scrollOverflow: !1,
        scrollOverflowReset: !1,
        scrollOverflowHandler: Rt.fp_scrolloverflow ? Rt.fp_scrolloverflow.iscrollHandler : null,
        scrollOverflowOptions: null,
        touchSensitivity: 5,
        touchWrapper: "string" == typeof e ? wn(e)[0] : e,
        bigSectionsDestination: null,
        keyboardScrolling: !0,
        animateAnchor: !0,
        recordHistory: !0,
        controlArrows: !0,
        controlArrowColor: "#fff",
        verticalCentered: !0,
        sectionsColor: [],
        paddingTop: 0,
        paddingBottom: 0,
        fixedElements: null,
        responsive: 0,
        responsiveWidth: 0,
        responsiveHeight: 0,
        responsiveSlides: !1,
        parallax: !1,
        parallaxOptions: {
          type: "reveal",
          percentage: 62,
          property: "translate"
        },
        cards: !1,
        cardsOptions: {
          perspective: 100,
          fadeContent: !0,
          fadeBackground: !0
        },
        sectionSelector: ".section",
        slideSelector: ".slide",
        v2compatible: !1,
        afterLoad: null,
        onLeave: null,
        afterRender: null,
        afterResize: null,
        afterReBuild: null,
        afterSlideLoad: null,
        onSlideLeave: null,
        afterResponsive: null,
        lazyLoading: !0
      }, E);
      var x,
          i,
          c,
          f,
          a = !1,
          o = navigator.userAgent.match(/(iPhone|iPod|iPad|Android|playbook|silk|BlackBerry|BB10|Windows Phone|Tizen|Bada|webOS|IEMobile|Opera Mini)/),
          l = "ontouchstart" in Rt || 0 < navigator.msMaxTouchPoints || navigator.maxTouchPoints,
          d = "string" == typeof e ? wn(e)[0] : e,
          A = En(),
          s = Ln(),
          g = !1,
          t = !0,
          T = !0,
          v = [],
          p = {
        m: {
          up: !0,
          down: !0,
          left: !0,
          right: !0
        }
      };
      p.k = bn({}, p.m);
      var m,
          S,
          w,
          b,
          y,
          k,
          O,
          M,
          C,
          H = Rt.PointerEvent ? {
        down: "pointerdown",
        move: "pointermove"
      } : {
        down: "MSPointerDown",
        move: "MSPointerMove"
      },
          I = {
        touchmove: "ontouchmove" in Rt ? "touchmove" : H.move,
        touchstart: "ontouchstart" in Rt ? "touchstart" : H.down
      },
          B = 'a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), iframe, object, embed, [tabindex="0"], [contenteditable]',
          R = !1;

      try {
        var N = Object.defineProperty({}, "passive", {
          get: function get() {
            R = !0;
          }
        });
        Rt.addEventListener("testPassive", null, N), Rt.removeEventListener("testPassive", null, N);
      } catch (e) {}

      var z,
          j,
          P = bn({}, E),
          D = !1,
          V = !0,
          W = ["parallax", "scrollOverflowReset", "dragAndMove", "offsetSections", "fadingEffect", "responsiveSlides", "continuousHorizontal", "interlockedSlides", "scrollHorizontally", "resetSliders", "cards"];
      Ot(), Rt.fp_easings = bn(Rt.fp_easings, {
        easeInOutCubic: function easeInOutCubic(e, t, n, o) {
          return (e /= o / 2) < 1 ? n / 2 * e * e * e + t : n / 2 * ((e -= 2) * e * e + 2) + t;
        }
      }), d && (h.version = "3.0.8", h.setAutoScrolling = J, h.setRecordHistory = Z, h.setScrollingSpeed = ee, h.setFitToSection = te, h.setLockAnchors = function (e) {
        E.lockAnchors = e;
      }, h.setMouseWheelScrolling = ne, h.setAllowScrolling = oe, h.setKeyboardScrolling = ie, h.moveSectionUp = le, h.moveSectionDown = ae, h.silentMoveTo = se, h.moveTo = ce, h.moveSlideRight = ue, h.moveSlideLeft = fe, h.fitToSection = Le, h.reBuild = de, h.setResponsive = pe, h.getFullpageData = function () {
        return E;
      }, h.destroy = function (e) {
        J(!1, "internal"), oe(!0), re(!1), ie(!1), Bn(d, Vt), [y, b, S, k, O, C, w].forEach(function (e) {
          clearTimeout(e);
        }), Rt.removeEventListener("scroll", Ee), Rt.removeEventListener("hashchange", $e), Rt.removeEventListener("resize", it), Nt.removeEventListener("keydown", Qe), Nt.removeEventListener("keyup", Ge), ["click", "touchstart"].forEach(function (e) {
          Nt.removeEventListener(e, he);
        }), ["mouseenter", "touchstart", "mouseleave", "touchend"].forEach(function (e) {
          Nt.removeEventListener(e, me, !0);
        }), e && (xt(0), wn("img[data-src], source[data-src], audio[data-src], iframe[data-src]", d).forEach(function (e) {
          De(e, "src");
        }), wn("img[data-srcset]").forEach(function (e) {
          De(e, "srcset");
        }), Qn(wn(en + ", " + dn + ", " + pn)), xn(wn(_t), {
          height: "",
          "background-color": "",
          padding: ""
        }), xn(wn(on), {
          width: ""
        }), xn(d, {
          height: "",
          position: "",
          "-ms-touch-action": "",
          "touch-action": ""
        }), xn(r, {
          overflow: "",
          height: ""
        }), Rn(u, Wt), Rn(L, Pt), L.className.split(/\s+/).forEach(function (e) {
          0 === e.indexOf(Yt) && Rn(L, e);
        }), wn(_t + ", " + on).forEach(function (e) {
          E.scrollOverflowHandler && E.scrollOverflow && E.scrollOverflowHandler.remove(e), Rn(e, un + " " + Ft + " " + Xt);
          var t = e.getAttribute("data-fp-styles");
          t && e.setAttribute("style", e.getAttribute("data-fp-styles")), yn(e, Kt) && !D && e.removeAttribute("data-anchor");
        }), ct(d), [Qt, cn, an].forEach(function (e) {
          wn(e, d).forEach(function (e) {
            Pn(e);
          });
        }), xn(d, {
          "-webkit-transition": "none",
          transition: "none"
        }), Rt.scrollTo(0, 0), [Kt, nn, sn].forEach(function (e) {
          Rn(wn("." + e), e);
        }));
      }, h.getActiveSection = function () {
        return new It(wn($t)[0]);
      }, h.getActiveSlide = function () {
        return ze(wn(rn, wn($t)[0])[0]);
      }, h.test = {
        top: "0px",
        translate3d: "translate3d(0px, 0px, 0px)",
        translate3dH: function () {
          for (var e = [], t = 0; t < wn(E.sectionSelector, d).length; t++) {
            e.push("translate3d(0px, 0px, 0px)");
          }

          return e;
        }(),
        left: function () {
          for (var e = [], t = 0; t < wn(E.sectionSelector, d).length; t++) {
            e.push(0);
          }

          return e;
        }(),
        options: E,
        setAutoScrolling: J
      }, h.shared = {
        afterRenderActions: ye,
        isNormalScrollElement: !1
      }, Rt.fullpage_api = h, E.$ && Object.keys(h).forEach(function (e) {
        E.$.fn.fullpage[e] = h[e];
      }), E.css3 && (E.css3 = function () {
        var e,
            t = Nt.createElement("p"),
            n = {
          webkitTransform: "-webkit-transform",
          OTransform: "-o-transform",
          msTransform: "-ms-transform",
          MozTransform: "-moz-transform",
          transform: "transform"
        };

        for (var o in t.style.display = "block", Nt.body.insertBefore(t, null), n) {
          void 0 !== t.style[o] && (t.style[o] = "translate3d(1px,1px,1px)", e = Rt.getComputedStyle(t).getPropertyValue(n[o]));
        }

        return Nt.body.removeChild(t), void 0 !== e && 0 < e.length && "none" !== e;
      }()), E.scrollBar = E.scrollBar || E.hybrid, function () {
        if (!E.anchors.length) {
          var e = "[data-anchor]",
              t = wn(E.sectionSelector.split(",").join(e + ",") + e, d);
          t.length && (D = !0, t.forEach(function (e) {
            E.anchors.push(e.getAttribute("data-anchor").toString());
          }));
        }

        if (!E.navigationTooltips.length) {
          var n = "[data-tooltip]",
              o = wn(E.sectionSelector.split(",").join(n + ",") + n, d);
          o.length && o.forEach(function (e) {
            E.navigationTooltips.push(e.getAttribute("data-tooltip").toString());
          });
        }
      }(), function () {
        xn(d, {
          height: "100%",
          position: "relative"
        }), Bn(d, zt), Bn(u, Wt), A = En(), Rn(d, Vt), Bn(wn(E.sectionSelector, d), Kt), Bn(wn(E.slideSelector, d), nn);

        for (var e = wn(_t), t = 0; t < e.length; t++) {
          var n = t,
              o = e[t],
              r = wn(on, o),
              i = r.length;
          o.setAttribute("data-fp-styles", o.getAttribute("style")), s = o, (c = n) || null != wn($t)[0] || Bn(s, Ft), f = wn($t)[0], xn(s, {
            height: A + "px"
          }), E.paddingTop && xn(s, {
            "padding-top": E.paddingTop
          }), E.paddingBottom && xn(s, {
            "padding-bottom": E.paddingBottom
          }), void 0 !== E.sectionsColor[c] && xn(s, {
            "background-color": E.sectionsColor[c]
          }), void 0 !== E.anchors[c] && s.setAttribute("data-anchor", E.anchors[c]), l = o, a = n, void 0 !== E.anchors[a] && yn(l, Ft) && ut(E.anchors[a], a), E.menu && E.css3 && null != Dn(wn(E.menu)[0], jt) && wn(E.menu).forEach(function (e) {
            L.appendChild(e);
          }), 0 < i ? we(o, r, i) : E.verticalCentered && dt(o);
        }

        var l, a, s, c;
        E.fixedElements && E.css3 && wn(E.fixedElements).forEach(function (e) {
          L.appendChild(e);
        }), E.navigation && function () {
          var e = Nt.createElement("div");
          e.setAttribute("id", Zt);
          var t = Nt.createElement("ul");
          e.appendChild(t), Nn(e, L);
          var n = wn(en)[0];
          Bn(n, "fp-" + E.navigationPosition), E.showActiveTooltip && Bn(n, "fp-show-active");

          for (var o = "", r = 0; r < wn(_t).length; r++) {
            var i = "";
            E.anchors.length && (i = E.anchors[r]), o += '<li><a href="#' + i + '"><span class="fp-sr-only">' + be(r, "Section") + "</span><span></span></a>";
            var l = E.navigationTooltips[r];
            void 0 !== l && "" !== l && (o += '<div class="' + tn + " fp-" + E.navigationPosition + '">' + l + "</div>"), o += "</li>";
          }

          wn("ul", n)[0].innerHTML = o, xn(wn(en), {
            "margin-top": "-" + wn(en)[0].offsetHeight / 2 + "px"
          }), Bn(wn("a", wn("li", wn(en)[0])[Cn(wn($t)[0], _t)]), Ft);
        }(), wn('iframe[src*="youtube.com/embed/"]', d).forEach(function (e) {
          var t, n, o;
          n = "enablejsapi=1", o = (t = e).getAttribute("src"), t.setAttribute("src", o + (/\?/.test(o) ? "&" : "?") + n);
        }), E.scrollOverflow && (m = E.scrollOverflowHandler.init(E));
      }(), oe(!0), re(!0), J(E.autoScrolling, "internal"), at(), yt(), "complete" === Nt.readyState && _e(), Rt.addEventListener("load", _e), E.scrollOverflow || ye(), function () {
        for (var e = 1; e < 4; e++) {
          C = setTimeout(Se, 350 * e);
        }
      }(), Rt.addEventListener("scroll", Ee), Rt.addEventListener("hashchange", $e), Rt.addEventListener("blur", tt), Rt.addEventListener("resize", it), Nt.addEventListener("keydown", Qe), Nt.addEventListener("keyup", Ge), ["click", "touchstart"].forEach(function (e) {
        Nt.addEventListener(e, he);
      }), E.normalScrollElements && (["mouseenter", "touchstart"].forEach(function (e) {
        ge(e, !1);
      }), ["mouseleave", "touchend"].forEach(function (e) {
        ge(e, !0);
      })));
      var Y = !1,
          F = 0,
          U = 0,
          X = 0,
          K = 0,
          _ = 0,
          $ = new Date().getTime(),
          q = 0,
          Q = 0,
          G = A;
      return h;
    }

    function J(e, t) {
      e || xt(0), kt("autoScrolling", e, t);
      var n = wn($t)[0];
      if (E.autoScrolling && !E.scrollBar) xn(r, {
        overflow: "hidden",
        height: "100%"
      }), Z(P.recordHistory, "internal"), xn(d, {
        "-ms-touch-action": "none",
        "touch-action": "none"
      }), null != n && xt(n.offsetTop);else if (xn(r, {
        overflow: "visible",
        height: "initial"
      }), Z(!!E.autoScrolling && P.recordHistory, "internal"), xn(d, {
        "-ms-touch-action": "",
        "touch-action": ""
      }), null != n) {
        var o = je(n.offsetTop);
        o.element.scrollTo(0, o.options);
      }
    }

    function Z(e, t) {
      kt("recordHistory", e, t);
    }

    function ee(e, t) {
      kt("scrollingSpeed", e, t);
    }

    function te(e, t) {
      kt("fitToSection", e, t);
    }

    function ne(e) {
      e ? (function () {
        var e,
            t = "";
        Rt.addEventListener ? e = "addEventListener" : (e = "attachEvent", t = "on");
        var n = "onwheel" in Nt.createElement("div") ? "wheel" : void 0 !== Nt.onmousewheel ? "mousewheel" : "DOMMouseScroll",
            o = !!R && {
          passive: !1
        };
        "DOMMouseScroll" == n ? Nt[e](t + "MozMousePixelScroll", Ce, o) : Nt[e](t + n, Ce, o);
      }(), d.addEventListener("mousedown", Je), d.addEventListener("mouseup", Ze)) : (Nt.addEventListener ? (Nt.removeEventListener("mousewheel", Ce, !1), Nt.removeEventListener("wheel", Ce, !1), Nt.removeEventListener("MozMousePixelScroll", Ce, !1)) : Nt.detachEvent("onmousewheel", Ce), d.removeEventListener("mousedown", Je), d.removeEventListener("mouseup", Ze));
    }

    function oe(t, e) {
      void 0 !== e ? (e = e.replace(/ /g, "").split(",")).forEach(function (e) {
        Tt(t, e, "m");
      }) : Tt(t, "all", "m");
    }

    function re(e) {
      e ? (ne(!0), function () {
        if (o || l) {
          E.autoScrolling && (L.removeEventListener(I.touchmove, Ae, {
            passive: !1
          }), L.addEventListener(I.touchmove, Ae, {
            passive: !1
          }));
          var e = E.touchWrapper;
          e.removeEventListener(I.touchstart, Oe), e.removeEventListener(I.touchmove, Te, {
            passive: !1
          }), e.addEventListener(I.touchstart, Oe), e.addEventListener(I.touchmove, Te, {
            passive: !1
          });
        }
      }()) : (ne(!1), function () {
        if (o || l) {
          E.autoScrolling && (L.removeEventListener(I.touchmove, Te, {
            passive: !1
          }), L.removeEventListener(I.touchmove, Ae, {
            passive: !1
          }));
          var e = E.touchWrapper;
          e.removeEventListener(I.touchstart, Oe), e.removeEventListener(I.touchmove, Te, {
            passive: !1
          });
        }
      }());
    }

    function ie(t, e) {
      void 0 !== e ? (e = e.replace(/ /g, "").split(",")).forEach(function (e) {
        Tt(t, e, "k");
      }) : (Tt(t, "all", "k"), E.keyboardScrolling = t);
    }

    function le() {
      var e = An(wn($t)[0], _t);
      e || !E.loopTop && !E.continuousVertical || (e = Mn(wn(_t))), null != e && Be(e, null, !0);
    }

    function ae() {
      var e = Tn(wn($t)[0], _t);
      e || !E.loopBottom && !E.continuousVertical || (e = wn(_t)[0]), null != e && Be(e, null, !1);
    }

    function se(e, t) {
      ee(0, "internal"), ce(e, t), ee(P.scrollingSpeed, "internal");
    }

    function ce(e, t) {
      var n = ht(e);
      void 0 !== t ? gt(e, t) : null != n && Be(n);
    }

    function ue(e) {
      He("right", e);
    }

    function fe(e) {
      He("left", e);
    }

    function de(e) {
      if (!yn(d, Vt)) {
        g = !0, A = En(), s = Ln();

        for (var t = wn(_t), n = 0; n < t.length; ++n) {
          var o = t[n],
              r = wn(an, o)[0],
              i = wn(on, o);
          E.verticalCentered && xn(wn(Qt, o), {
            height: vt(o) + "px"
          }), xn(o, {
            height: A + "px"
          }), 1 < i.length && ot(r, wn(rn, r)[0]);
        }

        E.scrollOverflow && m.createScrollBarForAll();
        var l = Cn(wn($t)[0], _t);
        l && se(l + 1), g = !1, Xn(E.afterResize) && e && E.afterResize.call(d, Rt.innerWidth, Rt.innerHeight), Xn(E.afterReBuild) && !e && E.afterReBuild.call(d);
      }
    }

    function ve() {
      return yn(L, Pt);
    }

    function pe(e) {
      var t = ve();
      e ? t || (J(!1, "internal"), te(!1, "internal"), Hn(wn(en)), Bn(L, Pt), Xn(E.afterResponsive) && E.afterResponsive.call(d, e), E.scrollOverflow && m.createScrollBarForAll()) : t && (J(P.autoScrolling, "internal"), te(P.autoScrolling, "internal"), In(wn(en)), Rn(L, Pt), Xn(E.afterResponsive) && E.afterResponsive.call(d, e));
    }

    function he(e) {
      var t = e.target;
      t && Dn(t, en + " a") ? function (e) {
        Un(e);
        var t = Cn(Dn(this, en + " li"));
        Be(wn(_t)[t]);
      }.call(t, e) : _n(t, ".fp-tooltip") ? function () {
        Kn(kn(this), "click");
      }.call(t) : _n(t, pn) ? function () {
        var e = Dn(this, _t);
        yn(this, hn) ? p.m.left && fe(e) : p.m.right && ue(e);
      }.call(t, e) : _n(t, vn) || null != Dn(t, vn) ? function (e) {
        Un(e);
        var t = wn(an, Dn(this, _t))[0],
            n = wn(on, t)[Cn(Dn(this, "li"))];
        ot(t, n);
      }.call(t, e) : Dn(t, E.menu + " [data-menuanchor]") && function (e) {
        !wn(E.menu)[0] || !E.lockAnchors && E.anchors.length || (Un(e), ce(this.getAttribute("data-menuanchor")));
      }.call(t, e);
    }

    function ge(e, t) {
      Nt["fp_" + e] = t, Nt.addEventListener(e, me, !0);
    }

    function me(e) {
      var t = e.type,
          o = !1,
          r = E.scrollOverflow,
          i = "mouseleave" === t ? e.toElement || e.relatedTarget : e.target;
      if (i == Nt || !i) return re(!0), void (r && E.scrollOverflowHandler.setIscroll(i, !0));
      "touchend" === t && (V = !1, setTimeout(function () {
        V = !0;
      }, 800)), ("mouseenter" !== t || V) && (E.normalScrollElements.split(",").forEach(function (e) {
        if (!o) {
          var t = _n(i, e),
              n = Dn(i, e);

          (t || n) && (h.shared.isNormalScrollElement || (re(!1), r && E.scrollOverflowHandler.setIscroll(i, !1)), h.shared.isNormalScrollElement = !0, o = !0);
        }
      }), !o && h.shared.isNormalScrollElement && (re(!0), r && E.scrollOverflowHandler.setIscroll(i, !0), h.shared.isNormalScrollElement = !1));
    }

    function Se() {
      var e = En(),
          t = Ln();
      A === e && s === t || (A = e, s = t, de(!0));
    }

    function we(e, t, n) {
      var o = 100 * n,
          r = 100 / n,
          i = Nt.createElement("div");
      i.className = ln, zn(t, i);
      var l,
          a,
          s = Nt.createElement("div");
      s.className = sn, zn(t, s), xn(wn(cn, e), {
        width: o + "%"
      }), 1 < n && (E.controlArrows && (l = e, a = [qn('<div class="fp-controlArrow fp-prev"></div>'), qn('<div class="fp-controlArrow fp-next"></div>')], Vn(wn(an, l)[0], a), "#fff" !== E.controlArrowColor && (xn(wn(mn, l), {
        "border-color": "transparent transparent transparent " + E.controlArrowColor
      }), xn(wn(gn, l), {
        "border-color": "transparent " + E.controlArrowColor + " transparent transparent"
      })), E.loopHorizontal || Hn(wn(gn, l))), E.slidesNavigation && function (e, t) {
        Nn(qn('<div class="' + fn + '"><ul></ul></div>'), e);
        var n = wn(dn, e)[0];
        Bn(n, "fp-" + E.slidesNavPosition);

        for (var o = 0; o < t; o++) {
          Nn(qn('<li><a href="#"><span class="fp-sr-only">' + be(o, "Slide") + "</span><span></span></a></li>"), wn("ul", n)[0]);
        }

        xn(n, {
          "margin-left": "-" + n.innerWidth / 2 + "px"
        }), Bn(wn("a", wn("li", n)[0]), Ft);
      }(e, n)), t.forEach(function (e) {
        xn(e, {
          width: r + "%"
        }), E.verticalCentered && dt(e);
      });
      var c = wn(rn, e)[0];
      null != c && (0 !== Cn(wn($t), _t) || 0 === Cn(wn($t), _t) && 0 !== Cn(c)) ? Lt(c, "internal") : Bn(t[0], Ft);
    }

    function be(e, t) {
      return E.navigationTooltips[e] || E.anchors[e] || t + " " + (e + 1);
    }

    function ye() {
      var e,
          t,
          n = wn($t)[0];
      Bn(n, Xt), We(n), Ve(), Fe(n), E.scrollOverflow && E.scrollOverflowHandler.afterLoad(), e = qe(), t = ht(e.section), e.section && t && (void 0 === t || Cn(t) !== Cn(f)) || !Xn(E.afterLoad) || Re("afterLoad", {
        activeSection: n,
        element: n,
        direction: null,
        anchorLink: n.getAttribute("data-anchor"),
        sectionIndex: Cn(n, _t)
      }), Xn(E.afterRender) && Re("afterRender");
    }

    function Ee() {
      var e, t, n, o, r, i;

      if (!E.autoScrolling || E.scrollBar) {
        var l = Yn(),
            a = (i = F < (r = l) ? "down" : "up", q = F = r, i),
            s = 0,
            c = l + En() / 2,
            u = L.offsetHeight - En() === l,
            f = wn(_t);
        if (u) s = f.length - 1;else if (l) for (var d = 0; d < f.length; ++d) {
          f[d].offsetTop <= c && (s = d);
        } else s = 0;

        if (t = a, n = wn($t)[0].offsetTop, o = n + En(), ("up" != t ? n <= Yn() : o >= Yn() + En()) && (yn(wn($t)[0], Xt) || (Bn(wn($t)[0], Xt), Rn(Fn(wn($t)[0]), Xt))), !yn(e = f[s], Ft)) {
          Y = !0;
          var v,
              p,
              h = wn($t)[0],
              g = Cn(h, _t) + 1,
              m = ft(e),
              S = e.getAttribute("data-anchor"),
              w = Cn(e, _t) + 1,
              b = wn(rn, e)[0],
              y = {
            activeSection: h,
            sectionIndex: w - 1,
            anchorLink: S,
            element: e,
            leavingSection: g,
            direction: m
          };
          b && (p = b.getAttribute("data-anchor"), v = Cn(b)), T && (Bn(e, Ft), Rn(Fn(e), Ft), Xn(E.onLeave) && Re("onLeave", y), Xn(E.afterLoad) && Re("afterLoad", y), Xe(h), We(e), Fe(e), ut(S, w - 1), E.anchors.length && (x = S), St(v, p, S)), clearTimeout(k), k = setTimeout(function () {
            Y = !1;
          }, 100);
        }

        E.fitToSection && (clearTimeout(O), O = setTimeout(function () {
          E.fitToSection && wn($t)[0].offsetHeight <= A && Le();
        }, E.fitToSectionDelay));
      }
    }

    function Le() {
      T && (g = !0, Be(wn($t)[0]), g = !1);
    }

    function xe(e) {
      if (p.m[e]) {
        var t = "down" === e ? ae : le;

        if (E.scrollOverflow) {
          var n = E.scrollOverflowHandler.scrollable(wn($t)[0]),
              o = "down" === e ? "bottom" : "top";

          if (null != n) {
            if (!E.scrollOverflowHandler.isScrolled(o, n)) return !0;
            t();
          } else t();
        } else t();
      }
    }

    function Ae(e) {
      E.autoScrolling && ke(e) && p.m.up && Un(e);
    }

    function Te(e) {
      var t = Dn(e.target, _t) || wn($t)[0];

      if (ke(e)) {
        E.autoScrolling && Un(e);
        var n = Et(e);
        K = n.y, _ = n.x, wn(an, t).length && Math.abs(X - _) > Math.abs(U - K) ? !a && Math.abs(X - _) > Ln() / 100 * E.touchSensitivity && (_ < X ? p.m.right && ue(t) : p.m.left && fe(t)) : E.autoScrolling && T && Math.abs(U - K) > Rt.innerHeight / 100 * E.touchSensitivity && (K < U ? xe("down") : U < K && xe("up"));
      }
    }

    function ke(e) {
      return void 0 === e.pointerType || "mouse" != e.pointerType;
    }

    function Oe(e) {
      if (E.fitToSection && (z = !1), ke(e)) {
        var t = Et(e);
        U = t.y, X = t.x;
      }
    }

    function Me(e, t) {
      for (var n = 0, o = e.slice(Math.max(e.length - t, 1)), r = 0; r < o.length; r++) {
        n += o[r];
      }

      return Math.ceil(n / t);
    }

    function Ce(e) {
      var t = new Date().getTime(),
          n = yn(wn(".fp-completely")[0], Jt);
      if (!p.m.down && !p.m.up) return Un(e), !1;

      if (E.autoScrolling && !c && !n) {
        var o = (e = e || Rt.event).wheelDelta || -e.deltaY || -e.detail,
            r = Math.max(-1, Math.min(1, o)),
            i = void 0 !== e.wheelDeltaX || void 0 !== e.deltaX,
            l = Math.abs(e.wheelDeltaX) < Math.abs(e.wheelDelta) || Math.abs(e.deltaX) < Math.abs(e.deltaY) || !i;
        149 < v.length && v.shift(), v.push(Math.abs(o)), E.scrollBar && Un(e);
        var a = t - $;

        if ($ = t, 200 < a && (v = []), T) {
          var s = Me(v, 10);
          Me(v, 70) <= s && l && xe(r < 0 ? "down" : "up");
        }

        return !1;
      }

      E.fitToSection && (z = !1);
    }

    function He(e, t) {
      var n = null == t ? wn($t)[0] : t,
          o = wn(an, n)[0];

      if (!(null == o || a || wn(on, o).length < 2)) {
        var r = wn(rn, o)[0],
            i = null;

        if (null == (i = "left" === e ? An(r, on) : Tn(r, on))) {
          if (!E.loopHorizontal) return;
          var l = Fn(r);
          i = "left" === e ? l[l.length - 1] : l[0];
        }

        a = !h.test.isTesting, ot(o, i, e);
      }
    }

    function Ie() {
      for (var e = wn(rn), t = 0; t < e.length; t++) {
        Lt(e[t], "internal");
      }
    }

    function Be(e, t, n) {
      if (null != e) {
        var o,
            r,
            i,
            l,
            a,
            s,
            c,
            u,
            f,
            d = {
          element: e,
          callback: t,
          isMovementUp: n,
          dtop: (r = (o = e).offsetHeight, i = o.offsetTop, a = q < (l = i), s = l - A + r, c = E.bigSectionsDestination, A < r ? (a || c) && "bottom" !== c || (l = s) : (a || g && null == On(o)) && (l = s), q = l),
          yMovement: ft(e),
          anchorLink: e.getAttribute("data-anchor"),
          sectionIndex: Cn(e, _t),
          activeSlide: wn(rn, e)[0],
          activeSection: wn($t)[0],
          leavingSection: Cn(wn($t), _t) + 1,
          localIsResizing: g
        };

        if (!(d.activeSection == e && !g || E.scrollBar && Yn() === d.dtop && !yn(e, Gt))) {
          if (null != d.activeSlide && (u = d.activeSlide.getAttribute("data-anchor"), f = Cn(d.activeSlide)), !d.localIsResizing) {
            var v = d.yMovement;
            if (void 0 !== n && (v = n ? "up" : "down"), d.direction = v, Xn(E.onLeave) && !1 === Re("onLeave", d)) return;
          }

          E.autoScrolling && E.continuousVertical && void 0 !== d.isMovementUp && (!d.isMovementUp && "up" == d.yMovement || d.isMovementUp && "down" == d.yMovement) && ((p = d).isMovementUp ? Wn(wn($t)[0], Gn(p.activeSection, _t)) : Vn(wn($t)[0], Jn(p.activeSection, _t).reverse()), xt(wn($t)[0].offsetTop), Ie(), p.wrapAroundElements = p.activeSection, p.dtop = p.element.offsetTop, p.yMovement = ft(p.element), d = p), d.localIsResizing || Xe(d.activeSection), E.scrollOverflow && E.scrollOverflowHandler.beforeLeave(), Bn(e, Ft), Rn(Fn(e), Ft), We(e), E.scrollOverflow && E.scrollOverflowHandler.onLeave(), T = h.test.isTesting, St(f, u, d.anchorLink, d.sectionIndex), function (e) {
            if (E.css3 && E.autoScrolling && !E.scrollBar) {
              var t = "translate3d(0px, -" + Math.round(e.dtop) + "px, 0px)";
              pt(t, !0), E.scrollingSpeed ? (clearTimeout(b), b = setTimeout(function () {
                Pe(e);
              }, E.scrollingSpeed)) : Pe(e);
            } else {
              var n = je(e.dtop);
              h.test.top = -e.dtop + "px", Mt(n.element, n.options, E.scrollingSpeed, function () {
                E.scrollBar ? setTimeout(function () {
                  Pe(e);
                }, 30) : Pe(e);
              });
            }
          }(d), x = d.anchorLink, ut(d.anchorLink, d.sectionIndex);
        }
      }

      var p;
    }

    function Re(e, t) {
      var n,
          o,
          r,
          i,
          l = (o = e, r = t, (i = E.v2compatible ? {
        afterRender: function afterRender() {
          return [d];
        },
        onLeave: function onLeave() {
          return [r.activeSection, r.leavingSection, r.sectionIndex + 1, r.direction];
        },
        afterLoad: function afterLoad() {
          return [r.element, r.anchorLink, r.sectionIndex + 1];
        },
        afterSlideLoad: function afterSlideLoad() {
          return [r.destiny, r.anchorLink, r.sectionIndex + 1, r.slideAnchor, r.slideIndex];
        },
        onSlideLeave: function onSlideLeave() {
          return [r.prevSlide, r.anchorLink, r.sectionIndex + 1, r.prevSlideIndex, r.direction, r.slideIndex];
        }
      } : {
        afterRender: function afterRender() {
          return {
            section: Ne(wn($t)[0]),
            slide: ze(wn(rn, wn($t)[0])[0])
          };
        },
        onLeave: function onLeave() {
          return {
            origin: Ne(r.activeSection),
            destination: Ne(r.element),
            direction: r.direction
          };
        },
        afterLoad: function afterLoad() {
          return i.onLeave();
        },
        afterSlideLoad: function afterSlideLoad() {
          return {
            section: Ne(r.section),
            origin: ze(r.prevSlide),
            destination: ze(r.destiny),
            direction: r.direction
          };
        },
        onSlideLeave: function onSlideLeave() {
          return i.afterSlideLoad();
        }
      })[o]());

      if (E.v2compatible) {
        if (!1 === E[e].apply(l[0], l.slice(1))) return !1;
      } else if (Kn(d, e, l), !1 === E[e].apply(l[Object.keys(l)[0]], (n = l, Object.keys(n).map(function (e) {
        return n[e];
      })))) return !1;

      return !0;
    }

    function Ne(e) {
      return e ? new It(e) : null;
    }

    function ze(e) {
      return e ? new Bt(e) : null;
    }

    function je(e) {
      var t = {};
      return E.autoScrolling && !E.scrollBar ? (t.options = -e, t.element = wn(jt)[0]) : (t.options = e, t.element = Rt), t;
    }

    function Pe(e) {
      var t;
      null != (t = e).wrapAroundElements && (t.isMovementUp ? Wn(wn(_t)[0], t.wrapAroundElements) : Vn(wn(_t)[wn(_t).length - 1], t.wrapAroundElements), xt(wn($t)[0].offsetTop), Ie()), Xn(E.afterLoad) && !e.localIsResizing && Re("afterLoad", e), E.scrollOverflow && E.scrollOverflowHandler.afterLoad(), e.localIsResizing || Fe(e.element), Bn(e.element, Xt), Rn(Fn(e.element), Xt), Ve(), T = !0, Xn(e.callback) && e.callback();
    }

    function De(e, t) {
      e.setAttribute(t, e.getAttribute("data-" + t)), e.removeAttribute("data-" + t);
    }

    function Ve() {
      var e = wn(".fp-auto-height")[0] || ve() && wn(".fp-auto-height-responsive")[0];
      E.lazyLoading && e && wn(_t + ":not(" + Ut + ")").forEach(function (e) {
        var t, n, o;
        t = e.getBoundingClientRect(), n = t.top, o = t.bottom, (n + 2 < A && 0 < n || 2 < o && o < A) && We(e);
      });
    }

    function We(o) {
      E.lazyLoading && wn("img[data-src], img[data-srcset], source[data-src], source[data-srcset], video[data-src], audio[data-src], iframe[data-src]", Ke(o)).forEach(function (n) {
        if (["src", "srcset"].forEach(function (e) {
          var t = n.getAttribute("data-" + e);
          null != t && t && (De(n, e), n.addEventListener("load", function () {
            Ye(o);
          }));
        }), _n(n, "source")) {
          var e = Dn(n, "video, audio");
          e && (e.load(), e.onloadeddata = function () {
            Ye(o);
          });
        }
      });
    }

    function Ye(e) {
      E.scrollOverflow && (clearTimeout(j), j = setTimeout(function () {
        m.createScrollBar(e);
      }, 200));
    }

    function Fe(e) {
      var t = Ke(e);
      wn("video, audio", t).forEach(function (e) {
        e.hasAttribute("data-autoplay") && "function" == typeof e.play && e.play();
      }), wn('iframe[src*="youtube.com/embed/"]', t).forEach(function (e) {
        e.hasAttribute("data-autoplay") && Ue(e), e.onload = function () {
          e.hasAttribute("data-autoplay") && Ue(e);
        };
      });
    }

    function Ue(e) {
      e.contentWindow.postMessage('{"event":"command","func":"playVideo","args":""}', "*");
    }

    function Xe(e) {
      var t = Ke(e);
      wn("video, audio", t).forEach(function (e) {
        e.hasAttribute("data-keepplaying") || "function" != typeof e.pause || e.pause();
      }), wn('iframe[src*="youtube.com/embed/"]', t).forEach(function (e) {
        /youtube\.com\/embed\//.test(e.getAttribute("src")) && !e.hasAttribute("data-keepplaying") && e.contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}', "*");
      });
    }

    function Ke(e) {
      var t = wn(rn, e);
      return t.length && (e = t[0]), e;
    }

    function _e() {
      var e = qe(),
          t = e.section,
          n = e.slide;
      t && (E.animateAnchor ? gt(t, n) : se(t, n));
    }

    function $e() {
      if (!Y && !E.lockAnchors) {
        var e = qe(),
            t = e.section,
            n = e.slide,
            o = void 0 === x,
            r = void 0 === x && void 0 === n && !a;
        t && t.length && (t && t !== x && !o || r || !a && i != n) && gt(t, n);
      }
    }

    function qe() {
      var e,
          t,
          n = Rt.location.hash;

      if (n.length) {
        var o = n.replace("#", "").split("/"),
            r = -1 < n.indexOf("#/");
        e = r ? "/" + o[1] : decodeURIComponent(o[0]);
        var i = r ? o[2] : o[1];
        i && i.length && (t = decodeURIComponent(i));
      }

      return {
        section: e,
        slide: t
      };
    }

    function Qe(e) {
      clearTimeout(M);
      var t = Nt.activeElement,
          n = e.keyCode;
      9 === n ? function (e) {
        var t,
            n,
            o,
            r,
            i,
            l,
            a,
            s = e.shiftKey,
            c = Nt.activeElement,
            u = et(Ke(wn($t)[0]));

        function f(e) {
          return Un(e), u[0] ? u[0].focus() : null;
        }

        (t = e, n = et(Nt), o = n.indexOf(Nt.activeElement), r = t.shiftKey ? o - 1 : o + 1, i = n[r], l = ze(Dn(i, on)), a = Ne(Dn(i, _t)), l || a) && (c ? null == Dn(c, $t + "," + $t + " " + rn) && (c = f(e)) : f(e), (!s && c == u[u.length - 1] || s && c == u[0]) && Un(e));
      }(e) : _n(t, "textarea") || _n(t, "input") || _n(t, "select") || "true" === t.getAttribute("contentEditable") || "" === t.getAttribute("contentEditable") || !E.keyboardScrolling || !E.autoScrolling || (-1 < [40, 38, 32, 33, 34].indexOf(n) && Un(e), c = e.ctrlKey, M = setTimeout(function () {
        !function (e) {
          var t = e.shiftKey,
              n = Nt.activeElement,
              o = _n(n, "video") || _n(n, "audio");

          if (T || !([37, 39].indexOf(e.keyCode) < 0)) switch (e.keyCode) {
            case 38:
            case 33:
              p.k.up && le();
              break;

            case 32:
              if (t && p.k.up && !o) {
                le();
                break;
              }

            case 40:
            case 34:
              p.k.down && (32 === e.keyCode && o || ae());
              break;

            case 36:
              p.k.up && ce(1);
              break;

            case 35:
              p.k.down && ce(wn(_t).length);
              break;

            case 37:
              p.k.left && fe();
              break;

            case 39:
              p.k.right && ue();
          }
        }(e);
      }, 150));
    }

    function Ge(e) {
      t && (c = e.ctrlKey);
    }

    function Je(e) {
      2 == e.which && (Q = e.pageY, d.addEventListener("mousemove", nt));
    }

    function Ze(e) {
      2 == e.which && d.removeEventListener("mousemove", nt);
    }

    function et(e) {
      return [].slice.call(wn(B, e)).filter(function (e) {
        return "-1" !== e.getAttribute("tabindex") && null !== e.offsetParent;
      });
    }

    function tt() {
      c = t = !1;
    }

    function nt(e) {
      E.autoScrolling && (T && (e.pageY < Q && p.m.up ? le() : e.pageY > Q && p.m.down && ae()), Q = e.pageY);
    }

    function ot(e, t, n) {
      var o,
          r,
          i = Dn(e, _t),
          l = {
        slides: e,
        destiny: t,
        direction: n,
        destinyPos: {
          left: t.offsetLeft
        },
        slideIndex: Cn(t),
        section: i,
        sectionIndex: Cn(i, _t),
        anchorLink: i.getAttribute("data-anchor"),
        slidesNav: wn(dn, i)[0],
        slideAnchor: bt(t),
        prevSlide: wn(rn, i)[0],
        prevSlideIndex: Cn(wn(rn, i)[0]),
        localIsResizing: g
      };
      l.xMovement = (o = l.prevSlideIndex, r = l.slideIndex, o == r ? "none" : r < o ? "left" : "right"), l.direction = l.direction ? l.direction : l.xMovement, l.localIsResizing || (T = !1), E.onSlideLeave && !l.localIsResizing && "none" !== l.xMovement && Xn(E.onSlideLeave) && !1 === Re("onSlideLeave", l) ? a = !1 : (Bn(t, Ft), Rn(Fn(t), Ft), l.localIsResizing || (Xe(l.prevSlide), We(t)), !E.loopHorizontal && E.controlArrows && ($n(wn(gn, i), 0 !== l.slideIndex), $n(wn(mn, i), null != On(t))), yn(i, Ft) && !l.localIsResizing && St(l.slideIndex, l.slideAnchor, l.anchorLink, l.sectionIndex), function (e, t, n) {
        var o = t.destinyPos;

        if (E.css3) {
          var r = "translate3d(-" + Math.round(o.left) + "px, 0px, 0px)";
          h.test.translate3dH[t.sectionIndex] = r, xn(st(wn(cn, e)), At(r)), y = setTimeout(function () {
            n && rt(t);
          }, E.scrollingSpeed);
        } else h.test.left[t.sectionIndex] = Math.round(o.left), Mt(e, Math.round(o.left), E.scrollingSpeed, function () {
          n && rt(t);
        });
      }(e, l, !0));
    }

    function rt(e) {
      var t, n;
      t = e.slidesNav, n = e.slideIndex, E.slidesNavigation && null != t && (Rn(wn(Ut, t), Ft), Bn(wn("a", wn("li", t)[n]), Ft)), e.localIsResizing || (Xn(E.afterSlideLoad) && Re("afterSlideLoad", e), T = !0, Fe(e.destiny)), a = !1;
    }

    function it() {
      clearTimeout(S), S = setTimeout(function () {
        for (var e = 0; e < 4; e++) {
          w = setTimeout(lt, 200 * e);
        }
      }, 200);
    }

    function lt() {
      if (at(), o) {
        var e = Nt.activeElement;

        if (!_n(e, "textarea") && !_n(e, "input") && !_n(e, "select")) {
          var t = En();
          Math.abs(t - G) > 20 * Math.max(G, t) / 100 && (de(!0), G = t);
        }
      } else Se();
    }

    function at() {
      var e = E.responsive || E.responsiveWidth,
          t = E.responsiveHeight,
          n = e && Rt.innerWidth < e,
          o = t && Rt.innerHeight < t;
      e && t ? pe(n || o) : e ? pe(n) : t && pe(o);
    }

    function st(e) {
      var t = "all " + E.scrollingSpeed + "ms " + E.easingcss3;
      return Rn(e, Dt), xn(e, {
        "-webkit-transition": t,
        transition: t
      });
    }

    function ct(e) {
      return Bn(e, Dt);
    }

    function ut(e, t) {
      var n, o, r;
      n = e, wn(E.menu).forEach(function (e) {
        E.menu && null != e && (Rn(wn(Ut, e), Ft), Bn(wn('[data-menuanchor="' + n + '"]', e), Ft));
      }), o = e, r = t, E.navigation && null != wn(en)[0] && (Rn(wn(Ut, wn(en)[0]), Ft), Bn(o ? wn('a[href="#' + o + '"]', wn(en)[0]) : wn("a", wn("li", wn(en)[0])[r]), Ft));
    }

    function ft(e) {
      var t = Cn(wn($t)[0], _t),
          n = Cn(e, _t);
      return t == n ? "none" : n < t ? "up" : "down";
    }

    function dt(e) {
      if (!yn(e, un)) {
        var t = Nt.createElement("div");
        t.className = qt, t.style.height = vt(e) + "px", Bn(e, un), jn(e, t);
      }
    }

    function vt(e) {
      var t = A;

      if (E.paddingTop || E.paddingBottom) {
        var n = e;
        yn(n, Kt) || (n = Dn(e, _t));
        var o = parseInt(getComputedStyle(n)["padding-top"]) + parseInt(getComputedStyle(n)["padding-bottom"]);
        t = A - o;
      }

      return t;
    }

    function pt(e, t) {
      t ? st(d) : ct(d), xn(d, At(e)), h.test.translate3d = e, setTimeout(function () {
        Rn(d, Dt);
      }, 10);
    }

    function ht(e) {
      var t = wn(_t + '[data-anchor="' + e + '"]', d)[0];

      if (!t) {
        var n = void 0 !== e ? e - 1 : 0;
        t = wn(_t)[n];
      }

      return t;
    }

    function gt(e, t) {
      var n = ht(e);

      if (null != n) {
        var o,
            r,
            i,
            l = (null == (i = wn(on + '[data-anchor="' + (o = t) + '"]', r = n)[0]) && (o = void 0 !== o ? o : 0, i = wn(on, r)[o]), i);
        bt(n) === x || yn(n, Ft) ? mt(l) : Be(n, function () {
          mt(l);
        });
      }
    }

    function mt(e) {
      null != e && ot(Dn(e, an), e);
    }

    function St(e, t, n, o) {
      var r = "";
      E.anchors.length && !E.lockAnchors && (e ? (null != n && (r = n), null == t && (t = e), wt(r + "/" + (i = t))) : (null != e && (i = t), wt(n))), yt();
    }

    function wt(e) {
      if (E.recordHistory) location.hash = e;else if (o || l) Rt.history.replaceState(void 0, void 0, "#" + e);else {
        var t = Rt.location.href.split("#")[0];
        Rt.location.replace(t + "#" + e);
      }
    }

    function bt(e) {
      if (!e) return null;
      var t = e.getAttribute("data-anchor"),
          n = Cn(e);
      return null == t && (t = n), t;
    }

    function yt() {
      var e = wn($t)[0],
          t = wn(rn, e)[0],
          n = bt(e),
          o = bt(t),
          r = String(n);
      t && (r = r + "-" + o), r = r.replace("/", "-").replace("#", "");
      var i = new RegExp("\\b\\s?" + Yt + "-[^\\s]+\\b", "g");
      L.className = L.className.replace(i, ""), Bn(L, Yt + "-" + r);
    }

    function Et(e) {
      var t = [];
      return t.y = void 0 !== e.pageY && (e.pageY || e.pageX) ? e.pageY : e.touches[0].pageY, t.x = void 0 !== e.pageX && (e.pageY || e.pageX) ? e.pageX : e.touches[0].pageX, l && ke(e) && E.scrollBar && void 0 !== e.touches && (t.y = e.touches[0].pageY, t.x = e.touches[0].pageX), t;
    }

    function Lt(e, t) {
      ee(0, "internal"), void 0 !== t && (g = !0), ot(Dn(e, an), e), void 0 !== t && (g = !1), ee(P.scrollingSpeed, "internal");
    }

    function xt(e) {
      var t = Math.round(e);
      if (E.css3 && E.autoScrolling && !E.scrollBar) pt("translate3d(0px, -" + t + "px, 0px)", !1);else if (E.autoScrolling && !E.scrollBar) xn(d, {
        top: -t + "px"
      }), h.test.top = -t + "px";else {
        var n = je(t);
        Ct(n.element, n.options);
      }
    }

    function At(e) {
      return {
        "-webkit-transform": e,
        "-moz-transform": e,
        "-ms-transform": e,
        transform: e
      };
    }

    function Tt(t, e, n) {
      "all" !== e ? p[n][e] = t : Object.keys(p[n]).forEach(function (e) {
        p[n][e] = t;
      });
    }

    function kt(e, t, n) {
      E[e] = t, "internal" !== n && (P[e] = t);
    }

    function Ot() {
      var e = E.licenseKey,
          t = "font-size: 15px;background:yellow;";
      n ? e && e.length < 20 && (console.warn("%c This website was made using fullPage.js slider. More info on the following website:", t), console.warn("%c https://alvarotrigo.com/fullPage/", t)) : (Sn("error", "Fullpage.js version 3 has changed its license to GPLv3 and it requires a `licenseKey` option. Read about it here:"), Sn("error", "https://github.com/alvarotrigo/fullPage.js#options.")), yn(u, Wt) ? Sn("error", "Fullpage.js can only be initialized once and you are doing it multiple times!") : (E.continuousVertical && (E.loopTop || E.loopBottom) && (E.continuousVertical = !1, Sn("warn", "Option `loopTop/loopBottom` is mutually exclusive with `continuousVertical`; `continuousVertical` disabled")), !E.scrollOverflow || !E.scrollBar && E.autoScrolling || Sn("warn", "Options scrollBar:true and autoScrolling:false are mutually exclusive with scrollOverflow:true. Sections with scrollOverflow might not work well in Firefox"), !E.continuousVertical || !E.scrollBar && E.autoScrolling || (E.continuousVertical = !1, Sn("warn", "Scroll bars (`scrollBar:true` or `autoScrolling:false`) are mutually exclusive with `continuousVertical`; `continuousVertical` disabled")), E.scrollOverflow && null == E.scrollOverflowHandler && (E.scrollOverflow = !1, Sn("error", "The option `scrollOverflow:true` requires the file `scrolloverflow.min.js`. Please include it before fullPage.js.")), W.forEach(function (e) {
        E[e] && Sn("warn", "fullpage.js extensions require fullpage.extensions.min.js file instead of the usual fullpage.js. Requested: " + e);
      }), E.anchors.forEach(function (t) {
        var e = [].slice.call(wn("[name]")).filter(function (e) {
          return e.getAttribute("name") && e.getAttribute("name").toLowerCase() == t.toLowerCase();
        }),
            n = [].slice.call(wn("[id]")).filter(function (e) {
          return e.getAttribute("id") && e.getAttribute("id").toLowerCase() == t.toLowerCase();
        });

        if (n.length || e.length) {
          Sn("error", "data-anchor tags can not have the same value as any `id` element on the site (or `name` element for IE).");
          var o = n.length ? "id" : "name";
          (n.length || e.length) && Sn("error", '"' + t + '" is is being used by another element `' + o + "` property");
        }
      }));
    }

    function Mt(t, n, o, r) {
      var e,
          i = (e = t).self != Rt && yn(e, ln) ? e.scrollLeft : !E.autoScrolling || E.scrollBar ? Yn() : e.offsetTop,
          l = n - i,
          a = 0;
      z = !0;

      var s = function s() {
        if (z) {
          var e = n;
          a += 20, o && (e = Rt.fp_easings[E.easing](a, i, l, o)), Ct(t, e), a < o ? setTimeout(s, 20) : void 0 !== r && r();
        } else a < o && r();
      };

      s();
    }

    function Ct(e, t) {
      !E.autoScrolling || E.scrollBar || e.self != Rt && yn(e, ln) ? e.self != Rt && yn(e, ln) ? e.scrollLeft = t : e.scrollTo(0, t) : e.style.top = t + "px";
    }

    function Ht(e, t) {
      this.anchor = e.getAttribute("data-anchor"), this.item = e, this.index = Cn(e, t), this.isLast = this.index === e.parentElement.querySelectorAll(t).length - 1, this.isFirst = !this.index;
    }

    function It(e) {
      Ht.call(this, e, _t);
    }

    function Bt(e) {
      Ht.call(this, e, on);
    }

    Ot();
  };
}), window.jQuery && window.fullpage && function (t, n) {
  "use strict";

  t && n ? t.fn.fullpage = function (e) {
    e = t.extend({}, e, {
      $: t
    });
    new n(this[0], e);
  } : window.fp_utils.showError("error", "jQuery is required to use the jQuery fullpage adapter!");
}(window.jQuery, window.fullpage);
;

(function () {
  var movingBar = function movingBar() {
    var $navMovingBar = $('.header-nav'),
        $navLink = $('.header-nav__link'),
        $hoverEffect = $('.header-nav__hover'),
        width,
        left;
    $navLink.on('mouseenter', function () {
      var $self = $(this);
      width = $self.width();
      left = $self.position().left - 10;
      $hoverEffect.css({
        width: width + 'px',
        left: left + 'px'
      });
    });
    $navMovingBar.on('mouseleave', function () {
      $hoverEffect.css({
        width: '20px',
        left: '-10px'
      });
    });
  };

  movingBar();
  ;

  var productSlider = function productSlider() {
    var productColors = ['#e2e837', '#00b6f1', '#e23232', '#f0efef', '#0c0c0c'];

    var setAttr = function setAttr() {
      $('.js-product__slider .slick-slide').each(function (index, el) {
        el.setAttribute('data-color', productColors[index]);
      });
    };

    $('.js-product__slider').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      fade: true,
      swipe: false,
      infinite: false,
      arrows: false,
      dots: true,
      appendDots: '.product__colors',
      customPaging: function customPaging(slider, i) {
        setAttr();
        var color = $(slider.$slides[i]).data('color');
        return '<span class="product__color" style="background-color:' + color + '"></span>';
      }
    });
  };

  productSlider();
  ;

  var textAnimation = function textAnimation() {
    var text = document.querySelector('.js-animate-text');
    var box = document.querySelector('.home__content');
    text.innerHTML = _toConsumableArray(text.textContent).map(function (n) {
      return "<div>".concat(n.trim() ? n : '&nbsp;', "</div>");
    }).join('');

    function rand(x) {
      return "".concat(Math.random() * x - x * 0.5, "px");
    }

    function animateText() {
      _toConsumableArray(text.querySelectorAll('div')).map(function (n) {
        return n.style;
      }).forEach(function (n, i) {
        setTimeout(function () {
          return Object.assign(n, !n.opacity || +n.opacity === 1 ? {
            opacity: 0,
            transform: "translate3d(".concat(rand(400), ", ").concat(rand(400), ", ").concat(rand(30), ")")
          } : {
            opacity: .3,
            transform: "translate3d(".concat(rand(400), ", ").concat(rand(400), ", ").concat(rand(30), ")")
          });
        }, i * 20);
      });
    }

    function stopAnimateText() {
      _toConsumableArray(text.querySelectorAll('div')).map(function (n) {
        return n.style;
      }).forEach(function (n, i) {
        setTimeout(function () {
          return Object.assign(n, !n.opacity || +n.opacity === 1 ? {
            opacity: 1,
            transform: "translate3d(0, 0, 0)",
            color: "#000"
          } : {
            opacity: 1,
            transform: "translate3d(0, 0, 0)",
            color: "#4237f7"
          });
        }, i * 20);
      });
    }

    box.addEventListener('mouseenter', animateText);
    box.addEventListener('mouseout', stopAnimateText);
  };

  textAnimation();
  ;
  var isPhoneDevice = ("ontouchstart" in document.documentElement);

  var fullPage = function fullPage() {
    $('#fullpage').fullpage({
      autoScrolling: true,
      navigation: true,
      scrollBar: true,
      // scrollOverflow: true,
      onLeave: function onLeave(origin, destination, direction) {
        var section = destination.item;
        var title = section.querySelector('.section__content');
        var video = document.querySelectorAll('.section__video');
        var tl = new TimelineMax({
          delay: .5
        });

        if (destination.index === 1) {
          tl.fromTo(video, .7, {
            x: '-100%',
            opacity: 0
          }, {
            x: '0%',
            opacity: 1
          });
        } else {
          tl.fromTo(video, .7, {
            x: '100%',
            opacity: 0
          }, {
            x: '0%',
            opacity: 1
          });
        }

        tl.fromTo(title, .5, {
          y: '100',
          opacity: 0
        }, {
          y: 0,
          opacity: 1
        });
      }
    });
  };

  if (!isPhoneDevice) {
    fullPage();
  }

  ;
})();