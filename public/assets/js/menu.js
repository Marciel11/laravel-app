function func_id() {
    var element = document.getElementById('inicio');
    alert(element)
    element.classList.add('active_menu');

};

$(document).ready(function () {
    $('#example').DataTable({
        "language": {
            "lengthMenu": "Mostrando _MENU_ registros por página",
            "zeroRecords": "Nada encontrado",
            "info": "Mostrando página _PAGE_ de _PAGES_",
            "infoEmpty": "Nenhum registro disponível",
            "infoFiltered": "(filtrado de _MAX_ registros no total)",
            "search": "Procurar:",
            "paginate": {
                "next": ">",
                "previous": "<"
            },
        }
    });
});

$(document).ready(function () {
    $('#example2').DataTable({
        "language": {
            "lengthMenu": "Mostrando _MENU_ registros por página",
            "zeroRecords": "Nada encontrado",
            "info": "Mostrando página _PAGE_ de _PAGES_",
            "infoEmpty": "Nenhum registro disponível",
            "infoFiltered": "(filtrado de _MAX_ registros no total)",
            "search": "Procurar:",
            "paginate": {
                "next": ">",
                "previous": "<"
            },
        }
    });
});
// End Funções Data table modais de parametrizacao

var win = navigator.platform.indexOf('Win') > -1;
if (win && document.querySelector('#sidenav-scrollbar')) {
    var options = {
        damping: '0.5'
    }
    Scrollbar.init(document.querySelector('#sidenav-scrollbar'), options);
}
