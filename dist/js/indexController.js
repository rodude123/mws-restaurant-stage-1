function _trackInstalling(n){var e=this;n.addEventListener("statechange",function(){"installed"==n.state&&e._updateReady(n)})}function _updateReady(n){n.postMessage({action:"skipWaiting"})}"serviceWorker"in navigator&&window.addEventListener("load",function(){navigator.serviceWorker.register("/sw.js").then(function(n){var e;(console.log("ServiceWorker registration successful with scope: ",n.scope),navigator.serviceWorker.controller)&&(n.waiting?_updateReady(n.waiting):n.installing?_trackInstalling(n.installing):(n.addEventListener("updatefound",function(){_trackInstalling(n.installing)}),navigator.serviceWorker.addEventListener("controllerchange",function(){e||(window.location.reload(),e=!0)})))},function(n){console.log("ServiceWorker registration failed: ",n)})});
//# sourceMappingURL=indexController.js.map