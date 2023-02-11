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

        const result = {
            listingTypes: {
                before: 'sell',
                after: 'rent',
            },
        };
        expect(ModuleSaveAction.difference(before, after)).toEqual(result);
    });
});

test(' if string remain the same', () => {
    const before: SaveSearch = buildSaveSearch();
    const after: SaveSearch = buildSaveSearch();

    const result = {
        listingTypes: undefined,
    };
    expect(ModuleSaveAction.difference(before, after)).toEqual(result);
});
