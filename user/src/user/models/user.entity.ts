import { Entity, Column, PrimaryColumn } from "typeorm";

@Entity()
export default class User {
    constructor() {
        this.uuid = '';
        this.firstName = '';
        this.lastName = '';
        this.emailAdress = '';
        this.gitlabInfo = '';
    }

    @PrimaryColumn({
        length: 150
    })
    uuid!: string;

    @Column("text")
    firstName!: string;
    
    @Column("text")
    lastName?: string;

    @Column("text")
    emailAdress!: string;

    @Column("text")
    gitlabInfo?: string;
}