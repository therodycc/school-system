import config from "../../config"
import { StudentI } from "../../interfaces/student/student.interface"
import Provider from "../provider"

class StudentProvider extends Provider {
    constructor() {
        super({ baseURL: `${config.app.url}/debts` })
    }
    async getAll() {
        return await this.get('/')
    }

    async update(uuid: string, data: any) {
        return await this.patch(`/${uuid}`, data)
    }

    async create(data: StudentI) {
        return await this.post('/', data)
    }

    async remove(uuid: string | number) {
        return await this.delete(`/${uuid}`)
    }
}

export default new StudentProvider()