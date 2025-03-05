import { z } from "zod";
/* import type { HttpResponse } from "./httpResponses";
import type { User } from "./user.model"; */

export const signInSchema = z.object({
	email: z.string().email("Por favor, insira um endereço de email válido."),
	password: z.string().min(6, "A senha deve conter pelo menos 6 caracteres."),
});

export const signUpSchema = z.object({
    name: z.string().min(3, "Por favor, insira um nome válido."),
	email: z.string().email("Por favor, insira um endereço de email válido."),
	password: z.string().min(6, "A senha deve conter pelo menos 6 caracteres."),
    confirmPassword: z.string().min(6, "A senha deve conter pelo menos 6 caracteres."),
    company: z.string().min(3, "Por favor, insira uma empresa válido."),
});


export type SignInRequest = z.infer<typeof signInSchema>;
export type SignUpRequest = z.infer<typeof signUpSchema>;
/* export type SignInResponse = HttpResponse<{ token: string; refreshToken: string }>;
export type SessionResponse = HttpResponse<User>;
 */