import { Field, InputType } from "@nestjs/graphql";

@InputType()
export class DictionaryDTO {
    @Field()
    readonly name: string;
}
