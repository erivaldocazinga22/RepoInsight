import { AccessLevelsChart } from "@/components/charts/accessLevelsChart";
import { LoginActivityChart } from "@/components/charts/loginActivityChart";
import { UsersGrowthChart } from "@/components/charts/usersGrowthChart";
import { UsersStatusChart } from "@/components/charts/usersStatusChart";
import { DataTable } from "@/components/dashboard/data-table";
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
import { CONTROLITEMS } from "@/statics/dashboard";
import { Plus } from "lucide-react";
import React from "react";

export default function Dashboard() {
    return (
        <div className="px-6 md:px-8 pb-6 space-y-6">
            <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {CONTROLITEMS.map((item) => (
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
                <DataTable data={[]} />
            </section>
        </div>
    );
}
