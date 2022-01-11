console.log('*****Task # 1*****');
const a = 'a';
const s = 'S';

console.log( a + a/s + a + s);

console.log('*****Task # 2*****');
let x = 3;
let y = 5;
var oper;
const fun = function (x,y, oper) {
       switch (oper){
           case '+' : return console.log(`${x} + ${y} =`, x+y);
           case '-' : return console.log(`${x} - ${y} =`, x-y); 
           case '*' : return console.log(`${x} * ${y} =`, x*y);
           case "/" : if (y != 0)  return console.log(`${x} / ${y} =`, x/y);
                      else console.log ('Error, cannot be divided by 0');      
       }
};
let result = fun(x,y,'/');


console.log('*****Task # 3*****');
const func = function (f){
            return function (q,w){
                return q*w;
            }
};
console.log(func(5)(10,3));
