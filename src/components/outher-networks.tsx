"use client";
import type React from "react";
import { Separator } from "./ui/separator";
import { Button } from "./ui/button";
import { Loader2 } from "lucide-react";
import type { IOutherNetwork } from "@/statics/auth";

type OutherNetworksProps = {
	isLoading?: boolean;
	networks: IOutherNetwork[];
};

export const OutherNetworks = ({ isLoading = false, networks }: OutherNetworksProps) => {
	return (
		<div>
			<div className="relative my-6">
				<Separator />
				<div className="absolute inset-0 flex items-center justify-center">
					<span className="bg-card px-2 text-xs text-muted-foreground">OU CONTINUE COM</span>
				</div>
			</div>
			{networks.map(({ icon: Icon, ...network }) => (
				<Button type="button" variant="outline" key={network.id} className="w-full" onClick={network.action}>
					{isLoading ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : <Icon className="mr-2 h-4 w-4" />}
					{network.label}
				</Button>
			))}
		</div>
	);
};
