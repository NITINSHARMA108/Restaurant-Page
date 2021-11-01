
function Menu(){
    const div=document.querySelector('.menu-page');

    /*const h1=document.createElement('h1');
    const textNode=document.createTextNode('Menu');
    h1.appendChild(textNode);
    div.appendChild(h1);*/
    const div2=document.createElement('div');
    div.appendChild(div2);
    div2.setAttribute('class','menu');
    const menuArray=[
        {
            name:'Idli Sambhar',
            img:'https://www.vegrecipesofindia.com/wp-content/uploads/2014/05/idli-sambar-280x280.jpg',
            description:'Idli Sambar is a hearty, satisfying, comforting and a healthy meal of soft fluffy idlis served with savory, spiced and lightly tangy sambar – a vegetable stew made with lentils and assorted vegetables. It is a winning combination made for each other.',
            price:80
        },
        {
            name:'Hara Bhara Kabab',
            img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRt-O6M6SxfcwNzj4BYMXtYdo8Hq7oFsR2zjw&usqp=CAU',
            description:'Hara bhara kabab are healthy, flavorful, savory pan-fried patties loaded with spinach, green peas and potatoes. My recipe is easy to make and suitable for both vegans and vegetarians alike. Bonus, it is gluten-free as well. I share making these kababs in 2 ways – pan-fried and baked version.',
            price:280
        },
        {
            name:'Tutti Frutti Cake',
            img:'https://www.vegrecipesofindia.com/wp-content/uploads/2013/12/tutti-frutti-cake-recipe.jpg',
            description:'Tutti frutti cake is a popular variety of Indian cake made with flour, tutti frutti (candied papaya), sugar and flavorings. This cake can be made both with eggs and without eggs. I share an eggless tutti frutti cake recipe that has a soft, light and moist crumb. The recipe is also easy and even newbies in baking can make this cake easily.',
            price:380
        },
        {
            name:'Pizza',
            img:'https://www.vegrecipesofindia.com/wp-content/uploads/2020/11/pizza-recipe.jpg',
            description:'Hot, cheesy pizza loaded with your favorite veggies is one of the most fun and easy dinners to make at home. With just a few key tips you can create a restaurant-quality crust, and treat yourself to the best homemade pizza that’s completely customizable to your tastes. Plan your next pizza party using my foolproof recipe, with step-by-step photos for making perfect veg pizza from scratch every time!',
            price:500
        },
        {
            name:'Date Cake',
            img:'https://www.vegrecipesofindia.com/wp-content/uploads/2013/03/eggless-dates-walnut-coffee-cake.jpg',
            description:'Date and Walnut Cake is a very easy and tasty cake recipe. Even a beginner in baking can make this cake easily. Eggless and Vegan Recipe.',
            price:350
        },
        {
            name:'Rabdi',
            img:'https://www.vegrecipesofindia.com/wp-content/uploads/2015/01/rabri-recipe.jpg',
            description:'Rabdi, also called rabri, is a classic North Indian treat that’s rich, creamy, and perfectly sweet. To make rabri recipe, milk is cooked until it reduces to a thick pudding-like consistency, then is flavored with cardamoms, saffron, and your favorite nuts and dried fruits. Here you’ll find the best traditional rabdi recipe with step-by-step instructions and photos to prepare as a delicious dessert!',
            price:120
        },
        {
            name:'Besan Halwa',
            img:'https://www.vegrecipesofindia.com/wp-content/uploads/2016/09/besan-halwa-recipe.jpg',
            description:'Besan ka halwa is a rich, indulgent Indian sweet made with gram flour, ghee, sugar and cardamom powder. Plenty of stirrings are needed to make this sweet dish, but the end result is worth the effort. Try making my family recipe of this delicious Sweet for Diwali or any festive occasion and impress your guests.',
            price:120
        },
        {
            name:'Aloo Raita',
            img:'https://www.vegrecipesofindia.com/wp-content/uploads/2015/03/aloo-raita-recipe-280x280.jpg',
            description:'Aloo raita with step by step photos. Aloo raita is a simple and easy raita variant made with boiled potatoes, curd (yogurt) mint leaves, coriander leaves and spices. It makes for an excellent side dish for Biryani, Pulao or any rice based dish.',
            price:100
        },
        {
            name:'KalaKand',
            img:'https://www.vegrecipesofindia.com/wp-content/uploads/2015/05/kalakand-recipe-280x280.jpg',
            description:'This two-ingredient, super fast recipe for Kalakand (a.k.a. Indian Milk Cake) comes together in just 15 minutes thanks to the help of a can of sweetened condensed milk. This fudgy sweet is easy to customize and is naturally gluten free, making it the perfect dessert to celebrate with.',
            price:400
        },
        {
            name:'Samosa',
            img:'https://www.vegrecipesofindia.com/wp-content/uploads/2013/11/samosa-0.jpg',
            description:'Flaky and crunchy fried samosa are one of the most popular street food snack in North Indian cuisine. They feature a pastry-like crust but are filled with savory potatoes and peas for a hearty, delicious snack. This step-by-step guide will help you to make the flakiest, tastiest, absolutely best Punjabi samosa recipe from scratch!',
            price:50
        },
    ];

    menuArray.map((dish)=>{
        const column=document.createElement('div');
        column.setAttribute('class','menu-item');
        const img=document.createElement('img');
        img.setAttribute('src',dish.img);
        const h2=document.createElement('h2');
        const textnode1=document.createTextNode(dish.name);
        h2.appendChild(textnode1);
        const description=document.createElement('div');
        const textnode2=document.createTextNode(dish.description);
        description.appendChild(textnode2);
        const price=document.createElement('h4');
        const textnode3=document.createTextNode(`Price : ${dish.price}`);
        price.appendChild(textnode3);
        column.append(h2);
        column.append(img);
        column.append(description);
        column.append(price);
        document.querySelector('.menu').append(column);
    })




}

export default Menu;