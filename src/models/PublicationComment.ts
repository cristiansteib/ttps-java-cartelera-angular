import { ResponseComment } from './ResponseComment';
import { User } from './user';

export class PublicationComment {
    constructor(
    public text: string,
    public id?: number,
    public user?: User ,
    public responseComments?: ResponseComment[]
    ) { }
}