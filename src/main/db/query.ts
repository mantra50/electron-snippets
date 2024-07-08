/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { db } from './connect'

export const findAll = (sql: string, params = {}) => {
  return db.prepare(sql).all(params)
}

export const findOne = (sql: string) => {
  return db.prepare(sql).get()
}

export const insert = (sql: string) => {
  return db.prepare(sql).run().lastInsertRowid
}

export const update = (sql: string, params: Record<string, string | number>) => {
  return db.prepare(sql).run(params).changes
}

export const remove = (sql: string) => {
  return db.prepare(sql).run().changes
}
