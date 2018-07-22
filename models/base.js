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
  }

  //---------------------------------------------------------------------------

  find(options, done) {
    const cmd = "SELECT * FROM " + this.tableName;
    const {sql, vars} = this._buildQuery(cmd, options);

    conn.query(sql, vars, (error, results, fields) => {
      done(error, results);
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

  _buildQuery(command, options) {
    let sql = command;
    let where = _.get(options, "where") || "";
    let order = _.get(options, "order") || "";
    let limit = _.get(options, "limit") || "";
    let vars  = _.get(options, "vars") || [];

    if (!_.isEmpty(where)) {
      sql += " WHERE " + where;
    }
    if (!_.isEmpty(order)) {
      sql += " ORDER BY " + order;
    }
    if (!_.isEmpty(limit)) {
      sql += " LIMIT " + limit;
    }

    return { sql, vars };
  }

}

//==============================================================================
//-- export

module.exports = Base;

//==============================================================================
