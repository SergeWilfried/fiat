/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { AccountWhereUniqueInput } from "../../account/base/AccountWhereUniqueInput";
import { ApiProperty } from "@nestjs/swagger";

@InputType()
class AccountUpdateManyWithoutDocumentsInput {
  @Field(() => [AccountWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [AccountWhereUniqueInput],
  })
  connect?: Array<AccountWhereUniqueInput>;

  @Field(() => [AccountWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [AccountWhereUniqueInput],
  })
  disconnect?: Array<AccountWhereUniqueInput>;

  @Field(() => [AccountWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [AccountWhereUniqueInput],
  })
  set?: Array<AccountWhereUniqueInput>;
}

export { AccountUpdateManyWithoutDocumentsInput };
