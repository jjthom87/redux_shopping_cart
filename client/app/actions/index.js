export const signUpForm = (inputs, cb) => {
    return dispatch => {
		fetch('/api/sign-up', {
			method: 'post',
			body: JSON.stringify(inputs),
			headers: {
                'content-type': 'application/json',
                'accept': 'application/json'
            },
            credentials: 'same-origin'
		}).then((response) => response.json())
		.then((results) => {
			dispatch({
				type: 'SIGN_UP_RESULTS',
				status: 'success',
				message: results
			})
			cb(results)
		}).catch(error => {
			dispatch({
				type: 'SIGN_UP_RESULTS',
				status: 'error',
				message: error
			})
        })
    }
}

export const signInForm = (inputs, cb) => {
    return dispatch => {
		fetch('/api/sign-in', {
			method: 'post',
			body: JSON.stringify(inputs),
			headers: {
                'content-type': 'application/json',
                'accept': 'application/json'
            },
            credentials: 'same-origin'
		}).then((response) => response.json())
		.then((results) => {
			dispatch({
				type: 'SIGN_IN_RESULTS',
				status: 'success',
				message: results
			})
			cb(results)
		}).catch(error => {
			dispatch({
				type: 'SIGN_IN_RESULTS',
				status: 'error',
				message: error
			})
        })
    }
}

export const toUserHome = (info) => {
	return {
		type: 'TO_USER_HOME',
		info: info
	}
}

export const isUserSignedIn = (cb) => {
	return dispatch => {
		fetch('/api/signed-in', {
			headers: {
                'content-type': 'application/json',
                'accept': 'application/json'
            },
            credentials: 'same-origin'
		}).then((response) => response.json())
		.then((results) => {
			dispatch({
				type: 'SIGNED_IN_USER',
				user: results.user
			});
			cb(results)
        })
	}
}

export const getProducts = () => {
	return dispatch => {
		fetch('/api/get-products', {
			headers: {
                'content-type': 'application/json',
                'accept': 'application/json'
            },
            credentials: 'same-origin'
		}).then((response) => response.json())
		.then((results) => {
			dispatch({
				type: 'GET_PRODUCTS',
				products: results
			})
        })
	}
}

export const categorySelect = (value) => {
	return dispatch => {
		dispatch({
			type: 'CATEGORY_SELECT',
			categorySelectValue: value
		})
	}
}

export const buyButtonPressed = (user_id, product_id) => {
	return dispatch => {
		fetch(`/api/buy/${product_id}`, {
			method: 'post',
			body: JSON.stringify({user_id: user_id}),
			headers: {
                'content-type': 'application/json',
                'accept': 'application/json'
            },
            credentials: 'same-origin'
		}).then((response) => response.json())
		.then(results => {
			dispatch({
				type: 'CART_ADDED_RESULTS',
				status: results
			})
		}).catch(error => {
			dispatch({
				type: 'CART_ADDED_RESULTS',
				status: results
			})
        })
	}
}

export const getCart = () => {
	return dispatch => {
		fetch('/api/get-cart', {
			headers: {
                'content-type': 'application/json',
                'accept': 'application/json'
            },
            credentials: 'same-origin'
		}).then((response) => response.json())
		.then((results) => {
			dispatch({
				type: 'GET_CART',
				cart: results
			})
        })
	}
}