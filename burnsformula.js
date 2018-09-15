
// Rule of 9's for Adults: 9% for each arm, 18% for each leg, 9% for head,18% for front torso, 18% for back torso.
// Rule of 9's for Children: 9% for each arm, 14% for each leg, 18% for head, 18% for front torso, 18% for back torso.

// Takes in burned areas and returns percentage burned
function percentBurned(adult, arm, leg, head, frontTorso, backTorso) {
    let percentBurned = 0;
    // in common calculations
    if (arm == 2) {
        percentBurned += 0.18;
    }
    if (arm == 1) {
        percentBurned += 0.9;
    }
    if (frontTorso == 1) {
        percentBurned += 0.18;
    }
    if (backTorso == 1) {
        percentBurned += 0.18;
    }
    // calculation for adults
    if (adult) {
        if (leg == 2) {
            percentBurned += 0.36;
        }
        if (leg == 1) {
            percentBurned += 0.18;
        }
        if (head == 1) {
            percentBurned += 0.09;
        }
    }
    else {
        if (leg == 2) {
            percentBurned += 0.28;
        }
        if (leg == 1) {
            percentBurned += 0.14;
        }
        if (head == 1) {
            percentBurned += 0.18;
        }
    }
    return percentBurned;
}

console.log(percentBurned(false, 2, 1, 0, 1, 0));