//1

setTimeout(() => {
  console.log("Timeers out");
  const tab = window.open("http://www.facebook.com");
  setTimeout(() => {
    console.log("closinng tab");
    tab.close();
  }, 1000);
}, 1000);

//2
let list = {
  value: 1,
  next: {
    value: 2,
    next: {
      value: 3,
      next: {
        value: 4,
        next: null,
      },
    },
  },
};

const rec = (l) => {
  console.log(l.value);

  if (l.next) {
    rec(l.next);
  }
  return false;
};

rec(list);
//3
const sum =(a,b) => a+b;
const min =(a,b) => a-b;
const mul =(a,b) => a*b;
const div =(a,b) => a/b;

const hof = (fn, a, b)   =>  {
  console.log(fn(a,b));
  return true;
}

hof(sum, 4, 20);
hof(min, 4, 20);
hof(mul, 4, 20);
hof(div, 20, 4);

//4.1
const arr = [1, 2, 3, 4, 5, {hello: "world"}];

const f = arr.reduce((acc,val) => {

    if (typeof val ==="number"){
      return [...acc, val];
    }
    return[...acc];
},[]);
console.log(f);

//4.2

console.log(arr.join(" and "));

//4.3

const changeArr = arr.map((val) => {
    if (val==4) return 10;
    return val;
}).reverse;

console.log(changeArr);

//5

const resetButon = document.getElementById("reset");
const startButon = document.getElementById("start");

const containerEl = document.getElementById("container");

let timer;
let interval;
let timerCounter = 0;
let intervalCounter = 0;

resetButon.addEventListener("click",() =>{
  const reset = document.getAttribute("data", "del");
  reset.remove();
});
startButon.addEventListener("click",()=>{
  timer = setTimeout(()=>{
    console.log("Runed timeout");
    const div = document.createElement("div");
    div.setAttribute("data", "del");
    div.append("Timer" + timerCounter);
    containerEl.append(div);
    timerCounter++;
  },5000);
  interval = setInterval(() => {
    console.log("Runned interval");
    const div = document.createElement("div");
    div.setAttribute("data", "del");
    div.append("Interval" + intervalCounter);
    containerEl.append(div);
    intervalCounter++;
  }, 4000);
})