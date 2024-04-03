import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity()
export class User {
    @PrimaryGeneratedColumn('increment')
    idUser: number

    @Column('varchar', {length: 250})
    name: string

    @Column('varchar', {length: 250})
    email: string

    @Column('varchar', {length: 250})
    pass: string

    @CreateDateColumn({name: 'dataInc'})
    dataInc: Date

    @UpdateDateColumn({name: 'dataAtu'})
    dataAtu: Date
}