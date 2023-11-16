import config from "../../config"
import Provider from "../provider"

class UserProvider extends Provider {
    constructor() {
        super({ baseURL: `${config.app.url}/users` })
    }

    async getMe() {
        return await this.get('/me')
    }

    async getAll() {
        return await this.get('/')
    }

    async updateData(id: string, data: any) {
        return await this.update(`/${id}`, data)
    }

    async remove(id: string) {
        return await this.delete(`/${id}`)
    }
}
export default new UserProvider()