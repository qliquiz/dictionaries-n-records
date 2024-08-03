import { Module } from '@nestjs/common';
import { RecordService } from './record.service';
import { RecordResolver } from './record.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Dictionary } from 'src/dictionary/dictionary.entity';
import { Record } from './record.entity';
import { DictionaryService } from 'src/dictionary/dictionary.service';

@Module({
  imports: [TypeOrmModule.forFeature([Dictionary, Record])],
  providers: [RecordService, RecordResolver, DictionaryService],
})
export class RecordModule {}
