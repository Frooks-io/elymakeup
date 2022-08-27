import {Byte} from "@angular/compiler/src/util";
import {Category} from "./category";

export interface Product {
    id: number;
    name: string;
    image: Byte[];
    price: number;
    description: string;
    categories: Category[];
    isNew: boolean;
}

export const product = [
    {
        id: 1,
        name: "L'oreal Corrector",
        price: 12.99,
        description: 'Corrector de ojeras',
        categories: {id: 2, name: "Maquillaje", parentCategories: {id: 1, name: "Belleza"}},
        isNew: true
    }, {
        id: 2,
        name: "L'oreal Corrector",
        price: 12.99,
        description: 'Corrector de ojeras',
        categories: {id: 2, name: "Maquillaje", parentCategories: {id: 1, name: "Belleza"}},
        isNew: true
    }, {
        id: 3,
        name: "L'oreal Corrector",
        price: 12.99,
        description: 'Corrector de ojeras',
        categories: {id: 2, name: "Maquillaje", parentCategories: {id: 1, name: "Belleza"}},
        isNew: true
    }, {
        id: 4,
        name: "L'oreal Corrector",
        price: 12.99,
        description: 'Corrector de ojeras',
        categories: {id: 2, name: "Maquillaje", parentCategories: {id: 1, name: "Belleza"}},
        isNew: true
    }, {
        id: 5,
        name: "L'oreal Corrector",
        price: 12.99,
        description: 'Corrector de ojeras',
        categories: {id: 2, name: "Maquillaje", parentCategories: {id: 1, name: "Belleza"}},
        isNew: true
    }, {
        id: 6,
        name: "L'oreal Corrector",
        price: 12.99,
        description: 'Corrector de ojeras',
        categories: {id: 2, name: "Maquillaje", parentCategories: {id: 1, name: "Belleza"}},
        isNew: true
    }, {
        id: 7,
        name: "L'oreal Corrector",
        price: 12.99,
        description: 'Corrector de ojeras',
        categories: {id: 2, name: "Maquillaje", parentCategories: {id: 1, name: "Belleza"}},
        isNew: true
    }, {
        id: 8,
        name: "L'oreal Corrector",
        price: 12.99,
        description: 'Corrector de ojeras',
        categories: {id: 2, name: "Maquillaje", parentCategories: {id: 1, name: "Belleza"}},
        isNew: true
    }
];
