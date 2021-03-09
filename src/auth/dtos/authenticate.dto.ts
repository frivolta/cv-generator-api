import { CognitoIdToken } from "amazon-cognito-identity-js";
import { QueryOutput } from "src/common/dtos/output.dto";

export class AuthenticateInput{
  password: string;
  name: string;
}

export class AuthenticateOutput extends QueryOutput{
  token?: string;
  userId?: CognitoIdToken
}