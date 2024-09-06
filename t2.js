function numusuario(ingrese){
  
    while(ingresado > 10 ){
        console.log("el numero debe ser menor a 10 ");
        ingrese = parseInt(prompt("Vuelva a ingresa un numero entre el 1 al 10 : "));
    }
        while (ingrese <0 ){
            ingrese = parseInt(prompt("Ingresa un numero entre el 1 y 10 , que sea un valor mayor a 0: "));
        
    }if (ingrese >0 && ingrese <10 ){
        console.log("Numero ingresado con exito :) ");
    }
    return ingrese;
   
    }
   let ingrese = parseInt(prompt("Ingrese un numero entre el 1 y 10 : ")); //se almacena en una variable let 
   console.log(numerousuario(ingrese));
     let vidas= 3;
   console.log("tus vidas son :  "+ 3);
   
   
console.log ("-----------------")



function comparar(random){
     let numerorandom = Math.floor(Math.random() * (10-1+1)+1);
         
         
    while(ingresado !==numrandom && vidas >0){
    vidas --; 
    console.log("---------------------------------");
    console.log("el numero  que escribiste y el numero aleatorio es diferente ");
    console.log("tus "+ vidas + " vidas ");
    ingrese = parseInt(prompt("Ingrese un numero entre el 1 al 10 : ")); //se almacena en una var let 
    ///if( vidas <= 0 ){
     //console.log("ya no tienes vidas :( ");
    
}


    if(vidas <=0){
            console.log("ya no tienes vidas :( ");
            console.log("el numero aleatorio es :  "+ numrandom)
            console.log(` GAME OVER`);
        
    }else if(ingrese==numrandom) {
    
    console.log("GENIAL :3 encontraste el numero "+numrandom);
    
       
    }
        
}
    comparar(ingrese);