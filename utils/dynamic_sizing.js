const dynamic_size = (attribute, percentage) => {
    var string = String(attribute*parseInt(percentage)/100+"px")
    //console.log(string)
    
    return  string }

  export default dynamic_size