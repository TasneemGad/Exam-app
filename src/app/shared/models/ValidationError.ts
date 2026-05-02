export type ValidationError =
  | { code: 'too_small'; minimum: number }
  | { code: 'invalid_type' }
  | { code: 'invalid_string' }
  | { code: 'invalid_enum_value' }
  | { code: 'custom'; message?: string };
