
Object.defineProperty(exports, "__esModule", { value: true });

const {
  Decimal
} = require('./runtime/index-browser')


const Prisma = {}

exports.Prisma = Prisma

/**
 * Prisma Client JS version: 2.30.3
 * Query Engine version: b8c35d44de987a9691890b3ddf3e2e7effb9bf20
 */
Prisma.prismaVersion = {
  client: "2.30.3",
  engine: "b8c35d44de987a9691890b3ddf3e2e7effb9bf20"
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

exports.Prisma.QueryMode = makeEnum({
  default: 'default',
  insensitive: 'insensitive'
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