console.log(typeof null, typeof undefined, typeof NaN, typeof []);

console.log(0 == '0', 0 === '0', null == undefined, null === undefined, NaN == NaN);

console.log([] == false, [] ? 'truthy' : 'falsy');

for (var i=0;i<3;i++) setTimeout(()=>console.log('var',i),0);
for (let j=0;j<3;j++) setTimeout(()=>console.log('let',j),0);

console.log('A'); setTimeout(()=>console.log('B'),0);
Promise.resolve().then(()=>console.log('C')); console.log('D');

const arr=[1,2,3]; arr.push(4); console.log(arr); // why is this allowed with const?

const a={x:{y:1}}; const b={...a}; b.x.y=99; console.log(a.x.y);

console.log([10,9,1].sort(), [10,9,1].sort((p,q)=>p-q));

const o={n:'x', reg(){return this.n}, arrow:()=>this?.n};
console.log(o.reg(), o.arrow());

console.log([1,2,3].map(n=>n*2), [1,2,3].forEach(n=>n*2));
