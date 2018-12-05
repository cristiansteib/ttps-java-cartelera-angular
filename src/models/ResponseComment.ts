import { User } from './user';

export class ResponseComment {
    constructor(
    public id: number,
    public creationDate: number,
    public answer: string,
    public owner: User
    ) { }
}