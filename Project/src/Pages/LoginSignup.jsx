import React from 'react'
import { Button } from "@/components/ui/button"
import { IoWalletOutline } from "react-icons/io5";
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
  return (
    <Tabs defaultValue="log in" className="w-[400px] mx-auto my-48">
      <TabsList className="grid w-full grid-cols-2 bg-zinc-800 rounded-lg">
        <TabsTrigger value="log in">LOG IN</TabsTrigger>
        <TabsTrigger value="sign up">SIGN UP</TabsTrigger>
      </TabsList>
      <TabsContent value="log in">
        <Card className="bg-black">
          <CardHeader>
            <CardTitle className="text-white">WELCOME BACK!!!</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2 text-white">
            <div className="space-y-1 ">
              <Label htmlFor="username" className="text-white">USERNAME</Label>
              <Input id="username" defaultValue="username" type="text" className="bg-black"/>
            </div>
            <div className="space-y-1">
              <Label htmlFor="password" className="text-white">PASSWORD</Label>
              <Input id="password" defaultValue="***********" type="password" className="bg-black" />
            </div>
            <div className='flex justify-center'>
                <div className='w-10 h-10 items-center justify-center flex text-white rounded-full hover:text-black hover:bg-white'>
                    <IoWalletOutline size={'30px'}/>
                </div>
            </div>
          </CardContent>
          <CardFooter className="flex justify-center w-full">
            <Button variant="outline">SUBMIT</Button>
          </CardFooter>
        </Card>
      </TabsContent>
      <TabsContent value="sign up">
        <Card className="bg-black">
          <CardHeader>
            <CardTitle className="text-white">SIGN UP NOW!!!</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2 text-white">
            <div className="space-y-1">
              <Label htmlFor="name">NAME</Label>
              <Input id="name" type="text" className="bg-black" defaultValue="name"/>
            </div>
            <div className="space-y-1">
              <Label htmlFor="username">USERNAME</Label>
              <Input id="username" type="text" className="bg-black" defaultValue="username"/>
            </div>
            <div className="space-y-1">
              <Label htmlFor="eamil">EMAIL</Label>
              <Input id="email" type="eamil" className="bg-black" defaultValue="email" />
            </div>
            <div className="space-y-1">
              <Label htmlFor="password">PASSWORD</Label>
              <Input id="password" type="password" className="bg-black" defaultValue="***************" />
            </div>
            <div className='flex justify-center space-y-1'>
                <div className='w-10 h-10 items-center justify-center flex text-white rounded-full hover:text-black hover:bg-white'>
                    <IoWalletOutline size={'30px'}/>
                </div>
            </div>
            <div className='flex space-y-1 items-center'>
                <Label htmlFor="referal">REFERAL CODE</Label>   
                <InputOTP maxLength={6} className="text-white">
                    <InputOTPGroup>
                        <InputOTPSlot index={0} />
                        <InputOTPSlot index={1} />
                        <InputOTPSlot index={2} />
                    </InputOTPGroup>
                    <InputOTPSeparator />
                    <InputOTPGroup>
                        <InputOTPSlot index={3} />
                        <InputOTPSlot index={4} />
                        <InputOTPSlot index={5} />
                    </InputOTPGroup>
                </InputOTP>

            </div>
          </CardContent>
          <CardFooter className="flex justify-center">
            <Button variant="outline">SUBMIT</Button>
          </CardFooter>
        </Card>
      </TabsContent>
    </Tabs> 

  )
}

export default LoginSignup