export interface Category {
  name: string[];
  style: {
    color?: string;
    icon: string;
  };
}

export const categories: Category[] = [
  {
    name: ['frontend'],
    style: {
      color: 'bg-blue-50 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300',
      icon: 'i-lucide-square-mouse-pointer',
    },
  },
  {
    name: ['ctf'],
    style: {
      color: 'bg-red-50 text-red-700 dark:bg-red-900/30 dark:text-red-300',
      icon: 'i-lucide-flag-triangle-right',
    },
  },
  {
    name: ['backend', 'infra'],
    style: {
      color: 'bg-green-50 text-green-700 dark:bg-green-900/30 dark:text-green-300',
      icon: 'i-lucide-server',
    },
  },
  {
    name: ['devops'],
    style: {
      color: 'bg-purple-50 text-purple-700 dark:bg-purple-900/30 dark:text-purple-300',
      icon: 'i-lucide-cloud',
    },
  },
  // languages
  {
    name: ['中文'],
    style: {
      color: 'bg-yellow-50 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-300',
      icon: 'i-lucide-languages',
    },
  },
  {
    name: ['日本語'],
    style: {
      color: 'bg-yellow-50 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-300',
      icon: 'i-lucide-languages',
    },
  },
];
