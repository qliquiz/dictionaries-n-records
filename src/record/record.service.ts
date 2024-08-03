import { Injectable, NotFoundException } from '@nestjs/common';
import { Record } from './record.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { RecordDTO } from './record.dto';
import { DictionaryService } from 'src/dictionary/dictionary.service';

@Injectable()
export class RecordService {
    constructor(
        private dictionaryService: DictionaryService,
        @InjectRepository(Record)
        private readonly recordRepository: Repository<Record>
    ) {}

    async createRecord(dto: RecordDTO, dictionary_id: number): Promise<Record | null> {
        const dictionary = await this.dictionaryService.getDictionary(dictionary_id);
        const newRecord = this.recordRepository.create({
            ...dto,
            dictionary
        });
        return await this.recordRepository.save(newRecord);
    }
    
    async getRecords(dictionary_id: number): Promise<Record[]> {
        const dictionary = this.dictionaryService.getDictionary(dictionary_id);
        if (!dictionary) throw new NotFoundException('Словарь не найден');
        return await this.recordRepository.find({ where: { dictionary: { id: dictionary_id } } });
    }
    
    async getRecord(record_id: number): Promise<Record | null> {
        const record = await this.recordRepository.findOne({ where: {id: record_id } });
        if (!record) throw new NotFoundException('Запись не найдена');
        return record;
    }
    
    async updateRecord(dto: RecordDTO, record_id: number): Promise<Record | null> {
        const record = await this.recordRepository.findOneBy({ id: record_id });
        if (!record) throw new NotFoundException('Запись не найдена');
        await this.recordRepository.update({ id: record_id }, dto);
        return await this.recordRepository.save({ id: record_id });
    }
    
    async deleteRecord(record_id: number): Promise<void> {
        const record = await this.recordRepository.findOneBy({ id: record_id });
        if (!record) throw new NotFoundException('Запись не найдена');
        await this.recordRepository.remove(record);
    }
}
