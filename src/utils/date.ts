const dateLocale = new Intl.DateTimeFormat('en-GB', {
  year: 'numeric',
  month: 'short',
  day: 'numeric',
});

export const formatDate = (date: string) => dateLocale.format(new Date(date));
