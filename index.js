let items = ["Hacking started",
    "password is cracking",
    "getting the information",
    "information collected",
    "conencting the server",
    "sending the infomation to server",
]
let random_time = () => {
    return new Promise((resolve, reject) => {
        let time = Math.floor(1 + Math.random() * 7)
        setTimeout(() => {
            resolve()
        },time*1000);
    })
}

let dot_add = (para) => {
    let count=0
let interval_id=setInterval(() => {
        para.append(".")
        count++
         if (count === 4) {
            para.innerHTML = para.innerHTML.slice(0, -4); 
            count = 0;
        }
      
    },1000);
    return interval_id
}
let add_item = async () => {
    let div = document.createElement("div")
    document.body.appendChild(div)
    for (const element of items) {
        let para = document.createElement("p")
        para.innerHTML = element
        div.append(para)
       let interval= dot_add(para)
         let random= await random_time()
        clearInterval(interval)
    }
    div.innerHTML=("process has completed !!")
}
add_item()

