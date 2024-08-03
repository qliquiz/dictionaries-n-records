import { Field, InputType, Int } from "@nestjs/graphql";

@InputType()
export class RecordDTO {
    @Field()
    readonly name: string;
    @Field({ nullable: true })
    readonly value: string;
    @Field({ nullable: true })
    readonly color: string;
}
