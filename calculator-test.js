
describe('calculate monthly payment', function () {
  it('should calculate the monthly rate correctly', function () {
    expect(parseFloat(calculateMonthlyPayment({amount: 1000, years: 2, rate: 3}))).toEqual(42.98);
    expect(parseFloat(calculateMonthlyPayment({amount: 0, years: 2, rate: 3}))).toEqual(0);
  });
  it("should return a result with 2 decimal places", function() {
    expect(calculateMonthlyPayment({amount: 1000, years: 2, rate: 3})).toEqual('42.98');
    expect(calculateMonthlyPayment({amount: 0, years: 2, rate: 3})).toEqual('0.00');
  });
})


