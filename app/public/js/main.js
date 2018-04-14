$(document).ready(function () {

    //Impedir Post ao atualizar pagina
   /* $(".semReenvio").submit(() => {
        //$(".semReenvio").reset();
    });*/

    //Efeito surgir e desaparecer
    const efeito = $(() => {
        $(".status").fadeIn(700, () => {
            window.setTimeout(() => {
                $('.status').fadeOut();
            }, 4000);
        });
    });
});