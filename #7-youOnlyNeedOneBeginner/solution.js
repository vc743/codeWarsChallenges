function check(a, x) {
    // your code here
    for(let i = 0; i < a.length; i++){
      if(a[i] === x){
        return true;
      }
    }
    return false;
  }