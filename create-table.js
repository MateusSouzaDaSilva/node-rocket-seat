import { sql } from './db.js'

// sql`DROP TABLE IF EXISTS videos`.then(() => {
//   console.log("tabela apagada")
// })

sql`CREATE TABLE IF NOT EXISTS videos (
  id TEXT PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  description TEXT,
  duration INTEGER NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);`.then(() => {
    console.log('Tabela criada')
})