
/**
 * Client
**/

import * as runtime from './runtime/client.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Nivel
 * 
 */
export type Nivel = $Result.DefaultSelection<Prisma.$NivelPayload>
/**
 * Model Especificacion
 * 
 */
export type Especificacion = $Result.DefaultSelection<Prisma.$EspecificacionPayload>
/**
 * Model NotaImportante
 * 
 */
export type NotaImportante = $Result.DefaultSelection<Prisma.$NotaImportantePayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Nivels
 * const nivels = await prisma.nivel.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://pris.ly/d/client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
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
   * // Fetch zero or more Nivels
   * const nivels = await prisma.nivel.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://pris.ly/d/client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.nivel`: Exposes CRUD operations for the **Nivel** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Nivels
    * const nivels = await prisma.nivel.findMany()
    * ```
    */
  get nivel(): Prisma.NivelDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.especificacion`: Exposes CRUD operations for the **Especificacion** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Especificacions
    * const especificacions = await prisma.especificacion.findMany()
    * ```
    */
  get especificacion(): Prisma.EspecificacionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.notaImportante`: Exposes CRUD operations for the **NotaImportante** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more NotaImportantes
    * const notaImportantes = await prisma.notaImportante.findMany()
    * ```
    */
  get notaImportante(): Prisma.NotaImportanteDelegate<ExtArgs, ClientOptions>;
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
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 7.3.0
   * Query Engine version: 9d6ad21cbbceab97458517b147a6a09ff43aa735
   */
  export type PrismaVersion = {
    client: string
    engine: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

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

  type SelectAndOmit = {
    select: any
    omit: any
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
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
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
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
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
    Nivel: 'Nivel',
    Especificacion: 'Especificacion',
    NotaImportante: 'NotaImportante'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]



  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "nivel" | "especificacion" | "notaImportante"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Nivel: {
        payload: Prisma.$NivelPayload<ExtArgs>
        fields: Prisma.NivelFieldRefs
        operations: {
          findUnique: {
            args: Prisma.NivelFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NivelPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.NivelFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NivelPayload>
          }
          findFirst: {
            args: Prisma.NivelFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NivelPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.NivelFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NivelPayload>
          }
          findMany: {
            args: Prisma.NivelFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NivelPayload>[]
          }
          create: {
            args: Prisma.NivelCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NivelPayload>
          }
          createMany: {
            args: Prisma.NivelCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.NivelCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NivelPayload>[]
          }
          delete: {
            args: Prisma.NivelDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NivelPayload>
          }
          update: {
            args: Prisma.NivelUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NivelPayload>
          }
          deleteMany: {
            args: Prisma.NivelDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.NivelUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.NivelUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NivelPayload>[]
          }
          upsert: {
            args: Prisma.NivelUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NivelPayload>
          }
          aggregate: {
            args: Prisma.NivelAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateNivel>
          }
          groupBy: {
            args: Prisma.NivelGroupByArgs<ExtArgs>
            result: $Utils.Optional<NivelGroupByOutputType>[]
          }
          count: {
            args: Prisma.NivelCountArgs<ExtArgs>
            result: $Utils.Optional<NivelCountAggregateOutputType> | number
          }
        }
      }
      Especificacion: {
        payload: Prisma.$EspecificacionPayload<ExtArgs>
        fields: Prisma.EspecificacionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.EspecificacionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EspecificacionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.EspecificacionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EspecificacionPayload>
          }
          findFirst: {
            args: Prisma.EspecificacionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EspecificacionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.EspecificacionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EspecificacionPayload>
          }
          findMany: {
            args: Prisma.EspecificacionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EspecificacionPayload>[]
          }
          create: {
            args: Prisma.EspecificacionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EspecificacionPayload>
          }
          createMany: {
            args: Prisma.EspecificacionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.EspecificacionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EspecificacionPayload>[]
          }
          delete: {
            args: Prisma.EspecificacionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EspecificacionPayload>
          }
          update: {
            args: Prisma.EspecificacionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EspecificacionPayload>
          }
          deleteMany: {
            args: Prisma.EspecificacionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.EspecificacionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.EspecificacionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EspecificacionPayload>[]
          }
          upsert: {
            args: Prisma.EspecificacionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EspecificacionPayload>
          }
          aggregate: {
            args: Prisma.EspecificacionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEspecificacion>
          }
          groupBy: {
            args: Prisma.EspecificacionGroupByArgs<ExtArgs>
            result: $Utils.Optional<EspecificacionGroupByOutputType>[]
          }
          count: {
            args: Prisma.EspecificacionCountArgs<ExtArgs>
            result: $Utils.Optional<EspecificacionCountAggregateOutputType> | number
          }
        }
      }
      NotaImportante: {
        payload: Prisma.$NotaImportantePayload<ExtArgs>
        fields: Prisma.NotaImportanteFieldRefs
        operations: {
          findUnique: {
            args: Prisma.NotaImportanteFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotaImportantePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.NotaImportanteFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotaImportantePayload>
          }
          findFirst: {
            args: Prisma.NotaImportanteFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotaImportantePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.NotaImportanteFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotaImportantePayload>
          }
          findMany: {
            args: Prisma.NotaImportanteFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotaImportantePayload>[]
          }
          create: {
            args: Prisma.NotaImportanteCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotaImportantePayload>
          }
          createMany: {
            args: Prisma.NotaImportanteCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.NotaImportanteCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotaImportantePayload>[]
          }
          delete: {
            args: Prisma.NotaImportanteDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotaImportantePayload>
          }
          update: {
            args: Prisma.NotaImportanteUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotaImportantePayload>
          }
          deleteMany: {
            args: Prisma.NotaImportanteDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.NotaImportanteUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.NotaImportanteUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotaImportantePayload>[]
          }
          upsert: {
            args: Prisma.NotaImportanteUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotaImportantePayload>
          }
          aggregate: {
            args: Prisma.NotaImportanteAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateNotaImportante>
          }
          groupBy: {
            args: Prisma.NotaImportanteGroupByArgs<ExtArgs>
            result: $Utils.Optional<NotaImportanteGroupByOutputType>[]
          }
          count: {
            args: Prisma.NotaImportanteCountArgs<ExtArgs>
            result: $Utils.Optional<NotaImportanteCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://pris.ly/d/logging).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory
    /**
     * Prisma Accelerate URL allowing the client to connect through Accelerate instead of a direct database.
     */
    accelerateUrl?: string
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
    /**
     * SQL commenter plugins that add metadata to SQL queries as comments.
     * Comments follow the sqlcommenter format: https://google.github.io/sqlcommenter/
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   adapter,
     *   comments: [
     *     traceContext(),
     *     queryInsights(),
     *   ],
     * })
     * ```
     */
    comments?: runtime.SqlCommenterPlugin[]
  }
  export type GlobalOmitConfig = {
    nivel?: NivelOmit
    especificacion?: EspecificacionOmit
    notaImportante?: NotaImportanteOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

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
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
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
   * Count Type NivelCountOutputType
   */

  export type NivelCountOutputType = {
    especificaciones: number
  }

  export type NivelCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    especificaciones?: boolean | NivelCountOutputTypeCountEspecificacionesArgs
  }

  // Custom InputTypes
  /**
   * NivelCountOutputType without action
   */
  export type NivelCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NivelCountOutputType
     */
    select?: NivelCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * NivelCountOutputType without action
   */
  export type NivelCountOutputTypeCountEspecificacionesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EspecificacionWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Nivel
   */

  export type AggregateNivel = {
    _count: NivelCountAggregateOutputType | null
    _min: NivelMinAggregateOutputType | null
    _max: NivelMaxAggregateOutputType | null
  }

  export type NivelMinAggregateOutputType = {
    id: string | null
    nivel: string | null
    nombre: string | null
    descripcion: string | null
    software: string | null
    requisitoPermanente: string | null
    criticidad: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type NivelMaxAggregateOutputType = {
    id: string | null
    nivel: string | null
    nombre: string | null
    descripcion: string | null
    software: string | null
    requisitoPermanente: string | null
    criticidad: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type NivelCountAggregateOutputType = {
    id: number
    nivel: number
    nombre: number
    descripcion: number
    ejemplos: number
    software: number
    requisitoPermanente: number
    criticidad: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type NivelMinAggregateInputType = {
    id?: true
    nivel?: true
    nombre?: true
    descripcion?: true
    software?: true
    requisitoPermanente?: true
    criticidad?: true
    createdAt?: true
    updatedAt?: true
  }

  export type NivelMaxAggregateInputType = {
    id?: true
    nivel?: true
    nombre?: true
    descripcion?: true
    software?: true
    requisitoPermanente?: true
    criticidad?: true
    createdAt?: true
    updatedAt?: true
  }

  export type NivelCountAggregateInputType = {
    id?: true
    nivel?: true
    nombre?: true
    descripcion?: true
    ejemplos?: true
    software?: true
    requisitoPermanente?: true
    criticidad?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type NivelAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Nivel to aggregate.
     */
    where?: NivelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Nivels to fetch.
     */
    orderBy?: NivelOrderByWithRelationInput | NivelOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: NivelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Nivels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Nivels.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Nivels
    **/
    _count?: true | NivelCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: NivelMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: NivelMaxAggregateInputType
  }

  export type GetNivelAggregateType<T extends NivelAggregateArgs> = {
        [P in keyof T & keyof AggregateNivel]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateNivel[P]>
      : GetScalarType<T[P], AggregateNivel[P]>
  }




  export type NivelGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NivelWhereInput
    orderBy?: NivelOrderByWithAggregationInput | NivelOrderByWithAggregationInput[]
    by: NivelScalarFieldEnum[] | NivelScalarFieldEnum
    having?: NivelScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: NivelCountAggregateInputType | true
    _min?: NivelMinAggregateInputType
    _max?: NivelMaxAggregateInputType
  }

  export type NivelGroupByOutputType = {
    id: string
    nivel: string
    nombre: string
    descripcion: string
    ejemplos: string[]
    software: string
    requisitoPermanente: string
    criticidad: string
    createdAt: Date
    updatedAt: Date
    _count: NivelCountAggregateOutputType | null
    _min: NivelMinAggregateOutputType | null
    _max: NivelMaxAggregateOutputType | null
  }

  type GetNivelGroupByPayload<T extends NivelGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<NivelGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof NivelGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], NivelGroupByOutputType[P]>
            : GetScalarType<T[P], NivelGroupByOutputType[P]>
        }
      >
    >


  export type NivelSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nivel?: boolean
    nombre?: boolean
    descripcion?: boolean
    ejemplos?: boolean
    software?: boolean
    requisitoPermanente?: boolean
    criticidad?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    especificaciones?: boolean | Nivel$especificacionesArgs<ExtArgs>
    _count?: boolean | NivelCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["nivel"]>

  export type NivelSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nivel?: boolean
    nombre?: boolean
    descripcion?: boolean
    ejemplos?: boolean
    software?: boolean
    requisitoPermanente?: boolean
    criticidad?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["nivel"]>

  export type NivelSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nivel?: boolean
    nombre?: boolean
    descripcion?: boolean
    ejemplos?: boolean
    software?: boolean
    requisitoPermanente?: boolean
    criticidad?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["nivel"]>

  export type NivelSelectScalar = {
    id?: boolean
    nivel?: boolean
    nombre?: boolean
    descripcion?: boolean
    ejemplos?: boolean
    software?: boolean
    requisitoPermanente?: boolean
    criticidad?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type NivelOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nivel" | "nombre" | "descripcion" | "ejemplos" | "software" | "requisitoPermanente" | "criticidad" | "createdAt" | "updatedAt", ExtArgs["result"]["nivel"]>
  export type NivelInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    especificaciones?: boolean | Nivel$especificacionesArgs<ExtArgs>
    _count?: boolean | NivelCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type NivelIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type NivelIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $NivelPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Nivel"
    objects: {
      especificaciones: Prisma.$EspecificacionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      nivel: string
      nombre: string
      descripcion: string
      ejemplos: string[]
      software: string
      requisitoPermanente: string
      criticidad: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["nivel"]>
    composites: {}
  }

  type NivelGetPayload<S extends boolean | null | undefined | NivelDefaultArgs> = $Result.GetResult<Prisma.$NivelPayload, S>

  type NivelCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<NivelFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: NivelCountAggregateInputType | true
    }

  export interface NivelDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Nivel'], meta: { name: 'Nivel' } }
    /**
     * Find zero or one Nivel that matches the filter.
     * @param {NivelFindUniqueArgs} args - Arguments to find a Nivel
     * @example
     * // Get one Nivel
     * const nivel = await prisma.nivel.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends NivelFindUniqueArgs>(args: SelectSubset<T, NivelFindUniqueArgs<ExtArgs>>): Prisma__NivelClient<$Result.GetResult<Prisma.$NivelPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Nivel that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {NivelFindUniqueOrThrowArgs} args - Arguments to find a Nivel
     * @example
     * // Get one Nivel
     * const nivel = await prisma.nivel.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends NivelFindUniqueOrThrowArgs>(args: SelectSubset<T, NivelFindUniqueOrThrowArgs<ExtArgs>>): Prisma__NivelClient<$Result.GetResult<Prisma.$NivelPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Nivel that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NivelFindFirstArgs} args - Arguments to find a Nivel
     * @example
     * // Get one Nivel
     * const nivel = await prisma.nivel.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends NivelFindFirstArgs>(args?: SelectSubset<T, NivelFindFirstArgs<ExtArgs>>): Prisma__NivelClient<$Result.GetResult<Prisma.$NivelPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Nivel that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NivelFindFirstOrThrowArgs} args - Arguments to find a Nivel
     * @example
     * // Get one Nivel
     * const nivel = await prisma.nivel.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends NivelFindFirstOrThrowArgs>(args?: SelectSubset<T, NivelFindFirstOrThrowArgs<ExtArgs>>): Prisma__NivelClient<$Result.GetResult<Prisma.$NivelPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Nivels that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NivelFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Nivels
     * const nivels = await prisma.nivel.findMany()
     * 
     * // Get first 10 Nivels
     * const nivels = await prisma.nivel.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const nivelWithIdOnly = await prisma.nivel.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends NivelFindManyArgs>(args?: SelectSubset<T, NivelFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NivelPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Nivel.
     * @param {NivelCreateArgs} args - Arguments to create a Nivel.
     * @example
     * // Create one Nivel
     * const Nivel = await prisma.nivel.create({
     *   data: {
     *     // ... data to create a Nivel
     *   }
     * })
     * 
     */
    create<T extends NivelCreateArgs>(args: SelectSubset<T, NivelCreateArgs<ExtArgs>>): Prisma__NivelClient<$Result.GetResult<Prisma.$NivelPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Nivels.
     * @param {NivelCreateManyArgs} args - Arguments to create many Nivels.
     * @example
     * // Create many Nivels
     * const nivel = await prisma.nivel.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends NivelCreateManyArgs>(args?: SelectSubset<T, NivelCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Nivels and returns the data saved in the database.
     * @param {NivelCreateManyAndReturnArgs} args - Arguments to create many Nivels.
     * @example
     * // Create many Nivels
     * const nivel = await prisma.nivel.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Nivels and only return the `id`
     * const nivelWithIdOnly = await prisma.nivel.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends NivelCreateManyAndReturnArgs>(args?: SelectSubset<T, NivelCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NivelPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Nivel.
     * @param {NivelDeleteArgs} args - Arguments to delete one Nivel.
     * @example
     * // Delete one Nivel
     * const Nivel = await prisma.nivel.delete({
     *   where: {
     *     // ... filter to delete one Nivel
     *   }
     * })
     * 
     */
    delete<T extends NivelDeleteArgs>(args: SelectSubset<T, NivelDeleteArgs<ExtArgs>>): Prisma__NivelClient<$Result.GetResult<Prisma.$NivelPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Nivel.
     * @param {NivelUpdateArgs} args - Arguments to update one Nivel.
     * @example
     * // Update one Nivel
     * const nivel = await prisma.nivel.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends NivelUpdateArgs>(args: SelectSubset<T, NivelUpdateArgs<ExtArgs>>): Prisma__NivelClient<$Result.GetResult<Prisma.$NivelPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Nivels.
     * @param {NivelDeleteManyArgs} args - Arguments to filter Nivels to delete.
     * @example
     * // Delete a few Nivels
     * const { count } = await prisma.nivel.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends NivelDeleteManyArgs>(args?: SelectSubset<T, NivelDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Nivels.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NivelUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Nivels
     * const nivel = await prisma.nivel.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends NivelUpdateManyArgs>(args: SelectSubset<T, NivelUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Nivels and returns the data updated in the database.
     * @param {NivelUpdateManyAndReturnArgs} args - Arguments to update many Nivels.
     * @example
     * // Update many Nivels
     * const nivel = await prisma.nivel.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Nivels and only return the `id`
     * const nivelWithIdOnly = await prisma.nivel.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends NivelUpdateManyAndReturnArgs>(args: SelectSubset<T, NivelUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NivelPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Nivel.
     * @param {NivelUpsertArgs} args - Arguments to update or create a Nivel.
     * @example
     * // Update or create a Nivel
     * const nivel = await prisma.nivel.upsert({
     *   create: {
     *     // ... data to create a Nivel
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Nivel we want to update
     *   }
     * })
     */
    upsert<T extends NivelUpsertArgs>(args: SelectSubset<T, NivelUpsertArgs<ExtArgs>>): Prisma__NivelClient<$Result.GetResult<Prisma.$NivelPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Nivels.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NivelCountArgs} args - Arguments to filter Nivels to count.
     * @example
     * // Count the number of Nivels
     * const count = await prisma.nivel.count({
     *   where: {
     *     // ... the filter for the Nivels we want to count
     *   }
     * })
    **/
    count<T extends NivelCountArgs>(
      args?: Subset<T, NivelCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], NivelCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Nivel.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NivelAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends NivelAggregateArgs>(args: Subset<T, NivelAggregateArgs>): Prisma.PrismaPromise<GetNivelAggregateType<T>>

    /**
     * Group by Nivel.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NivelGroupByArgs} args - Group by arguments.
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
      T extends NivelGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: NivelGroupByArgs['orderBy'] }
        : { orderBy?: NivelGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, NivelGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetNivelGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Nivel model
   */
  readonly fields: NivelFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Nivel.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__NivelClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    especificaciones<T extends Nivel$especificacionesArgs<ExtArgs> = {}>(args?: Subset<T, Nivel$especificacionesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EspecificacionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Nivel model
   */
  interface NivelFieldRefs {
    readonly id: FieldRef<"Nivel", 'String'>
    readonly nivel: FieldRef<"Nivel", 'String'>
    readonly nombre: FieldRef<"Nivel", 'String'>
    readonly descripcion: FieldRef<"Nivel", 'String'>
    readonly ejemplos: FieldRef<"Nivel", 'String[]'>
    readonly software: FieldRef<"Nivel", 'String'>
    readonly requisitoPermanente: FieldRef<"Nivel", 'String'>
    readonly criticidad: FieldRef<"Nivel", 'String'>
    readonly createdAt: FieldRef<"Nivel", 'DateTime'>
    readonly updatedAt: FieldRef<"Nivel", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Nivel findUnique
   */
  export type NivelFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Nivel
     */
    select?: NivelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Nivel
     */
    omit?: NivelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NivelInclude<ExtArgs> | null
    /**
     * Filter, which Nivel to fetch.
     */
    where: NivelWhereUniqueInput
  }

  /**
   * Nivel findUniqueOrThrow
   */
  export type NivelFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Nivel
     */
    select?: NivelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Nivel
     */
    omit?: NivelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NivelInclude<ExtArgs> | null
    /**
     * Filter, which Nivel to fetch.
     */
    where: NivelWhereUniqueInput
  }

  /**
   * Nivel findFirst
   */
  export type NivelFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Nivel
     */
    select?: NivelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Nivel
     */
    omit?: NivelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NivelInclude<ExtArgs> | null
    /**
     * Filter, which Nivel to fetch.
     */
    where?: NivelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Nivels to fetch.
     */
    orderBy?: NivelOrderByWithRelationInput | NivelOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Nivels.
     */
    cursor?: NivelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Nivels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Nivels.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Nivels.
     */
    distinct?: NivelScalarFieldEnum | NivelScalarFieldEnum[]
  }

  /**
   * Nivel findFirstOrThrow
   */
  export type NivelFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Nivel
     */
    select?: NivelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Nivel
     */
    omit?: NivelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NivelInclude<ExtArgs> | null
    /**
     * Filter, which Nivel to fetch.
     */
    where?: NivelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Nivels to fetch.
     */
    orderBy?: NivelOrderByWithRelationInput | NivelOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Nivels.
     */
    cursor?: NivelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Nivels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Nivels.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Nivels.
     */
    distinct?: NivelScalarFieldEnum | NivelScalarFieldEnum[]
  }

  /**
   * Nivel findMany
   */
  export type NivelFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Nivel
     */
    select?: NivelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Nivel
     */
    omit?: NivelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NivelInclude<ExtArgs> | null
    /**
     * Filter, which Nivels to fetch.
     */
    where?: NivelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Nivels to fetch.
     */
    orderBy?: NivelOrderByWithRelationInput | NivelOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Nivels.
     */
    cursor?: NivelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Nivels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Nivels.
     */
    skip?: number
    distinct?: NivelScalarFieldEnum | NivelScalarFieldEnum[]
  }

  /**
   * Nivel create
   */
  export type NivelCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Nivel
     */
    select?: NivelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Nivel
     */
    omit?: NivelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NivelInclude<ExtArgs> | null
    /**
     * The data needed to create a Nivel.
     */
    data: XOR<NivelCreateInput, NivelUncheckedCreateInput>
  }

  /**
   * Nivel createMany
   */
  export type NivelCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Nivels.
     */
    data: NivelCreateManyInput | NivelCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Nivel createManyAndReturn
   */
  export type NivelCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Nivel
     */
    select?: NivelSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Nivel
     */
    omit?: NivelOmit<ExtArgs> | null
    /**
     * The data used to create many Nivels.
     */
    data: NivelCreateManyInput | NivelCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Nivel update
   */
  export type NivelUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Nivel
     */
    select?: NivelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Nivel
     */
    omit?: NivelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NivelInclude<ExtArgs> | null
    /**
     * The data needed to update a Nivel.
     */
    data: XOR<NivelUpdateInput, NivelUncheckedUpdateInput>
    /**
     * Choose, which Nivel to update.
     */
    where: NivelWhereUniqueInput
  }

  /**
   * Nivel updateMany
   */
  export type NivelUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Nivels.
     */
    data: XOR<NivelUpdateManyMutationInput, NivelUncheckedUpdateManyInput>
    /**
     * Filter which Nivels to update
     */
    where?: NivelWhereInput
    /**
     * Limit how many Nivels to update.
     */
    limit?: number
  }

  /**
   * Nivel updateManyAndReturn
   */
  export type NivelUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Nivel
     */
    select?: NivelSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Nivel
     */
    omit?: NivelOmit<ExtArgs> | null
    /**
     * The data used to update Nivels.
     */
    data: XOR<NivelUpdateManyMutationInput, NivelUncheckedUpdateManyInput>
    /**
     * Filter which Nivels to update
     */
    where?: NivelWhereInput
    /**
     * Limit how many Nivels to update.
     */
    limit?: number
  }

  /**
   * Nivel upsert
   */
  export type NivelUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Nivel
     */
    select?: NivelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Nivel
     */
    omit?: NivelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NivelInclude<ExtArgs> | null
    /**
     * The filter to search for the Nivel to update in case it exists.
     */
    where: NivelWhereUniqueInput
    /**
     * In case the Nivel found by the `where` argument doesn't exist, create a new Nivel with this data.
     */
    create: XOR<NivelCreateInput, NivelUncheckedCreateInput>
    /**
     * In case the Nivel was found with the provided `where` argument, update it with this data.
     */
    update: XOR<NivelUpdateInput, NivelUncheckedUpdateInput>
  }

  /**
   * Nivel delete
   */
  export type NivelDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Nivel
     */
    select?: NivelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Nivel
     */
    omit?: NivelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NivelInclude<ExtArgs> | null
    /**
     * Filter which Nivel to delete.
     */
    where: NivelWhereUniqueInput
  }

  /**
   * Nivel deleteMany
   */
  export type NivelDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Nivels to delete
     */
    where?: NivelWhereInput
    /**
     * Limit how many Nivels to delete.
     */
    limit?: number
  }

  /**
   * Nivel.especificaciones
   */
  export type Nivel$especificacionesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Especificacion
     */
    select?: EspecificacionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Especificacion
     */
    omit?: EspecificacionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EspecificacionInclude<ExtArgs> | null
    where?: EspecificacionWhereInput
    orderBy?: EspecificacionOrderByWithRelationInput | EspecificacionOrderByWithRelationInput[]
    cursor?: EspecificacionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EspecificacionScalarFieldEnum | EspecificacionScalarFieldEnum[]
  }

  /**
   * Nivel without action
   */
  export type NivelDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Nivel
     */
    select?: NivelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Nivel
     */
    omit?: NivelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NivelInclude<ExtArgs> | null
  }


  /**
   * Model Especificacion
   */

  export type AggregateEspecificacion = {
    _count: EspecificacionCountAggregateOutputType | null
    _avg: EspecificacionAvgAggregateOutputType | null
    _sum: EspecificacionSumAggregateOutputType | null
    _min: EspecificacionMinAggregateOutputType | null
    _max: EspecificacionMaxAggregateOutputType | null
  }

  export type EspecificacionAvgAggregateOutputType = {
    año: number | null
  }

  export type EspecificacionSumAggregateOutputType = {
    año: number | null
  }

  export type EspecificacionMinAggregateOutputType = {
    id: string | null
    nivelId: string | null
    año: number | null
    vigencia: string | null
    procesador: string | null
    nucleos: string | null
    frecuencia: string | null
    ram: string | null
    almacenamiento: string | null
    gpu: string | null
    so: string | null
    notas: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type EspecificacionMaxAggregateOutputType = {
    id: string | null
    nivelId: string | null
    año: number | null
    vigencia: string | null
    procesador: string | null
    nucleos: string | null
    frecuencia: string | null
    ram: string | null
    almacenamiento: string | null
    gpu: string | null
    so: string | null
    notas: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type EspecificacionCountAggregateOutputType = {
    id: number
    nivelId: number
    año: number
    vigencia: number
    procesador: number
    nucleos: number
    frecuencia: number
    ram: number
    almacenamiento: number
    gpu: number
    so: number
    notas: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type EspecificacionAvgAggregateInputType = {
    año?: true
  }

  export type EspecificacionSumAggregateInputType = {
    año?: true
  }

  export type EspecificacionMinAggregateInputType = {
    id?: true
    nivelId?: true
    año?: true
    vigencia?: true
    procesador?: true
    nucleos?: true
    frecuencia?: true
    ram?: true
    almacenamiento?: true
    gpu?: true
    so?: true
    notas?: true
    createdAt?: true
    updatedAt?: true
  }

  export type EspecificacionMaxAggregateInputType = {
    id?: true
    nivelId?: true
    año?: true
    vigencia?: true
    procesador?: true
    nucleos?: true
    frecuencia?: true
    ram?: true
    almacenamiento?: true
    gpu?: true
    so?: true
    notas?: true
    createdAt?: true
    updatedAt?: true
  }

  export type EspecificacionCountAggregateInputType = {
    id?: true
    nivelId?: true
    año?: true
    vigencia?: true
    procesador?: true
    nucleos?: true
    frecuencia?: true
    ram?: true
    almacenamiento?: true
    gpu?: true
    so?: true
    notas?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type EspecificacionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Especificacion to aggregate.
     */
    where?: EspecificacionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Especificacions to fetch.
     */
    orderBy?: EspecificacionOrderByWithRelationInput | EspecificacionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EspecificacionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Especificacions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Especificacions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Especificacions
    **/
    _count?: true | EspecificacionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: EspecificacionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: EspecificacionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EspecificacionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EspecificacionMaxAggregateInputType
  }

  export type GetEspecificacionAggregateType<T extends EspecificacionAggregateArgs> = {
        [P in keyof T & keyof AggregateEspecificacion]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEspecificacion[P]>
      : GetScalarType<T[P], AggregateEspecificacion[P]>
  }




  export type EspecificacionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EspecificacionWhereInput
    orderBy?: EspecificacionOrderByWithAggregationInput | EspecificacionOrderByWithAggregationInput[]
    by: EspecificacionScalarFieldEnum[] | EspecificacionScalarFieldEnum
    having?: EspecificacionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EspecificacionCountAggregateInputType | true
    _avg?: EspecificacionAvgAggregateInputType
    _sum?: EspecificacionSumAggregateInputType
    _min?: EspecificacionMinAggregateInputType
    _max?: EspecificacionMaxAggregateInputType
  }

  export type EspecificacionGroupByOutputType = {
    id: string
    nivelId: string
    año: number
    vigencia: string
    procesador: string
    nucleos: string
    frecuencia: string
    ram: string
    almacenamiento: string
    gpu: string
    so: string
    notas: string
    createdAt: Date
    updatedAt: Date
    _count: EspecificacionCountAggregateOutputType | null
    _avg: EspecificacionAvgAggregateOutputType | null
    _sum: EspecificacionSumAggregateOutputType | null
    _min: EspecificacionMinAggregateOutputType | null
    _max: EspecificacionMaxAggregateOutputType | null
  }

  type GetEspecificacionGroupByPayload<T extends EspecificacionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EspecificacionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EspecificacionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EspecificacionGroupByOutputType[P]>
            : GetScalarType<T[P], EspecificacionGroupByOutputType[P]>
        }
      >
    >


  export type EspecificacionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nivelId?: boolean
    año?: boolean
    vigencia?: boolean
    procesador?: boolean
    nucleos?: boolean
    frecuencia?: boolean
    ram?: boolean
    almacenamiento?: boolean
    gpu?: boolean
    so?: boolean
    notas?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    nivel?: boolean | NivelDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["especificacion"]>

  export type EspecificacionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nivelId?: boolean
    año?: boolean
    vigencia?: boolean
    procesador?: boolean
    nucleos?: boolean
    frecuencia?: boolean
    ram?: boolean
    almacenamiento?: boolean
    gpu?: boolean
    so?: boolean
    notas?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    nivel?: boolean | NivelDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["especificacion"]>

  export type EspecificacionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nivelId?: boolean
    año?: boolean
    vigencia?: boolean
    procesador?: boolean
    nucleos?: boolean
    frecuencia?: boolean
    ram?: boolean
    almacenamiento?: boolean
    gpu?: boolean
    so?: boolean
    notas?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    nivel?: boolean | NivelDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["especificacion"]>

  export type EspecificacionSelectScalar = {
    id?: boolean
    nivelId?: boolean
    año?: boolean
    vigencia?: boolean
    procesador?: boolean
    nucleos?: boolean
    frecuencia?: boolean
    ram?: boolean
    almacenamiento?: boolean
    gpu?: boolean
    so?: boolean
    notas?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type EspecificacionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nivelId" | "año" | "vigencia" | "procesador" | "nucleos" | "frecuencia" | "ram" | "almacenamiento" | "gpu" | "so" | "notas" | "createdAt" | "updatedAt", ExtArgs["result"]["especificacion"]>
  export type EspecificacionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    nivel?: boolean | NivelDefaultArgs<ExtArgs>
  }
  export type EspecificacionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    nivel?: boolean | NivelDefaultArgs<ExtArgs>
  }
  export type EspecificacionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    nivel?: boolean | NivelDefaultArgs<ExtArgs>
  }

  export type $EspecificacionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Especificacion"
    objects: {
      nivel: Prisma.$NivelPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      nivelId: string
      año: number
      vigencia: string
      procesador: string
      nucleos: string
      frecuencia: string
      ram: string
      almacenamiento: string
      gpu: string
      so: string
      notas: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["especificacion"]>
    composites: {}
  }

  type EspecificacionGetPayload<S extends boolean | null | undefined | EspecificacionDefaultArgs> = $Result.GetResult<Prisma.$EspecificacionPayload, S>

  type EspecificacionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<EspecificacionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: EspecificacionCountAggregateInputType | true
    }

  export interface EspecificacionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Especificacion'], meta: { name: 'Especificacion' } }
    /**
     * Find zero or one Especificacion that matches the filter.
     * @param {EspecificacionFindUniqueArgs} args - Arguments to find a Especificacion
     * @example
     * // Get one Especificacion
     * const especificacion = await prisma.especificacion.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends EspecificacionFindUniqueArgs>(args: SelectSubset<T, EspecificacionFindUniqueArgs<ExtArgs>>): Prisma__EspecificacionClient<$Result.GetResult<Prisma.$EspecificacionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Especificacion that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {EspecificacionFindUniqueOrThrowArgs} args - Arguments to find a Especificacion
     * @example
     * // Get one Especificacion
     * const especificacion = await prisma.especificacion.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends EspecificacionFindUniqueOrThrowArgs>(args: SelectSubset<T, EspecificacionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__EspecificacionClient<$Result.GetResult<Prisma.$EspecificacionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Especificacion that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EspecificacionFindFirstArgs} args - Arguments to find a Especificacion
     * @example
     * // Get one Especificacion
     * const especificacion = await prisma.especificacion.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends EspecificacionFindFirstArgs>(args?: SelectSubset<T, EspecificacionFindFirstArgs<ExtArgs>>): Prisma__EspecificacionClient<$Result.GetResult<Prisma.$EspecificacionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Especificacion that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EspecificacionFindFirstOrThrowArgs} args - Arguments to find a Especificacion
     * @example
     * // Get one Especificacion
     * const especificacion = await prisma.especificacion.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends EspecificacionFindFirstOrThrowArgs>(args?: SelectSubset<T, EspecificacionFindFirstOrThrowArgs<ExtArgs>>): Prisma__EspecificacionClient<$Result.GetResult<Prisma.$EspecificacionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Especificacions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EspecificacionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Especificacions
     * const especificacions = await prisma.especificacion.findMany()
     * 
     * // Get first 10 Especificacions
     * const especificacions = await prisma.especificacion.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const especificacionWithIdOnly = await prisma.especificacion.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends EspecificacionFindManyArgs>(args?: SelectSubset<T, EspecificacionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EspecificacionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Especificacion.
     * @param {EspecificacionCreateArgs} args - Arguments to create a Especificacion.
     * @example
     * // Create one Especificacion
     * const Especificacion = await prisma.especificacion.create({
     *   data: {
     *     // ... data to create a Especificacion
     *   }
     * })
     * 
     */
    create<T extends EspecificacionCreateArgs>(args: SelectSubset<T, EspecificacionCreateArgs<ExtArgs>>): Prisma__EspecificacionClient<$Result.GetResult<Prisma.$EspecificacionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Especificacions.
     * @param {EspecificacionCreateManyArgs} args - Arguments to create many Especificacions.
     * @example
     * // Create many Especificacions
     * const especificacion = await prisma.especificacion.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends EspecificacionCreateManyArgs>(args?: SelectSubset<T, EspecificacionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Especificacions and returns the data saved in the database.
     * @param {EspecificacionCreateManyAndReturnArgs} args - Arguments to create many Especificacions.
     * @example
     * // Create many Especificacions
     * const especificacion = await prisma.especificacion.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Especificacions and only return the `id`
     * const especificacionWithIdOnly = await prisma.especificacion.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends EspecificacionCreateManyAndReturnArgs>(args?: SelectSubset<T, EspecificacionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EspecificacionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Especificacion.
     * @param {EspecificacionDeleteArgs} args - Arguments to delete one Especificacion.
     * @example
     * // Delete one Especificacion
     * const Especificacion = await prisma.especificacion.delete({
     *   where: {
     *     // ... filter to delete one Especificacion
     *   }
     * })
     * 
     */
    delete<T extends EspecificacionDeleteArgs>(args: SelectSubset<T, EspecificacionDeleteArgs<ExtArgs>>): Prisma__EspecificacionClient<$Result.GetResult<Prisma.$EspecificacionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Especificacion.
     * @param {EspecificacionUpdateArgs} args - Arguments to update one Especificacion.
     * @example
     * // Update one Especificacion
     * const especificacion = await prisma.especificacion.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends EspecificacionUpdateArgs>(args: SelectSubset<T, EspecificacionUpdateArgs<ExtArgs>>): Prisma__EspecificacionClient<$Result.GetResult<Prisma.$EspecificacionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Especificacions.
     * @param {EspecificacionDeleteManyArgs} args - Arguments to filter Especificacions to delete.
     * @example
     * // Delete a few Especificacions
     * const { count } = await prisma.especificacion.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends EspecificacionDeleteManyArgs>(args?: SelectSubset<T, EspecificacionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Especificacions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EspecificacionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Especificacions
     * const especificacion = await prisma.especificacion.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends EspecificacionUpdateManyArgs>(args: SelectSubset<T, EspecificacionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Especificacions and returns the data updated in the database.
     * @param {EspecificacionUpdateManyAndReturnArgs} args - Arguments to update many Especificacions.
     * @example
     * // Update many Especificacions
     * const especificacion = await prisma.especificacion.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Especificacions and only return the `id`
     * const especificacionWithIdOnly = await prisma.especificacion.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends EspecificacionUpdateManyAndReturnArgs>(args: SelectSubset<T, EspecificacionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EspecificacionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Especificacion.
     * @param {EspecificacionUpsertArgs} args - Arguments to update or create a Especificacion.
     * @example
     * // Update or create a Especificacion
     * const especificacion = await prisma.especificacion.upsert({
     *   create: {
     *     // ... data to create a Especificacion
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Especificacion we want to update
     *   }
     * })
     */
    upsert<T extends EspecificacionUpsertArgs>(args: SelectSubset<T, EspecificacionUpsertArgs<ExtArgs>>): Prisma__EspecificacionClient<$Result.GetResult<Prisma.$EspecificacionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Especificacions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EspecificacionCountArgs} args - Arguments to filter Especificacions to count.
     * @example
     * // Count the number of Especificacions
     * const count = await prisma.especificacion.count({
     *   where: {
     *     // ... the filter for the Especificacions we want to count
     *   }
     * })
    **/
    count<T extends EspecificacionCountArgs>(
      args?: Subset<T, EspecificacionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EspecificacionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Especificacion.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EspecificacionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends EspecificacionAggregateArgs>(args: Subset<T, EspecificacionAggregateArgs>): Prisma.PrismaPromise<GetEspecificacionAggregateType<T>>

    /**
     * Group by Especificacion.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EspecificacionGroupByArgs} args - Group by arguments.
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
      T extends EspecificacionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EspecificacionGroupByArgs['orderBy'] }
        : { orderBy?: EspecificacionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, EspecificacionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEspecificacionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Especificacion model
   */
  readonly fields: EspecificacionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Especificacion.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EspecificacionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    nivel<T extends NivelDefaultArgs<ExtArgs> = {}>(args?: Subset<T, NivelDefaultArgs<ExtArgs>>): Prisma__NivelClient<$Result.GetResult<Prisma.$NivelPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Especificacion model
   */
  interface EspecificacionFieldRefs {
    readonly id: FieldRef<"Especificacion", 'String'>
    readonly nivelId: FieldRef<"Especificacion", 'String'>
    readonly año: FieldRef<"Especificacion", 'Int'>
    readonly vigencia: FieldRef<"Especificacion", 'String'>
    readonly procesador: FieldRef<"Especificacion", 'String'>
    readonly nucleos: FieldRef<"Especificacion", 'String'>
    readonly frecuencia: FieldRef<"Especificacion", 'String'>
    readonly ram: FieldRef<"Especificacion", 'String'>
    readonly almacenamiento: FieldRef<"Especificacion", 'String'>
    readonly gpu: FieldRef<"Especificacion", 'String'>
    readonly so: FieldRef<"Especificacion", 'String'>
    readonly notas: FieldRef<"Especificacion", 'String'>
    readonly createdAt: FieldRef<"Especificacion", 'DateTime'>
    readonly updatedAt: FieldRef<"Especificacion", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Especificacion findUnique
   */
  export type EspecificacionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Especificacion
     */
    select?: EspecificacionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Especificacion
     */
    omit?: EspecificacionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EspecificacionInclude<ExtArgs> | null
    /**
     * Filter, which Especificacion to fetch.
     */
    where: EspecificacionWhereUniqueInput
  }

  /**
   * Especificacion findUniqueOrThrow
   */
  export type EspecificacionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Especificacion
     */
    select?: EspecificacionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Especificacion
     */
    omit?: EspecificacionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EspecificacionInclude<ExtArgs> | null
    /**
     * Filter, which Especificacion to fetch.
     */
    where: EspecificacionWhereUniqueInput
  }

  /**
   * Especificacion findFirst
   */
  export type EspecificacionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Especificacion
     */
    select?: EspecificacionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Especificacion
     */
    omit?: EspecificacionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EspecificacionInclude<ExtArgs> | null
    /**
     * Filter, which Especificacion to fetch.
     */
    where?: EspecificacionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Especificacions to fetch.
     */
    orderBy?: EspecificacionOrderByWithRelationInput | EspecificacionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Especificacions.
     */
    cursor?: EspecificacionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Especificacions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Especificacions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Especificacions.
     */
    distinct?: EspecificacionScalarFieldEnum | EspecificacionScalarFieldEnum[]
  }

  /**
   * Especificacion findFirstOrThrow
   */
  export type EspecificacionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Especificacion
     */
    select?: EspecificacionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Especificacion
     */
    omit?: EspecificacionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EspecificacionInclude<ExtArgs> | null
    /**
     * Filter, which Especificacion to fetch.
     */
    where?: EspecificacionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Especificacions to fetch.
     */
    orderBy?: EspecificacionOrderByWithRelationInput | EspecificacionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Especificacions.
     */
    cursor?: EspecificacionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Especificacions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Especificacions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Especificacions.
     */
    distinct?: EspecificacionScalarFieldEnum | EspecificacionScalarFieldEnum[]
  }

  /**
   * Especificacion findMany
   */
  export type EspecificacionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Especificacion
     */
    select?: EspecificacionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Especificacion
     */
    omit?: EspecificacionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EspecificacionInclude<ExtArgs> | null
    /**
     * Filter, which Especificacions to fetch.
     */
    where?: EspecificacionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Especificacions to fetch.
     */
    orderBy?: EspecificacionOrderByWithRelationInput | EspecificacionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Especificacions.
     */
    cursor?: EspecificacionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Especificacions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Especificacions.
     */
    skip?: number
    distinct?: EspecificacionScalarFieldEnum | EspecificacionScalarFieldEnum[]
  }

  /**
   * Especificacion create
   */
  export type EspecificacionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Especificacion
     */
    select?: EspecificacionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Especificacion
     */
    omit?: EspecificacionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EspecificacionInclude<ExtArgs> | null
    /**
     * The data needed to create a Especificacion.
     */
    data: XOR<EspecificacionCreateInput, EspecificacionUncheckedCreateInput>
  }

  /**
   * Especificacion createMany
   */
  export type EspecificacionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Especificacions.
     */
    data: EspecificacionCreateManyInput | EspecificacionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Especificacion createManyAndReturn
   */
  export type EspecificacionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Especificacion
     */
    select?: EspecificacionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Especificacion
     */
    omit?: EspecificacionOmit<ExtArgs> | null
    /**
     * The data used to create many Especificacions.
     */
    data: EspecificacionCreateManyInput | EspecificacionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EspecificacionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Especificacion update
   */
  export type EspecificacionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Especificacion
     */
    select?: EspecificacionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Especificacion
     */
    omit?: EspecificacionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EspecificacionInclude<ExtArgs> | null
    /**
     * The data needed to update a Especificacion.
     */
    data: XOR<EspecificacionUpdateInput, EspecificacionUncheckedUpdateInput>
    /**
     * Choose, which Especificacion to update.
     */
    where: EspecificacionWhereUniqueInput
  }

  /**
   * Especificacion updateMany
   */
  export type EspecificacionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Especificacions.
     */
    data: XOR<EspecificacionUpdateManyMutationInput, EspecificacionUncheckedUpdateManyInput>
    /**
     * Filter which Especificacions to update
     */
    where?: EspecificacionWhereInput
    /**
     * Limit how many Especificacions to update.
     */
    limit?: number
  }

  /**
   * Especificacion updateManyAndReturn
   */
  export type EspecificacionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Especificacion
     */
    select?: EspecificacionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Especificacion
     */
    omit?: EspecificacionOmit<ExtArgs> | null
    /**
     * The data used to update Especificacions.
     */
    data: XOR<EspecificacionUpdateManyMutationInput, EspecificacionUncheckedUpdateManyInput>
    /**
     * Filter which Especificacions to update
     */
    where?: EspecificacionWhereInput
    /**
     * Limit how many Especificacions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EspecificacionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Especificacion upsert
   */
  export type EspecificacionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Especificacion
     */
    select?: EspecificacionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Especificacion
     */
    omit?: EspecificacionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EspecificacionInclude<ExtArgs> | null
    /**
     * The filter to search for the Especificacion to update in case it exists.
     */
    where: EspecificacionWhereUniqueInput
    /**
     * In case the Especificacion found by the `where` argument doesn't exist, create a new Especificacion with this data.
     */
    create: XOR<EspecificacionCreateInput, EspecificacionUncheckedCreateInput>
    /**
     * In case the Especificacion was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EspecificacionUpdateInput, EspecificacionUncheckedUpdateInput>
  }

  /**
   * Especificacion delete
   */
  export type EspecificacionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Especificacion
     */
    select?: EspecificacionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Especificacion
     */
    omit?: EspecificacionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EspecificacionInclude<ExtArgs> | null
    /**
     * Filter which Especificacion to delete.
     */
    where: EspecificacionWhereUniqueInput
  }

  /**
   * Especificacion deleteMany
   */
  export type EspecificacionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Especificacions to delete
     */
    where?: EspecificacionWhereInput
    /**
     * Limit how many Especificacions to delete.
     */
    limit?: number
  }

  /**
   * Especificacion without action
   */
  export type EspecificacionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Especificacion
     */
    select?: EspecificacionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Especificacion
     */
    omit?: EspecificacionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EspecificacionInclude<ExtArgs> | null
  }


  /**
   * Model NotaImportante
   */

  export type AggregateNotaImportante = {
    _count: NotaImportanteCountAggregateOutputType | null
    _avg: NotaImportanteAvgAggregateOutputType | null
    _sum: NotaImportanteSumAggregateOutputType | null
    _min: NotaImportanteMinAggregateOutputType | null
    _max: NotaImportanteMaxAggregateOutputType | null
  }

  export type NotaImportanteAvgAggregateOutputType = {
    año: number | null
  }

  export type NotaImportanteSumAggregateOutputType = {
    año: number | null
  }

  export type NotaImportanteMinAggregateOutputType = {
    id: string | null
    año: number | null
    contenido: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type NotaImportanteMaxAggregateOutputType = {
    id: string | null
    año: number | null
    contenido: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type NotaImportanteCountAggregateOutputType = {
    id: number
    año: number
    contenido: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type NotaImportanteAvgAggregateInputType = {
    año?: true
  }

  export type NotaImportanteSumAggregateInputType = {
    año?: true
  }

  export type NotaImportanteMinAggregateInputType = {
    id?: true
    año?: true
    contenido?: true
    createdAt?: true
    updatedAt?: true
  }

  export type NotaImportanteMaxAggregateInputType = {
    id?: true
    año?: true
    contenido?: true
    createdAt?: true
    updatedAt?: true
  }

  export type NotaImportanteCountAggregateInputType = {
    id?: true
    año?: true
    contenido?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type NotaImportanteAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which NotaImportante to aggregate.
     */
    where?: NotaImportanteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of NotaImportantes to fetch.
     */
    orderBy?: NotaImportanteOrderByWithRelationInput | NotaImportanteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: NotaImportanteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` NotaImportantes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` NotaImportantes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned NotaImportantes
    **/
    _count?: true | NotaImportanteCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: NotaImportanteAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: NotaImportanteSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: NotaImportanteMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: NotaImportanteMaxAggregateInputType
  }

  export type GetNotaImportanteAggregateType<T extends NotaImportanteAggregateArgs> = {
        [P in keyof T & keyof AggregateNotaImportante]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateNotaImportante[P]>
      : GetScalarType<T[P], AggregateNotaImportante[P]>
  }




  export type NotaImportanteGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NotaImportanteWhereInput
    orderBy?: NotaImportanteOrderByWithAggregationInput | NotaImportanteOrderByWithAggregationInput[]
    by: NotaImportanteScalarFieldEnum[] | NotaImportanteScalarFieldEnum
    having?: NotaImportanteScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: NotaImportanteCountAggregateInputType | true
    _avg?: NotaImportanteAvgAggregateInputType
    _sum?: NotaImportanteSumAggregateInputType
    _min?: NotaImportanteMinAggregateInputType
    _max?: NotaImportanteMaxAggregateInputType
  }

  export type NotaImportanteGroupByOutputType = {
    id: string
    año: number
    contenido: string
    createdAt: Date
    updatedAt: Date
    _count: NotaImportanteCountAggregateOutputType | null
    _avg: NotaImportanteAvgAggregateOutputType | null
    _sum: NotaImportanteSumAggregateOutputType | null
    _min: NotaImportanteMinAggregateOutputType | null
    _max: NotaImportanteMaxAggregateOutputType | null
  }

  type GetNotaImportanteGroupByPayload<T extends NotaImportanteGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<NotaImportanteGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof NotaImportanteGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], NotaImportanteGroupByOutputType[P]>
            : GetScalarType<T[P], NotaImportanteGroupByOutputType[P]>
        }
      >
    >


  export type NotaImportanteSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    año?: boolean
    contenido?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["notaImportante"]>

  export type NotaImportanteSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    año?: boolean
    contenido?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["notaImportante"]>

  export type NotaImportanteSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    año?: boolean
    contenido?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["notaImportante"]>

  export type NotaImportanteSelectScalar = {
    id?: boolean
    año?: boolean
    contenido?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type NotaImportanteOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "año" | "contenido" | "createdAt" | "updatedAt", ExtArgs["result"]["notaImportante"]>

  export type $NotaImportantePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "NotaImportante"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      año: number
      contenido: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["notaImportante"]>
    composites: {}
  }

  type NotaImportanteGetPayload<S extends boolean | null | undefined | NotaImportanteDefaultArgs> = $Result.GetResult<Prisma.$NotaImportantePayload, S>

  type NotaImportanteCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<NotaImportanteFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: NotaImportanteCountAggregateInputType | true
    }

  export interface NotaImportanteDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['NotaImportante'], meta: { name: 'NotaImportante' } }
    /**
     * Find zero or one NotaImportante that matches the filter.
     * @param {NotaImportanteFindUniqueArgs} args - Arguments to find a NotaImportante
     * @example
     * // Get one NotaImportante
     * const notaImportante = await prisma.notaImportante.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends NotaImportanteFindUniqueArgs>(args: SelectSubset<T, NotaImportanteFindUniqueArgs<ExtArgs>>): Prisma__NotaImportanteClient<$Result.GetResult<Prisma.$NotaImportantePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one NotaImportante that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {NotaImportanteFindUniqueOrThrowArgs} args - Arguments to find a NotaImportante
     * @example
     * // Get one NotaImportante
     * const notaImportante = await prisma.notaImportante.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends NotaImportanteFindUniqueOrThrowArgs>(args: SelectSubset<T, NotaImportanteFindUniqueOrThrowArgs<ExtArgs>>): Prisma__NotaImportanteClient<$Result.GetResult<Prisma.$NotaImportantePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first NotaImportante that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotaImportanteFindFirstArgs} args - Arguments to find a NotaImportante
     * @example
     * // Get one NotaImportante
     * const notaImportante = await prisma.notaImportante.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends NotaImportanteFindFirstArgs>(args?: SelectSubset<T, NotaImportanteFindFirstArgs<ExtArgs>>): Prisma__NotaImportanteClient<$Result.GetResult<Prisma.$NotaImportantePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first NotaImportante that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotaImportanteFindFirstOrThrowArgs} args - Arguments to find a NotaImportante
     * @example
     * // Get one NotaImportante
     * const notaImportante = await prisma.notaImportante.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends NotaImportanteFindFirstOrThrowArgs>(args?: SelectSubset<T, NotaImportanteFindFirstOrThrowArgs<ExtArgs>>): Prisma__NotaImportanteClient<$Result.GetResult<Prisma.$NotaImportantePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more NotaImportantes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotaImportanteFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all NotaImportantes
     * const notaImportantes = await prisma.notaImportante.findMany()
     * 
     * // Get first 10 NotaImportantes
     * const notaImportantes = await prisma.notaImportante.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const notaImportanteWithIdOnly = await prisma.notaImportante.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends NotaImportanteFindManyArgs>(args?: SelectSubset<T, NotaImportanteFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotaImportantePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a NotaImportante.
     * @param {NotaImportanteCreateArgs} args - Arguments to create a NotaImportante.
     * @example
     * // Create one NotaImportante
     * const NotaImportante = await prisma.notaImportante.create({
     *   data: {
     *     // ... data to create a NotaImportante
     *   }
     * })
     * 
     */
    create<T extends NotaImportanteCreateArgs>(args: SelectSubset<T, NotaImportanteCreateArgs<ExtArgs>>): Prisma__NotaImportanteClient<$Result.GetResult<Prisma.$NotaImportantePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many NotaImportantes.
     * @param {NotaImportanteCreateManyArgs} args - Arguments to create many NotaImportantes.
     * @example
     * // Create many NotaImportantes
     * const notaImportante = await prisma.notaImportante.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends NotaImportanteCreateManyArgs>(args?: SelectSubset<T, NotaImportanteCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many NotaImportantes and returns the data saved in the database.
     * @param {NotaImportanteCreateManyAndReturnArgs} args - Arguments to create many NotaImportantes.
     * @example
     * // Create many NotaImportantes
     * const notaImportante = await prisma.notaImportante.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many NotaImportantes and only return the `id`
     * const notaImportanteWithIdOnly = await prisma.notaImportante.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends NotaImportanteCreateManyAndReturnArgs>(args?: SelectSubset<T, NotaImportanteCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotaImportantePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a NotaImportante.
     * @param {NotaImportanteDeleteArgs} args - Arguments to delete one NotaImportante.
     * @example
     * // Delete one NotaImportante
     * const NotaImportante = await prisma.notaImportante.delete({
     *   where: {
     *     // ... filter to delete one NotaImportante
     *   }
     * })
     * 
     */
    delete<T extends NotaImportanteDeleteArgs>(args: SelectSubset<T, NotaImportanteDeleteArgs<ExtArgs>>): Prisma__NotaImportanteClient<$Result.GetResult<Prisma.$NotaImportantePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one NotaImportante.
     * @param {NotaImportanteUpdateArgs} args - Arguments to update one NotaImportante.
     * @example
     * // Update one NotaImportante
     * const notaImportante = await prisma.notaImportante.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends NotaImportanteUpdateArgs>(args: SelectSubset<T, NotaImportanteUpdateArgs<ExtArgs>>): Prisma__NotaImportanteClient<$Result.GetResult<Prisma.$NotaImportantePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more NotaImportantes.
     * @param {NotaImportanteDeleteManyArgs} args - Arguments to filter NotaImportantes to delete.
     * @example
     * // Delete a few NotaImportantes
     * const { count } = await prisma.notaImportante.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends NotaImportanteDeleteManyArgs>(args?: SelectSubset<T, NotaImportanteDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more NotaImportantes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotaImportanteUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many NotaImportantes
     * const notaImportante = await prisma.notaImportante.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends NotaImportanteUpdateManyArgs>(args: SelectSubset<T, NotaImportanteUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more NotaImportantes and returns the data updated in the database.
     * @param {NotaImportanteUpdateManyAndReturnArgs} args - Arguments to update many NotaImportantes.
     * @example
     * // Update many NotaImportantes
     * const notaImportante = await prisma.notaImportante.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more NotaImportantes and only return the `id`
     * const notaImportanteWithIdOnly = await prisma.notaImportante.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends NotaImportanteUpdateManyAndReturnArgs>(args: SelectSubset<T, NotaImportanteUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotaImportantePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one NotaImportante.
     * @param {NotaImportanteUpsertArgs} args - Arguments to update or create a NotaImportante.
     * @example
     * // Update or create a NotaImportante
     * const notaImportante = await prisma.notaImportante.upsert({
     *   create: {
     *     // ... data to create a NotaImportante
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the NotaImportante we want to update
     *   }
     * })
     */
    upsert<T extends NotaImportanteUpsertArgs>(args: SelectSubset<T, NotaImportanteUpsertArgs<ExtArgs>>): Prisma__NotaImportanteClient<$Result.GetResult<Prisma.$NotaImportantePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of NotaImportantes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotaImportanteCountArgs} args - Arguments to filter NotaImportantes to count.
     * @example
     * // Count the number of NotaImportantes
     * const count = await prisma.notaImportante.count({
     *   where: {
     *     // ... the filter for the NotaImportantes we want to count
     *   }
     * })
    **/
    count<T extends NotaImportanteCountArgs>(
      args?: Subset<T, NotaImportanteCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], NotaImportanteCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a NotaImportante.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotaImportanteAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends NotaImportanteAggregateArgs>(args: Subset<T, NotaImportanteAggregateArgs>): Prisma.PrismaPromise<GetNotaImportanteAggregateType<T>>

    /**
     * Group by NotaImportante.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotaImportanteGroupByArgs} args - Group by arguments.
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
      T extends NotaImportanteGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: NotaImportanteGroupByArgs['orderBy'] }
        : { orderBy?: NotaImportanteGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, NotaImportanteGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetNotaImportanteGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the NotaImportante model
   */
  readonly fields: NotaImportanteFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for NotaImportante.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__NotaImportanteClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the NotaImportante model
   */
  interface NotaImportanteFieldRefs {
    readonly id: FieldRef<"NotaImportante", 'String'>
    readonly año: FieldRef<"NotaImportante", 'Int'>
    readonly contenido: FieldRef<"NotaImportante", 'String'>
    readonly createdAt: FieldRef<"NotaImportante", 'DateTime'>
    readonly updatedAt: FieldRef<"NotaImportante", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * NotaImportante findUnique
   */
  export type NotaImportanteFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NotaImportante
     */
    select?: NotaImportanteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NotaImportante
     */
    omit?: NotaImportanteOmit<ExtArgs> | null
    /**
     * Filter, which NotaImportante to fetch.
     */
    where: NotaImportanteWhereUniqueInput
  }

  /**
   * NotaImportante findUniqueOrThrow
   */
  export type NotaImportanteFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NotaImportante
     */
    select?: NotaImportanteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NotaImportante
     */
    omit?: NotaImportanteOmit<ExtArgs> | null
    /**
     * Filter, which NotaImportante to fetch.
     */
    where: NotaImportanteWhereUniqueInput
  }

  /**
   * NotaImportante findFirst
   */
  export type NotaImportanteFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NotaImportante
     */
    select?: NotaImportanteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NotaImportante
     */
    omit?: NotaImportanteOmit<ExtArgs> | null
    /**
     * Filter, which NotaImportante to fetch.
     */
    where?: NotaImportanteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of NotaImportantes to fetch.
     */
    orderBy?: NotaImportanteOrderByWithRelationInput | NotaImportanteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for NotaImportantes.
     */
    cursor?: NotaImportanteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` NotaImportantes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` NotaImportantes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of NotaImportantes.
     */
    distinct?: NotaImportanteScalarFieldEnum | NotaImportanteScalarFieldEnum[]
  }

  /**
   * NotaImportante findFirstOrThrow
   */
  export type NotaImportanteFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NotaImportante
     */
    select?: NotaImportanteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NotaImportante
     */
    omit?: NotaImportanteOmit<ExtArgs> | null
    /**
     * Filter, which NotaImportante to fetch.
     */
    where?: NotaImportanteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of NotaImportantes to fetch.
     */
    orderBy?: NotaImportanteOrderByWithRelationInput | NotaImportanteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for NotaImportantes.
     */
    cursor?: NotaImportanteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` NotaImportantes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` NotaImportantes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of NotaImportantes.
     */
    distinct?: NotaImportanteScalarFieldEnum | NotaImportanteScalarFieldEnum[]
  }

  /**
   * NotaImportante findMany
   */
  export type NotaImportanteFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NotaImportante
     */
    select?: NotaImportanteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NotaImportante
     */
    omit?: NotaImportanteOmit<ExtArgs> | null
    /**
     * Filter, which NotaImportantes to fetch.
     */
    where?: NotaImportanteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of NotaImportantes to fetch.
     */
    orderBy?: NotaImportanteOrderByWithRelationInput | NotaImportanteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing NotaImportantes.
     */
    cursor?: NotaImportanteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` NotaImportantes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` NotaImportantes.
     */
    skip?: number
    distinct?: NotaImportanteScalarFieldEnum | NotaImportanteScalarFieldEnum[]
  }

  /**
   * NotaImportante create
   */
  export type NotaImportanteCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NotaImportante
     */
    select?: NotaImportanteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NotaImportante
     */
    omit?: NotaImportanteOmit<ExtArgs> | null
    /**
     * The data needed to create a NotaImportante.
     */
    data: XOR<NotaImportanteCreateInput, NotaImportanteUncheckedCreateInput>
  }

  /**
   * NotaImportante createMany
   */
  export type NotaImportanteCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many NotaImportantes.
     */
    data: NotaImportanteCreateManyInput | NotaImportanteCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * NotaImportante createManyAndReturn
   */
  export type NotaImportanteCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NotaImportante
     */
    select?: NotaImportanteSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the NotaImportante
     */
    omit?: NotaImportanteOmit<ExtArgs> | null
    /**
     * The data used to create many NotaImportantes.
     */
    data: NotaImportanteCreateManyInput | NotaImportanteCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * NotaImportante update
   */
  export type NotaImportanteUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NotaImportante
     */
    select?: NotaImportanteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NotaImportante
     */
    omit?: NotaImportanteOmit<ExtArgs> | null
    /**
     * The data needed to update a NotaImportante.
     */
    data: XOR<NotaImportanteUpdateInput, NotaImportanteUncheckedUpdateInput>
    /**
     * Choose, which NotaImportante to update.
     */
    where: NotaImportanteWhereUniqueInput
  }

  /**
   * NotaImportante updateMany
   */
  export type NotaImportanteUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update NotaImportantes.
     */
    data: XOR<NotaImportanteUpdateManyMutationInput, NotaImportanteUncheckedUpdateManyInput>
    /**
     * Filter which NotaImportantes to update
     */
    where?: NotaImportanteWhereInput
    /**
     * Limit how many NotaImportantes to update.
     */
    limit?: number
  }

  /**
   * NotaImportante updateManyAndReturn
   */
  export type NotaImportanteUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NotaImportante
     */
    select?: NotaImportanteSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the NotaImportante
     */
    omit?: NotaImportanteOmit<ExtArgs> | null
    /**
     * The data used to update NotaImportantes.
     */
    data: XOR<NotaImportanteUpdateManyMutationInput, NotaImportanteUncheckedUpdateManyInput>
    /**
     * Filter which NotaImportantes to update
     */
    where?: NotaImportanteWhereInput
    /**
     * Limit how many NotaImportantes to update.
     */
    limit?: number
  }

  /**
   * NotaImportante upsert
   */
  export type NotaImportanteUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NotaImportante
     */
    select?: NotaImportanteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NotaImportante
     */
    omit?: NotaImportanteOmit<ExtArgs> | null
    /**
     * The filter to search for the NotaImportante to update in case it exists.
     */
    where: NotaImportanteWhereUniqueInput
    /**
     * In case the NotaImportante found by the `where` argument doesn't exist, create a new NotaImportante with this data.
     */
    create: XOR<NotaImportanteCreateInput, NotaImportanteUncheckedCreateInput>
    /**
     * In case the NotaImportante was found with the provided `where` argument, update it with this data.
     */
    update: XOR<NotaImportanteUpdateInput, NotaImportanteUncheckedUpdateInput>
  }

  /**
   * NotaImportante delete
   */
  export type NotaImportanteDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NotaImportante
     */
    select?: NotaImportanteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NotaImportante
     */
    omit?: NotaImportanteOmit<ExtArgs> | null
    /**
     * Filter which NotaImportante to delete.
     */
    where: NotaImportanteWhereUniqueInput
  }

  /**
   * NotaImportante deleteMany
   */
  export type NotaImportanteDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which NotaImportantes to delete
     */
    where?: NotaImportanteWhereInput
    /**
     * Limit how many NotaImportantes to delete.
     */
    limit?: number
  }

  /**
   * NotaImportante without action
   */
  export type NotaImportanteDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NotaImportante
     */
    select?: NotaImportanteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NotaImportante
     */
    omit?: NotaImportanteOmit<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const NivelScalarFieldEnum: {
    id: 'id',
    nivel: 'nivel',
    nombre: 'nombre',
    descripcion: 'descripcion',
    ejemplos: 'ejemplos',
    software: 'software',
    requisitoPermanente: 'requisitoPermanente',
    criticidad: 'criticidad',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type NivelScalarFieldEnum = (typeof NivelScalarFieldEnum)[keyof typeof NivelScalarFieldEnum]


  export const EspecificacionScalarFieldEnum: {
    id: 'id',
    nivelId: 'nivelId',
    año: 'año',
    vigencia: 'vigencia',
    procesador: 'procesador',
    nucleos: 'nucleos',
    frecuencia: 'frecuencia',
    ram: 'ram',
    almacenamiento: 'almacenamiento',
    gpu: 'gpu',
    so: 'so',
    notas: 'notas',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type EspecificacionScalarFieldEnum = (typeof EspecificacionScalarFieldEnum)[keyof typeof EspecificacionScalarFieldEnum]


  export const NotaImportanteScalarFieldEnum: {
    id: 'id',
    año: 'año',
    contenido: 'contenido',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type NotaImportanteScalarFieldEnum = (typeof NotaImportanteScalarFieldEnum)[keyof typeof NotaImportanteScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type NivelWhereInput = {
    AND?: NivelWhereInput | NivelWhereInput[]
    OR?: NivelWhereInput[]
    NOT?: NivelWhereInput | NivelWhereInput[]
    id?: StringFilter<"Nivel"> | string
    nivel?: StringFilter<"Nivel"> | string
    nombre?: StringFilter<"Nivel"> | string
    descripcion?: StringFilter<"Nivel"> | string
    ejemplos?: StringNullableListFilter<"Nivel">
    software?: StringFilter<"Nivel"> | string
    requisitoPermanente?: StringFilter<"Nivel"> | string
    criticidad?: StringFilter<"Nivel"> | string
    createdAt?: DateTimeFilter<"Nivel"> | Date | string
    updatedAt?: DateTimeFilter<"Nivel"> | Date | string
    especificaciones?: EspecificacionListRelationFilter
  }

  export type NivelOrderByWithRelationInput = {
    id?: SortOrder
    nivel?: SortOrder
    nombre?: SortOrder
    descripcion?: SortOrder
    ejemplos?: SortOrder
    software?: SortOrder
    requisitoPermanente?: SortOrder
    criticidad?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    especificaciones?: EspecificacionOrderByRelationAggregateInput
  }

  export type NivelWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    nivel?: string
    AND?: NivelWhereInput | NivelWhereInput[]
    OR?: NivelWhereInput[]
    NOT?: NivelWhereInput | NivelWhereInput[]
    nombre?: StringFilter<"Nivel"> | string
    descripcion?: StringFilter<"Nivel"> | string
    ejemplos?: StringNullableListFilter<"Nivel">
    software?: StringFilter<"Nivel"> | string
    requisitoPermanente?: StringFilter<"Nivel"> | string
    criticidad?: StringFilter<"Nivel"> | string
    createdAt?: DateTimeFilter<"Nivel"> | Date | string
    updatedAt?: DateTimeFilter<"Nivel"> | Date | string
    especificaciones?: EspecificacionListRelationFilter
  }, "id" | "nivel">

  export type NivelOrderByWithAggregationInput = {
    id?: SortOrder
    nivel?: SortOrder
    nombre?: SortOrder
    descripcion?: SortOrder
    ejemplos?: SortOrder
    software?: SortOrder
    requisitoPermanente?: SortOrder
    criticidad?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: NivelCountOrderByAggregateInput
    _max?: NivelMaxOrderByAggregateInput
    _min?: NivelMinOrderByAggregateInput
  }

  export type NivelScalarWhereWithAggregatesInput = {
    AND?: NivelScalarWhereWithAggregatesInput | NivelScalarWhereWithAggregatesInput[]
    OR?: NivelScalarWhereWithAggregatesInput[]
    NOT?: NivelScalarWhereWithAggregatesInput | NivelScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Nivel"> | string
    nivel?: StringWithAggregatesFilter<"Nivel"> | string
    nombre?: StringWithAggregatesFilter<"Nivel"> | string
    descripcion?: StringWithAggregatesFilter<"Nivel"> | string
    ejemplos?: StringNullableListFilter<"Nivel">
    software?: StringWithAggregatesFilter<"Nivel"> | string
    requisitoPermanente?: StringWithAggregatesFilter<"Nivel"> | string
    criticidad?: StringWithAggregatesFilter<"Nivel"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Nivel"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Nivel"> | Date | string
  }

  export type EspecificacionWhereInput = {
    AND?: EspecificacionWhereInput | EspecificacionWhereInput[]
    OR?: EspecificacionWhereInput[]
    NOT?: EspecificacionWhereInput | EspecificacionWhereInput[]
    id?: StringFilter<"Especificacion"> | string
    nivelId?: StringFilter<"Especificacion"> | string
    año?: IntFilter<"Especificacion"> | number
    vigencia?: StringFilter<"Especificacion"> | string
    procesador?: StringFilter<"Especificacion"> | string
    nucleos?: StringFilter<"Especificacion"> | string
    frecuencia?: StringFilter<"Especificacion"> | string
    ram?: StringFilter<"Especificacion"> | string
    almacenamiento?: StringFilter<"Especificacion"> | string
    gpu?: StringFilter<"Especificacion"> | string
    so?: StringFilter<"Especificacion"> | string
    notas?: StringFilter<"Especificacion"> | string
    createdAt?: DateTimeFilter<"Especificacion"> | Date | string
    updatedAt?: DateTimeFilter<"Especificacion"> | Date | string
    nivel?: XOR<NivelScalarRelationFilter, NivelWhereInput>
  }

  export type EspecificacionOrderByWithRelationInput = {
    id?: SortOrder
    nivelId?: SortOrder
    año?: SortOrder
    vigencia?: SortOrder
    procesador?: SortOrder
    nucleos?: SortOrder
    frecuencia?: SortOrder
    ram?: SortOrder
    almacenamiento?: SortOrder
    gpu?: SortOrder
    so?: SortOrder
    notas?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    nivel?: NivelOrderByWithRelationInput
  }

  export type EspecificacionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    nivelId_año?: EspecificacionNivelIdAñoCompoundUniqueInput
    AND?: EspecificacionWhereInput | EspecificacionWhereInput[]
    OR?: EspecificacionWhereInput[]
    NOT?: EspecificacionWhereInput | EspecificacionWhereInput[]
    nivelId?: StringFilter<"Especificacion"> | string
    año?: IntFilter<"Especificacion"> | number
    vigencia?: StringFilter<"Especificacion"> | string
    procesador?: StringFilter<"Especificacion"> | string
    nucleos?: StringFilter<"Especificacion"> | string
    frecuencia?: StringFilter<"Especificacion"> | string
    ram?: StringFilter<"Especificacion"> | string
    almacenamiento?: StringFilter<"Especificacion"> | string
    gpu?: StringFilter<"Especificacion"> | string
    so?: StringFilter<"Especificacion"> | string
    notas?: StringFilter<"Especificacion"> | string
    createdAt?: DateTimeFilter<"Especificacion"> | Date | string
    updatedAt?: DateTimeFilter<"Especificacion"> | Date | string
    nivel?: XOR<NivelScalarRelationFilter, NivelWhereInput>
  }, "id" | "nivelId_año">

  export type EspecificacionOrderByWithAggregationInput = {
    id?: SortOrder
    nivelId?: SortOrder
    año?: SortOrder
    vigencia?: SortOrder
    procesador?: SortOrder
    nucleos?: SortOrder
    frecuencia?: SortOrder
    ram?: SortOrder
    almacenamiento?: SortOrder
    gpu?: SortOrder
    so?: SortOrder
    notas?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: EspecificacionCountOrderByAggregateInput
    _avg?: EspecificacionAvgOrderByAggregateInput
    _max?: EspecificacionMaxOrderByAggregateInput
    _min?: EspecificacionMinOrderByAggregateInput
    _sum?: EspecificacionSumOrderByAggregateInput
  }

  export type EspecificacionScalarWhereWithAggregatesInput = {
    AND?: EspecificacionScalarWhereWithAggregatesInput | EspecificacionScalarWhereWithAggregatesInput[]
    OR?: EspecificacionScalarWhereWithAggregatesInput[]
    NOT?: EspecificacionScalarWhereWithAggregatesInput | EspecificacionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Especificacion"> | string
    nivelId?: StringWithAggregatesFilter<"Especificacion"> | string
    año?: IntWithAggregatesFilter<"Especificacion"> | number
    vigencia?: StringWithAggregatesFilter<"Especificacion"> | string
    procesador?: StringWithAggregatesFilter<"Especificacion"> | string
    nucleos?: StringWithAggregatesFilter<"Especificacion"> | string
    frecuencia?: StringWithAggregatesFilter<"Especificacion"> | string
    ram?: StringWithAggregatesFilter<"Especificacion"> | string
    almacenamiento?: StringWithAggregatesFilter<"Especificacion"> | string
    gpu?: StringWithAggregatesFilter<"Especificacion"> | string
    so?: StringWithAggregatesFilter<"Especificacion"> | string
    notas?: StringWithAggregatesFilter<"Especificacion"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Especificacion"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Especificacion"> | Date | string
  }

  export type NotaImportanteWhereInput = {
    AND?: NotaImportanteWhereInput | NotaImportanteWhereInput[]
    OR?: NotaImportanteWhereInput[]
    NOT?: NotaImportanteWhereInput | NotaImportanteWhereInput[]
    id?: StringFilter<"NotaImportante"> | string
    año?: IntFilter<"NotaImportante"> | number
    contenido?: StringFilter<"NotaImportante"> | string
    createdAt?: DateTimeFilter<"NotaImportante"> | Date | string
    updatedAt?: DateTimeFilter<"NotaImportante"> | Date | string
  }

  export type NotaImportanteOrderByWithRelationInput = {
    id?: SortOrder
    año?: SortOrder
    contenido?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type NotaImportanteWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    año?: number
    AND?: NotaImportanteWhereInput | NotaImportanteWhereInput[]
    OR?: NotaImportanteWhereInput[]
    NOT?: NotaImportanteWhereInput | NotaImportanteWhereInput[]
    contenido?: StringFilter<"NotaImportante"> | string
    createdAt?: DateTimeFilter<"NotaImportante"> | Date | string
    updatedAt?: DateTimeFilter<"NotaImportante"> | Date | string
  }, "id" | "año">

  export type NotaImportanteOrderByWithAggregationInput = {
    id?: SortOrder
    año?: SortOrder
    contenido?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: NotaImportanteCountOrderByAggregateInput
    _avg?: NotaImportanteAvgOrderByAggregateInput
    _max?: NotaImportanteMaxOrderByAggregateInput
    _min?: NotaImportanteMinOrderByAggregateInput
    _sum?: NotaImportanteSumOrderByAggregateInput
  }

  export type NotaImportanteScalarWhereWithAggregatesInput = {
    AND?: NotaImportanteScalarWhereWithAggregatesInput | NotaImportanteScalarWhereWithAggregatesInput[]
    OR?: NotaImportanteScalarWhereWithAggregatesInput[]
    NOT?: NotaImportanteScalarWhereWithAggregatesInput | NotaImportanteScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"NotaImportante"> | string
    año?: IntWithAggregatesFilter<"NotaImportante"> | number
    contenido?: StringWithAggregatesFilter<"NotaImportante"> | string
    createdAt?: DateTimeWithAggregatesFilter<"NotaImportante"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"NotaImportante"> | Date | string
  }

  export type NivelCreateInput = {
    id?: string
    nivel: string
    nombre: string
    descripcion: string
    ejemplos?: NivelCreateejemplosInput | string[]
    software: string
    requisitoPermanente: string
    criticidad: string
    createdAt?: Date | string
    updatedAt?: Date | string
    especificaciones?: EspecificacionCreateNestedManyWithoutNivelInput
  }

  export type NivelUncheckedCreateInput = {
    id?: string
    nivel: string
    nombre: string
    descripcion: string
    ejemplos?: NivelCreateejemplosInput | string[]
    software: string
    requisitoPermanente: string
    criticidad: string
    createdAt?: Date | string
    updatedAt?: Date | string
    especificaciones?: EspecificacionUncheckedCreateNestedManyWithoutNivelInput
  }

  export type NivelUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nivel?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: StringFieldUpdateOperationsInput | string
    ejemplos?: NivelUpdateejemplosInput | string[]
    software?: StringFieldUpdateOperationsInput | string
    requisitoPermanente?: StringFieldUpdateOperationsInput | string
    criticidad?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    especificaciones?: EspecificacionUpdateManyWithoutNivelNestedInput
  }

  export type NivelUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nivel?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: StringFieldUpdateOperationsInput | string
    ejemplos?: NivelUpdateejemplosInput | string[]
    software?: StringFieldUpdateOperationsInput | string
    requisitoPermanente?: StringFieldUpdateOperationsInput | string
    criticidad?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    especificaciones?: EspecificacionUncheckedUpdateManyWithoutNivelNestedInput
  }

  export type NivelCreateManyInput = {
    id?: string
    nivel: string
    nombre: string
    descripcion: string
    ejemplos?: NivelCreateejemplosInput | string[]
    software: string
    requisitoPermanente: string
    criticidad: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type NivelUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    nivel?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: StringFieldUpdateOperationsInput | string
    ejemplos?: NivelUpdateejemplosInput | string[]
    software?: StringFieldUpdateOperationsInput | string
    requisitoPermanente?: StringFieldUpdateOperationsInput | string
    criticidad?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NivelUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    nivel?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: StringFieldUpdateOperationsInput | string
    ejemplos?: NivelUpdateejemplosInput | string[]
    software?: StringFieldUpdateOperationsInput | string
    requisitoPermanente?: StringFieldUpdateOperationsInput | string
    criticidad?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EspecificacionCreateInput = {
    id?: string
    año: number
    vigencia: string
    procesador: string
    nucleos: string
    frecuencia: string
    ram: string
    almacenamiento: string
    gpu: string
    so: string
    notas: string
    createdAt?: Date | string
    updatedAt?: Date | string
    nivel: NivelCreateNestedOneWithoutEspecificacionesInput
  }

  export type EspecificacionUncheckedCreateInput = {
    id?: string
    nivelId: string
    año: number
    vigencia: string
    procesador: string
    nucleos: string
    frecuencia: string
    ram: string
    almacenamiento: string
    gpu: string
    so: string
    notas: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type EspecificacionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    año?: IntFieldUpdateOperationsInput | number
    vigencia?: StringFieldUpdateOperationsInput | string
    procesador?: StringFieldUpdateOperationsInput | string
    nucleos?: StringFieldUpdateOperationsInput | string
    frecuencia?: StringFieldUpdateOperationsInput | string
    ram?: StringFieldUpdateOperationsInput | string
    almacenamiento?: StringFieldUpdateOperationsInput | string
    gpu?: StringFieldUpdateOperationsInput | string
    so?: StringFieldUpdateOperationsInput | string
    notas?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    nivel?: NivelUpdateOneRequiredWithoutEspecificacionesNestedInput
  }

  export type EspecificacionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nivelId?: StringFieldUpdateOperationsInput | string
    año?: IntFieldUpdateOperationsInput | number
    vigencia?: StringFieldUpdateOperationsInput | string
    procesador?: StringFieldUpdateOperationsInput | string
    nucleos?: StringFieldUpdateOperationsInput | string
    frecuencia?: StringFieldUpdateOperationsInput | string
    ram?: StringFieldUpdateOperationsInput | string
    almacenamiento?: StringFieldUpdateOperationsInput | string
    gpu?: StringFieldUpdateOperationsInput | string
    so?: StringFieldUpdateOperationsInput | string
    notas?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EspecificacionCreateManyInput = {
    id?: string
    nivelId: string
    año: number
    vigencia: string
    procesador: string
    nucleos: string
    frecuencia: string
    ram: string
    almacenamiento: string
    gpu: string
    so: string
    notas: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type EspecificacionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    año?: IntFieldUpdateOperationsInput | number
    vigencia?: StringFieldUpdateOperationsInput | string
    procesador?: StringFieldUpdateOperationsInput | string
    nucleos?: StringFieldUpdateOperationsInput | string
    frecuencia?: StringFieldUpdateOperationsInput | string
    ram?: StringFieldUpdateOperationsInput | string
    almacenamiento?: StringFieldUpdateOperationsInput | string
    gpu?: StringFieldUpdateOperationsInput | string
    so?: StringFieldUpdateOperationsInput | string
    notas?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EspecificacionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    nivelId?: StringFieldUpdateOperationsInput | string
    año?: IntFieldUpdateOperationsInput | number
    vigencia?: StringFieldUpdateOperationsInput | string
    procesador?: StringFieldUpdateOperationsInput | string
    nucleos?: StringFieldUpdateOperationsInput | string
    frecuencia?: StringFieldUpdateOperationsInput | string
    ram?: StringFieldUpdateOperationsInput | string
    almacenamiento?: StringFieldUpdateOperationsInput | string
    gpu?: StringFieldUpdateOperationsInput | string
    so?: StringFieldUpdateOperationsInput | string
    notas?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NotaImportanteCreateInput = {
    id?: string
    año: number
    contenido: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type NotaImportanteUncheckedCreateInput = {
    id?: string
    año: number
    contenido: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type NotaImportanteUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    año?: IntFieldUpdateOperationsInput | number
    contenido?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NotaImportanteUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    año?: IntFieldUpdateOperationsInput | number
    contenido?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NotaImportanteCreateManyInput = {
    id?: string
    año: number
    contenido: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type NotaImportanteUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    año?: IntFieldUpdateOperationsInput | number
    contenido?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NotaImportanteUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    año?: IntFieldUpdateOperationsInput | number
    contenido?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableListFilter<$PrismaModel = never> = {
    equals?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    has?: string | StringFieldRefInput<$PrismaModel> | null
    hasEvery?: string[] | ListStringFieldRefInput<$PrismaModel>
    hasSome?: string[] | ListStringFieldRefInput<$PrismaModel>
    isEmpty?: boolean
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type EspecificacionListRelationFilter = {
    every?: EspecificacionWhereInput
    some?: EspecificacionWhereInput
    none?: EspecificacionWhereInput
  }

  export type EspecificacionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type NivelCountOrderByAggregateInput = {
    id?: SortOrder
    nivel?: SortOrder
    nombre?: SortOrder
    descripcion?: SortOrder
    ejemplos?: SortOrder
    software?: SortOrder
    requisitoPermanente?: SortOrder
    criticidad?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type NivelMaxOrderByAggregateInput = {
    id?: SortOrder
    nivel?: SortOrder
    nombre?: SortOrder
    descripcion?: SortOrder
    software?: SortOrder
    requisitoPermanente?: SortOrder
    criticidad?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type NivelMinOrderByAggregateInput = {
    id?: SortOrder
    nivel?: SortOrder
    nombre?: SortOrder
    descripcion?: SortOrder
    software?: SortOrder
    requisitoPermanente?: SortOrder
    criticidad?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NivelScalarRelationFilter = {
    is?: NivelWhereInput
    isNot?: NivelWhereInput
  }

  export type EspecificacionNivelIdAñoCompoundUniqueInput = {
    nivelId: string
    año: number
  }

  export type EspecificacionCountOrderByAggregateInput = {
    id?: SortOrder
    nivelId?: SortOrder
    año?: SortOrder
    vigencia?: SortOrder
    procesador?: SortOrder
    nucleos?: SortOrder
    frecuencia?: SortOrder
    ram?: SortOrder
    almacenamiento?: SortOrder
    gpu?: SortOrder
    so?: SortOrder
    notas?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EspecificacionAvgOrderByAggregateInput = {
    año?: SortOrder
  }

  export type EspecificacionMaxOrderByAggregateInput = {
    id?: SortOrder
    nivelId?: SortOrder
    año?: SortOrder
    vigencia?: SortOrder
    procesador?: SortOrder
    nucleos?: SortOrder
    frecuencia?: SortOrder
    ram?: SortOrder
    almacenamiento?: SortOrder
    gpu?: SortOrder
    so?: SortOrder
    notas?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EspecificacionMinOrderByAggregateInput = {
    id?: SortOrder
    nivelId?: SortOrder
    año?: SortOrder
    vigencia?: SortOrder
    procesador?: SortOrder
    nucleos?: SortOrder
    frecuencia?: SortOrder
    ram?: SortOrder
    almacenamiento?: SortOrder
    gpu?: SortOrder
    so?: SortOrder
    notas?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EspecificacionSumOrderByAggregateInput = {
    año?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
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

  export type NotaImportanteCountOrderByAggregateInput = {
    id?: SortOrder
    año?: SortOrder
    contenido?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type NotaImportanteAvgOrderByAggregateInput = {
    año?: SortOrder
  }

  export type NotaImportanteMaxOrderByAggregateInput = {
    id?: SortOrder
    año?: SortOrder
    contenido?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type NotaImportanteMinOrderByAggregateInput = {
    id?: SortOrder
    año?: SortOrder
    contenido?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type NotaImportanteSumOrderByAggregateInput = {
    año?: SortOrder
  }

  export type NivelCreateejemplosInput = {
    set: string[]
  }

  export type EspecificacionCreateNestedManyWithoutNivelInput = {
    create?: XOR<EspecificacionCreateWithoutNivelInput, EspecificacionUncheckedCreateWithoutNivelInput> | EspecificacionCreateWithoutNivelInput[] | EspecificacionUncheckedCreateWithoutNivelInput[]
    connectOrCreate?: EspecificacionCreateOrConnectWithoutNivelInput | EspecificacionCreateOrConnectWithoutNivelInput[]
    createMany?: EspecificacionCreateManyNivelInputEnvelope
    connect?: EspecificacionWhereUniqueInput | EspecificacionWhereUniqueInput[]
  }

  export type EspecificacionUncheckedCreateNestedManyWithoutNivelInput = {
    create?: XOR<EspecificacionCreateWithoutNivelInput, EspecificacionUncheckedCreateWithoutNivelInput> | EspecificacionCreateWithoutNivelInput[] | EspecificacionUncheckedCreateWithoutNivelInput[]
    connectOrCreate?: EspecificacionCreateOrConnectWithoutNivelInput | EspecificacionCreateOrConnectWithoutNivelInput[]
    createMany?: EspecificacionCreateManyNivelInputEnvelope
    connect?: EspecificacionWhereUniqueInput | EspecificacionWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NivelUpdateejemplosInput = {
    set?: string[]
    push?: string | string[]
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type EspecificacionUpdateManyWithoutNivelNestedInput = {
    create?: XOR<EspecificacionCreateWithoutNivelInput, EspecificacionUncheckedCreateWithoutNivelInput> | EspecificacionCreateWithoutNivelInput[] | EspecificacionUncheckedCreateWithoutNivelInput[]
    connectOrCreate?: EspecificacionCreateOrConnectWithoutNivelInput | EspecificacionCreateOrConnectWithoutNivelInput[]
    upsert?: EspecificacionUpsertWithWhereUniqueWithoutNivelInput | EspecificacionUpsertWithWhereUniqueWithoutNivelInput[]
    createMany?: EspecificacionCreateManyNivelInputEnvelope
    set?: EspecificacionWhereUniqueInput | EspecificacionWhereUniqueInput[]
    disconnect?: EspecificacionWhereUniqueInput | EspecificacionWhereUniqueInput[]
    delete?: EspecificacionWhereUniqueInput | EspecificacionWhereUniqueInput[]
    connect?: EspecificacionWhereUniqueInput | EspecificacionWhereUniqueInput[]
    update?: EspecificacionUpdateWithWhereUniqueWithoutNivelInput | EspecificacionUpdateWithWhereUniqueWithoutNivelInput[]
    updateMany?: EspecificacionUpdateManyWithWhereWithoutNivelInput | EspecificacionUpdateManyWithWhereWithoutNivelInput[]
    deleteMany?: EspecificacionScalarWhereInput | EspecificacionScalarWhereInput[]
  }

  export type EspecificacionUncheckedUpdateManyWithoutNivelNestedInput = {
    create?: XOR<EspecificacionCreateWithoutNivelInput, EspecificacionUncheckedCreateWithoutNivelInput> | EspecificacionCreateWithoutNivelInput[] | EspecificacionUncheckedCreateWithoutNivelInput[]
    connectOrCreate?: EspecificacionCreateOrConnectWithoutNivelInput | EspecificacionCreateOrConnectWithoutNivelInput[]
    upsert?: EspecificacionUpsertWithWhereUniqueWithoutNivelInput | EspecificacionUpsertWithWhereUniqueWithoutNivelInput[]
    createMany?: EspecificacionCreateManyNivelInputEnvelope
    set?: EspecificacionWhereUniqueInput | EspecificacionWhereUniqueInput[]
    disconnect?: EspecificacionWhereUniqueInput | EspecificacionWhereUniqueInput[]
    delete?: EspecificacionWhereUniqueInput | EspecificacionWhereUniqueInput[]
    connect?: EspecificacionWhereUniqueInput | EspecificacionWhereUniqueInput[]
    update?: EspecificacionUpdateWithWhereUniqueWithoutNivelInput | EspecificacionUpdateWithWhereUniqueWithoutNivelInput[]
    updateMany?: EspecificacionUpdateManyWithWhereWithoutNivelInput | EspecificacionUpdateManyWithWhereWithoutNivelInput[]
    deleteMany?: EspecificacionScalarWhereInput | EspecificacionScalarWhereInput[]
  }

  export type NivelCreateNestedOneWithoutEspecificacionesInput = {
    create?: XOR<NivelCreateWithoutEspecificacionesInput, NivelUncheckedCreateWithoutEspecificacionesInput>
    connectOrCreate?: NivelCreateOrConnectWithoutEspecificacionesInput
    connect?: NivelWhereUniqueInput
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NivelUpdateOneRequiredWithoutEspecificacionesNestedInput = {
    create?: XOR<NivelCreateWithoutEspecificacionesInput, NivelUncheckedCreateWithoutEspecificacionesInput>
    connectOrCreate?: NivelCreateOrConnectWithoutEspecificacionesInput
    upsert?: NivelUpsertWithoutEspecificacionesInput
    connect?: NivelWhereUniqueInput
    update?: XOR<XOR<NivelUpdateToOneWithWhereWithoutEspecificacionesInput, NivelUpdateWithoutEspecificacionesInput>, NivelUncheckedUpdateWithoutEspecificacionesInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
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

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
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
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type EspecificacionCreateWithoutNivelInput = {
    id?: string
    año: number
    vigencia: string
    procesador: string
    nucleos: string
    frecuencia: string
    ram: string
    almacenamiento: string
    gpu: string
    so: string
    notas: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type EspecificacionUncheckedCreateWithoutNivelInput = {
    id?: string
    año: number
    vigencia: string
    procesador: string
    nucleos: string
    frecuencia: string
    ram: string
    almacenamiento: string
    gpu: string
    so: string
    notas: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type EspecificacionCreateOrConnectWithoutNivelInput = {
    where: EspecificacionWhereUniqueInput
    create: XOR<EspecificacionCreateWithoutNivelInput, EspecificacionUncheckedCreateWithoutNivelInput>
  }

  export type EspecificacionCreateManyNivelInputEnvelope = {
    data: EspecificacionCreateManyNivelInput | EspecificacionCreateManyNivelInput[]
    skipDuplicates?: boolean
  }

  export type EspecificacionUpsertWithWhereUniqueWithoutNivelInput = {
    where: EspecificacionWhereUniqueInput
    update: XOR<EspecificacionUpdateWithoutNivelInput, EspecificacionUncheckedUpdateWithoutNivelInput>
    create: XOR<EspecificacionCreateWithoutNivelInput, EspecificacionUncheckedCreateWithoutNivelInput>
  }

  export type EspecificacionUpdateWithWhereUniqueWithoutNivelInput = {
    where: EspecificacionWhereUniqueInput
    data: XOR<EspecificacionUpdateWithoutNivelInput, EspecificacionUncheckedUpdateWithoutNivelInput>
  }

  export type EspecificacionUpdateManyWithWhereWithoutNivelInput = {
    where: EspecificacionScalarWhereInput
    data: XOR<EspecificacionUpdateManyMutationInput, EspecificacionUncheckedUpdateManyWithoutNivelInput>
  }

  export type EspecificacionScalarWhereInput = {
    AND?: EspecificacionScalarWhereInput | EspecificacionScalarWhereInput[]
    OR?: EspecificacionScalarWhereInput[]
    NOT?: EspecificacionScalarWhereInput | EspecificacionScalarWhereInput[]
    id?: StringFilter<"Especificacion"> | string
    nivelId?: StringFilter<"Especificacion"> | string
    año?: IntFilter<"Especificacion"> | number
    vigencia?: StringFilter<"Especificacion"> | string
    procesador?: StringFilter<"Especificacion"> | string
    nucleos?: StringFilter<"Especificacion"> | string
    frecuencia?: StringFilter<"Especificacion"> | string
    ram?: StringFilter<"Especificacion"> | string
    almacenamiento?: StringFilter<"Especificacion"> | string
    gpu?: StringFilter<"Especificacion"> | string
    so?: StringFilter<"Especificacion"> | string
    notas?: StringFilter<"Especificacion"> | string
    createdAt?: DateTimeFilter<"Especificacion"> | Date | string
    updatedAt?: DateTimeFilter<"Especificacion"> | Date | string
  }

  export type NivelCreateWithoutEspecificacionesInput = {
    id?: string
    nivel: string
    nombre: string
    descripcion: string
    ejemplos?: NivelCreateejemplosInput | string[]
    software: string
    requisitoPermanente: string
    criticidad: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type NivelUncheckedCreateWithoutEspecificacionesInput = {
    id?: string
    nivel: string
    nombre: string
    descripcion: string
    ejemplos?: NivelCreateejemplosInput | string[]
    software: string
    requisitoPermanente: string
    criticidad: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type NivelCreateOrConnectWithoutEspecificacionesInput = {
    where: NivelWhereUniqueInput
    create: XOR<NivelCreateWithoutEspecificacionesInput, NivelUncheckedCreateWithoutEspecificacionesInput>
  }

  export type NivelUpsertWithoutEspecificacionesInput = {
    update: XOR<NivelUpdateWithoutEspecificacionesInput, NivelUncheckedUpdateWithoutEspecificacionesInput>
    create: XOR<NivelCreateWithoutEspecificacionesInput, NivelUncheckedCreateWithoutEspecificacionesInput>
    where?: NivelWhereInput
  }

  export type NivelUpdateToOneWithWhereWithoutEspecificacionesInput = {
    where?: NivelWhereInput
    data: XOR<NivelUpdateWithoutEspecificacionesInput, NivelUncheckedUpdateWithoutEspecificacionesInput>
  }

  export type NivelUpdateWithoutEspecificacionesInput = {
    id?: StringFieldUpdateOperationsInput | string
    nivel?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: StringFieldUpdateOperationsInput | string
    ejemplos?: NivelUpdateejemplosInput | string[]
    software?: StringFieldUpdateOperationsInput | string
    requisitoPermanente?: StringFieldUpdateOperationsInput | string
    criticidad?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NivelUncheckedUpdateWithoutEspecificacionesInput = {
    id?: StringFieldUpdateOperationsInput | string
    nivel?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: StringFieldUpdateOperationsInput | string
    ejemplos?: NivelUpdateejemplosInput | string[]
    software?: StringFieldUpdateOperationsInput | string
    requisitoPermanente?: StringFieldUpdateOperationsInput | string
    criticidad?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EspecificacionCreateManyNivelInput = {
    id?: string
    año: number
    vigencia: string
    procesador: string
    nucleos: string
    frecuencia: string
    ram: string
    almacenamiento: string
    gpu: string
    so: string
    notas: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type EspecificacionUpdateWithoutNivelInput = {
    id?: StringFieldUpdateOperationsInput | string
    año?: IntFieldUpdateOperationsInput | number
    vigencia?: StringFieldUpdateOperationsInput | string
    procesador?: StringFieldUpdateOperationsInput | string
    nucleos?: StringFieldUpdateOperationsInput | string
    frecuencia?: StringFieldUpdateOperationsInput | string
    ram?: StringFieldUpdateOperationsInput | string
    almacenamiento?: StringFieldUpdateOperationsInput | string
    gpu?: StringFieldUpdateOperationsInput | string
    so?: StringFieldUpdateOperationsInput | string
    notas?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EspecificacionUncheckedUpdateWithoutNivelInput = {
    id?: StringFieldUpdateOperationsInput | string
    año?: IntFieldUpdateOperationsInput | number
    vigencia?: StringFieldUpdateOperationsInput | string
    procesador?: StringFieldUpdateOperationsInput | string
    nucleos?: StringFieldUpdateOperationsInput | string
    frecuencia?: StringFieldUpdateOperationsInput | string
    ram?: StringFieldUpdateOperationsInput | string
    almacenamiento?: StringFieldUpdateOperationsInput | string
    gpu?: StringFieldUpdateOperationsInput | string
    so?: StringFieldUpdateOperationsInput | string
    notas?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EspecificacionUncheckedUpdateManyWithoutNivelInput = {
    id?: StringFieldUpdateOperationsInput | string
    año?: IntFieldUpdateOperationsInput | number
    vigencia?: StringFieldUpdateOperationsInput | string
    procesador?: StringFieldUpdateOperationsInput | string
    nucleos?: StringFieldUpdateOperationsInput | string
    frecuencia?: StringFieldUpdateOperationsInput | string
    ram?: StringFieldUpdateOperationsInput | string
    almacenamiento?: StringFieldUpdateOperationsInput | string
    gpu?: StringFieldUpdateOperationsInput | string
    so?: StringFieldUpdateOperationsInput | string
    notas?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
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
  export const dmmf: runtime.BaseDMMF
}