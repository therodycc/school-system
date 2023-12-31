import config from "../../config"
import { ClassroomI } from "../../interfaces/classrooms/classrooms.interface"
import Provider from "../provider"

class ClassroomProvider extends Provider {
    constructor() {
        super({ baseURL: `${config.app.url}/classroom` })
    }
    async getAll() {
        return await this.get('/')
    }

    async assignTeacher(classroomId: number, teacherId: number) {
        return await this.update(`/${classroomId}/teacher`, { teacherId })
    }
    async updateData(id: number, data: ClassroomI) {
        return await this.update(`/${id}`, data)
    }

    async create(data: ClassroomI) {
        return await this.post('/', data)
    }

    async remove(id: number) {
        return await this.delete(`/${id}`)
    }
}

export default new ClassroomProvider()