$.fn.parallax = function(speed = 0.2, reverse = false) {
  if (this.length === 0) { return false; }

  // Taken from Dave Ruperts Cheapass Parallax - https://daverupert.com/2018/02/cheapass-parallax/

  const ele = document.getElementById(this.attr('id'));

  ele.style.transform = 'translateY( calc( var(--scrollparallax) * 1px ) )';

  function setScrollParallax() {
      var offset = (document.body.scrollTop || document.documentElement.scrollTop) * speed
      if (reverse) {
        offset = offset*-1;
      }
      ele.style.setProperty("--scrollparallax", offset);
      window.requestAnimationFrame( setScrollParallax );
  }

  window.requestAnimationFrame( setScrollParallax );
};
