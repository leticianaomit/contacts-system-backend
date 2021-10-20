import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreatePersonDto } from './dto/create-person.dto';
import { UpdatePersonDto } from './dto/update-person.dto';
import { PersonRepository } from './repositories/person.repository';

@Injectable()
export class PersonsService {
  constructor(
    @InjectRepository(PersonRepository)
    private personRepository: PersonRepository,
  ) {}

  async create(createPersonDto: CreatePersonDto) {
    const contact = this.personRepository.create(createPersonDto);
    if (!contact.name)
      throw new BadRequestException("Field 'name' is required");

    try {
      await this.personRepository.save(contact);
    } catch (error) {
      throw new BadRequestException('Could not insert person');
    }
  }

  async findAll() {
    return await this.personRepository.find();
  }

  async findOne(id: string) {
    const person = await this.personRepository.findOne(id);
    if (!person) {
      throw new BadRequestException('Person not found');
    }

    return person;
  }

  async update(id: string, updatePersonDto: UpdatePersonDto) {
    try {
      await this.personRepository.update({ id }, updatePersonDto);
    } catch (error) {
      throw new BadRequestException('Could not update person');
    }
  }

  async remove(id: string) {
    const result = await this.personRepository.delete({ id });
    if (!result.affected) {
      throw new BadRequestException('Could not delete person');
    }
  }
}
