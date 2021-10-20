import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeOrmConfig } from './configs/typeorm.config';
import { ContactsController } from './contacts/contacts.controller';
import { ContactsService } from './contacts/contacts.service';
import { ContactRepository } from './contacts/repositories/contact.repository';
import { PersonsController } from './persons/persons.controller';
import { PersonsService } from './persons/persons.service';
import { PersonRepository } from './persons/repositories/person.repository';

@Module({
  imports: [
    TypeOrmModule.forRoot(typeOrmConfig),
    TypeOrmModule.forFeature([ContactRepository]),
    TypeOrmModule.forFeature([PersonRepository]),
  ],
  controllers: [ContactsController, PersonsController],
  providers: [ContactsService, PersonsService],
})
export class AppModule {}
