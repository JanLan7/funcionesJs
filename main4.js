function numeroMayor(a,b,c) {
    if (a > b && a > c){
        return a;
    } else if(b > a && b > c){
        return b;
    }else{
        return c;
    } 
}
console.log(numeroMayor(19,2929999,8882));
