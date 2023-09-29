onMouseEnter={(el) => gsapFunc(el, "white", purple)}
      onMouseLeave={(el) => gsapFunc(el, purple, purpleBg)}
      
      
      
      function gsapFunc(el, fill, background) {
    el = el.target;
    TweenMax.to(el, 0.3, { background: background });
    TweenMax.to(playButton.current, 0.3, {
      background: "transparent",
      fill: fill,
    });
  }