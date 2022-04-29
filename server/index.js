require('dotenv').config();
const express = require('express');

const userModel = require('./models/user');
const usersController = require('./controllers/users');
const postsController = require('./controllers/posts');

const { requireAuth } = require('./models/auth');

const app = express()
const port = process.env.PORT || 3000;

//console.log(process.env);

app
    
    .use('/', express.static(__dirname + '/public/'))

    .use(function(req, res, next) {
        res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
        next();
    })

    .use(express.json())
    .use((req, res, next) => {
        const auth = req.headers.authorization;
        if(auth){
            const token = auth.split(' ')[1];
            userModel.fromToken(token)
            .then(user => {
                req.user = user;
                next();
            }).catch(next);
        }else{
            next();
        }
    })

    .get('/api/', (req, res) => {
        res.send('You are at the root of the API. For the best class ever - ' + process.env.BEST_CLASS_EVER);
    })
    .use('/api/users', usersController)
    .use('/api/posts', /*requireAuth,*/ postsController)

    .use((err, req, res, next) => {
        console.error(err);

        res .status(err.statusCode || 500)
            .send({ errors: [ err.message ?? 'Internal server error' ] });
    })

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})