const form=document.querySelector('form')
form.addEventListener('submit',function(e){
  e.preventDefault();// for the memory stroage ke liye
  const height=parseInt(document.querySelector('#height').value)// string to int
  const weight=parseInt(document.querySelector('#weight').value)
  const results=document.querySelector('#results')
  if(height=='' || height<0 || isNaN(height)){
    results.innerHTML=`please give a valid height ${height}`
  }else if(weight=='' || weight<0 || isNaN(weight)){
    results.innerHTML=`please give a valid weight ${weight}`
  }else{
    const bmi=(weight / ((height * height)/10000)).toFixed(2);// do decimal tak dikhane ke liye
    //show the result
    results.innerHTML=`<span>${bmi}</span>`
  }
})