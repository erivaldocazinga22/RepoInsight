"use client"
import { AccessLevelsChart } from "@/components/charts/accessLevelsChart";
import { LoginActivityChart } from "@/components/charts/loginActivityChart";
import { UsersGrowthChart } from "@/components/charts/usersGrowthChart";
import { UsersStatusChart } from "@/components/charts/usersStatusChart";
import { Modal } from "@/components/modal";
import { Button } from "@/components/ui/button";
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import { MoreVertical, Plus, UserCheck2, UserPlus2, UserRoundX, Users2 } from "lucide-react";
import { randomUUID } from "node:crypto";
import React from "react";

const ControlItems = [
    {
        id: randomUUID({ disableEntropyCache: false }),
        icon: UserPlus2,
        title: "Novos usuários",
        value: 3
    },
    {
        id: randomUUID({ disableEntropyCache: false }),
        icon: UserCheck2,
        title: "Usuários Activos",
        value: 18
    },
    {
        id: randomUUID({ disableEntropyCache: false }),
        icon: UserRoundX,
        title: "Usuários Inactivos",
        value: 2
    },
    {
        id: randomUUID({ disableEntropyCache: false }),
        icon: Users2,
        title: "Total de usuários",
        value: 20
    },
];

export default function Dashboard() {
    return (
        <div className="px-6 md:px-8 pb-6 space-y-6">
            <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {ControlItems.map((item) => (
                    <div key={item.id} className="h-24 p-4 flex items-center gap-4 rounded-lg bg-neutral-900 border border-neutral-800 shadow-md">
                        <div className="w-12 h-12 flex items-center justify-center rounded-full bg-neutral-700 text-neutral-300">
                            <item.icon size={24} />
                        </div>
                        <div>
                            <span className="text-sm text-neutral-400">{item.title}</span>
                            <span className="block text-xl font-bold text-neutral-100">{item.value}</span>
                        </div>
                    </div>
                ))}
            </section>
            <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="min-h-60 flex-1 p-6 flex flex-col gap-4 rounded-lg bg-neutral-900 border border-neutral-800 shadow-md">
                    <h1 className="text-lg font-semibold text-neutral-200">Atividade de Login</h1>
                    <LoginActivityChart />
                </div>
                <div className="min-h-60 flex-1 p-6 flex flex-col rounded-lg bg-neutral-900 border border-neutral-800 shadow-md">
                    <div className="flex items-center justify-between">
                        <h1 className="text-lg font-semibold text-neutral-200">Acessos na aplicação</h1>
                        <Select>
                            <SelectTrigger className="w-36">
                                <SelectValue placeholder="Seleciona o mês" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectGroup>
                                    <SelectItem value="january">Janeiro</SelectItem>
                                    <SelectItem value="february">Fevereiro</SelectItem>
                                    <SelectItem value="march">Março</SelectItem>
                                    <SelectItem value="april">Abril</SelectItem>
                                    <SelectItem value="may">Maio</SelectItem>
                                    <SelectItem value="june">Junho</SelectItem>
                                    <SelectItem value="july">Julho</SelectItem>
                                    <SelectItem value="august">Agosto</SelectItem>
                                    <SelectItem value="september">Setembro</SelectItem>
                                    <SelectItem value="october">Outubro</SelectItem>
                                    <SelectItem value="november">Novembro</SelectItem>
                                    <SelectItem value="december">Dezembro</SelectItem>
                                </SelectGroup>
                            </SelectContent>
                        </Select>
                    </div>
                    <div className="flex-1 flex items-center justify-center text-neutral-400">Gráfico de andamento de projetos</div>
                </div>
            </section>
            <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="min-h-56 px-6 py-4 flex flex-col gap-2 items-center justify-center rounded-lg bg-neutral-900 border border-neutral-800 shadow-md">
                    <h2 className="text-neutral-200">Crescimento de Usuários</h2>
                    <UsersGrowthChart />
                </div>
                <div className="min-h-56 px-6 py-4 flex flex-col gap-2 items-center justify-center rounded-lg bg-neutral-900 border border-neutral-800 shadow-md">
                    <h2 className="text-neutral-200">Status dos Usuários</h2>
                    <UsersStatusChart />
                </div>
                <div className="min-h-56 px-6 py-4 flex flex-col gap-2 items-center justify-center rounded-lg bg-neutral-900 border border-neutral-800 shadow-md">
                    <h2 className="text-neutral-200">Níveis de Acesso</h2>
                    <AccessLevelsChart />
                </div>
            </section>
            <section className="min-h-80 p-6 rounded-lg bg-neutral-900 border border-neutral-800 shadow-md">
                <div className="flex items-center justify-between">
                    <h1 className="text-lg font-semibold text-neutral-200">Lista de usuários</h1>
                    <Modal trigger={(
                        <Button type="button" variant="outline">
                            <Plus />
                            Adicionar usuário
                        </Button>
                    )} description="Criar novo user" title="Cadastro de novos usuários">
                        <div>
                            Form add Users
                        </div>
                    </Modal>
                </div>
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
                                <Button type="button" variant="outline">
                                    <MoreVertical />
                                </Button>
                            </TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </section>
        </div>
    );
}
