import { Person } from 'src/persons/entities/person.entity';
import { Column, CreateDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';

@Entity()
export class Contact {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ nullable: false })
  name: string;

  @Column()
  email: string;

  @Column()
  phone: string;

  @Column()
  whatsapp: string;
    
  @ManyToOne(() => Person, person => person.contacts)
  person: Person;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
