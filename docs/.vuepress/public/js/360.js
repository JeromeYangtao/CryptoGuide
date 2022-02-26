function isLocal() {
  return document && document.location.href.includes("localhost");
}

(function () {
  if (isLocal()) {
    return;
  }

  var src = "https://s.ssl.qhres2.com/ssl/ab77b6ea7f3fbf79.js";
  document.write('<script src="' + src + '" id="sozz"></script>');
})();
