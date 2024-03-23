import React from 'react'
import { Button } from "@/components/ui/button"
import { IoWalletOutline } from "react-icons/io5";
import {useLogin} from '../hooks/useLogin'
import {useSignup} from '../hooks/useSignup'
import { useState } from 'react';
import {ethers} from 'ethers';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"
import {
    InputOTP,
    InputOTPGroup,
    InputOTPSeparator,
    InputOTPSlot,
  } from "@/components/ui/input-otp"
  
const LoginSignup = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [referral,setReferral] = useState('')
  const [username, setUserName] = useState('')
  const [password, setPassword] = useState('')
  const [address, setAddress] = useState('')
  const { login} = useLogin()
  const { signup} = useSignup()

  const handleLogin = async (e) => {
      e.preventDefault()
      login(username, password)
  }
  const handleSignup = async (e) => {
      e.preventDefault()
      signup(name, email, password, username,referral)
  }

  

  return (
    <Tabs defaultValue="log in" className="w-[400px] mx-auto my-24">
      <TabsList className="grid w-full grid-cols-2 bg-zinc-800 rounded-lg">
        <TabsTrigger value="log in">LOG IN</TabsTrigger>
        <TabsTrigger value="sign up">SIGN UP</TabsTrigger>
      </TabsList>
      <TabsContent value="log in">
        <form onSubmit={handleLogin}>
          <Card className="bg-black">
            <CardHeader>
              <CardTitle className="text-white">WELCOME BACK!!!</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2 text-white">
              <div className="space-y-1 ">
                <Label htmlFor="username" className="text-white">USERNAME</Label>
                <Input id="username" defaultValue="username" type="text" className="bg-black" 
                onChange={(e) => setUserName(e.target.value)}
                value={username}/>
              </div>
              <div className="space-y-1">
                <Label htmlFor="password" className="text-white">PASSWORD</Label>
                <Input id="password" defaultValue="***********" type="password" className="bg-black" 
                onChange={(e) => setPassword(e.target.value)}
                value={password}/>
              </div>
              <div className='flex justify-center'>
                  <div className='w-10 h-10 items-center justify-center flex text-white rounded-full hover:text-black hover:bg-white'>
                      <IoWalletOutline size={'30px'}/>
                  </div>
              </div>
            </CardContent>
            <CardFooter className="flex justify-center w-full">
              <Button variant="outline" type="submit">SUBMIT</Button>
            </CardFooter>
          </Card>
        </form>
      </TabsContent>
      <TabsContent value="sign up">
        <form onSubmit={handleSignup}>
          <Card className="bg-black">
            <CardHeader>
              <CardTitle className="text-white">SIGN UP NOW!!!</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2 text-white">
              <div className="space-y-1">
                <Label htmlFor="name">NAME</Label>
                <Input id="name" type="text" className="bg-black" defaultValue="name"
                onChange={(e) => setName(e.target.value)}
                value={name}/>
              </div>
              <div className="space-y-1">
                <Label htmlFor="username">USERNAME</Label>
                <Input id="username" type="text" className="bg-black" defaultValue="username"
                onChange={(e) => setUserName(e.target.value)}
                value={username}/>
              </div>
              <div className="space-y-1">
                <Label htmlFor="eamil">EMAIL</Label>
                <Input id="email" type="eamil" className="bg-black" defaultValue="email" 
                onChange={(e) => setEmail(e.target.value)}
                value={email}/>
              </div>
              <div className="space-y-1">
                <Label htmlFor="password">PASSWORD</Label>
                <Input id="password" type="password" className="bg-black" defaultValue="***************" 
                onChange={(e) => setPassword(e.target.value)}
                value={password}/>
              </div>
              <div className='flex justify-center space-y-1'>
                  <div className='w-10 h-10 items-center justify-center flex text-white rounded-full hover:text-black hover:bg-white'>
                      <IoWalletOutline size={'30px'}/>
                  </div>
              </div>
              <div className='flex space-y-1 items-center'>
                  <Label htmlFor="referal">REFERAL CODE</Label>   
                  <Input id="referral" type="text" className="bg-black" defaultValue="***************" 
                  onChange={(e) => setReferral(e.target.value)}
                  value={referral} maxlength="6"/>
              </div>
            </CardContent>
            <CardFooter className="flex justify-center">
              <Button variant="outline" type = "submit">SUBMIT</Button>
            </CardFooter>
          </Card>
        </form>
      </TabsContent>
    </Tabs> 

  )
}

export default LoginSignup