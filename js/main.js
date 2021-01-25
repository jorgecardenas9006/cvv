/*================================================================
                    Colocar el header con el tamaño de la pantalla
 ===============================================================*/
 if(screen.width <= 800){
    const header = new Header('nav_bar','nav_bar-behind');
    if(header.state()){
        header.close();
    }
    else if(header.state() == false){
        header.open();
    }
 }
/*================================================================
                    Cerrar el header principal
=================================================================*/
const navBar = document.getElementsByClassName('nav_bar-close');
navBar[0].onclick = function navBar(){
    const header = new Header('nav_bar','nav_bar-behind');
    if(header.state()){
        header.close();
    }
    else if(header.state() == false){
        header.open();
    }
}
/*================================================================
                    Cerrar el header secundario
=================================================================*/
const navBarBehind = document.getElementsByClassName('nav_bar-behind-menu');
navBarBehind[0].onclick = function navBar(){
    const header = new Header('nav_bar-behind','nav_bar');
    if(header.state()){
        header.close();
    }
    else if(header.state() == false){
        header.open();
    }
}