function getSum(a, b)
{
  let total = 0;
  if(a > b){
    [a, b] = [b, a];
  }
  for(let i = a; i <= b; i++){
    total += i;
  }
  return total;
}