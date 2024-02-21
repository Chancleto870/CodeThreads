
const main = document.getElementById("threads_main")

function create_thread (thread){
    const div_1 = document.createElement("DIV")
    div_1.classList.add("thread")
    const img = document.createElement("IMG")
    const div_2 = document.createElement("DIV")
    const h1 = document.createElement("H1")
    const h2 = document.createElement("H2")

    //img

    h1.innerHTML = thread.title
    h2.innerHTML = `User: ${thread.madeBy.user}<br> Published: ${thread.date}`
    const imgSrc = thread.madeBy.profilePic
    img.src = imgSrc

    div_2.appendChild(h1)
    div_2.appendChild(h2)

    div_1.appendChild(img)
    div_1.appendChild(div_2)


    return div_1
}

async function process_data (){
    let req_promise = await axios.get("../articulos.json",{});
    const fragment = document.createDocumentFragment()
    const threads = req_promise.data.threads
    for (let i = 0; i < threads.length; i++) {
        fragment.appendChild(create_thread(threads[i]))      
    }
    main.appendChild(fragment)

    console.log(fragment)

    

    
}

let xd2 = '{"threads": [{},{}]}'

console.log(JSON.parse(xd2))

window.addEventListener("load",process_data())

document.cookie = "hello= xd"











