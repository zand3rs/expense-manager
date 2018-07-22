/*
 * Expense
 *
 */

const _ = require("lodash");
const Base = require("./base");

//==============================================================================

class Expense extends Base {

  constructor() {
    const options = {
      tableName: "expenses"
    };

    super(options);
  }

}

//==============================================================================
//-- export

module.exports = new Expense();

//==============================================================================
