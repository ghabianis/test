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
import { IsString, IsOptional, IsDate, ValidateNested, ArrayMaxSize } from "class-validator";
import { Type } from "class-transformer";
import { PublicationWhereUniqueInput } from "../../publication/base/PublicationWhereUniqueInput";
import { PublicationCreateInput } from "src/publication/base/PublicationCreateInput";
@InputType()
class EventCreateInput {
  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  location?: string | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  file?: string | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  link?: string | null;

  @ApiProperty({
    required: false,
  })
  @IsDate()
  @Type(() => Date)
  @IsOptional()
  @Field(() => Date, {
    nullable: true,
  })
  startDate?: Date | null;
  
  @ApiProperty({
    required: false,
  })
  @IsDate()
  @Type(() => Date)
  @IsOptional()
  @Field(() => Date, {
    nullable: true,
  })
  endDate?: Date | null;

  @ApiProperty({
    required: false,
    type: () => [String],
  })
  @Type(() => Array)
  @IsOptional()
  @ArrayMaxSize(5)
  @Field(() => [String], {
    nullable: true,
  })
  speakers?: Array<string> | null; 

  @ApiProperty({
    required: true,
    type: () => PublicationCreateInput,
  })
  @ValidateNested()
  @Type(() => PublicationCreateInput)
  @Field(() => PublicationCreateInput)
  publication!: PublicationCreateInput;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  eventMode?: string | null;

}
export { EventCreateInput };
