export const normalizeGroupKey = (group) =>
  typeof group === 'string'
    ? group
        .trim()
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, '-')
        .replace(/^-+|-+$/g, '')
    : '';

export const ALL_GROUP_KEY = normalizeGroupKey('All');
