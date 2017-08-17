import ejs from "ejs"

describe("ejs", ()=>{

  test("plain text", ()=>{
    expect(ejs.render("text")).toBe("text")
  })

  test("simple variable", ()=>{
    expect(ejs.render("<%= foo %>", {foo:"bar"})).toBe("bar")
  })

})
