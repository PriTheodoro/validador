function cpfValidator(cpf) {
    let newCpf = cpf.replace(/[^\d]+/g, '');
    const arrNewCpf = newCpf.split("");
    const notCpf = arrNewCpf.every((element) => element === arrNewCpf[0]);
    const newdigs = subDig(arrNewCpf);
    const firstDig = checkDig(mod(sum(newdigs,10)));
    const secondDig = checkDig(mod(sum(newdigs.concat(firstDig),11)));
    return !notCpf && (firstDig === parseInt(arrNewCpf[9])) && (secondDig === parseInt(arrNewCpf[10]));     
}

const subDig = (cpf) => {
   return cpf.slice(0,9);
}

const multiplicator = (val) => (result, num, i) => 
    result +(num*val--);

const sum = (rest, val) => 
    rest.reduce(multiplicator(val), 0);

const checkDig = (num) => {
    if (num < 2){
        return 0;
    } else {
        return 11-num;
    }  
}
const mod  = (num) => num % 11;

module.exports = cpfValidator;