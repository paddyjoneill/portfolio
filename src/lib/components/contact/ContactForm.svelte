<script lang="ts">
	import * as EmailValidator from 'email-validator'

	let name = '';
	let email = '';
	let message = '';
	let errorMessage = '';

	const onSubmit = async () => {

		// check email
		const validEmail = EmailValidator.validate(email)
		const hasName = name.length > 0
		const hasMessage = message.length > 0


		if(!validEmail){
			errorMessage = 'Invalid email address'
		}

		const functionUrl = '/.netlify/functions/contactForm';

		const msg = {
			name,
			email,
			message
		};

		var requestSettings: RequestInit = {
			method: 'POST',
			mode: 'cors',
			cache: 'no-cache',
			credentials: 'same-origin',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(msg) //
		};

		await fetch(functionUrl, requestSettings)
			.then(() => {
				message = '';
				email = '';
				name = '';
			})
			.catch(() => (errorMessage = 'There was a problem with the submission'));
	};
</script>

<section id="contact-form">
	<h2>Contact</h2>
	<p>I can by contacted at hello@patrickoneill.dev or by filling in the contact form below</p>
	<div class="form-container">
		<form on:submit|preventDefault={onSubmit}>
			<input
				bind:value={name}
				class="form-input"
				type="text"
				id="name"
				name="name"
				placeholder="Name"
			/>
			<input
				bind:value={email}
				class="form-input"
				type="text"
				id="email"
				name="email"
				placeholder="email"
			/>
			<textarea
				bind:value={message}
				class="form-input"
				type="text"
				id="message"
				name="message"
				placeholder="Message"
			/>

			<input type="submit"  name="submit" value="SUBMIT" />
		</form>
	</div>
</section>

<style>
	section {
		margin: 8px;
	}

	.form-container {
		display: flex;
		justify-content: center;
	}

	form {
		display: flex;
		flex-direction: column;
		justify-content: center;
		width: 640px;
	}

	.form-input {
		color: black;
		font-family: 'Inter', Arial, Helvetica, sans-serif;
		font-weight: 400;
		font-size: 18px;
		border-radius: 0px;
		line-height: 22px;
		background-color:  rgb(248, 242, 242);
		border: 2px solid black;
		transition: all 0.3s;
		padding: 13px;
		margin-bottom: 15px;
		width: 100%;
		box-sizing: border-box;
		outline: 0;
	}

	textarea {
		height: 150px;
	}

	[type="submit"]{
		font-family: 'Montserrat', Arial, Helvetica, sans-serif;
		width: 100%;
		background: rgb(248, 242, 242);
		border-radius:0px;
		border: 2px solid black;
		cursor:pointer;
		color:black;
		font-size:24px;
		padding-top:10px;
		padding-bottom:10px;
		transition: all 0.3s;
		margin-top:-4px;
		font-weight:400;

	}
</style>
