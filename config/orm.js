var connection = require("../config/connection");

function neededVariables(num) {
    var array = [];
    for (var i = 0; i < num; i++) {
        array.push("?");
    }
    return array.toString();
}

function changetoSql(object) {
    var array = [];
    for (var key in object) {
        var value = object[key];
        if(Object.hasOwnProperty.call(object, key)) {
            if (typeof value === "string" && value.indexOf(" ") >= 0) {
                value = "'"+value+"'";
            }
            array.push(key+"="+value);
        }
    }
    return array.toString();
}

var orm = {
    all: function(tableName, callback) {
        var queryString = "SELECT * FROM "+tableName+";";
        connection.query(queryString, function(err, res) {
            if (err) {
                throw err;
            }
            callback(res);
        });
    },

    create: function(tableName, column, values, callback) {
        var queryString = "INSERT INTO "+tableName+" ("+column.toString();
            queryString += ") VALUES ("+neededVariables(values.length)+") ";
        
            connection.query(queryString, values, function(err, res) {
                if (err) {
                    throw err;
                }

                callback(res);
            });
    },

    update: function(tableName, objects, condition, callback) {
        var queryString = "UPDATE "+tableName+" SET "+changetoSql(objects);
            queryString += " WHERE "+condition;//+";";

            connection.query(queryString, function(err, res) {
                if (err) {
                    throw err;
                }

                callback(res);
            });
    }
};

module.exports = orm;