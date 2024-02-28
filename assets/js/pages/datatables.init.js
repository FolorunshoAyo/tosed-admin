var handleDataTableButtons = function () {
    "use strict";
    0 !== $("#datatable-buttons").length &&
      $("#datatable-buttons").DataTable({
        dom: "Bfrtip",
        buttons: [
          { extend: "copy", className: "btn-sm" },
          { extend: "csv", className: "btn-sm" },
          { extend: "excel", className: "btn-sm" },
          { extend: "pdf", className: "btn-sm" },
          { extend: "print", className: "btn-sm" },
        ],
        responsive: !0,
        columnDefs: [
            // {
            //     target: 3,
            //     render: DataTable.render.number(null, null, 0, '₦ '),
            // },
            {
                targets: 2,
                className: 'font-weight-bold'
            },
            {
                targets: 0,
                className: 'text-center'
            },
            // {
            //     "targets": [1], 
            //     "render": function ( data, type, row ) {
            //         return '<div class="table-description">'+data+'</div>';
            //     }
            // }    
        ]
      });
  },
  TableManageButtons = (function () {
    "use strict";
    return {
      init: function () {
        handleDataTableButtons();
      },
    };
  })();
TableManageButtons.init();
