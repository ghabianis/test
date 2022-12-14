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
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { QuestionTypeWhereInput } from "./QuestionTypeWhereInput";
import { Type } from "class-transformer";
import { QuestionTypeOrderByInput } from "./QuestionTypeOrderByInput";

@ArgsType()
class QuestionTypeFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => QuestionTypeWhereInput,
  })
  @Field(() => QuestionTypeWhereInput, { nullable: true })
  @Type(() => QuestionTypeWhereInput)
  where?: QuestionTypeWhereInput;

  @ApiProperty({
    required: false,
    type: QuestionTypeOrderByInput,
  })
  @Field(() => QuestionTypeOrderByInput, { nullable: true })
  @Type(() => QuestionTypeOrderByInput)
  orderBy?: QuestionTypeOrderByInput;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  skip?: number;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  take?: number;
}

export { QuestionTypeFindManyArgs };
