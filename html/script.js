function foo() {
    console.log("Hello, World!");
    let thing = document.getElementById("hehe");
    if (!thing) {
        console.error("Element with id 'hehe' not found.");
        return;
    }

    thing.style.backgroundColor = "rgba(120, 220, 100, 0.9)";
    thing.style.borderRadius = "100px";
    thing.style.border = "0px";

    // for (let i = 0; i <= 100; i++) {
        
    //     let baseTime = i * 1000;             
    //     let diff = 100 + i * 5;            

    //     // first color step
    //     setTimeout(() => {
    //         thing.innerHTML = "Helloy Green";
    //         thing.style.backgroundColor = "rgb(223, 223, 115)";
    //     }, baseTime);

    //     // second color step with variable difference
    //     setTimeout(() => {
    //         thing.innerHTML = "Hellog Yellow";
    //         thing.style.backgroundColor = "rgba(120, 220, 100, 0.9)";
    //     }, baseTime + diff);
    // }
}

var listo = []

function loadProducts(callback) {
    setTimeout(() => {
        listo = [
            { name: "Apple", value: 5, description: "Fresh red apple" },
            { name: "Banana", value: 3, description: "Ripe yellow banana" },
            { name: "Carrot", value: 7, description: "Organic orange carrot" },
            { name: "Dragonfruit", value: 15, description: "Exotic dragonfruit" },
            { name: "Eggplant", value: 9, description: "Glossy purple eggplant" },
            { name: "Fig", value: 12, description: "Sweet and juicy fig" },
            { name: "Grapes", value: 6, description: "Seedless green grapes" },
            { name: "Honeydew", value: 20, description: "Refreshing honeydew melon" },
            { name: "Iceberg Lettuce", value: 4, description: "Crisp iceberg lettuce" },
            { name: "Jackfruit", value: 25, description: "Large tropical jackfruit" }
        ];
        callback();
    }, 22220);
}



const bar = () => {} // random arrow

function renderProducts(){
    let thingy = document.getElementById("data");

    function renderProductsListWithData(){
        if (listo.length === 0) {
            thingy.innerHTML = "<p>No products available.</p>";
            return;
        }
        thingy.innerHTML = `
            <table>
                <thead>
                    <tr>
                        <th>S.No</th>               
                        <th>Name</th>
                        <th>Value</th>
                        <th>Description</th>
                    </tr> 
                </thead>
                <tbody>
                    ${listo.map((item, index) => `
                        <tr>
                            <td>${index + 1}</td>
                            <td>${item.name}</td>
                            <td>${item.value}</td>
                            <td>${item.description}</td>
                        </tr>
                    `).join('')}
                </tbody>
            </table>`;
    }

    thingy.innerHTML = "<p>Loading products...</p>";

    loadProducts(renderProductsListWithData);
}

foo();



renderProducts()