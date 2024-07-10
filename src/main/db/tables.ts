import { db } from './connect'
import { Random } from 'mockjs'
import { findOne } from './query'

export function initTable() {
  db().exec(`
  create table if not exists categories(
    id integer primary key autoincrement not null,
    name text not null,
    created_at text not null
  );
`)

  db().exec(`
  create table if not exists contents(
    id integer primary key autoincrement not null,
    title text not null,
    content text not null,
    category_id integer,
    created_at text not null
  );
`)

  db().exec(`
  create table if not exists config(
    id integer primary key autoincrement not null,
    content text not null
  );
`)

  initData()
}

function initData(): void {
  const isInit = findOne('select * from contents')
  if (isInit) return
  db().exec(`INSERT INTO config (content) VALUES ('');`)
  for (let i = 0; i < 10; i++) {
    const name = Random.title(4, 8)
    db().exec(`
  INSERT INTO categories (name, created_at) VALUES ('${name}', datetime());
  `)
    for (let j = 0; j < 20; j++) {
      const title = Random.title(5, 10)
      const content = Random.paragraph(4, 10)
      db().exec(`
      INSERT INTO contents (title, content, category_id, created_at) VALUES ('${title}', '${content}', ${i + 1}, datetime());
      `)
    }
  }
}


