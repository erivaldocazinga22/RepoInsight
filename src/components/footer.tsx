import Link from "next/link";
import React from "react";

export const Footer = () => {
	return (
		<div className="border-t border-dashed border-border/40 py-4 text-center text-sm ">
			<p>
				&copy; {new Date().getFullYear()} 💚{" "}
				<Link href="https://www.instagram.com/eclipsesolutions.ao" target="_blank" rel="noreferrer" className="text-purple-300 hover:text-purple-500">
					Eclipse Solutions
				</Link>
				. Todos os direitos reservados.
			</p>
		</div>
	);
};
