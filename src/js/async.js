function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function msg() {
  let count = 0;
  while (true) {       
    await delay(1000); 
    count++;
    console.log(count);
  }
}

msg();
