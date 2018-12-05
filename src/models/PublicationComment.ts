import { ResponseComment } from './ResponseComment';

export class PublicationComment {
    constructor(
    public id: number,
    public responseComments?: ResponseComment[]
    ) { }
}