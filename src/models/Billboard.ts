import { User } from './user';

export class Billboard {
    constructor(
    public title: string,
    public description: string,
    public id?: number,
    public suscribed?: boolean,
    public suscribedUsers?: User[]
    ) { }
}