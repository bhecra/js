const s  = -1;

isPositive(s)
function isPositive(a) {

    if(a > 0){
        return 'YES'
    }else{
        throw new Error( a ? 'Negative Error': 'Zero Error')
    }
}
