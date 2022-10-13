import {useState} from 'react';
import {MdCancelPresentation} from 'react-icons/md';
import {SiNike} from 'react-icons/si';
import Data from './data';
const App=()=>{
    const [qa,setQa]=useState(Data);
    const [answered,setAnswered]=useState([]);
    const [modal,setModal]=useState(false);
    let [res,setRes]=useState(0);
    let [count,setCount]=useState(0);
    const handleRadio=(e)=>{
        setCount(++count);
        const clientAnswer=e.target.id;
        const serverQuestion=parseInt(e.target.name);
        const serverAnswer=qa.find((item)=>item.id===serverQuestion).answer;
        if(clientAnswer==serverAnswer){
            setRes(++res);
        }
        setAnswered([...answered,serverQuestion])
    } 
    return (
        <main className='qa'>
            {qa.map((each)=>{
                return (
                    <div key={each.id} className='each'>
                        <h4>{each.question}</h4>
                        {answered.includes(each.id) && each.answer==="a"?<div className='choice a' style={{"backgroundColor":"green"}}>
                            <input type='radio' id="a" name={each.id} onChange={(e)=>handleRadio(e)}/>{each.a}</div>:
                            <div className='choice a'><input type='radio' id="a" name={each.id} onChange={(e)=>handleRadio(e)}/>{each.a}</div>}
                        {answered.includes(each.id) && each.answer==="b"?<div className='choice b' style={{"backgroundColor":"green"}}>
                            <input type='radio' id="b" name={each.id} onChange={(e)=>handleRadio(e)}/>{each.b}</div>:
                            <div className='choice b'><input type='radio' id="b" name={each.id} onChange={(e)=>handleRadio(e)}/>{each.b}</div>}
                        {answered.includes(each.id) && each.answer==="c"?<div className='choice c' style={{"backgroundColor":"green"}}>
                            <input type='radio' id="c" name={each.id} onChange={(e)=>handleRadio(e)}/>{each.c}</div>:
                            <div className='choice c'><input type='radio' id="c" name={each.id} onChange={(e)=>handleRadio(e)}/>{each.c}</div>}
                        {answered.includes(each.id) && each.answer==="d"?<div className='choice d' style={{"backgroundColor":"green"}}>
                            <input type='radio' id="d" name={each.id} onChange={(e)=>handleRadio(e)}/>{each.d}</div>:
                            <div className='choice d'><input type='radio' id="d" name={each.id} onChange={(e)=>handleRadio(e)}/>{each.d}</div>}
                    </div>  
                 )})
                 }
                 <button onClick={()=>setModal(true)} className='showResult'>show results</button>
                 { modal &&<div className='modal'>
                    <MdCancelPresentation  className='cancel' onClick={()=>setModal(false)}/>
                    <div className='results'>
                        <div className='resultCircle'>
                            <span className='result correct'>{res}</span>
                            <span className='result over'>/</span>
                            <span className='result outof'>{count}</span>
                        </div>
                        <SiNike className='nike'/>
                        <div className='good'>Good!</div>
                    </div>
                </div>
            }
        </main>
    )
}
export default App;