import { z } from "zod"


export const SignupValidation = z.object({
    username: z.string().min(2, {
        message: "Username must be at least 2 characters.",
    }),
    Name:z.string().min(2,{message:"Two Short"}),
    Email:z.string().email(),
    Password:z.string().min(8 ,{message:"Two short"}).max(13, {message:"Two long"}),
})