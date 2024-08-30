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
import { FaGoogle, FaInstagram, FaGithub, FaEye, FaEyeSlash } from 'react-icons/fa';
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import Link from 'next/link'
import axios from 'axios';
import { useRouter } from 'next/navigation';
const page = () => {
    const [formdata, setFormdata] = useState({
        email: '',
        password: ''
    })
    const [loading, setloading] = useState(false)
    const [error, seterror] = useState("")
    const [success, setsuccess] = useState("")
    const [isPasswordVisible, setPasswordVisible] = useState(false);

    const handleToggleVisibility = () => {
        setPasswordVisible(!isPasswordVisible);
    };
    const router = useRouter();
    const handlesubmit = async (e: any) => {
        console.log(formdata)
        e.preventDefault();
        seterror("");
        setsuccess("");
        setloading(true)

        try {
            console.log(formdata)
            const response = await axios.post('/api/login',
                formdata);
            console.log(response)
            if (response.data.success === "false") {
                seterror(response.data.message);
                setloading(false);

            }
            localStorage.setItem("token", response.data.token)
            setsuccess("Login success");
            setloading(false);
            router.push('/dashboard');

        } catch (error) {
            console.log('error while login', error)
            seterror((error as Error).message)
            setloading(false)

        }
    }
    return (
        <div className='flex justify-center items-center h-screen'>
            <Card className="w-[350px]">
                <CardHeader>
                    <CardTitle>Login</CardTitle>
                    <CardDescription>Enter you credentials to login now.</CardDescription>
                </CardHeader>
                <CardContent>
                    <form onSubmit={handlesubmit}>
                        <div className="grid w-full items-center gap-4">
                            <div className="flex flex-col space-y-1.5">
                                <Label htmlFor="name">email</Label>
                                <Input
                                    type="email"
                                    value={formdata.email}
                                    onChange={(e) => setFormdata({ ...formdata, email: e.target.value })}
                                    id="name"
                                    placeholder="Enter your email ID"
                                />

                            </div>
                            <div className="flex flex-col space-y-1.5">
                                <Label htmlFor="framework">Password</Label>
                                <Input
                                    type={isPasswordVisible ? 'text' : 'password'}
                                    value={formdata.password}
                                    onChange={(e) => setFormdata({ ...formdata, password: e.target.value })}
                                    id="name"
                                    placeholder="Enter your email ID"

                                />
                                <p className='relative left-64 bottom-8'
                                    onClick={handleToggleVisibility}
                                    style={{
                                        border: 'none',
                                        background: 'transparent',
                                        cursor: 'pointer',
                                    }}
                                >
                                    {isPasswordVisible ? <FaEye /> : <FaEyeSlash />}
                                </p>



                            </div>
                        </div>
                        <div>
                            <p className='text-red-500'> {error ? error : ""} </p>
                            <p className='text-green-500'> {success ? success : ""} </p>
                        </div>
                        <div className='mt-4 mb-4 flex justify-center'>
                            <Button type='submit' disabled={loading} >{loading ? "Please wait ..." : "Login"}</Button>
                        </div>

                    </form>
                    <p>Don't have an account ? <Link className='text-blue-500' href={'signup'} >click here</Link> </p>
                </CardContent>
                <div className='flex justify-center gap-2 mb-4 ' >
                    <FaGoogle className='cursor-pointer hover:scale-125 hover:bg-slate-400 rounded-lg' size={20} />
                    <FaGithub className='cursor-pointer hover:scale-125 hover:bg-slate-400 rounded-lg' size={20} />
                    <FaInstagram className='cursor-pointer hover:scale-125 hover:bg-slate-400 rounded-lg' size={20} />
                </div>
            </Card>
        </div>
    )
}

export default page
