/*
 * Category
 *
 */

const _ = require("lodash");
const Base = require("./base");

//==============================================================================

class Category extends Base {

  constructor() {
    const options = {
      tableName: "categories",
      attributes: {
        id: _.toInteger,
        title: _.toString,
        description: _.toString,
        createdAt: date => new Date(date),
        updatedAt: date => new Date(date)
      }
    };

    super(options);
  }

}

//==============================================================================
//-- export

module.exports = new Category();

//==============================================================================
