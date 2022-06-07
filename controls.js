const { client} =  require ('./redisConfig')
exports.SearchUser = async (req, res, next)=>{
    try{
    let id = req.body.id;
    console.log(id)
    
const user = await client.hGetAll(id);
if(user){
            console.log(user)
            user.id = id;
            res.render('details', {user:user})
        } else{
            // let errors = [];
            // errors.push({message:'User does not exist'});
            console.log('here')
            res.render('search', {errors: 'user does not exist'})
        };
        next()
    
}catch (err){
    next(err)
}
}