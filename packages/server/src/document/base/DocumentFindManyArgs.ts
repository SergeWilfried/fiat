/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { DocumentWhereInput } from "./DocumentWhereInput";
import { Type } from "class-transformer";
import { DocumentOrderByInput } from "./DocumentOrderByInput";

@ArgsType()
class DocumentFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => DocumentWhereInput,
  })
  @Field(() => DocumentWhereInput, { nullable: true })
  @Type(() => DocumentWhereInput)
  where?: DocumentWhereInput;

  @ApiProperty({
    required: false,
    type: [DocumentOrderByInput],
  })
  @Field(() => [DocumentOrderByInput], { nullable: true })
  @Type(() => DocumentOrderByInput)
  orderBy?: Array<DocumentOrderByInput>;

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

export { DocumentFindManyArgs as DocumentFindManyArgs };
