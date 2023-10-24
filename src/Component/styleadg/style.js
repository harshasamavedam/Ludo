import './stylet.css'

const Sty=(props)=>{
    const {avlis,numlis,pres}=props

    console.log(avlis)
   console.log(numlis)

return <div className='hor'>
    {avlis.map((each)=>{let c=numlis.includes(each)?'numsty':'boxst'
    return <h1 className={c}>{each}</h1>})}

</div>
}
export default Sty