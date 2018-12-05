import { ResponseComment } from './ResponseComment';
import { User } from './user';

export class PublicationComment {
    constructor(
    public id: number,
    public user: User ,
    public responseComments?: ResponseComment[]
    ) { }
}