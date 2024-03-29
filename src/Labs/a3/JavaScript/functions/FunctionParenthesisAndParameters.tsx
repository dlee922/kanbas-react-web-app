function FunctionParenthesisAndParameters() {
  const square  = (a: number) => a * a;
  const plusOne = (a: number) => a + 1;
  const twoSquared = square(2);
  const threePlusOne = plusOne(3);

  return (
    <>
    <h3>Function Parenthesis And Parameters</h3>
    square = { twoSquared } <br/>
    plusOne = { threePlusOne } <br/>
    square(2) = { square(2) }<br/>
    plusOne(3) = { plusOne(3) }<br/>
    </>
  )
}
export default FunctionParenthesisAndParameters