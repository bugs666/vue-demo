export default {
    currentList({input, list}) {
        if (input) {
            return list.filter(it => it.includes(input));
        }
        return list;
    }
}
