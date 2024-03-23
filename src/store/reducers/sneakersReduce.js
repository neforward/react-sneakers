const localCart = JSON.parse(localStorage.getItem('cart'))
const localLikedItems = JSON.parse(localStorage.getItem('likedItems'));

const defaultState = {
    sneakers: [
        {
            "id": 0,
            "name": "Nike G.T. Jump 2",
            "price": 320,
            "imgURL": "https://static.nike.com/a/images/t_default/8cfb8279-be0c-4701-94ad-a2befd9d2987/gt-jump-2-basketball-shoes-66bBTQ.png",
            "counter": 0
        },
        {
            "id": 1,
            "name": "Nike Dunk Low",
            "price": 160,
            "imgURL": "https://static.nike.com/a/images/t_default/79709e27-52e9-406c-9438-57b0627db04c/nike-dunk-low-unlocked-by-you.png",
            "counter": 0
        },
        {
            "id": 2,
            "name": "Nike Dunk Low",
            "price": 100,
            "imgURL": "https://static.nike.com/a/images/t_default/a3e7dead-1ad2-4c40-996d-93ebc9df0fca/dunk-low-retro-mens-shoes-87q0hf.png",
            "counter": 0
        },
        {
            "id": 3,
            "name": "Nike SB Dunk Low",
            "price": 150,
            "imgURL": "https://static.nike.com/a/images/t_default/noweplh9baxooyadyhso/sb-dunk-low-pro-skate-shoe-Q8p8S6.png",
            "counter": 0
        },
        {
            "id": 4,
            "name": "Air Jordan 1 Mid SE",
            "price": 260,
            "imgURL": "https://www.nike.ae/dw/image/v2/BDVB_PRD/on/demandware.static/-/Sites-akeneo-master-catalog/default/dw99731430/nk/1cb/9/a/3/1/b/1cb9a31b_f105_4ac4_b47d_c401ff3477e9.png",
            "counter": 0
        },
        {
            "id": 5,
            "name": "Nike Dunk Low",
            "price": 99,
            "imgURL": "https://static.nike.com/a/images/t_default/49994138-c049-4ce4-a670-c42efd06ade4/dunk-low-shoes-7CMvkH.png",
            "counter": 0
        },
        {
            "id": 6,
            "name": "Nike Dunk Low",
            "price": 110,
            "imgURL": "https://static.nike.com/a/images/t_default/489eade7-34d8-40e4-a5d0-865c83b9133f/dunk-low-retro-shoes-wfrHM2.png",
            "counter": 0
        },
        {
            "id": 7,
            "name": "Nike Air Max 90",
            "price": 120,
            "imgURL": "https://static.nike.com/a/images/t_default/3bff1898-6d52-4e9f-b7e2-569e333160a0/air-max-90-shoes-NKzt71.png",
            "counter": 0
        },
        {
            "id": 8,
            "name": "Nike Air Max 90",
            "price": 120,
            "imgURL": "https://static.nike.com/a/images/t_default/aa5a276b-715d-4da7-bac2-159edaed11b6/air-max-90-shoes-mnCmVT.png",
            "counter": 0
        },
        {
            "id": 9,
            "name": "Nike Tiempo Legend 9",
            "price": 230,
            "imgURL": "https://static.nike.com/a/images/t_default/3dd26b1c-7e37-4502-a9b6-24aadc2288f2/tiempo-legend-9-academy-mg-multi-ground-football-boot-8Vvl8G.png",
            "counter": 0
        },
        {
            "id": 10,
            "name": "Nike Air Force 1 '07",
            "price": 115,
            "imgURL": "https://static.nike.com/a/images/t_default/f8dfa191-60b3-44c1-b730-b25e0a908c35/air-force-1-07-easyon-shoes-LKXPhZ.png",
            "counter": 0
        },
        {
            "id": 11,
            "name": "Nike Blazer Mid '77",
            "price": 85,
            "imgURL": "https://static.nike.com/a/images/t_default/89628a1b-bea6-48cb-83f8-ee2966196b72/blazer-mid-77-big-kids-shoes-tDPQtX.png",
            "counter": 0
        },
        {
            "id": 12,
            "name": "Yeezy Boost 350 V2",
            "price": 549,
            "imgURL": "https://mckickz.co.uk/cdn/shop/files/adidas-yeezy-boost-350-v2-static-ef2905-McKickz-02-1_1200x.png?v=1683126662",
            "counter": 0
        },
        {
            "id": 13,
            "name": "Yeezy Boost 350 V2",
            "price": 549,
            "imgURL": "https://mckickz.co.uk/cdn/shop/files/adidas-yeezy-boost-350-v2-glow-in-the-dark-green-eg5293-McKickz-02-1_5000x.png?v=1683121325",
            "counter": 0
        },
        {
            "id": 14,
            "name": "Yeezy Boost 350 V2",
            "price": 549,
            "imgURL": "https://mckickz.co.uk/cdn/shop/files/adidas-yeezy-boost-350-v2-cloud-white-non-rf-fw3043-McKickz-01_2_5000x.png?v=1683050670",
            "counter": 0
        },
        {
            "id": 15,
            "name": "Yeezy Boost 350 V2",
            "price": 549,
            "imgURL": "https://mckickz.co.uk/cdn/shop/files/adidas-yeezy-boost-350-semi-frozen-yellow-b37572-McKickz-02-1_1200x.png?v=1683035926",
            "counter": 0
        },
        {
            "id": 16,
            "name": "Air Jordan 4 Retro",
            "price": 799,
            "imgURL": "https://mckickz.co.uk/cdn/shop/products/air-jordan-4-retro-university-blue-ct8527-400-McKickz-01-1_5000x.png?v=1681816227",
            "counter": 0
        },
        {
            "id": 17,
            "name": "Air Jordan 4 Retro",
            "price": 799,
            "imgURL": "https://mckickz.co.uk/cdn/shop/products/air-jordan-4-retro-lightning-2021-ct8527-700-McKickz-01_5000x.png?v=1681810788",
            "counter": 0
        },
        {
            "id": 18,
            "name": "Air Jordan 6 GS",
            "price": 599,
            "imgURL": "https://mckickz.co.uk/cdn/shop/files/travis-scott-x-air-jordan-6-gs-olive-cn1085-200-McKickz-01-1_5000x.png?v=1686676970",
            "counter": 0
        },
        {
            "id": 19,
            "name": "Air Jordan 4 Retro",
            "price": 799,
            "imgURL": "https://mckickz.co.uk/cdn/shop/files/air-jordan-4-retro-zen-master-dh7138-506-McKickz-01-1_5000x.png?v=1687188589",
            "counter": 0
        },
        {
            "id": 20,
            "name": "Air Jordan X La Flame",
            "price": 2499,
            "imgURL": "https://mckickz.co.uk/cdn/shop/products/travis-scott-x-air-jordan-1-retro-high-og-cd4487-100-McKickz-04-1_5000x.png?v=1678052578",
            "counter": 0

        },
        {
            "id": 21,
            "name": "Nike Dunk X Off White",
            "price": 1000,
            "imgURL": "https://mckickz.co.uk/cdn/shop/files/off-white-x-nike-dunk-low-university-red-ct0856-600-McKickz-04_5000x.png?v=1682689303",
            "counter": 0

        },
        {
            "id": 22,
            "name": "Nike Dunk X Off White",
            "price": 1000,
            "imgURL": "https://mckickz.co.uk/cdn/shop/files/off-white-x-nike-dunk-low-pine-green-ct0856-100-McKickz-04_5000x.png?v=1682680032",
            "counter": 0

        },
        {
            "id": 23,
            "name": "Nike Dunk X Off White",
            "price": 1000,
            "imgURL": "https://mckickz.co.uk/cdn/shop/files/off-white-x-dunk-low-university-gold-midnight-navy-ct0856-700-McKickz-05-1_5000x.png?v=1685356268",
            "counter": 0

        },
        {
            "id": 24,
            "name": "Nike Dunk X Off White",
            "price": 549,
            "imgURL": "https://mckickz.co.uk/cdn/shop/files/off-white-x-air-rubber-dunk-university-blue-cu6015-McKickz-04-1_5000x.png?v=1685355310",
            "counter": 0

        },
        {
            "id": 25,
            "name": "Air Jordan 1 Retro",
            "price": 474,
            "imgURL": "https://mckickz.co.uk/cdn/shop/products/air-jordan-1-retro-high-gs-lost-found-fd1437-612-McKickz-01_1_5000x.png?v=1676695214",
            "counter": 0

        },
        {
            "id": 26,
            "name": "Air Jordan 5 WMNS",
            "price": 399,
            "imgURL": "https://mckickz.co.uk/cdn/shop/files/air-jordan-5-wmns-bluebird-dd9336-400-McKickz-01-1_5000x.png?v=1685448753",
            "counter": 0

        },
        {
            "id": 27,
            "name": "Air Jordan 'TIE DYE'",
            "price": 299,
            "imgURL": "https://mckickz.co.uk/cdn/shop/products/air-jordan-1-wmns-retro-high-og-tie-dye-cd0461-100-McKickz-01-1_5000x.png?v=1678055279",
            "counter": 0

        },
        {
            "id": 28,
            "name": "Air Jordan 1 Retro",
            "price": 1000,
            "imgURL": "https://mckickz.co.uk/cdn/shop/products/air-jordan-1-turbo-green-555088-311-McKickz-01-1_5000x.png?v=1678054481",
            "counter": 0

        },
        {
            "id": 29,
            "name": "Air Jordan 1 Retro",
            "price": 659,
            "imgURL": "https://mckickz.co.uk/cdn/shop/products/air-jordan-1-retro-high-x-a-ma-maniere-do7097-100-McKickz-01-1_5000x.png?v=1678019365",
            "counter": 0

        },
        {
            "id": 30,
            "name": "TN Air Max",
            "price": 249,
            "imgURL": "https://mckickz.co.uk/cdn/shop/products/nike-tn-air-max-plus-gold-raspberry-red-dx0755-600-McKickz-01-1_5000x.png?v=1679712553",
            "counter": 0

        },
        {
            "id": 31,
            "name": "TN Air Max",
            "price": 299,
            "imgURL": "https://mckickz.co.uk/cdn/shop/products/nike-tn-air-max-plus-baltic-blue-fd9751-100-McKickz-01-1_5000x.png?v=1676695204",
            "counter": 0

        }, {
            "id": 32,
            "name": "Air Max X Off White",
            "price": 1000,
            "imgURL": "https://mckickz.co.uk/cdn/shop/files/off-white-x-air-max-90-black-aa7293-001-McKickz-04-1_5000x.png?v=1685358633",
            "counter": 0

        },
        {
            "id": 33,
            "name": "Yeezy Foam Runner",
            "price": 499,
            "imgURL": "https://mckickz.co.uk/cdn/shop/files/adidas-yeezy-foam-runner-mx-carbon-ig9562-McKickz-01-1_1200x.png?v=1683555657",
            "counter": 0

        },
        {
            "id": 34,
            "name": "Yeezy Foam Runner",
            "price": 369,
            "imgURL": "https://mckickz.co.uk/cdn/shop/files/adidas-yeezy-foam-runner-vermilion-gw3355-McKickz-01-1_5000x.png?v=1683559167",
            "counter": 0

        },
        {
            "id": 35,
            "name": "Yeezy Foam Runner",
            "price": 499,
            "imgURL": "https://mckickz.co.uk/cdn/shop/files/adidas-yeezy-foam-runner-mx-cream-clay-gx8774-McKickz-01-1_5000x.png?v=1683556142",
            "counter": 0
        },
        {
            "id": 36,
            "name": "Yeezy Boost 700 V3",
            "price": 299,
            "imgURL": "https://mckickz.co.uk/cdn/shop/files/adidas-yeezy-700-v3-azael-fw4980-McKickz-01-1_5000x.png?v=1683394773",
            "counter": 0

        },
        {
            "id": 37,
            "name": "Yeezy Boost 700 V3",
            "price": 499,
            "imgURL": "https://mckickz.co.uk/cdn/shop/files/adidas-yeezy-700-v3-arzareth-g54850-McKickz-01-1_5000x.png?v=1683394429",
            "counter": 0
        },
        {
            "id": 38,
            "name": "Nike Dunk Low",
            "price": 299,
            "imgURL": "https://mckickz.co.uk/cdn/shop/products/nike-dunk-low-argon-blue-dm0121-400-McKickz-01-1_2048x.png?v=1678059887",
            "counter": 0
        },
        {
            "id": 39,
            "name": "Nike Dunk Low",
            "price": 399,
            "imgURL": "https://mckickz.co.uk/cdn/shop/files/nike-dunk-low-retro-valerian-blue-dd1391-400-McKickz-01-1_5000x.png?v=1682683093",
            "counter": 0

        },
        {
            "id": 40,
            "name": "Nike Dunk Low",
            "price": 299,
            "imgURL": "https://mckickz.co.uk/cdn/shop/products/nike-dunk-low-retro-reverse-brazil-DV0833-300-McKickz-01-1_5000x.png?v=1676695205",
            "counter": 0

        },
        {
            "id": 41,
            "name": "Nike Dunk Low",
            "price": 269,
            "imgURL": "https://mckickz.co.uk/cdn/shop/files/nike-dunk-low-retro-chlorophyll-dj6188-300-McKickz-01-1_5000x.png?v=1682680425",
            "counter": 0

        },
        {
            "id": 42,
            "name": "Nike Dunk Low",
            "price": 299,
            "imgURL": "https://mckickz.co.uk/cdn/shop/files/nike-dunk-low-city-market-da6125-900-McKickz-01-1_5000x.png?v=1682693382",
            "counter": 0

        },
        {
            "id": 43,
            "name": "Nike Dunk Low",
            "price": 274,
            "imgURL": "https://mckickz.co.uk/cdn/shop/products/nike-dunk-low-goldenrod-dd1391-004-McKickz-01-1_5000x.png?v=1678161670",
            "counter": 0

        },
        {
            "id": 44,
            "name": "Nike Dunk Low",
            "price": 449,
            "imgURL": "https://mckickz.co.uk/cdn/shop/products/nike-dunk-low-retro-sashiko-industrial-blue-dv0834-101-McKickz-01-1_5000x.png?v=1676695202",
            "counter": 0

        },
        {
            "id": 45,
            "name": "Nike SB Dunk Low",
            "price": 349,
            "imgURL": "https://mckickz.co.uk/cdn/shop/files/nike-dunk-low-sb-x-the-powerpuff-girls-qs-bubbles-fz8320-400-McKickz-001-1_5000x.png?v=1703196425",
            "counter": 0

        },
        {
            "id": 46,
            "name": "Nike SB Dunk Low",
            "price": 379,
            "imgURL": "https://mckickz.co.uk/cdn/shop/products/nike-sb-dunk-low-pro-ftc-dh7687-400-McKickz-01_5000x.png?v=1682078913",
            "counter": 0

        },
        {
            "id": 47,
            "name": "Nike SB Dunk Low",
            "price": 399,
            "imgURL": "https://mckickz.co.uk/cdn/shop/files/nike-dunk-low-sb-x-the-powerpuff-girls-qs-blossom-fd2631-600-McKickz-001-1_5000x.png?v=1703195935",
            "counter": 0

        },
    ],
    cart: localCart || [],
    profileItems: [[]],
    likedItems: localLikedItems || [],
};

const SET_SNEAKERS = 'SET_SNEAKERS'
const ADD_TO_CART = 'ADD_TO_CART'
const REMOVE_FROM_CART = 'REMOVE_FROM_CART'
const CLEAR_CART = 'CLEAR_CART'
const LIKE_ITEM = 'LIKE_ITEM'
const REMOVE_LIKE_ITEM = 'REMOVE_LIKE_ITEM'

export const sneakersReduce = (state = defaultState, action) => {
    switch (action.type) {
        case SET_SNEAKERS:
            return {
                ...state,
                sneakers: action.payload,
            }
        case ADD_TO_CART:
            const newCart = [...state.cart, action.payload]
            localStorage.setItem('cart', JSON.stringify(newCart))

            return {
                ...state,
                cart: newCart,
            }
        case REMOVE_FROM_CART:
            const newItems = state.cart.filter(item => item.id !== action.payload)
            localStorage.setItem('cart', JSON.stringify(newItems))
            return {
                ...state,
                cart: newItems,
            }
        case CLEAR_CART:
            localStorage.setItem('cart', null)
            return {
                ...state,
                cart: [],
            }
        case LIKE_ITEM:
            const newLikedItems = [...state.likedItems, action.payload];
            localStorage.setItem('likedItems', JSON.stringify(newLikedItems));
            return {
                ...state,
                likedItems: newLikedItems,
            };

        case REMOVE_LIKE_ITEM:
            const updatedLikedItems = state.likedItems.filter(item => item.id !== action.payload);
            localStorage.setItem('likedItems', JSON.stringify(updatedLikedItems));
            return {
                ...state,
                likedItems: updatedLikedItems,
            };
        default:
            return state
    }
}

export const setSneakersAction = (payload) => ({ type: SET_SNEAKERS, payload })
export const addToCartAction = (payload) => ({ type: ADD_TO_CART, payload })
export const removeFromCartAction = (payload) => ({ type: REMOVE_FROM_CART, payload })
export const clearCartAction = (payload) => ({ type: CLEAR_CART, payload })
export const likeItemAction = (payload) => ({ type: LIKE_ITEM, payload })
export const removeLikeAction = (payload) => ({ type: REMOVE_LIKE_ITEM, payload })
