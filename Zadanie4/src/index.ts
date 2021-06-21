export class Product{
    private name: string
    private price: number
    private category: Category
    constructor (name: string, price: number, category: Category = Category.Brak){
        this.name = name
        this.price = price;
        this.category = category;
    }
    productInfo(): string {
        return `${this.name} ${this.price} ${this.category.toString()}` 
    }
}

export enum Category {
Jedzenie = "Jedzenie",
Ubranie = "Ubranie",
Inne = "Inne",
Brak = "Brak"
}

