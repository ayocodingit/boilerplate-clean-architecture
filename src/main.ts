import config from './config/config'
import Mongo from './database/mongo/mongo'
import Logger from './pkg/logger'
import Http from './transport/http/http'

const main = async () => {
    const { logger } = new Logger(config)
    new Mongo(logger, config)
    const http = new Http(logger, config)

    http.Run(config.app.port.http)
}

main()