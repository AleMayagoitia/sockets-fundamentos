const express = require('express');
const socketIO = require('socket.io');
const http = require('http');

const path = require('path');

//npm sp-request

const app = express();
let server = http.createServer(app);

const publicPath = path.resolve(__dirname, '../public');
const port = process.env.PORT || 3000;

app.use(express.static(publicPath));

//IO = esta es la comunicación del backend
module.exports.io = socketIO(server);
require('./sockets/socket');


/*

app.get('/getInfo/:email', async(req, res) => {
    let email = req.params.email;

    let datos = await
    spr.get(GetUserColaboratorData(email))
        .then(function(colaboratorData) {
            return {
                is: colaboratorData.body.d.results[0].Title,
                sede: colaboratorData.body.d.results[0].DescripcionSede,
                estatus: colaboratorData.body.d.results[0].Estatus,
                correo: colaboratorData.body.d.results[0].Nombre,
            };
        }).catch((err)  =>  {
            console.log(err);
            console.log("[31m%s[0m",  `Could not Resolve to SP Colaborators List`);
            res.json({
                ok: false,
                err: {
                    message: `Could not Resolve to SP Colaborators List`
                }
            });
        })

    let nombre = await
    spr.get(GetName(email))
        .then(function(colaboratorData) {
            return colaboratorData.body.d.Title;
        }).catch((err)  =>  {
            console.log(err);
            console.log("[31m%s[0m",  `Could not Resolve to SP Colaborators List`);
            res.json({
                ok: false,
                err: {
                    message: `Could not Resolve to SP Colaborators List`
                }
            });
        });

    res.json({
        ok: true,
        nombre: nombre,
        is: datos.is,
        sede: datos.sede,
        estatus: datos.estatus,
        correo: datos.correo
    });

})

function  SPCredential( username,  password ) {
    this.username  =  username  +  '@softtek.com';
    this.password  =  password;
}
const  SP_CRED  =  new  SPCredential( 'alejandra.leal',  'Kiwina20' );
var  spr  =  require('sp-request').create(SP_CRED);

function  GetUserColaboratorData( user ) {
    console.log(user);
    return  `https://onesofttek.sharepoint.com/sites/SKCsvcs/_api/lists/GetByTitle('Colaboradores')/items?$filter=Nombre eq '${user}'`;
}

function  GetName( user ) {
    console.log(user);
    return  `https://onesofttek.sharepoint.com/sites/SKCte/3E/_api/web/siteusers/getbyloginname('i%3A0%23.f%7Cmembership%7C${user}')`;
}
*/

server.listen(port, (err) => {

    if (err) throw new Error(err);

    console.log(`Servidor corriendo en puerto ${ port }`);

});