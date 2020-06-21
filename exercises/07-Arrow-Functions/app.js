const rapid=(example)=>{
    let consonant="";
    for(let i=0; i<example.length;i++)
    consonant= example.replace(/[aeiou]/ig,'');
  return consonant.toUpperCase()
//   return example.replace(/[aeiou]/ig,'');
}
   // From this line up Do not change code below
   let str = "John";
   console.log(rapid(str));
