import ejs from "ejs"

describe("ejs", ()=>{

  it("plain text", ()=>{
    expect(ejs.render("text")).toBe("text")
  })


  describe("variables", ()=>{

    it("basic", ()=>{
      expect(ejs.render("<%= foo %>", {foo: "bar"})).toBe("bar")
    })

    it("array", ()=>{
      var data = {items: [1, 2, 3]}

      expect(ejs.render("<%= items.join(', ') %>", data)).toBe("1, 2, 3")
    })

  })


  describe("flow control", ()=>{
    
    describe("if statement", ()=>{
      var tmpl = "<% if(typeof foo!=='undefined'){'bar'} %>"

      it("absent", ()=>{
        expect(ejs.render(tmpl)).toBe("")
      })

      it("present", ()=>{
        expect(ejs.render(tmpl, {foo: true})).toBe("")
      })

    })


    it("for loop", ()=>{
      var tmpl = "<%for(var i = 0; i < 3; i++){%>"+
                    "<%=i%>"+
                 "<%}%>"  

      expect(ejs.render(tmpl)).toBe("012")
    })

  })

})
