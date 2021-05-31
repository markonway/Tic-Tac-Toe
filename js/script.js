let squares = document.getElementsByClassName("square")
let restart = document.getElementById("restart")
let clickCount = 0

for(let i = 0; i < squares.length; i++){
    squares[i].addEventListener("click", () => {
        if(clickCount == 0 && squares[i].innerText == ""){
            squares[i].innerText = "X"
            clickCount = 1
        } else if(clickCount == 1 && squares[i].innerText == "") {
            squares[i].innerText = "O"
            clickCount = 0
        }
    })
}

setInterval(() => {
    check()
}, 500)

restart.addEventListener("click", clean)

function check(){
    let Y1 = square(squares, 0, 1, 2)
    let Y2 = square(squares, 3, 4, 5)
    let Y3 = square(squares, 6, 7, 8)
    
    let X1 = square(squares, 0, 3, 6)
    let X2 = square(squares, 1, 4, 7)
    let X3 = square(squares, 2, 5, 8)
    
    let D1 = square(squares, 0, 4, 8)
    let D2 = square(squares, 6, 4, 2)

    function verify(e){
        if(e == "XXX"){
            clean()
        } else if(e == "OOO"){
            clean()
        }
    }

    verify(Y1)
    verify(Y2)
    verify(Y3)

    verify(X1)
    verify(X2)
    verify(X3)

    verify(D1)
    verify(D2)

}

function getPoints(p1, p2, p3){
    let points = {
        p1: p1.innerText,
        p2: p2.innerText,
        p3: p3.innerText,
        calc: function (){
            return this.p1 + this.p2 + this.p3
        }
    }

    return points.calc()
}

let square = (name, index, index2, index3) => getPoints(name[index], name[index2], name[index3])

function clean(){
    for(let i = 0; i < squares.length; i++){
        squares[i].innerText = ""
    }
}