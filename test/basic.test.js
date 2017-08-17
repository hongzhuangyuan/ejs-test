import ejs from "ejs"

describe("ejs", ()=>{

  test("plain text", ()=>{
    expect(ejs.render("text")).toBe("text")
  })

  test("simple variable", ()=>{
    expect(ejs.render("<%= foo %>", {foo:"bar"})).toBe("bar")
  })

  test("array", ()=>{
    var data = {items: [1, 2, 3]}

    expect(ejs.render("<%= items.join(', ') %>", data)).toBe("1, 2, 3")
  })

})
