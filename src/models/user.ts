export class User {
    constructor(
    public id: number,
    public username: string,
    public isAdmin?: boolean,
    public name?: string,
    public lastName?: string,
    public password?: string,
    public notification?: number
    ) { }
}