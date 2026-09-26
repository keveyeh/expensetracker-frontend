export default function totalSpent(transactionArray,budgetArray){
  let totalspent = 0;
  for(let i=0;i < budgetArray.length;i++){
    for(let j=0;j < transactionArray.length;j++){
          if(budgetArray[i].Category.toUpperCase() === transactionArray[j].Category.toUpperCase()){
            totalspent += Number(transactionArray[j].Amount)
          }
    }
  }
  return totalspent || 0
}