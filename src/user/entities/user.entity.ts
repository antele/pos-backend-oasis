import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { Role } from "../../common/enum/enum";

@Entity()
export class User {
  @PrimaryGeneratedColumn('uuid')
  id:string;

  @Column('text',{nullable:false, unique:true})
  username:string;

  @Column('text',{nullable:false})
  firstName:string;

  @Column('text')
  lastName:string;

  @Column('text', {nullable:false})
  password:string;

  @Column('boolean',{default:true})
  isActive:boolean;
  
  @Column('enum',{default: Role.MESERO, enum:Role})
  role:Role;

  @CreateDateColumn({default: new Date()})
  createdAt:Date;

  @UpdateDateColumn({default: new Date()})
  updateAt:Date
}
