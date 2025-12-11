
self.addEventListener('install', e=>{
  e.waitUntil(caches.open('dh-quiz-v2').then(c=>c.addAll([
    './index.html','./exam.html','./style.css','./exam.js','./questions.js','./manifest.json','./icon-192.png','./icon-512.png'
  ])));
});
self.addEventListener('fetch', e=>{
  e.respondWith(caches.match(e.request).then(r=> r || fetch(e.request)));
});
