addLayer("t", {
    name: "Titan",
    symbol: "T",
    position: 0,
    startData() { return {
        unlocked: true,
        points: new Decimal(0),
    }},
    color: "#20201d",
    requires: new Decimal(10),
    resource: "Petals",
    baseResource: "drops",
    baseAmount() { return player.points },
    type: "normal",
    exponent: 0.5,
    gainMult() {
        let mult = new Decimal(1);
        return mult;
    },
    gainExp() {
        return new Decimal(1);
    },
    row: 0,
    hotkeys: [
        { 
            key: "p", 
            description: "P: Reset for Petals", 
            onPress() { if (canReset(this.layer)) doReset(this.layer); }
        },
    ],
    upgrades: {
        11: {
            title: "Garden Spawn",
            description: "Spawn in the garden. Unlocks the Garden node.",
            cost: new Decimal(10),
            unlocked() { return player[this.layer].unlocked; },
            effect() {
                player.g.unlocked = true; // Unlocks the "g" layer
            },
        },
    },
    layerShown() { return true; }
});

addLayer("g", {
    name: "Garden",
    symbol: "G",
    position: 1,
    startData() { return {
        unlocked: false,
        points: new Decimal(0),
    }},
    color: "#00cc33", // Green
    requires: new Decimal(50),
    resource: "GardenPetal",
    baseResource: "Petals",
    baseAmount() { return player.points },
    type: "normal",
    exponent: 0.5,
    gainMult() {
        let mult = new Decimal(1);
        return mult;
    },
    gainExp() {
        return new Decimal(1);
    },
    row: 0,
    layerShown() { return player.g.unlocked; }
});