"use client"

import Heading from "@/app/ui/heading/heading";
import { Input } from "@/components/ui/input";
import Button from "../button/button";
import { useState } from "react";

export default function Community() {
  const [userData, setUserData] = useState({
    fname: '',
    sname: '',
    email: ''
  })

  const [userDataValid, setUserDataValid] = useState({
    fname: true,
    sname: true,
    email: true
  })

  function handleSubmit(e) {
    e.preventDefault();
    if (userDataValid.fname === true && userDataValid.sname === true && userDataValid.email === true && userData.fname != '') {
      console.log(userData)
      return;
    }
    // TODO: Finish form submission logic
    
  }

  function handleInputChange(identifier, data) {
    setUserData(prevData => ({
      ...prevData,
      [identifier]: data
    }))
    setUserDataValid(prevData => ({...prevData, [identifier]: true}))
  }

  function handleInputBlur(identifier, event) {
    switch (identifier) {
      case 'email':
        if (event.target.value.includes('@') && !event.target.value.includes(' ') && event.target.value.length > 3) {
          setUserDataValid(prevData => ({...prevData, email: true}))
        } else {
          setUserDataValid(prevData => ({...prevData, email: false}))
        }
        break;
      case 'fname':
        if(event.target.value.length > 1) {
          setUserDataValid(prevData => ({...prevData, [identifier]: true}))
        } else {
          setUserDataValid(prevData => ({...prevData, [identifier]: false}))
        }
      case 'sname':
        if(event.target.value.length > 1) {
          setUserDataValid(prevData => ({...prevData, [identifier]: true}))
        } else {
          setUserDataValid(prevData => ({...prevData, [identifier]: false}))
        }
    }
  }

  return (
    <section className="flex flex-col justify-center items-center p-5 bg-dolphin text-white">
      <Heading className="pt-8 pb-2 text-center">Join Our Community</Heading>
      <p className="text-center font-[family-name:var(--font-montserrat)] pb-8">
        Stay up to date about the latest that Almasjid is doing in your
        community. We will never spam you.
      </p>
      <form onSubmit={handleSubmit} className="flex flex-col md:flex-row items-center mb-5 relative">
        <div className="flex flex-row items-center md:w-[120%]">
        <Input onBlur={(event)=>handleInputBlur('fname', event)} onChange={(event)=>handleInputChange('fname', event.target.value)} type="text" minLength={2} required placeholder="First Name" className='ml-0 mr-2 md:mr-2 my-0'/>
        <Input onBlur={(event)=>handleInputBlur('sname', event)} onChange={(event)=>handleInputChange('sname', event.target.value)} type="text" minLength={2} required placeholder="Surname" className='ml-2 mr-0 md:ml-2 my-0'/>
        </div>
        <Input onBlur={(event)=>handleInputBlur('email', event)} onChange={(event)=>handleInputChange('email', event.target.value)} type="email" required placeholder="Email" className='md:mx-4 md:my-0 my-4'/>
        <Button type='submit' className='mt-0 min-w-[100px]' colour='orange' onClick={handleSubmit}>Join us</Button>
      </form>
      {!userDataValid.fname && <p className="text-sm text-red-400 font-medium font-[family-name:var(--font-montserrat)]">Please enter a valid first name.</p>}
      {userDataValid.fname && !userDataValid.sname && <p className="text-sm text-red-400 font-medium font-[family-name:var(--font-montserrat)]">Please enter a valid surname.</p>}
      {userDataValid.fname && userDataValid.sname && !userDataValid.email && <p className="text-sm text-red-400 font-medium font-[family-name:var(--font-montserrat)]">Please enter a valid email address.</p>}
    </section>
  );
}
