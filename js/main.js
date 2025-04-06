(function ($) {
  "use strict";

  // Smooth scrolling on the navbar links
  $(".navbar-nav a").on("click", function (event) {
    if (this.hash !== "") {
      event.preventDefault();

      $("html, body").animate(
        {
          scrollTop: $(this.hash).offset().top - 30,
        },
        1500,
        "easeInOutExpo"
      );

      if ($(this).parents(".navbar-nav").length) {
        $(".navbar-nav .active").removeClass("active");
        $(this).closest("a").addClass("active");
      }
    }
  });

  // Typed Initiate
  // if ($('.header h2').length == 1) {
  //     var typed_strings = $('.header .typed-text').text();
  //     var typed = new Typed('.header h2', {
  //         strings: typed_strings.split(', '),
  //         typeSpeed: 100,
  //         backSpeed: 20,
  //         smartBackspace: false,
  //         loop: true
  //     });
  // }

  // Skills
  $(".skills").waypoint(
    function () {
      $(".progress .progress-bar").each(function () {
        $(this).css("width", $(this).attr("aria-valuenow") + "%");
      });
    },
    { offset: "80%" }
  );

  // Porfolio isotope and filter
  var portfolioIsotope = $(".portfolio-container").isotope({
    itemSelector: ".portfolio-item",
    layoutMode: "fitRows",
  });

  $("#portfolio-flters li").on("click", function () {
    $("#portfolio-flters li").removeClass("filter-active");
    $(this).addClass("filter-active");

    portfolioIsotope.isotope({ filter: $(this).data("filter") });
  });

  // Review slider
  $(".review-slider").slick({
    autoplay: true,
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  });

  // Back to top button
  $(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
      $(".back-to-top").fadeIn("slow");
    } else {
      $(".back-to-top").fadeOut("slow");
    }
  });
  $(".back-to-top").click(function () {
    $("html, body").animate({ scrollTop: 0 }, 1500, "easeInOutExpo");
    return false;
  });

  $("#all-rights-years").text(new Date().getFullYear());

  fetch("translations.json")
    .then((response) => response.json())
    .then((translations) => {
      function setLanguageContent() {
        const language = navigator.language.startsWith("hu") ? "hu" : "en";
        $("#head-title").text(translations[language]["headTitle"]);

        $("#export-customs-clearance-title").text(
          translations[language]["exportCustomsClearance"]["title"]
        );
        $("#export-customs-clearance").text(
          translations[language]["exportCustomsClearance"]["description"]
        );

        $("#import-customs-clearance-title").text(
          translations[language]["importCustomsClearance"]["title"]
        );
        $("#import-customs-clearance").text(
          translations[language]["importCustomsClearance"]["description"]
        );

        $("#bonded-warehousing-title").text(
          translations[language]["bondedWarehousing"]["title"]
        );
        $("#bonded-warehousing").text(
          translations[language]["bondedWarehousing"]["description"]
        );

        $("#customs-advice-title").text(
          translations[language]["customsAdvice"]["title"]
        );
        $("#customs-advice").text(
          translations[language]["customsAdvice"]["description"]
        );

        $("#portfolio-name").text(translations[language]["portfolioName"]);

        $("#profession").text(translations[language]["profession"]);

        $("#about-me-title").text(translations[language]["aboutMe"]["title"]);

        $("#about-me-description").html(
          translations[language]["aboutMe"]["description"].replace(
            /\n/g,
            "<br>"
          )
        );

        $("#service-title").text(translations[language]["service"]["title"]);

        $("#licence-title").text(translations[language]["licence"]["title"]);

        $("#contact-title").text(translations[language]["contact"]["title"]);

        $("#about-nav-link").html(
          translations[language]["aboutMe"]["title"] +
            ' <i class="fa fa-home"></i>'
        );

        $("#service-nav-link").html(
          translations[language]["service"]["title"] +
            ' <i class="fa fa-tasks"></i>'
        );

        $("#licence-nav-link").html(
          translations[language]["licence"]["title"] +
            ' <i class="fa fa-star"></i>'
        );

        $("#contact-nav-link").html(
          translations[language]["contact"]["title"] +
            ' <i class="fa fa-envelope"></i>'
        );

        var licenceData = translations[language]["licence"]["items"];

        var container = $("#licence-container");
        container.empty();

        licenceData.forEach(function (item) {
          var referenceHtml = item.link
            ? `<h4><a href="${item.link}" target="_blank">${item.referenceNumber}</a></h4>`
            : `<h4>${item.referenceNumber ? item.referenceNumber : ""}</h4>`;
          var html = `
            <div class="col-md-6">
              <div class="exp-col">
                <span>${item.date}</span>
                <h3 >${item.title}</h3>
                ${referenceHtml}
              </div>
            </div>
          `;
          container.append(html);
        });
      }

      setLanguageContent();
    })
    .catch((error) => {
      console.error("Error loading translations:", error);
    });
})(jQuery);
