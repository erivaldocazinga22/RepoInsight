"use client"
import React, { type ReactNode } from "react";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "./ui/dialog";

type ModalProps = {
	children: ReactNode;
    trigger: string | ReactNode;
    title?: string;
    description: string;
};

export const Modal = ({ title, trigger, description, children }: ModalProps) => {
	return (
		<div>
			<Dialog>
				<DialogTrigger asChild={typeof trigger === "string"}>
                    {trigger }
                </DialogTrigger>
				<DialogContent>
					<DialogHeader>
						<DialogTitle>{title}</DialogTitle>
						<DialogDescription>{description}</DialogDescription>
					</DialogHeader>
					{children}
				</DialogContent>
			</Dialog>
		</div>
	);
};
