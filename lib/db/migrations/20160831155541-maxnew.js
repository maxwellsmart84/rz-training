'use strict';

/* See: http://knexjs.org/#Schema-Building
for documentation of the schema building api in use */

// rhinozug should have been installed when the migration folder was initialized

var rz = require('rhinozug');
var config = require('../config/' + process.env.connection + '.js');

module.exports = {
    up: function up() {
        // rz.getConnection() returns a knex object
        var connection = rz.getConnection(config);
        // Add altering commands here.
        // Return a promise to correctly handle asynchronicity.

        // Example that creates two tables with a fk between them:
        return connection.schema.createTableIfNotExists('Emails', function (table) {
            table.increments('id');
            table.integer('userId').unsigned().references('Users.id');
            table.string('address1');
        }).catch(function (err) {
            console.error(err);
            // because knex objects return bluebird promises, we can use .finally here
        }).finally(function () {
            // always destory the connection when you are done, regardless of outcome
            connection.destroy();
        });
    },

    down: function down() {
        var connection = rz.getConnection(config);

        // Add reverting commands here.
        // Return a promise to correctly handle asynchronicity.

        // Example that undoes the commands above:
        return connection.schema.dropTable('Emails').catch(function (err) {
            console.error(err);
        }).finally(function () {
            // always destroy the connection when you are done, regardless of outcome
            connection.destroy();
        });
    }
};