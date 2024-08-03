import { Args, Int, Mutation, Query, Resolver } from '@nestjs/graphql';
import { Dictionary } from './dictionary.entity';
import { DictionaryService } from './dictionary.service';
import { DictionaryDTO } from './dictionary.dto';

@Resolver(() => Dictionary)
export class DictionaryResolver {
    constructor(private readonly dictionaryService: DictionaryService) {}

    @Mutation(() => Dictionary)
    async createDictionary(@Args('dictionaryDTO') dictionaryDTO: DictionaryDTO): Promise<Dictionary | null> {
        return await this.dictionaryService.createDictionary(dictionaryDTO);
    }

    @Query(() => [Dictionary], { name: 'dictionaries' })
    async getDictionaries(): Promise<Dictionary[]> {
        return await this.dictionaryService.getDictionaries();
    }

    @Query(() => Dictionary, { name: 'dictionary' })
    async getDictionary(@Args('id', { type: () => Int }) id: number): Promise<Dictionary | null> {
        return await this.dictionaryService.getDictionary(id);
    }

    @Mutation(() => Dictionary)
    async updateDictionary(@Args('id', { type: () => Int }) id: number, @Args('dictionaryDTO') dictionaryDTO: DictionaryDTO): Promise<Dictionary | null> {
        return await this.dictionaryService.updateDictionary(id, dictionaryDTO);
    }

    @Mutation(() => Dictionary)
    async deleteDictionary(@Args('id', { type: () => Int }) id: number): Promise<void> {
        return await this.dictionaryService.deleteDictionary(id);
    }
}
