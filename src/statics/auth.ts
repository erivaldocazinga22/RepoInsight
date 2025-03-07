"use client"
import { Github } from "lucide-react";
import { signIn } from "next-auth/react";
import type { ElementType } from "react";
import { v4 as uuidV4 } from "uuid";
export interface IOutherNetwork {
	id: string;
	label: string;
	icon: ElementType;
	action: () => void;
}

const handleGithubSignIn = async () => {
	signIn("github", { redirect: true, callbackUrl: "/dashboard" });
};

export const OUTHER_NETWORKS: IOutherNetwork[] = [
	{
		id: uuidV4(),
		label: "Github",
		icon: Github,
		action: handleGithubSignIn,
	},
];
