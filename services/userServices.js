exports.getUserById = (req, res) => {
    var id = require('url').parse(req.url,true).query.id;
    knex.from('ProductBase')
    .where('productBaseId', id)
    .then(function(ProductBase){
        knex.from('ProductVariant')
        .where('productBaseId', id)
        .orderBy([{ column: 'ProductVariant.availability', order: 'desc' }, { column: 'price', order: 'asc' }])  
        .then(function(RelatedProducts) {
            res.statusCode = 200;
            var result = Object.assign({}, {ProductBase}, {RelatedProducts});
            res.json(result)
        }).catch((err) => { console.log(err); return err });
    });
};