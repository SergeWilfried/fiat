/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { TransactionWhereUniqueInput } from "./TransactionWhereUniqueInput";
import { TransactionUpdateInput } from "./TransactionUpdateInput";

@ArgsType()
class UpdateTransactionArgs {
  @Field(() => TransactionWhereUniqueInput, { nullable: false })
  where!: TransactionWhereUniqueInput;
  @Field(() => TransactionUpdateInput, { nullable: false })
  data!: TransactionUpdateInput;
}

export { UpdateTransactionArgs as UpdateTransactionArgs };
