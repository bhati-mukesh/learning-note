var abc = 10;
function firstfunc(abc,func){

    abc = abc + 10
    console.log(abc)
    func()
}

firstfunc(abc,function(){console.log(abc)})