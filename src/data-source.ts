import { DataSource } from 'typeorm';
import * as dotenv from 'dotenv';
import { join } from 'path';
import { Dictionary } from './dictionary/dictionary.entity';
import { Record } from './record/record.entity';

dotenv.config();

const AppDataSource = new DataSource({
    type: 'postgres',
    host: process.env.POSTGRES_HOST,
    port: +process.env.POSTGRES_PORT,
    username: process.env.POSTGRES_USER,
    password: process.env.POSTGRES_PASSWORD,
    database: process.env.POSTGRES_DB,
    entities: [Dictionary, Record],
    migrations: [join(__dirname, 'migrations/*.{ts,js}')],
    synchronize: false,
    // logging: true
});

export default AppDataSource;
