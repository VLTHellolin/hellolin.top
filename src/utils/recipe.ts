import { type ClassValue, clsx } from 'clsx';

type UnderscoreToBoolean<T> = T extends '_' ? boolean : T;
const booleanToUnderscore = (value: string | true): string => value === true ? '_' : value;

export type Recipe = Record<string, Record<string, ClassValue>>;
export type RecipeIngredient<T extends Recipe> = {
  [V in keyof T]?: UnderscoreToBoolean<keyof T[V]> | null;
};

export type BakeIngredient<T> =
  T extends (props: infer P) => string
    ? Omit<P, 'className'>
    : never;

export const createRecipe
  = <T extends Recipe = Recipe>(base: ClassValue, recipe: T) =>
    (props: RecipeIngredient<T> & { className?: ClassValue }) => {
      return clsx(
        base,
        Object.entries(props).reduce((acc, [key, value]) => {
          if (key === 'className') {
            return acc;
          }
          const convertedValue = booleanToUnderscore(value as (string | true));
          if (value && key in recipe && convertedValue in recipe[key]) {
            const classValue = recipe[key][convertedValue];
            if (classValue) {
              acc.push(classValue);
            }
          }
          return acc;
        }, [] as ClassValue[]),
        props.className,
      );
    };
