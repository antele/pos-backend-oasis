import { IsBoolean, IsEnum, IsNotEmpty, IsOptional, IsString } from "class-validator";
import { Role } from "src/common/enum/enum";

export class CreateUserDto {
  
  @IsNotEmpty()
  @IsString()  
  
  username:string;

  @IsNotEmpty()
  @IsString() 
  firstName:string;

  @IsString()
  lastName:string;

  @IsNotEmpty()
  @IsString() 
  password:string;

  @IsBoolean()
  @IsOptional()
  isActive:boolean;
  
  @IsEnum(Role)
  @IsOptional()
  role:Role;

  
}
