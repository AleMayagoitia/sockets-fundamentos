var SPcontroller = {
    URL: "https://onesofttek.sharepoint.com/sites/SKCte/3E",
    setURL: function(newURL) {
        this.URL = newURL;
    },
    getUserProperties: function(email, callback) {

        $.ajax({
                method: "GET",
                url: this.URL + "/_api/web/siteusers/getbyloginname('i%3A0%23.f%7Cmembership%7C" + email + "')",
                headers: {
                    'Accept': 'application/json;odata=verbose;',
                    'Content-type': 'application/json;odata=verbose;'
                }
            })
            .done(function(response) {
                callback(response.d);

            })
            .fail(function(err) {
                console.log("ERROR", err);
            });
    }
};
//SPcontroller_IS object, with different URL and with a new function (getUserIS)
var SPcontroller_IS = {
    URL: "https://onesofttek.sharepoint.com/sites/SKCsvcs",
    setURL: function(newURL) {
        this.URL = newURL;
    },
    getUserIS: function(email, callback) {
        $.ajax({
                method: "GET",
                url: this.URL + "/_api/web/lists/getbytitle('Colaboradores')/items?$filter= Nombre eq '" + email + "'",
                headers: {
                    'Accept': 'application/json;odata=verbose;',
                    'Content-type': 'application/json;odata=verbose;'
                }
            })
            .done(function(response) {
                callback(response.d.results);

            })
            .fail(function(err) {
                console.log("ERROR", err);
            });
    }
};