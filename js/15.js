// Простий слайдер
const state = [
    '1.jfif', '2.jpg', '3.jfif', '4.jfif', '5.jpg',
]


const slider1 = {
    slider: document.getElementById('slider'),
    container: document.getElementsByClassName('container')[0],
    button: document.getElementById('button'),
    createButton() {
        let e = state.length;

        for (let o = 0; o < e; o++) {
            this.button.insertAdjacentHTML('beforeend', `
                <button class = 'btn'>o</button>
                `)

        }
        let btns = Array.from(document.getElementsByClassName('btn'));
        console.log(btns[0].style)
        btns.forEach((e, i) => e.addEventListener('click', () => {
            this.container.style.transform = `translateX(-${300 * i}px)`

        }))
    },
    createSliders() {
        state.forEach((e, i) => {
            this.container.insertAdjacentHTML('beforeend', `
                    <img src='./slider/${e}'>
                    `)
        })
    },
    render() {
        this.createSliders()
        this.createButton()
    }
}
//slider1.render()


// Слайдер з кнопками
const slider2 = {
    position: 0,
    container: document.getElementsByClassName('container')[0],
    left: document.getElementById('left'),
    right: document.getElementById('right'),

    createSliders() {
        state.forEach((e, i) => {
            this.container.insertAdjacentHTML('beforeend', `
                <img src='./slider/${e}'>
                `)
        })
    },
    algoritm(position, l){
        
        if(l){
            position!=0? this.position--:'';
            this.container.style.transform = `translateX(${300 * this.position}px)`
            return 0
        }
        position!=state.length?this.position++:'';
        this.container.style.transform = `translateX(-${300 * this.position}px)`
        
    },
    
    render() {
        this.createSliders()
        this.left.addEventListener('click', () => this.algoritm(this.position,1))
        this.right.addEventListener('click', () => this.algoritm(this.position,0))
    }
}
//slider2.render()
// Анімований  слайдер
const slider3={
    position: 0,
    container: document.getElementsByClassName('container')[0],
    createSliders(e) {
            this.container.innerHTML=`
                <img src='./slider/${state[e]}'>
                `
    },
    render(){
        this.createSliders(this.position)
        this.container.addEventListener('click',()=>{
            if(this.position<state.length-1){
                this.position+=1
            }else{
                this.position=0
            }
            this.createSliders(this.position)
        })
    }
}
//slider3.render()

////////////////////////////////////////////////////////////////////

const state2 = [
    'осінь1.jpg', 'осінь2.jpg', 'осінь3.jpg',
]

const slider4={
    position: 0,
    container: document.getElementsByClassName('container')[0],
    left: document.getElementById('left'),
    right: document.getElementById('right'),

    createSliders() {
        state2.forEach((e, i) => {
            this.container.insertAdjacentHTML('beforeend', `
                <img src='./slider2/${e}'>
                `)
        })
    },
    algoritm(position, l){
        
        if(l){
            position!=0? this.position--:'';
            this.container.style.transform = `translateX(${300 * this.position}px)`
            return 0
        }
        position!=state2.length?this.position++:'';
        this.container.style.transform = `translateX(-${300 * this.position}px)`
        
    },
    
    render() {
        this.createSliders()
        this.left.addEventListener('click', () => this.algoritm(this.position,1))
        this.right.addEventListener('click', () => this.algoritm(this.position,0))
    }   
}
//slider4.render()
/////////////////////////////////////////////////////////////////////
const state3 = [
    'собака1.jpg', 'собака2.jpg', 'собака3.jpg', 'собака4.jpg'
]
const slider5={
    position: 0,
    container: document.getElementsByClassName('container')[0],
    createSliders(e) {
            this.container.innerHTML=`
                <img src='./slider3/${state3[e]}'>
                `
    },
    render(){
        this.createSliders(this.position)
        this.container.addEventListener('click',()=>{
            if(this.position<state.length-2){
                this.position+=1
            }else{
                this.position=0
            }
            this.createSliders(this.position)
        })
    }
}
//slider5.render()
/////////////////////////////////////////////////////////////////////////////////////
const state4=[
    'небо1.jpg', 'небо2.jpg', 'небо3.jpg'
]
const slider6 = {
    slider: document.getElementById('slider'),
    container: document.getElementsByClassName('container')[0],
    button: document.getElementById('button'),
    createButton() {
        let e = state4.length;

        for (let o = 0; o < e; o++) {
            this.button.insertAdjacentHTML('beforeend', `
                <button class = 'btn'>o</button>
                `)

        }
        let btns = Array.from(document.getElementsByClassName('btn'));
        console.log(btns[0].style)
        btns.forEach((e, i) => e.addEventListener('click', () => {
            this.container.style.transform = `translateX(-${300 * i}px)`

        }))
    },
    createSliders() {
        state4.forEach((e, i) => {
            this.container.insertAdjacentHTML('beforeend', `
                    <img src='./slider4/${e}'>
                    `)
        })
    },
    render() {
        this.createSliders()
        this.createButton()
    }
}
slider6.render()
