export function calcularTotal(cantidad,plazo){
    //cantidades
    //0 - 1000 = 25%
    //1001 - 5000 = 20%
    //5001 - 10000 = 15%
    //+10000 = 10%

    let total = (cantidad > 0 && cantidad <= 1000 ) ? cantidad * 1.25 : 
                (cantidad > 1000 && cantidad <= 5000) ? cantidad * 1.20 :
                (cantidad > 5000 && cantidad <= 10000) ? cantidad * 1.15:
                (cantidad > 10000) ? cantidad * 1.10 : 'Error en la cifra ingresada';
    
    //3 meses = 5%
    //6 meses = 10%
    //12 meses = 15%
    //24 meses = 20% 
    total += (plazo === 3 ) ? cantidad * 0.05 : 
             (plazo === 6 ) ? cantidad * 0.10 : 
             (plazo === 12 ) ? cantidad * 0.15 : 
             (plazo === 24 ) ? cantidad * 0.20 : 'Error en la cantidad';

             return total;

}