const corsOptions = {
    origin: function (origin, callback) {
        if (origin.startsWith('https://storydots-challenge-client-git-main-nicoledl.vercel.app')) {
            callback(null, true)
        } else {
            callback(new Error('Not allowed by CORS'))
        }
    },
    optionsSuccessStatus: 200,
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization', 'token']
}

module.exports = corsOptions;