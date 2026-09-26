export default function calculateTotal(initialValue,array){
    
    let total = array.reduce((accumulator,currentValue)=>{
             return currentValue.Category.toUpperCase() === initialValue.toUpperCase() ? accumulator + Number(currentValue.Amount) : accumulator 
      },0)
      return total || 0
}