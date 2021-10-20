import { Person } from 'src/persons/entities/person.entity';
import {
  Column,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Contact {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ nullable: false })
  name: string;

  @Column({ default: null })
  email: string;

  @Column({ default: null })
  phone: string;

  @Column({ default: null })
  whatsapp: string;

  @ManyToOne(() => Person, (person) => person.contacts, { onDelete: 'CASCADE' })
  person: Person;
}
