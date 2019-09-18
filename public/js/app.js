if('serviceWorker' in navigator) { // browser and informations about it
  navigator.serviceWorker.register('/sw.js')
    .then((reg) => console.log("service worker registered", reg))
    .catch((err) => console.log("service worker not registered", err));
}