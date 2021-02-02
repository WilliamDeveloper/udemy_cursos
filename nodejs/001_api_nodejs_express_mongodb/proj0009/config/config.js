const env = process.env.NODE_ENV || 'dev';

const config = () =>{
    switch (env) {
        case 'dev':
        return {
            bd_string: "mongodb+srv://usuario_admin:senha_admin@clusterapi.yh7yq.mongodb.net/data_base_name?retryWrites=true&w=majority"
        }

        case 'hml':
        return {
            bd_string: "mongodb+srv://usuario_admin:senha_admin@clusterapi.yh7yq.mongodb.net/data_base_name?retryWrites=true&w=majority"
        }

        case 'prod':
        return {
            bd_string: "mongodb+srv://usuario_admin:senha_admin@clusterapi.yh7yq.mongodb.net/data_base_name?retryWrites=true&w=majority"
        }

    }
}

console.log(`Iniciando a API em ambiente ${env.toUpperCase()}`);

module.exports = config()