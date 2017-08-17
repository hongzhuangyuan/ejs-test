import ejs from "ejs"

describe("ejs", ()=>{

  it("plain text", ()=>{
    expect(ejs.render("text")).toBe("text")
  })


  describe("variables", ()=>{

    it("basic", ()=>{
      expect(ejs.render("<%= foo %>", {foo:"bar"})).toBe("bar")
    })

    it("array", ()=>{
      var data = {items: [1, 2, 3]}

      expect(ejs.render("<%= items.join(', ') %>", data)).toBe("1, 2, 3")
    })

  })

})
