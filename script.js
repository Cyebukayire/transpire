$(document).ready(() => {
  // // start

  // link system start

  // for home start
  $("#li1").click(() => {
    $("#div2").show(0);
    $(".about, .work,.contact-m").hide(0);
  });

  // for home over

  // for about start

  $(".about").hide(0);

  $("#li2").click(() => {
    $(".about").show(0);
    $("#div2, .work, .contact-m,.txt-hide").hide(0);
  });

  // for about over

  // work start
  $(".work").hide();

  $("#li3").click(() => {
    $(".work").show();
    $("#div2, .about, .contact-m, .txt-hide").hide();
  });

  // work over

  // contact start

  $(".contact-m").hide();

  $("#li4").click(() => {
    $(".contact-m").show();
    $("#div2, .about, .work, .txt-hide").hide();
  });

  // contact over

  // link syatem over

  // home  start

  $(".txt-hide").hide(); // do not touch

  // nav-bar

  // button - 1  home  - start

  // on click

  //     $("#li1").click( ()=>{
  //     $('.div-real').hide(0);
  //     $('.txt-hide').show(0);
  // });

  $("#li1-show").click(() => {
    $(".div-real").show(0);
    $(".txt-hide").hide(0);
  });

  // on hover

  //  background

  // $("#li1").hover(
  //   () => {
  //     $("#li1").css({ "background-color": "red" });
  //   },
  //   () => {
  //     $("#li1").css({ "background-color": "black" });
  //   }
  // );

  // text

  $("#li1").hover(
    () => {
      $("#a1").css({
        // "font-size": "40px",
        // color: "black",
        "font-weight": "bold",
      });
    },
    () => {
      $("#a1").css({
        // "font-size": "18px",
        // color: "white",
        "font-weight": "normal",
      });
    }
  );

  // other text hide

  $("#li1").hover(
    () => {
      $("#a2 , #a3 , #a4").hide();
    },
    () => {
      $("#a2 , #a3 , #a4").show();
    }
  );
  // button - 1  home  - over

  // button - 2 about  - start

  // on hover

  //  background

  // $("#li2").hover(
  //   () => {
  //     $("#li2").css({ "background-color": "red" });
  //   },
  //   () => {
  //     $("#li2").css({ "background-color": "black" });
  //   }
  // );

  // text

  $("#li2").hover(
    () => {
      $("#a2").css({
        // "font-size": "40px",
        // color: "black",
        "font-weight": "bold",
      });
    },
    () => {
      $("#a2").css({
        // "font-size": "18px",
        // color: "white",
        "font-weight": "normal",
      });
    }
  );

  // other text hide

  $("#li2").hover(
    () => {
      $("#a1 , #a3 , #a4").hide();
    },
    () => {
      $("#a1 , #a3 , #a4").show();
    }
  );
  // button - 2  about  - over

  // button - 3  work   - start

  // on hover

  //  background

  // $("#li3").hover(
  //   () => {
  //     $("#li3").css({ "background-color": "red" });
  //   },
  //   () => {
  //     $("#li3").css({ "background-color": "black" });
  //   }
  // );

  // text

  $("#li3").hover(
    () => {
      $("#a3").css({
        // "font-size": "40px",
        // color: "black",
        "font-weight": "bold",
      });
    },
    () => {
      $("#a3").css({
        // "font-size": "18px",
        // color: "white",
        "font-weight": "normal",
      });
    }
  );

  // other text blur

  $("#li3").hover(
    () => {
      $("#a1 , #a2 , #a4").hide();
    },
    () => {
      $("#a1 , #a2 , #a4").show();
    }
  );
  // button - 3  work - over

  // button - 4  contact - start

  // on hover

  //  background

  // $("#li4").hover(
  //   () => {
  //     $("#li4").css({ "background-color": "red" });
  //   },
  //   () => {
  //     $("#li4").css({ "background-color": "black" });
  //   }
  // );

  // text

  $("#li4").hover(
    () => {
      $("#a4").css({
        // "font-size": "40px",
        // color: "black",
        "font-weight": "bold",
      });
    },
    () => {
      $("#a4").css({
        // "font-size": "18px",
        // color: "white",
        "font-weight": "normal",
      });
    }
  );

  // other text hide

  $("#li4").hover(
    () => {
      $("#a1 , #a2 , #a3").hide();
    },
    () => {
      $("#a1 , #a2 , #a3").show();
    }
  );

  // button - 4  contact  - over

  // footer  - start

  // background

  $("#div3").hover(
    () => {
      $("#div3").css("background-color", "red");
    },
    () => {
      $("#div3").css("background-color", "black");
    }
  );

  //   text

  $("#div3").hover(
    () => {
      $("#div3").css({ color: "black" });
    },
    () => {
      $("#div3").css({ color: "white" });
    }
  );

  // footer-over

  // home - over

  // -----------------------------------------

  // about - start

  // about div - 1

  // skill - section

  // on hover

  // for - 1 - html

  //  background

  $("#a-li1 ").hover(
    () => {
      $("#a-li1").css({ "background-color": "red" });
    },
    () => {
      $("#a-li1").css({ "background-color": "transparent" });
    }
  );

  // text

  $("#a-li1").hover(
    () => {
      $("#a-li1").css({
        "font-size": "40px",
        color: "black",
        "font-style": "italic",
      });
    },
    () => {
      $("#a-li1").css({
        "font-size": "24px",
        color: "white",
        "font-style": "normal",
      });
    }
  );

  // other text hide

  $("#a-li1").hover(
    () => {
      $(
        " #a-li2 , #a-li3 , #a-li4 , #a-li5 , #a-li6 , #a-li7 , #a-li8 , #a-li9 , #a-li10 , #a-li11"
      ).slideUp(1000);
    },
    () => {
      $(
        " #a-li2 , #a-li3 , #a-li4 , #a-li5 , #a-li6 , #a-li7 , #a-li8 , #a-li9 , #a-li10 , #a-li11"
      ).slideDown(1000);
    }
  );

  // ------------------

  // for - 2 - css

  //  background

  $("#a-li2 ").hover(
    () => {
      $("#a-li2").css({ "background-color": "red" });
    },
    () => {
      $("#a-li2").css({ "background-color": "transparent" });
    }
  );

  // text

  $("#a-li2").hover(
    () => {
      $("#a-li2").css({
        "font-size": "40px",
        color: "black",
        "font-style": "italic",
      });
    },
    () => {
      $("#a-li2").css({
        "font-size": "24px",
        color: "white",
        "font-style": "normal",
      });
    }
  );

  // other text hide

  $("#a-li2").hover(
    () => {
      $(
        " #a-li3 , #a-li4 , #a-li5 , #a-li6 , #a-li7 , #a-li8 , #a-li9 , #a-li10 , #a-li11"
      ).slideUp(1000);
    },
    () => {
      $(
        " #a-li3 , #a-li4 , #a-li5 , #a-li6 , #a-li7 , #a-li8 , #a-li9 , #a-li10 , #a-li11"
      ).slideDown(1000);
    }
  );

  // ----------------------

  // for - 3 - javascript

  //  background

  $("#a-li3 ").hover(
    () => {
      $("#a-li3").css({ "background-color": "red" });
    },
    () => {
      $("#a-li3").css({ "background-color": "transparent" });
    }
  );

  // text

  $("#a-li3").hover(
    () => {
      $("#a-li3").css({
        "font-size": "29px",
        color: "black",
        "font-style": "italic",
      });
    },
    () => {
      $("#a-li3").css({
        "font-size": "24px",
        color: "white",
        "font-style": "normal",
      });
    }
  );

  // other text hide

  $("#a-li3").hover(
    () => {
      $(
        " #a-li4 , #a-li5 , #a-li6 , #a-li7 , #a-li8 , #a-li9 , #a-li10 , #a-li11"
      ).slideUp(1000);
    },
    () => {
      $(
        " #a-li4 , #a-li5 , #a-li6 , #a-li7 , #a-li8 , #a-li9 , #a-li10 , #a-li11"
      ).slideDown(1000);
    }
  );

  // ----------------------

  // for - 4 - bootstrap

  //  background

  $("#a-li4 ").hover(
    () => {
      $("#a-li4").css({ "background-color": "red" });
    },
    () => {
      $("#a-li4").css({ "background-color": "transparent" });
    }
  );

  // text

  $("#a-li4").hover(
    () => {
      $("#a-li4").css({
        "font-size": "28px",
        color: "black",
        "font-style": "italic",
      });
    },
    () => {
      $("#a-li4").css({
        "font-size": "24px",
        color: "white",
        "font-style": "normal",
      });
    }
  );

  // other text hide

  $("#a-li4").hover(
    () => {
      $(
        " #a-li5 , #a-li6 , #a-li7 , #a-li8 , #a-li9 , #a-li10 , #a-li11"
      ).slideUp(1000);
    },
    () => {
      $(
        " #a-li5 , #a-li6 , #a-li7 , #a-li8 , #a-li9 , #a-li10 , #a-li11"
      ).slideDown(1000);
    }
  );

  // ----------------------

  // for - 5 - Mysql

  //  background

  $("#a-li5").hover(
    () => {
      $("#a-li5").css({ "background-color": "red" });
    },
    () => {
      $("#a-li5").css({ "background-color": "transparent" });
    }
  );

  // text

  $("#a-li5").hover(
    () => {
      $("#a-li5").css({
        "font-size": "40px",
        color: "black",
        "font-style": "italic",
      });
    },
    () => {
      $("#a-li5").css({
        "font-size": "24px",
        color: "white",
        "font-style": "normal",
      });
    }
  );

  // other text hide

  $("#a-li5").hover(
    () => {
      $(" #a-li6 , #a-li7 , #a-li8 , #a-li9 , #a-li10 , #a-li11").slideUp(1000);
    },
    () => {
      $(" #a-li6 , #a-li7 , #a-li8 , #a-li9 , #a-li10 , #a-li11").slideDown(
        1000
      );
    }
  );

  // ----------------------

  // for - 6 - wordpress

  //  background

  $("#a-li6").hover(
    () => {
      $("#a-li6").css({ "background-color": "red" });
    },
    () => {
      $("#a-li6").css({ "background-color": "transparent" });
    }
  );

  // text

  $("#a-li6").hover(
    () => {
      $("#a-li6").css({
        "font-size": "27px",
        color: "black",
        "font-style": "italic",
      });
    },
    () => {
      $("#a-li6").css({
        "font-size": "24px",
        color: "white",
        "font-style": "normal",
      });
    }
  );

  // other text hide

  $("#a-li6").hover(
    () => {
      $(" #a-li7 , #a-li8 , #a-li9 , #a-li10 , #a-li11").slideUp(1000);
    },
    () => {
      $(" #a-li7 , #a-li8 , #a-li9 , #a-li10 , #a-li11").slideDown(1000);
    }
  );

  // ----------------------

  // for - 7  woo- commerce

  //  background

  $("#a-li7").hover(
    () => {
      $("#a-li7").css({ "background-color": "red" });
    },
    () => {
      $("#a-li7").css({ "background-color": "transparent" });
    }
  );

  // text

  $("#a-li7").hover(
    () => {
      $("#a-li7").css({
        "font-size": "26px",
        color: "black",
        "font-style": "italic",
      });
    },
    () => {
      $("#a-li7").css({
        "font-size": "24px",
        color: "white",
        "font-style": "normal",
      });
    }
  );

  // other text hide

  $("#a-li7").hover(
    () => {
      $(" #a-li8 , #a-li9 , #a-li10 , #a-li11").slideUp(1000);
    },
    () => {
      $(" #a-li8 , #a-li9 , #a-li10 , #a-li11").slideDown(1000);
    }
  );

  // ----------------------

  // for - 8  - php

  //  background

  $("#a-li8").hover(
    () => {
      $("#a-li8").css({ "background-color": "red" });
    },
    () => {
      $("#a-li8").css({ "background-color": "transparent" });
    }
  );

  // text

  $("#a-li8").hover(
    () => {
      $("#a-li8").css({
        "font-size": "40px",
        color: "black",
        "font-style": "italic",
      });
    },
    () => {
      $("#a-li8").css({
        "font-size": "24px",
        color: "white",
        "font-style": "normal",
      });
    }
  );

  // other text hide

  $("#a-li8").hover(
    () => {
      $(" #a-li9 , #a-li10 , #a-li11").slideUp(1000);
    },
    () => {
      $("#a-li9 , #a-li10 , #a-li11").slideDown(1000);
    }
  );

  // ----------------------

  // for - 9 - jquery

  //  background

  $("#a-li9").hover(
    () => {
      $("#a-li9").css({ "background-color": "red" });
    },
    () => {
      $("#a-li9").css({ "background-color": "transparent" });
    }
  );

  // text

  $("#a-li9").hover(
    () => {
      $("#a-li9").css({
        "font-size": "40px",
        color: "black",
        "font-style": "italic",
      });
    },
    () => {
      $("#a-li9").css({
        "font-size": "24px",
        color: "white",
        "font-style": "normal",
      });
    }
  );

  // other text hide

  $("#a-li9").hover(
    () => {
      $(" #a-li10 , #a-li11").slideUp(1000);
    },
    () => {
      $(" #a-li10 , #a-li11").slideDown(1000);
    }
  );

  // ----------------------

  // for - 10 - react

  //  background

  $("#a-li10").hover(
    () => {
      $("#a-li10").css({ "background-color": "red" });
    },
    () => {
      $("#a-li10").css({ "background-color": "transparent" });
    }
  );

  // text

  $("#a-li10").hover(
    () => {
      $("#a-li10").css({
        "font-size": "40px",
        color: "black",
        "font-style": "italic",
      });
    },
    () => {
      $("#a-li10").css({
        "font-size": "24px",
        color: "white",
        "font-style": "normal",
      });
    }
  );

  // other text hide

  // for - 11 - node

  //  background

  $("#a-li11").hover(
    () => {
      $("#a-li11").css({ "background-color": "red" });
    },
    () => {
      $("#a-li11").css({ "background-color": "transparent" });
    }
  );

  // text

  $("#a-li11").hover(
    () => {
      $("#a-li11").css({
        "font-size": "40px",
        color: "black",
        "font-style": "italic",
      });
    },
    () => {
      $("#a-li11").css({
        "font-size": "24px",
        color: "white",
        "font-style": "normal",
      });
    }
  );

  // ----------------------

  //   certificate section start

  var slides = document.querySelector(".slider-items").children;
  var next_s = document.querySelector(".right");
  var prev_s = document.querySelector(".left");
  var total = slides.length;
  var index = 0;
  next_s.onclick = () => {
    next("next");
  };
  prev_s.onclick = () => {
    next("prev");
  };
  function next(direction) {
    if (direction == "next") {
      index++;
      if (index == total) {
        index = 0;
      }
    } else {
      if (index == 0) {
        index = total - 1;
      } else {
        index--;
      }
    }
    for (let i = 0; i < slides.length; i++) {
      slides[i].classList.remove("active");
    }
    slides[index].classList.add("active");
  }

  // certificate section over

  // about - over

  // WORK START

  var slidesW = document.querySelector(".w-slider-items").children;
  var next_sW = document.querySelector(".w-right");
  var prev_sW = document.querySelector(".w-left");
  var totalW = slides.length;
  var indexW = 0;
  next_sW.onclick = () => {
    nextW("nextW");
  };
  prev_sW.onclick = () => {
    nextW("prevW");
  };
  function nextW(directionW) {
    if (directionW == "nextW") {
      indexW++;
      if (indexW == totalW) {
        indexW = 0;
      }
    } else {
      if (indexW == 0) {
        indexW = totalW - 1;
      } else {
        indexW--;
      }
    }
    for (let i = 0; i < slidesW.length; i++) {
      slidesW[i].classList.remove("active");
    }
    slidesW[indexW].classList.add("active");
  }

  // for work over

  // work over

  // contact start

  $("#con-1").hover(
    () => {
      $("#con-2,#con-3,#con-4").css({ filter: "blur(4px)" });
    },
    () => {
      $("#con-2,#con-3,#con-4").css({ filter: "blur(0px)" });
    }
  );
  $("#con-2").hover(
    () => {
      $("#con-1,#con-3,#con-4").css({ filter: "blur(4px)" });
    },
    () => {
      $("#con-1,#con-3,#con-4").css({ filter: "blur(0px)" });
    }
  );
  $("#con-3").hover(
    () => {
      $("#con-1,#con-2,#con-4").css({ filter: "blur(4px)" });
    },
    () => {
      $("#con-1,#con-2,#con-4").css({ filter: "blur(0px)" });
    }
  );
  $("#con-4").hover(
    () => {
      $("#con-1,#con-2,#con-3").css({ filter: "blur(4px)" });
    },
    () => {
      $("#con-1,#con-2,#con-3").css({ filter: "blur(0px)" });
    }
  );

  // contact over

  // // over
});

// ==========================================
$(".hover").mouseleave(
  function() {
    $(this).removeClass("hover");
  }
);
