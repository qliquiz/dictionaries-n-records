import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Dictionary } from './dictionary.entity';
import { Repository } from 'typeorm';
import { DictionaryDTO } from './dictionary.dto';

@Injectable()
export class DictionaryService {
    constructor(
        @InjectRepository(Dictionary)
        private readonly dictionaryRepository: Repository<Dictionary>,
    ) {}

    async createDictionary(dto: DictionaryDTO): Promise<Dictionary | null> {
        const newDictionary = this.dictionaryRepository.create(dto);
        return await this.dictionaryRepository.save(newDictionary);
    }

    async getDictionaries(): Promise<Dictionary[]> {
        return await this.dictionaryRepository.find({ relations: ['records'] });
    }

    async getDictionary(id: number): Promise<Dictionary | null> {
        return await this.dictionaryRepository.findOne({
            where: {id: id},
            relations: ['records']
        });
    }

    async updateDictionary(id: number, dto: DictionaryDTO): Promise<Dictionary | null> {
        await this.dictionaryRepository.update({id: id}, dto);
        return await this.dictionaryRepository.save({id: id});
    }

    async deleteDictionary(id: number): Promise<void> {
        await this.dictionaryRepository.delete({id: id});
    }
}
