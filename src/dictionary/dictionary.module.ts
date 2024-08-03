import { Module } from '@nestjs/common';
import { DictionaryService } from './dictionary.service';
import { DictionaryResolver } from './dictionary.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Dictionary } from './dictionary.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Dictionary])],
  providers: [DictionaryService, DictionaryResolver],
  exports: [DictionaryService]
})
export class DictionaryModule {}
