var index = 0;
var slides = document.getElementsByClassName("picture")
var indexImg = document.querySelector(".indexImg")
var signup =document.getElementById("login")
var login = document.getElementById("login")

let Drinks = [
    {
        id: 0,
        name: 'CÀ PHÊ ĐEN',
        image: 'https://product.hstatic.net/1000075078/product/ca-phe-den-da_6e25255ae31c4f3bbbb502f77e2c100d_large.jpg',
        price: "0.99$"
    },
    {
        id: 1,
        name: 'CÀ PHÊ SỮA',
        image:'https://product.hstatic.net/1000075078/product/ca-phe-sua-da_b00c53d18cd84144a164790323106a2f_large.jpg',
        price: "0.99$"
    },
    {
        id: 2,
        name: 'TRÀ ĐÀO CAM SẢ',
        image:'https://product.hstatic.net/1000075078/product/tra-dao-cam-xa_668678_400x400_207c526c987c4026877ebae748c62afd_large.jpg',
        price: "0.99$"
    },
    {
        id: 3,
        name: 'TRÀ ĐÀO',
        image:'https://product.hstatic.net/1000341606/product/tra_dao_d1fcc53e21604c1eb2ecaa4658b142ef_grande.jpg',
        price: "0.99$"
    },
    {
        id: 4,
        name: 'TRÀ CHANH',
        image:'https://tokyodeli.com.vn/Data/Sites/3/Product/1566/tra-chanh.jpg',
        price: "0.99$"
    },
    {
        id: 5,
        name: 'NƯỚC CAM',
        image:'https://cookbeo.com/media/2021/06/nuoc-cam-ep/nuoc-cam-ep.jpg',
        price: "0.99$"
    },
    {
        id: 6,
        name: 'TRÀ SỮA THƯỜNG',
        image:'https://jarvis.vn/wp-content/uploads/2019/05/tra-sua-tran-chau-trang-1.jpg',
        price: "0.99$"
    },
    {
        id: 7,
        name: 'TRÀ SỮA DÂU',
        image:'https://product.hstatic.net/1000355252/product/2018-03-19-17_51_06_tsdt_818e96dd210346d2aeb961f5890f0c30_grande.jpeg',
        price: "0.99$"
    },
    {
        id: 8,
        name: 'TRÀ SỮA NHÀI',
        image:'https://gongcha.com.vn/wp-content/uploads/2022/06/Tra-sua-tran-chau-HK.png',
        price: "0.99$"
    }
]

for(var i in Drinks){
    createItem(Drinks,i)
}

function createItem(Drinks,i){
    let drinkList = document.querySelector(".Drink_container")
    
    let drink = document.createElement("div")
    drink.classList.add("drink")

    let content = document.createElement("div")
    content.classList.add("Drink_content")

    let name = document.createElement("b")
    name.classList.add("Drink_text")
    name.classList.add("Drink_name")
    name.textContent = Drinks[i].name

    let image = document.createElement("img")
    image.classList.add("Drink_IMG")
    image.setAttribute("src",Drinks[i].image)

    let btn = document.createElement("p")
    btn.classList.add("Drink_text")
    btn.classList.add("Drink_buy")
    btn.setAttribute("onmouseover",'change_text(this)')
    btn.setAttribute("onmouseout",'normal(this)')
    btn.textContent = Drinks[i].price
    
    drinkList.appendChild(drink)
    drink.appendChild(image)
    drink.appendChild(content)
    content.appendChild(name)
    content.appendChild(btn)
}
