// Mudar o texto do data table para idioma português
$(document).ready(function () {
    $("#data_table").DataTable({
        language: {
            lengthMenu: "Mostrando _MENU_ registros por página",
            zeroRecords: "Nada encontrado",
            pagingType: "full_numbers",
            info: "Mostrando página _PAGE_ de _PAGES_, com total de _MAX_ registros",
            infoEmpty: "Nenhum registro disponível",
            infoFiltered: "(filtrado de _MAX_ registros no total)",
            search: "Procurar:",
            paginate: {
                next: ">",
                previous: "<",
            },
        },
        "aaSorting": [],
    });
});

// Mudar o visual da barra de rolagem
var win = navigator.platform.indexOf("Win") > -1;
if (win && document.querySelector("#sidenav-scrollbar")) {
    var options = {
        damping: "0.5",
    };
    Scrollbar.init(document.querySelector("#sidenav-scrollbar"), options);
}


$(document).ready(function(){
            
    var down = false;
    
    $('#bell').click(function(e){
        $('#box').show();
        var color = $(this).text();
        if(down){
            
            $('#box').css('height','0px');
            $('#box').css('opacity','0');
            down = false;
        }else{
            
            $('#box').css('height','auto');
            $('#box').css('opacity','1');
            down = true;
        }
    });
});

    $(document).mouseup(function (e) {
        var aEsconder = $("#bell");
        if (aEsconder.length > 0){
            $('#box').hide();
        }
    });