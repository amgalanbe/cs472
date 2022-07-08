const products = [];
let productIdCounter = 0;

class Product {
    constructor(id, name, description, price, stock) {
        this.id = id;
        this.name = name; 
        this.description = description;
        this.price = price;
        this.stock = stock;
    }

    save() {
        this.id = ++productIdCounter;
        products.push(this);
    }

    static getAll(){
        return products;
    }

    static getProductById(productId){
        console.log('in get product by id ');
        return products.find(p=>p.id == productId);
    }
}

new Product(null, 'Ulysses', 'Ulysses chronicles the passage of Leopold Bloom through Dublin during an ordinary day, June 16, 1904.', 21.95, 6).save();
new Product(null, 'Don Quixote', 'Alonso Quixano, a retired country gentleman in his fifties, lives in an unnamed section of La Mancha with his niece and a housekeeper.', 21.49, 32).save();
new Product(null, 'One Hundred Years of Solitude', 'One of the 20th century\'s enduring works, One Hundred Years of Solitude is a widely beloved and acclaimed novel known throughout the world', 28.09, 12).save();
new Product(null, 'The Great Gatsby', 'The novel chronicles an era that Fitzgerald himself dubbed the \"Jazz Age\".', 9.95, 10).save();
new Product(null, 'Moby Dick', 'First published in 1851, Melville\'s masterpiece is, in Elizabeth Hardwick\'s words, "the greatest novel in American literature."', 6.99, 18).save();

module.exports = Product;