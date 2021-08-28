



var body=document.querySelector("body");
body.style.margin=0;
body.style.padding=0;

//creating header
var header=document.createElement("div");
header.innerText="GUESS THE WORD GAME";
header.style.color="white";
header.style.backgroundColor="#00e676";
// header.style.boxShadow="0 5px 10px 5px black";
header.style.textShadow="0 22px 6px black";
header.setAttribute("class","header");
header.style.height="100px";
header.style.display="flex";
header.style.justifyContent="center";
header.style.alignItems="center";
header.style.fontSize="25px";
header.style.fontWeight="bold";
header.style.letterSpacing="10px";

body.appendChild(header);
body.style.backgroundColor="#33eb91";

//creating body div
var div=document.createElement("div");
div.style.width="800px";
div.style.height="400px";
div.style.backgroundColor="#00c853";
div.style.opacity="0.8";
div.style.marginLeft="320px";
div.style.marginTop="80px";
div.style.position="relative";
div.style.boxShadow="0 3px 5px 3px black"
// div.style.display="flex";
// div.style.justifyContent="center";
// div.style.alignItems="center";
body.appendChild(div);

//adding div "click here to star"
var start=document.createElement("div");
start.classList.add("start");
start.textContent="click here to start";
start.style.textTransform="uppercase";
start.style.display="flex";
start.style.justifyContent="center";
start.style.alignItems="center";
start.style.backgroundColor="white";
start.style.color="red";
start.style.width="200px";
start.style.height="50px";
start.style.position="absolute";
start.style.top="50%";
start.style.left="50%";
start.style.transform="translate(-50%,-50%)";
div.appendChild(start);
var letsgo=false;

//adding click event to this div tag
start.addEventListener("click",()=>{
    if(letsgo==true){
        document.querySelector(".div1").remove();
    }
    start.style.visibility="hidden";
    letsgo=true;
    display(letsgo);
});

//creating the game area with text and input tab
var languages=["javascript","python","php","react","node"];
var cnt=0;
function display(letsgo){
if(letsgo){
let a=permuteString(languages[cnt++]);;
var text=document.createElement("div");
text.textContent=`Guess the word: ${a}`;
text.style.fontWidth="bold";
text.style.width="450px";
text.style.fontSize="20px";
text.style.position="absolute";
text.style.display="flex"
text.style.justifyContent="center";
text.style.marginLeft="50%"
text.style.marginTop="20%"
text.style.transform="translateX(-50%)"
// text.style.alignItems="center"
var input=document.createElement("input");
input.style.borderRadius="20px";
input.style.backgroundColor="white";
input.style.position="absolute";
input.style.border="none";
input.style.outline="none";
input.style.display="flex";
input.style.justifyContent="center";
input.style.width="200px";
input.style.height="30px";
input.style.marginLeft="50%";
input.style.marginTop="25%"
input.style.transform="translateX(-50%)"
input.style.fontSize="20px"
input.style.textAlign="center"
// input.style.alignItems="50%";
var btn=document.createElement("button");
btn.textContent="Guess";
btn.textTransform="uppercase";
btn.style.color="red";
btn.style.position="absolute"
btn.style.display="flex";
btn.style.justifyContent="center";
btn.style.textTransform="uppercase";
btn.style.fontWeight="bold"
btn.style.marginLeft="50%"
btn.style.marginTop="35%"
btn.style.padding="10px"
btn.style.width="100px"

btn.style.transform="translateX(-50%)"
//creating another div to add these elements
var div1=document.createElement("div");
div1.classList.add("div1");
div1.style.position="relative";
div1.style.width="600px"
div1.style.height="400px"
div1.style.backgroundColor="#00c853"
div1.style.marginLeft="100px";
div.appendChild(div1);


div1.appendChild(text);
div1.appendChild(input);
div1.appendChild(btn);

//adding event to button tag
btn.addEventListener("click",()=>{
    console.log(input)
    var b=input.value;
    console.log(b)
    let lang=["javascript","python","php","react","node"];
    if(b.toLowerCase()===lang[cnt-1])
    {
        text.innerText="Correct";
        input.style.visibility="hidden";   
        btn.style.visibility="hidden";
        let start=document.querySelector(".start")
        start.style.visibility="visible";
        start.style.zIndex="2";
        
       

    }
    else{
        input.style.marginTop="28%"
        text.innerText=`Sorry Boss,It's Incorrect.Please Guess again ${a}` 
    }
});
}//letsgo
}//display

//making permutation of a string
function permuteString(str){
    var  test=Array.from(str.split(""));
    var index;
    var a=new Array();
    var ind=new Array();
    for(let i=0;i<test.length;i++){
        while(true){
        index=Math.ceil(Math.random()*test.length);
        if(i>0){
        if(ind.indexOf(index)==-1){
            break;
        }
        }
        else{
            break;
        }
        }
        
        // if(ind.indexOf(index)!=-1){
        ind.push(index);
        console.log(`value of index is ${index}`)
        a.push(test[index-1]);
        console.log(`Value inside this iteration is ${a} and test at that index is ${test[index-1]}`)
        // }//if
    }//for
    console.log(`value after permutation is ${a}`);
    console.log(`value of join is ${a.join("")}`)
    return a.join("");
    
}