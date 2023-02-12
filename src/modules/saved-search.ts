import { difference, isUndefined, omitBy } from 'lodash';

export type SaveSearch = {
  listingTypes: 'rent' | 'sell';
  TownId: string[];
  propertyTypes: (
    | 'House'
    | 'Condo'
    | 'Townhouse'
    | 'Multi-Family'
    | 'Land'
    | 'Mobile/Manufactured'
  )[];
};

const diffStr = (before: string, after: string) => {
  if (before === after) return undefined;
  return { before, after };
};

const diffArr = (before: string[], after: string[]) => {
  return {
    added: difference(after, before),
    removed: difference(before, after),
  };
};

type saveDiffObj = Record<string, string | string[]>;

type Diff<TObject extends saveDiffObj> = {
  [key in keyof TObject]: TObject[key] extends string[]
    ? { added: string[]; remove: string[] }
    : { before: string; after: string };
};

//create a diff, to checked for changes on users account
const diff = <TObject extends saveDiffObj>(
  before: TObject,
  after: saveDiffObj
): Diff<TObject> => {
  const entries = Object.entries(before).map(([key, value]) => {
    if (typeof value === 'string')
      return [key, diffStr(value, after[key] as string)];
    return [key, diffArr(value, after[key] as string[])];
  });
  const result = Object.fromEntries(entries);

  return omitBy(result, isUndefined) as Diff<TObject>;
};

const ModuleSaveAction = {
  diff,
};

export default ModuleSaveAction;
