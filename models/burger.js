var orm = require("../config/orm");

var burger = {
    all: function(callback) {
        orm.all("burgers", function(res) {
            callback(res);
        });
    },

    create: function(column, values, callback) {
        orm.create("burgers", column, values, function(res) {
            callback(res);
        });
    },
    
    update: function(objects, condition, callback) {
        orm.update("burgers", objects, condition, function(res) {
            callback(res);
        });
    }
};

module.exports = burger;