
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Link } from "react-router-dom"
import { Button } from "@/components/ui/button"
import { SignupValidation } from "@/lib/validation"
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"

import React from 'react'
import Loader from "@/components/shared/Loader"



const SignupForm = () => {
    const isLoading = false;

    // 1. Define your form.
    const form = useForm<z.infer<typeof SignupValidation>>({
        resolver: zodResolver(SignupValidation),
        defaultValues: {
            username: "",
            Password: "",
            
        },
    })

    // 2. Define a submit handler.
    function onSubmit(values: z.infer<typeof SignupValidation>) {
        // Do something with the form values.
        // ✅ This will be type-safe and validated.
        console.log(values)
    }
    return (

        <>
            <div className="bg-white center h-full w-1/2  rounded_border text-black rb">
                <div className=" flex items-center mb-2">
                    <img
                        src="/asset/icon/home_icon.png"
                        alt="home logo"
                        className="center size-11 "
                    />
                    <h1>Learning</h1>
                    
                </div>
                <div className="mb-5 font-semibold">
                        <h1>LOGIN TO YOUR ACCOUNT</h1>
                    </div>

                <Form   {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5 w-search_bar">
                        <FormField
                            control={form.control}
                            name="username"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel className="">Username</FormLabel>
                                    <FormControl>
                                        <Input className="input_css" placeholder="User Name" {...field} />
                                    </FormControl>
                                    <FormMessage className="text-red-600" />
                                </FormItem>
                            )}
                        />

                       

                        <FormField
                            control={form.control}
                            name="Password"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Password</FormLabel>
                                    <FormControl>
                                        <Input type="password" className="input_css" placeholder="Your password" {...field} />
                                    </FormControl>
                                    <FormMessage className="text-red-600" />
                                </FormItem>
                            )}
                        />
                        <div className="center bg-white border border-black rounded-md mt-7">

                            <Button className="w-full" type="submit">
                                {isLoading ? (
                                    <div className="flex-center gap-2">
                                        <Loader /> Loading...
                                    </div>
                                ) : (
                                    "Sign In"
                                )}

                            </Button>
                        </div>
                    </form>
                </Form>
                <div className="flex text-style">
                    <p>Don't have an account? </p>
                    
                    
                    <Link to={'/sign-up'}>
                    <div className="text-style text-p-1">Sign Up</div>
                    </Link>
                    
                </div>
            </div>
        </>
    )
}

export default SignupForm