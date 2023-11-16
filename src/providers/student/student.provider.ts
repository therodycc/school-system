import config from "../../config"
import { StudentI } from "../../interfaces/student/student.interface"
import Provider from "../provider"

class StudentProvider extends Provider {
    constructor() {
        super({ baseURL: `${config.app.url}/student` })
    }
    async getAll() {
        return await this.get('/')
    }

    async updateData(id: number, data: StudentI) {
        return await this.update(`/${id}`, data)
    }

    async create(data: StudentI) {
        return await this.post('/', data)
    }

    async remove(id: number) {
        return await this.delete(`/${id}`)
    }
}

export default new StudentProvider()