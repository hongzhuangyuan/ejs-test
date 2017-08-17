var ejs = require("ejs")

describe("layout", ()=>{

  var layout = "<%- include('_partial/header') _%>"

  it("include", ()=>{
    var result = ejs.render(layout, {filename: 'test1'})

    expect(result).toBe(" <title>partial</title>  \n")
  })

  it("trim", ()=>{
    var result = ejs.render(layout, {filename: 'test2', rmWhitespace: true})

    expect(result).toBe("<title>partial</title>")
  })

  it("escaped html chars", ()=>{
    var result = ejs.render("<%= include('_partial/header') %>", {filename: 'test3'})

    expect(result).toBe(" &lt;title&gt;partial&lt;/title&gt;  \n")
  })

})
