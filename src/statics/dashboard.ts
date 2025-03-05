import { Info, Lock, Trash2, UserCheck2, UserPlus2, UserRoundX, Users2 } from "lucide-react";
import { v4 as uuidV4 } from "uuid";

export const CONTROLITEMS = [
    {
        id: uuidV4(),
        icon: UserPlus2,
        title: "Novos usuários",
        value: 3
    },
    {
        id: uuidV4(),
        icon: UserCheck2,
        title: "Usuários Activos",
        value: 18
    },
    {
        id: uuidV4(),
        icon: UserRoundX,
        title: "Usuários Inactivos",
        value: 2
    },
    {
        id: uuidV4(),
        icon: Users2,
        title: "Total de usuários",
        value: 20
    },
];

export const DROPDOWN_USER_TABLE = [
    {
        id: uuidV4(),
        label: "Apagar",
        icon: Trash2,
    },
    {
        id: uuidV4(),
        label: "Bloquear",
        icon: Lock,
    },
    {
        id: uuidV4(),
        label: "Ver Detalhes",
        icon: Info,
    },
]