import ModuleSaveAction, { SaveSearch } from './saved-search';

const buildSaveSearch = (): SaveSearch => ({
  listingTypes: 'sell',
  TownId: [],
  propertyTypes: ['Land'],
});

describe('SaveSearch', () => {
  test(' detect changes on string', () => {
    const before: SaveSearch = {
      ...buildSaveSearch(),
      listingTypes: 'sell',
    };
    const after: SaveSearch = {
      ...buildSaveSearch(),
      listingTypes: 'rent',
    };
    const diff = ModuleSaveAction.diff(before, after);

    const result = {
      listingTypes: {
        before: 'sell',
        after: 'rent',
      },
    };
    expect(ModuleSaveAction.diff(before, after)).toMatchObject(result);
  });
  test(' if string remain the same', () => {
    const before: SaveSearch = buildSaveSearch();
    const after: SaveSearch = buildSaveSearch();

    const result = {};
    expect(ModuleSaveAction.diff(before, after)).toMatchObject(result);
  });
  test(' detect removal from Array values', () => {
    const before: SaveSearch = {
      ...buildSaveSearch(),
      TownId: ['number-1'],
    };
    const after: SaveSearch = {
      ...buildSaveSearch(),
      TownId: ['number-2'],
    };

    const result = {
      TownId: {
        added: ['number-2'],
        removed: ['number-1'],
      },
    };
    expect(ModuleSaveAction.diff(before, after)).toMatchObject(result);
  });
});
