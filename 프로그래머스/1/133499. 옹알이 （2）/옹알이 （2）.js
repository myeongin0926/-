function solution(babbling) {
    const babblables = ["aya", "ye", "woo", "ma"];

    return babbling.reduce((possible, babbl, index) => {
        for (let i = 0; i < babblables.length; i += 1) {
            if (babbl.includes(babblables[i].repeat(2))) return possible;
        }

        for (let i = 0; i < babblables.length; i += 1) {
            babbl = babbl.split(babblables[i]).join(' ').trim();
        }

        if (babbl) return possible;

        return possible += 1;
    }, 0)
}
