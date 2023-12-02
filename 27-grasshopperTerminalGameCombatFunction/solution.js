function combat(health, damage) {
    let result = health - damage;
    return result < 0 ? 0 : result;
}