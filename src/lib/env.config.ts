import { z } from "zod";

const envSchema = z.object({
    DATABASE_URL: z.string().url(),
    OLLAMA_API: z.string().url(),
    GITHUB_CLIENT_ID: z.string(), // numeros e letras
    GITHUB_CLIENT_SECRET: z.string(), // numeros e letras
    NEXTAUTH_SECRET: z.string(), // numeros e letras
    NEXTAUTH_URL: z.string().url()
});

export const env = envSchema.parse(process.env);