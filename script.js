//object
const faq = {
    //atribute
    items: window.document.querySelectorAll('.items .item'),

    //method
    openOrClose(){
        this.items.forEach(element => {
            element.addEventListener('click', () => {
                element.classList.toggle('active');
            })
        });
    }
}

//call method
faq.openOrClose();

