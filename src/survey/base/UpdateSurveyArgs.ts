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
import { SurveyWhereUniqueInput } from "./SurveyWhereUniqueInput";
import { SurveyUpdateInput } from "./SurveyUpdateInput";

@ArgsType()
class UpdateSurveyArgs {
  @Field(() => SurveyWhereUniqueInput, { nullable: false })
  where!: SurveyWhereUniqueInput;
  @Field(() => SurveyUpdateInput, { nullable: false })
  data!: SurveyUpdateInput;
}

export { UpdateSurveyArgs };
