/* B"H
*/

const { db, ObjectId } = require('./mongo');
const userModel = require('./user');

const collection = db.db("gratitude").collection('posts');

let hieghstId = 3;

const list = [
    {
        src: 'https://media-cldnry.s-nbcnews.com/image/upload/t_focal-560x280,f_auto,q_auto:best/newscms/2022_13/3543963/220328-ukriane-mb-0729.jpg',
        caption: 'Russian forces focus on eastern Ukraine amid rising fears they may seek to split the country in two',
        owner: "vp",
        likes: [],
        comments: [],
        isPublic: true,
        id: 1,
     },
     {
        src: 'https://w2.chabad.org/media/images/1187/LUSK11877068.jpg?_i=_nF72F3FCB89E9790A548A28674376BE69',
        caption: 'How Jews in Ukraine Will Celebrate Passover This Year',
        owner: "vp",
        likes: [],
        comments: [],
        isPublic: true,
        id: 2,
     },
     {
        src: 'https://w2.chabad.org/media/images/1187/sTyy11875354.jpg?_i=_nF72F3FCB89E9790A548A28674376BE69',
        caption: 'What It Has Been Like to Host Ukraine Refugees',
        owner: "russian_dictator",
        likes: [],
        comments: [],
        isPublic: true,
        id: 3,
     }
];

const includeUser = async post => ({ ...post, user: await userModel.getByHandle(post.owner) });

async function get(id){
    const post = await collection.findOne({ _id: new ObjectId(id) });
    if(!post){
        throw { status: 404, message: 'Post not found' };
    }
    return includeUser(post) ;
}

async function getWall(handle){
    const posts = await collection.find({ owner: handle }).toArray();

    return Promise.all( posts.map(x=> includeUser(x) ) );
}

async function remove(id){
    const post = await collection.findOneAndDelete({ _id: new ObjectId(id) });
    
    return includeUser(post.value);
}

async function update(id, newPost){
    newPost = await collection.findOneAndUpdate(
        { _id: new ObjectId(id) },
        { $set: newPost },
        { returnDocument: 'after' }
    );

    //console.log(list);
    
    return includeUser(newPost);
}

function seed(){
    return collection.insertMany(list);
}

module.exports = {
    async create(post) {
        post.id = ++hieghstId;

        const result = await collection.insertOne(post);
        post = await get(result.insertedId);

        return  includeUser(post);
    },
    remove,
    update,
    async  getList(){
        const posts = await collection.find({}).toArray();

        return Promise.all( posts.map(x=> includeUser(x) ) );
    },
    getWall,
    seed,
}
module.exports.get = get;