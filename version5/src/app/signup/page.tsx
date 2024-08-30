"use client"
import React, { useState } from 'react'
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
import { Button } from "@/components/ui/button"
import Link from 'next/link'
import axios from 'axios'
const page = () => {

    const [formdata, setformdata] = useState({
        username: "",
        email: "",
        password: ""
    })
    const [loading, setloading] = useState(false)
    const [error, seterror] = useState("")
    const [success, setsuccess] = useState("")
    const handleclick = async (e: any) => {
        seterror("");
        setloading(true);
        e.preventDefault();
        if (!formdata.username || !formdata.email || !formdata.password) {
            seterror("please fill al fields")
            setloading(false);
        }
        try {
            const response = await axios.post('/api/signup', formdata)
            console.log(response)
            setloading(false)
            setsuccess("user registered successfully")
        } catch (error) {
            setloading(false)
            console.log(error);
            seterror((error as Error).message)
        }
    }


    return (
        <div className='flex justify-center items-center h-screen'>
            <Card className="w-[350px]">
                <CardHeader>
                    <CardTitle>Signup</CardTitle>
                    <CardDescription>Create your account now.</CardDescription>
                </CardHeader>
                <CardContent>
                    <form>
                        <div className="grid w-full items-center gap-4">
                            <div className="flex flex-col space-y-1.5">
                                <Label htmlFor="name">Username</Label>
                                <Input readOnly={loading} type='text' name='username' value={formdata.username} onChange={(e) => setformdata({ ...formdata, username: e.target.value })} id="name" placeholder="enter your username" />
                            </div>
                            <div className="flex flex-col space-y-1.5">
                                <Label htmlFor="name">email</Label>
                                <Input readOnly={loading} type='email' id="name" name='username' value={formdata.email} onChange={(e) => setformdata({ ...formdata, email: e.target.value })} placeholder="enter your emailid" />
                            </div>
                            <div className="flex flex-col space-y-1.5">
                                <Label htmlFor="framework">Password</Label>
                                <Input readOnly={loading} type='password' id="name" name='username' value={formdata.password} onChange={(e) => setformdata({ ...formdata, password: e.target.value })} placeholder="enter your password" />

                            </div>
                        </div>
                    </form>
                    <p>Have an account ? <Link className='text-blue-500' href={'login'} >click here</Link> </p>
                </CardContent>
                <CardFooter className="flex flex-col justify-center">
                    <div>
                        <p className='text-red-500'> {error ? error : ""} </p>
                        <p className='text-green-500'> {success ? success : ""} </p>
                    </div>

                    <Button disabled={loading} onClick={handleclick}>{loading ? "Please wait..." : "Signup"}</Button>
                </CardFooter>
            </Card>
        </div>
    )
}

export default page
