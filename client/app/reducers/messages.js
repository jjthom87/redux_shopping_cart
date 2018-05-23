
const initialState = {
    message: '',
    status: '',
    info: '',
    products: undefined,
    categorySelectValue: undefined,
    user: undefined,
    cart: undefined
}

const messages = (state = initialState, action) => {
    switch (action.type) {
        case 'SIGN_UP_RESULTS':
            return { ...state, status: action.status, message: action.message }
        case 'SIGN_IN_RESULTS':
            return { ...state, status: action.status, message: action.message }
        case 'TO_USER_HOME':
            return { ...state, info: action.info }
        case 'SIGNED_IN_USER':
            return { ...state, user: action.user }
        case 'GET_PRODUCTS':
            return { ...state, products: action.products }
        case 'GET_CART':
            return { ...state, cart: action.cart }
        case 'CATEGORY_SELECT':
            return { ...state, categorySelectValue: action.categorySelectValue}
        case 'CART_ADDED_RESULTS':
            return { ...state, status: action.status}
       	default:
            return state
    }
}

export default messages;