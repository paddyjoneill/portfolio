<script lang="ts">
	let name = ''
	let email = ''
	let message = ''

	const onSubmit = async () => {

		const functionUrl = '/.netlify/functions/contactForm'

		const msg = {
			name,
			email, 
			message
		}

		var requestSettings : RequestInit =    { method: 'POST',
			mode: 'cors', // no-cors, *cors, same-origin
			cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
			credentials: 'same-origin', // include, *same-origin, omit
			headers: {
				'Content-Type': 'application/json'
			},
			// redirect: 'follow', // manual, *follow, error
			// referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
			body: JSON.stringify(msg) //
		}

		await fetch(functionUrl, requestSettings)
			.then(() => {
				message = ''
				email = ''
				name = ''
			})
	}
</script>

<form>
	<label for="name">Name:</label><br />
	<input 
		bind:value={name}
		type="text" id="name" name="name" 
	/><br />
	<label for="email">email:</label><br />
	<input 
		bind:value={email}	
		type="text" id="email" name="email" 
	/>
	<br />
	<label for="message">message:</label><br />
	<input 
		bind:value={message}
		type="text" id="message" name="message" 
	/>
</form>
<button on:click={onSubmit}>Submit</button>
