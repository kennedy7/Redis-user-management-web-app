const { client} =  require ('./redisConfig')
const flash = require ('flash')
exports.SearchUser = async (req, res, next) => {
    try {
        let id = req.body.id;
        console.log(id)
    const user =  await client.hGetAll(id)
            if(user) {
                user.id = id; 
                console.log(user)
                return res.render('details', { user: user})
            }
            res.render("search", {errors: 'User does not exist'});

    } catch (err){next(err)}
}


exports.Adduser = async (req, res, next)=>{
    try{
    const {
        id,
        firstname,
        lastname,
        email,
        phone
      } = req.body;
      
      console.log({
        id,
        firstname,
        lastname,
        email,
        phone
      });
    await client.hSet(id, [
          'firstname', firstname, 
          'lastname', lastname,
          'email', email,
          'phone', phone,
      ], (err, reply)=>{
          if(err){
              console.log(err)
            }
            console.log(reply) 
        })
            req.flash("success_msg", "User saved!");
            res.redirect('/')
     
    }
      catch(err){
          next(err)
      }
}