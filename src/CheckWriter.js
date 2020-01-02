import React from 'react';
class CheckWriter extends React.Component{
    constructor() {
        super();  
        this.name = "Jack";
        this.state = { // state should be assigned an Object Literal with relevant attributes
            wordvalue:'',
            inputvalue:''
        };
    }
   handlechange=(e)=>{
     
     this.setState({wordvalue:""})
     if(e.target.value){
      this.setState({inputvalue:e.target.value})
     }
   }
   twodigits=(val, suffix) =>{
   var  arr1 = ["", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen"]
    var arr2 = ["", "", "twenty", "thirty", "fourty", "fifty", "sixty", "seventy", "eighty", "ninety"]
    if (val == 0) {
      return ""
    }
    if (val > 19) {
      return  arr2[Math.floor(val / 10)]  +" "+ arr1[(val % 10)]+suffix +" "
    }
    else {
      return  arr1[val] +" " + suffix +" ";
    }
  }
   converter=()=>{
    var param=this.state.inputvalue
    var m;
    var flag=0;

    var str = param.toString()
    var number = str.split(".")
    var val = parseInt(number[0])

    m = this.twodigits((val % 100), "") +" "

    if (val > 100 && val % 100) {
      m = "and" + m +" ";
    }
    m = this.twodigits((Math.floor(val / 100) % 10), "Hundred") + m +" ";
    m = this.twodigits((Math.floor(val / 1000) % 100), "Thousand") + m +" ";
    m = this.twodigits((Math.floor(val / 100000) % 100), "lakh") + m +" ";
    m = this.twodigits((Math.floor(val / 10000000) % 100), "Crore") + m +" ";
    m = this.twodigits((Math.floor(val / 1000000000) % 100), "Billion") + m +" ";
    if (number.length > 1) {
      var decimal = "1"
      for (var i = 0; i < number.length; i++) {
        decimal += "0";
      }

      m = m + "and" + number[1] + "/" + decimal
     flag=1;
      
    }
    if(flag==0)
    {
      m=m+"only";
    }
  this.setState({wordvalue:m})


  }

    
    
    
    render() {
        return (
            <div>
                <h1>CheckWriter</h1>
                <br></br>
                <label>enter the number:</label><br></br>
                <input type="number" name="inputvalue" onChange={this.handlechange} ></input>
                <button type="button" className="word" onClick={this.converter}> Click </button>
                <p>{this.state.wordvalue}</p>


            </div>
            


        );
      }
}


export default CheckWriter;