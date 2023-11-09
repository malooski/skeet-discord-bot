
/**
 * Client
**/

import * as runtime from './runtime/library';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model TrackedUser
 * 
 */
export type TrackedUser = $Result.DefaultSelection<Prisma.$TrackedUserPayload>
/**
 * Model DiscordChannel
 * 
 */
export type DiscordChannel = $Result.DefaultSelection<Prisma.$DiscordChannelPayload>
/**
 * Model TrackingConfig
 * 
 */
export type TrackingConfig = $Result.DefaultSelection<Prisma.$TrackingConfigPayload>

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more TrackedUsers
 * const trackedUsers = await prisma.trackedUser.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  T extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof T ? T['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<T['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more TrackedUsers
   * const trackedUsers = await prisma.trackedUser.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<T, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
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
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

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
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

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
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;

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
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<'extends', Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.trackedUser`: Exposes CRUD operations for the **TrackedUser** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TrackedUsers
    * const trackedUsers = await prisma.trackedUser.findMany()
    * ```
    */
  get trackedUser(): Prisma.TrackedUserDelegate<ExtArgs>;

  /**
   * `prisma.discordChannel`: Exposes CRUD operations for the **DiscordChannel** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more DiscordChannels
    * const discordChannels = await prisma.discordChannel.findMany()
    * ```
    */
  get discordChannel(): Prisma.DiscordChannelDelegate<ExtArgs>;

  /**
   * `prisma.trackingConfig`: Exposes CRUD operations for the **TrackingConfig** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TrackingConfigs
    * const trackingConfigs = await prisma.trackingConfig.findMany()
    * ```
    */
  get trackingConfig(): Prisma.TrackingConfigDelegate<ExtArgs>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError
  export import NotFoundError = runtime.NotFoundError

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

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics 
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 5.5.2
   * Query Engine version: aebc046ce8b88ebbcb45efe31cbe7d06fd6abc0a
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
   * Matches a JSON object.
   * Unlike `JsonObject`, this type allows undefined and read-only properties.
   */
  export type InputJsonObject = {readonly [Key in string]?: InputJsonValue | null}

  /**
   * Matches a JSON array.
   * Unlike `JsonArray`, readonly arrays are assignable to this type.
   */
  export interface InputJsonArray extends ReadonlyArray<InputJsonValue | null> {}

  /**
   * Matches any valid value that can be used as an input for operations like
   * create and update as the value of a JSON field. Unlike `JsonValue`, this
   * type allows read-only arrays and read-only object properties and disallows
   * `null` at the top level.
   *
   * `null` cannot be used as the value of a JSON field because its meaning
   * would be ambiguous. Use `Prisma.JsonNull` to store the JSON null value or
   * `Prisma.DbNull` to clear the JSON value and set the field to the database
   * NULL value instead.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-by-null-values
   */
  export type InputJsonValue = string | number | boolean | InputJsonObject | InputJsonArray | { toJSON(): unknown }

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

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

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

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
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
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

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
    : never>;

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

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



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
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    TrackedUser: 'TrackedUser',
    DiscordChannel: 'DiscordChannel',
    TrackingConfig: 'TrackingConfig'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }


  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs}, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    meta: {
      modelProps: 'trackedUser' | 'discordChannel' | 'trackingConfig'
      txIsolationLevel: Prisma.TransactionIsolationLevel
    },
    model: {
      TrackedUser: {
        payload: Prisma.$TrackedUserPayload<ExtArgs>
        fields: Prisma.TrackedUserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TrackedUserFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TrackedUserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TrackedUserFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TrackedUserPayload>
          }
          findFirst: {
            args: Prisma.TrackedUserFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TrackedUserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TrackedUserFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TrackedUserPayload>
          }
          findMany: {
            args: Prisma.TrackedUserFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TrackedUserPayload>[]
          }
          create: {
            args: Prisma.TrackedUserCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TrackedUserPayload>
          }
          delete: {
            args: Prisma.TrackedUserDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TrackedUserPayload>
          }
          update: {
            args: Prisma.TrackedUserUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TrackedUserPayload>
          }
          deleteMany: {
            args: Prisma.TrackedUserDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.TrackedUserUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.TrackedUserUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TrackedUserPayload>
          }
          aggregate: {
            args: Prisma.TrackedUserAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateTrackedUser>
          }
          groupBy: {
            args: Prisma.TrackedUserGroupByArgs<ExtArgs>,
            result: $Utils.Optional<TrackedUserGroupByOutputType>[]
          }
          count: {
            args: Prisma.TrackedUserCountArgs<ExtArgs>,
            result: $Utils.Optional<TrackedUserCountAggregateOutputType> | number
          }
        }
      }
      DiscordChannel: {
        payload: Prisma.$DiscordChannelPayload<ExtArgs>
        fields: Prisma.DiscordChannelFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DiscordChannelFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DiscordChannelPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DiscordChannelFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DiscordChannelPayload>
          }
          findFirst: {
            args: Prisma.DiscordChannelFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DiscordChannelPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DiscordChannelFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DiscordChannelPayload>
          }
          findMany: {
            args: Prisma.DiscordChannelFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DiscordChannelPayload>[]
          }
          create: {
            args: Prisma.DiscordChannelCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DiscordChannelPayload>
          }
          delete: {
            args: Prisma.DiscordChannelDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DiscordChannelPayload>
          }
          update: {
            args: Prisma.DiscordChannelUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DiscordChannelPayload>
          }
          deleteMany: {
            args: Prisma.DiscordChannelDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.DiscordChannelUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.DiscordChannelUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DiscordChannelPayload>
          }
          aggregate: {
            args: Prisma.DiscordChannelAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateDiscordChannel>
          }
          groupBy: {
            args: Prisma.DiscordChannelGroupByArgs<ExtArgs>,
            result: $Utils.Optional<DiscordChannelGroupByOutputType>[]
          }
          count: {
            args: Prisma.DiscordChannelCountArgs<ExtArgs>,
            result: $Utils.Optional<DiscordChannelCountAggregateOutputType> | number
          }
        }
      }
      TrackingConfig: {
        payload: Prisma.$TrackingConfigPayload<ExtArgs>
        fields: Prisma.TrackingConfigFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TrackingConfigFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TrackingConfigPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TrackingConfigFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TrackingConfigPayload>
          }
          findFirst: {
            args: Prisma.TrackingConfigFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TrackingConfigPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TrackingConfigFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TrackingConfigPayload>
          }
          findMany: {
            args: Prisma.TrackingConfigFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TrackingConfigPayload>[]
          }
          create: {
            args: Prisma.TrackingConfigCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TrackingConfigPayload>
          }
          delete: {
            args: Prisma.TrackingConfigDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TrackingConfigPayload>
          }
          update: {
            args: Prisma.TrackingConfigUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TrackingConfigPayload>
          }
          deleteMany: {
            args: Prisma.TrackingConfigDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.TrackingConfigUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.TrackingConfigUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TrackingConfigPayload>
          }
          aggregate: {
            args: Prisma.TrackingConfigAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateTrackingConfig>
          }
          groupBy: {
            args: Prisma.TrackingConfigGroupByArgs<ExtArgs>,
            result: $Utils.Optional<TrackingConfigGroupByOutputType>[]
          }
          count: {
            args: Prisma.TrackingConfigCountArgs<ExtArgs>,
            result: $Utils.Optional<TrackingConfigCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<'define', Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
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
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
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
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
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
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
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
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type TrackedUserCountOutputType
   */

  export type TrackedUserCountOutputType = {
    TrackingConfig: number
  }

  export type TrackedUserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    TrackingConfig?: boolean | TrackedUserCountOutputTypeCountTrackingConfigArgs
  }

  // Custom InputTypes

  /**
   * TrackedUserCountOutputType without action
   */
  export type TrackedUserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TrackedUserCountOutputType
     */
    select?: TrackedUserCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * TrackedUserCountOutputType without action
   */
  export type TrackedUserCountOutputTypeCountTrackingConfigArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TrackingConfigWhereInput
  }



  /**
   * Count Type DiscordChannelCountOutputType
   */

  export type DiscordChannelCountOutputType = {
    TrackingConfig: number
  }

  export type DiscordChannelCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    TrackingConfig?: boolean | DiscordChannelCountOutputTypeCountTrackingConfigArgs
  }

  // Custom InputTypes

  /**
   * DiscordChannelCountOutputType without action
   */
  export type DiscordChannelCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DiscordChannelCountOutputType
     */
    select?: DiscordChannelCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * DiscordChannelCountOutputType without action
   */
  export type DiscordChannelCountOutputTypeCountTrackingConfigArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TrackingConfigWhereInput
  }



  /**
   * Models
   */

  /**
   * Model TrackedUser
   */

  export type AggregateTrackedUser = {
    _count: TrackedUserCountAggregateOutputType | null
    _avg: TrackedUserAvgAggregateOutputType | null
    _sum: TrackedUserSumAggregateOutputType | null
    _min: TrackedUserMinAggregateOutputType | null
    _max: TrackedUserMaxAggregateOutputType | null
  }

  export type TrackedUserAvgAggregateOutputType = {
    id: number | null
  }

  export type TrackedUserSumAggregateOutputType = {
    id: number | null
  }

  export type TrackedUserMinAggregateOutputType = {
    id: number | null
    did: string | null
  }

  export type TrackedUserMaxAggregateOutputType = {
    id: number | null
    did: string | null
  }

  export type TrackedUserCountAggregateOutputType = {
    id: number
    did: number
    _all: number
  }


  export type TrackedUserAvgAggregateInputType = {
    id?: true
  }

  export type TrackedUserSumAggregateInputType = {
    id?: true
  }

  export type TrackedUserMinAggregateInputType = {
    id?: true
    did?: true
  }

  export type TrackedUserMaxAggregateInputType = {
    id?: true
    did?: true
  }

  export type TrackedUserCountAggregateInputType = {
    id?: true
    did?: true
    _all?: true
  }

  export type TrackedUserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TrackedUser to aggregate.
     */
    where?: TrackedUserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TrackedUsers to fetch.
     */
    orderBy?: TrackedUserOrderByWithRelationInput | TrackedUserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TrackedUserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TrackedUsers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TrackedUsers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TrackedUsers
    **/
    _count?: true | TrackedUserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TrackedUserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TrackedUserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TrackedUserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TrackedUserMaxAggregateInputType
  }

  export type GetTrackedUserAggregateType<T extends TrackedUserAggregateArgs> = {
        [P in keyof T & keyof AggregateTrackedUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTrackedUser[P]>
      : GetScalarType<T[P], AggregateTrackedUser[P]>
  }




  export type TrackedUserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TrackedUserWhereInput
    orderBy?: TrackedUserOrderByWithAggregationInput | TrackedUserOrderByWithAggregationInput[]
    by: TrackedUserScalarFieldEnum[] | TrackedUserScalarFieldEnum
    having?: TrackedUserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TrackedUserCountAggregateInputType | true
    _avg?: TrackedUserAvgAggregateInputType
    _sum?: TrackedUserSumAggregateInputType
    _min?: TrackedUserMinAggregateInputType
    _max?: TrackedUserMaxAggregateInputType
  }

  export type TrackedUserGroupByOutputType = {
    id: number
    did: string
    _count: TrackedUserCountAggregateOutputType | null
    _avg: TrackedUserAvgAggregateOutputType | null
    _sum: TrackedUserSumAggregateOutputType | null
    _min: TrackedUserMinAggregateOutputType | null
    _max: TrackedUserMaxAggregateOutputType | null
  }

  type GetTrackedUserGroupByPayload<T extends TrackedUserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TrackedUserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TrackedUserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TrackedUserGroupByOutputType[P]>
            : GetScalarType<T[P], TrackedUserGroupByOutputType[P]>
        }
      >
    >


  export type TrackedUserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    did?: boolean
    TrackingConfig?: boolean | TrackedUser$TrackingConfigArgs<ExtArgs>
    _count?: boolean | TrackedUserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["trackedUser"]>

  export type TrackedUserSelectScalar = {
    id?: boolean
    did?: boolean
  }

  export type TrackedUserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    TrackingConfig?: boolean | TrackedUser$TrackingConfigArgs<ExtArgs>
    _count?: boolean | TrackedUserCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $TrackedUserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "TrackedUser"
    objects: {
      TrackingConfig: Prisma.$TrackingConfigPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      did: string
    }, ExtArgs["result"]["trackedUser"]>
    composites: {}
  }


  type TrackedUserGetPayload<S extends boolean | null | undefined | TrackedUserDefaultArgs> = $Result.GetResult<Prisma.$TrackedUserPayload, S>

  type TrackedUserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<TrackedUserFindManyArgs, 'select' | 'include' | 'distinct' > & {
      select?: TrackedUserCountAggregateInputType | true
    }

  export interface TrackedUserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['TrackedUser'], meta: { name: 'TrackedUser' } }
    /**
     * Find zero or one TrackedUser that matches the filter.
     * @param {TrackedUserFindUniqueArgs} args - Arguments to find a TrackedUser
     * @example
     * // Get one TrackedUser
     * const trackedUser = await prisma.trackedUser.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends TrackedUserFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, TrackedUserFindUniqueArgs<ExtArgs>>
    ): Prisma__TrackedUserClient<$Result.GetResult<Prisma.$TrackedUserPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one TrackedUser that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {TrackedUserFindUniqueOrThrowArgs} args - Arguments to find a TrackedUser
     * @example
     * // Get one TrackedUser
     * const trackedUser = await prisma.trackedUser.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends TrackedUserFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, TrackedUserFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__TrackedUserClient<$Result.GetResult<Prisma.$TrackedUserPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first TrackedUser that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TrackedUserFindFirstArgs} args - Arguments to find a TrackedUser
     * @example
     * // Get one TrackedUser
     * const trackedUser = await prisma.trackedUser.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends TrackedUserFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, TrackedUserFindFirstArgs<ExtArgs>>
    ): Prisma__TrackedUserClient<$Result.GetResult<Prisma.$TrackedUserPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first TrackedUser that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TrackedUserFindFirstOrThrowArgs} args - Arguments to find a TrackedUser
     * @example
     * // Get one TrackedUser
     * const trackedUser = await prisma.trackedUser.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends TrackedUserFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, TrackedUserFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__TrackedUserClient<$Result.GetResult<Prisma.$TrackedUserPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more TrackedUsers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TrackedUserFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TrackedUsers
     * const trackedUsers = await prisma.trackedUser.findMany()
     * 
     * // Get first 10 TrackedUsers
     * const trackedUsers = await prisma.trackedUser.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const trackedUserWithIdOnly = await prisma.trackedUser.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends TrackedUserFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, TrackedUserFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TrackedUserPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a TrackedUser.
     * @param {TrackedUserCreateArgs} args - Arguments to create a TrackedUser.
     * @example
     * // Create one TrackedUser
     * const TrackedUser = await prisma.trackedUser.create({
     *   data: {
     *     // ... data to create a TrackedUser
     *   }
     * })
     * 
    **/
    create<T extends TrackedUserCreateArgs<ExtArgs>>(
      args: SelectSubset<T, TrackedUserCreateArgs<ExtArgs>>
    ): Prisma__TrackedUserClient<$Result.GetResult<Prisma.$TrackedUserPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Delete a TrackedUser.
     * @param {TrackedUserDeleteArgs} args - Arguments to delete one TrackedUser.
     * @example
     * // Delete one TrackedUser
     * const TrackedUser = await prisma.trackedUser.delete({
     *   where: {
     *     // ... filter to delete one TrackedUser
     *   }
     * })
     * 
    **/
    delete<T extends TrackedUserDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, TrackedUserDeleteArgs<ExtArgs>>
    ): Prisma__TrackedUserClient<$Result.GetResult<Prisma.$TrackedUserPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one TrackedUser.
     * @param {TrackedUserUpdateArgs} args - Arguments to update one TrackedUser.
     * @example
     * // Update one TrackedUser
     * const trackedUser = await prisma.trackedUser.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends TrackedUserUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, TrackedUserUpdateArgs<ExtArgs>>
    ): Prisma__TrackedUserClient<$Result.GetResult<Prisma.$TrackedUserPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more TrackedUsers.
     * @param {TrackedUserDeleteManyArgs} args - Arguments to filter TrackedUsers to delete.
     * @example
     * // Delete a few TrackedUsers
     * const { count } = await prisma.trackedUser.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends TrackedUserDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, TrackedUserDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TrackedUsers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TrackedUserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TrackedUsers
     * const trackedUser = await prisma.trackedUser.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends TrackedUserUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, TrackedUserUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one TrackedUser.
     * @param {TrackedUserUpsertArgs} args - Arguments to update or create a TrackedUser.
     * @example
     * // Update or create a TrackedUser
     * const trackedUser = await prisma.trackedUser.upsert({
     *   create: {
     *     // ... data to create a TrackedUser
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TrackedUser we want to update
     *   }
     * })
    **/
    upsert<T extends TrackedUserUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, TrackedUserUpsertArgs<ExtArgs>>
    ): Prisma__TrackedUserClient<$Result.GetResult<Prisma.$TrackedUserPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of TrackedUsers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TrackedUserCountArgs} args - Arguments to filter TrackedUsers to count.
     * @example
     * // Count the number of TrackedUsers
     * const count = await prisma.trackedUser.count({
     *   where: {
     *     // ... the filter for the TrackedUsers we want to count
     *   }
     * })
    **/
    count<T extends TrackedUserCountArgs>(
      args?: Subset<T, TrackedUserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TrackedUserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TrackedUser.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TrackedUserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TrackedUserAggregateArgs>(args: Subset<T, TrackedUserAggregateArgs>): Prisma.PrismaPromise<GetTrackedUserAggregateType<T>>

    /**
     * Group by TrackedUser.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TrackedUserGroupByArgs} args - Group by arguments.
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
      T extends TrackedUserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TrackedUserGroupByArgs['orderBy'] }
        : { orderBy?: TrackedUserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, TrackedUserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTrackedUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the TrackedUser model
   */
  readonly fields: TrackedUserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for TrackedUser.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TrackedUserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    TrackingConfig<T extends TrackedUser$TrackingConfigArgs<ExtArgs> = {}>(args?: Subset<T, TrackedUser$TrackingConfigArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TrackingConfigPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the TrackedUser model
   */ 
  interface TrackedUserFieldRefs {
    readonly id: FieldRef<"TrackedUser", 'Int'>
    readonly did: FieldRef<"TrackedUser", 'String'>
  }
    

  // Custom InputTypes

  /**
   * TrackedUser findUnique
   */
  export type TrackedUserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TrackedUser
     */
    select?: TrackedUserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TrackedUserInclude<ExtArgs> | null
    /**
     * Filter, which TrackedUser to fetch.
     */
    where: TrackedUserWhereUniqueInput
  }


  /**
   * TrackedUser findUniqueOrThrow
   */
  export type TrackedUserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TrackedUser
     */
    select?: TrackedUserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TrackedUserInclude<ExtArgs> | null
    /**
     * Filter, which TrackedUser to fetch.
     */
    where: TrackedUserWhereUniqueInput
  }


  /**
   * TrackedUser findFirst
   */
  export type TrackedUserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TrackedUser
     */
    select?: TrackedUserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TrackedUserInclude<ExtArgs> | null
    /**
     * Filter, which TrackedUser to fetch.
     */
    where?: TrackedUserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TrackedUsers to fetch.
     */
    orderBy?: TrackedUserOrderByWithRelationInput | TrackedUserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TrackedUsers.
     */
    cursor?: TrackedUserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TrackedUsers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TrackedUsers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TrackedUsers.
     */
    distinct?: TrackedUserScalarFieldEnum | TrackedUserScalarFieldEnum[]
  }


  /**
   * TrackedUser findFirstOrThrow
   */
  export type TrackedUserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TrackedUser
     */
    select?: TrackedUserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TrackedUserInclude<ExtArgs> | null
    /**
     * Filter, which TrackedUser to fetch.
     */
    where?: TrackedUserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TrackedUsers to fetch.
     */
    orderBy?: TrackedUserOrderByWithRelationInput | TrackedUserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TrackedUsers.
     */
    cursor?: TrackedUserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TrackedUsers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TrackedUsers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TrackedUsers.
     */
    distinct?: TrackedUserScalarFieldEnum | TrackedUserScalarFieldEnum[]
  }


  /**
   * TrackedUser findMany
   */
  export type TrackedUserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TrackedUser
     */
    select?: TrackedUserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TrackedUserInclude<ExtArgs> | null
    /**
     * Filter, which TrackedUsers to fetch.
     */
    where?: TrackedUserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TrackedUsers to fetch.
     */
    orderBy?: TrackedUserOrderByWithRelationInput | TrackedUserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TrackedUsers.
     */
    cursor?: TrackedUserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TrackedUsers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TrackedUsers.
     */
    skip?: number
    distinct?: TrackedUserScalarFieldEnum | TrackedUserScalarFieldEnum[]
  }


  /**
   * TrackedUser create
   */
  export type TrackedUserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TrackedUser
     */
    select?: TrackedUserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TrackedUserInclude<ExtArgs> | null
    /**
     * The data needed to create a TrackedUser.
     */
    data: XOR<TrackedUserCreateInput, TrackedUserUncheckedCreateInput>
  }


  /**
   * TrackedUser update
   */
  export type TrackedUserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TrackedUser
     */
    select?: TrackedUserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TrackedUserInclude<ExtArgs> | null
    /**
     * The data needed to update a TrackedUser.
     */
    data: XOR<TrackedUserUpdateInput, TrackedUserUncheckedUpdateInput>
    /**
     * Choose, which TrackedUser to update.
     */
    where: TrackedUserWhereUniqueInput
  }


  /**
   * TrackedUser updateMany
   */
  export type TrackedUserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update TrackedUsers.
     */
    data: XOR<TrackedUserUpdateManyMutationInput, TrackedUserUncheckedUpdateManyInput>
    /**
     * Filter which TrackedUsers to update
     */
    where?: TrackedUserWhereInput
  }


  /**
   * TrackedUser upsert
   */
  export type TrackedUserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TrackedUser
     */
    select?: TrackedUserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TrackedUserInclude<ExtArgs> | null
    /**
     * The filter to search for the TrackedUser to update in case it exists.
     */
    where: TrackedUserWhereUniqueInput
    /**
     * In case the TrackedUser found by the `where` argument doesn't exist, create a new TrackedUser with this data.
     */
    create: XOR<TrackedUserCreateInput, TrackedUserUncheckedCreateInput>
    /**
     * In case the TrackedUser was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TrackedUserUpdateInput, TrackedUserUncheckedUpdateInput>
  }


  /**
   * TrackedUser delete
   */
  export type TrackedUserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TrackedUser
     */
    select?: TrackedUserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TrackedUserInclude<ExtArgs> | null
    /**
     * Filter which TrackedUser to delete.
     */
    where: TrackedUserWhereUniqueInput
  }


  /**
   * TrackedUser deleteMany
   */
  export type TrackedUserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TrackedUsers to delete
     */
    where?: TrackedUserWhereInput
  }


  /**
   * TrackedUser.TrackingConfig
   */
  export type TrackedUser$TrackingConfigArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TrackingConfig
     */
    select?: TrackingConfigSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TrackingConfigInclude<ExtArgs> | null
    where?: TrackingConfigWhereInput
    orderBy?: TrackingConfigOrderByWithRelationInput | TrackingConfigOrderByWithRelationInput[]
    cursor?: TrackingConfigWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TrackingConfigScalarFieldEnum | TrackingConfigScalarFieldEnum[]
  }


  /**
   * TrackedUser without action
   */
  export type TrackedUserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TrackedUser
     */
    select?: TrackedUserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TrackedUserInclude<ExtArgs> | null
  }



  /**
   * Model DiscordChannel
   */

  export type AggregateDiscordChannel = {
    _count: DiscordChannelCountAggregateOutputType | null
    _avg: DiscordChannelAvgAggregateOutputType | null
    _sum: DiscordChannelSumAggregateOutputType | null
    _min: DiscordChannelMinAggregateOutputType | null
    _max: DiscordChannelMaxAggregateOutputType | null
  }

  export type DiscordChannelAvgAggregateOutputType = {
    id: number | null
  }

  export type DiscordChannelSumAggregateOutputType = {
    id: number | null
  }

  export type DiscordChannelMinAggregateOutputType = {
    id: number | null
    channelId: string | null
  }

  export type DiscordChannelMaxAggregateOutputType = {
    id: number | null
    channelId: string | null
  }

  export type DiscordChannelCountAggregateOutputType = {
    id: number
    channelId: number
    _all: number
  }


  export type DiscordChannelAvgAggregateInputType = {
    id?: true
  }

  export type DiscordChannelSumAggregateInputType = {
    id?: true
  }

  export type DiscordChannelMinAggregateInputType = {
    id?: true
    channelId?: true
  }

  export type DiscordChannelMaxAggregateInputType = {
    id?: true
    channelId?: true
  }

  export type DiscordChannelCountAggregateInputType = {
    id?: true
    channelId?: true
    _all?: true
  }

  export type DiscordChannelAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DiscordChannel to aggregate.
     */
    where?: DiscordChannelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DiscordChannels to fetch.
     */
    orderBy?: DiscordChannelOrderByWithRelationInput | DiscordChannelOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DiscordChannelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DiscordChannels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DiscordChannels.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned DiscordChannels
    **/
    _count?: true | DiscordChannelCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DiscordChannelAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DiscordChannelSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DiscordChannelMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DiscordChannelMaxAggregateInputType
  }

  export type GetDiscordChannelAggregateType<T extends DiscordChannelAggregateArgs> = {
        [P in keyof T & keyof AggregateDiscordChannel]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDiscordChannel[P]>
      : GetScalarType<T[P], AggregateDiscordChannel[P]>
  }




  export type DiscordChannelGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DiscordChannelWhereInput
    orderBy?: DiscordChannelOrderByWithAggregationInput | DiscordChannelOrderByWithAggregationInput[]
    by: DiscordChannelScalarFieldEnum[] | DiscordChannelScalarFieldEnum
    having?: DiscordChannelScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DiscordChannelCountAggregateInputType | true
    _avg?: DiscordChannelAvgAggregateInputType
    _sum?: DiscordChannelSumAggregateInputType
    _min?: DiscordChannelMinAggregateInputType
    _max?: DiscordChannelMaxAggregateInputType
  }

  export type DiscordChannelGroupByOutputType = {
    id: number
    channelId: string
    _count: DiscordChannelCountAggregateOutputType | null
    _avg: DiscordChannelAvgAggregateOutputType | null
    _sum: DiscordChannelSumAggregateOutputType | null
    _min: DiscordChannelMinAggregateOutputType | null
    _max: DiscordChannelMaxAggregateOutputType | null
  }

  type GetDiscordChannelGroupByPayload<T extends DiscordChannelGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DiscordChannelGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DiscordChannelGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DiscordChannelGroupByOutputType[P]>
            : GetScalarType<T[P], DiscordChannelGroupByOutputType[P]>
        }
      >
    >


  export type DiscordChannelSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    channelId?: boolean
    TrackingConfig?: boolean | DiscordChannel$TrackingConfigArgs<ExtArgs>
    _count?: boolean | DiscordChannelCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["discordChannel"]>

  export type DiscordChannelSelectScalar = {
    id?: boolean
    channelId?: boolean
  }

  export type DiscordChannelInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    TrackingConfig?: boolean | DiscordChannel$TrackingConfigArgs<ExtArgs>
    _count?: boolean | DiscordChannelCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $DiscordChannelPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "DiscordChannel"
    objects: {
      TrackingConfig: Prisma.$TrackingConfigPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      channelId: string
    }, ExtArgs["result"]["discordChannel"]>
    composites: {}
  }


  type DiscordChannelGetPayload<S extends boolean | null | undefined | DiscordChannelDefaultArgs> = $Result.GetResult<Prisma.$DiscordChannelPayload, S>

  type DiscordChannelCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<DiscordChannelFindManyArgs, 'select' | 'include' | 'distinct' > & {
      select?: DiscordChannelCountAggregateInputType | true
    }

  export interface DiscordChannelDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['DiscordChannel'], meta: { name: 'DiscordChannel' } }
    /**
     * Find zero or one DiscordChannel that matches the filter.
     * @param {DiscordChannelFindUniqueArgs} args - Arguments to find a DiscordChannel
     * @example
     * // Get one DiscordChannel
     * const discordChannel = await prisma.discordChannel.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends DiscordChannelFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, DiscordChannelFindUniqueArgs<ExtArgs>>
    ): Prisma__DiscordChannelClient<$Result.GetResult<Prisma.$DiscordChannelPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one DiscordChannel that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {DiscordChannelFindUniqueOrThrowArgs} args - Arguments to find a DiscordChannel
     * @example
     * // Get one DiscordChannel
     * const discordChannel = await prisma.discordChannel.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends DiscordChannelFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, DiscordChannelFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__DiscordChannelClient<$Result.GetResult<Prisma.$DiscordChannelPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first DiscordChannel that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DiscordChannelFindFirstArgs} args - Arguments to find a DiscordChannel
     * @example
     * // Get one DiscordChannel
     * const discordChannel = await prisma.discordChannel.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends DiscordChannelFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, DiscordChannelFindFirstArgs<ExtArgs>>
    ): Prisma__DiscordChannelClient<$Result.GetResult<Prisma.$DiscordChannelPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first DiscordChannel that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DiscordChannelFindFirstOrThrowArgs} args - Arguments to find a DiscordChannel
     * @example
     * // Get one DiscordChannel
     * const discordChannel = await prisma.discordChannel.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends DiscordChannelFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, DiscordChannelFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__DiscordChannelClient<$Result.GetResult<Prisma.$DiscordChannelPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more DiscordChannels that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DiscordChannelFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all DiscordChannels
     * const discordChannels = await prisma.discordChannel.findMany()
     * 
     * // Get first 10 DiscordChannels
     * const discordChannels = await prisma.discordChannel.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const discordChannelWithIdOnly = await prisma.discordChannel.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends DiscordChannelFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, DiscordChannelFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DiscordChannelPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a DiscordChannel.
     * @param {DiscordChannelCreateArgs} args - Arguments to create a DiscordChannel.
     * @example
     * // Create one DiscordChannel
     * const DiscordChannel = await prisma.discordChannel.create({
     *   data: {
     *     // ... data to create a DiscordChannel
     *   }
     * })
     * 
    **/
    create<T extends DiscordChannelCreateArgs<ExtArgs>>(
      args: SelectSubset<T, DiscordChannelCreateArgs<ExtArgs>>
    ): Prisma__DiscordChannelClient<$Result.GetResult<Prisma.$DiscordChannelPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Delete a DiscordChannel.
     * @param {DiscordChannelDeleteArgs} args - Arguments to delete one DiscordChannel.
     * @example
     * // Delete one DiscordChannel
     * const DiscordChannel = await prisma.discordChannel.delete({
     *   where: {
     *     // ... filter to delete one DiscordChannel
     *   }
     * })
     * 
    **/
    delete<T extends DiscordChannelDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, DiscordChannelDeleteArgs<ExtArgs>>
    ): Prisma__DiscordChannelClient<$Result.GetResult<Prisma.$DiscordChannelPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one DiscordChannel.
     * @param {DiscordChannelUpdateArgs} args - Arguments to update one DiscordChannel.
     * @example
     * // Update one DiscordChannel
     * const discordChannel = await prisma.discordChannel.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends DiscordChannelUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, DiscordChannelUpdateArgs<ExtArgs>>
    ): Prisma__DiscordChannelClient<$Result.GetResult<Prisma.$DiscordChannelPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more DiscordChannels.
     * @param {DiscordChannelDeleteManyArgs} args - Arguments to filter DiscordChannels to delete.
     * @example
     * // Delete a few DiscordChannels
     * const { count } = await prisma.discordChannel.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends DiscordChannelDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, DiscordChannelDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DiscordChannels.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DiscordChannelUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many DiscordChannels
     * const discordChannel = await prisma.discordChannel.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends DiscordChannelUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, DiscordChannelUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one DiscordChannel.
     * @param {DiscordChannelUpsertArgs} args - Arguments to update or create a DiscordChannel.
     * @example
     * // Update or create a DiscordChannel
     * const discordChannel = await prisma.discordChannel.upsert({
     *   create: {
     *     // ... data to create a DiscordChannel
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the DiscordChannel we want to update
     *   }
     * })
    **/
    upsert<T extends DiscordChannelUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, DiscordChannelUpsertArgs<ExtArgs>>
    ): Prisma__DiscordChannelClient<$Result.GetResult<Prisma.$DiscordChannelPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of DiscordChannels.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DiscordChannelCountArgs} args - Arguments to filter DiscordChannels to count.
     * @example
     * // Count the number of DiscordChannels
     * const count = await prisma.discordChannel.count({
     *   where: {
     *     // ... the filter for the DiscordChannels we want to count
     *   }
     * })
    **/
    count<T extends DiscordChannelCountArgs>(
      args?: Subset<T, DiscordChannelCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DiscordChannelCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a DiscordChannel.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DiscordChannelAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends DiscordChannelAggregateArgs>(args: Subset<T, DiscordChannelAggregateArgs>): Prisma.PrismaPromise<GetDiscordChannelAggregateType<T>>

    /**
     * Group by DiscordChannel.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DiscordChannelGroupByArgs} args - Group by arguments.
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
      T extends DiscordChannelGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DiscordChannelGroupByArgs['orderBy'] }
        : { orderBy?: DiscordChannelGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, DiscordChannelGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDiscordChannelGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the DiscordChannel model
   */
  readonly fields: DiscordChannelFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for DiscordChannel.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DiscordChannelClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    TrackingConfig<T extends DiscordChannel$TrackingConfigArgs<ExtArgs> = {}>(args?: Subset<T, DiscordChannel$TrackingConfigArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TrackingConfigPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the DiscordChannel model
   */ 
  interface DiscordChannelFieldRefs {
    readonly id: FieldRef<"DiscordChannel", 'Int'>
    readonly channelId: FieldRef<"DiscordChannel", 'String'>
  }
    

  // Custom InputTypes

  /**
   * DiscordChannel findUnique
   */
  export type DiscordChannelFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DiscordChannel
     */
    select?: DiscordChannelSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DiscordChannelInclude<ExtArgs> | null
    /**
     * Filter, which DiscordChannel to fetch.
     */
    where: DiscordChannelWhereUniqueInput
  }


  /**
   * DiscordChannel findUniqueOrThrow
   */
  export type DiscordChannelFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DiscordChannel
     */
    select?: DiscordChannelSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DiscordChannelInclude<ExtArgs> | null
    /**
     * Filter, which DiscordChannel to fetch.
     */
    where: DiscordChannelWhereUniqueInput
  }


  /**
   * DiscordChannel findFirst
   */
  export type DiscordChannelFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DiscordChannel
     */
    select?: DiscordChannelSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DiscordChannelInclude<ExtArgs> | null
    /**
     * Filter, which DiscordChannel to fetch.
     */
    where?: DiscordChannelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DiscordChannels to fetch.
     */
    orderBy?: DiscordChannelOrderByWithRelationInput | DiscordChannelOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DiscordChannels.
     */
    cursor?: DiscordChannelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DiscordChannels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DiscordChannels.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DiscordChannels.
     */
    distinct?: DiscordChannelScalarFieldEnum | DiscordChannelScalarFieldEnum[]
  }


  /**
   * DiscordChannel findFirstOrThrow
   */
  export type DiscordChannelFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DiscordChannel
     */
    select?: DiscordChannelSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DiscordChannelInclude<ExtArgs> | null
    /**
     * Filter, which DiscordChannel to fetch.
     */
    where?: DiscordChannelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DiscordChannels to fetch.
     */
    orderBy?: DiscordChannelOrderByWithRelationInput | DiscordChannelOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DiscordChannels.
     */
    cursor?: DiscordChannelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DiscordChannels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DiscordChannels.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DiscordChannels.
     */
    distinct?: DiscordChannelScalarFieldEnum | DiscordChannelScalarFieldEnum[]
  }


  /**
   * DiscordChannel findMany
   */
  export type DiscordChannelFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DiscordChannel
     */
    select?: DiscordChannelSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DiscordChannelInclude<ExtArgs> | null
    /**
     * Filter, which DiscordChannels to fetch.
     */
    where?: DiscordChannelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DiscordChannels to fetch.
     */
    orderBy?: DiscordChannelOrderByWithRelationInput | DiscordChannelOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing DiscordChannels.
     */
    cursor?: DiscordChannelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DiscordChannels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DiscordChannels.
     */
    skip?: number
    distinct?: DiscordChannelScalarFieldEnum | DiscordChannelScalarFieldEnum[]
  }


  /**
   * DiscordChannel create
   */
  export type DiscordChannelCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DiscordChannel
     */
    select?: DiscordChannelSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DiscordChannelInclude<ExtArgs> | null
    /**
     * The data needed to create a DiscordChannel.
     */
    data: XOR<DiscordChannelCreateInput, DiscordChannelUncheckedCreateInput>
  }


  /**
   * DiscordChannel update
   */
  export type DiscordChannelUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DiscordChannel
     */
    select?: DiscordChannelSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DiscordChannelInclude<ExtArgs> | null
    /**
     * The data needed to update a DiscordChannel.
     */
    data: XOR<DiscordChannelUpdateInput, DiscordChannelUncheckedUpdateInput>
    /**
     * Choose, which DiscordChannel to update.
     */
    where: DiscordChannelWhereUniqueInput
  }


  /**
   * DiscordChannel updateMany
   */
  export type DiscordChannelUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update DiscordChannels.
     */
    data: XOR<DiscordChannelUpdateManyMutationInput, DiscordChannelUncheckedUpdateManyInput>
    /**
     * Filter which DiscordChannels to update
     */
    where?: DiscordChannelWhereInput
  }


  /**
   * DiscordChannel upsert
   */
  export type DiscordChannelUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DiscordChannel
     */
    select?: DiscordChannelSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DiscordChannelInclude<ExtArgs> | null
    /**
     * The filter to search for the DiscordChannel to update in case it exists.
     */
    where: DiscordChannelWhereUniqueInput
    /**
     * In case the DiscordChannel found by the `where` argument doesn't exist, create a new DiscordChannel with this data.
     */
    create: XOR<DiscordChannelCreateInput, DiscordChannelUncheckedCreateInput>
    /**
     * In case the DiscordChannel was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DiscordChannelUpdateInput, DiscordChannelUncheckedUpdateInput>
  }


  /**
   * DiscordChannel delete
   */
  export type DiscordChannelDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DiscordChannel
     */
    select?: DiscordChannelSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DiscordChannelInclude<ExtArgs> | null
    /**
     * Filter which DiscordChannel to delete.
     */
    where: DiscordChannelWhereUniqueInput
  }


  /**
   * DiscordChannel deleteMany
   */
  export type DiscordChannelDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DiscordChannels to delete
     */
    where?: DiscordChannelWhereInput
  }


  /**
   * DiscordChannel.TrackingConfig
   */
  export type DiscordChannel$TrackingConfigArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TrackingConfig
     */
    select?: TrackingConfigSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TrackingConfigInclude<ExtArgs> | null
    where?: TrackingConfigWhereInput
    orderBy?: TrackingConfigOrderByWithRelationInput | TrackingConfigOrderByWithRelationInput[]
    cursor?: TrackingConfigWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TrackingConfigScalarFieldEnum | TrackingConfigScalarFieldEnum[]
  }


  /**
   * DiscordChannel without action
   */
  export type DiscordChannelDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DiscordChannel
     */
    select?: DiscordChannelSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DiscordChannelInclude<ExtArgs> | null
  }



  /**
   * Model TrackingConfig
   */

  export type AggregateTrackingConfig = {
    _count: TrackingConfigCountAggregateOutputType | null
    _avg: TrackingConfigAvgAggregateOutputType | null
    _sum: TrackingConfigSumAggregateOutputType | null
    _min: TrackingConfigMinAggregateOutputType | null
    _max: TrackingConfigMaxAggregateOutputType | null
  }

  export type TrackingConfigAvgAggregateOutputType = {
    id: number | null
    userId: number | null
    channelId: number | null
  }

  export type TrackingConfigSumAggregateOutputType = {
    id: number | null
    userId: number | null
    channelId: number | null
  }

  export type TrackingConfigMinAggregateOutputType = {
    id: number | null
    userId: number | null
    channelId: number | null
    showReposts: boolean | null
  }

  export type TrackingConfigMaxAggregateOutputType = {
    id: number | null
    userId: number | null
    channelId: number | null
    showReposts: boolean | null
  }

  export type TrackingConfigCountAggregateOutputType = {
    id: number
    userId: number
    channelId: number
    showReposts: number
    _all: number
  }


  export type TrackingConfigAvgAggregateInputType = {
    id?: true
    userId?: true
    channelId?: true
  }

  export type TrackingConfigSumAggregateInputType = {
    id?: true
    userId?: true
    channelId?: true
  }

  export type TrackingConfigMinAggregateInputType = {
    id?: true
    userId?: true
    channelId?: true
    showReposts?: true
  }

  export type TrackingConfigMaxAggregateInputType = {
    id?: true
    userId?: true
    channelId?: true
    showReposts?: true
  }

  export type TrackingConfigCountAggregateInputType = {
    id?: true
    userId?: true
    channelId?: true
    showReposts?: true
    _all?: true
  }

  export type TrackingConfigAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TrackingConfig to aggregate.
     */
    where?: TrackingConfigWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TrackingConfigs to fetch.
     */
    orderBy?: TrackingConfigOrderByWithRelationInput | TrackingConfigOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TrackingConfigWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TrackingConfigs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TrackingConfigs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TrackingConfigs
    **/
    _count?: true | TrackingConfigCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TrackingConfigAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TrackingConfigSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TrackingConfigMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TrackingConfigMaxAggregateInputType
  }

  export type GetTrackingConfigAggregateType<T extends TrackingConfigAggregateArgs> = {
        [P in keyof T & keyof AggregateTrackingConfig]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTrackingConfig[P]>
      : GetScalarType<T[P], AggregateTrackingConfig[P]>
  }




  export type TrackingConfigGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TrackingConfigWhereInput
    orderBy?: TrackingConfigOrderByWithAggregationInput | TrackingConfigOrderByWithAggregationInput[]
    by: TrackingConfigScalarFieldEnum[] | TrackingConfigScalarFieldEnum
    having?: TrackingConfigScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TrackingConfigCountAggregateInputType | true
    _avg?: TrackingConfigAvgAggregateInputType
    _sum?: TrackingConfigSumAggregateInputType
    _min?: TrackingConfigMinAggregateInputType
    _max?: TrackingConfigMaxAggregateInputType
  }

  export type TrackingConfigGroupByOutputType = {
    id: number
    userId: number
    channelId: number
    showReposts: boolean
    _count: TrackingConfigCountAggregateOutputType | null
    _avg: TrackingConfigAvgAggregateOutputType | null
    _sum: TrackingConfigSumAggregateOutputType | null
    _min: TrackingConfigMinAggregateOutputType | null
    _max: TrackingConfigMaxAggregateOutputType | null
  }

  type GetTrackingConfigGroupByPayload<T extends TrackingConfigGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TrackingConfigGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TrackingConfigGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TrackingConfigGroupByOutputType[P]>
            : GetScalarType<T[P], TrackingConfigGroupByOutputType[P]>
        }
      >
    >


  export type TrackingConfigSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    channelId?: boolean
    showReposts?: boolean
    user?: boolean | TrackedUserDefaultArgs<ExtArgs>
    channel?: boolean | DiscordChannelDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["trackingConfig"]>

  export type TrackingConfigSelectScalar = {
    id?: boolean
    userId?: boolean
    channelId?: boolean
    showReposts?: boolean
  }

  export type TrackingConfigInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | TrackedUserDefaultArgs<ExtArgs>
    channel?: boolean | DiscordChannelDefaultArgs<ExtArgs>
  }


  export type $TrackingConfigPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "TrackingConfig"
    objects: {
      user: Prisma.$TrackedUserPayload<ExtArgs>
      channel: Prisma.$DiscordChannelPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      userId: number
      channelId: number
      showReposts: boolean
    }, ExtArgs["result"]["trackingConfig"]>
    composites: {}
  }


  type TrackingConfigGetPayload<S extends boolean | null | undefined | TrackingConfigDefaultArgs> = $Result.GetResult<Prisma.$TrackingConfigPayload, S>

  type TrackingConfigCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<TrackingConfigFindManyArgs, 'select' | 'include' | 'distinct' > & {
      select?: TrackingConfigCountAggregateInputType | true
    }

  export interface TrackingConfigDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['TrackingConfig'], meta: { name: 'TrackingConfig' } }
    /**
     * Find zero or one TrackingConfig that matches the filter.
     * @param {TrackingConfigFindUniqueArgs} args - Arguments to find a TrackingConfig
     * @example
     * // Get one TrackingConfig
     * const trackingConfig = await prisma.trackingConfig.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends TrackingConfigFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, TrackingConfigFindUniqueArgs<ExtArgs>>
    ): Prisma__TrackingConfigClient<$Result.GetResult<Prisma.$TrackingConfigPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one TrackingConfig that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {TrackingConfigFindUniqueOrThrowArgs} args - Arguments to find a TrackingConfig
     * @example
     * // Get one TrackingConfig
     * const trackingConfig = await prisma.trackingConfig.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends TrackingConfigFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, TrackingConfigFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__TrackingConfigClient<$Result.GetResult<Prisma.$TrackingConfigPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first TrackingConfig that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TrackingConfigFindFirstArgs} args - Arguments to find a TrackingConfig
     * @example
     * // Get one TrackingConfig
     * const trackingConfig = await prisma.trackingConfig.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends TrackingConfigFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, TrackingConfigFindFirstArgs<ExtArgs>>
    ): Prisma__TrackingConfigClient<$Result.GetResult<Prisma.$TrackingConfigPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first TrackingConfig that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TrackingConfigFindFirstOrThrowArgs} args - Arguments to find a TrackingConfig
     * @example
     * // Get one TrackingConfig
     * const trackingConfig = await prisma.trackingConfig.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends TrackingConfigFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, TrackingConfigFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__TrackingConfigClient<$Result.GetResult<Prisma.$TrackingConfigPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more TrackingConfigs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TrackingConfigFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TrackingConfigs
     * const trackingConfigs = await prisma.trackingConfig.findMany()
     * 
     * // Get first 10 TrackingConfigs
     * const trackingConfigs = await prisma.trackingConfig.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const trackingConfigWithIdOnly = await prisma.trackingConfig.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends TrackingConfigFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, TrackingConfigFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TrackingConfigPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a TrackingConfig.
     * @param {TrackingConfigCreateArgs} args - Arguments to create a TrackingConfig.
     * @example
     * // Create one TrackingConfig
     * const TrackingConfig = await prisma.trackingConfig.create({
     *   data: {
     *     // ... data to create a TrackingConfig
     *   }
     * })
     * 
    **/
    create<T extends TrackingConfigCreateArgs<ExtArgs>>(
      args: SelectSubset<T, TrackingConfigCreateArgs<ExtArgs>>
    ): Prisma__TrackingConfigClient<$Result.GetResult<Prisma.$TrackingConfigPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Delete a TrackingConfig.
     * @param {TrackingConfigDeleteArgs} args - Arguments to delete one TrackingConfig.
     * @example
     * // Delete one TrackingConfig
     * const TrackingConfig = await prisma.trackingConfig.delete({
     *   where: {
     *     // ... filter to delete one TrackingConfig
     *   }
     * })
     * 
    **/
    delete<T extends TrackingConfigDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, TrackingConfigDeleteArgs<ExtArgs>>
    ): Prisma__TrackingConfigClient<$Result.GetResult<Prisma.$TrackingConfigPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one TrackingConfig.
     * @param {TrackingConfigUpdateArgs} args - Arguments to update one TrackingConfig.
     * @example
     * // Update one TrackingConfig
     * const trackingConfig = await prisma.trackingConfig.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends TrackingConfigUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, TrackingConfigUpdateArgs<ExtArgs>>
    ): Prisma__TrackingConfigClient<$Result.GetResult<Prisma.$TrackingConfigPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more TrackingConfigs.
     * @param {TrackingConfigDeleteManyArgs} args - Arguments to filter TrackingConfigs to delete.
     * @example
     * // Delete a few TrackingConfigs
     * const { count } = await prisma.trackingConfig.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends TrackingConfigDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, TrackingConfigDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TrackingConfigs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TrackingConfigUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TrackingConfigs
     * const trackingConfig = await prisma.trackingConfig.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends TrackingConfigUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, TrackingConfigUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one TrackingConfig.
     * @param {TrackingConfigUpsertArgs} args - Arguments to update or create a TrackingConfig.
     * @example
     * // Update or create a TrackingConfig
     * const trackingConfig = await prisma.trackingConfig.upsert({
     *   create: {
     *     // ... data to create a TrackingConfig
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TrackingConfig we want to update
     *   }
     * })
    **/
    upsert<T extends TrackingConfigUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, TrackingConfigUpsertArgs<ExtArgs>>
    ): Prisma__TrackingConfigClient<$Result.GetResult<Prisma.$TrackingConfigPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of TrackingConfigs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TrackingConfigCountArgs} args - Arguments to filter TrackingConfigs to count.
     * @example
     * // Count the number of TrackingConfigs
     * const count = await prisma.trackingConfig.count({
     *   where: {
     *     // ... the filter for the TrackingConfigs we want to count
     *   }
     * })
    **/
    count<T extends TrackingConfigCountArgs>(
      args?: Subset<T, TrackingConfigCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TrackingConfigCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TrackingConfig.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TrackingConfigAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TrackingConfigAggregateArgs>(args: Subset<T, TrackingConfigAggregateArgs>): Prisma.PrismaPromise<GetTrackingConfigAggregateType<T>>

    /**
     * Group by TrackingConfig.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TrackingConfigGroupByArgs} args - Group by arguments.
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
      T extends TrackingConfigGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TrackingConfigGroupByArgs['orderBy'] }
        : { orderBy?: TrackingConfigGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, TrackingConfigGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTrackingConfigGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the TrackingConfig model
   */
  readonly fields: TrackingConfigFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for TrackingConfig.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TrackingConfigClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    user<T extends TrackedUserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TrackedUserDefaultArgs<ExtArgs>>): Prisma__TrackedUserClient<$Result.GetResult<Prisma.$TrackedUserPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    channel<T extends DiscordChannelDefaultArgs<ExtArgs> = {}>(args?: Subset<T, DiscordChannelDefaultArgs<ExtArgs>>): Prisma__DiscordChannelClient<$Result.GetResult<Prisma.$DiscordChannelPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the TrackingConfig model
   */ 
  interface TrackingConfigFieldRefs {
    readonly id: FieldRef<"TrackingConfig", 'Int'>
    readonly userId: FieldRef<"TrackingConfig", 'Int'>
    readonly channelId: FieldRef<"TrackingConfig", 'Int'>
    readonly showReposts: FieldRef<"TrackingConfig", 'Boolean'>
  }
    

  // Custom InputTypes

  /**
   * TrackingConfig findUnique
   */
  export type TrackingConfigFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TrackingConfig
     */
    select?: TrackingConfigSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TrackingConfigInclude<ExtArgs> | null
    /**
     * Filter, which TrackingConfig to fetch.
     */
    where: TrackingConfigWhereUniqueInput
  }


  /**
   * TrackingConfig findUniqueOrThrow
   */
  export type TrackingConfigFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TrackingConfig
     */
    select?: TrackingConfigSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TrackingConfigInclude<ExtArgs> | null
    /**
     * Filter, which TrackingConfig to fetch.
     */
    where: TrackingConfigWhereUniqueInput
  }


  /**
   * TrackingConfig findFirst
   */
  export type TrackingConfigFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TrackingConfig
     */
    select?: TrackingConfigSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TrackingConfigInclude<ExtArgs> | null
    /**
     * Filter, which TrackingConfig to fetch.
     */
    where?: TrackingConfigWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TrackingConfigs to fetch.
     */
    orderBy?: TrackingConfigOrderByWithRelationInput | TrackingConfigOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TrackingConfigs.
     */
    cursor?: TrackingConfigWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TrackingConfigs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TrackingConfigs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TrackingConfigs.
     */
    distinct?: TrackingConfigScalarFieldEnum | TrackingConfigScalarFieldEnum[]
  }


  /**
   * TrackingConfig findFirstOrThrow
   */
  export type TrackingConfigFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TrackingConfig
     */
    select?: TrackingConfigSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TrackingConfigInclude<ExtArgs> | null
    /**
     * Filter, which TrackingConfig to fetch.
     */
    where?: TrackingConfigWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TrackingConfigs to fetch.
     */
    orderBy?: TrackingConfigOrderByWithRelationInput | TrackingConfigOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TrackingConfigs.
     */
    cursor?: TrackingConfigWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TrackingConfigs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TrackingConfigs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TrackingConfigs.
     */
    distinct?: TrackingConfigScalarFieldEnum | TrackingConfigScalarFieldEnum[]
  }


  /**
   * TrackingConfig findMany
   */
  export type TrackingConfigFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TrackingConfig
     */
    select?: TrackingConfigSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TrackingConfigInclude<ExtArgs> | null
    /**
     * Filter, which TrackingConfigs to fetch.
     */
    where?: TrackingConfigWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TrackingConfigs to fetch.
     */
    orderBy?: TrackingConfigOrderByWithRelationInput | TrackingConfigOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TrackingConfigs.
     */
    cursor?: TrackingConfigWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TrackingConfigs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TrackingConfigs.
     */
    skip?: number
    distinct?: TrackingConfigScalarFieldEnum | TrackingConfigScalarFieldEnum[]
  }


  /**
   * TrackingConfig create
   */
  export type TrackingConfigCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TrackingConfig
     */
    select?: TrackingConfigSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TrackingConfigInclude<ExtArgs> | null
    /**
     * The data needed to create a TrackingConfig.
     */
    data: XOR<TrackingConfigCreateInput, TrackingConfigUncheckedCreateInput>
  }


  /**
   * TrackingConfig update
   */
  export type TrackingConfigUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TrackingConfig
     */
    select?: TrackingConfigSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TrackingConfigInclude<ExtArgs> | null
    /**
     * The data needed to update a TrackingConfig.
     */
    data: XOR<TrackingConfigUpdateInput, TrackingConfigUncheckedUpdateInput>
    /**
     * Choose, which TrackingConfig to update.
     */
    where: TrackingConfigWhereUniqueInput
  }


  /**
   * TrackingConfig updateMany
   */
  export type TrackingConfigUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update TrackingConfigs.
     */
    data: XOR<TrackingConfigUpdateManyMutationInput, TrackingConfigUncheckedUpdateManyInput>
    /**
     * Filter which TrackingConfigs to update
     */
    where?: TrackingConfigWhereInput
  }


  /**
   * TrackingConfig upsert
   */
  export type TrackingConfigUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TrackingConfig
     */
    select?: TrackingConfigSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TrackingConfigInclude<ExtArgs> | null
    /**
     * The filter to search for the TrackingConfig to update in case it exists.
     */
    where: TrackingConfigWhereUniqueInput
    /**
     * In case the TrackingConfig found by the `where` argument doesn't exist, create a new TrackingConfig with this data.
     */
    create: XOR<TrackingConfigCreateInput, TrackingConfigUncheckedCreateInput>
    /**
     * In case the TrackingConfig was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TrackingConfigUpdateInput, TrackingConfigUncheckedUpdateInput>
  }


  /**
   * TrackingConfig delete
   */
  export type TrackingConfigDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TrackingConfig
     */
    select?: TrackingConfigSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TrackingConfigInclude<ExtArgs> | null
    /**
     * Filter which TrackingConfig to delete.
     */
    where: TrackingConfigWhereUniqueInput
  }


  /**
   * TrackingConfig deleteMany
   */
  export type TrackingConfigDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TrackingConfigs to delete
     */
    where?: TrackingConfigWhereInput
  }


  /**
   * TrackingConfig without action
   */
  export type TrackingConfigDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TrackingConfig
     */
    select?: TrackingConfigSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TrackingConfigInclude<ExtArgs> | null
  }



  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const TrackedUserScalarFieldEnum: {
    id: 'id',
    did: 'did'
  };

  export type TrackedUserScalarFieldEnum = (typeof TrackedUserScalarFieldEnum)[keyof typeof TrackedUserScalarFieldEnum]


  export const DiscordChannelScalarFieldEnum: {
    id: 'id',
    channelId: 'channelId'
  };

  export type DiscordChannelScalarFieldEnum = (typeof DiscordChannelScalarFieldEnum)[keyof typeof DiscordChannelScalarFieldEnum]


  export const TrackingConfigScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    channelId: 'channelId',
    showReposts: 'showReposts'
  };

  export type TrackingConfigScalarFieldEnum = (typeof TrackingConfigScalarFieldEnum)[keyof typeof TrackingConfigScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  /**
   * Field references 
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type TrackedUserWhereInput = {
    AND?: TrackedUserWhereInput | TrackedUserWhereInput[]
    OR?: TrackedUserWhereInput[]
    NOT?: TrackedUserWhereInput | TrackedUserWhereInput[]
    id?: IntFilter<"TrackedUser"> | number
    did?: StringFilter<"TrackedUser"> | string
    TrackingConfig?: TrackingConfigListRelationFilter
  }

  export type TrackedUserOrderByWithRelationInput = {
    id?: SortOrder
    did?: SortOrder
    TrackingConfig?: TrackingConfigOrderByRelationAggregateInput
  }

  export type TrackedUserWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    did?: string
    AND?: TrackedUserWhereInput | TrackedUserWhereInput[]
    OR?: TrackedUserWhereInput[]
    NOT?: TrackedUserWhereInput | TrackedUserWhereInput[]
    TrackingConfig?: TrackingConfigListRelationFilter
  }, "id" | "did">

  export type TrackedUserOrderByWithAggregationInput = {
    id?: SortOrder
    did?: SortOrder
    _count?: TrackedUserCountOrderByAggregateInput
    _avg?: TrackedUserAvgOrderByAggregateInput
    _max?: TrackedUserMaxOrderByAggregateInput
    _min?: TrackedUserMinOrderByAggregateInput
    _sum?: TrackedUserSumOrderByAggregateInput
  }

  export type TrackedUserScalarWhereWithAggregatesInput = {
    AND?: TrackedUserScalarWhereWithAggregatesInput | TrackedUserScalarWhereWithAggregatesInput[]
    OR?: TrackedUserScalarWhereWithAggregatesInput[]
    NOT?: TrackedUserScalarWhereWithAggregatesInput | TrackedUserScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"TrackedUser"> | number
    did?: StringWithAggregatesFilter<"TrackedUser"> | string
  }

  export type DiscordChannelWhereInput = {
    AND?: DiscordChannelWhereInput | DiscordChannelWhereInput[]
    OR?: DiscordChannelWhereInput[]
    NOT?: DiscordChannelWhereInput | DiscordChannelWhereInput[]
    id?: IntFilter<"DiscordChannel"> | number
    channelId?: StringFilter<"DiscordChannel"> | string
    TrackingConfig?: TrackingConfigListRelationFilter
  }

  export type DiscordChannelOrderByWithRelationInput = {
    id?: SortOrder
    channelId?: SortOrder
    TrackingConfig?: TrackingConfigOrderByRelationAggregateInput
  }

  export type DiscordChannelWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    channelId?: string
    AND?: DiscordChannelWhereInput | DiscordChannelWhereInput[]
    OR?: DiscordChannelWhereInput[]
    NOT?: DiscordChannelWhereInput | DiscordChannelWhereInput[]
    TrackingConfig?: TrackingConfigListRelationFilter
  }, "id" | "channelId">

  export type DiscordChannelOrderByWithAggregationInput = {
    id?: SortOrder
    channelId?: SortOrder
    _count?: DiscordChannelCountOrderByAggregateInput
    _avg?: DiscordChannelAvgOrderByAggregateInput
    _max?: DiscordChannelMaxOrderByAggregateInput
    _min?: DiscordChannelMinOrderByAggregateInput
    _sum?: DiscordChannelSumOrderByAggregateInput
  }

  export type DiscordChannelScalarWhereWithAggregatesInput = {
    AND?: DiscordChannelScalarWhereWithAggregatesInput | DiscordChannelScalarWhereWithAggregatesInput[]
    OR?: DiscordChannelScalarWhereWithAggregatesInput[]
    NOT?: DiscordChannelScalarWhereWithAggregatesInput | DiscordChannelScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"DiscordChannel"> | number
    channelId?: StringWithAggregatesFilter<"DiscordChannel"> | string
  }

  export type TrackingConfigWhereInput = {
    AND?: TrackingConfigWhereInput | TrackingConfigWhereInput[]
    OR?: TrackingConfigWhereInput[]
    NOT?: TrackingConfigWhereInput | TrackingConfigWhereInput[]
    id?: IntFilter<"TrackingConfig"> | number
    userId?: IntFilter<"TrackingConfig"> | number
    channelId?: IntFilter<"TrackingConfig"> | number
    showReposts?: BoolFilter<"TrackingConfig"> | boolean
    user?: XOR<TrackedUserRelationFilter, TrackedUserWhereInput>
    channel?: XOR<DiscordChannelRelationFilter, DiscordChannelWhereInput>
  }

  export type TrackingConfigOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    channelId?: SortOrder
    showReposts?: SortOrder
    user?: TrackedUserOrderByWithRelationInput
    channel?: DiscordChannelOrderByWithRelationInput
  }

  export type TrackingConfigWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    userId_channelId?: TrackingConfigUserIdChannelIdCompoundUniqueInput
    AND?: TrackingConfigWhereInput | TrackingConfigWhereInput[]
    OR?: TrackingConfigWhereInput[]
    NOT?: TrackingConfigWhereInput | TrackingConfigWhereInput[]
    userId?: IntFilter<"TrackingConfig"> | number
    channelId?: IntFilter<"TrackingConfig"> | number
    showReposts?: BoolFilter<"TrackingConfig"> | boolean
    user?: XOR<TrackedUserRelationFilter, TrackedUserWhereInput>
    channel?: XOR<DiscordChannelRelationFilter, DiscordChannelWhereInput>
  }, "id" | "userId_channelId">

  export type TrackingConfigOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    channelId?: SortOrder
    showReposts?: SortOrder
    _count?: TrackingConfigCountOrderByAggregateInput
    _avg?: TrackingConfigAvgOrderByAggregateInput
    _max?: TrackingConfigMaxOrderByAggregateInput
    _min?: TrackingConfigMinOrderByAggregateInput
    _sum?: TrackingConfigSumOrderByAggregateInput
  }

  export type TrackingConfigScalarWhereWithAggregatesInput = {
    AND?: TrackingConfigScalarWhereWithAggregatesInput | TrackingConfigScalarWhereWithAggregatesInput[]
    OR?: TrackingConfigScalarWhereWithAggregatesInput[]
    NOT?: TrackingConfigScalarWhereWithAggregatesInput | TrackingConfigScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"TrackingConfig"> | number
    userId?: IntWithAggregatesFilter<"TrackingConfig"> | number
    channelId?: IntWithAggregatesFilter<"TrackingConfig"> | number
    showReposts?: BoolWithAggregatesFilter<"TrackingConfig"> | boolean
  }

  export type TrackedUserCreateInput = {
    did: string
    TrackingConfig?: TrackingConfigCreateNestedManyWithoutUserInput
  }

  export type TrackedUserUncheckedCreateInput = {
    id?: number
    did: string
    TrackingConfig?: TrackingConfigUncheckedCreateNestedManyWithoutUserInput
  }

  export type TrackedUserUpdateInput = {
    did?: StringFieldUpdateOperationsInput | string
    TrackingConfig?: TrackingConfigUpdateManyWithoutUserNestedInput
  }

  export type TrackedUserUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    did?: StringFieldUpdateOperationsInput | string
    TrackingConfig?: TrackingConfigUncheckedUpdateManyWithoutUserNestedInput
  }

  export type TrackedUserUpdateManyMutationInput = {
    did?: StringFieldUpdateOperationsInput | string
  }

  export type TrackedUserUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    did?: StringFieldUpdateOperationsInput | string
  }

  export type DiscordChannelCreateInput = {
    channelId: string
    TrackingConfig?: TrackingConfigCreateNestedManyWithoutChannelInput
  }

  export type DiscordChannelUncheckedCreateInput = {
    id?: number
    channelId: string
    TrackingConfig?: TrackingConfigUncheckedCreateNestedManyWithoutChannelInput
  }

  export type DiscordChannelUpdateInput = {
    channelId?: StringFieldUpdateOperationsInput | string
    TrackingConfig?: TrackingConfigUpdateManyWithoutChannelNestedInput
  }

  export type DiscordChannelUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    channelId?: StringFieldUpdateOperationsInput | string
    TrackingConfig?: TrackingConfigUncheckedUpdateManyWithoutChannelNestedInput
  }

  export type DiscordChannelUpdateManyMutationInput = {
    channelId?: StringFieldUpdateOperationsInput | string
  }

  export type DiscordChannelUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    channelId?: StringFieldUpdateOperationsInput | string
  }

  export type TrackingConfigCreateInput = {
    showReposts?: boolean
    user: TrackedUserCreateNestedOneWithoutTrackingConfigInput
    channel: DiscordChannelCreateNestedOneWithoutTrackingConfigInput
  }

  export type TrackingConfigUncheckedCreateInput = {
    id?: number
    userId: number
    channelId: number
    showReposts?: boolean
  }

  export type TrackingConfigUpdateInput = {
    showReposts?: BoolFieldUpdateOperationsInput | boolean
    user?: TrackedUserUpdateOneRequiredWithoutTrackingConfigNestedInput
    channel?: DiscordChannelUpdateOneRequiredWithoutTrackingConfigNestedInput
  }

  export type TrackingConfigUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    channelId?: IntFieldUpdateOperationsInput | number
    showReposts?: BoolFieldUpdateOperationsInput | boolean
  }

  export type TrackingConfigUpdateManyMutationInput = {
    showReposts?: BoolFieldUpdateOperationsInput | boolean
  }

  export type TrackingConfigUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    channelId?: IntFieldUpdateOperationsInput | number
    showReposts?: BoolFieldUpdateOperationsInput | boolean
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type TrackingConfigListRelationFilter = {
    every?: TrackingConfigWhereInput
    some?: TrackingConfigWhereInput
    none?: TrackingConfigWhereInput
  }

  export type TrackingConfigOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TrackedUserCountOrderByAggregateInput = {
    id?: SortOrder
    did?: SortOrder
  }

  export type TrackedUserAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type TrackedUserMaxOrderByAggregateInput = {
    id?: SortOrder
    did?: SortOrder
  }

  export type TrackedUserMinOrderByAggregateInput = {
    id?: SortOrder
    did?: SortOrder
  }

  export type TrackedUserSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type DiscordChannelCountOrderByAggregateInput = {
    id?: SortOrder
    channelId?: SortOrder
  }

  export type DiscordChannelAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type DiscordChannelMaxOrderByAggregateInput = {
    id?: SortOrder
    channelId?: SortOrder
  }

  export type DiscordChannelMinOrderByAggregateInput = {
    id?: SortOrder
    channelId?: SortOrder
  }

  export type DiscordChannelSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type TrackedUserRelationFilter = {
    is?: TrackedUserWhereInput
    isNot?: TrackedUserWhereInput
  }

  export type DiscordChannelRelationFilter = {
    is?: DiscordChannelWhereInput
    isNot?: DiscordChannelWhereInput
  }

  export type TrackingConfigUserIdChannelIdCompoundUniqueInput = {
    userId: number
    channelId: number
  }

  export type TrackingConfigCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    channelId?: SortOrder
    showReposts?: SortOrder
  }

  export type TrackingConfigAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    channelId?: SortOrder
  }

  export type TrackingConfigMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    channelId?: SortOrder
    showReposts?: SortOrder
  }

  export type TrackingConfigMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    channelId?: SortOrder
    showReposts?: SortOrder
  }

  export type TrackingConfigSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    channelId?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type TrackingConfigCreateNestedManyWithoutUserInput = {
    create?: XOR<TrackingConfigCreateWithoutUserInput, TrackingConfigUncheckedCreateWithoutUserInput> | TrackingConfigCreateWithoutUserInput[] | TrackingConfigUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TrackingConfigCreateOrConnectWithoutUserInput | TrackingConfigCreateOrConnectWithoutUserInput[]
    connect?: TrackingConfigWhereUniqueInput | TrackingConfigWhereUniqueInput[]
  }

  export type TrackingConfigUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<TrackingConfigCreateWithoutUserInput, TrackingConfigUncheckedCreateWithoutUserInput> | TrackingConfigCreateWithoutUserInput[] | TrackingConfigUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TrackingConfigCreateOrConnectWithoutUserInput | TrackingConfigCreateOrConnectWithoutUserInput[]
    connect?: TrackingConfigWhereUniqueInput | TrackingConfigWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type TrackingConfigUpdateManyWithoutUserNestedInput = {
    create?: XOR<TrackingConfigCreateWithoutUserInput, TrackingConfigUncheckedCreateWithoutUserInput> | TrackingConfigCreateWithoutUserInput[] | TrackingConfigUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TrackingConfigCreateOrConnectWithoutUserInput | TrackingConfigCreateOrConnectWithoutUserInput[]
    upsert?: TrackingConfigUpsertWithWhereUniqueWithoutUserInput | TrackingConfigUpsertWithWhereUniqueWithoutUserInput[]
    set?: TrackingConfigWhereUniqueInput | TrackingConfigWhereUniqueInput[]
    disconnect?: TrackingConfigWhereUniqueInput | TrackingConfigWhereUniqueInput[]
    delete?: TrackingConfigWhereUniqueInput | TrackingConfigWhereUniqueInput[]
    connect?: TrackingConfigWhereUniqueInput | TrackingConfigWhereUniqueInput[]
    update?: TrackingConfigUpdateWithWhereUniqueWithoutUserInput | TrackingConfigUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: TrackingConfigUpdateManyWithWhereWithoutUserInput | TrackingConfigUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: TrackingConfigScalarWhereInput | TrackingConfigScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type TrackingConfigUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<TrackingConfigCreateWithoutUserInput, TrackingConfigUncheckedCreateWithoutUserInput> | TrackingConfigCreateWithoutUserInput[] | TrackingConfigUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TrackingConfigCreateOrConnectWithoutUserInput | TrackingConfigCreateOrConnectWithoutUserInput[]
    upsert?: TrackingConfigUpsertWithWhereUniqueWithoutUserInput | TrackingConfigUpsertWithWhereUniqueWithoutUserInput[]
    set?: TrackingConfigWhereUniqueInput | TrackingConfigWhereUniqueInput[]
    disconnect?: TrackingConfigWhereUniqueInput | TrackingConfigWhereUniqueInput[]
    delete?: TrackingConfigWhereUniqueInput | TrackingConfigWhereUniqueInput[]
    connect?: TrackingConfigWhereUniqueInput | TrackingConfigWhereUniqueInput[]
    update?: TrackingConfigUpdateWithWhereUniqueWithoutUserInput | TrackingConfigUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: TrackingConfigUpdateManyWithWhereWithoutUserInput | TrackingConfigUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: TrackingConfigScalarWhereInput | TrackingConfigScalarWhereInput[]
  }

  export type TrackingConfigCreateNestedManyWithoutChannelInput = {
    create?: XOR<TrackingConfigCreateWithoutChannelInput, TrackingConfigUncheckedCreateWithoutChannelInput> | TrackingConfigCreateWithoutChannelInput[] | TrackingConfigUncheckedCreateWithoutChannelInput[]
    connectOrCreate?: TrackingConfigCreateOrConnectWithoutChannelInput | TrackingConfigCreateOrConnectWithoutChannelInput[]
    connect?: TrackingConfigWhereUniqueInput | TrackingConfigWhereUniqueInput[]
  }

  export type TrackingConfigUncheckedCreateNestedManyWithoutChannelInput = {
    create?: XOR<TrackingConfigCreateWithoutChannelInput, TrackingConfigUncheckedCreateWithoutChannelInput> | TrackingConfigCreateWithoutChannelInput[] | TrackingConfigUncheckedCreateWithoutChannelInput[]
    connectOrCreate?: TrackingConfigCreateOrConnectWithoutChannelInput | TrackingConfigCreateOrConnectWithoutChannelInput[]
    connect?: TrackingConfigWhereUniqueInput | TrackingConfigWhereUniqueInput[]
  }

  export type TrackingConfigUpdateManyWithoutChannelNestedInput = {
    create?: XOR<TrackingConfigCreateWithoutChannelInput, TrackingConfigUncheckedCreateWithoutChannelInput> | TrackingConfigCreateWithoutChannelInput[] | TrackingConfigUncheckedCreateWithoutChannelInput[]
    connectOrCreate?: TrackingConfigCreateOrConnectWithoutChannelInput | TrackingConfigCreateOrConnectWithoutChannelInput[]
    upsert?: TrackingConfigUpsertWithWhereUniqueWithoutChannelInput | TrackingConfigUpsertWithWhereUniqueWithoutChannelInput[]
    set?: TrackingConfigWhereUniqueInput | TrackingConfigWhereUniqueInput[]
    disconnect?: TrackingConfigWhereUniqueInput | TrackingConfigWhereUniqueInput[]
    delete?: TrackingConfigWhereUniqueInput | TrackingConfigWhereUniqueInput[]
    connect?: TrackingConfigWhereUniqueInput | TrackingConfigWhereUniqueInput[]
    update?: TrackingConfigUpdateWithWhereUniqueWithoutChannelInput | TrackingConfigUpdateWithWhereUniqueWithoutChannelInput[]
    updateMany?: TrackingConfigUpdateManyWithWhereWithoutChannelInput | TrackingConfigUpdateManyWithWhereWithoutChannelInput[]
    deleteMany?: TrackingConfigScalarWhereInput | TrackingConfigScalarWhereInput[]
  }

  export type TrackingConfigUncheckedUpdateManyWithoutChannelNestedInput = {
    create?: XOR<TrackingConfigCreateWithoutChannelInput, TrackingConfigUncheckedCreateWithoutChannelInput> | TrackingConfigCreateWithoutChannelInput[] | TrackingConfigUncheckedCreateWithoutChannelInput[]
    connectOrCreate?: TrackingConfigCreateOrConnectWithoutChannelInput | TrackingConfigCreateOrConnectWithoutChannelInput[]
    upsert?: TrackingConfigUpsertWithWhereUniqueWithoutChannelInput | TrackingConfigUpsertWithWhereUniqueWithoutChannelInput[]
    set?: TrackingConfigWhereUniqueInput | TrackingConfigWhereUniqueInput[]
    disconnect?: TrackingConfigWhereUniqueInput | TrackingConfigWhereUniqueInput[]
    delete?: TrackingConfigWhereUniqueInput | TrackingConfigWhereUniqueInput[]
    connect?: TrackingConfigWhereUniqueInput | TrackingConfigWhereUniqueInput[]
    update?: TrackingConfigUpdateWithWhereUniqueWithoutChannelInput | TrackingConfigUpdateWithWhereUniqueWithoutChannelInput[]
    updateMany?: TrackingConfigUpdateManyWithWhereWithoutChannelInput | TrackingConfigUpdateManyWithWhereWithoutChannelInput[]
    deleteMany?: TrackingConfigScalarWhereInput | TrackingConfigScalarWhereInput[]
  }

  export type TrackedUserCreateNestedOneWithoutTrackingConfigInput = {
    create?: XOR<TrackedUserCreateWithoutTrackingConfigInput, TrackedUserUncheckedCreateWithoutTrackingConfigInput>
    connectOrCreate?: TrackedUserCreateOrConnectWithoutTrackingConfigInput
    connect?: TrackedUserWhereUniqueInput
  }

  export type DiscordChannelCreateNestedOneWithoutTrackingConfigInput = {
    create?: XOR<DiscordChannelCreateWithoutTrackingConfigInput, DiscordChannelUncheckedCreateWithoutTrackingConfigInput>
    connectOrCreate?: DiscordChannelCreateOrConnectWithoutTrackingConfigInput
    connect?: DiscordChannelWhereUniqueInput
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type TrackedUserUpdateOneRequiredWithoutTrackingConfigNestedInput = {
    create?: XOR<TrackedUserCreateWithoutTrackingConfigInput, TrackedUserUncheckedCreateWithoutTrackingConfigInput>
    connectOrCreate?: TrackedUserCreateOrConnectWithoutTrackingConfigInput
    upsert?: TrackedUserUpsertWithoutTrackingConfigInput
    connect?: TrackedUserWhereUniqueInput
    update?: XOR<XOR<TrackedUserUpdateToOneWithWhereWithoutTrackingConfigInput, TrackedUserUpdateWithoutTrackingConfigInput>, TrackedUserUncheckedUpdateWithoutTrackingConfigInput>
  }

  export type DiscordChannelUpdateOneRequiredWithoutTrackingConfigNestedInput = {
    create?: XOR<DiscordChannelCreateWithoutTrackingConfigInput, DiscordChannelUncheckedCreateWithoutTrackingConfigInput>
    connectOrCreate?: DiscordChannelCreateOrConnectWithoutTrackingConfigInput
    upsert?: DiscordChannelUpsertWithoutTrackingConfigInput
    connect?: DiscordChannelWhereUniqueInput
    update?: XOR<XOR<DiscordChannelUpdateToOneWithWhereWithoutTrackingConfigInput, DiscordChannelUpdateWithoutTrackingConfigInput>, DiscordChannelUncheckedUpdateWithoutTrackingConfigInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type TrackingConfigCreateWithoutUserInput = {
    showReposts?: boolean
    channel: DiscordChannelCreateNestedOneWithoutTrackingConfigInput
  }

  export type TrackingConfigUncheckedCreateWithoutUserInput = {
    id?: number
    channelId: number
    showReposts?: boolean
  }

  export type TrackingConfigCreateOrConnectWithoutUserInput = {
    where: TrackingConfigWhereUniqueInput
    create: XOR<TrackingConfigCreateWithoutUserInput, TrackingConfigUncheckedCreateWithoutUserInput>
  }

  export type TrackingConfigUpsertWithWhereUniqueWithoutUserInput = {
    where: TrackingConfigWhereUniqueInput
    update: XOR<TrackingConfigUpdateWithoutUserInput, TrackingConfigUncheckedUpdateWithoutUserInput>
    create: XOR<TrackingConfigCreateWithoutUserInput, TrackingConfigUncheckedCreateWithoutUserInput>
  }

  export type TrackingConfigUpdateWithWhereUniqueWithoutUserInput = {
    where: TrackingConfigWhereUniqueInput
    data: XOR<TrackingConfigUpdateWithoutUserInput, TrackingConfigUncheckedUpdateWithoutUserInput>
  }

  export type TrackingConfigUpdateManyWithWhereWithoutUserInput = {
    where: TrackingConfigScalarWhereInput
    data: XOR<TrackingConfigUpdateManyMutationInput, TrackingConfigUncheckedUpdateManyWithoutUserInput>
  }

  export type TrackingConfigScalarWhereInput = {
    AND?: TrackingConfigScalarWhereInput | TrackingConfigScalarWhereInput[]
    OR?: TrackingConfigScalarWhereInput[]
    NOT?: TrackingConfigScalarWhereInput | TrackingConfigScalarWhereInput[]
    id?: IntFilter<"TrackingConfig"> | number
    userId?: IntFilter<"TrackingConfig"> | number
    channelId?: IntFilter<"TrackingConfig"> | number
    showReposts?: BoolFilter<"TrackingConfig"> | boolean
  }

  export type TrackingConfigCreateWithoutChannelInput = {
    showReposts?: boolean
    user: TrackedUserCreateNestedOneWithoutTrackingConfigInput
  }

  export type TrackingConfigUncheckedCreateWithoutChannelInput = {
    id?: number
    userId: number
    showReposts?: boolean
  }

  export type TrackingConfigCreateOrConnectWithoutChannelInput = {
    where: TrackingConfigWhereUniqueInput
    create: XOR<TrackingConfigCreateWithoutChannelInput, TrackingConfigUncheckedCreateWithoutChannelInput>
  }

  export type TrackingConfigUpsertWithWhereUniqueWithoutChannelInput = {
    where: TrackingConfigWhereUniqueInput
    update: XOR<TrackingConfigUpdateWithoutChannelInput, TrackingConfigUncheckedUpdateWithoutChannelInput>
    create: XOR<TrackingConfigCreateWithoutChannelInput, TrackingConfigUncheckedCreateWithoutChannelInput>
  }

  export type TrackingConfigUpdateWithWhereUniqueWithoutChannelInput = {
    where: TrackingConfigWhereUniqueInput
    data: XOR<TrackingConfigUpdateWithoutChannelInput, TrackingConfigUncheckedUpdateWithoutChannelInput>
  }

  export type TrackingConfigUpdateManyWithWhereWithoutChannelInput = {
    where: TrackingConfigScalarWhereInput
    data: XOR<TrackingConfigUpdateManyMutationInput, TrackingConfigUncheckedUpdateManyWithoutChannelInput>
  }

  export type TrackedUserCreateWithoutTrackingConfigInput = {
    did: string
  }

  export type TrackedUserUncheckedCreateWithoutTrackingConfigInput = {
    id?: number
    did: string
  }

  export type TrackedUserCreateOrConnectWithoutTrackingConfigInput = {
    where: TrackedUserWhereUniqueInput
    create: XOR<TrackedUserCreateWithoutTrackingConfigInput, TrackedUserUncheckedCreateWithoutTrackingConfigInput>
  }

  export type DiscordChannelCreateWithoutTrackingConfigInput = {
    channelId: string
  }

  export type DiscordChannelUncheckedCreateWithoutTrackingConfigInput = {
    id?: number
    channelId: string
  }

  export type DiscordChannelCreateOrConnectWithoutTrackingConfigInput = {
    where: DiscordChannelWhereUniqueInput
    create: XOR<DiscordChannelCreateWithoutTrackingConfigInput, DiscordChannelUncheckedCreateWithoutTrackingConfigInput>
  }

  export type TrackedUserUpsertWithoutTrackingConfigInput = {
    update: XOR<TrackedUserUpdateWithoutTrackingConfigInput, TrackedUserUncheckedUpdateWithoutTrackingConfigInput>
    create: XOR<TrackedUserCreateWithoutTrackingConfigInput, TrackedUserUncheckedCreateWithoutTrackingConfigInput>
    where?: TrackedUserWhereInput
  }

  export type TrackedUserUpdateToOneWithWhereWithoutTrackingConfigInput = {
    where?: TrackedUserWhereInput
    data: XOR<TrackedUserUpdateWithoutTrackingConfigInput, TrackedUserUncheckedUpdateWithoutTrackingConfigInput>
  }

  export type TrackedUserUpdateWithoutTrackingConfigInput = {
    did?: StringFieldUpdateOperationsInput | string
  }

  export type TrackedUserUncheckedUpdateWithoutTrackingConfigInput = {
    id?: IntFieldUpdateOperationsInput | number
    did?: StringFieldUpdateOperationsInput | string
  }

  export type DiscordChannelUpsertWithoutTrackingConfigInput = {
    update: XOR<DiscordChannelUpdateWithoutTrackingConfigInput, DiscordChannelUncheckedUpdateWithoutTrackingConfigInput>
    create: XOR<DiscordChannelCreateWithoutTrackingConfigInput, DiscordChannelUncheckedCreateWithoutTrackingConfigInput>
    where?: DiscordChannelWhereInput
  }

  export type DiscordChannelUpdateToOneWithWhereWithoutTrackingConfigInput = {
    where?: DiscordChannelWhereInput
    data: XOR<DiscordChannelUpdateWithoutTrackingConfigInput, DiscordChannelUncheckedUpdateWithoutTrackingConfigInput>
  }

  export type DiscordChannelUpdateWithoutTrackingConfigInput = {
    channelId?: StringFieldUpdateOperationsInput | string
  }

  export type DiscordChannelUncheckedUpdateWithoutTrackingConfigInput = {
    id?: IntFieldUpdateOperationsInput | number
    channelId?: StringFieldUpdateOperationsInput | string
  }

  export type TrackingConfigUpdateWithoutUserInput = {
    showReposts?: BoolFieldUpdateOperationsInput | boolean
    channel?: DiscordChannelUpdateOneRequiredWithoutTrackingConfigNestedInput
  }

  export type TrackingConfigUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    channelId?: IntFieldUpdateOperationsInput | number
    showReposts?: BoolFieldUpdateOperationsInput | boolean
  }

  export type TrackingConfigUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    channelId?: IntFieldUpdateOperationsInput | number
    showReposts?: BoolFieldUpdateOperationsInput | boolean
  }

  export type TrackingConfigUpdateWithoutChannelInput = {
    showReposts?: BoolFieldUpdateOperationsInput | boolean
    user?: TrackedUserUpdateOneRequiredWithoutTrackingConfigNestedInput
  }

  export type TrackingConfigUncheckedUpdateWithoutChannelInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    showReposts?: BoolFieldUpdateOperationsInput | boolean
  }

  export type TrackingConfigUncheckedUpdateManyWithoutChannelInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    showReposts?: BoolFieldUpdateOperationsInput | boolean
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use TrackedUserCountOutputTypeDefaultArgs instead
     */
    export type TrackedUserCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = TrackedUserCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use DiscordChannelCountOutputTypeDefaultArgs instead
     */
    export type DiscordChannelCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = DiscordChannelCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use TrackedUserDefaultArgs instead
     */
    export type TrackedUserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = TrackedUserDefaultArgs<ExtArgs>
    /**
     * @deprecated Use DiscordChannelDefaultArgs instead
     */
    export type DiscordChannelArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = DiscordChannelDefaultArgs<ExtArgs>
    /**
     * @deprecated Use TrackingConfigDefaultArgs instead
     */
    export type TrackingConfigArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = TrackingConfigDefaultArgs<ExtArgs>

  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}