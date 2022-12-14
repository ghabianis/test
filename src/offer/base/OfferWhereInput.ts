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
import { StringFilter } from "../../util/StringFilter";
import { Type } from "class-transformer";
import { IsBoolean, IsOptional, ValidateNested } from "class-validator";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { PublicationWhereUniqueInput } from "../../publication/base/PublicationWhereUniqueInput";
import { ContractWhereUniqueInput } from "../../contract/base/ContractWhereUniqueInput";
import { BooleanFilter } from "src/util/BooleanFilter";
import { BooleanNullableFilter } from "src/util/BooleanNullableFilter";
@InputType()
class OfferWhereInput {
  @ApiProperty({
    required: false,
    type: StringFilter,
  })
  @Type(() => StringFilter)
  @IsOptional()
  @Field(() => StringFilter, {
    nullable: true,
  })
  id?: StringFilter;

  @ApiProperty({
    required: false,
    type: StringNullableFilter,
  })
  @Type(() => StringNullableFilter)
  @IsOptional()
  @Field(() => StringNullableFilter, {
    nullable: true,
  })
  place?: StringNullableFilter;

  @ApiProperty({
    required: false,
    type: StringNullableFilter,
  })
  @Type(() => StringNullableFilter)
  @IsOptional()
  @Field(() => StringNullableFilter, {
    nullable: true,
  })
  renumeration?: StringNullableFilter;

  @ApiProperty({
    required: false,
    type: StringNullableFilter,
  })
  @Type(() => StringNullableFilter)
  @IsOptional()
  @Field(() => StringNullableFilter, {
    nullable: true,
  })
  offerType?: StringNullableFilter;

  @ApiProperty({
    required: false,
    type: IntNullableFilter,
  })
  @Type(() => IntNullableFilter)
  @IsOptional()
  @Field(() => IntNullableFilter, {
    nullable: true,
  })
  maxExperience?: IntNullableFilter;

  @ApiProperty({
    required: false,
    type: IntNullableFilter,
  })
  @Type(() => IntNullableFilter)
  @IsOptional()
  @Field(() => IntNullableFilter, {
    nullable: true,
  })
  candidateMaxNumber?: IntNullableFilter;

  @ApiProperty({
    required: false,
    type: () => PublicationWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => PublicationWhereUniqueInput)
  @IsOptional()
  @Field(() => PublicationWhereUniqueInput, {
    nullable: true,
  })
  publication?: PublicationWhereUniqueInput;

  @ApiProperty({
    required: false,
    type: () => ContractWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => ContractWhereUniqueInput)
  @IsOptional()
  @Field(() => ContractWhereUniqueInput, {
    nullable: true,
  })
  contract?: ContractWhereUniqueInput;

  @ApiProperty({
    required: false,
    type: () => BooleanFilter,
  })
  @Type(() => BooleanFilter)
  @IsOptional()
  @IsBoolean()
  @Field(() => BooleanFilter, {
    nullable: true,
  })
  isActive?: BooleanFilter;
}
export { OfferWhereInput };
