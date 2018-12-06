import { User } from './user';

export class Billboard {
    constructor(
    public id: number,
    public title: string,
    public description: string,
    public suscribed: boolean,
    public suscribedUsers?: User[]
    ) { }
}