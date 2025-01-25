function counting(){
    let result="";
    let a=prompt(parseInt("Enter first number"));
    let b=prompt(parseInt("Enter last number"));
    
        if(a<b){
            for (let i = a; i <=b; i++) { 
                result += i + '          ';}   
                document.getElementById("result").innerHTML=result;
            }else{
            document.getElementById("result").innerHTML="please click again button"
        }
    }
    

    function counting2() {
        let result2 = "";
        let a = parseInt(prompt("Enter first number"));
        let b = parseInt(prompt("Enter last number"));
    
        if (a > b) {
            for (let i = a; i >= b; i--) {
                result2 += i + "                   ";
            }
            document.getElementById("result2").innerHTML = result2;
        } else {
            document.getElementById("result2").innerHTML = "Please click again button";
        }
    }



    function table(){
        let input=document.getElementById("input").value;
        let result3 = "               ";
        for(let i = 0; i < 12;  i++){
            result3 +=`${input} * ${i} = ${input*i} <br>`;
        }
        document.getElementById("result3").innerHTML=result3;
    }
    
    
