const portfolioRahul = "portfolio-rahul";
const assets = [
  "/",
  "/static/css/main.9e6ceca5.css",
  "/static/js/main.9bd29c91.js",
  "/static/css/865.2fee8584.chunk.css",
  "/static/js/865.6f6b713b.chunk.js",
  "/static/css/recommendation.e3783127.chunk.css",
  "/static/js/recommendation.9292458b.chunk.js",
  "/static/css/blog.70f8a08c.chunk.css",
  "/static/js/blog.c66aaf19.chunk.js",
  "/static/css/projects.4ea1ca34.chunk.css",
  "/static/js/projects.fb52ecf7.chunk.js",
  "/static/css/workex.8dcb7100.chunk.css",
  "/static/js/workex.a2f05d8d.chunk.js",
  "/static/css/home.5093a6f6.chunk.css",
  "/static/js/home.6b773104.chunk.js",
  "/static/css/education.e235999b.chunk.css",
  "/static/js/education.53b89b54.chunk.js",
  "/static/js/136.b10d8c48.chunk.js",
  "/static/media/blog_blockchain_need.2857a65e6374cdb07aa2.png",
  "/static/media/oop2.07a86cd2a3050c753b15.png",
  "/static/media/oop1.0beca59ebdbc80beaba6.png",
  "/static/media/oop3.0caa5feb9a873568bb2b.png",
  "/static/media/blog_blockchain_architecture.bcf3181c2a550125692c.png",
  "/static/media/profile_photo.f015d05f00e003829ddf.png",
  "/static/media/BebasNeue-Regular.12e3683f9192436a7be8.ttf",
  "/index.html",
];

self.addEventListener("install", (installEvent) => {
  installEvent.waitUntil(
    caches.open(staticDevCoffee).then((cache) => {
      cache.addAll(assets);
    })
  );
});

self.addEventListener("fetch", (fetchEvent) => {
  fetchEvent.respondWith(
    caches.match(fetchEvent.request).then((res) => {
      return res || fetch(fetchEvent.request);
    })
  );
});
