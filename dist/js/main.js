!function(e){var n={};function r(c){if(n[c])return n[c].exports;var t=n[c]={i:c,l:!1,exports:{}};return e[c].call(t.exports,t,t.exports,r),t.l=!0,t.exports}r.m=e,r.c=n,r.d=function(e,n,c){r.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:c})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,n){if(1&n&&(e=r(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var c=Object.create(null);if(r.r(c),Object.defineProperty(c,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var t in e)r.d(c,t,function(n){return e[n]}.bind(null,t));return c},r.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(n,"a",n),n},r.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},r.p="",r(r.s=0)}([function(module,exports,__webpack_require__){"use strict";eval("\r\n\r\n// service worker registration - remove if you're not going to use it\r\n\r\nif ('serviceWorker' in navigator) {\r\n  window.addEventListener('load', function() {\r\n    navigator.serviceWorker.register('serviceworker.js').then(function(registration) {\r\n      // Registration was successful\r\n      console.log('ServiceWorker registration successful with scope: ', registration.scope);\r\n    }, function(err) {\r\n      // registration failed :(\r\n      console.log('ServiceWorker registration failed: ', err);\r\n    });\r\n  });\r\n}\r\n\r\n// place your code below\r\n\r\n\r\nconst message = document.querySelector('.form__message--js');\r\nconst load = document.querySelector('.form__button--load-js');\r\nconst save = document.querySelector('.form__button--save-js');\r\n\r\nsave.addEventListener('click', (e) => {\r\n  e.preventDefault();\r\n  localStorage.setItem('message', message.value);\r\n\r\n})\r\n\r\nload.addEventListener('click', (e) => {\r\n  e.preventDefault();\r\n  message.value = localStorage.getItem('message');\r\n\r\n})\r\n\r\n\r\n\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvanMvbWFpbi5qcz85MjkxIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFhOztBQUViOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTCxHQUFHO0FBQ0g7O0FBRUE7OztBQUdBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7O0FBRUEsQ0FBQyIsImZpbGUiOiIwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XHJcblxyXG4vLyBzZXJ2aWNlIHdvcmtlciByZWdpc3RyYXRpb24gLSByZW1vdmUgaWYgeW91J3JlIG5vdCBnb2luZyB0byB1c2UgaXRcclxuXHJcbmlmICgnc2VydmljZVdvcmtlcicgaW4gbmF2aWdhdG9yKSB7XHJcbiAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCBmdW5jdGlvbigpIHtcclxuICAgIG5hdmlnYXRvci5zZXJ2aWNlV29ya2VyLnJlZ2lzdGVyKCdzZXJ2aWNld29ya2VyLmpzJykudGhlbihmdW5jdGlvbihyZWdpc3RyYXRpb24pIHtcclxuICAgICAgLy8gUmVnaXN0cmF0aW9uIHdhcyBzdWNjZXNzZnVsXHJcbiAgICAgIGNvbnNvbGUubG9nKCdTZXJ2aWNlV29ya2VyIHJlZ2lzdHJhdGlvbiBzdWNjZXNzZnVsIHdpdGggc2NvcGU6ICcsIHJlZ2lzdHJhdGlvbi5zY29wZSk7XHJcbiAgICB9LCBmdW5jdGlvbihlcnIpIHtcclxuICAgICAgLy8gcmVnaXN0cmF0aW9uIGZhaWxlZCA6KFxyXG4gICAgICBjb25zb2xlLmxvZygnU2VydmljZVdvcmtlciByZWdpc3RyYXRpb24gZmFpbGVkOiAnLCBlcnIpO1xyXG4gICAgfSk7XHJcbiAgfSk7XHJcbn1cclxuXHJcbi8vIHBsYWNlIHlvdXIgY29kZSBiZWxvd1xyXG5cclxuXHJcbmNvbnN0IG1lc3NhZ2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZm9ybV9fbWVzc2FnZS0tanMnKTtcclxuY29uc3QgbG9hZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5mb3JtX19idXR0b24tLWxvYWQtanMnKTtcclxuY29uc3Qgc2F2ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5mb3JtX19idXR0b24tLXNhdmUtanMnKTtcclxuXHJcbnNhdmUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xyXG4gIGUucHJldmVudERlZmF1bHQoKTtcclxuICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnbWVzc2FnZScsIG1lc3NhZ2UudmFsdWUpO1xyXG5cclxufSlcclxuXHJcbmxvYWQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xyXG4gIGUucHJldmVudERlZmF1bHQoKTtcclxuICBtZXNzYWdlLnZhbHVlID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ21lc3NhZ2UnKTtcclxuXHJcbn0pXHJcblxyXG5cclxuXHJcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///0\n")}]);