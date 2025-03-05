import React from "react";
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import { MoreVertical } from "lucide-react";
import { Button } from "../ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem, DropdownMenuTrigger } from "../ui/dropdown-menu";
import { DROPDOWN_USER_TABLE } from "@/statics/dashboard";

type DataTableProps = {
    data: any[]
}

export const DataTable = ({ data }: DataTableProps) => {
    return (
        <Table>
            <TableCaption className="text-neutral-400">Lista de usuários recentes</TableCaption>
            <TableHeader>
                <TableRow>
                    <TableHead className="w-[100px] text-neutral-200">Id</TableHead>
                    <TableHead className="text-neutral-200">Nome</TableHead>
                    <TableHead className="text-neutral-200">Email</TableHead>
                    <TableHead className="text-neutral-200">Status</TableHead>
                    <TableHead className="text-neutral-200">Plano</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                <TableRow>
                    <TableCell className="font-medium text-neutral-100">INV001</TableCell>
                    <TableCell className="text-neutral-300">Erivaldo Malebo</TableCell>
                    <TableCell className="text-neutral-300">erivaldomalebo2206@gmail.com</TableCell>
                    <TableCell className="text-green-400">Active</TableCell>
                    <TableCell className="text-neutral-300">FREE</TableCell>
                    <TableCell>
                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <Button type="button" variant="outline" className="p-0 w-8 h-8">
                                    <MoreVertical />
                                </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent className="w-44">
                                {DROPDOWN_USER_TABLE.map(item => (
                                    <DropdownMenuItem key={item.id} className="flex items-center cursor-pointer text-neutral-500">
                                        <item.icon className="mr-2 h-4 w-4" strokeWidth={1.5} />
                                        <span>{item.label}</span>
                                    </DropdownMenuItem>
                                ))}
                            </DropdownMenuContent>
                        </DropdownMenu>
                    </TableCell>
                </TableRow>
            </TableBody>
        </Table>
    )
}