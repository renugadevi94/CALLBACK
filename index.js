 let div=document.getElementById('display');
 

function num1(no,callback){

    document.getElementById("display").innerHTML=(no)
    document.getElementById('display').style.color='red';
    document.getElementById('display').style.backgroundColor="yellow";
    console.log(no);
    callback(no);
}
num1("10",setTimeout((no)=>{
    num1("9",setTimeout((no)=>{
        num1("8",setTimeout((no)=>{
            num1("7",setTimeout((no)=>{
                num1("6",setTimeout((no)=>{
                    num1("5",setTimeout((no)=>{
                        num1("4",setTimeout((no)=>{
                            num1("3",setTimeout((no)=>{
                                num1("2",setTimeout((no)=>{
                                    num1("1",setTimeout((no)=>{
                                        num1("HAPPY INDEPENDENCE DAY",()=>{

                                        })
                                                
                                    },1000))
                                },1000))
                            },1000))
                        },1000))
                    },1000))
                },1000))
            },1000))
        },1000))
    },1000))

},1000))