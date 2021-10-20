import { TypeOrmModuleOptions } from '@nestjs/typeorm';

require('dotenv').config();

export const typeOrmConfig: TypeOrmModuleOptions = {
  type: process.env.DATABASE_TYPE as any,
  host: process.env.DATABASE_HOST,
  port: process.env.DATABASE_PORT as any,
  username: process.env.DATABASE_USERNAME,
  password: process.env.DATABASE_PASSWORD,
  database: process.env.DATABASE_NAME,
  entities: [__dirname + '/../**/*.entity.{js,ts}'],
  synchronize: true,
};
