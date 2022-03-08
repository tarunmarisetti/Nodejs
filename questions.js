const questions=["1.what is ur name?","2.which programming lang do u prefer?","3.what is ur expertise?"];
const ask=(i=0)=>{
  process.stdout.write(`\n\n${questions[i]}`)
  process.stdout.write(" > ")
  
}
ask()
const answers=[]
process.stdin.on('data',(data)=>{
  answers.push(data.toString().trim())
  if(answers.length<questions.length){
    ask(answers.length)
  }
  else{
    process.exit();
  }
})

process.on('exit',()=>{
  const[name,lang,level]=answers
  console.log(`
   Thanks for ur response
   Hi ${name}, ucan code ${lang},with the ${level} level
  `)

})