import { Column, Entity, JoinTable, ManyToMany, PrimaryGeneratedColumn } from "typeorm"
import { TagEntity } from "./tag.entity"

@Entity({ name: 'courses' })
export class CourseEntity {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  name: string

  @Column()
  description: string

  @JoinTable()
  @ManyToMany(() => TagEntity, (tag: TagEntity) => tag.courses, { cascade: true })
  tags: TagEntity[]
}