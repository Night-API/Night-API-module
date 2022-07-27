module.exports = async function animals(api) {
    try {
        api.animals.dog().catch(() => { throw new Error("Animals.dog() failed")});
        api.animals.cat(5).catch(() => { throw new Error("Animals.cat() failed") });
        api.animals.fox(10).catch(() => { throw new Error("Animals.fox() failed") });
        api.animals.giraffe(7).catch(() => { throw new Error("Animals.giraffe() failed") });
        api.animals.kangaroo(1).catch(() => { throw new Error("Animals.kangaroo() failed") });
        api.animals.lion().catch(() => { throw new Error("Animals.lion() failed") });
        api.animals.quokka().catch(() => { throw new Error("Animals.quokka() failed") });
        api.animals.wolf(56).catch(() => { throw new Error("Animals.wolf() failed") });
        api.animals.lezard().catch(() => { throw new Error("Animals.lezard() failed") });
        api.animals.leopard().catch(() => { throw new Error("Animals.leopard() failed") });
        setTimeout(async () => {
            api.animals.singes().catch(() => { throw new Error("Animals.singes() failed") });
            api.animals.paon().catch(() => { throw new Error("Animals.paon() failed") });
            api.animals.hamster().catch(() => { throw new Error("Animals.hamster() failed") });
        }, 2000);
    } catch(e) {
        throw new Error(e);
    }
};