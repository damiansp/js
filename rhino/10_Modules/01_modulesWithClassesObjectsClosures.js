const BitSet = (function() {
    // Private implementation details
    const BITS = new Uint8Array([1, 2, 4, 8, 16, 32, 64, 128]);
    const MASKS = new Uint8Array([~1, ~2, ~4, ~8, ~16, ~32, ~64, ~128]);
    function isValid(set, n) { /* ... */; }
    function has(set, byte, bit) { /* ... */; }

    // Public API
    return class BitSet extends AbstractWritableSet { /* ... */; };
}());
