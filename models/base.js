/*
 * Base Model
 *
 */

const _ = require("lodash");
const util = require("util");
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

  query(command, options, done) {
    const {sql, vars} = this._buildQuery(command, options);

    conn.query(sql, vars, (error, results, fields) => {
      done(error, results);
    });
  }

  //---------------------------------------------------------------------------

  find(options, done) {
    const cmd = util.format("SELECT * FROM %s", this.tableName);
    this.query(cmd, options, done);
  }

  //---------------------------------------------------------------------------

  findOne(options, done) {
    const cmd = util.format("SELECT * FROM %s", this.tableName);
    const _options = _.merge({}, options, { limit: 1 });

    this.query(cmd, _options, (err, records) => {
      done(err, _.first(records));
    });
  }

  //---------------------------------------------------------------------------

  create(attrs, done) {
    const fields = [];
    const values = [];
    const vars = [];
    const options = { vars };

    _.forIn(attrs, (v, k) => {
      fields.push(k);
      values.push("?");
      vars.push(v);
    });

    const cmd = util.format("INSERT INTO %s(%s) VALUES(%s)", this.tableName,
                            _.join(fields), _.join(values));

    this.query(cmd, options, (err, results) => {
      if (err) {
        return done(err);
      }
      this.findOne({ where: "id=" + _.get(results, "insertId") }, done);
    });
  }

  //---------------------------------------------------------------------------

  update(attrs, criteria, done) {
    done();
  }

  //---------------------------------------------------------------------------

  destroy(criteria, done) {
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
