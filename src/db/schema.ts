import {
  pgTable,
  integer,
  text,
  varchar,
  boolean,
  date,
  timestamp,
  primaryKey,
  check,
} from 'drizzle-orm/pg-core';
import { sql } from 'drizzle-orm';

// 1. Settings Languages
export const settingsLanguages = pgTable('settings_languages', {
  id: integer('id').primaryKey().generatedAlwaysAsIdentity(),
  language: text('language').notNull(),
});

// 2. Settings
export const settings = pgTable(
  'settings',
  {
    id: integer('id').primaryKey().generatedAlwaysAsIdentity(),
    theme: text('theme'),
    languageId: integer('language_id').references(() => settingsLanguages.id),
    notifications: boolean('notifications'),
    goalAmount: integer('goal_amount'),
    goalInterval: text('goal_interval'),
  },
  (table) => [
    check('settings_id_check', sql`${table.id} = 1`),
  ]
);

// 3. Authors
export const authors = pgTable('authors', {
  id: integer('id').primaryKey().generatedAlwaysAsIdentity(),
  name: text('name').notNull(),
  surname: text('surname').notNull(),
});

// 4. Author Credentials
export const authorCredentials = pgTable('author_credentials', {
  id: integer('id').primaryKey().generatedAlwaysAsIdentity(),
  authorId: integer('author_id')
    .notNull()
    .references(() => authors.id),
  credential: text('credential'),
  position: text('position'),
  displayOrder: integer('display_order'),
});

// 5. Book Languages
export const bookLanguages = pgTable('book_languages', {
  id: integer('id').primaryKey().generatedAlwaysAsIdentity(),
  language: text('language').notNull(),
});

// 6. Book Types
export const bookTypes = pgTable('book_types', {
  id: integer('id').primaryKey().generatedAlwaysAsIdentity(),
  type: text('type').notNull(),
});

// 7. Publisher
export const publisher = pgTable('publisher', {
  id: integer('id').primaryKey().generatedAlwaysAsIdentity(),
  name: text('name').notNull(),
});

// 8. Folders
export const folders = pgTable('folders', {
  id: integer('id').primaryKey().generatedAlwaysAsIdentity(),
  name: text('name').notNull(),
});

// 9. Books
export const books = pgTable('books', {
  id: integer('id').primaryKey().generatedAlwaysAsIdentity(),
  isbn: varchar('ISBN', { length: 20 }),
  pages: integer('pages'),
  language: integer('language').references(() => bookLanguages.id),
  authorId: integer('author_id').references(() => authors.id),
  photosDir: text('photos_dir'),
  description: text('description'),
  isSeries: boolean('is_series').default(false),
  bookTypeId: integer('book_type_id').references(() => bookTypes.id),
  publicationDate: date('publication_date'),
  publisherId: integer('publisher_id').references(() => publisher.id),
  onPage: integer('on_page'),
  folderId: integer('folder_id').references(() => folders.id),
});

// 10. Reading Logs
export const readingLogs = pgTable('reading_logs', {
  id: integer('id').primaryKey().generatedAlwaysAsIdentity(),
  timestamp: timestamp('timestamp').defaultNow().notNull(),
  amount: integer('amount').notNull(),
  bookId: integer('book_id')
    .notNull()
    .references(() => books.id),
});

// 11. Tags
export const tags = pgTable('tags', {
  id: integer('id').primaryKey().generatedAlwaysAsIdentity(),
  tag: text('tag').notNull(),
});

// 12. Book Tags (Junction Table)
export const bookTags = pgTable(
  'book_tags',
  {
    tagId: integer('tag_id')
      .notNull()
      .references(() => tags.id),
    bookId: integer('book_id')
      .notNull()
      .references(() => books.id),
  },
  (table) => [
    primaryKey({ columns: [table.tagId, table.bookId] }),
  ]
);