import { Field, ObjectType } from "@nestjs/graphql";
import { Record } from "src/record/record.entity";
import { Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
@ObjectType()
export class Dictionary {
    @PrimaryGeneratedColumn()
    @Field()
    id: number;

    @Column({ type: 'varchar', length: 30, nullable: false })
    @Field()
    name: string;

    @CreateDateColumn()
    @Field()
    createdAt: Date;

    @OneToMany(() => Record, (record) => record.dictionary)
    @Field(() => [Record])
    records: Record[];
}