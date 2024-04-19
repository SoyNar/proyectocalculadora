let resultado;
let num1;
let num2;
let option;

let menu = ` Menu
          1. sumar
          2. restar
          3. multiplicar
          4. dividir
          5. salir
`;







let calcula = (option, num1, num2) => {
    
    if(option == 1){
        return num1 + num2;
    }else if (option == 2){
        return num1 - num2;
    }else if(option== 3){
        return num1* num2;
    }else if(option == 4){
        return (num1 / num2 && num2 !== 0);
    }else if(option == 5){
        console.log("Saliendo del sistema");
    }else{
        console.log("error");
    }
}
let Options = () =>{
    alert(menu);
    let option = Number(prompt("Escoja la operacion"));
    let num1 = parseFloat(prompt("escriba el primer numero"));
    let num2 = parseFloat(prompt("escriba el segundo numero"));
}

if(!isNaN(num1) && !isNaN(num2)){
 resultado = calcula(option, num1, num2);
 console.log(`resultado: ${resultado}`);


}else{
    console.log(`numeros no validos`);
}

Options();