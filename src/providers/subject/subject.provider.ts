import config from "../../config"
import { SubjectI } from "../../interfaces/subjects/subjects.interface"
import Provider from "../provider"

class SubjectProvider extends Provider {
    constructor() {
        super({ baseURL: `${config.app.url}/subject` })
    }
    async getAll() {
        return await this.get('/')
    }

    async updateData(id: number, data: SubjectI) {
        return await this.patch(`/${id}`, data)
    }

    async create(data: SubjectI) {
        return await this.post('/', data)
    }

    async remove(id: number) {
        return await this.delete(`/${id}`)
    }
}

export default new SubjectProvider()