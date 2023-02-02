const UserService = require("../Services/UserService.js");
class UserController {
  async create(req, res) {
    try {
      console.log("====================================");
      console.log(req.body);
      console.log("====================================");
      const user = await UserService.create(req.body);
      res.json(user);
    } catch (e) {
      res.status(500).json(e);
    }
  }

  async getAll(req, res) {
    try {
      const Users = await UserService.getAll();
      return res.json(Users);
    } catch (e) {
      res.status(500).json(e);
    }
  }
  async getByEmail(req, res) {
    
    try {
      const emails = await UserService.getByEmail(req.body);
      if(req.body.ids) {
        if (String(emails._id) === req.body.ids) {
          return res.json({ success: "success" });
        }
      }
      if (emails) {
        return res.json("Email already been taken");
      }

      return res.json({ success: "success" });
    } catch (e) {
      res.status(500).json(e);
    }
  }
  async getOne(req, res) {
    try {
      const User = await UserService.getOne(req.params.id);
      return res.json(User);
    } catch (e) {
      res.status(500).json(e);
    }
  }

  async update(req, res) {
    console.log(req.body);
    try {
      const updatedUser = await UserService.update(req.body);
      return res.json(updatedUser);
    } catch (e) {
      res.status(500).json(e);
    }
  }

  async deleteMany(req, res) {
    try {
      const user = await UserService.deleteMany(req.body.ids);
      if (!user.deletedCount) {
        return res.json("Users not found");
      }
      return res.json(user);
    } catch (e) {
      res.status(500).json(e);
    }
  }

  async delete(req, res) {
    try {
      const user = await UserService.delete(req.params.id);
      if (!user) {
        return res.json("User not found");
      }
      return res.json(user);
    } catch (e) {
      res.status(500).json(e);
    }
  }
}

module.exports = new UserController();
