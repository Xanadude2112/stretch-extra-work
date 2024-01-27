const reverse = function (arg){
  for(let i = 0; i < arg.length; i++){
    const original = arg[i];
    let reversed = '';
    for(let z = original.length - 1; z >= 0; z--){
      reversed += original[z];
    }
    
    console.log(reversed);
  }
};

reverse(process.argv.slice(2));