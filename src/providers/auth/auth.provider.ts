import config from "../../config"
import { AuthLoginPayload } from "../../interfaces/auth/auth.interface"
import Provider from "../provider"

class AuthProvider extends Provider {
    constructor() {
        super({
            baseURL: `${config.app.url}/Auth`,
        })
    }

    async signIn(data: AuthLoginPayload) {
        return await this.post(`/sign-in`, data)
    }

    async logout() {
        return await this.post(`/logout`)
    }

    async changePassword(data: { password: string, newPassword: string }) {
        return await this.post(`/change-password`, data)
    }
}
export default new AuthProvider()