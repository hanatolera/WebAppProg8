const http = require('http');

const hostname = process.env.hostname || '127.0.0.1';
const port = process.env.port || 3001;

const ingredients = [
    { name: "Honey", amount: 1, unit: "cup" },
    { name: "Flour", amount: 2, unit: "cups" },
    { name: "Eggs", amount: 3, unit: "eggs" },
    { name: "Butter", amount: 1, unit: "cup" }
];

const used = [false, false, false, false];

const server = http.createServer((req, res) => {

    let index = Math.floor(Math.random() * ingredients.length);
    let ingredient = null;

    if (!used[index]) {
        ingredient = ingredients[index];
        used[index] = true;
    } else {
        for (let i = 0; i < ingredients.length; i++) {
            let nextIndex = (index + i) % ingredients.length;

            if (!used[nextIndex]) {
                index = nextIndex;
                ingredient = ingredients[index];
                used[index] = true;
                break;
            }
        }
    }

    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');

    res.write('<html>');
    res.write('<head><title>Hana lists an ingredient</title></head>');
    res.write('<body>');
    res.write('<h1>Honey Cake Ingredients</h1>');
    res.write('<div>');

    if (ingredient !== null) {
        res.write(`Index: ${index}<br>`);
        res.write(`Ingredient: ${ingredient.amount} ${ingredient.unit} ${ingredient.name}`);
    } else {
        res.write('nothing left');
    }

    res.write('</div>');
    res.write('</body>');
    res.end('</html>');
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});