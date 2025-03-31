addLayer("t", {
    name: "Titan", // Optional, used in some display contexts
    symbol: "T", // Displayed on the layer's node
    position: 0, // Horizontal position in the row
    startData() { return {
        unlocked: true,
        points: new Decimal(0),
    }},
    color: "#20201d",
    requires: new Decimal(10), // Amount of baseResource needed to prestige
    resource: "Petals", // Name of the prestige currency
    baseResource: "drops", // Resource used to gain Petals
    baseAmount() { return player.points }, // Current amount of drops
    type: "normal", // Normal prestige type (cost scales with amount gained)
    exponent: 0.5, // Prestige currency exponent
    gainMult() { // Multiplier for Petal gain
        let mult = new Decimal(1);
        return mult;
    },
    gainExp() { // Exponent for Petal gain
        return new Decimal(1);
    },
    row: 0, // First row of the tree
    hotkeys: [
        { 
            key: "p", 
            description: "P: Reset for Petals", 
            onPress() { if (canReset(this.layer)) doReset(this.layer); }
        },
    ],
    upgrades: { // Fixed: Use an object, not an array
        11: {
            title: "Garden Spawn",
            description: "Spawn in the garden. Unlocks the garden node.",
            cost: new Decimal(10), // Cost in Petals
            unlocked() { return player[this.layer].unlocked; }, // Visible when layer is unlocked
            // Optional: Add an effect if it does something tangible
            effect() {
                // Example: Could unlock another layer or boost something
                return true; // Placeholder; replace with actual effect if needed
            },
        },
    },
    layerShown() { return true; } // Layer is always visible
});