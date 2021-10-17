import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeOrmConfig } from './configs/typeorm.config';
import { ContactsModule } from './contacts/contacts.module';
import { PersonsModule } from './persons/persons.module';

@Module({
  imports: [TypeOrmModule.forRoot(typeOrmConfig), ContactsModule, PersonsModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
