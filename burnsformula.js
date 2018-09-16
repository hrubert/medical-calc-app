
// Rule of 9's for Adults: 9% for each arm, 18% for each leg, 9% for head,18% for front torso, 18% for back torso. (implement front and back of arms and legs)
// Rule of 9's for Children: 9% for each arm, 14% for each leg, 18% for head, 18% for front torso, 18% for back torso.

// Takes in burned areas and returns percentage burned
function percentBurned(adult, arm, leg, head, frontTorso, backTorso) {
    let percentBurned = 0;
    // in common calculations
    percentBurned += 0.09 * arm + 0.18 * frontTorso + 0.18 * backTorso;
    // calculation for adults
    if (adult) {
        percentBurned += 0.18 * leg + 0.09 * head;
    }
    else {
        percentBurned += 0.14 * leg + 0.18 * head;
    }
    return percentBurned;
}

console.log(percentBurned(false, 1, 1, 1, 0, 1));