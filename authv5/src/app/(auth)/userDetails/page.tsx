"use client"
import React from 'react'
import * as z from 'zod'
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage, useFormField } from '@/components/ui/form'
import { signupschema } from '@/schemas/form'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { Input } from '@/components/ui/input'


const page = () => {
    const form = useForm<z.infer<typeof signupschema>>({
        resolver: zodResolver(signupschema),
        defaultValues: {
            username: "",
            email: "",
            password: ""
        }
    });
    return (
        <div className='flex justify-center mx-auto items-center h-fit bg-gray-800 shadow-2xl w-[50%]  rounded-xl mt-4 mb-4 p-4 text-white'>
            <Form {...form}>
                <form onSubmit={form.handleSubmit(() => { })} className='space-y-6'>
                    <div className="space-y-4">
                        <FormField control={form.control}
                            name='email'
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Email</FormLabel>
                                    <FormControl>
                                        <Input placeholder='abc@gmail.com' className='text-black' {...field} />
                                    </FormControl>

                                    <FormMessage className='text-red-500' />
                                </FormItem>

                            )}
                        />
                        <FormField control={form.control}
                            name='email'
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Email</FormLabel>
                                    <FormControl>
                                        <Input type='email' placeholder='abc@gmail.com' className='text-black' {...field} />
                                    </FormControl>
                                </FormItem>

                            )}
                        />
                    </div>

                </form>

            </Form>
        </div>
    )
}

export default page
