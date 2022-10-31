const express = require('express')
const Contenedor = require('./controllers/Contenedor')
const routerProductos = require('./routes/productos/index')
// const { Router } = express
const app = express()

// const productos = new Contenedor('productos.json')
// const routerProductos = new Router()
// routerProductos.use(express.json())

const PORT = 8080

app.use(express.json())
app.use(express.urlencoded({extended:true}));
app.use(express.static(__dirname + '/public'));

const server = app.listen(PORT, () => {
    console.log(`Servidor http escuchando en el puerto ${server.address().port}`)
})
server.on("error", error => console.log(`Error en servidor ${error}`))

app.use('/api/productos', routerProductos)

// routerProductos.get('/', async (req, res) => {
//     const prods = await productos.getAll()
//     res.send(prods)
// })

// routerProductos.get('/:id', async (req, res, next) => {
//     const { id } = req.params;
//     const productoId = await productos.getById(parseInt(id))
//     if(productoId.length === 0 ) {
//         const error = new Error('producto no encontrado');
//         error.httpStatusCode = 400;
//         return next(error);
//     }
//     res.send(productoId);
// })

// routerProductos.post('/', async (req, res) => {
//     const { body } = req
//     const prods = await productos.save(body)
//     res.send(prods)
// })

// routerProductos.put('/:id', (req, res) => {
//     const { title, price, thumbnail} = req.body;
//     const { id } = req.params;
//     const productoId = productos.getById(parseInt(id))
//     const newProduct = {title, price, thumbnail, id};
//     console.log(newProduct)
//     console.log({productoId})
//     res.send(productoId);
// })

// routerProductos.delete('/:id', async (req, res) => {
//     const { id } = req.params;
//     const productoId = await productos.deleteById(parseInt(id))
//     res.send(productoId)
// })



// app.get('/api/productosRandom', async (req, res) => {
//     const prods = await productos.getAll()
//     const randomId = parseInt(Math.random() * prods.length)
//     console.log(randomId)
//     res.send(prods[randomId])
// })

// const frase = ["Frase", "inicial"]
// app.get('/api/frase', async (req, res) => {
//     res.send(frase.join(" "))
// })

// app.post('/api/palabras', async (req, res) => {
//     const {palabra} = req.body
//     frase.push(palabra)
//     res.send(frase.join(" "))
// })



