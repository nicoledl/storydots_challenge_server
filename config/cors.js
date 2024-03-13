const corsOptions = {
    // origin: function (origin, callback) {
    //     if (origin.startsWith('http://localhost:3001')) {
    //         callback(null, true)
    //     } else {
    //         callback(new Error('Not allowed by CORS'))
    //     }
    // },
    origin:"*",
    optionsSuccessStatus: 200,
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization', 'token']
}

module.exports = corsOptions;