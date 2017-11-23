var request = require('request');
var API_VERSION = 'v2';


function zendeskapi(config) {
    this.init = function () {
        this.config = config;
    };

    this.client = function () {
        if (this.config.user && this.config.pass) {
            return request.defaults({
                auth: {
                    user: this.config.user,
                    pass: this.config.pass
                }
            });
        } else {
            return request();
        }
    };
    this.getUrl = function (command) {
        return this.config.url + '/api/' + API_VERSION + '/' + command;
    };

    this.get = function (command) {
        var client = this.client();
        var options = {
            uri: this.getUrl(command)
        };
        return new Promise(function (resolve, reject) {
            client.get(options, function (err, httpResponse, body) {
                if (err) reject(err);
                else(JSON.parse(body).error ? reject(JSON.parse(body).error) : resolve(JSON.parse(body)));
            });
        });
    };

    this.post = function (command, body) {
        var client = this.client();
        var options = {
            uri: this.getUrl(command),
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(body)
        };
        return new Promise(function (resolve, reject) {
            client.post(options, function (err, httpResponse, body) {
                if (err) reject(err);
                else(JSON.parse(body).error ? reject(JSON.parse(body).error) : resolve(JSON.parse(body)));
            });
        });
    };
    this.init(config);

}

module.exports = zendeskapi;
