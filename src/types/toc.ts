// https://velite.js.org/guide/velite-schemas#types-2
export interface TocEntry {
  title: string;
  url: string;
  items: TocEntry[];
}
