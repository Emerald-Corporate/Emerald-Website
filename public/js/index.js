var ttChatLoaderS = document.createElement("script");
document.tomticketChatLoaderScriptVersion = 2;
ttChatLoaderS.src =
  "https://emerald.tomticket.com/scripts-chat/chat.min.js" +
  "?id=EP59785" +
  "&account=3826240P25112022024414" +
  "&autoOpen=0" +
  "&hideWhenOffline=0" +
  "&d=emerald" +
  "&ts=" +
  new Date().getTime() +
  "&ref=" +
  encodeURIComponent(document.URL);
document.body.appendChild(ttChatLoaderS);

$(document).ready(function () {
  animateDiv(".circle1");
  animateDiv(".circle2");
  animateDiv(".circle3");
  animateDiv(".circle4");
  animateDiv(".circle5");
  animateDiv(".circle6");
  animateDiv(".circle7");
  animateDiv(".circle8");
  animateDiv(".circle9");
  animateDiv(".circle10");
});

function makeNewPosition($container) {
  // Get viewport dimensions (remove the dimension of the div)
  $container = $container || $(window);
  var h = $container.height() - 50;
  var w = $container.width() - 50;

  var nh = Math.floor(Math.random() * h);
  var nw = Math.floor(Math.random() * w);

  return [nh, nw];
}

function animateDiv(itemToMove) {
  var $target = $(itemToMove);
  var newq = makeNewPosition($target.parent());
  var oldq = $target.offset();
  var speed = calcSpeed([oldq.top, oldq.left], newq);

  $(itemToMove).animate(
    {
      top: newq[0],
      left: newq[1],
    },
    speed,
    function () {
      animateDiv(itemToMove);
    }
  );
}

function calcSpeed(prev, next) {
  var x = Math.abs(prev[1] - next[1]);
  var y = Math.abs(prev[0] - next[0]);
  var greatest = x > y ? x : y;
  var speedModifier = 0.1;
  var speed = Math.ceil(greatest / speedModifier);

  return speed;
}
