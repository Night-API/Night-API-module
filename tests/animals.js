module.exports = async function animals(api) {
    try {
        api.animals.dog().catch(err => new Error("Animals.dog() failed"));
        api.animals.cat(5).catch(err => new Error("Animals.cat() failed"));
        api.animals.wolf(56).catch(err => new Error("Animals.wolf() failed"));
    } catch(e) {
        throw new Error("Animals() failed");
    }
};