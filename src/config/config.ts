import dotenv from 'dotenv'
import { Config } from './config.interface'
import configValidate from './config.validate'

dotenv.config()

const env = configValidate(process.env)

// split and convert cors to Regex
const cors = env.APP_CORS
    ? env.APP_CORS.split(',').map((value: string) => new RegExp(value))
    : []

const config: Config = {
    app: {
        name: env.APP_NAME,
        env: env.APP_ENV,
        port: {
            http: env.APP_PORT_HTTP,
        },
        log: env.APP_LOG,
        cors,
    },
    file: {
        max: Number(env.FILE_MAX) * 1024 * 1024, // MB
    },
    db: {
        connection: env.DB_CONNECTION,
        uri: env.DB_URI,
        host: env.DB_HOST,
        port: env.DB_PORT,
        username: env.DB_USERNAME,
        password: env.DB_PASSWORD,
        name: env.DB_NAME,
        auth_source: env.DB_AUTH_SOURCE,
        pool: {
            min: env.DB_POOL_MIN,
            max: env.DB_POOL_MAX,
            acquire: env.DB_POOL_ACQUIRE,
            idle: env.DB_POOL_IDLE,
        },
        keep_alive: env.DB_KEEP_ALIVE,
    },
    jwt: {
        access_key: env.JWT_ACCESS_SECRET,
        algorithm: env.JWT_ALGORITHM,
    },
    redis: {
        host: env.REDIS_HOST,
        port: env.REDIS_PORT,
        ttl: env.REDIS_TTL,
    },
}

export default config
