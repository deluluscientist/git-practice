// Simple tests for app.js functions

function test(description, fn) {
  try {
    fn();
    console.log(`✅ PASS: ${description}`);
  } catch (e) {
    console.log(`❌ FAIL: ${description} — ${e.message}`);
  }
}

test("greet returns correct string", () => {
  const result = greet("Alice");
  if (result !== "Hello, Alice!") throw new Error(`Got: ${result}`);
});

test("add returns correct sum", () => {
  const result = add(2, 3);
  if (result !== 5) throw new Error(`Got: ${result}`);
});
