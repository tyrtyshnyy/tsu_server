
const User = require( '../Models/User.js');

class UserService {
  async create(user) {
    const createdUser = await User.create(user);
    console.log(createdUser);
    return createdUser;
  }

  async getAll() {
    const users = await User.find().sort({createDate: 1}); //сортировка по дате создания
    return users;
  }

  async getByEmail(body) {
    
    const emails = await User.findOne({email: body.email})
    return emails;
  }

  async getOne(id) {
    if (!id) {
      throw new Error('Id not specified');
    }
    const getOneUser = await User.findById(id);
    return getOneUser;
  }

  async update(user) {
    if (!user._id) {
      throw new Error('Id not specified');
    }
    const updatedUser = await User.findByIdAndUpdate(user._id, user, { new: true });
    return updatedUser;
  }
  async deleteMany(ids) {
    const user = await User.deleteMany({'_id': {'$in': ids}})
    console.log(user);
    return user;
  }

  async delete(id) {
    if (!id) {
      throw new Error('Id not specified');
    }
    const user = await User.findByIdAndDelete(id);
    return user;
  }
}

module.exports =  new UserService();
