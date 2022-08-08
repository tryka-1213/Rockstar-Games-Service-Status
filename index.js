const axios = require("axios")

module.exports = {
    /**
     * 
     * @param {string} language 
     * Examples: "en", "es", "it"
     * @returns
     * ```
     * Promise<any>
     * ```
     */
    async getStatus(language){
        return new Promise(async (resolve, reject) => {
            try {
                var response = await axios({ method: "get", url: `https://support.rockstargames.com/${language && language != "en" ? `${language}/` : ""}services/status.json?tz=Europe/London` })
            } catch {
                return reject("Request to Rockstar Games Service Status was unsuccessful. This may be because the IP of this machine is blacklisted or temporarily banned")
            }
            
            let base = response.data.statuses
            let updatedAt = response.data.updated

            const status = {
                redDeadOnline: {
                    "pc": base[1].services_platforms.find(s => s.name == "PC").service_status.status,
                    "xb1": base[1].services_platforms.find(s => s.name == "Xbox One").service_status.status,
                    "xbox_cloud_gaming": base[1].services_platforms.find(s => s.name == "Xbox Cloud Gaming").service_status.status,
                    "stadia": base[1].services_platforms.find(s => s.name == "Stadia").service_status.status,
                    "ps4": base[1].services_platforms.find(s => s.name == "PS4").service_status.status
                },
                gtaOnline: {
                    "pc": base[2].services_platforms.find(s => s.name == "PC").service_status.status,
                    "xb1": base[2].services_platforms.find(s => s.name == "Xbox One").service_status.status,
                    "xbox_series_xs": base[2].services_platforms.find(s => s.name == "Xbox Series X/S").service_status.status,
                    "xbox_cloud_gaming": base[2].services_platforms.find(s => s.name == "Xbox Cloud Gaming").service_status.status,
                    "ps4": base[2].services_platforms.find(s => s.name == "PS4").service_status.status,
                    "ps5": base[2].services_platforms.find(s => s.name == "PS5").service_status.status  
                },
                socialClub: {
                    "all": base[3].services_platforms[0].service_status.status
                },
                launcher: {
                    "auth": base[5].services_platforms.find(s => s.name == "Authentication").service_status.status,
                    "store": base[5].services_platforms.find(s => s.name == "Store").service_status.status,
                    "downloads": base[5].services_platforms.find(s => s.name == "Downloads").service_status.status,
                    "cloud_downloads": base[5].services_platforms.find(s => s.name == "Cloud Services").service_status.status
                },
                lastUpdated: updatedAt,
                locale: language
            }

            resolve(status)

        })

    }
}
