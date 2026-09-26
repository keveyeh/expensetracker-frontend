import { Chart } from "chart.js/auto"
import {useRef,useEffect, useContext} from 'react'
import { tran } from "../../context/Transaction"
import { currency } from "../../context/currency"
import { themes } from "../../context/ThemeContex"
function BarChart(){
    const {service} = useContext(tran)
     const {updatecurrency}= useContext(currency)
     const {theme} =useContext(themes)
    function updateMoney(amount){
        if(!amount){
            return 0;
        }
      let finalAmount;
      if(updatecurrency=== 'FCFA'){
        finalAmount = amount
      }else if(updatecurrency=== 'USD'){
        finalAmount = (Number(amount) / 565).toFixed(2)
      }else{
        finalAmount = (Number(amount) / 655.957).toFixed(2)
      }
      return Number(finalAmount)|| 0
    }
    const income = service.reduce((acc,currentValue)=>{
        return currentValue.Type === 'INCOME'? acc + Number(currentValue.Amount) : acc
    },0)|| 0
    const expense = service.reduce((acc,currentValue)=>{
        return currentValue.Type === 'EXPENSE'? (acc + Number(currentValue.Amount)) : acc
    },0) || 0
const chartRef = useRef(null)
    useEffect(()=>{
        const chart = new Chart(chartRef.current,{
            type:'bar',
            data: {
                labels:['Income','Expense'],
                datasets: [
                    {
                        label:'Income vs Expense',
                        data:[updateMoney(income) || 0,updateMoney(expense) || 0],
                    },
                ],
            },
            options:{
                responsive: true,
                maintainAspectRatio: false,
                scales:{
                    y:{
                        beginAtZero: true,
                        ticks:{
                            color:theme? '#ffffff':'#111827'
                        },grid:{
                            color: theme? 'rgba(255,255,255,255,0.15)':'rgba(0,0,0,0.1)'
                        }
                    },
                    x:{
                        ticks:{
                            color:theme? '#ffffff':'#111827'
                        },grid:{
                            color: theme? 'rgba(255,255,255,255,0.15)':'rgba(0,0,0,0.1)'
                        }
                    }
                },
                plugins:{
                    legend:{
                        labels:{
                            color:theme ? '#ffffff' : '#111827'
                        }
                    }
                }
            },
        })
        return ()=>{
            chart.destroy()
        }
    },[])
    return(
        <>
          <div style={{
            background: theme ? '#252538':'#ffffff',
            borderRadius:'12px',
            width:'95%',
            height:'98%'
            
        }}>
          <canvas ref={chartRef} style={{background: theme ? '#252538':'#ffffff'}}></canvas>
        </div>
        </>
    )
}
export default BarChart