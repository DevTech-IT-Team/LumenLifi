// Utility string merger helper to safely group tailwind conditional execution logic classes
export function cn(...classes) {
  return classes.filter(Boolean).join(' ');
}