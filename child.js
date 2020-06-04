process.on('message',(msg)=>{
    console.log('From parent '+msg)
})

process.send("Hey parent");

let counter = 0;

setInterval(() => {
    if(counter == 2){
        process.exit()
    }
  process.send(counter);
  counter++
}, 1000);