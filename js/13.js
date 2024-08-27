async function dogs(){
    let url = 'https://dog.ceo/api/breeds/image/random'
    await fetch(url,{
        methog:"GET"
    }).then(res => res.json())
    .then(res=> console.log(res))
}
dogs()


const objFoto = {
    key: "45519640-9d9063f824dc5301a8d1fc84",
    container: document.getElementsByClassName('container')[0],
    pages: document.getElementsByClassName('pages')[0],
    input: document.getElementById('input'),
    btn: document.getElementById('btn'),
    maxpages: 0,
    img: document.getElementById('img'),
    modal_container: document.getElementsByClassName('modal_container')[0],
    close: document.getElementsByClassName('close')[0],
    getAll(value, p=0){
        let url =`https://pixabay.com/api/?key=${this.key}f&q=${value}&image_type=photo&lang=uk&page${p}&per_page=40`
        fetch(url,{method:"GET"}).then(res=>res.json())
        .then(res=>{
            res.total/40>20?this.maxpages=20:this.maxpages=res.total/40;
            this.create(res.hits)
            this.createPages();
        })
    },
    createPages(){
        this.pages.innerHTML=''
        for (let index = 0; index < this.maxpages; index++) {
            this.pages.insertAdjacentHTML('beforeend',`
                <span class=menu>${index}</span>
                `)
        }
        let menu = Array.from(document.getElementsByClassName('menu'))
        console.log(menu)
        menu.forEach((e,i)=>e.addEventListener('click',()=>{
            this.getAll(this.input.value,i)
            console.log(1)
        }
        ))
    },
    create(data){
        this.container.innerHTML=''
        data.forEach(element => 
            this.container.insertAdjacentHTML('beforeend',`
                <img src=${element.previewURL} alt="" class=img>
                
                
                `)
        );
        let img = Array.from(document.getElementsByClassName('img'))
        img.forEach(e=> e.addEventListener('click', ()=> this.modalInfo(e)))
    },
    styleModal(info){
        this.modal_container.style.display=info;
    },
    modalInfo(e){
        
        this.img.appendChild(e)
        this.styleModal('block')
        this.modal_container.addEventListener('click', (e)=>e.target==e.currentTarget&& this.styleModal('none'))
        this.close.addEventListener('click', ()=>this.styleModal('none'))
    },
    render(){
        this.btn.addEventListener('click',()=>this.getAll(this.input.value))
    }
}
objFoto.render()