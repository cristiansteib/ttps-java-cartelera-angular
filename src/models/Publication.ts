import {PublicationComment} from './PublicationComment';

export class Publication {
    constructor(
    public id?: number,
    public content?: string,
    public allowComments?: boolean,
    public creationDate?: string,
    public description?: string,
    public publishDate?: number,
    public date?: number,
    public hour?: number,
    public title?: string,
    public ownerId?: number,
    public canEdit?: boolean,
    public countComments?: number,
    ) { }
}
