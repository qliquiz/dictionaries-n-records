import { Args, Int, Mutation, Query, Resolver } from '@nestjs/graphql';
import { Record } from './record.entity';
import { RecordService } from './record.service';
import { RecordDTO } from './record.dto';

@Resolver(() => Record)
export class RecordResolver {
    constructor(private readonly recordService: RecordService) {}

    @Mutation(() => Record)
    async createRecord(@Args('recordDTO') recordDTO: RecordDTO, @Args('dictionary_id') dictionary_id: number): Promise<Record> {
        return await this.recordService.createRecord(recordDTO, dictionary_id);
    }

    @Query(() => [Record], { name: 'records' })
    async getRecords(@Args('id', { type: () => Int }) id: number): Promise<Record[]> {
        return await this.recordService.getRecords(id);
    }

    @Query(() => Record, { name: 'record' })
    async getRecord(@Args('id', { type: () => Int }) id: number): Promise<Record> {
        return await this.recordService.getRecord(id);
    }

    @Mutation(() => Record)
    async updateRecord(@Args('recordDTO') recordDTO: RecordDTO, @Args('id', { type: () => Int }) id: number): Promise<Record> {
        return await this.recordService.updateRecord(recordDTO, id);
    }

    @Mutation(() => Record)
    async deleteRecord(@Args('id', { type: () => Int }) id: number): Promise<void> {
        return await this.recordService.deleteRecord(id);
    }
}
