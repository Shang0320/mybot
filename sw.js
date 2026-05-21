// 這是一個空的 Service Worker 檔案，目的是滿足 iOS PWA 的安裝與通知權限安全要求。
self.addEventListener('install', (event) => {
    self.skipWaiting();
});

self.addEventListener('activate', (event) => {
    event.waitUntil(self.clients.claim());
});

self.addEventListener('fetch', (event) => {
    // 讓所有請求正常通過不緩存，確保每次打開都是最新版本代碼
    event.respondWith(fetch(event.request));
});
