import { useState } from "react"

function Comp1() {

  const [step1 , setStep1] = useState({
    name1:"",
    email1:"",
    phone1:"",
  })

  const onChange = (e) => {
    setStep1({...step1, [e.target.name]:e.target.value});
  }

  return (
    <>
        <input type='text' onChange={onChange} name="name1" value={step1.name1} placeholder="1" />
        <input type='text' onChange={onChange} name="email1" value={step1.email1} placeholder="1" />
        <input type='text' onChange={onChange} name="phone1" value={step1.phone1} placeholder="1" />
    </>
  )
}

export default Comp1