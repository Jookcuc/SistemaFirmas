import { ErrorCodeEnums } from "../../enums/ErrorCode"

export type errorType = {
  errors: {
    code: ErrorCodeEnums
    description: string
    id: number
  }
  code: ErrorCodeEnums
}

export type AsyncReturnType<T = unknown> = Promise<{ data: T | null; error: errorType | null }>
