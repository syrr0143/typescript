import * as z from 'zod'

export const signupschema = z.object({
    username: z.string().min(2).max(25),
    password: z.string(),
    email: z.string().email({
        message: 'Invalid email address'
    })
})