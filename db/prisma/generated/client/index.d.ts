
/**
 * Client
**/

import * as runtime from './runtime/index';
declare const prisma: unique symbol
export type PrismaPromise<A> = Promise<A> & {[prisma]: true}
type UnwrapPromise<P extends any> = P extends Promise<infer R> ? R : P
type UnwrapTuple<Tuple extends readonly unknown[]> = {
  [K in keyof Tuple]: K extends `${number}` ? Tuple[K] extends PrismaPromise<infer X> ? X : UnwrapPromise<Tuple[K]> : UnwrapPromise<Tuple[K]>
};


/**
 * Model Provider
 * 
 */
export type Provider = {
  createdAt: Date
  updatedAt: Date
  id: number
  channel: string
  providerName: ProviderName
  config: Prisma.JsonValue
  unitCost: number
}

/**
 * Model Sms
 * 
 */
export type Sms = {
  createdAt: Date
  updatedAt: Date
  id: bigint
  providerId: number
  phone: string
  user: string
  org: string
  text: string
  type: TextType
  status: Status
  retries: number
  providerMessageId: string | null
  meta: Prisma.JsonValue | null
}

/**
 * Model FCM
 * 
 */
export type FCM = {
  createdAt: Date
  updatedAt: Date
  id: bigint
  deviceId: string
  user: string
  org: string
  text: string
  type: TextType
  status: Status
  retries: number
  providerMessageId: string | null
  meta: Prisma.JsonValue | null
  providerId: number | null
}

/**
 * Model Audit
 * 
 */
export type Audit = {
  createdAt: Date
  updatedAt: Date
  id: bigint
  smsId: bigint
  event: Event
  fCMId: bigint | null
}


/**
 * Enums
 */

// Based on
// https://github.com/microsoft/TypeScript/issues/3192#issuecomment-261720275

export const ProviderName: {
  CDAC: 'CDAC',
  GUPSHUP: 'GUPSHUP'
};

export type ProviderName = (typeof ProviderName)[keyof typeof ProviderName]


export const TextType: {
  UNICODE: 'UNICODE',
  ENGLISH: 'ENGLISH'
};

export type TextType = (typeof TextType)[keyof typeof TextType]


export const Status: {
  QUEUED: 'QUEUED',
  SENT_TO_PROVIDER: 'SENT_TO_PROVIDER',
  DELIEVERED: 'DELIEVERED',
  FAILED_AT_PROVIDER: 'FAILED_AT_PROVIDER',
  FAILED: 'FAILED'
};

export type Status = (typeof Status)[keyof typeof Status]


export const Event: {
  QUEUED: 'QUEUED',
  SENT_TO_PROVIDER: 'SENT_TO_PROVIDER',
  DELIEVERED: 'DELIEVERED',
  FAILED_AT_PROVIDER: 'FAILED_AT_PROVIDER',
  FAILED: 'FAILED'
};

export type Event = (typeof Event)[keyof typeof Event]


/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Providers
 * const providers = await prisma.provider.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  T extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof T ? T['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<T['log']> : never : never,
  GlobalReject = 'rejectOnNotFound' extends keyof T
    ? T['rejectOnNotFound']
    : false
      > {
      /**
       * @private
       */
      private fetcher;
      /**
       * @private
       */
      private readonly dmmf;
      /**
       * @private
       */
      private connectionPromise?;
      /**
       * @private
       */
      private disconnectionPromise?;
      /**
       * @private
       */
      private readonly engineConfig;
      /**
       * @private
       */
      private readonly measurePerformance;

    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Providers
   * const providers = await prisma.provider.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<T, Prisma.PrismaClientOptions>);
  $on<V extends (U | 'beforeExit')>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : V extends 'beforeExit' ? () => Promise<void> : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): Promise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): Promise<any>;

  /**
   * Add a middleware
   */
  $use(cb: Prisma.Middleware): void

  /**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): PrismaPromise<T>;

  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends PrismaPromise<any>[]>(arg: [...P]): Promise<UnwrapTuple<P>>;


      /**
   * `prisma.provider`: Exposes CRUD operations for the **Provider** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Providers
    * const providers = await prisma.provider.findMany()
    * ```
    */
  get provider(): Prisma.ProviderDelegate<GlobalReject>;

  /**
   * `prisma.sms`: Exposes CRUD operations for the **Sms** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Sms
    * const sms = await prisma.sms.findMany()
    * ```
    */
  get sms(): Prisma.SmsDelegate<GlobalReject>;

  /**
   * `prisma.fCM`: Exposes CRUD operations for the **FCM** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more FCMS
    * const fCMS = await prisma.fCM.findMany()
    * ```
    */
  get fCM(): Prisma.FCMDelegate<GlobalReject>;

  /**
   * `prisma.audit`: Exposes CRUD operations for the **Audit** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Audits
    * const audits = await prisma.audit.findMany()
    * ```
    */
  get audit(): Prisma.AuditDelegate<GlobalReject>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql

  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  /**
   * Prisma Client JS version: 3.5.0
   * Query Engine version: 34df67547cf5598f5a6cd3eb45f14ee70c3fb86f
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON object.
   * This type can be useful to enforce some input to be JSON-compatible or as a super-type to be extended from. 
   */
  export type JsonObject = {[Key in string]?: JsonValue}
 
  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON array.
   */
  export interface JsonArray extends Array<JsonValue> {}
 
  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches any valid JSON value.
   */
  export type JsonValue = string | number | boolean | JsonObject | JsonArray | null

  /**
   * Same as JsonObject, but allows undefined
   */
  export type InputJsonObject = {[Key in string]?: JsonValue}
 
  export interface InputJsonArray extends Array<JsonValue> {}
 
  export type InputJsonValue = string | number | boolean | InputJsonObject | InputJsonArray

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: 'DbNull'

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: 'JsonNull'

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: 'AnyNull'

  type SelectAndInclude = {
    select: any
    include: any
  }
  type HasSelect = {
    select: any
  }
  type HasInclude = {
    include: any
  }
  type CheckSelect<T, S, U> = T extends SelectAndInclude
    ? 'Please either choose `select` or `include`'
    : T extends HasSelect
    ? U
    : T extends HasInclude
    ? U
    : S

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => Promise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = {
    [key in keyof T]: T[key] extends false | undefined | null ? never : key
  }[keyof T]

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> = (T | U) extends object ? (Without<T, U> & U) | (Without<U, T> & T) : T | U;


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Buffer
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Exact<A, W = unknown> = 
  W extends unknown ? A extends Narrowable ? Cast<A, W> : Cast<
  {[K in keyof A]: K extends keyof W ? Exact<A[K], W[K]> : never},
  {[K in keyof W]: K extends keyof A ? Exact<A[K], W[K]> : W[K]}>
  : never;

  type Narrowable = string | number | boolean | bigint;

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;

  export function validator<V>(): <S>(select: Exact<S, V>) => S;

  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but with an array
   */
  type PickArray<T, K extends Array<keyof T>> = Prisma__Pick<T, TupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T

  class PrismaClientFetcher {
    private readonly prisma;
    private readonly debug;
    private readonly hooks?;
    constructor(prisma: PrismaClient<any, any>, debug?: boolean, hooks?: Hooks | undefined);
    request<T>(document: any, dataPath?: string[], rootField?: string, typeName?: string, isList?: boolean, callsite?: string): Promise<T>;
    sanitizeMessage(message: string): string;
    protected unpack(document: any, data: any, path: string[], rootField?: string, isList?: boolean): any;
  }

  export const ModelName: {
    Provider: 'Provider',
    Sms: 'Sms',
    FCM: 'FCM',
    Audit: 'Audit'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  export type RejectOnNotFound = boolean | ((error: Error) => Error)
  export type RejectPerModel = { [P in ModelName]?: RejectOnNotFound }
  export type RejectPerOperation =  { [P in "findUnique" | "findFirst"]?: RejectPerModel | RejectOnNotFound } 
  type IsReject<T> = T extends true ? True : T extends (err: Error) => Error ? True : False
  export type HasReject<
    GlobalRejectSettings extends Prisma.PrismaClientOptions['rejectOnNotFound'],
    LocalRejectSettings,
    Action extends PrismaAction,
    Model extends ModelName
  > = LocalRejectSettings extends RejectOnNotFound
    ? IsReject<LocalRejectSettings>
    : GlobalRejectSettings extends RejectPerOperation
    ? Action extends keyof GlobalRejectSettings
      ? GlobalRejectSettings[Action] extends boolean
        ? IsReject<GlobalRejectSettings[Action]>
        : GlobalRejectSettings[Action] extends RejectPerModel
        ? Model extends keyof GlobalRejectSettings[Action]
          ? IsReject<GlobalRejectSettings[Action][Model]>
          : False
        : False
      : False
    : IsReject<GlobalRejectSettings>
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'

  export interface PrismaClientOptions {
    /**
     * Configure findUnique/findFirst to throw an error if the query returns null. 
     *  * @example
     * ```
     * // Reject on both findUnique/findFirst
     * rejectOnNotFound: true
     * // Reject only on findFirst with a custom error
     * rejectOnNotFound: { findFirst: (err) => new Error("Custom Error")}
     * // Reject on user.findUnique with a custom error
     * rejectOnNotFound: { findUnique: {User: (err) => new Error("User not found")}}
     * ```
     */
    rejectOnNotFound?: RejectOnNotFound | RejectPerOperation
    /**
     * Overwrites the datasource url from your prisma.schema file
     */
    datasources?: Datasources

    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat

    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: Array<LogLevel | LogDefinition>
  }

  export type Hooks = {
    beforeRequest?: (options: { query: string, path: string[], rootField?: string, typeName?: string, document: any }) => any
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findMany'
    | 'findFirst'
    | 'create'
    | 'createMany'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'

  /**
   * These options are being passed in to the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => Promise<T>,
  ) => Promise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined; 
  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type ProviderCountOutputType
   */


  export type ProviderCountOutputType = {
    Sms: number
    FCM: number
  }

  export type ProviderCountOutputTypeSelect = {
    Sms?: boolean
    FCM?: boolean
  }

  export type ProviderCountOutputTypeGetPayload<
    S extends boolean | null | undefined | ProviderCountOutputTypeArgs,
    U = keyof S
      > = S extends true
        ? ProviderCountOutputType
    : S extends undefined
    ? never
    : S extends ProviderCountOutputTypeArgs
    ?'include' extends U
    ? ProviderCountOutputType 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]: P extends keyof ProviderCountOutputType ?ProviderCountOutputType [P]
  : 
     never
  } 
    : ProviderCountOutputType
  : ProviderCountOutputType




  // Custom InputTypes

  /**
   * ProviderCountOutputType without action
   */
  export type ProviderCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the ProviderCountOutputType
     * 
    **/
    select?: ProviderCountOutputTypeSelect | null
  }



  /**
   * Count Type SmsCountOutputType
   */


  export type SmsCountOutputType = {
    Audit: number
  }

  export type SmsCountOutputTypeSelect = {
    Audit?: boolean
  }

  export type SmsCountOutputTypeGetPayload<
    S extends boolean | null | undefined | SmsCountOutputTypeArgs,
    U = keyof S
      > = S extends true
        ? SmsCountOutputType
    : S extends undefined
    ? never
    : S extends SmsCountOutputTypeArgs
    ?'include' extends U
    ? SmsCountOutputType 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]: P extends keyof SmsCountOutputType ?SmsCountOutputType [P]
  : 
     never
  } 
    : SmsCountOutputType
  : SmsCountOutputType




  // Custom InputTypes

  /**
   * SmsCountOutputType without action
   */
  export type SmsCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the SmsCountOutputType
     * 
    **/
    select?: SmsCountOutputTypeSelect | null
  }



  /**
   * Count Type FCMCountOutputType
   */


  export type FCMCountOutputType = {
    Audit: number
  }

  export type FCMCountOutputTypeSelect = {
    Audit?: boolean
  }

  export type FCMCountOutputTypeGetPayload<
    S extends boolean | null | undefined | FCMCountOutputTypeArgs,
    U = keyof S
      > = S extends true
        ? FCMCountOutputType
    : S extends undefined
    ? never
    : S extends FCMCountOutputTypeArgs
    ?'include' extends U
    ? FCMCountOutputType 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]: P extends keyof FCMCountOutputType ?FCMCountOutputType [P]
  : 
     never
  } 
    : FCMCountOutputType
  : FCMCountOutputType




  // Custom InputTypes

  /**
   * FCMCountOutputType without action
   */
  export type FCMCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the FCMCountOutputType
     * 
    **/
    select?: FCMCountOutputTypeSelect | null
  }



  /**
   * Models
   */

  /**
   * Model Provider
   */


  export type AggregateProvider = {
    _count: ProviderCountAggregateOutputType | null
    _avg: ProviderAvgAggregateOutputType | null
    _sum: ProviderSumAggregateOutputType | null
    _min: ProviderMinAggregateOutputType | null
    _max: ProviderMaxAggregateOutputType | null
  }

  export type ProviderAvgAggregateOutputType = {
    id: number | null
    unitCost: number | null
  }

  export type ProviderSumAggregateOutputType = {
    id: number | null
    unitCost: number | null
  }

  export type ProviderMinAggregateOutputType = {
    createdAt: Date | null
    updatedAt: Date | null
    id: number | null
    channel: string | null
    providerName: ProviderName | null
    unitCost: number | null
  }

  export type ProviderMaxAggregateOutputType = {
    createdAt: Date | null
    updatedAt: Date | null
    id: number | null
    channel: string | null
    providerName: ProviderName | null
    unitCost: number | null
  }

  export type ProviderCountAggregateOutputType = {
    createdAt: number
    updatedAt: number
    id: number
    channel: number
    providerName: number
    config: number
    unitCost: number
    _all: number
  }


  export type ProviderAvgAggregateInputType = {
    id?: true
    unitCost?: true
  }

  export type ProviderSumAggregateInputType = {
    id?: true
    unitCost?: true
  }

  export type ProviderMinAggregateInputType = {
    createdAt?: true
    updatedAt?: true
    id?: true
    channel?: true
    providerName?: true
    unitCost?: true
  }

  export type ProviderMaxAggregateInputType = {
    createdAt?: true
    updatedAt?: true
    id?: true
    channel?: true
    providerName?: true
    unitCost?: true
  }

  export type ProviderCountAggregateInputType = {
    createdAt?: true
    updatedAt?: true
    id?: true
    channel?: true
    providerName?: true
    config?: true
    unitCost?: true
    _all?: true
  }

  export type ProviderAggregateArgs = {
    /**
     * Filter which Provider to aggregate.
     * 
    **/
    where?: ProviderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Providers to fetch.
     * 
    **/
    orderBy?: Enumerable<ProviderOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: ProviderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Providers from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Providers.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Providers
    **/
    _count?: true | ProviderCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProviderAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProviderSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProviderMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProviderMaxAggregateInputType
  }

  export type GetProviderAggregateType<T extends ProviderAggregateArgs> = {
        [P in keyof T & keyof AggregateProvider]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProvider[P]>
      : GetScalarType<T[P], AggregateProvider[P]>
  }




  export type ProviderGroupByArgs = {
    where?: ProviderWhereInput
    orderBy?: Enumerable<ProviderOrderByWithAggregationInput>
    by: Array<ProviderScalarFieldEnum>
    having?: ProviderScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProviderCountAggregateInputType | true
    _avg?: ProviderAvgAggregateInputType
    _sum?: ProviderSumAggregateInputType
    _min?: ProviderMinAggregateInputType
    _max?: ProviderMaxAggregateInputType
  }


  export type ProviderGroupByOutputType = {
    createdAt: Date
    updatedAt: Date
    id: number
    channel: string
    providerName: ProviderName
    config: JsonValue
    unitCost: number
    _count: ProviderCountAggregateOutputType | null
    _avg: ProviderAvgAggregateOutputType | null
    _sum: ProviderSumAggregateOutputType | null
    _min: ProviderMinAggregateOutputType | null
    _max: ProviderMaxAggregateOutputType | null
  }

  type GetProviderGroupByPayload<T extends ProviderGroupByArgs> = Promise<
    Array<
      PickArray<ProviderGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProviderGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProviderGroupByOutputType[P]>
            : GetScalarType<T[P], ProviderGroupByOutputType[P]>
        }
      >
    >


  export type ProviderSelect = {
    createdAt?: boolean
    updatedAt?: boolean
    id?: boolean
    channel?: boolean
    providerName?: boolean
    config?: boolean
    unitCost?: boolean
    Sms?: boolean | SmsFindManyArgs
    FCM?: boolean | FCMFindManyArgs
    _count?: boolean | ProviderCountOutputTypeArgs
  }

  export type ProviderInclude = {
    Sms?: boolean | SmsFindManyArgs
    FCM?: boolean | FCMFindManyArgs
    _count?: boolean | ProviderCountOutputTypeArgs
  }

  export type ProviderGetPayload<
    S extends boolean | null | undefined | ProviderArgs,
    U = keyof S
      > = S extends true
        ? Provider
    : S extends undefined
    ? never
    : S extends ProviderArgs | ProviderFindManyArgs
    ?'include' extends U
    ? Provider  & {
    [P in TrueKeys<S['include']>]: 
          P extends 'Sms'
        ? Array < SmsGetPayload<S['include'][P]>>  :
        P extends 'FCM'
        ? Array < FCMGetPayload<S['include'][P]>>  :
        P extends '_count'
        ? ProviderCountOutputTypeGetPayload<S['include'][P]> : never
  } 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]: P extends keyof Provider ?Provider [P]
  : 
          P extends 'Sms'
        ? Array < SmsGetPayload<S['select'][P]>>  :
        P extends 'FCM'
        ? Array < FCMGetPayload<S['select'][P]>>  :
        P extends '_count'
        ? ProviderCountOutputTypeGetPayload<S['select'][P]> : never
  } 
    : Provider
  : Provider


  type ProviderCountArgs = Merge<
    Omit<ProviderFindManyArgs, 'select' | 'include'> & {
      select?: ProviderCountAggregateInputType | true
    }
  >

  export interface ProviderDelegate<GlobalRejectSettings> {
    /**
     * Find zero or one Provider that matches the filter.
     * @param {ProviderFindUniqueArgs} args - Arguments to find a Provider
     * @example
     * // Get one Provider
     * const provider = await prisma.provider.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends ProviderFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, ProviderFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Provider'> extends True ? CheckSelect<T, Prisma__ProviderClient<Provider>, Prisma__ProviderClient<ProviderGetPayload<T>>> : CheckSelect<T, Prisma__ProviderClient<Provider | null >, Prisma__ProviderClient<ProviderGetPayload<T> | null >>

    /**
     * Find the first Provider that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProviderFindFirstArgs} args - Arguments to find a Provider
     * @example
     * // Get one Provider
     * const provider = await prisma.provider.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends ProviderFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, ProviderFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Provider'> extends True ? CheckSelect<T, Prisma__ProviderClient<Provider>, Prisma__ProviderClient<ProviderGetPayload<T>>> : CheckSelect<T, Prisma__ProviderClient<Provider | null >, Prisma__ProviderClient<ProviderGetPayload<T> | null >>

    /**
     * Find zero or more Providers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProviderFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Providers
     * const providers = await prisma.provider.findMany()
     * 
     * // Get first 10 Providers
     * const providers = await prisma.provider.findMany({ take: 10 })
     * 
     * // Only select the `createdAt`
     * const providerWithCreatedAtOnly = await prisma.provider.findMany({ select: { createdAt: true } })
     * 
    **/
    findMany<T extends ProviderFindManyArgs>(
      args?: SelectSubset<T, ProviderFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<Provider>>, PrismaPromise<Array<ProviderGetPayload<T>>>>

    /**
     * Create a Provider.
     * @param {ProviderCreateArgs} args - Arguments to create a Provider.
     * @example
     * // Create one Provider
     * const Provider = await prisma.provider.create({
     *   data: {
     *     // ... data to create a Provider
     *   }
     * })
     * 
    **/
    create<T extends ProviderCreateArgs>(
      args: SelectSubset<T, ProviderCreateArgs>
    ): CheckSelect<T, Prisma__ProviderClient<Provider>, Prisma__ProviderClient<ProviderGetPayload<T>>>

    /**
     * Create many Providers.
     *     @param {ProviderCreateManyArgs} args - Arguments to create many Providers.
     *     @example
     *     // Create many Providers
     *     const provider = await prisma.provider.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends ProviderCreateManyArgs>(
      args?: SelectSubset<T, ProviderCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Provider.
     * @param {ProviderDeleteArgs} args - Arguments to delete one Provider.
     * @example
     * // Delete one Provider
     * const Provider = await prisma.provider.delete({
     *   where: {
     *     // ... filter to delete one Provider
     *   }
     * })
     * 
    **/
    delete<T extends ProviderDeleteArgs>(
      args: SelectSubset<T, ProviderDeleteArgs>
    ): CheckSelect<T, Prisma__ProviderClient<Provider>, Prisma__ProviderClient<ProviderGetPayload<T>>>

    /**
     * Update one Provider.
     * @param {ProviderUpdateArgs} args - Arguments to update one Provider.
     * @example
     * // Update one Provider
     * const provider = await prisma.provider.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends ProviderUpdateArgs>(
      args: SelectSubset<T, ProviderUpdateArgs>
    ): CheckSelect<T, Prisma__ProviderClient<Provider>, Prisma__ProviderClient<ProviderGetPayload<T>>>

    /**
     * Delete zero or more Providers.
     * @param {ProviderDeleteManyArgs} args - Arguments to filter Providers to delete.
     * @example
     * // Delete a few Providers
     * const { count } = await prisma.provider.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends ProviderDeleteManyArgs>(
      args?: SelectSubset<T, ProviderDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Providers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProviderUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Providers
     * const provider = await prisma.provider.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends ProviderUpdateManyArgs>(
      args: SelectSubset<T, ProviderUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Provider.
     * @param {ProviderUpsertArgs} args - Arguments to update or create a Provider.
     * @example
     * // Update or create a Provider
     * const provider = await prisma.provider.upsert({
     *   create: {
     *     // ... data to create a Provider
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Provider we want to update
     *   }
     * })
    **/
    upsert<T extends ProviderUpsertArgs>(
      args: SelectSubset<T, ProviderUpsertArgs>
    ): CheckSelect<T, Prisma__ProviderClient<Provider>, Prisma__ProviderClient<ProviderGetPayload<T>>>

    /**
     * Count the number of Providers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProviderCountArgs} args - Arguments to filter Providers to count.
     * @example
     * // Count the number of Providers
     * const count = await prisma.provider.count({
     *   where: {
     *     // ... the filter for the Providers we want to count
     *   }
     * })
    **/
    count<T extends ProviderCountArgs>(
      args?: Subset<T, ProviderCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProviderCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Provider.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProviderAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ProviderAggregateArgs>(args: Subset<T, ProviderAggregateArgs>): PrismaPromise<GetProviderAggregateType<T>>

    /**
     * Group by Provider.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProviderGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ProviderGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProviderGroupByArgs['orderBy'] }
        : { orderBy?: ProviderGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ProviderGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProviderGroupByPayload<T> : Promise<InputErrors>
  }

  /**
   * The delegate class that acts as a "Promise-like" for Provider.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__ProviderClient<T> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    Sms<T extends SmsFindManyArgs = {}>(args?: Subset<T, SmsFindManyArgs>): CheckSelect<T, PrismaPromise<Array<Sms>>, PrismaPromise<Array<SmsGetPayload<T>>>>;

    FCM<T extends FCMFindManyArgs = {}>(args?: Subset<T, FCMFindManyArgs>): CheckSelect<T, PrismaPromise<Array<FCM>>, PrismaPromise<Array<FCMGetPayload<T>>>>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }

  // Custom InputTypes

  /**
   * Provider findUnique
   */
  export type ProviderFindUniqueArgs = {
    /**
     * Select specific fields to fetch from the Provider
     * 
    **/
    select?: ProviderSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ProviderInclude | null
    /**
     * Throw an Error if a Provider can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which Provider to fetch.
     * 
    **/
    where: ProviderWhereUniqueInput
  }


  /**
   * Provider findFirst
   */
  export type ProviderFindFirstArgs = {
    /**
     * Select specific fields to fetch from the Provider
     * 
    **/
    select?: ProviderSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ProviderInclude | null
    /**
     * Throw an Error if a Provider can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which Provider to fetch.
     * 
    **/
    where?: ProviderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Providers to fetch.
     * 
    **/
    orderBy?: Enumerable<ProviderOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Providers.
     * 
    **/
    cursor?: ProviderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Providers from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Providers.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Providers.
     * 
    **/
    distinct?: Enumerable<ProviderScalarFieldEnum>
  }


  /**
   * Provider findMany
   */
  export type ProviderFindManyArgs = {
    /**
     * Select specific fields to fetch from the Provider
     * 
    **/
    select?: ProviderSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ProviderInclude | null
    /**
     * Filter, which Providers to fetch.
     * 
    **/
    where?: ProviderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Providers to fetch.
     * 
    **/
    orderBy?: Enumerable<ProviderOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Providers.
     * 
    **/
    cursor?: ProviderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Providers from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Providers.
     * 
    **/
    skip?: number
    distinct?: Enumerable<ProviderScalarFieldEnum>
  }


  /**
   * Provider create
   */
  export type ProviderCreateArgs = {
    /**
     * Select specific fields to fetch from the Provider
     * 
    **/
    select?: ProviderSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ProviderInclude | null
    /**
     * The data needed to create a Provider.
     * 
    **/
    data: XOR<ProviderCreateInput, ProviderUncheckedCreateInput>
  }


  /**
   * Provider createMany
   */
  export type ProviderCreateManyArgs = {
    data: Enumerable<ProviderCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Provider update
   */
  export type ProviderUpdateArgs = {
    /**
     * Select specific fields to fetch from the Provider
     * 
    **/
    select?: ProviderSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ProviderInclude | null
    /**
     * The data needed to update a Provider.
     * 
    **/
    data: XOR<ProviderUpdateInput, ProviderUncheckedUpdateInput>
    /**
     * Choose, which Provider to update.
     * 
    **/
    where: ProviderWhereUniqueInput
  }


  /**
   * Provider updateMany
   */
  export type ProviderUpdateManyArgs = {
    data: XOR<ProviderUpdateManyMutationInput, ProviderUncheckedUpdateManyInput>
    where?: ProviderWhereInput
  }


  /**
   * Provider upsert
   */
  export type ProviderUpsertArgs = {
    /**
     * Select specific fields to fetch from the Provider
     * 
    **/
    select?: ProviderSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ProviderInclude | null
    /**
     * The filter to search for the Provider to update in case it exists.
     * 
    **/
    where: ProviderWhereUniqueInput
    /**
     * In case the Provider found by the `where` argument doesn't exist, create a new Provider with this data.
     * 
    **/
    create: XOR<ProviderCreateInput, ProviderUncheckedCreateInput>
    /**
     * In case the Provider was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<ProviderUpdateInput, ProviderUncheckedUpdateInput>
  }


  /**
   * Provider delete
   */
  export type ProviderDeleteArgs = {
    /**
     * Select specific fields to fetch from the Provider
     * 
    **/
    select?: ProviderSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ProviderInclude | null
    /**
     * Filter which Provider to delete.
     * 
    **/
    where: ProviderWhereUniqueInput
  }


  /**
   * Provider deleteMany
   */
  export type ProviderDeleteManyArgs = {
    where?: ProviderWhereInput
  }


  /**
   * Provider without action
   */
  export type ProviderArgs = {
    /**
     * Select specific fields to fetch from the Provider
     * 
    **/
    select?: ProviderSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ProviderInclude | null
  }



  /**
   * Model Sms
   */


  export type AggregateSms = {
    _count: SmsCountAggregateOutputType | null
    _avg: SmsAvgAggregateOutputType | null
    _sum: SmsSumAggregateOutputType | null
    _min: SmsMinAggregateOutputType | null
    _max: SmsMaxAggregateOutputType | null
  }

  export type SmsAvgAggregateOutputType = {
    id: number | null
    providerId: number | null
    retries: number | null
  }

  export type SmsSumAggregateOutputType = {
    id: bigint | null
    providerId: number | null
    retries: number | null
  }

  export type SmsMinAggregateOutputType = {
    createdAt: Date | null
    updatedAt: Date | null
    id: bigint | null
    providerId: number | null
    phone: string | null
    user: string | null
    org: string | null
    text: string | null
    type: TextType | null
    status: Status | null
    retries: number | null
    providerMessageId: string | null
  }

  export type SmsMaxAggregateOutputType = {
    createdAt: Date | null
    updatedAt: Date | null
    id: bigint | null
    providerId: number | null
    phone: string | null
    user: string | null
    org: string | null
    text: string | null
    type: TextType | null
    status: Status | null
    retries: number | null
    providerMessageId: string | null
  }

  export type SmsCountAggregateOutputType = {
    createdAt: number
    updatedAt: number
    id: number
    providerId: number
    phone: number
    user: number
    org: number
    text: number
    type: number
    status: number
    retries: number
    providerMessageId: number
    meta: number
    _all: number
  }


  export type SmsAvgAggregateInputType = {
    id?: true
    providerId?: true
    retries?: true
  }

  export type SmsSumAggregateInputType = {
    id?: true
    providerId?: true
    retries?: true
  }

  export type SmsMinAggregateInputType = {
    createdAt?: true
    updatedAt?: true
    id?: true
    providerId?: true
    phone?: true
    user?: true
    org?: true
    text?: true
    type?: true
    status?: true
    retries?: true
    providerMessageId?: true
  }

  export type SmsMaxAggregateInputType = {
    createdAt?: true
    updatedAt?: true
    id?: true
    providerId?: true
    phone?: true
    user?: true
    org?: true
    text?: true
    type?: true
    status?: true
    retries?: true
    providerMessageId?: true
  }

  export type SmsCountAggregateInputType = {
    createdAt?: true
    updatedAt?: true
    id?: true
    providerId?: true
    phone?: true
    user?: true
    org?: true
    text?: true
    type?: true
    status?: true
    retries?: true
    providerMessageId?: true
    meta?: true
    _all?: true
  }

  export type SmsAggregateArgs = {
    /**
     * Filter which Sms to aggregate.
     * 
    **/
    where?: SmsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sms to fetch.
     * 
    **/
    orderBy?: Enumerable<SmsOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: SmsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sms from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sms.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Sms
    **/
    _count?: true | SmsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SmsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SmsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SmsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SmsMaxAggregateInputType
  }

  export type GetSmsAggregateType<T extends SmsAggregateArgs> = {
        [P in keyof T & keyof AggregateSms]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSms[P]>
      : GetScalarType<T[P], AggregateSms[P]>
  }




  export type SmsGroupByArgs = {
    where?: SmsWhereInput
    orderBy?: Enumerable<SmsOrderByWithAggregationInput>
    by: Array<SmsScalarFieldEnum>
    having?: SmsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SmsCountAggregateInputType | true
    _avg?: SmsAvgAggregateInputType
    _sum?: SmsSumAggregateInputType
    _min?: SmsMinAggregateInputType
    _max?: SmsMaxAggregateInputType
  }


  export type SmsGroupByOutputType = {
    createdAt: Date
    updatedAt: Date
    id: bigint
    providerId: number
    phone: string
    user: string
    org: string
    text: string
    type: TextType
    status: Status
    retries: number
    providerMessageId: string | null
    meta: JsonValue | null
    _count: SmsCountAggregateOutputType | null
    _avg: SmsAvgAggregateOutputType | null
    _sum: SmsSumAggregateOutputType | null
    _min: SmsMinAggregateOutputType | null
    _max: SmsMaxAggregateOutputType | null
  }

  type GetSmsGroupByPayload<T extends SmsGroupByArgs> = Promise<
    Array<
      PickArray<SmsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SmsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SmsGroupByOutputType[P]>
            : GetScalarType<T[P], SmsGroupByOutputType[P]>
        }
      >
    >


  export type SmsSelect = {
    createdAt?: boolean
    updatedAt?: boolean
    id?: boolean
    providerId?: boolean
    provider?: boolean | ProviderArgs
    phone?: boolean
    user?: boolean
    org?: boolean
    text?: boolean
    type?: boolean
    status?: boolean
    retries?: boolean
    providerMessageId?: boolean
    meta?: boolean
    Audit?: boolean | AuditFindManyArgs
    _count?: boolean | SmsCountOutputTypeArgs
  }

  export type SmsInclude = {
    provider?: boolean | ProviderArgs
    Audit?: boolean | AuditFindManyArgs
    _count?: boolean | SmsCountOutputTypeArgs
  }

  export type SmsGetPayload<
    S extends boolean | null | undefined | SmsArgs,
    U = keyof S
      > = S extends true
        ? Sms
    : S extends undefined
    ? never
    : S extends SmsArgs | SmsFindManyArgs
    ?'include' extends U
    ? Sms  & {
    [P in TrueKeys<S['include']>]: 
          P extends 'provider'
        ? ProviderGetPayload<S['include'][P]> :
        P extends 'Audit'
        ? Array < AuditGetPayload<S['include'][P]>>  :
        P extends '_count'
        ? SmsCountOutputTypeGetPayload<S['include'][P]> : never
  } 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]: P extends keyof Sms ?Sms [P]
  : 
          P extends 'provider'
        ? ProviderGetPayload<S['select'][P]> :
        P extends 'Audit'
        ? Array < AuditGetPayload<S['select'][P]>>  :
        P extends '_count'
        ? SmsCountOutputTypeGetPayload<S['select'][P]> : never
  } 
    : Sms
  : Sms


  type SmsCountArgs = Merge<
    Omit<SmsFindManyArgs, 'select' | 'include'> & {
      select?: SmsCountAggregateInputType | true
    }
  >

  export interface SmsDelegate<GlobalRejectSettings> {
    /**
     * Find zero or one Sms that matches the filter.
     * @param {SmsFindUniqueArgs} args - Arguments to find a Sms
     * @example
     * // Get one Sms
     * const sms = await prisma.sms.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends SmsFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, SmsFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Sms'> extends True ? CheckSelect<T, Prisma__SmsClient<Sms>, Prisma__SmsClient<SmsGetPayload<T>>> : CheckSelect<T, Prisma__SmsClient<Sms | null >, Prisma__SmsClient<SmsGetPayload<T> | null >>

    /**
     * Find the first Sms that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SmsFindFirstArgs} args - Arguments to find a Sms
     * @example
     * // Get one Sms
     * const sms = await prisma.sms.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends SmsFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, SmsFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Sms'> extends True ? CheckSelect<T, Prisma__SmsClient<Sms>, Prisma__SmsClient<SmsGetPayload<T>>> : CheckSelect<T, Prisma__SmsClient<Sms | null >, Prisma__SmsClient<SmsGetPayload<T> | null >>

    /**
     * Find zero or more Sms that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SmsFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Sms
     * const sms = await prisma.sms.findMany()
     * 
     * // Get first 10 Sms
     * const sms = await prisma.sms.findMany({ take: 10 })
     * 
     * // Only select the `createdAt`
     * const smsWithCreatedAtOnly = await prisma.sms.findMany({ select: { createdAt: true } })
     * 
    **/
    findMany<T extends SmsFindManyArgs>(
      args?: SelectSubset<T, SmsFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<Sms>>, PrismaPromise<Array<SmsGetPayload<T>>>>

    /**
     * Create a Sms.
     * @param {SmsCreateArgs} args - Arguments to create a Sms.
     * @example
     * // Create one Sms
     * const Sms = await prisma.sms.create({
     *   data: {
     *     // ... data to create a Sms
     *   }
     * })
     * 
    **/
    create<T extends SmsCreateArgs>(
      args: SelectSubset<T, SmsCreateArgs>
    ): CheckSelect<T, Prisma__SmsClient<Sms>, Prisma__SmsClient<SmsGetPayload<T>>>

    /**
     * Create many Sms.
     *     @param {SmsCreateManyArgs} args - Arguments to create many Sms.
     *     @example
     *     // Create many Sms
     *     const sms = await prisma.sms.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends SmsCreateManyArgs>(
      args?: SelectSubset<T, SmsCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Sms.
     * @param {SmsDeleteArgs} args - Arguments to delete one Sms.
     * @example
     * // Delete one Sms
     * const Sms = await prisma.sms.delete({
     *   where: {
     *     // ... filter to delete one Sms
     *   }
     * })
     * 
    **/
    delete<T extends SmsDeleteArgs>(
      args: SelectSubset<T, SmsDeleteArgs>
    ): CheckSelect<T, Prisma__SmsClient<Sms>, Prisma__SmsClient<SmsGetPayload<T>>>

    /**
     * Update one Sms.
     * @param {SmsUpdateArgs} args - Arguments to update one Sms.
     * @example
     * // Update one Sms
     * const sms = await prisma.sms.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends SmsUpdateArgs>(
      args: SelectSubset<T, SmsUpdateArgs>
    ): CheckSelect<T, Prisma__SmsClient<Sms>, Prisma__SmsClient<SmsGetPayload<T>>>

    /**
     * Delete zero or more Sms.
     * @param {SmsDeleteManyArgs} args - Arguments to filter Sms to delete.
     * @example
     * // Delete a few Sms
     * const { count } = await prisma.sms.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends SmsDeleteManyArgs>(
      args?: SelectSubset<T, SmsDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sms.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SmsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Sms
     * const sms = await prisma.sms.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends SmsUpdateManyArgs>(
      args: SelectSubset<T, SmsUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Sms.
     * @param {SmsUpsertArgs} args - Arguments to update or create a Sms.
     * @example
     * // Update or create a Sms
     * const sms = await prisma.sms.upsert({
     *   create: {
     *     // ... data to create a Sms
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Sms we want to update
     *   }
     * })
    **/
    upsert<T extends SmsUpsertArgs>(
      args: SelectSubset<T, SmsUpsertArgs>
    ): CheckSelect<T, Prisma__SmsClient<Sms>, Prisma__SmsClient<SmsGetPayload<T>>>

    /**
     * Count the number of Sms.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SmsCountArgs} args - Arguments to filter Sms to count.
     * @example
     * // Count the number of Sms
     * const count = await prisma.sms.count({
     *   where: {
     *     // ... the filter for the Sms we want to count
     *   }
     * })
    **/
    count<T extends SmsCountArgs>(
      args?: Subset<T, SmsCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SmsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Sms.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SmsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SmsAggregateArgs>(args: Subset<T, SmsAggregateArgs>): PrismaPromise<GetSmsAggregateType<T>>

    /**
     * Group by Sms.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SmsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SmsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SmsGroupByArgs['orderBy'] }
        : { orderBy?: SmsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SmsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSmsGroupByPayload<T> : Promise<InputErrors>
  }

  /**
   * The delegate class that acts as a "Promise-like" for Sms.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__SmsClient<T> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    provider<T extends ProviderArgs = {}>(args?: Subset<T, ProviderArgs>): CheckSelect<T, Prisma__ProviderClient<Provider | null >, Prisma__ProviderClient<ProviderGetPayload<T> | null >>;

    Audit<T extends AuditFindManyArgs = {}>(args?: Subset<T, AuditFindManyArgs>): CheckSelect<T, PrismaPromise<Array<Audit>>, PrismaPromise<Array<AuditGetPayload<T>>>>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }

  // Custom InputTypes

  /**
   * Sms findUnique
   */
  export type SmsFindUniqueArgs = {
    /**
     * Select specific fields to fetch from the Sms
     * 
    **/
    select?: SmsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: SmsInclude | null
    /**
     * Throw an Error if a Sms can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which Sms to fetch.
     * 
    **/
    where: SmsWhereUniqueInput
  }


  /**
   * Sms findFirst
   */
  export type SmsFindFirstArgs = {
    /**
     * Select specific fields to fetch from the Sms
     * 
    **/
    select?: SmsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: SmsInclude | null
    /**
     * Throw an Error if a Sms can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which Sms to fetch.
     * 
    **/
    where?: SmsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sms to fetch.
     * 
    **/
    orderBy?: Enumerable<SmsOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sms.
     * 
    **/
    cursor?: SmsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sms from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sms.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sms.
     * 
    **/
    distinct?: Enumerable<SmsScalarFieldEnum>
  }


  /**
   * Sms findMany
   */
  export type SmsFindManyArgs = {
    /**
     * Select specific fields to fetch from the Sms
     * 
    **/
    select?: SmsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: SmsInclude | null
    /**
     * Filter, which Sms to fetch.
     * 
    **/
    where?: SmsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sms to fetch.
     * 
    **/
    orderBy?: Enumerable<SmsOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Sms.
     * 
    **/
    cursor?: SmsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sms from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sms.
     * 
    **/
    skip?: number
    distinct?: Enumerable<SmsScalarFieldEnum>
  }


  /**
   * Sms create
   */
  export type SmsCreateArgs = {
    /**
     * Select specific fields to fetch from the Sms
     * 
    **/
    select?: SmsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: SmsInclude | null
    /**
     * The data needed to create a Sms.
     * 
    **/
    data: XOR<SmsCreateInput, SmsUncheckedCreateInput>
  }


  /**
   * Sms createMany
   */
  export type SmsCreateManyArgs = {
    data: Enumerable<SmsCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Sms update
   */
  export type SmsUpdateArgs = {
    /**
     * Select specific fields to fetch from the Sms
     * 
    **/
    select?: SmsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: SmsInclude | null
    /**
     * The data needed to update a Sms.
     * 
    **/
    data: XOR<SmsUpdateInput, SmsUncheckedUpdateInput>
    /**
     * Choose, which Sms to update.
     * 
    **/
    where: SmsWhereUniqueInput
  }


  /**
   * Sms updateMany
   */
  export type SmsUpdateManyArgs = {
    data: XOR<SmsUpdateManyMutationInput, SmsUncheckedUpdateManyInput>
    where?: SmsWhereInput
  }


  /**
   * Sms upsert
   */
  export type SmsUpsertArgs = {
    /**
     * Select specific fields to fetch from the Sms
     * 
    **/
    select?: SmsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: SmsInclude | null
    /**
     * The filter to search for the Sms to update in case it exists.
     * 
    **/
    where: SmsWhereUniqueInput
    /**
     * In case the Sms found by the `where` argument doesn't exist, create a new Sms with this data.
     * 
    **/
    create: XOR<SmsCreateInput, SmsUncheckedCreateInput>
    /**
     * In case the Sms was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<SmsUpdateInput, SmsUncheckedUpdateInput>
  }


  /**
   * Sms delete
   */
  export type SmsDeleteArgs = {
    /**
     * Select specific fields to fetch from the Sms
     * 
    **/
    select?: SmsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: SmsInclude | null
    /**
     * Filter which Sms to delete.
     * 
    **/
    where: SmsWhereUniqueInput
  }


  /**
   * Sms deleteMany
   */
  export type SmsDeleteManyArgs = {
    where?: SmsWhereInput
  }


  /**
   * Sms without action
   */
  export type SmsArgs = {
    /**
     * Select specific fields to fetch from the Sms
     * 
    **/
    select?: SmsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: SmsInclude | null
  }



  /**
   * Model FCM
   */


  export type AggregateFCM = {
    _count: FCMCountAggregateOutputType | null
    _avg: FCMAvgAggregateOutputType | null
    _sum: FCMSumAggregateOutputType | null
    _min: FCMMinAggregateOutputType | null
    _max: FCMMaxAggregateOutputType | null
  }

  export type FCMAvgAggregateOutputType = {
    id: number | null
    retries: number | null
    providerId: number | null
  }

  export type FCMSumAggregateOutputType = {
    id: bigint | null
    retries: number | null
    providerId: number | null
  }

  export type FCMMinAggregateOutputType = {
    createdAt: Date | null
    updatedAt: Date | null
    id: bigint | null
    deviceId: string | null
    user: string | null
    org: string | null
    text: string | null
    type: TextType | null
    status: Status | null
    retries: number | null
    providerMessageId: string | null
    providerId: number | null
  }

  export type FCMMaxAggregateOutputType = {
    createdAt: Date | null
    updatedAt: Date | null
    id: bigint | null
    deviceId: string | null
    user: string | null
    org: string | null
    text: string | null
    type: TextType | null
    status: Status | null
    retries: number | null
    providerMessageId: string | null
    providerId: number | null
  }

  export type FCMCountAggregateOutputType = {
    createdAt: number
    updatedAt: number
    id: number
    deviceId: number
    user: number
    org: number
    text: number
    type: number
    status: number
    retries: number
    providerMessageId: number
    meta: number
    providerId: number
    _all: number
  }


  export type FCMAvgAggregateInputType = {
    id?: true
    retries?: true
    providerId?: true
  }

  export type FCMSumAggregateInputType = {
    id?: true
    retries?: true
    providerId?: true
  }

  export type FCMMinAggregateInputType = {
    createdAt?: true
    updatedAt?: true
    id?: true
    deviceId?: true
    user?: true
    org?: true
    text?: true
    type?: true
    status?: true
    retries?: true
    providerMessageId?: true
    providerId?: true
  }

  export type FCMMaxAggregateInputType = {
    createdAt?: true
    updatedAt?: true
    id?: true
    deviceId?: true
    user?: true
    org?: true
    text?: true
    type?: true
    status?: true
    retries?: true
    providerMessageId?: true
    providerId?: true
  }

  export type FCMCountAggregateInputType = {
    createdAt?: true
    updatedAt?: true
    id?: true
    deviceId?: true
    user?: true
    org?: true
    text?: true
    type?: true
    status?: true
    retries?: true
    providerMessageId?: true
    meta?: true
    providerId?: true
    _all?: true
  }

  export type FCMAggregateArgs = {
    /**
     * Filter which FCM to aggregate.
     * 
    **/
    where?: FCMWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FCMS to fetch.
     * 
    **/
    orderBy?: Enumerable<FCMOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: FCMWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FCMS from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FCMS.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned FCMS
    **/
    _count?: true | FCMCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: FCMAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: FCMSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FCMMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FCMMaxAggregateInputType
  }

  export type GetFCMAggregateType<T extends FCMAggregateArgs> = {
        [P in keyof T & keyof AggregateFCM]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFCM[P]>
      : GetScalarType<T[P], AggregateFCM[P]>
  }




  export type FCMGroupByArgs = {
    where?: FCMWhereInput
    orderBy?: Enumerable<FCMOrderByWithAggregationInput>
    by: Array<FCMScalarFieldEnum>
    having?: FCMScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FCMCountAggregateInputType | true
    _avg?: FCMAvgAggregateInputType
    _sum?: FCMSumAggregateInputType
    _min?: FCMMinAggregateInputType
    _max?: FCMMaxAggregateInputType
  }


  export type FCMGroupByOutputType = {
    createdAt: Date
    updatedAt: Date
    id: bigint
    deviceId: string
    user: string
    org: string
    text: string
    type: TextType
    status: Status
    retries: number
    providerMessageId: string | null
    meta: JsonValue | null
    providerId: number | null
    _count: FCMCountAggregateOutputType | null
    _avg: FCMAvgAggregateOutputType | null
    _sum: FCMSumAggregateOutputType | null
    _min: FCMMinAggregateOutputType | null
    _max: FCMMaxAggregateOutputType | null
  }

  type GetFCMGroupByPayload<T extends FCMGroupByArgs> = Promise<
    Array<
      PickArray<FCMGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FCMGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FCMGroupByOutputType[P]>
            : GetScalarType<T[P], FCMGroupByOutputType[P]>
        }
      >
    >


  export type FCMSelect = {
    createdAt?: boolean
    updatedAt?: boolean
    id?: boolean
    deviceId?: boolean
    user?: boolean
    org?: boolean
    text?: boolean
    type?: boolean
    status?: boolean
    retries?: boolean
    providerMessageId?: boolean
    meta?: boolean
    Audit?: boolean | AuditFindManyArgs
    Provider?: boolean | ProviderArgs
    providerId?: boolean
    _count?: boolean | FCMCountOutputTypeArgs
  }

  export type FCMInclude = {
    Audit?: boolean | AuditFindManyArgs
    Provider?: boolean | ProviderArgs
    _count?: boolean | FCMCountOutputTypeArgs
  }

  export type FCMGetPayload<
    S extends boolean | null | undefined | FCMArgs,
    U = keyof S
      > = S extends true
        ? FCM
    : S extends undefined
    ? never
    : S extends FCMArgs | FCMFindManyArgs
    ?'include' extends U
    ? FCM  & {
    [P in TrueKeys<S['include']>]: 
          P extends 'Audit'
        ? Array < AuditGetPayload<S['include'][P]>>  :
        P extends 'Provider'
        ? ProviderGetPayload<S['include'][P]> | null :
        P extends '_count'
        ? FCMCountOutputTypeGetPayload<S['include'][P]> : never
  } 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]: P extends keyof FCM ?FCM [P]
  : 
          P extends 'Audit'
        ? Array < AuditGetPayload<S['select'][P]>>  :
        P extends 'Provider'
        ? ProviderGetPayload<S['select'][P]> | null :
        P extends '_count'
        ? FCMCountOutputTypeGetPayload<S['select'][P]> : never
  } 
    : FCM
  : FCM


  type FCMCountArgs = Merge<
    Omit<FCMFindManyArgs, 'select' | 'include'> & {
      select?: FCMCountAggregateInputType | true
    }
  >

  export interface FCMDelegate<GlobalRejectSettings> {
    /**
     * Find zero or one FCM that matches the filter.
     * @param {FCMFindUniqueArgs} args - Arguments to find a FCM
     * @example
     * // Get one FCM
     * const fCM = await prisma.fCM.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends FCMFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, FCMFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'FCM'> extends True ? CheckSelect<T, Prisma__FCMClient<FCM>, Prisma__FCMClient<FCMGetPayload<T>>> : CheckSelect<T, Prisma__FCMClient<FCM | null >, Prisma__FCMClient<FCMGetPayload<T> | null >>

    /**
     * Find the first FCM that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FCMFindFirstArgs} args - Arguments to find a FCM
     * @example
     * // Get one FCM
     * const fCM = await prisma.fCM.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends FCMFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, FCMFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'FCM'> extends True ? CheckSelect<T, Prisma__FCMClient<FCM>, Prisma__FCMClient<FCMGetPayload<T>>> : CheckSelect<T, Prisma__FCMClient<FCM | null >, Prisma__FCMClient<FCMGetPayload<T> | null >>

    /**
     * Find zero or more FCMS that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FCMFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all FCMS
     * const fCMS = await prisma.fCM.findMany()
     * 
     * // Get first 10 FCMS
     * const fCMS = await prisma.fCM.findMany({ take: 10 })
     * 
     * // Only select the `createdAt`
     * const fCMWithCreatedAtOnly = await prisma.fCM.findMany({ select: { createdAt: true } })
     * 
    **/
    findMany<T extends FCMFindManyArgs>(
      args?: SelectSubset<T, FCMFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<FCM>>, PrismaPromise<Array<FCMGetPayload<T>>>>

    /**
     * Create a FCM.
     * @param {FCMCreateArgs} args - Arguments to create a FCM.
     * @example
     * // Create one FCM
     * const FCM = await prisma.fCM.create({
     *   data: {
     *     // ... data to create a FCM
     *   }
     * })
     * 
    **/
    create<T extends FCMCreateArgs>(
      args: SelectSubset<T, FCMCreateArgs>
    ): CheckSelect<T, Prisma__FCMClient<FCM>, Prisma__FCMClient<FCMGetPayload<T>>>

    /**
     * Create many FCMS.
     *     @param {FCMCreateManyArgs} args - Arguments to create many FCMS.
     *     @example
     *     // Create many FCMS
     *     const fCM = await prisma.fCM.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends FCMCreateManyArgs>(
      args?: SelectSubset<T, FCMCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a FCM.
     * @param {FCMDeleteArgs} args - Arguments to delete one FCM.
     * @example
     * // Delete one FCM
     * const FCM = await prisma.fCM.delete({
     *   where: {
     *     // ... filter to delete one FCM
     *   }
     * })
     * 
    **/
    delete<T extends FCMDeleteArgs>(
      args: SelectSubset<T, FCMDeleteArgs>
    ): CheckSelect<T, Prisma__FCMClient<FCM>, Prisma__FCMClient<FCMGetPayload<T>>>

    /**
     * Update one FCM.
     * @param {FCMUpdateArgs} args - Arguments to update one FCM.
     * @example
     * // Update one FCM
     * const fCM = await prisma.fCM.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends FCMUpdateArgs>(
      args: SelectSubset<T, FCMUpdateArgs>
    ): CheckSelect<T, Prisma__FCMClient<FCM>, Prisma__FCMClient<FCMGetPayload<T>>>

    /**
     * Delete zero or more FCMS.
     * @param {FCMDeleteManyArgs} args - Arguments to filter FCMS to delete.
     * @example
     * // Delete a few FCMS
     * const { count } = await prisma.fCM.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends FCMDeleteManyArgs>(
      args?: SelectSubset<T, FCMDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more FCMS.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FCMUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many FCMS
     * const fCM = await prisma.fCM.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends FCMUpdateManyArgs>(
      args: SelectSubset<T, FCMUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one FCM.
     * @param {FCMUpsertArgs} args - Arguments to update or create a FCM.
     * @example
     * // Update or create a FCM
     * const fCM = await prisma.fCM.upsert({
     *   create: {
     *     // ... data to create a FCM
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the FCM we want to update
     *   }
     * })
    **/
    upsert<T extends FCMUpsertArgs>(
      args: SelectSubset<T, FCMUpsertArgs>
    ): CheckSelect<T, Prisma__FCMClient<FCM>, Prisma__FCMClient<FCMGetPayload<T>>>

    /**
     * Count the number of FCMS.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FCMCountArgs} args - Arguments to filter FCMS to count.
     * @example
     * // Count the number of FCMS
     * const count = await prisma.fCM.count({
     *   where: {
     *     // ... the filter for the FCMS we want to count
     *   }
     * })
    **/
    count<T extends FCMCountArgs>(
      args?: Subset<T, FCMCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FCMCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a FCM.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FCMAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends FCMAggregateArgs>(args: Subset<T, FCMAggregateArgs>): PrismaPromise<GetFCMAggregateType<T>>

    /**
     * Group by FCM.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FCMGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends FCMGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FCMGroupByArgs['orderBy'] }
        : { orderBy?: FCMGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, FCMGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFCMGroupByPayload<T> : Promise<InputErrors>
  }

  /**
   * The delegate class that acts as a "Promise-like" for FCM.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__FCMClient<T> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    Audit<T extends AuditFindManyArgs = {}>(args?: Subset<T, AuditFindManyArgs>): CheckSelect<T, PrismaPromise<Array<Audit>>, PrismaPromise<Array<AuditGetPayload<T>>>>;

    Provider<T extends ProviderArgs = {}>(args?: Subset<T, ProviderArgs>): CheckSelect<T, Prisma__ProviderClient<Provider | null >, Prisma__ProviderClient<ProviderGetPayload<T> | null >>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }

  // Custom InputTypes

  /**
   * FCM findUnique
   */
  export type FCMFindUniqueArgs = {
    /**
     * Select specific fields to fetch from the FCM
     * 
    **/
    select?: FCMSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: FCMInclude | null
    /**
     * Throw an Error if a FCM can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which FCM to fetch.
     * 
    **/
    where: FCMWhereUniqueInput
  }


  /**
   * FCM findFirst
   */
  export type FCMFindFirstArgs = {
    /**
     * Select specific fields to fetch from the FCM
     * 
    **/
    select?: FCMSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: FCMInclude | null
    /**
     * Throw an Error if a FCM can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which FCM to fetch.
     * 
    **/
    where?: FCMWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FCMS to fetch.
     * 
    **/
    orderBy?: Enumerable<FCMOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FCMS.
     * 
    **/
    cursor?: FCMWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FCMS from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FCMS.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FCMS.
     * 
    **/
    distinct?: Enumerable<FCMScalarFieldEnum>
  }


  /**
   * FCM findMany
   */
  export type FCMFindManyArgs = {
    /**
     * Select specific fields to fetch from the FCM
     * 
    **/
    select?: FCMSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: FCMInclude | null
    /**
     * Filter, which FCMS to fetch.
     * 
    **/
    where?: FCMWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FCMS to fetch.
     * 
    **/
    orderBy?: Enumerable<FCMOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing FCMS.
     * 
    **/
    cursor?: FCMWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FCMS from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FCMS.
     * 
    **/
    skip?: number
    distinct?: Enumerable<FCMScalarFieldEnum>
  }


  /**
   * FCM create
   */
  export type FCMCreateArgs = {
    /**
     * Select specific fields to fetch from the FCM
     * 
    **/
    select?: FCMSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: FCMInclude | null
    /**
     * The data needed to create a FCM.
     * 
    **/
    data: XOR<FCMCreateInput, FCMUncheckedCreateInput>
  }


  /**
   * FCM createMany
   */
  export type FCMCreateManyArgs = {
    data: Enumerable<FCMCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * FCM update
   */
  export type FCMUpdateArgs = {
    /**
     * Select specific fields to fetch from the FCM
     * 
    **/
    select?: FCMSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: FCMInclude | null
    /**
     * The data needed to update a FCM.
     * 
    **/
    data: XOR<FCMUpdateInput, FCMUncheckedUpdateInput>
    /**
     * Choose, which FCM to update.
     * 
    **/
    where: FCMWhereUniqueInput
  }


  /**
   * FCM updateMany
   */
  export type FCMUpdateManyArgs = {
    data: XOR<FCMUpdateManyMutationInput, FCMUncheckedUpdateManyInput>
    where?: FCMWhereInput
  }


  /**
   * FCM upsert
   */
  export type FCMUpsertArgs = {
    /**
     * Select specific fields to fetch from the FCM
     * 
    **/
    select?: FCMSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: FCMInclude | null
    /**
     * The filter to search for the FCM to update in case it exists.
     * 
    **/
    where: FCMWhereUniqueInput
    /**
     * In case the FCM found by the `where` argument doesn't exist, create a new FCM with this data.
     * 
    **/
    create: XOR<FCMCreateInput, FCMUncheckedCreateInput>
    /**
     * In case the FCM was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<FCMUpdateInput, FCMUncheckedUpdateInput>
  }


  /**
   * FCM delete
   */
  export type FCMDeleteArgs = {
    /**
     * Select specific fields to fetch from the FCM
     * 
    **/
    select?: FCMSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: FCMInclude | null
    /**
     * Filter which FCM to delete.
     * 
    **/
    where: FCMWhereUniqueInput
  }


  /**
   * FCM deleteMany
   */
  export type FCMDeleteManyArgs = {
    where?: FCMWhereInput
  }


  /**
   * FCM without action
   */
  export type FCMArgs = {
    /**
     * Select specific fields to fetch from the FCM
     * 
    **/
    select?: FCMSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: FCMInclude | null
  }



  /**
   * Model Audit
   */


  export type AggregateAudit = {
    _count: AuditCountAggregateOutputType | null
    _avg: AuditAvgAggregateOutputType | null
    _sum: AuditSumAggregateOutputType | null
    _min: AuditMinAggregateOutputType | null
    _max: AuditMaxAggregateOutputType | null
  }

  export type AuditAvgAggregateOutputType = {
    id: number | null
    smsId: number | null
    fCMId: number | null
  }

  export type AuditSumAggregateOutputType = {
    id: bigint | null
    smsId: bigint | null
    fCMId: bigint | null
  }

  export type AuditMinAggregateOutputType = {
    createdAt: Date | null
    updatedAt: Date | null
    id: bigint | null
    smsId: bigint | null
    event: Event | null
    fCMId: bigint | null
  }

  export type AuditMaxAggregateOutputType = {
    createdAt: Date | null
    updatedAt: Date | null
    id: bigint | null
    smsId: bigint | null
    event: Event | null
    fCMId: bigint | null
  }

  export type AuditCountAggregateOutputType = {
    createdAt: number
    updatedAt: number
    id: number
    smsId: number
    event: number
    fCMId: number
    _all: number
  }


  export type AuditAvgAggregateInputType = {
    id?: true
    smsId?: true
    fCMId?: true
  }

  export type AuditSumAggregateInputType = {
    id?: true
    smsId?: true
    fCMId?: true
  }

  export type AuditMinAggregateInputType = {
    createdAt?: true
    updatedAt?: true
    id?: true
    smsId?: true
    event?: true
    fCMId?: true
  }

  export type AuditMaxAggregateInputType = {
    createdAt?: true
    updatedAt?: true
    id?: true
    smsId?: true
    event?: true
    fCMId?: true
  }

  export type AuditCountAggregateInputType = {
    createdAt?: true
    updatedAt?: true
    id?: true
    smsId?: true
    event?: true
    fCMId?: true
    _all?: true
  }

  export type AuditAggregateArgs = {
    /**
     * Filter which Audit to aggregate.
     * 
    **/
    where?: AuditWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Audits to fetch.
     * 
    **/
    orderBy?: Enumerable<AuditOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: AuditWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Audits from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Audits.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Audits
    **/
    _count?: true | AuditCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AuditAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AuditSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AuditMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AuditMaxAggregateInputType
  }

  export type GetAuditAggregateType<T extends AuditAggregateArgs> = {
        [P in keyof T & keyof AggregateAudit]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAudit[P]>
      : GetScalarType<T[P], AggregateAudit[P]>
  }




  export type AuditGroupByArgs = {
    where?: AuditWhereInput
    orderBy?: Enumerable<AuditOrderByWithAggregationInput>
    by: Array<AuditScalarFieldEnum>
    having?: AuditScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AuditCountAggregateInputType | true
    _avg?: AuditAvgAggregateInputType
    _sum?: AuditSumAggregateInputType
    _min?: AuditMinAggregateInputType
    _max?: AuditMaxAggregateInputType
  }


  export type AuditGroupByOutputType = {
    createdAt: Date
    updatedAt: Date
    id: bigint
    smsId: bigint
    event: Event
    fCMId: bigint | null
    _count: AuditCountAggregateOutputType | null
    _avg: AuditAvgAggregateOutputType | null
    _sum: AuditSumAggregateOutputType | null
    _min: AuditMinAggregateOutputType | null
    _max: AuditMaxAggregateOutputType | null
  }

  type GetAuditGroupByPayload<T extends AuditGroupByArgs> = Promise<
    Array<
      PickArray<AuditGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AuditGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AuditGroupByOutputType[P]>
            : GetScalarType<T[P], AuditGroupByOutputType[P]>
        }
      >
    >


  export type AuditSelect = {
    createdAt?: boolean
    updatedAt?: boolean
    id?: boolean
    smsId?: boolean
    sms?: boolean | SmsArgs
    event?: boolean
    FCM?: boolean | FCMArgs
    fCMId?: boolean
  }

  export type AuditInclude = {
    sms?: boolean | SmsArgs
    FCM?: boolean | FCMArgs
  }

  export type AuditGetPayload<
    S extends boolean | null | undefined | AuditArgs,
    U = keyof S
      > = S extends true
        ? Audit
    : S extends undefined
    ? never
    : S extends AuditArgs | AuditFindManyArgs
    ?'include' extends U
    ? Audit  & {
    [P in TrueKeys<S['include']>]: 
          P extends 'sms'
        ? SmsGetPayload<S['include'][P]> :
        P extends 'FCM'
        ? FCMGetPayload<S['include'][P]> | null : never
  } 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]: P extends keyof Audit ?Audit [P]
  : 
          P extends 'sms'
        ? SmsGetPayload<S['select'][P]> :
        P extends 'FCM'
        ? FCMGetPayload<S['select'][P]> | null : never
  } 
    : Audit
  : Audit


  type AuditCountArgs = Merge<
    Omit<AuditFindManyArgs, 'select' | 'include'> & {
      select?: AuditCountAggregateInputType | true
    }
  >

  export interface AuditDelegate<GlobalRejectSettings> {
    /**
     * Find zero or one Audit that matches the filter.
     * @param {AuditFindUniqueArgs} args - Arguments to find a Audit
     * @example
     * // Get one Audit
     * const audit = await prisma.audit.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends AuditFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, AuditFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Audit'> extends True ? CheckSelect<T, Prisma__AuditClient<Audit>, Prisma__AuditClient<AuditGetPayload<T>>> : CheckSelect<T, Prisma__AuditClient<Audit | null >, Prisma__AuditClient<AuditGetPayload<T> | null >>

    /**
     * Find the first Audit that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditFindFirstArgs} args - Arguments to find a Audit
     * @example
     * // Get one Audit
     * const audit = await prisma.audit.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends AuditFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, AuditFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Audit'> extends True ? CheckSelect<T, Prisma__AuditClient<Audit>, Prisma__AuditClient<AuditGetPayload<T>>> : CheckSelect<T, Prisma__AuditClient<Audit | null >, Prisma__AuditClient<AuditGetPayload<T> | null >>

    /**
     * Find zero or more Audits that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Audits
     * const audits = await prisma.audit.findMany()
     * 
     * // Get first 10 Audits
     * const audits = await prisma.audit.findMany({ take: 10 })
     * 
     * // Only select the `createdAt`
     * const auditWithCreatedAtOnly = await prisma.audit.findMany({ select: { createdAt: true } })
     * 
    **/
    findMany<T extends AuditFindManyArgs>(
      args?: SelectSubset<T, AuditFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<Audit>>, PrismaPromise<Array<AuditGetPayload<T>>>>

    /**
     * Create a Audit.
     * @param {AuditCreateArgs} args - Arguments to create a Audit.
     * @example
     * // Create one Audit
     * const Audit = await prisma.audit.create({
     *   data: {
     *     // ... data to create a Audit
     *   }
     * })
     * 
    **/
    create<T extends AuditCreateArgs>(
      args: SelectSubset<T, AuditCreateArgs>
    ): CheckSelect<T, Prisma__AuditClient<Audit>, Prisma__AuditClient<AuditGetPayload<T>>>

    /**
     * Create many Audits.
     *     @param {AuditCreateManyArgs} args - Arguments to create many Audits.
     *     @example
     *     // Create many Audits
     *     const audit = await prisma.audit.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends AuditCreateManyArgs>(
      args?: SelectSubset<T, AuditCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Audit.
     * @param {AuditDeleteArgs} args - Arguments to delete one Audit.
     * @example
     * // Delete one Audit
     * const Audit = await prisma.audit.delete({
     *   where: {
     *     // ... filter to delete one Audit
     *   }
     * })
     * 
    **/
    delete<T extends AuditDeleteArgs>(
      args: SelectSubset<T, AuditDeleteArgs>
    ): CheckSelect<T, Prisma__AuditClient<Audit>, Prisma__AuditClient<AuditGetPayload<T>>>

    /**
     * Update one Audit.
     * @param {AuditUpdateArgs} args - Arguments to update one Audit.
     * @example
     * // Update one Audit
     * const audit = await prisma.audit.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends AuditUpdateArgs>(
      args: SelectSubset<T, AuditUpdateArgs>
    ): CheckSelect<T, Prisma__AuditClient<Audit>, Prisma__AuditClient<AuditGetPayload<T>>>

    /**
     * Delete zero or more Audits.
     * @param {AuditDeleteManyArgs} args - Arguments to filter Audits to delete.
     * @example
     * // Delete a few Audits
     * const { count } = await prisma.audit.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends AuditDeleteManyArgs>(
      args?: SelectSubset<T, AuditDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Audits.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Audits
     * const audit = await prisma.audit.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends AuditUpdateManyArgs>(
      args: SelectSubset<T, AuditUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Audit.
     * @param {AuditUpsertArgs} args - Arguments to update or create a Audit.
     * @example
     * // Update or create a Audit
     * const audit = await prisma.audit.upsert({
     *   create: {
     *     // ... data to create a Audit
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Audit we want to update
     *   }
     * })
    **/
    upsert<T extends AuditUpsertArgs>(
      args: SelectSubset<T, AuditUpsertArgs>
    ): CheckSelect<T, Prisma__AuditClient<Audit>, Prisma__AuditClient<AuditGetPayload<T>>>

    /**
     * Count the number of Audits.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditCountArgs} args - Arguments to filter Audits to count.
     * @example
     * // Count the number of Audits
     * const count = await prisma.audit.count({
     *   where: {
     *     // ... the filter for the Audits we want to count
     *   }
     * })
    **/
    count<T extends AuditCountArgs>(
      args?: Subset<T, AuditCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AuditCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Audit.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AuditAggregateArgs>(args: Subset<T, AuditAggregateArgs>): PrismaPromise<GetAuditAggregateType<T>>

    /**
     * Group by Audit.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AuditGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AuditGroupByArgs['orderBy'] }
        : { orderBy?: AuditGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AuditGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAuditGroupByPayload<T> : Promise<InputErrors>
  }

  /**
   * The delegate class that acts as a "Promise-like" for Audit.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__AuditClient<T> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    sms<T extends SmsArgs = {}>(args?: Subset<T, SmsArgs>): CheckSelect<T, Prisma__SmsClient<Sms | null >, Prisma__SmsClient<SmsGetPayload<T> | null >>;

    FCM<T extends FCMArgs = {}>(args?: Subset<T, FCMArgs>): CheckSelect<T, Prisma__FCMClient<FCM | null >, Prisma__FCMClient<FCMGetPayload<T> | null >>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }

  // Custom InputTypes

  /**
   * Audit findUnique
   */
  export type AuditFindUniqueArgs = {
    /**
     * Select specific fields to fetch from the Audit
     * 
    **/
    select?: AuditSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: AuditInclude | null
    /**
     * Throw an Error if a Audit can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which Audit to fetch.
     * 
    **/
    where: AuditWhereUniqueInput
  }


  /**
   * Audit findFirst
   */
  export type AuditFindFirstArgs = {
    /**
     * Select specific fields to fetch from the Audit
     * 
    **/
    select?: AuditSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: AuditInclude | null
    /**
     * Throw an Error if a Audit can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which Audit to fetch.
     * 
    **/
    where?: AuditWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Audits to fetch.
     * 
    **/
    orderBy?: Enumerable<AuditOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Audits.
     * 
    **/
    cursor?: AuditWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Audits from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Audits.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Audits.
     * 
    **/
    distinct?: Enumerable<AuditScalarFieldEnum>
  }


  /**
   * Audit findMany
   */
  export type AuditFindManyArgs = {
    /**
     * Select specific fields to fetch from the Audit
     * 
    **/
    select?: AuditSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: AuditInclude | null
    /**
     * Filter, which Audits to fetch.
     * 
    **/
    where?: AuditWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Audits to fetch.
     * 
    **/
    orderBy?: Enumerable<AuditOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Audits.
     * 
    **/
    cursor?: AuditWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Audits from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Audits.
     * 
    **/
    skip?: number
    distinct?: Enumerable<AuditScalarFieldEnum>
  }


  /**
   * Audit create
   */
  export type AuditCreateArgs = {
    /**
     * Select specific fields to fetch from the Audit
     * 
    **/
    select?: AuditSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: AuditInclude | null
    /**
     * The data needed to create a Audit.
     * 
    **/
    data: XOR<AuditCreateInput, AuditUncheckedCreateInput>
  }


  /**
   * Audit createMany
   */
  export type AuditCreateManyArgs = {
    data: Enumerable<AuditCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Audit update
   */
  export type AuditUpdateArgs = {
    /**
     * Select specific fields to fetch from the Audit
     * 
    **/
    select?: AuditSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: AuditInclude | null
    /**
     * The data needed to update a Audit.
     * 
    **/
    data: XOR<AuditUpdateInput, AuditUncheckedUpdateInput>
    /**
     * Choose, which Audit to update.
     * 
    **/
    where: AuditWhereUniqueInput
  }


  /**
   * Audit updateMany
   */
  export type AuditUpdateManyArgs = {
    data: XOR<AuditUpdateManyMutationInput, AuditUncheckedUpdateManyInput>
    where?: AuditWhereInput
  }


  /**
   * Audit upsert
   */
  export type AuditUpsertArgs = {
    /**
     * Select specific fields to fetch from the Audit
     * 
    **/
    select?: AuditSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: AuditInclude | null
    /**
     * The filter to search for the Audit to update in case it exists.
     * 
    **/
    where: AuditWhereUniqueInput
    /**
     * In case the Audit found by the `where` argument doesn't exist, create a new Audit with this data.
     * 
    **/
    create: XOR<AuditCreateInput, AuditUncheckedCreateInput>
    /**
     * In case the Audit was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<AuditUpdateInput, AuditUncheckedUpdateInput>
  }


  /**
   * Audit delete
   */
  export type AuditDeleteArgs = {
    /**
     * Select specific fields to fetch from the Audit
     * 
    **/
    select?: AuditSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: AuditInclude | null
    /**
     * Filter which Audit to delete.
     * 
    **/
    where: AuditWhereUniqueInput
  }


  /**
   * Audit deleteMany
   */
  export type AuditDeleteManyArgs = {
    where?: AuditWhereInput
  }


  /**
   * Audit without action
   */
  export type AuditArgs = {
    /**
     * Select specific fields to fetch from the Audit
     * 
    **/
    select?: AuditSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: AuditInclude | null
  }



  /**
   * Enums
   */

  // Based on
  // https://github.com/microsoft/TypeScript/issues/3192#issuecomment-261720275

  export const ProviderScalarFieldEnum: {
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    id: 'id',
    channel: 'channel',
    providerName: 'providerName',
    config: 'config',
    unitCost: 'unitCost'
  };

  export type ProviderScalarFieldEnum = (typeof ProviderScalarFieldEnum)[keyof typeof ProviderScalarFieldEnum]


  export const SmsScalarFieldEnum: {
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    id: 'id',
    providerId: 'providerId',
    phone: 'phone',
    user: 'user',
    org: 'org',
    text: 'text',
    type: 'type',
    status: 'status',
    retries: 'retries',
    providerMessageId: 'providerMessageId',
    meta: 'meta'
  };

  export type SmsScalarFieldEnum = (typeof SmsScalarFieldEnum)[keyof typeof SmsScalarFieldEnum]


  export const FCMScalarFieldEnum: {
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    id: 'id',
    deviceId: 'deviceId',
    user: 'user',
    org: 'org',
    text: 'text',
    type: 'type',
    status: 'status',
    retries: 'retries',
    providerMessageId: 'providerMessageId',
    meta: 'meta',
    providerId: 'providerId'
  };

  export type FCMScalarFieldEnum = (typeof FCMScalarFieldEnum)[keyof typeof FCMScalarFieldEnum]


  export const AuditScalarFieldEnum: {
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    id: 'id',
    smsId: 'smsId',
    event: 'event',
    fCMId: 'fCMId'
  };

  export type AuditScalarFieldEnum = (typeof AuditScalarFieldEnum)[keyof typeof AuditScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const JsonNullValueInput: {
    JsonNull: 'JsonNull'
  };

  export type JsonNullValueInput = (typeof JsonNullValueInput)[keyof typeof JsonNullValueInput]


  export const NullableJsonNullValueInput: {
    DbNull: 'DbNull',
    JsonNull: 'JsonNull'
  };

  export type NullableJsonNullValueInput = (typeof NullableJsonNullValueInput)[keyof typeof NullableJsonNullValueInput]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const JsonNullValueFilter: {
    DbNull: 'DbNull',
    JsonNull: 'JsonNull',
    AnyNull: 'AnyNull'
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


  /**
   * Deep Input Types
   */


  export type ProviderWhereInput = {
    AND?: Enumerable<ProviderWhereInput>
    OR?: Enumerable<ProviderWhereInput>
    NOT?: Enumerable<ProviderWhereInput>
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
    id?: IntFilter | number
    channel?: StringFilter | string
    providerName?: EnumProviderNameFilter | ProviderName
    config?: JsonFilter
    unitCost?: FloatFilter | number
    Sms?: SmsListRelationFilter
    FCM?: FCMListRelationFilter
  }

  export type ProviderOrderByWithRelationInput = {
    createdAt?: SortOrder
    updatedAt?: SortOrder
    id?: SortOrder
    channel?: SortOrder
    providerName?: SortOrder
    config?: SortOrder
    unitCost?: SortOrder
    Sms?: SmsOrderByRelationAggregateInput
    FCM?: FCMOrderByRelationAggregateInput
  }

  export type ProviderWhereUniqueInput = {
    id?: number
  }

  export type ProviderOrderByWithAggregationInput = {
    createdAt?: SortOrder
    updatedAt?: SortOrder
    id?: SortOrder
    channel?: SortOrder
    providerName?: SortOrder
    config?: SortOrder
    unitCost?: SortOrder
    _count?: ProviderCountOrderByAggregateInput
    _avg?: ProviderAvgOrderByAggregateInput
    _max?: ProviderMaxOrderByAggregateInput
    _min?: ProviderMinOrderByAggregateInput
    _sum?: ProviderSumOrderByAggregateInput
  }

  export type ProviderScalarWhereWithAggregatesInput = {
    AND?: Enumerable<ProviderScalarWhereWithAggregatesInput>
    OR?: Enumerable<ProviderScalarWhereWithAggregatesInput>
    NOT?: Enumerable<ProviderScalarWhereWithAggregatesInput>
    createdAt?: DateTimeWithAggregatesFilter | Date | string
    updatedAt?: DateTimeWithAggregatesFilter | Date | string
    id?: IntWithAggregatesFilter | number
    channel?: StringWithAggregatesFilter | string
    providerName?: EnumProviderNameWithAggregatesFilter | ProviderName
    config?: JsonWithAggregatesFilter
    unitCost?: FloatWithAggregatesFilter | number
  }

  export type SmsWhereInput = {
    AND?: Enumerable<SmsWhereInput>
    OR?: Enumerable<SmsWhereInput>
    NOT?: Enumerable<SmsWhereInput>
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
    id?: BigIntFilter | bigint | number
    providerId?: IntFilter | number
    provider?: XOR<ProviderRelationFilter, ProviderWhereInput>
    phone?: StringFilter | string
    user?: StringFilter | string
    org?: StringFilter | string
    text?: StringFilter | string
    type?: EnumTextTypeFilter | TextType
    status?: EnumStatusFilter | Status
    retries?: IntFilter | number
    providerMessageId?: StringNullableFilter | string | null
    meta?: JsonNullableFilter
    Audit?: AuditListRelationFilter
  }

  export type SmsOrderByWithRelationInput = {
    createdAt?: SortOrder
    updatedAt?: SortOrder
    id?: SortOrder
    providerId?: SortOrder
    provider?: ProviderOrderByWithRelationInput
    phone?: SortOrder
    user?: SortOrder
    org?: SortOrder
    text?: SortOrder
    type?: SortOrder
    status?: SortOrder
    retries?: SortOrder
    providerMessageId?: SortOrder
    meta?: SortOrder
    Audit?: AuditOrderByRelationAggregateInput
  }

  export type SmsWhereUniqueInput = {
    id?: bigint | number
  }

  export type SmsOrderByWithAggregationInput = {
    createdAt?: SortOrder
    updatedAt?: SortOrder
    id?: SortOrder
    providerId?: SortOrder
    phone?: SortOrder
    user?: SortOrder
    org?: SortOrder
    text?: SortOrder
    type?: SortOrder
    status?: SortOrder
    retries?: SortOrder
    providerMessageId?: SortOrder
    meta?: SortOrder
    _count?: SmsCountOrderByAggregateInput
    _avg?: SmsAvgOrderByAggregateInput
    _max?: SmsMaxOrderByAggregateInput
    _min?: SmsMinOrderByAggregateInput
    _sum?: SmsSumOrderByAggregateInput
  }

  export type SmsScalarWhereWithAggregatesInput = {
    AND?: Enumerable<SmsScalarWhereWithAggregatesInput>
    OR?: Enumerable<SmsScalarWhereWithAggregatesInput>
    NOT?: Enumerable<SmsScalarWhereWithAggregatesInput>
    createdAt?: DateTimeWithAggregatesFilter | Date | string
    updatedAt?: DateTimeWithAggregatesFilter | Date | string
    id?: BigIntWithAggregatesFilter | bigint | number
    providerId?: IntWithAggregatesFilter | number
    phone?: StringWithAggregatesFilter | string
    user?: StringWithAggregatesFilter | string
    org?: StringWithAggregatesFilter | string
    text?: StringWithAggregatesFilter | string
    type?: EnumTextTypeWithAggregatesFilter | TextType
    status?: EnumStatusWithAggregatesFilter | Status
    retries?: IntWithAggregatesFilter | number
    providerMessageId?: StringNullableWithAggregatesFilter | string | null
    meta?: JsonNullableWithAggregatesFilter
  }

  export type FCMWhereInput = {
    AND?: Enumerable<FCMWhereInput>
    OR?: Enumerable<FCMWhereInput>
    NOT?: Enumerable<FCMWhereInput>
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
    id?: BigIntFilter | bigint | number
    deviceId?: StringFilter | string
    user?: StringFilter | string
    org?: StringFilter | string
    text?: StringFilter | string
    type?: EnumTextTypeFilter | TextType
    status?: EnumStatusFilter | Status
    retries?: IntFilter | number
    providerMessageId?: StringNullableFilter | string | null
    meta?: JsonNullableFilter
    Audit?: AuditListRelationFilter
    Provider?: XOR<ProviderRelationFilter, ProviderWhereInput> | null
    providerId?: IntNullableFilter | number | null
  }

  export type FCMOrderByWithRelationInput = {
    createdAt?: SortOrder
    updatedAt?: SortOrder
    id?: SortOrder
    deviceId?: SortOrder
    user?: SortOrder
    org?: SortOrder
    text?: SortOrder
    type?: SortOrder
    status?: SortOrder
    retries?: SortOrder
    providerMessageId?: SortOrder
    meta?: SortOrder
    Audit?: AuditOrderByRelationAggregateInput
    Provider?: ProviderOrderByWithRelationInput
    providerId?: SortOrder
  }

  export type FCMWhereUniqueInput = {
    id?: bigint | number
  }

  export type FCMOrderByWithAggregationInput = {
    createdAt?: SortOrder
    updatedAt?: SortOrder
    id?: SortOrder
    deviceId?: SortOrder
    user?: SortOrder
    org?: SortOrder
    text?: SortOrder
    type?: SortOrder
    status?: SortOrder
    retries?: SortOrder
    providerMessageId?: SortOrder
    meta?: SortOrder
    providerId?: SortOrder
    _count?: FCMCountOrderByAggregateInput
    _avg?: FCMAvgOrderByAggregateInput
    _max?: FCMMaxOrderByAggregateInput
    _min?: FCMMinOrderByAggregateInput
    _sum?: FCMSumOrderByAggregateInput
  }

  export type FCMScalarWhereWithAggregatesInput = {
    AND?: Enumerable<FCMScalarWhereWithAggregatesInput>
    OR?: Enumerable<FCMScalarWhereWithAggregatesInput>
    NOT?: Enumerable<FCMScalarWhereWithAggregatesInput>
    createdAt?: DateTimeWithAggregatesFilter | Date | string
    updatedAt?: DateTimeWithAggregatesFilter | Date | string
    id?: BigIntWithAggregatesFilter | bigint | number
    deviceId?: StringWithAggregatesFilter | string
    user?: StringWithAggregatesFilter | string
    org?: StringWithAggregatesFilter | string
    text?: StringWithAggregatesFilter | string
    type?: EnumTextTypeWithAggregatesFilter | TextType
    status?: EnumStatusWithAggregatesFilter | Status
    retries?: IntWithAggregatesFilter | number
    providerMessageId?: StringNullableWithAggregatesFilter | string | null
    meta?: JsonNullableWithAggregatesFilter
    providerId?: IntNullableWithAggregatesFilter | number | null
  }

  export type AuditWhereInput = {
    AND?: Enumerable<AuditWhereInput>
    OR?: Enumerable<AuditWhereInput>
    NOT?: Enumerable<AuditWhereInput>
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
    id?: BigIntFilter | bigint | number
    smsId?: BigIntFilter | bigint | number
    sms?: XOR<SmsRelationFilter, SmsWhereInput>
    event?: EnumEventFilter | Event
    FCM?: XOR<FCMRelationFilter, FCMWhereInput> | null
    fCMId?: BigIntNullableFilter | bigint | number | null
  }

  export type AuditOrderByWithRelationInput = {
    createdAt?: SortOrder
    updatedAt?: SortOrder
    id?: SortOrder
    smsId?: SortOrder
    sms?: SmsOrderByWithRelationInput
    event?: SortOrder
    FCM?: FCMOrderByWithRelationInput
    fCMId?: SortOrder
  }

  export type AuditWhereUniqueInput = {
    id?: bigint | number
  }

  export type AuditOrderByWithAggregationInput = {
    createdAt?: SortOrder
    updatedAt?: SortOrder
    id?: SortOrder
    smsId?: SortOrder
    event?: SortOrder
    fCMId?: SortOrder
    _count?: AuditCountOrderByAggregateInput
    _avg?: AuditAvgOrderByAggregateInput
    _max?: AuditMaxOrderByAggregateInput
    _min?: AuditMinOrderByAggregateInput
    _sum?: AuditSumOrderByAggregateInput
  }

  export type AuditScalarWhereWithAggregatesInput = {
    AND?: Enumerable<AuditScalarWhereWithAggregatesInput>
    OR?: Enumerable<AuditScalarWhereWithAggregatesInput>
    NOT?: Enumerable<AuditScalarWhereWithAggregatesInput>
    createdAt?: DateTimeWithAggregatesFilter | Date | string
    updatedAt?: DateTimeWithAggregatesFilter | Date | string
    id?: BigIntWithAggregatesFilter | bigint | number
    smsId?: BigIntWithAggregatesFilter | bigint | number
    event?: EnumEventWithAggregatesFilter | Event
    fCMId?: BigIntNullableWithAggregatesFilter | bigint | number | null
  }

  export type ProviderCreateInput = {
    createdAt?: Date | string
    updatedAt?: Date | string
    channel: string
    providerName: ProviderName
    config: JsonNullValueInput | InputJsonValue
    unitCost: number
    Sms?: SmsCreateNestedManyWithoutProviderInput
    FCM?: FCMCreateNestedManyWithoutProviderInput
  }

  export type ProviderUncheckedCreateInput = {
    createdAt?: Date | string
    updatedAt?: Date | string
    id?: number
    channel: string
    providerName: ProviderName
    config: JsonNullValueInput | InputJsonValue
    unitCost: number
    Sms?: SmsUncheckedCreateNestedManyWithoutProviderInput
    FCM?: FCMUncheckedCreateNestedManyWithoutProviderInput
  }

  export type ProviderUpdateInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    channel?: StringFieldUpdateOperationsInput | string
    providerName?: EnumProviderNameFieldUpdateOperationsInput | ProviderName
    config?: JsonNullValueInput | InputJsonValue
    unitCost?: FloatFieldUpdateOperationsInput | number
    Sms?: SmsUpdateManyWithoutProviderInput
    FCM?: FCMUpdateManyWithoutProviderInput
  }

  export type ProviderUncheckedUpdateInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    id?: IntFieldUpdateOperationsInput | number
    channel?: StringFieldUpdateOperationsInput | string
    providerName?: EnumProviderNameFieldUpdateOperationsInput | ProviderName
    config?: JsonNullValueInput | InputJsonValue
    unitCost?: FloatFieldUpdateOperationsInput | number
    Sms?: SmsUncheckedUpdateManyWithoutProviderInput
    FCM?: FCMUncheckedUpdateManyWithoutProviderInput
  }

  export type ProviderCreateManyInput = {
    createdAt?: Date | string
    updatedAt?: Date | string
    id?: number
    channel: string
    providerName: ProviderName
    config: JsonNullValueInput | InputJsonValue
    unitCost: number
  }

  export type ProviderUpdateManyMutationInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    channel?: StringFieldUpdateOperationsInput | string
    providerName?: EnumProviderNameFieldUpdateOperationsInput | ProviderName
    config?: JsonNullValueInput | InputJsonValue
    unitCost?: FloatFieldUpdateOperationsInput | number
  }

  export type ProviderUncheckedUpdateManyInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    id?: IntFieldUpdateOperationsInput | number
    channel?: StringFieldUpdateOperationsInput | string
    providerName?: EnumProviderNameFieldUpdateOperationsInput | ProviderName
    config?: JsonNullValueInput | InputJsonValue
    unitCost?: FloatFieldUpdateOperationsInput | number
  }

  export type SmsCreateInput = {
    createdAt?: Date | string
    updatedAt?: Date | string
    id?: bigint | number
    phone: string
    user: string
    org: string
    text: string
    type: TextType
    status?: Status
    retries?: number
    providerMessageId?: string | null
    meta?: NullableJsonNullValueInput | InputJsonValue
    provider: ProviderCreateNestedOneWithoutSmsInput
    Audit?: AuditCreateNestedManyWithoutSmsInput
  }

  export type SmsUncheckedCreateInput = {
    createdAt?: Date | string
    updatedAt?: Date | string
    id?: bigint | number
    providerId: number
    phone: string
    user: string
    org: string
    text: string
    type: TextType
    status?: Status
    retries?: number
    providerMessageId?: string | null
    meta?: NullableJsonNullValueInput | InputJsonValue
    Audit?: AuditUncheckedCreateNestedManyWithoutSmsInput
  }

  export type SmsUpdateInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    phone?: StringFieldUpdateOperationsInput | string
    user?: StringFieldUpdateOperationsInput | string
    org?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    type?: EnumTextTypeFieldUpdateOperationsInput | TextType
    status?: EnumStatusFieldUpdateOperationsInput | Status
    retries?: IntFieldUpdateOperationsInput | number
    providerMessageId?: NullableStringFieldUpdateOperationsInput | string | null
    meta?: NullableJsonNullValueInput | InputJsonValue
    provider?: ProviderUpdateOneRequiredWithoutSmsInput
    Audit?: AuditUpdateManyWithoutSmsInput
  }

  export type SmsUncheckedUpdateInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    providerId?: IntFieldUpdateOperationsInput | number
    phone?: StringFieldUpdateOperationsInput | string
    user?: StringFieldUpdateOperationsInput | string
    org?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    type?: EnumTextTypeFieldUpdateOperationsInput | TextType
    status?: EnumStatusFieldUpdateOperationsInput | Status
    retries?: IntFieldUpdateOperationsInput | number
    providerMessageId?: NullableStringFieldUpdateOperationsInput | string | null
    meta?: NullableJsonNullValueInput | InputJsonValue
    Audit?: AuditUncheckedUpdateManyWithoutSmsInput
  }

  export type SmsCreateManyInput = {
    createdAt?: Date | string
    updatedAt?: Date | string
    id?: bigint | number
    providerId: number
    phone: string
    user: string
    org: string
    text: string
    type: TextType
    status?: Status
    retries?: number
    providerMessageId?: string | null
    meta?: NullableJsonNullValueInput | InputJsonValue
  }

  export type SmsUpdateManyMutationInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    phone?: StringFieldUpdateOperationsInput | string
    user?: StringFieldUpdateOperationsInput | string
    org?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    type?: EnumTextTypeFieldUpdateOperationsInput | TextType
    status?: EnumStatusFieldUpdateOperationsInput | Status
    retries?: IntFieldUpdateOperationsInput | number
    providerMessageId?: NullableStringFieldUpdateOperationsInput | string | null
    meta?: NullableJsonNullValueInput | InputJsonValue
  }

  export type SmsUncheckedUpdateManyInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    providerId?: IntFieldUpdateOperationsInput | number
    phone?: StringFieldUpdateOperationsInput | string
    user?: StringFieldUpdateOperationsInput | string
    org?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    type?: EnumTextTypeFieldUpdateOperationsInput | TextType
    status?: EnumStatusFieldUpdateOperationsInput | Status
    retries?: IntFieldUpdateOperationsInput | number
    providerMessageId?: NullableStringFieldUpdateOperationsInput | string | null
    meta?: NullableJsonNullValueInput | InputJsonValue
  }

  export type FCMCreateInput = {
    createdAt?: Date | string
    updatedAt?: Date | string
    id?: bigint | number
    deviceId: string
    user: string
    org: string
    text: string
    type: TextType
    status?: Status
    retries?: number
    providerMessageId?: string | null
    meta?: NullableJsonNullValueInput | InputJsonValue
    Audit?: AuditCreateNestedManyWithoutFCMInput
    Provider?: ProviderCreateNestedOneWithoutFCMInput
  }

  export type FCMUncheckedCreateInput = {
    createdAt?: Date | string
    updatedAt?: Date | string
    id?: bigint | number
    deviceId: string
    user: string
    org: string
    text: string
    type: TextType
    status?: Status
    retries?: number
    providerMessageId?: string | null
    meta?: NullableJsonNullValueInput | InputJsonValue
    providerId?: number | null
    Audit?: AuditUncheckedCreateNestedManyWithoutFCMInput
  }

  export type FCMUpdateInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    deviceId?: StringFieldUpdateOperationsInput | string
    user?: StringFieldUpdateOperationsInput | string
    org?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    type?: EnumTextTypeFieldUpdateOperationsInput | TextType
    status?: EnumStatusFieldUpdateOperationsInput | Status
    retries?: IntFieldUpdateOperationsInput | number
    providerMessageId?: NullableStringFieldUpdateOperationsInput | string | null
    meta?: NullableJsonNullValueInput | InputJsonValue
    Audit?: AuditUpdateManyWithoutFCMInput
    Provider?: ProviderUpdateOneWithoutFCMInput
  }

  export type FCMUncheckedUpdateInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    deviceId?: StringFieldUpdateOperationsInput | string
    user?: StringFieldUpdateOperationsInput | string
    org?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    type?: EnumTextTypeFieldUpdateOperationsInput | TextType
    status?: EnumStatusFieldUpdateOperationsInput | Status
    retries?: IntFieldUpdateOperationsInput | number
    providerMessageId?: NullableStringFieldUpdateOperationsInput | string | null
    meta?: NullableJsonNullValueInput | InputJsonValue
    providerId?: NullableIntFieldUpdateOperationsInput | number | null
    Audit?: AuditUncheckedUpdateManyWithoutFCMInput
  }

  export type FCMCreateManyInput = {
    createdAt?: Date | string
    updatedAt?: Date | string
    id?: bigint | number
    deviceId: string
    user: string
    org: string
    text: string
    type: TextType
    status?: Status
    retries?: number
    providerMessageId?: string | null
    meta?: NullableJsonNullValueInput | InputJsonValue
    providerId?: number | null
  }

  export type FCMUpdateManyMutationInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    deviceId?: StringFieldUpdateOperationsInput | string
    user?: StringFieldUpdateOperationsInput | string
    org?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    type?: EnumTextTypeFieldUpdateOperationsInput | TextType
    status?: EnumStatusFieldUpdateOperationsInput | Status
    retries?: IntFieldUpdateOperationsInput | number
    providerMessageId?: NullableStringFieldUpdateOperationsInput | string | null
    meta?: NullableJsonNullValueInput | InputJsonValue
  }

  export type FCMUncheckedUpdateManyInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    deviceId?: StringFieldUpdateOperationsInput | string
    user?: StringFieldUpdateOperationsInput | string
    org?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    type?: EnumTextTypeFieldUpdateOperationsInput | TextType
    status?: EnumStatusFieldUpdateOperationsInput | Status
    retries?: IntFieldUpdateOperationsInput | number
    providerMessageId?: NullableStringFieldUpdateOperationsInput | string | null
    meta?: NullableJsonNullValueInput | InputJsonValue
    providerId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type AuditCreateInput = {
    createdAt?: Date | string
    updatedAt?: Date | string
    id?: bigint | number
    event: Event
    sms: SmsCreateNestedOneWithoutAuditInput
    FCM?: FCMCreateNestedOneWithoutAuditInput
  }

  export type AuditUncheckedCreateInput = {
    createdAt?: Date | string
    updatedAt?: Date | string
    id?: bigint | number
    smsId: bigint | number
    event: Event
    fCMId?: bigint | number | null
  }

  export type AuditUpdateInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    event?: EnumEventFieldUpdateOperationsInput | Event
    sms?: SmsUpdateOneRequiredWithoutAuditInput
    FCM?: FCMUpdateOneWithoutAuditInput
  }

  export type AuditUncheckedUpdateInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    smsId?: BigIntFieldUpdateOperationsInput | bigint | number
    event?: EnumEventFieldUpdateOperationsInput | Event
    fCMId?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
  }

  export type AuditCreateManyInput = {
    createdAt?: Date | string
    updatedAt?: Date | string
    id?: bigint | number
    smsId: bigint | number
    event: Event
    fCMId?: bigint | number | null
  }

  export type AuditUpdateManyMutationInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    event?: EnumEventFieldUpdateOperationsInput | Event
  }

  export type AuditUncheckedUpdateManyInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    smsId?: BigIntFieldUpdateOperationsInput | bigint | number
    event?: EnumEventFieldUpdateOperationsInput | Event
    fCMId?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
  }

  export type DateTimeFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string>
    notIn?: Enumerable<Date> | Enumerable<string>
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeFilter | Date | string
  }

  export type IntFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntFilter | number
  }

  export type StringFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    mode?: QueryMode
    not?: NestedStringFilter | string
  }

  export type EnumProviderNameFilter = {
    equals?: ProviderName
    in?: Enumerable<ProviderName>
    notIn?: Enumerable<ProviderName>
    not?: NestedEnumProviderNameFilter | ProviderName
  }
  export type JsonFilter = 
    | PatchUndefined<
        Either<Required<JsonFilterBase>, Exclude<keyof Required<JsonFilterBase>, 'path'>>,
        Required<JsonFilterBase>
      >
    | OptionalFlat<Omit<Required<JsonFilterBase>, 'path'>>

  export type JsonFilterBase = {
    equals?: JsonNullValueFilter | InputJsonValue
    not?: JsonNullValueFilter | InputJsonValue
  }

  export type FloatFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedFloatFilter | number
  }

  export type SmsListRelationFilter = {
    every?: SmsWhereInput
    some?: SmsWhereInput
    none?: SmsWhereInput
  }

  export type FCMListRelationFilter = {
    every?: FCMWhereInput
    some?: FCMWhereInput
    none?: FCMWhereInput
  }

  export type SmsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type FCMOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ProviderCountOrderByAggregateInput = {
    createdAt?: SortOrder
    updatedAt?: SortOrder
    id?: SortOrder
    channel?: SortOrder
    providerName?: SortOrder
    config?: SortOrder
    unitCost?: SortOrder
  }

  export type ProviderAvgOrderByAggregateInput = {
    id?: SortOrder
    unitCost?: SortOrder
  }

  export type ProviderMaxOrderByAggregateInput = {
    createdAt?: SortOrder
    updatedAt?: SortOrder
    id?: SortOrder
    channel?: SortOrder
    providerName?: SortOrder
    unitCost?: SortOrder
  }

  export type ProviderMinOrderByAggregateInput = {
    createdAt?: SortOrder
    updatedAt?: SortOrder
    id?: SortOrder
    channel?: SortOrder
    providerName?: SortOrder
    unitCost?: SortOrder
  }

  export type ProviderSumOrderByAggregateInput = {
    id?: SortOrder
    unitCost?: SortOrder
  }

  export type DateTimeWithAggregatesFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string>
    notIn?: Enumerable<Date> | Enumerable<string>
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeWithAggregatesFilter | Date | string
    _count?: NestedIntFilter
    _min?: NestedDateTimeFilter
    _max?: NestedDateTimeFilter
  }

  export type IntWithAggregatesFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntWithAggregatesFilter | number
    _count?: NestedIntFilter
    _avg?: NestedFloatFilter
    _sum?: NestedIntFilter
    _min?: NestedIntFilter
    _max?: NestedIntFilter
  }

  export type StringWithAggregatesFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter | string
    _count?: NestedIntFilter
    _min?: NestedStringFilter
    _max?: NestedStringFilter
  }

  export type EnumProviderNameWithAggregatesFilter = {
    equals?: ProviderName
    in?: Enumerable<ProviderName>
    notIn?: Enumerable<ProviderName>
    not?: NestedEnumProviderNameWithAggregatesFilter | ProviderName
    _count?: NestedIntFilter
    _min?: NestedEnumProviderNameFilter
    _max?: NestedEnumProviderNameFilter
  }
  export type JsonWithAggregatesFilter = 
    | PatchUndefined<
        Either<Required<JsonWithAggregatesFilterBase>, Exclude<keyof Required<JsonWithAggregatesFilterBase>, 'path'>>,
        Required<JsonWithAggregatesFilterBase>
      >
    | OptionalFlat<Omit<Required<JsonWithAggregatesFilterBase>, 'path'>>

  export type JsonWithAggregatesFilterBase = {
    equals?: JsonNullValueFilter | InputJsonValue
    not?: JsonNullValueFilter | InputJsonValue
    _count?: NestedIntFilter
    _min?: NestedJsonFilter
    _max?: NestedJsonFilter
  }

  export type FloatWithAggregatesFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedFloatWithAggregatesFilter | number
    _count?: NestedIntFilter
    _avg?: NestedFloatFilter
    _sum?: NestedFloatFilter
    _min?: NestedFloatFilter
    _max?: NestedFloatFilter
  }

  export type BigIntFilter = {
    equals?: bigint | number
    in?: Enumerable<bigint> | Enumerable<number>
    notIn?: Enumerable<bigint> | Enumerable<number>
    lt?: bigint | number
    lte?: bigint | number
    gt?: bigint | number
    gte?: bigint | number
    not?: NestedBigIntFilter | bigint | number
  }

  export type ProviderRelationFilter = {
    is?: ProviderWhereInput | null
    isNot?: ProviderWhereInput | null
  }

  export type EnumTextTypeFilter = {
    equals?: TextType
    in?: Enumerable<TextType>
    notIn?: Enumerable<TextType>
    not?: NestedEnumTextTypeFilter | TextType
  }

  export type EnumStatusFilter = {
    equals?: Status
    in?: Enumerable<Status>
    notIn?: Enumerable<Status>
    not?: NestedEnumStatusFilter | Status
  }

  export type StringNullableFilter = {
    equals?: string | null
    in?: Enumerable<string> | null
    notIn?: Enumerable<string> | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    mode?: QueryMode
    not?: NestedStringNullableFilter | string | null
  }
  export type JsonNullableFilter = 
    | PatchUndefined<
        Either<Required<JsonNullableFilterBase>, Exclude<keyof Required<JsonNullableFilterBase>, 'path'>>,
        Required<JsonNullableFilterBase>
      >
    | OptionalFlat<Omit<Required<JsonNullableFilterBase>, 'path'>>

  export type JsonNullableFilterBase = {
    equals?: JsonNullValueFilter | InputJsonValue
    not?: JsonNullValueFilter | InputJsonValue
  }

  export type AuditListRelationFilter = {
    every?: AuditWhereInput
    some?: AuditWhereInput
    none?: AuditWhereInput
  }

  export type AuditOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SmsCountOrderByAggregateInput = {
    createdAt?: SortOrder
    updatedAt?: SortOrder
    id?: SortOrder
    providerId?: SortOrder
    phone?: SortOrder
    user?: SortOrder
    org?: SortOrder
    text?: SortOrder
    type?: SortOrder
    status?: SortOrder
    retries?: SortOrder
    providerMessageId?: SortOrder
    meta?: SortOrder
  }

  export type SmsAvgOrderByAggregateInput = {
    id?: SortOrder
    providerId?: SortOrder
    retries?: SortOrder
  }

  export type SmsMaxOrderByAggregateInput = {
    createdAt?: SortOrder
    updatedAt?: SortOrder
    id?: SortOrder
    providerId?: SortOrder
    phone?: SortOrder
    user?: SortOrder
    org?: SortOrder
    text?: SortOrder
    type?: SortOrder
    status?: SortOrder
    retries?: SortOrder
    providerMessageId?: SortOrder
  }

  export type SmsMinOrderByAggregateInput = {
    createdAt?: SortOrder
    updatedAt?: SortOrder
    id?: SortOrder
    providerId?: SortOrder
    phone?: SortOrder
    user?: SortOrder
    org?: SortOrder
    text?: SortOrder
    type?: SortOrder
    status?: SortOrder
    retries?: SortOrder
    providerMessageId?: SortOrder
  }

  export type SmsSumOrderByAggregateInput = {
    id?: SortOrder
    providerId?: SortOrder
    retries?: SortOrder
  }

  export type BigIntWithAggregatesFilter = {
    equals?: bigint | number
    in?: Enumerable<bigint> | Enumerable<number>
    notIn?: Enumerable<bigint> | Enumerable<number>
    lt?: bigint | number
    lte?: bigint | number
    gt?: bigint | number
    gte?: bigint | number
    not?: NestedBigIntWithAggregatesFilter | bigint | number
    _count?: NestedIntFilter
    _avg?: NestedFloatFilter
    _sum?: NestedBigIntFilter
    _min?: NestedBigIntFilter
    _max?: NestedBigIntFilter
  }

  export type EnumTextTypeWithAggregatesFilter = {
    equals?: TextType
    in?: Enumerable<TextType>
    notIn?: Enumerable<TextType>
    not?: NestedEnumTextTypeWithAggregatesFilter | TextType
    _count?: NestedIntFilter
    _min?: NestedEnumTextTypeFilter
    _max?: NestedEnumTextTypeFilter
  }

  export type EnumStatusWithAggregatesFilter = {
    equals?: Status
    in?: Enumerable<Status>
    notIn?: Enumerable<Status>
    not?: NestedEnumStatusWithAggregatesFilter | Status
    _count?: NestedIntFilter
    _min?: NestedEnumStatusFilter
    _max?: NestedEnumStatusFilter
  }

  export type StringNullableWithAggregatesFilter = {
    equals?: string | null
    in?: Enumerable<string> | null
    notIn?: Enumerable<string> | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter | string | null
    _count?: NestedIntNullableFilter
    _min?: NestedStringNullableFilter
    _max?: NestedStringNullableFilter
  }
  export type JsonNullableWithAggregatesFilter = 
    | PatchUndefined<
        Either<Required<JsonNullableWithAggregatesFilterBase>, Exclude<keyof Required<JsonNullableWithAggregatesFilterBase>, 'path'>>,
        Required<JsonNullableWithAggregatesFilterBase>
      >
    | OptionalFlat<Omit<Required<JsonNullableWithAggregatesFilterBase>, 'path'>>

  export type JsonNullableWithAggregatesFilterBase = {
    equals?: JsonNullValueFilter | InputJsonValue
    not?: JsonNullValueFilter | InputJsonValue
    _count?: NestedIntNullableFilter
    _min?: NestedJsonNullableFilter
    _max?: NestedJsonNullableFilter
  }

  export type IntNullableFilter = {
    equals?: number | null
    in?: Enumerable<number> | null
    notIn?: Enumerable<number> | null
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntNullableFilter | number | null
  }

  export type FCMCountOrderByAggregateInput = {
    createdAt?: SortOrder
    updatedAt?: SortOrder
    id?: SortOrder
    deviceId?: SortOrder
    user?: SortOrder
    org?: SortOrder
    text?: SortOrder
    type?: SortOrder
    status?: SortOrder
    retries?: SortOrder
    providerMessageId?: SortOrder
    meta?: SortOrder
    providerId?: SortOrder
  }

  export type FCMAvgOrderByAggregateInput = {
    id?: SortOrder
    retries?: SortOrder
    providerId?: SortOrder
  }

  export type FCMMaxOrderByAggregateInput = {
    createdAt?: SortOrder
    updatedAt?: SortOrder
    id?: SortOrder
    deviceId?: SortOrder
    user?: SortOrder
    org?: SortOrder
    text?: SortOrder
    type?: SortOrder
    status?: SortOrder
    retries?: SortOrder
    providerMessageId?: SortOrder
    providerId?: SortOrder
  }

  export type FCMMinOrderByAggregateInput = {
    createdAt?: SortOrder
    updatedAt?: SortOrder
    id?: SortOrder
    deviceId?: SortOrder
    user?: SortOrder
    org?: SortOrder
    text?: SortOrder
    type?: SortOrder
    status?: SortOrder
    retries?: SortOrder
    providerMessageId?: SortOrder
    providerId?: SortOrder
  }

  export type FCMSumOrderByAggregateInput = {
    id?: SortOrder
    retries?: SortOrder
    providerId?: SortOrder
  }

  export type IntNullableWithAggregatesFilter = {
    equals?: number | null
    in?: Enumerable<number> | null
    notIn?: Enumerable<number> | null
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntNullableWithAggregatesFilter | number | null
    _count?: NestedIntNullableFilter
    _avg?: NestedFloatNullableFilter
    _sum?: NestedIntNullableFilter
    _min?: NestedIntNullableFilter
    _max?: NestedIntNullableFilter
  }

  export type SmsRelationFilter = {
    is?: SmsWhereInput
    isNot?: SmsWhereInput
  }

  export type EnumEventFilter = {
    equals?: Event
    in?: Enumerable<Event>
    notIn?: Enumerable<Event>
    not?: NestedEnumEventFilter | Event
  }

  export type FCMRelationFilter = {
    is?: FCMWhereInput | null
    isNot?: FCMWhereInput | null
  }

  export type BigIntNullableFilter = {
    equals?: bigint | number | null
    in?: Enumerable<bigint> | Enumerable<number> | null
    notIn?: Enumerable<bigint> | Enumerable<number> | null
    lt?: bigint | number
    lte?: bigint | number
    gt?: bigint | number
    gte?: bigint | number
    not?: NestedBigIntNullableFilter | bigint | number | null
  }

  export type AuditCountOrderByAggregateInput = {
    createdAt?: SortOrder
    updatedAt?: SortOrder
    id?: SortOrder
    smsId?: SortOrder
    event?: SortOrder
    fCMId?: SortOrder
  }

  export type AuditAvgOrderByAggregateInput = {
    id?: SortOrder
    smsId?: SortOrder
    fCMId?: SortOrder
  }

  export type AuditMaxOrderByAggregateInput = {
    createdAt?: SortOrder
    updatedAt?: SortOrder
    id?: SortOrder
    smsId?: SortOrder
    event?: SortOrder
    fCMId?: SortOrder
  }

  export type AuditMinOrderByAggregateInput = {
    createdAt?: SortOrder
    updatedAt?: SortOrder
    id?: SortOrder
    smsId?: SortOrder
    event?: SortOrder
    fCMId?: SortOrder
  }

  export type AuditSumOrderByAggregateInput = {
    id?: SortOrder
    smsId?: SortOrder
    fCMId?: SortOrder
  }

  export type EnumEventWithAggregatesFilter = {
    equals?: Event
    in?: Enumerable<Event>
    notIn?: Enumerable<Event>
    not?: NestedEnumEventWithAggregatesFilter | Event
    _count?: NestedIntFilter
    _min?: NestedEnumEventFilter
    _max?: NestedEnumEventFilter
  }

  export type BigIntNullableWithAggregatesFilter = {
    equals?: bigint | number | null
    in?: Enumerable<bigint> | Enumerable<number> | null
    notIn?: Enumerable<bigint> | Enumerable<number> | null
    lt?: bigint | number
    lte?: bigint | number
    gt?: bigint | number
    gte?: bigint | number
    not?: NestedBigIntNullableWithAggregatesFilter | bigint | number | null
    _count?: NestedIntNullableFilter
    _avg?: NestedFloatNullableFilter
    _sum?: NestedBigIntNullableFilter
    _min?: NestedBigIntNullableFilter
    _max?: NestedBigIntNullableFilter
  }

  export type SmsCreateNestedManyWithoutProviderInput = {
    create?: XOR<Enumerable<SmsCreateWithoutProviderInput>, Enumerable<SmsUncheckedCreateWithoutProviderInput>>
    connectOrCreate?: Enumerable<SmsCreateOrConnectWithoutProviderInput>
    createMany?: SmsCreateManyProviderInputEnvelope
    connect?: Enumerable<SmsWhereUniqueInput>
  }

  export type FCMCreateNestedManyWithoutProviderInput = {
    create?: XOR<Enumerable<FCMCreateWithoutProviderInput>, Enumerable<FCMUncheckedCreateWithoutProviderInput>>
    connectOrCreate?: Enumerable<FCMCreateOrConnectWithoutProviderInput>
    createMany?: FCMCreateManyProviderInputEnvelope
    connect?: Enumerable<FCMWhereUniqueInput>
  }

  export type SmsUncheckedCreateNestedManyWithoutProviderInput = {
    create?: XOR<Enumerable<SmsCreateWithoutProviderInput>, Enumerable<SmsUncheckedCreateWithoutProviderInput>>
    connectOrCreate?: Enumerable<SmsCreateOrConnectWithoutProviderInput>
    createMany?: SmsCreateManyProviderInputEnvelope
    connect?: Enumerable<SmsWhereUniqueInput>
  }

  export type FCMUncheckedCreateNestedManyWithoutProviderInput = {
    create?: XOR<Enumerable<FCMCreateWithoutProviderInput>, Enumerable<FCMUncheckedCreateWithoutProviderInput>>
    connectOrCreate?: Enumerable<FCMCreateOrConnectWithoutProviderInput>
    createMany?: FCMCreateManyProviderInputEnvelope
    connect?: Enumerable<FCMWhereUniqueInput>
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type EnumProviderNameFieldUpdateOperationsInput = {
    set?: ProviderName
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type SmsUpdateManyWithoutProviderInput = {
    create?: XOR<Enumerable<SmsCreateWithoutProviderInput>, Enumerable<SmsUncheckedCreateWithoutProviderInput>>
    connectOrCreate?: Enumerable<SmsCreateOrConnectWithoutProviderInput>
    upsert?: Enumerable<SmsUpsertWithWhereUniqueWithoutProviderInput>
    createMany?: SmsCreateManyProviderInputEnvelope
    set?: Enumerable<SmsWhereUniqueInput>
    disconnect?: Enumerable<SmsWhereUniqueInput>
    delete?: Enumerable<SmsWhereUniqueInput>
    connect?: Enumerable<SmsWhereUniqueInput>
    update?: Enumerable<SmsUpdateWithWhereUniqueWithoutProviderInput>
    updateMany?: Enumerable<SmsUpdateManyWithWhereWithoutProviderInput>
    deleteMany?: Enumerable<SmsScalarWhereInput>
  }

  export type FCMUpdateManyWithoutProviderInput = {
    create?: XOR<Enumerable<FCMCreateWithoutProviderInput>, Enumerable<FCMUncheckedCreateWithoutProviderInput>>
    connectOrCreate?: Enumerable<FCMCreateOrConnectWithoutProviderInput>
    upsert?: Enumerable<FCMUpsertWithWhereUniqueWithoutProviderInput>
    createMany?: FCMCreateManyProviderInputEnvelope
    set?: Enumerable<FCMWhereUniqueInput>
    disconnect?: Enumerable<FCMWhereUniqueInput>
    delete?: Enumerable<FCMWhereUniqueInput>
    connect?: Enumerable<FCMWhereUniqueInput>
    update?: Enumerable<FCMUpdateWithWhereUniqueWithoutProviderInput>
    updateMany?: Enumerable<FCMUpdateManyWithWhereWithoutProviderInput>
    deleteMany?: Enumerable<FCMScalarWhereInput>
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type SmsUncheckedUpdateManyWithoutProviderInput = {
    create?: XOR<Enumerable<SmsCreateWithoutProviderInput>, Enumerable<SmsUncheckedCreateWithoutProviderInput>>
    connectOrCreate?: Enumerable<SmsCreateOrConnectWithoutProviderInput>
    upsert?: Enumerable<SmsUpsertWithWhereUniqueWithoutProviderInput>
    createMany?: SmsCreateManyProviderInputEnvelope
    set?: Enumerable<SmsWhereUniqueInput>
    disconnect?: Enumerable<SmsWhereUniqueInput>
    delete?: Enumerable<SmsWhereUniqueInput>
    connect?: Enumerable<SmsWhereUniqueInput>
    update?: Enumerable<SmsUpdateWithWhereUniqueWithoutProviderInput>
    updateMany?: Enumerable<SmsUpdateManyWithWhereWithoutProviderInput>
    deleteMany?: Enumerable<SmsScalarWhereInput>
  }

  export type FCMUncheckedUpdateManyWithoutProviderInput = {
    create?: XOR<Enumerable<FCMCreateWithoutProviderInput>, Enumerable<FCMUncheckedCreateWithoutProviderInput>>
    connectOrCreate?: Enumerable<FCMCreateOrConnectWithoutProviderInput>
    upsert?: Enumerable<FCMUpsertWithWhereUniqueWithoutProviderInput>
    createMany?: FCMCreateManyProviderInputEnvelope
    set?: Enumerable<FCMWhereUniqueInput>
    disconnect?: Enumerable<FCMWhereUniqueInput>
    delete?: Enumerable<FCMWhereUniqueInput>
    connect?: Enumerable<FCMWhereUniqueInput>
    update?: Enumerable<FCMUpdateWithWhereUniqueWithoutProviderInput>
    updateMany?: Enumerable<FCMUpdateManyWithWhereWithoutProviderInput>
    deleteMany?: Enumerable<FCMScalarWhereInput>
  }

  export type ProviderCreateNestedOneWithoutSmsInput = {
    create?: XOR<ProviderCreateWithoutSmsInput, ProviderUncheckedCreateWithoutSmsInput>
    connectOrCreate?: ProviderCreateOrConnectWithoutSmsInput
    connect?: ProviderWhereUniqueInput
  }

  export type AuditCreateNestedManyWithoutSmsInput = {
    create?: XOR<Enumerable<AuditCreateWithoutSmsInput>, Enumerable<AuditUncheckedCreateWithoutSmsInput>>
    connectOrCreate?: Enumerable<AuditCreateOrConnectWithoutSmsInput>
    createMany?: AuditCreateManySmsInputEnvelope
    connect?: Enumerable<AuditWhereUniqueInput>
  }

  export type AuditUncheckedCreateNestedManyWithoutSmsInput = {
    create?: XOR<Enumerable<AuditCreateWithoutSmsInput>, Enumerable<AuditUncheckedCreateWithoutSmsInput>>
    connectOrCreate?: Enumerable<AuditCreateOrConnectWithoutSmsInput>
    createMany?: AuditCreateManySmsInputEnvelope
    connect?: Enumerable<AuditWhereUniqueInput>
  }

  export type BigIntFieldUpdateOperationsInput = {
    set?: bigint | number
    increment?: bigint | number
    decrement?: bigint | number
    multiply?: bigint | number
    divide?: bigint | number
  }

  export type EnumTextTypeFieldUpdateOperationsInput = {
    set?: TextType
  }

  export type EnumStatusFieldUpdateOperationsInput = {
    set?: Status
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type ProviderUpdateOneRequiredWithoutSmsInput = {
    create?: XOR<ProviderCreateWithoutSmsInput, ProviderUncheckedCreateWithoutSmsInput>
    connectOrCreate?: ProviderCreateOrConnectWithoutSmsInput
    upsert?: ProviderUpsertWithoutSmsInput
    connect?: ProviderWhereUniqueInput
    update?: XOR<ProviderUpdateWithoutSmsInput, ProviderUncheckedUpdateWithoutSmsInput>
  }

  export type AuditUpdateManyWithoutSmsInput = {
    create?: XOR<Enumerable<AuditCreateWithoutSmsInput>, Enumerable<AuditUncheckedCreateWithoutSmsInput>>
    connectOrCreate?: Enumerable<AuditCreateOrConnectWithoutSmsInput>
    upsert?: Enumerable<AuditUpsertWithWhereUniqueWithoutSmsInput>
    createMany?: AuditCreateManySmsInputEnvelope
    set?: Enumerable<AuditWhereUniqueInput>
    disconnect?: Enumerable<AuditWhereUniqueInput>
    delete?: Enumerable<AuditWhereUniqueInput>
    connect?: Enumerable<AuditWhereUniqueInput>
    update?: Enumerable<AuditUpdateWithWhereUniqueWithoutSmsInput>
    updateMany?: Enumerable<AuditUpdateManyWithWhereWithoutSmsInput>
    deleteMany?: Enumerable<AuditScalarWhereInput>
  }

  export type AuditUncheckedUpdateManyWithoutSmsInput = {
    create?: XOR<Enumerable<AuditCreateWithoutSmsInput>, Enumerable<AuditUncheckedCreateWithoutSmsInput>>
    connectOrCreate?: Enumerable<AuditCreateOrConnectWithoutSmsInput>
    upsert?: Enumerable<AuditUpsertWithWhereUniqueWithoutSmsInput>
    createMany?: AuditCreateManySmsInputEnvelope
    set?: Enumerable<AuditWhereUniqueInput>
    disconnect?: Enumerable<AuditWhereUniqueInput>
    delete?: Enumerable<AuditWhereUniqueInput>
    connect?: Enumerable<AuditWhereUniqueInput>
    update?: Enumerable<AuditUpdateWithWhereUniqueWithoutSmsInput>
    updateMany?: Enumerable<AuditUpdateManyWithWhereWithoutSmsInput>
    deleteMany?: Enumerable<AuditScalarWhereInput>
  }

  export type AuditCreateNestedManyWithoutFCMInput = {
    create?: XOR<Enumerable<AuditCreateWithoutFCMInput>, Enumerable<AuditUncheckedCreateWithoutFCMInput>>
    connectOrCreate?: Enumerable<AuditCreateOrConnectWithoutFCMInput>
    createMany?: AuditCreateManyFCMInputEnvelope
    connect?: Enumerable<AuditWhereUniqueInput>
  }

  export type ProviderCreateNestedOneWithoutFCMInput = {
    create?: XOR<ProviderCreateWithoutFCMInput, ProviderUncheckedCreateWithoutFCMInput>
    connectOrCreate?: ProviderCreateOrConnectWithoutFCMInput
    connect?: ProviderWhereUniqueInput
  }

  export type AuditUncheckedCreateNestedManyWithoutFCMInput = {
    create?: XOR<Enumerable<AuditCreateWithoutFCMInput>, Enumerable<AuditUncheckedCreateWithoutFCMInput>>
    connectOrCreate?: Enumerable<AuditCreateOrConnectWithoutFCMInput>
    createMany?: AuditCreateManyFCMInputEnvelope
    connect?: Enumerable<AuditWhereUniqueInput>
  }

  export type AuditUpdateManyWithoutFCMInput = {
    create?: XOR<Enumerable<AuditCreateWithoutFCMInput>, Enumerable<AuditUncheckedCreateWithoutFCMInput>>
    connectOrCreate?: Enumerable<AuditCreateOrConnectWithoutFCMInput>
    upsert?: Enumerable<AuditUpsertWithWhereUniqueWithoutFCMInput>
    createMany?: AuditCreateManyFCMInputEnvelope
    set?: Enumerable<AuditWhereUniqueInput>
    disconnect?: Enumerable<AuditWhereUniqueInput>
    delete?: Enumerable<AuditWhereUniqueInput>
    connect?: Enumerable<AuditWhereUniqueInput>
    update?: Enumerable<AuditUpdateWithWhereUniqueWithoutFCMInput>
    updateMany?: Enumerable<AuditUpdateManyWithWhereWithoutFCMInput>
    deleteMany?: Enumerable<AuditScalarWhereInput>
  }

  export type ProviderUpdateOneWithoutFCMInput = {
    create?: XOR<ProviderCreateWithoutFCMInput, ProviderUncheckedCreateWithoutFCMInput>
    connectOrCreate?: ProviderCreateOrConnectWithoutFCMInput
    upsert?: ProviderUpsertWithoutFCMInput
    disconnect?: boolean
    delete?: boolean
    connect?: ProviderWhereUniqueInput
    update?: XOR<ProviderUpdateWithoutFCMInput, ProviderUncheckedUpdateWithoutFCMInput>
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type AuditUncheckedUpdateManyWithoutFCMInput = {
    create?: XOR<Enumerable<AuditCreateWithoutFCMInput>, Enumerable<AuditUncheckedCreateWithoutFCMInput>>
    connectOrCreate?: Enumerable<AuditCreateOrConnectWithoutFCMInput>
    upsert?: Enumerable<AuditUpsertWithWhereUniqueWithoutFCMInput>
    createMany?: AuditCreateManyFCMInputEnvelope
    set?: Enumerable<AuditWhereUniqueInput>
    disconnect?: Enumerable<AuditWhereUniqueInput>
    delete?: Enumerable<AuditWhereUniqueInput>
    connect?: Enumerable<AuditWhereUniqueInput>
    update?: Enumerable<AuditUpdateWithWhereUniqueWithoutFCMInput>
    updateMany?: Enumerable<AuditUpdateManyWithWhereWithoutFCMInput>
    deleteMany?: Enumerable<AuditScalarWhereInput>
  }

  export type SmsCreateNestedOneWithoutAuditInput = {
    create?: XOR<SmsCreateWithoutAuditInput, SmsUncheckedCreateWithoutAuditInput>
    connectOrCreate?: SmsCreateOrConnectWithoutAuditInput
    connect?: SmsWhereUniqueInput
  }

  export type FCMCreateNestedOneWithoutAuditInput = {
    create?: XOR<FCMCreateWithoutAuditInput, FCMUncheckedCreateWithoutAuditInput>
    connectOrCreate?: FCMCreateOrConnectWithoutAuditInput
    connect?: FCMWhereUniqueInput
  }

  export type EnumEventFieldUpdateOperationsInput = {
    set?: Event
  }

  export type SmsUpdateOneRequiredWithoutAuditInput = {
    create?: XOR<SmsCreateWithoutAuditInput, SmsUncheckedCreateWithoutAuditInput>
    connectOrCreate?: SmsCreateOrConnectWithoutAuditInput
    upsert?: SmsUpsertWithoutAuditInput
    connect?: SmsWhereUniqueInput
    update?: XOR<SmsUpdateWithoutAuditInput, SmsUncheckedUpdateWithoutAuditInput>
  }

  export type FCMUpdateOneWithoutAuditInput = {
    create?: XOR<FCMCreateWithoutAuditInput, FCMUncheckedCreateWithoutAuditInput>
    connectOrCreate?: FCMCreateOrConnectWithoutAuditInput
    upsert?: FCMUpsertWithoutAuditInput
    disconnect?: boolean
    delete?: boolean
    connect?: FCMWhereUniqueInput
    update?: XOR<FCMUpdateWithoutAuditInput, FCMUncheckedUpdateWithoutAuditInput>
  }

  export type NullableBigIntFieldUpdateOperationsInput = {
    set?: bigint | number | null
    increment?: bigint | number
    decrement?: bigint | number
    multiply?: bigint | number
    divide?: bigint | number
  }

  export type NestedDateTimeFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string>
    notIn?: Enumerable<Date> | Enumerable<string>
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeFilter | Date | string
  }

  export type NestedIntFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntFilter | number
  }

  export type NestedStringFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringFilter | string
  }

  export type NestedEnumProviderNameFilter = {
    equals?: ProviderName
    in?: Enumerable<ProviderName>
    notIn?: Enumerable<ProviderName>
    not?: NestedEnumProviderNameFilter | ProviderName
  }

  export type NestedFloatFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedFloatFilter | number
  }

  export type NestedDateTimeWithAggregatesFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string>
    notIn?: Enumerable<Date> | Enumerable<string>
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeWithAggregatesFilter | Date | string
    _count?: NestedIntFilter
    _min?: NestedDateTimeFilter
    _max?: NestedDateTimeFilter
  }

  export type NestedIntWithAggregatesFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntWithAggregatesFilter | number
    _count?: NestedIntFilter
    _avg?: NestedFloatFilter
    _sum?: NestedIntFilter
    _min?: NestedIntFilter
    _max?: NestedIntFilter
  }

  export type NestedStringWithAggregatesFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringWithAggregatesFilter | string
    _count?: NestedIntFilter
    _min?: NestedStringFilter
    _max?: NestedStringFilter
  }

  export type NestedEnumProviderNameWithAggregatesFilter = {
    equals?: ProviderName
    in?: Enumerable<ProviderName>
    notIn?: Enumerable<ProviderName>
    not?: NestedEnumProviderNameWithAggregatesFilter | ProviderName
    _count?: NestedIntFilter
    _min?: NestedEnumProviderNameFilter
    _max?: NestedEnumProviderNameFilter
  }
  export type NestedJsonFilter = 
    | PatchUndefined<
        Either<Required<NestedJsonFilterBase>, Exclude<keyof Required<NestedJsonFilterBase>, 'path'>>,
        Required<NestedJsonFilterBase>
      >
    | OptionalFlat<Omit<Required<NestedJsonFilterBase>, 'path'>>

  export type NestedJsonFilterBase = {
    equals?: JsonNullValueFilter | InputJsonValue
    not?: JsonNullValueFilter | InputJsonValue
  }

  export type NestedFloatWithAggregatesFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedFloatWithAggregatesFilter | number
    _count?: NestedIntFilter
    _avg?: NestedFloatFilter
    _sum?: NestedFloatFilter
    _min?: NestedFloatFilter
    _max?: NestedFloatFilter
  }

  export type NestedBigIntFilter = {
    equals?: bigint | number
    in?: Enumerable<bigint> | Enumerable<number>
    notIn?: Enumerable<bigint> | Enumerable<number>
    lt?: bigint | number
    lte?: bigint | number
    gt?: bigint | number
    gte?: bigint | number
    not?: NestedBigIntFilter | bigint | number
  }

  export type NestedEnumTextTypeFilter = {
    equals?: TextType
    in?: Enumerable<TextType>
    notIn?: Enumerable<TextType>
    not?: NestedEnumTextTypeFilter | TextType
  }

  export type NestedEnumStatusFilter = {
    equals?: Status
    in?: Enumerable<Status>
    notIn?: Enumerable<Status>
    not?: NestedEnumStatusFilter | Status
  }

  export type NestedStringNullableFilter = {
    equals?: string | null
    in?: Enumerable<string> | null
    notIn?: Enumerable<string> | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringNullableFilter | string | null
  }

  export type NestedBigIntWithAggregatesFilter = {
    equals?: bigint | number
    in?: Enumerable<bigint> | Enumerable<number>
    notIn?: Enumerable<bigint> | Enumerable<number>
    lt?: bigint | number
    lte?: bigint | number
    gt?: bigint | number
    gte?: bigint | number
    not?: NestedBigIntWithAggregatesFilter | bigint | number
    _count?: NestedIntFilter
    _avg?: NestedFloatFilter
    _sum?: NestedBigIntFilter
    _min?: NestedBigIntFilter
    _max?: NestedBigIntFilter
  }

  export type NestedEnumTextTypeWithAggregatesFilter = {
    equals?: TextType
    in?: Enumerable<TextType>
    notIn?: Enumerable<TextType>
    not?: NestedEnumTextTypeWithAggregatesFilter | TextType
    _count?: NestedIntFilter
    _min?: NestedEnumTextTypeFilter
    _max?: NestedEnumTextTypeFilter
  }

  export type NestedEnumStatusWithAggregatesFilter = {
    equals?: Status
    in?: Enumerable<Status>
    notIn?: Enumerable<Status>
    not?: NestedEnumStatusWithAggregatesFilter | Status
    _count?: NestedIntFilter
    _min?: NestedEnumStatusFilter
    _max?: NestedEnumStatusFilter
  }

  export type NestedStringNullableWithAggregatesFilter = {
    equals?: string | null
    in?: Enumerable<string> | null
    notIn?: Enumerable<string> | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringNullableWithAggregatesFilter | string | null
    _count?: NestedIntNullableFilter
    _min?: NestedStringNullableFilter
    _max?: NestedStringNullableFilter
  }

  export type NestedIntNullableFilter = {
    equals?: number | null
    in?: Enumerable<number> | null
    notIn?: Enumerable<number> | null
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntNullableFilter | number | null
  }
  export type NestedJsonNullableFilter = 
    | PatchUndefined<
        Either<Required<NestedJsonNullableFilterBase>, Exclude<keyof Required<NestedJsonNullableFilterBase>, 'path'>>,
        Required<NestedJsonNullableFilterBase>
      >
    | OptionalFlat<Omit<Required<NestedJsonNullableFilterBase>, 'path'>>

  export type NestedJsonNullableFilterBase = {
    equals?: JsonNullValueFilter | InputJsonValue
    not?: JsonNullValueFilter | InputJsonValue
  }

  export type NestedIntNullableWithAggregatesFilter = {
    equals?: number | null
    in?: Enumerable<number> | null
    notIn?: Enumerable<number> | null
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntNullableWithAggregatesFilter | number | null
    _count?: NestedIntNullableFilter
    _avg?: NestedFloatNullableFilter
    _sum?: NestedIntNullableFilter
    _min?: NestedIntNullableFilter
    _max?: NestedIntNullableFilter
  }

  export type NestedFloatNullableFilter = {
    equals?: number | null
    in?: Enumerable<number> | null
    notIn?: Enumerable<number> | null
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedFloatNullableFilter | number | null
  }

  export type NestedEnumEventFilter = {
    equals?: Event
    in?: Enumerable<Event>
    notIn?: Enumerable<Event>
    not?: NestedEnumEventFilter | Event
  }

  export type NestedBigIntNullableFilter = {
    equals?: bigint | number | null
    in?: Enumerable<bigint> | Enumerable<number> | null
    notIn?: Enumerable<bigint> | Enumerable<number> | null
    lt?: bigint | number
    lte?: bigint | number
    gt?: bigint | number
    gte?: bigint | number
    not?: NestedBigIntNullableFilter | bigint | number | null
  }

  export type NestedEnumEventWithAggregatesFilter = {
    equals?: Event
    in?: Enumerable<Event>
    notIn?: Enumerable<Event>
    not?: NestedEnumEventWithAggregatesFilter | Event
    _count?: NestedIntFilter
    _min?: NestedEnumEventFilter
    _max?: NestedEnumEventFilter
  }

  export type NestedBigIntNullableWithAggregatesFilter = {
    equals?: bigint | number | null
    in?: Enumerable<bigint> | Enumerable<number> | null
    notIn?: Enumerable<bigint> | Enumerable<number> | null
    lt?: bigint | number
    lte?: bigint | number
    gt?: bigint | number
    gte?: bigint | number
    not?: NestedBigIntNullableWithAggregatesFilter | bigint | number | null
    _count?: NestedIntNullableFilter
    _avg?: NestedFloatNullableFilter
    _sum?: NestedBigIntNullableFilter
    _min?: NestedBigIntNullableFilter
    _max?: NestedBigIntNullableFilter
  }

  export type SmsCreateWithoutProviderInput = {
    createdAt?: Date | string
    updatedAt?: Date | string
    id?: bigint | number
    phone: string
    user: string
    org: string
    text: string
    type: TextType
    status?: Status
    retries?: number
    providerMessageId?: string | null
    meta?: NullableJsonNullValueInput | InputJsonValue
    Audit?: AuditCreateNestedManyWithoutSmsInput
  }

  export type SmsUncheckedCreateWithoutProviderInput = {
    createdAt?: Date | string
    updatedAt?: Date | string
    id?: bigint | number
    phone: string
    user: string
    org: string
    text: string
    type: TextType
    status?: Status
    retries?: number
    providerMessageId?: string | null
    meta?: NullableJsonNullValueInput | InputJsonValue
    Audit?: AuditUncheckedCreateNestedManyWithoutSmsInput
  }

  export type SmsCreateOrConnectWithoutProviderInput = {
    where: SmsWhereUniqueInput
    create: XOR<SmsCreateWithoutProviderInput, SmsUncheckedCreateWithoutProviderInput>
  }

  export type SmsCreateManyProviderInputEnvelope = {
    data: Enumerable<SmsCreateManyProviderInput>
    skipDuplicates?: boolean
  }

  export type FCMCreateWithoutProviderInput = {
    createdAt?: Date | string
    updatedAt?: Date | string
    id?: bigint | number
    deviceId: string
    user: string
    org: string
    text: string
    type: TextType
    status?: Status
    retries?: number
    providerMessageId?: string | null
    meta?: NullableJsonNullValueInput | InputJsonValue
    Audit?: AuditCreateNestedManyWithoutFCMInput
  }

  export type FCMUncheckedCreateWithoutProviderInput = {
    createdAt?: Date | string
    updatedAt?: Date | string
    id?: bigint | number
    deviceId: string
    user: string
    org: string
    text: string
    type: TextType
    status?: Status
    retries?: number
    providerMessageId?: string | null
    meta?: NullableJsonNullValueInput | InputJsonValue
    Audit?: AuditUncheckedCreateNestedManyWithoutFCMInput
  }

  export type FCMCreateOrConnectWithoutProviderInput = {
    where: FCMWhereUniqueInput
    create: XOR<FCMCreateWithoutProviderInput, FCMUncheckedCreateWithoutProviderInput>
  }

  export type FCMCreateManyProviderInputEnvelope = {
    data: Enumerable<FCMCreateManyProviderInput>
    skipDuplicates?: boolean
  }

  export type SmsUpsertWithWhereUniqueWithoutProviderInput = {
    where: SmsWhereUniqueInput
    update: XOR<SmsUpdateWithoutProviderInput, SmsUncheckedUpdateWithoutProviderInput>
    create: XOR<SmsCreateWithoutProviderInput, SmsUncheckedCreateWithoutProviderInput>
  }

  export type SmsUpdateWithWhereUniqueWithoutProviderInput = {
    where: SmsWhereUniqueInput
    data: XOR<SmsUpdateWithoutProviderInput, SmsUncheckedUpdateWithoutProviderInput>
  }

  export type SmsUpdateManyWithWhereWithoutProviderInput = {
    where: SmsScalarWhereInput
    data: XOR<SmsUpdateManyMutationInput, SmsUncheckedUpdateManyWithoutSmsInput>
  }

  export type SmsScalarWhereInput = {
    AND?: Enumerable<SmsScalarWhereInput>
    OR?: Enumerable<SmsScalarWhereInput>
    NOT?: Enumerable<SmsScalarWhereInput>
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
    id?: BigIntFilter | bigint | number
    providerId?: IntFilter | number
    phone?: StringFilter | string
    user?: StringFilter | string
    org?: StringFilter | string
    text?: StringFilter | string
    type?: EnumTextTypeFilter | TextType
    status?: EnumStatusFilter | Status
    retries?: IntFilter | number
    providerMessageId?: StringNullableFilter | string | null
    meta?: JsonNullableFilter
  }

  export type FCMUpsertWithWhereUniqueWithoutProviderInput = {
    where: FCMWhereUniqueInput
    update: XOR<FCMUpdateWithoutProviderInput, FCMUncheckedUpdateWithoutProviderInput>
    create: XOR<FCMCreateWithoutProviderInput, FCMUncheckedCreateWithoutProviderInput>
  }

  export type FCMUpdateWithWhereUniqueWithoutProviderInput = {
    where: FCMWhereUniqueInput
    data: XOR<FCMUpdateWithoutProviderInput, FCMUncheckedUpdateWithoutProviderInput>
  }

  export type FCMUpdateManyWithWhereWithoutProviderInput = {
    where: FCMScalarWhereInput
    data: XOR<FCMUpdateManyMutationInput, FCMUncheckedUpdateManyWithoutFCMInput>
  }

  export type FCMScalarWhereInput = {
    AND?: Enumerable<FCMScalarWhereInput>
    OR?: Enumerable<FCMScalarWhereInput>
    NOT?: Enumerable<FCMScalarWhereInput>
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
    id?: BigIntFilter | bigint | number
    deviceId?: StringFilter | string
    user?: StringFilter | string
    org?: StringFilter | string
    text?: StringFilter | string
    type?: EnumTextTypeFilter | TextType
    status?: EnumStatusFilter | Status
    retries?: IntFilter | number
    providerMessageId?: StringNullableFilter | string | null
    meta?: JsonNullableFilter
    providerId?: IntNullableFilter | number | null
  }

  export type ProviderCreateWithoutSmsInput = {
    createdAt?: Date | string
    updatedAt?: Date | string
    channel: string
    providerName: ProviderName
    config: JsonNullValueInput | InputJsonValue
    unitCost: number
    FCM?: FCMCreateNestedManyWithoutProviderInput
  }

  export type ProviderUncheckedCreateWithoutSmsInput = {
    createdAt?: Date | string
    updatedAt?: Date | string
    id?: number
    channel: string
    providerName: ProviderName
    config: JsonNullValueInput | InputJsonValue
    unitCost: number
    FCM?: FCMUncheckedCreateNestedManyWithoutProviderInput
  }

  export type ProviderCreateOrConnectWithoutSmsInput = {
    where: ProviderWhereUniqueInput
    create: XOR<ProviderCreateWithoutSmsInput, ProviderUncheckedCreateWithoutSmsInput>
  }

  export type AuditCreateWithoutSmsInput = {
    createdAt?: Date | string
    updatedAt?: Date | string
    id?: bigint | number
    event: Event
    FCM?: FCMCreateNestedOneWithoutAuditInput
  }

  export type AuditUncheckedCreateWithoutSmsInput = {
    createdAt?: Date | string
    updatedAt?: Date | string
    id?: bigint | number
    event: Event
    fCMId?: bigint | number | null
  }

  export type AuditCreateOrConnectWithoutSmsInput = {
    where: AuditWhereUniqueInput
    create: XOR<AuditCreateWithoutSmsInput, AuditUncheckedCreateWithoutSmsInput>
  }

  export type AuditCreateManySmsInputEnvelope = {
    data: Enumerable<AuditCreateManySmsInput>
    skipDuplicates?: boolean
  }

  export type ProviderUpsertWithoutSmsInput = {
    update: XOR<ProviderUpdateWithoutSmsInput, ProviderUncheckedUpdateWithoutSmsInput>
    create: XOR<ProviderCreateWithoutSmsInput, ProviderUncheckedCreateWithoutSmsInput>
  }

  export type ProviderUpdateWithoutSmsInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    channel?: StringFieldUpdateOperationsInput | string
    providerName?: EnumProviderNameFieldUpdateOperationsInput | ProviderName
    config?: JsonNullValueInput | InputJsonValue
    unitCost?: FloatFieldUpdateOperationsInput | number
    FCM?: FCMUpdateManyWithoutProviderInput
  }

  export type ProviderUncheckedUpdateWithoutSmsInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    id?: IntFieldUpdateOperationsInput | number
    channel?: StringFieldUpdateOperationsInput | string
    providerName?: EnumProviderNameFieldUpdateOperationsInput | ProviderName
    config?: JsonNullValueInput | InputJsonValue
    unitCost?: FloatFieldUpdateOperationsInput | number
    FCM?: FCMUncheckedUpdateManyWithoutProviderInput
  }

  export type AuditUpsertWithWhereUniqueWithoutSmsInput = {
    where: AuditWhereUniqueInput
    update: XOR<AuditUpdateWithoutSmsInput, AuditUncheckedUpdateWithoutSmsInput>
    create: XOR<AuditCreateWithoutSmsInput, AuditUncheckedCreateWithoutSmsInput>
  }

  export type AuditUpdateWithWhereUniqueWithoutSmsInput = {
    where: AuditWhereUniqueInput
    data: XOR<AuditUpdateWithoutSmsInput, AuditUncheckedUpdateWithoutSmsInput>
  }

  export type AuditUpdateManyWithWhereWithoutSmsInput = {
    where: AuditScalarWhereInput
    data: XOR<AuditUpdateManyMutationInput, AuditUncheckedUpdateManyWithoutAuditInput>
  }

  export type AuditScalarWhereInput = {
    AND?: Enumerable<AuditScalarWhereInput>
    OR?: Enumerable<AuditScalarWhereInput>
    NOT?: Enumerable<AuditScalarWhereInput>
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
    id?: BigIntFilter | bigint | number
    smsId?: BigIntFilter | bigint | number
    event?: EnumEventFilter | Event
    fCMId?: BigIntNullableFilter | bigint | number | null
  }

  export type AuditCreateWithoutFCMInput = {
    createdAt?: Date | string
    updatedAt?: Date | string
    id?: bigint | number
    event: Event
    sms: SmsCreateNestedOneWithoutAuditInput
  }

  export type AuditUncheckedCreateWithoutFCMInput = {
    createdAt?: Date | string
    updatedAt?: Date | string
    id?: bigint | number
    smsId: bigint | number
    event: Event
  }

  export type AuditCreateOrConnectWithoutFCMInput = {
    where: AuditWhereUniqueInput
    create: XOR<AuditCreateWithoutFCMInput, AuditUncheckedCreateWithoutFCMInput>
  }

  export type AuditCreateManyFCMInputEnvelope = {
    data: Enumerable<AuditCreateManyFCMInput>
    skipDuplicates?: boolean
  }

  export type ProviderCreateWithoutFCMInput = {
    createdAt?: Date | string
    updatedAt?: Date | string
    channel: string
    providerName: ProviderName
    config: JsonNullValueInput | InputJsonValue
    unitCost: number
    Sms?: SmsCreateNestedManyWithoutProviderInput
  }

  export type ProviderUncheckedCreateWithoutFCMInput = {
    createdAt?: Date | string
    updatedAt?: Date | string
    id?: number
    channel: string
    providerName: ProviderName
    config: JsonNullValueInput | InputJsonValue
    unitCost: number
    Sms?: SmsUncheckedCreateNestedManyWithoutProviderInput
  }

  export type ProviderCreateOrConnectWithoutFCMInput = {
    where: ProviderWhereUniqueInput
    create: XOR<ProviderCreateWithoutFCMInput, ProviderUncheckedCreateWithoutFCMInput>
  }

  export type AuditUpsertWithWhereUniqueWithoutFCMInput = {
    where: AuditWhereUniqueInput
    update: XOR<AuditUpdateWithoutFCMInput, AuditUncheckedUpdateWithoutFCMInput>
    create: XOR<AuditCreateWithoutFCMInput, AuditUncheckedCreateWithoutFCMInput>
  }

  export type AuditUpdateWithWhereUniqueWithoutFCMInput = {
    where: AuditWhereUniqueInput
    data: XOR<AuditUpdateWithoutFCMInput, AuditUncheckedUpdateWithoutFCMInput>
  }

  export type AuditUpdateManyWithWhereWithoutFCMInput = {
    where: AuditScalarWhereInput
    data: XOR<AuditUpdateManyMutationInput, AuditUncheckedUpdateManyWithoutAuditInput>
  }

  export type ProviderUpsertWithoutFCMInput = {
    update: XOR<ProviderUpdateWithoutFCMInput, ProviderUncheckedUpdateWithoutFCMInput>
    create: XOR<ProviderCreateWithoutFCMInput, ProviderUncheckedCreateWithoutFCMInput>
  }

  export type ProviderUpdateWithoutFCMInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    channel?: StringFieldUpdateOperationsInput | string
    providerName?: EnumProviderNameFieldUpdateOperationsInput | ProviderName
    config?: JsonNullValueInput | InputJsonValue
    unitCost?: FloatFieldUpdateOperationsInput | number
    Sms?: SmsUpdateManyWithoutProviderInput
  }

  export type ProviderUncheckedUpdateWithoutFCMInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    id?: IntFieldUpdateOperationsInput | number
    channel?: StringFieldUpdateOperationsInput | string
    providerName?: EnumProviderNameFieldUpdateOperationsInput | ProviderName
    config?: JsonNullValueInput | InputJsonValue
    unitCost?: FloatFieldUpdateOperationsInput | number
    Sms?: SmsUncheckedUpdateManyWithoutProviderInput
  }

  export type SmsCreateWithoutAuditInput = {
    createdAt?: Date | string
    updatedAt?: Date | string
    id?: bigint | number
    phone: string
    user: string
    org: string
    text: string
    type: TextType
    status?: Status
    retries?: number
    providerMessageId?: string | null
    meta?: NullableJsonNullValueInput | InputJsonValue
    provider: ProviderCreateNestedOneWithoutSmsInput
  }

  export type SmsUncheckedCreateWithoutAuditInput = {
    createdAt?: Date | string
    updatedAt?: Date | string
    id?: bigint | number
    providerId: number
    phone: string
    user: string
    org: string
    text: string
    type: TextType
    status?: Status
    retries?: number
    providerMessageId?: string | null
    meta?: NullableJsonNullValueInput | InputJsonValue
  }

  export type SmsCreateOrConnectWithoutAuditInput = {
    where: SmsWhereUniqueInput
    create: XOR<SmsCreateWithoutAuditInput, SmsUncheckedCreateWithoutAuditInput>
  }

  export type FCMCreateWithoutAuditInput = {
    createdAt?: Date | string
    updatedAt?: Date | string
    id?: bigint | number
    deviceId: string
    user: string
    org: string
    text: string
    type: TextType
    status?: Status
    retries?: number
    providerMessageId?: string | null
    meta?: NullableJsonNullValueInput | InputJsonValue
    Provider?: ProviderCreateNestedOneWithoutFCMInput
  }

  export type FCMUncheckedCreateWithoutAuditInput = {
    createdAt?: Date | string
    updatedAt?: Date | string
    id?: bigint | number
    deviceId: string
    user: string
    org: string
    text: string
    type: TextType
    status?: Status
    retries?: number
    providerMessageId?: string | null
    meta?: NullableJsonNullValueInput | InputJsonValue
    providerId?: number | null
  }

  export type FCMCreateOrConnectWithoutAuditInput = {
    where: FCMWhereUniqueInput
    create: XOR<FCMCreateWithoutAuditInput, FCMUncheckedCreateWithoutAuditInput>
  }

  export type SmsUpsertWithoutAuditInput = {
    update: XOR<SmsUpdateWithoutAuditInput, SmsUncheckedUpdateWithoutAuditInput>
    create: XOR<SmsCreateWithoutAuditInput, SmsUncheckedCreateWithoutAuditInput>
  }

  export type SmsUpdateWithoutAuditInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    phone?: StringFieldUpdateOperationsInput | string
    user?: StringFieldUpdateOperationsInput | string
    org?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    type?: EnumTextTypeFieldUpdateOperationsInput | TextType
    status?: EnumStatusFieldUpdateOperationsInput | Status
    retries?: IntFieldUpdateOperationsInput | number
    providerMessageId?: NullableStringFieldUpdateOperationsInput | string | null
    meta?: NullableJsonNullValueInput | InputJsonValue
    provider?: ProviderUpdateOneRequiredWithoutSmsInput
  }

  export type SmsUncheckedUpdateWithoutAuditInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    providerId?: IntFieldUpdateOperationsInput | number
    phone?: StringFieldUpdateOperationsInput | string
    user?: StringFieldUpdateOperationsInput | string
    org?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    type?: EnumTextTypeFieldUpdateOperationsInput | TextType
    status?: EnumStatusFieldUpdateOperationsInput | Status
    retries?: IntFieldUpdateOperationsInput | number
    providerMessageId?: NullableStringFieldUpdateOperationsInput | string | null
    meta?: NullableJsonNullValueInput | InputJsonValue
  }

  export type FCMUpsertWithoutAuditInput = {
    update: XOR<FCMUpdateWithoutAuditInput, FCMUncheckedUpdateWithoutAuditInput>
    create: XOR<FCMCreateWithoutAuditInput, FCMUncheckedCreateWithoutAuditInput>
  }

  export type FCMUpdateWithoutAuditInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    deviceId?: StringFieldUpdateOperationsInput | string
    user?: StringFieldUpdateOperationsInput | string
    org?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    type?: EnumTextTypeFieldUpdateOperationsInput | TextType
    status?: EnumStatusFieldUpdateOperationsInput | Status
    retries?: IntFieldUpdateOperationsInput | number
    providerMessageId?: NullableStringFieldUpdateOperationsInput | string | null
    meta?: NullableJsonNullValueInput | InputJsonValue
    Provider?: ProviderUpdateOneWithoutFCMInput
  }

  export type FCMUncheckedUpdateWithoutAuditInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    deviceId?: StringFieldUpdateOperationsInput | string
    user?: StringFieldUpdateOperationsInput | string
    org?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    type?: EnumTextTypeFieldUpdateOperationsInput | TextType
    status?: EnumStatusFieldUpdateOperationsInput | Status
    retries?: IntFieldUpdateOperationsInput | number
    providerMessageId?: NullableStringFieldUpdateOperationsInput | string | null
    meta?: NullableJsonNullValueInput | InputJsonValue
    providerId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type SmsCreateManyProviderInput = {
    createdAt?: Date | string
    updatedAt?: Date | string
    id?: bigint | number
    phone: string
    user: string
    org: string
    text: string
    type: TextType
    status?: Status
    retries?: number
    providerMessageId?: string | null
    meta?: NullableJsonNullValueInput | InputJsonValue
  }

  export type FCMCreateManyProviderInput = {
    createdAt?: Date | string
    updatedAt?: Date | string
    id?: bigint | number
    deviceId: string
    user: string
    org: string
    text: string
    type: TextType
    status?: Status
    retries?: number
    providerMessageId?: string | null
    meta?: NullableJsonNullValueInput | InputJsonValue
  }

  export type SmsUpdateWithoutProviderInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    phone?: StringFieldUpdateOperationsInput | string
    user?: StringFieldUpdateOperationsInput | string
    org?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    type?: EnumTextTypeFieldUpdateOperationsInput | TextType
    status?: EnumStatusFieldUpdateOperationsInput | Status
    retries?: IntFieldUpdateOperationsInput | number
    providerMessageId?: NullableStringFieldUpdateOperationsInput | string | null
    meta?: NullableJsonNullValueInput | InputJsonValue
    Audit?: AuditUpdateManyWithoutSmsInput
  }

  export type SmsUncheckedUpdateWithoutProviderInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    phone?: StringFieldUpdateOperationsInput | string
    user?: StringFieldUpdateOperationsInput | string
    org?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    type?: EnumTextTypeFieldUpdateOperationsInput | TextType
    status?: EnumStatusFieldUpdateOperationsInput | Status
    retries?: IntFieldUpdateOperationsInput | number
    providerMessageId?: NullableStringFieldUpdateOperationsInput | string | null
    meta?: NullableJsonNullValueInput | InputJsonValue
    Audit?: AuditUncheckedUpdateManyWithoutSmsInput
  }

  export type SmsUncheckedUpdateManyWithoutSmsInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    phone?: StringFieldUpdateOperationsInput | string
    user?: StringFieldUpdateOperationsInput | string
    org?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    type?: EnumTextTypeFieldUpdateOperationsInput | TextType
    status?: EnumStatusFieldUpdateOperationsInput | Status
    retries?: IntFieldUpdateOperationsInput | number
    providerMessageId?: NullableStringFieldUpdateOperationsInput | string | null
    meta?: NullableJsonNullValueInput | InputJsonValue
  }

  export type FCMUpdateWithoutProviderInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    deviceId?: StringFieldUpdateOperationsInput | string
    user?: StringFieldUpdateOperationsInput | string
    org?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    type?: EnumTextTypeFieldUpdateOperationsInput | TextType
    status?: EnumStatusFieldUpdateOperationsInput | Status
    retries?: IntFieldUpdateOperationsInput | number
    providerMessageId?: NullableStringFieldUpdateOperationsInput | string | null
    meta?: NullableJsonNullValueInput | InputJsonValue
    Audit?: AuditUpdateManyWithoutFCMInput
  }

  export type FCMUncheckedUpdateWithoutProviderInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    deviceId?: StringFieldUpdateOperationsInput | string
    user?: StringFieldUpdateOperationsInput | string
    org?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    type?: EnumTextTypeFieldUpdateOperationsInput | TextType
    status?: EnumStatusFieldUpdateOperationsInput | Status
    retries?: IntFieldUpdateOperationsInput | number
    providerMessageId?: NullableStringFieldUpdateOperationsInput | string | null
    meta?: NullableJsonNullValueInput | InputJsonValue
    Audit?: AuditUncheckedUpdateManyWithoutFCMInput
  }

  export type FCMUncheckedUpdateManyWithoutFCMInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    deviceId?: StringFieldUpdateOperationsInput | string
    user?: StringFieldUpdateOperationsInput | string
    org?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    type?: EnumTextTypeFieldUpdateOperationsInput | TextType
    status?: EnumStatusFieldUpdateOperationsInput | Status
    retries?: IntFieldUpdateOperationsInput | number
    providerMessageId?: NullableStringFieldUpdateOperationsInput | string | null
    meta?: NullableJsonNullValueInput | InputJsonValue
  }

  export type AuditCreateManySmsInput = {
    createdAt?: Date | string
    updatedAt?: Date | string
    id?: bigint | number
    event: Event
    fCMId?: bigint | number | null
  }

  export type AuditUpdateWithoutSmsInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    event?: EnumEventFieldUpdateOperationsInput | Event
    FCM?: FCMUpdateOneWithoutAuditInput
  }

  export type AuditUncheckedUpdateWithoutSmsInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    event?: EnumEventFieldUpdateOperationsInput | Event
    fCMId?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
  }

  export type AuditUncheckedUpdateManyWithoutAuditInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    event?: EnumEventFieldUpdateOperationsInput | Event
    fCMId?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
  }

  export type AuditCreateManyFCMInput = {
    createdAt?: Date | string
    updatedAt?: Date | string
    id?: bigint | number
    smsId: bigint | number
    event: Event
  }

  export type AuditUpdateWithoutFCMInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    event?: EnumEventFieldUpdateOperationsInput | Event
    sms?: SmsUpdateOneRequiredWithoutAuditInput
  }

  export type AuditUncheckedUpdateWithoutFCMInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    smsId?: BigIntFieldUpdateOperationsInput | bigint | number
    event?: EnumEventFieldUpdateOperationsInput | Event
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.DMMF.Document;
}