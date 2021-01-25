class Header{
    constructor(principal,secundario){
        this.principal = principal;
        this.secundario = secundario
    }
    state(){
        let estado = document.getElementById(this.principal);
        /*console.log(estado.classList[0]);*/
        if(estado.classList[0] === 'open'){
            return(true)
        }
        else if(estado.classList[0] === 'close'){
            return false;
        }
        else{
            console.log('algo va mal')
        }

    }
    open(){
        let change = document.getElementById(this.principal);
        let charge = document.getElementById(this.secundario);
        change.classList.remove("close");
        change.classList.add("open");
        charge.classList.remove("close");
        charge.classList.add("open");
    }
    close(){
        let change = document.getElementById(this.principal);
        let charge = document.getElementById(this.secundario);
        change.classList.remove("open");
        change.classList.add("close");
        charge.classList.add("open");
        charge.classList.remove("close");
    }
}