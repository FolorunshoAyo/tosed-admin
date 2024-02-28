!(function (a) {
  "use strict";
  var t = function () {};
  (t.prototype.createStackedChart = function (a, t, o, r, e, i) {
    Morris.Bar({
      element: a,
      data: t,
      xkey: o,
      ykeys: r,
      stacked: !0,
      labels: e,
      hideHover: "auto",
      barSizeRatio: 0.5,
      resize: !0,
      gridLineColor: "rgba(108, 120, 151, 0.1)",
      barColors: i,
    });
  }),
    (t.prototype.init = function () {
      this.createStackedChart(
        "morris-bar-stacked",
        [
          { y: "Jan", a: 45, b: 140 },
          { y: "Feb", a: 75, b: 65 },
          { y: "Mar", a: 100, b: 90 },
          { y: "Apr", a: 75, b: 65 },
          { y: "May", a: 100, b: 90 },
          { y: "Jun", a: 75, b: 65 },
          { y: "Jul", a: 50, b: 40 },
          { y: "Aug", a: 75, b: 65 },
          { y: "Sep", a: 50, b: 40 },
          { y: "Oct", a: 75, b: 65 },
          { y: "Nov", a: 100, b: 90 },
          { y: "Dec", a: 70, b: 52 },
        ],
        "y",
        ["a", "b"],
        ["Page Views", "Visitors"],
        ["#26a69a", "#ebeff2"]
      );
    }),
    (a.BlogDashboard = new t()),
    (a.BlogDashboard.Constructor = t);
})(window.jQuery),
  (function (a) {
    "use strict";
    window.jQuery.BlogDashboard.init();
  })(),
  (function (a) {
    "use strict";
    var t = function () {};
    (t.prototype.init = function () {
      a("#world-map-markers").vectorMap({
        map: "world_mill_en",
        scaleColors: ["#4bd396", "#4bd396"],
        normalizeFunction: "polynomial",
        hoverOpacity: 0.7,
        hoverColor: !1,
        regionStyle: { initial: { fill: "#3ac9d6" } },
        markerStyle: {
          initial: {
            r: 9,
            fill: "#f5707a",
            "fill-opacity": 0.9,
            stroke: "#fff",
            "stroke-width": 7,
            "stroke-opacity": 0.4,
          },
          hover: { stroke: "#fff", "fill-opacity": 1, "stroke-width": 1.5 },
        },
        backgroundColor: "transparent",
        markers: [
          { latLng: [41.9, 12.45], name: "Vatican City" },
          { latLng: [43.73, 7.41], name: "Monaco" },
          { latLng: [15.3, -61.38], name: "Dominica" },
          { latLng: [-20.2, 57.5], name: "Mauritius" },
          { latLng: [26.02, 50.55], name: "Bahrain" },
          { latLng: [0.33, 6.73], name: "SÃ£o TomÃ© and PrÃ­ncipe" },
        ],
      });
    }),
      (a.VectorMap = new t()),
      (a.VectorMap.Constructor = t);
  })(window.jQuery),
  (function (a) {
    "use strict";
    window.jQuery.VectorMap.init();
  })();
