function inputGiven(e){
    let target = e.target;
    let container = document.getElementsByClassName('btn-container')[0];
    if(target===container){

    }
    else{
    inpGiven = target.innerText;
    var inp = document.getElementById('inp');
   if(inpGiven ===  'del'){
       if(inp.value === 'Invalid Expression'){
           inp.value='';
       }
       else{
           inp.value=inp.value.slice(0,inp.value.length-1);
       }
   }
   if(inpGiven === '='){
       try {
           inp.value= eval(inp.value);
       } catch (error) {
           inp.value = 'Invalid Expression';  
       }
   }
   else if (inpGiven !=  'del'){
       inp.value = inp.value + inpGiven;
   }
   if(inpGiven==='C'|| inp.value==='C'){
       inp.value='';
   } 
   }
   }
   let btnContainer = document.getElementsByClassName('btn-container')[0];
   btnContainer.addEventListener('click',inputGiven);