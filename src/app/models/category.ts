export interface Category {
    id: number;
    name: string;
    parentCategories: Category[];
}
