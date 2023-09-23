interface Iobj{
    name:string,
    age:number,
    loc?:string,//可选
    [propName:string]:any
}

var obj:Iobj = {
    name:"zhangsan",
    age:100,
    loc:"aaaa"
}

interface Ifunc{
    (a:string,b:number,c?:boolean):string
}

interface Iobj2{
    name:string,
    age:number,
    getName:(name:string)=>string
}

var fun:Ifunc = function test2(a:string, b:number,c?:boolean):string{
    return "aaa"
}

function test(a:string, b:number,c?:string):string{
    return "aaa"
}

test("aaa",111)

//类+接口
interface Ifunc1{
    getName:()=>string
}

class a implements Ifunc1{
    private aa:string = "111"
    public bb:number = 123
    protected cc:boolean = true
    getName(){
        return "aaaa"
    }
}

function Init(obj:Ifunc1){
    obj.getName()
}







export default{}