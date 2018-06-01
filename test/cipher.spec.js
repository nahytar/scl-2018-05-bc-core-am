
describe('cipher', () => {

  it('debería ser un objeto', () => {
    assert.equal(typeof cipher, 'object');
  });

  describe('cipher.encode', () => {

    it('debería ser una función', () => {
      assert.equal(typeof cipher.encode, 'function');
    });
  
    it('debería retornar "HIJKLMNOPQRSTUVWXYZABCDEFG" para "ABCDEFGHIJKLMNOPQRSTUVWXYZ" con offset 33', () => {
      assert.equal(cipher.encode('ABCDEFGHIJKLMNOPQRSTUVWXYZ', 33),'HIJKLMNOPQRSTUVWXYZABCDEFG');
    });

    it('debería retornar "HIJKLMNOPQRSTUVWXYZABCDEFG" para "abcdefghijklmnopqrstuvwxyz" con offset 33', () => {
      assert.equal(cipher.encode('abcdefghijklmnopqrstuvwxyz', 33), 'HIJKLMNOPQRSTUVWXYZABCDEFG');
    });

    it('debería retornar " ?!,.;:-_+=$" para " ?!,.;:-_+=$" con offset 33', () => {
      assert.equal(cipher.encode(' ?!,.;:-_+=$', 33), ' ?!,.;:-_+=$');
    });
  });

  describe('cipher.decode', () => {

    it('debería ser una función', () => {
      assert.equal(typeof cipher.decode, 'function');
    });
  
    it('debería retornar "ABCDEFGHIJKLMNOPQRSTUVWXYZ" para "HIJKLMNOPQRSTUVWXYZABCDEFG" con offset 33', () => {
      assert.equal(cipher.decode('HIJKLMNOPQRSTUVWXYZABCDEFG', 33),'ABCDEFGHIJKLMNOPQRSTUVWXYZ');
    });

    it('debería retornar "ABCDEFGHIJKLMNOPQRSTUVWXYZ" para "hijklmnopqrstuvwxyzabcdefg" con offset 33', () => {
      assert.equal(cipher.decode('hijklmnopqrstuvwxyzabcdefg', 33), 'ABCDEFGHIJKLMNOPQRSTUVWXYZ');
    });

    it('debería retornar " ?!,.;:-_+=$" para " ?!,.;:-_+=$" con offset 33', () => {
      assert.equal(cipher.decode(' ?!,.;:-_+=$', 33), ' ?!,.;:-_+=$');
    });
  });

});