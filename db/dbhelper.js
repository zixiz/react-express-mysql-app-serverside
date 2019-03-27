var mysql = require('promise-mysql');

var myDbHelper = {

    pool:null,
    connectTodb:function(){
        
        pool = mysql.createPool({
            host: 'localhost',
            user: 'root',
            password: '',
            database: 'db_costume',
            connectionLimit: 10
          });
          this.pool = pool;
          console.log("Connected to DB");
    }
    
}


module.exports = myDbHelper;
