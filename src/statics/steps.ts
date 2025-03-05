import { v4 as uuidV4 } from "uuid";

export type ISignUpMultiFormSteps = {
	id: string; 
    name: string;
	fields: string[]
}

export const SIGNUP_STEPS: ISignUpMultiFormSteps[] = [
	{ id: uuidV4(), name: "Cadastre-se", fields: [] },
	{ id: uuidV4(), name: "Informações Pessoais", fields: ["name", "email"] },
	{ id: uuidV4(), name: "Segurança", fields: ["password", "confirmPassword"] },
	{ id: uuidV4(), name: "Empresa", fields: ["company"] },
	{ id: uuidV4(), name: "Conclusão", fields: [] },
];
