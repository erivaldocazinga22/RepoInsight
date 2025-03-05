"use client";
import React, { type ReactNode } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";

type ModalProps = {
  children: ReactNode;
  trigger: ReactNode;
  title?: string;
  description: string;
};

export const Modal = ({ title, trigger, description, children }: ModalProps) => {
	return (
		<Dialog>
			<DialogTrigger asChild>{trigger}</DialogTrigger>
			<DialogContent aria-describedby={!title ? "modal-description" : undefined}>
				{title && (
					<DialogHeader>
						<DialogTitle>{title}</DialogTitle>
						<DialogDescription id="modal-description">{description}</DialogDescription>
					</DialogHeader>
				)}
				{children}
			</DialogContent>
		</Dialog>
	);
};
