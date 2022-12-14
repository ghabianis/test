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
import { SocialinterractionWhereInput } from "./SocialinterractionWhereInput";
import { Type } from "class-transformer";
import { SocialinterractionOrderByInput } from "./SocialinterractionOrderByInput";
import { StoriesWhereInput } from "./StoriesWhereInput";

@ArgsType()
class StoriesFIndManyArgs {
  @ApiProperty({
    required: false,
    type: () => SocialinterractionWhereInput,
  })
  @Field(() => StoriesWhereInput, { nullable: true })
  @Type(() => StoriesWhereInput)
  where?: StoriesWhereInput;

  @ApiProperty({
    required: false,
    type: SocialinterractionOrderByInput,
  })
  @Field(() => SocialinterractionOrderByInput, { nullable: true })
  @Type(() => SocialinterractionOrderByInput)
  orderBy?: SocialinterractionOrderByInput;

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

export { StoriesFIndManyArgs };
