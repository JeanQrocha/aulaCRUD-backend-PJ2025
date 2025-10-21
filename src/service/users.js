import ModelUser from "../model/users.js"

class ServiceUser {
    FindAll() {
        return ModelUser.FindAll()
    }

    FindOne(index) {
        //verificar se o index é valido e se for um numero. verificar se ele for menor q o .lenth
        return ModelUser.FindOne(index)
    }

    Create(nome) {//verificar se o nome é valido
        return ModelUser.Create(nome)
    }

    Update(index, nome) {
        //verificar se o indexe o nome sao validos e se for um numero. verificar se ele for menor q o .lenth
        return ModelUser.Update(index, nome)
    }

    Delete(index) {
        //verificar se o index e o nome sao validos e se for um numero. verificar se ele for menor q o .lenth
        return ModelUser.Delete(index)
    }
}

export default new ServiceUser()