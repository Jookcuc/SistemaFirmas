import { ErrorCodeEnums } from "../../enums"

export type errorType = {
  errors: {
    code: ErrorCodeEnums
    description: string
    id: number
  }
  code: ErrorCodeEnums
}

export type AsyncReturnType<T = unknown> = Promise<{ data: T | null; error: errorType | null }>
