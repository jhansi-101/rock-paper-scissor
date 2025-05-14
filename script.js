let pbtns=document.querySelectorAll("#pbtns button");
let ps=document.querySelector("#p_score");
let cs=document.querySelector("#c_score");
let inputElement = document.getElementById("ans");
let qn=document.getElementById("qn");
let its=0;
let rounds=0;
inputElement.addEventListener("change", () => {
    let value = parseInt(inputElement.value);
    rounds=value;
    if (isNaN(value) || value <= 0) {
        alert("Please enter a valid number greater than 0.");
        inputElement.value = "";
        return;
    }
    its=value;
    inputElement.disabled=true;
    qn.style.visibility="hidden";

});
const genCompChoice=()=>{
    return Math.floor((Math.random())*3);
}
const changeScore=(pid,cid)=>{
    
     if((pid===0 && cid===0) ||(pid===1 && cid===1) ||(pid===2 && cid===2)){
        console.log("draw");
     }else if((pid===0 && cid===1)||(pid===1 && cid===2)||(pid===2 && cid===0)){
        console.log("computer wins");
        cs.innerText=parseInt(cs.innerText)+1;
     }else if((pid===1 && cid===0)||(pid===2 && cid===1)||(pid===0 && cid===2)){
        console.log("computer lost");
        ps.innerText=parseInt(ps.innerText)+1;
     }
}

pbtns.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        if(its>0){
        console.log("choice was clicked");
        let compCh=genCompChoice();
        let cbtns=document.querySelectorAll("#cbtns button");
        let btn=cbtns[compCh]
        let img=btn.querySelector("img");
        img.style.visibility="visible";
        setTimeout(()=>{
            img.style.visibility="hidden";
        },2000);
        
        let pid= choice.getAttribute("class");
        if(pid=="b1"){
            pid=0;
        }else if(pid=="b2"){
            pid=1;
        }else if(pid=="b3"){
            pid=2;
        }
        pid=Number(pid);
        changeScore(pid,compCh);
        its--;}
        if(its===0 && rounds!=0){
            if(parseInt(ps.innerText)>parseInt(cs.innerText)){
               qn.innerText="You won the Game";
            }else if(parseInt(ps.innerText)<parseInt(cs.innerText)){
               qn.innerText="You lost the Game";
            }else{
               qn.innerText="It's a draw";
            }
            qn.style.visibility="visible";
        }
        
    })
}
)

let ng=document.querySelector("#ng");
let rb=document.querySelector("#rb");
ng.addEventListener("click",()=>{
    ps.innerText=0;
    cs.innerText=0;
    qn.style.visibility="hidden";
    its=0;
    qn.innerText="How Many Times You Want To Play";
    qn.style.visibility="visible";
    inputElement.disabled=false;
})
rb.addEventListener("click",()=>{
    ps.innerText=0;
    cs.innerText=0;
    qn.style.visibility="hidden";
    its=0;
    qn.innerText="How Many Times You Want To Play";
    qn.style.visibility="visible";
    inputElement.disabled=false;

})