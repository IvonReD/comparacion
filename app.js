var  comparar= function (arreglo1, arreglo2){
  if (arreglo1.length !== arreglo2.length){ // compara la longitud
    //document.write ('Tiene la misma longitud')
    //return false;
    document.write ("Tus arreglos no son iguales")
  }else{
    //  document.write ("Son Igauales")
    for (var i=0; i<arreglo1.length; i+=1){
      if (arreglo1[i] !== arreglo2[i]){ // compara el arreglo  si no son exactamente iguales
        //return false;
          document.write ("No son iguales, Un indice esta mal")
      }
    }
  }

}

var array1 = [1,2,3,4,5,6,7,8,9,10];
var array2 = [1,2,3,4,5,6,7,8,9,10];

comparar(array1, array2);
