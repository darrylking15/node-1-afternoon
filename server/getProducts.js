module.exports = {
    getProducts: (req, res) => {
        res.status(200).send(products)
    }, 
    getProduct: (req, res) =>{
        const item = products.find(val => val.id === parseInt(req.params.id))
        if(!item){
            return res.status(500).send('Item not in list')
        }
        res.status(200).send(item)
    }
}