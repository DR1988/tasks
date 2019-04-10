const arg = process.argv[2]

switch (arg) {
  case 'stack':
    stackCall()
    break;

  default:
    break;
}

function stackCall (){

  const testArray = Array.from(new Array(100000)).map((el, ind) => ind + 1)
  const start = Date.now()
  console.log(start)
  function stack() {
    if(testArray.pop()){
      // setTimeout(stack, 0)
      stack()
    } else {
      const finish = Date.now()
      console.log(`It took ${((finish - start)/1000).toFixed(2)} seconds`)
    }
  }
  stack()
}