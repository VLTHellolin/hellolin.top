export interface Callout {
  color: string;
  icon: string;
}
export type CalloutType
  = | 'info'
    | 'warning'
    | 'danger'
    | 'success'
    | 'tip'
    | 'summary'
    | 'theorem'
    | 'proof'
    | 'example'
    | 'problem'
    | 'solution';

export const callouts: Record<CalloutType, Callout> = {
  info: {
    color: 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300 border-color-blue-300 dark:border-color-blue-900/40',
    icon: 'i-lucide-info',
  },
  warning: {
    color: 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-300 border-color-yellow-300 dark:border-color-yellow-900/40',
    icon: 'i-lucide-triangle-alert',
  },
  danger: {
    color: 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-300 border-color-red-300 dark:border-color-red-900/40',
    icon: 'i-lucide-circle-x',
  },
  success: {
    color: 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300 border-color-green-300 dark:border-color-green-900/40',
    icon: 'i-lucide-circle-check',
  },
  tip: {
    color: 'bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-300 border-color-purple-300 dark:border-color-purple-900/40',
    icon: 'i-lucide-lightbulb',
  },
  summary: {
    color: 'bg-gray-100 text-gray-700 dark:bg-gray-900/30 dark:text-gray-300 border-color-gray-300 dark:border-color-gray-900/40',
    icon: 'i-lucide-clipboard-list',
  },
  theorem: {
    color: 'bg-teal-100 text-teal-700 dark:bg-teal-900/30 dark:text-teal-300 border-color-teal-300 dark:border-color-teal-900/40',
    icon: 'i-lucide-book-open',
  },
  proof: {
    color: 'bg-indigo-100 text-indigo-700 dark:bg-indigo-900/30 dark:text-indigo-300 border-color-indigo-300 dark:border-color-indigo-900/40',
    icon: 'i-lucide-shield-check',
  },
  example: {
    color: 'bg-pink-100 text-pink-700 dark:bg-pink-900/30 dark:text-pink-300 border-color-pink-300 dark:border-color-pink-900/40',
    icon: 'i-lucide-box',
  },
  problem: {
    color: 'bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-300 border-color-orange-300 dark:border-color-orange-900/40',
    icon: 'i-lucide-book',
  },
  solution: {
    color: 'bg-cyan-100 text-cyan-700 dark:bg-cyan-900/30 dark:text-cyan-300 border-color-cyan-300 dark:border-color-cyan-900/40',
    icon: 'i-lucide-check',
  },
};
