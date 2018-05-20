
const initialState = {
    message: '',
    status: '',
    info: '',
    products: undefined,
    categorySelectValue: undefined
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
        case 'CATEGORY_SELECT':
            return { ...state, categorySelectValue: action.categorySelectValue}
       	default:
            return state
    }
}

export default messages;