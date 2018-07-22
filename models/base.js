/*
 * Base Model
 *
 */

const _ = require("lodash");
const mysql = require("mysql");

const config = require("../config");

//==============================================================================

let conn = mysql.createPool({
  host     : _.get(config.mysql, "host") || "localhost",
  user     : _.get(config.mysql, "user") || "",
  password : _.get(config.mysql, "password") || "",
  database : _.get(config.mysql, "database") || "",
  connectionLimit : 2
});

//==============================================================================

class Base {

  constructor(options) {
    const self = this;
    this.tableName = _.get(options, "tableName") || "";
    this.attributes = _.get(options, "attributes", {});
  }

  //---------------------------------------------------------------------------

  find(options, done) {
    let sql = "SELECT * FROM " + this.tableName;
    let vars = [];

    conn.query(sql, vars, (error, results, fields) => {
      const records = _.map(results, val => this._toRecord(val));
      done(error, records);
    });

  }

  //---------------------------------------------------------------------------

  findOne(options, done) {
    done();
  }

  //---------------------------------------------------------------------------

  create(options, done) {
    done();
  }

  //---------------------------------------------------------------------------

  update(options, done) {
    done();
  }

  //---------------------------------------------------------------------------

  destroy(options, done) {
    done();
  }

  //===========================================================================
  //-- private

  _toRecord(value) {
    const record = {};

    _.forIn(this.attributes, (val, key) => {
      const field = _.get(value, _.snakeCase(key), null);
      record[key] = (!_.isNil(field) && _.isFunction(val)) ? val(field) : null;
    });

    return record;
  }

}

//==============================================================================
//-- export

module.exports = Base;

//==============================================================================
