/*
let input=document.getElementById("myInput")

input.addEventListener("keypress", function a(){
    if(document.querySelector("#butt1")){
    const celsiusToFahrenheit = celsius => celsius * 9/5 + 32;
    return celsiusToFahrenheit() + "F"
    }
  
})

*/
/* if (document.querySelector("#butt2")){
    const fahrenheitToCelsius = fahrenheit => (fahrenheit - 32) * 5/9;
    return fahrenheitToCelsius() + "℃"
}

*/


function convert() {
    let c = document.getElementById('myInput').value;
    let togg = document.getElementById("togg");
    togg.classList.add("tog");
    let f=((c * 1.8) + 32);
    degree=(`${c}℃=${f}°F`);
    togg.value=degree;
    return alert(degree)

    }



const convert2= _ => {
    let f = document.getElementById('myInput').value;
    let c = (f - 32) * 5 / 9;
    alert(`${f}°F=${c}℃`);
}



function pyramid(){
    document.getElementById("new");
let n = 5;
 let string = "";
for (let i = 1; i <= n; i++) {
  for (let j = 0; j < i; j++) {
    string += "*";
  }
  string += "\n";
}
alert(string);
}

function pyramid2(){
    document.getElementById("new2");
    let n = 5;
    let string = "";
    for (let i = 1; i <= n; i++) {
     
      for (let j = 0; j < n - i; j++) {
        string += "  ";
      }
      
      for (let k = 0; k < i; k++) {
        string += "*";
      }
      string += "\n";
    }
   alert(string);
}

function pyramid3(){
    document.getElementById("new3");
    let n = 5;
    let string = "";
   
    for (let i = 1; i <= n; i++) {
     
      for (let j = 1; j <= n - i; j++) {
        string += "  ";
      }
      
      for (let k = 0; k < 2 * i - 1; k++) {
        string += "*";
      }
      string += "\n";
    }

   alert(string);
}

function pyramid4() {
    document.getElementById("new4");
let n = 5;
let string = "";

for (let i = 0; i < n; i++) {
  
  for (let j = 0; j < i; j++) {
    string += "  ";
  }
  
  for (let k = 0; k < 2 * (n-i) - 1; k++) {
    string += "*";
  }
  string += "\n";
}
alert(string);

}

/*
function stars(num){
    let str="";
    for (let i=0;i<num;i++){
        str +="*";
    }
    return str;
}

function diamond(height){
  
    let str="";
    for (let i=1;i<=height; i+=2){
        str +=stars(i) + "\n";
    }

    for (let x=height; x>0; x-=2){
        str+=stars(x) + "\n";
    }
    alert(str);
}

*/