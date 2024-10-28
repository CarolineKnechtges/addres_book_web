// src/types.ts
export interface Contact {
    id?: number;// ID 字段可选，因为在创建时不需要提供
    name: string;
    email: string;
    tel : string;
}
