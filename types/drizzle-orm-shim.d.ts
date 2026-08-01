declare module "drizzle-orm" {
  export const eq: (...conditions: any[]) => any;
  export const and: (...conditions: any[]) => any;
  export const or: (...conditions: any[]) => any;
  export const sql: any;
  export const desc: any;
  export const asc: any;
}

declare module "drizzle-orm/pg-core" {
  export const pgTable: (...args: any[]) => any;
  export const text: (...args: any[]) => any;
  export const timestamp: (...args: any[]) => any;
  export const integer: (...args: any[]) => any;
  export const serial: (...args: any[]) => any;
  export const uuid: (...args: any[]) => any;
}

declare module "drizzle-orm/postgres-js" {
  export function drizzle(...args: any[]): any;
}
