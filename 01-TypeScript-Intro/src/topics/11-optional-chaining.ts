

export interface Passager {
    name: string;
    children?: string[];
}

const pasager1: Passager = {
    name: 'Fernando',
}

const passager2: Passager = {
    name: 'Zatu',
    children: ['Natos', 'Waor'],
} 

const printChildrenNumber = ( passager: Passager): number => {
    
    // if ( !passager.children ) return 0;
    const howManyChildren = passager.children?.length || 0;
    // const howManyChildren = passager.children!.length;

    console.log(passager.name, howManyChildren);

    return howManyChildren;
}

printChildrenNumber(pasager1);