const questions=document.querySelector('.qa');

questions.forEach(function(question)
{
  const btn=question.querySelector('.qbut');
  btn.addEvenListener("click",function(){
    questions.forEach(function(item){
      if(item!==question){
        item.classList.remove("show-text");
      }
    })
  question.classList.toggle("show-text");
})
})