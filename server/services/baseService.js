class BaseService {
  constructor(model) {
    this.model = model;
  }

  save(objects) {
    return this.model.insertMany(objects);
  }

  load(filter = {}, sort = {}) {
    return this.model.find(filter).sort(sort);
  }

  async insert(object) {
    return await this.model.create(object);
  }

  async removeBy(property, value) {
    return this.model.deleteOne({ [property]: value });
  }

  async update(id, object) {
    return this.model.findByIdAndUpdate(id, object);
  }

  async find(id) {
    return this.model.findById(id);
  }

  async query(findObj = {}, sortObj = {}) {
    return this.model.find(findObj).sort(sortObj);
  }

  async querySelect(
    findObj = {},
    select = ["values.ADESE", "values.ALTIN_TL"],
    sortObj = {}
  ) {
    return this.model.find(findObj).select(select).sort(sortObj);
  }

  async queryLimited(findObj = {}, limit = 0, sortObj = {}) {
    return this.model.find(findObj).sort(sortObj).limit(limit);
  }

  async findBy(property, value) {
    return this.model.find({ [property]: value });
  }
}

export default BaseService;
