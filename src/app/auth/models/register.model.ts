import { Role } from "src/app/admin/roles/model/role.model";

export interface Register{
    firstName: string,
    lastName: string,
    username: string,
    password: string,
    roles: Role[
        
    ] 
}