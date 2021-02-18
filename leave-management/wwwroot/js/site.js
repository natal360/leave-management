// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.
//$(document).ready(function () {
//    $('#tblData').DataTable({
//        fixedHeader: true,
//        "language": {
//           url: "//cdn.datatables.net/plug-ins/1.10.22/i18n/Japanese.json"
//        }
//    });
//});

$(document).ready(function () {
    var table = $('#tblData').DataTable({
        fixedHeader: true,
        "language": {
           url: "//cdn.datatables.net/plug-ins/1.10.22/i18n/Japanese.json"
        }
    });
});