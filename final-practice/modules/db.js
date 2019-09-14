const mariadb = require('mariadb');
const pool = mariadb.createPool({database:'employee',
                                 user: 'root',password:'root',
                                connectionLimit: 5});

module.exports=class DB{

    constructor(){
        pool.getConnection().then(conn => this.conn=conn)
    }

    async read(){
        let sql=`
            SELECT * FROM employees        
        `
        let result=await this.conn.query(sql);
        return result;
    }
    
    async create(data){
        let sql=`
            INSERT INTO employees (name, email, department, password, token)
            VALUES ('${data.name}', '${data.email}', ${data.department},
            '${data.password}', 'hello')
        `
        let result=await this.conn.query(sql);
        return result;
    }
    async update(data,id){
        let sql=`
        UPDATE employees
        SET name='${data.name}', department=${data.department},
            email='${data.email}', password='${data.password}',
            token='kismacska'
        WHERE id=${id};       
    `;
    let result=await this.conn.query(sql);
    return result;

    }
    async delete(id){
        let sql=`
            DELETE FROM employees 
            WHERE id=${id} ;     
        `;
        let result=await this.conn.query(sql);
        return result

    }

    async getOne(id){
        let sql=`
            SELECT * FROM employees WHERE id=${id}       
        `
        let result=await this.conn.query(sql);
        return result;
    }

}