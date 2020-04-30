const { Publication, User } = require("../models");
const userController = {
  create: async (_req, res) =>{
    const publications = await Publication.findAll({
      include: [
        {
          model: User,
          as: "user",
          required: true,
        },
        
      ],
    });

    // const publications = await Publication.findAll({
      
    //   include: {
    //     model: User,
    //     as: "user",
    //     required:true,
    //   },
    // });

    console.log(publications.user);
    res.render("index",{posts: publications});
  },

  store: async (req, res) => {
    const [photo] = req.files;
    const { user } = req.session;

   

    const newPost = Publication.create({
      image: `/posts/${photo.filename}`,
      like: 0,
      users_id: user.id,
      create_at: new Date(),
      update_at: new Date(),
    });

    return res.redirect("/home");
  },

  };

module.exports = userController;
