

// Create empty inventory array
let inventory = [];

// Function to create product
function createProduct(name, price, quantity) {
    return {
        name: name,
        price: price,
        quantity: quantity
    };
}

// Add products to inventory
inventory.push(createProduct("Laptop", 1200, 10));
inventory.push(createProduct("Mouse", 25, 50));
inventory.push(createProduct("Keyboard", 100, 20));


//  Updating Data

// Update Mouse price
inventory[1].price = 30;

// Add category to Laptop
inventory[0].category = "Electronics";



let extraDetails = {
    warranty: "2 years",
    color: "Silver"
};


let updatedLaptop = {
    ...inventory[0],
    ...extraDetails
};

console.log("Updated Laptop:", updatedLaptop);


const calculateTotalValue = (price, quantity) => {
    return price * quantity;
};

let keyboard = inventory[2];
let totalValue = calculateTotalValue(keyboard.price, keyboard.quantity);

console.log("Keyboard Total Value:", totalValue);


let adminUser = {
    name: "Manager",
    permissions: {
        canEdit: true,
        canDelete: false
    }
};

if (adminUser.permissions.canEdit) {
    console.log("Access Granted: Inventory updated.");
}