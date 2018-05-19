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

export const isUserSignedIn = () => {
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
			})
        })
	}
}