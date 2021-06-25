module.exports = function () { //Web Services Chapter
    var data = {
        products: [{
                id: 1,
                name: 'Kayak',
                category: 'Watersports',
                price: 275
            },
            {
                id: 2,
                name: 'Lifejacket',
                category: 'Watersports',
                price: 48.95
            },
            {
                id: 3,
                name: 'Soccer Ball',
                category: 'Soccer',
                price: 19.50
            }
        ],
        suppliers: [{
                id: 1,
                name: 'Surf Dudes',
                city: 'San Jose',
                products: [1, 2]
            },
            {
                id: 2,
                name: 'Goal Oriented',
                city: 'Seattle',
                products: [2, 3]
            }
        ]
    }
    return data
}