import { daySlashMonthSlashYear } from './formatter';
import { maxBy, sortBy } from 'lodash';

/**
 * @typedef {import('../../types').Expense} Expense
 * @typedef {import('../../types').CompleteExpense} CompleteExpense
 * @typedef {import('../../types').Category} Category
 * @typedef {import('../../types').Entity} Entity
 */

/** @param {Entity[]} entities */
export const getNextId = (entities) => (maxBy(entities, 'id')?.id || 0) + 1;

/**
 * @param {Entity[]} entities
 * @param {number} id
 */
export const getById = (entities, id) => entities.find((e) => e.id === id);

/**
 * @param {Entity[]} entities
 * @param {number} id
 */
export const getIndexById = (entities, id) => entities.findIndex((e) => e.id === id);

/** @param {Expense[]} expenses */
export const sortExpenses = (expenses) => sortBy(expenses, ['date', 'issue']).reverse();

/** @param {Category[]} categories */
export const sortCategories = (categories) =>
  categories.sort((a, b) => a.name.localeCompare(b.name));

/** @param {Expense} expense */
export const getExpenseLabel = (expense) =>
  `${daySlashMonthSlashYear(expense.date)} ${expense.issue}`;