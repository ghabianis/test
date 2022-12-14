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
import { ObjectType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { IsString, IsDate, IsOptional, ValidateNested , IsEnum } from "class-validator";
import { Type } from "class-transformer";
import { Candidate } from "../../candidate/base/Candidate";
import { Recruiter } from "../../recruiter/base/Recruiter";
import { Comment } from "../../comment/base/Comment";
import { Feedback } from "../../feedback/base/Feedback";
import { Publication } from "../../publication/base/Publication";
import { Socialinterraction } from "../../socialinterraction/base/Socialinterraction";
import { UsersOnCommunity } from "../../usersOnCommunity/base/UsersOnCommunity";
import { UsersOnEntreprise } from "../../usersOnEntreprise/base/UsersOnEntreprise";
import { UsersSkill } from "../../usersSkill/base/UsersSkill";
import { EnumUserSex } from "../../auth/registerEnumType";
@ObjectType()
class User {
  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @Field(() => String)
  id!: string;

  @ApiProperty({
    required: false,
  })
  @IsDate()
  @Type(() => Date)
  @Field(() => Date)
  createdAt!: Date;

  @ApiProperty({
    required: false,
  })
  @IsDate()
  @Type(() => Date)
  @Field(() => Date)
  @IsOptional()
updatedAt?: Date | null;

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
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  candidateId!: string | null;

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
    type: () => Candidate,
  })
  @ValidateNested()
  @Type(() => Candidate)
  @IsOptional()
  candidate?: Candidate | null;

  @ApiProperty({
    required: false,
    type: () => Recruiter,
  })
  @ValidateNested()
  @Type(() => Recruiter)
  @IsOptional()
  recruiter?: Recruiter | null;

  @ApiProperty({
    required: false,
    type: () => [Comment],
  })
  @ValidateNested()
  @Type(() => Comment)
  @IsOptional()
  comments?: Array<Comment>;

  @ApiProperty({
    required: false,
    type: () => [Feedback],
  })
  @ValidateNested()
  @Type(() => Feedback)
  @IsOptional()
  feedbacks?: Array<Feedback>;

  @ApiProperty({
    required: false,
    type: () => [Publication],
  })
  @ValidateNested()
  @Type(() => Publication)
  @IsOptional()
  publications?: Array<Publication>;

  @ApiProperty({
    required: false,
    type: () => [Socialinterraction],
  })
  @ValidateNested()
  @Type(() => Socialinterraction)
  @IsOptional()
  socialinterractions?: Array<Socialinterraction>;

  @ApiProperty({
    required: false,
    type: () => [UsersOnCommunity],
  })
  @ValidateNested()
  @Type(() => UsersOnCommunity)
  @IsOptional()
  usersOnCommunities?: Array<UsersOnCommunity>;

  @ApiProperty({
    required: false,
    type: () => [UsersOnEntreprise],
  })
  @ValidateNested()
  @Type(() => UsersOnEntreprise)
  @IsOptional()
  usersOnEntreprises?: Array<UsersOnEntreprise>;

  @ApiProperty({
    required: false,
    type: () => [UsersSkill],
  })
  @ValidateNested()
  @Type(() => UsersSkill)
  @IsOptional()
  usersSkills?: Array<UsersSkill>;

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
    required: true,
    enum: EnumUserSex,
  })
  @IsEnum(EnumUserSex)
  @IsOptional()
  @Field(() => EnumUserSex, {
    nullable: false,
  })
  sex!: "Homme" | "Femme" ;


  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @Field(() => String)
  city?: string;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @Field(() => String)
  kmRadius?: string;
}
export { User };
