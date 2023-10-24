import {Component} from 'react'
import Sty from './styleadg/style'
import '../Component/init.css'

export default class Main extends Component{
    state={presn:'',comp:[],prev:''}

    gen=()=>{
        const {presn,comp}=this.state
        let n=Math.floor(Math.random()*90)
       if(comp.includes(n)){
        
       }
       else{
        this.setState((prev)=>({comp:[...prev.comp,n],presn:n,prev:presn}))
       }
    }

    render(){
        
        const {presn,comp,prev}=this.state
        let k=[]
for(let j=1;j<90;j=j+10){
    let m=[]
    for(let n=j;n<j+10;n++){
        m.push(n)
    }
    k.push(m)
}
console.log(k)
        return <div className='Lud'>
            <div>
                <h1>{presn}</h1>
            <button type='button' onClick={this.gen}>Genrate number</button></div>
            <div className='subcon'>
            <div>
                <h1>previous Number</h1>
                <h1>{prev}</h1>
            </div>
                <div>
                <h1>Completed Numbers</h1>
            {k.map((each)=><Sty  numlis={comp} pres={presn} avlis={each}/>)}</div></div>
            </div>
            

    }
}