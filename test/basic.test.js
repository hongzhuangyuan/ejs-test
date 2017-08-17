import ejs from "ejs"

describe("ejs", ()=>{

  test("plain text", ()=>{
    expect(ejs.render("text")).toBe("text")
  })

})
