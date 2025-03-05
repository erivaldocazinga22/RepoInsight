import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function calculatePasswordStrength(password: string): number {
	if (!password) return 0;

	let strength = 0;

	// Length check
	if (password.length >= 8) strength += 1;

	// Contains lowercase
	if (/[a-z]/.test(password)) strength += 1;

	// Contains uppercase
	if (/[A-Z]/.test(password)) strength += 1;

	// Contains number
	if (/[0-9]/.test(password)) strength += 1;

	// Contains special character
	if (/[^a-zA-Z0-9]/.test(password)) strength += 1;

	return strength;
}