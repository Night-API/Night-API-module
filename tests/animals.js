module.exports = async function animals(api) {
    try {
        api.animals.dog().catch(err => new Error("Animals.dog() failed"));
        api.animals.cat(5).catch(err => new Error("Animals.cat() failed"));
        api.animals.fox(10).catch(err => new Error("Animals.fox() failed"));
        api.animals.giraffe(7).catch(err => new Error("Animals.giraffe() failed"));
        api.animals.kangaroo(1).catch(err => new Error("Animals.kangaroo() failed"));
        api.animals.lion().catch(err => new Error("Animals.lion() failed"));
        api.animals.quokka().catch(err => new Error("Animals.quokka() failed"));
        api.animals.wolf(56).catch(err => new Error("Animals.wolf() failed"));
    } catch(e) {
        throw new Error(e.message);
    }
};