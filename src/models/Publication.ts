export class Publication {
    constructor(
    public id: number,
    public allowComments: boolean,
    public creationDate: string,
    public description: string,
    public title: string,
    public ownerId: number,
    public canEdit: boolean,
    public count_comments: number
    ) { }
}