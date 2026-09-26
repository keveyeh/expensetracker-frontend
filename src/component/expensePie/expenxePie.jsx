import { Chart } from "chart.js/auto"
import {useRef,useEffect} from 'react'
import { tran } from "../../context/Transaction"
import { useContext } from "react"
import calculateTotal from "../../customhook/usereduce"
import { currency } from "../../context/currency"
import { themes } from "../../context/ThemeContex"
function ExpensePieChart(){
    const {service} = useContext(tran)
     const {updatecurrency}= useContext(currency)
     const {theme}= useContext(themes)
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
          return finalAmount
        }
const chartRef = useRef(null)
    useEffect(()=>{
        const chart = new Chart(chartRef.current,{
            type:'pie',
            data: {
                labels:['Food','Transport','Bills','Entertaiment','Shopping','Education','Health','Others'],
                datasets: [
                    {
                        label:'Expense',
                        data:[updateMoney(calculateTotal('food',service)) || 0,updateMoney(calculateTotal('transport',service)) || 0,updateMoney(calculateTotal('bills',service)) || 0,updateMoney(calculateTotal('entertainment',service)) || 0,updateMoney(calculateTotal('shopping',service)) || 0,updateMoney(calculateTotal('education',service)) || 0,updateMoney(calculateTotal('health',service)) || 0,updateMoney(calculateTotal('others',service)) || 0],
                        backgroundColor:['#2563EB','#60A5FA','#1D4ED8','#7C3AED','#14B8A6','#3B82F6','#10B981','#94A3B8']
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
            width:'98%',
            height:'98%'
        }}>
          <canvas ref={chartRef} style={{background: theme ? '#252538':'#ffffff'}}></canvas>
        </div>
        
        </>
    )
}
export default ExpensePieChart