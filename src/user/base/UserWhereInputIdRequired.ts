/*
//------------------------------------------------------------------------------ 
// This code was generated by Amplication. 
// 
// Changes to this file will be lost if the code is regenerated. 
//
// There are other ways to to customize your code, see this doc to learn more
// https://docs.amplication.com/docs/how-to/custom-code
//
//------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { Type } from "class-transformer";
import { IsOptional, IsDate , IsString} from "class-validator";
import { CandidateWhereUniqueInput } from "../../candidate/base/CandidateWhereUniqueInput";
import { RecruiterWhereUniqueInput } from "../../recruiter/base/RecruiterWhereUniqueInput";
@InputType()
class UserWhereInputIdRequired {
  @ApiProperty({
    required: true,
    type: String,
  })
  @Type(() => String)
  @Field(() => String, {
    nullable: false,
  })
  id!: string;

  @ApiProperty({
    required: false,
  })
  @IsDate()
  @IsOptional()
  @Type(() => Date)
  @Field(() => Date)
  createdAt?: Date;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String, { nullable: false })
  password!: string;

  @ApiProperty({
    required: false,
  })
  @IsDate()
  @IsOptional()
  @Type(() => Date)
  @Field(() => Date)
  updatedAt?: Date;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  firstName!: string | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  lastName!: string | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @Field(() => String)
  username!: string;

  @ApiProperty({
    required: false,
    type: [String],
  })
  @IsString({
    each: true,
  })
  @Field(() => [String])
  roles!: Array<string>;


  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  email!: string | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  phone!: string | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  address!: string | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsOptional()
  @IsString()
  @IsOptional()
  @Field(() => String)
  city?: string;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsOptional()
  @IsString()
  @IsOptional()
  @Field(() => String)
  kmRadius?: string;
}
export { UserWhereInputIdRequired };
