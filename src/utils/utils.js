export function generateId() {
  return 'id-' + Math.random().toString(36).substr(2, 16);
};
