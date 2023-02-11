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

//create a diff, to checked for changes on users account
const difference = (before: SaveSearch, after: SaveSearch) => {
    const result = {
        listingTypes: diffStr(before.listingTypes, after.listingTypes),
    };
    return result;
};

const ModuleSaveAction = {
    difference,
};

export default ModuleSaveAction;
