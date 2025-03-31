class MateriaModel {
    constructor({nome, _id}) {
        this.nome = nome
        this._id = _id !== underfined ? _id : this.generateId()
    }

    generateId() {
        MateriaModel.maxId += 1
        return MateriaModel.maxId
    }
}

MateriaModel.maxId = 0