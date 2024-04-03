import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity('cultura')
export class Cultura{
    @PrimaryGeneratedColumn('increment')
    idCultura: number;

    @Column('varchar')
    descCultura: string;

    @Column('integer')
    vlrIdeal: number;

    @Column('integer')
    vlrAlta: number;

    @Column('integer')
    vlrBaixa: number;

    @CreateDateColumn({name: 'dataInc'})
    dataInc: Date;

    @UpdateDateColumn({name: 'dataAtu'})
    dataAtu: Date;
}