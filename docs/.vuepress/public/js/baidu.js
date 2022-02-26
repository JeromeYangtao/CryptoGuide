// 最好不要在本地访问页面，以免造成多域名重复推送问题

function isLocal() {
  return document && document.location.href.includes("localhost");
}

(function () {
  if (isLocal()) {
    return;
  }

  var bp = document.createElement("script");
  var curProtocol = window.location.protocol.split(":")[0];
  if (curProtocol === "https") {
    bp.src = "https://zz.bdstatic.com/linksubmit/push.js";
  } else {
    bp.src = "http://push.zhanzhang.baidu.com/push.js";
  }
  var s = document.getElementsByTagName("script")[0];
  s.parentNode.insertBefore(bp, s);
})();
