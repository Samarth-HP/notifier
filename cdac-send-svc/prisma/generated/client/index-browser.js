
Object.defineProperty(exports, "__esModule", { value: true });

const {
  Decimal
} = require('./runtime/index-browser')


const Prisma = {}

exports.Prisma = Prisma

/**
 * Prisma Client JS version: 3.5.0
 * Query Engine version: 78a5df6def6943431f4c022e1428dbc3e833cf8e
 */
Prisma.prismaVersion = {
  client: "3.5.0",
  engine: "78a5df6def6943431f4c022e1428dbc3e833cf8e"
}

Prisma.PrismaClientKnownRequestError = () => {
  throw new Error(`PrismaClientKnownRequestError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)};
Prisma.PrismaClientUnknownRequestError = () => {
  throw new Error(`PrismaClientUnknownRequestError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.PrismaClientRustPanicError = () => {
  throw new Error(`PrismaClientRustPanicError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.PrismaClientInitializationError = () => {
  throw new Error(`PrismaClientInitializationError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.PrismaClientValidationError = () => {
  throw new Error(`PrismaClientValidationError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = () => {
  throw new Error(`sqltag is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.empty = () => {
  throw new Error(`empty is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.join = () => {
  throw new Error(`join is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.raw = () => {
  throw new Error(`raw is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.validator = () => (val) => val

/**
 * Shorthand utilities for JSON filtering
 */
Prisma.DbNull = 'DbNull'
Prisma.JsonNull = 'JsonNull'
Prisma.AnyNull = 'AnyNull'

/**
 * Enums
 */
// Based on
// https://github.com/microsoft/TypeScript/issues/3192#issuecomment-261720275
function makeEnum(x) { return x; }

exports.Prisma.ProviderScalarFieldEnum = makeEnum({
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  id: 'id',
  channel: 'channel',
  providerName: 'providerName',
  config: 'config',
  unitCost: 'unitCost'
});

exports.Prisma.SmsScalarFieldEnum = makeEnum({
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
});

exports.Prisma.AuditScalarFieldEnum = makeEnum({
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  id: 'id',
  smsId: 'smsId',
  event: 'event'
});

exports.Prisma.SortOrder = makeEnum({
  asc: 'asc',
  desc: 'desc'
});

exports.Prisma.JsonNullValueInput = makeEnum({
  JsonNull: 'JsonNull'
});

exports.Prisma.NullableJsonNullValueInput = makeEnum({
  DbNull: 'DbNull',
  JsonNull: 'JsonNull'
});

exports.Prisma.QueryMode = makeEnum({
  default: 'default',
  insensitive: 'insensitive'
});

exports.Prisma.JsonNullValueFilter = makeEnum({
  DbNull: 'DbNull',
  JsonNull: 'JsonNull',
  AnyNull: 'AnyNull'
});
exports.ProviderName = makeEnum({
  CDAC: 'CDAC',
  GUPSHUP: 'GUPSHUP'
});

exports.TextType = makeEnum({
  UNICODE: 'UNICODE',
  ENGLISH: 'ENGLISH'
});

exports.Status = makeEnum({
  QUEUED: 'QUEUED',
  SENT_TO_PROVIDER: 'SENT_TO_PROVIDER',
  DELIEVERED: 'DELIEVERED',
  FAILED_AT_PROVIDER: 'FAILED_AT_PROVIDER',
  FAILED: 'FAILED'
});

exports.Event = makeEnum({
  QUEUED: 'QUEUED',
  SENT_TO_PROVIDER: 'SENT_TO_PROVIDER',
  DELIEVERED: 'DELIEVERED',
  FAILED_AT_PROVIDER: 'FAILED_AT_PROVIDER',
  FAILED: 'FAILED'
});

exports.Prisma.ModelName = makeEnum({
  Provider: 'Provider',
  Sms: 'Sms',
  Audit: 'Audit'
});

/**
 * Create the Client
 */
class PrismaClient {
  constructor() {
    throw new Error(
      `PrismaClient is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
    )
  }
}
exports.PrismaClient = PrismaClient

Object.assign(exports, Prisma)
