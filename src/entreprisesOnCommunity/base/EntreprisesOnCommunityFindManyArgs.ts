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
import { EntreprisesOnCommunityWhereInput } from "./EntreprisesOnCommunityWhereInput";
import { Type } from "class-transformer";
import { EntreprisesOnCommunityOrderByInput } from "./EntreprisesOnCommunityOrderByInput";

@ArgsType()
class EntreprisesOnCommunityFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => EntreprisesOnCommunityWhereInput,
  })
  @Field(() => EntreprisesOnCommunityWhereInput, { nullable: true })
  @Type(() => EntreprisesOnCommunityWhereInput)
  where?: EntreprisesOnCommunityWhereInput;

  @ApiProperty({
    required: false,
    type: EntreprisesOnCommunityOrderByInput,
  })
  @Field(() => EntreprisesOnCommunityOrderByInput, { nullable: true })
  @Type(() => EntreprisesOnCommunityOrderByInput)
  orderBy?: EntreprisesOnCommunityOrderByInput;

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

export { EntreprisesOnCommunityFindManyArgs };
