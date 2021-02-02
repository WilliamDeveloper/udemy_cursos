const env = process.env.NODE_ENV || 'dev';

const config = () =>{
    switch (env) {
        case 'dev':
        return {
            bd_string: "mongodb+srv://usuario_admin:senha_admin@clusterapi.yh7yq.mongodb.net/data_base_name?retryWrites=true&w=majority",
            jwt_pass: 'batatafrita2019'
        }

        case 'hml':
        return {
            bd_string: "mongodb+srv://usuario_admin:senha_admin@clusterapi.yh7yq.mongodb.net/data_base_name?retryWrites=true&w=majority",
            jwt_pass: 'batatafrita2019'
        }

        case 'prod':
        return {
            bd_string: "mongodb+srv://usuario_admin:senha_admin@clusterapi.yh7yq.mongodb.net/data_base_name?retryWrites=true&w=majority",
            jwt_pass: 'batatafrita2019'
        }

    }
}

console.log(`Iniciando a API em ambiente ${env.toUpperCase()}`);

module.exports = config()