var user = {
    getUserInfo: function(callback) {
        SPcontroller_IS.getUserIS('alejandra.leal@softtek.com',  function (data) {  
            console.log(data);
        }); 
    },
    getUserName: function(callback) {
        SPcontroller.getUserProperties(email,  function (data) {  
            console.log(data);
        }); 
    }
}