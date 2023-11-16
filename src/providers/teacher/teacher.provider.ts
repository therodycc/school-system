import config from "../../config"
import { TeacherI } from "../../interfaces/teacher/teacher.interface"
import Provider from "../provider"

class TeacherProvider extends Provider {
    constructor() {
        super({ baseURL: `${config.app.url}/teacher` })
    }
    async getAll() {
        return await this.get('/')
    }

    async updateData(id: number, data: TeacherI) {
        return await this.patch(`/${id}`, data)
    }

    async create(data: TeacherI) {
        return await this.post('/', data)
    }

    async remove(id: number) {
        return await this.delete(`/${id}`)
    }
}

export default new TeacherProvider()