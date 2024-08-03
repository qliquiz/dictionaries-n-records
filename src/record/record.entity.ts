import { Field, ObjectType } from "@nestjs/graphql";
import { Dictionary } from "src/dictionary/dictionary.entity";
import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@ObjectType()
@Entity()
export class Record {
    @PrimaryGeneratedColumn()
    @Field()
    id: number;

    @Column({ type: 'varchar', length: 30, nullable: false })
    @Field()
    name: string;

    @Column({ type: 'varchar', length: 300, nullable: true })
    @Field()
    value: string;

    @Column({ type: 'varchar', length: 7, nullable: true, default: '#ff0000' })
    @Field()
    color: string;

    @CreateDateColumn()
    @Field()
    createdAt: Date;

    @ManyToOne(() => Dictionary, (dictionary) => dictionary.records, { cascade: true, onDelete: 'CASCADE', onUpdate: 'CASCADE' })
    @Field(() => Dictionary)
    dictionary: Dictionary;
}