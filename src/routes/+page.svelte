<script>
	let name = '';
	let github = '';
	let email = '';
	let used_sveltekit = 'false';
	let used_supabase = 'false';
	let used_tailwind = 'false';
	let when2meet_filled_out = [];

	let git_knowledge = 40;
	let js_knowledge = 40;
	let css_knowledge = 40;
	let html_knowledge = 40;

	let git_status = '';
	let js_status = '';
	let css_status = '';
	let html_status = '';

	let application_state = 'IN PROGRESS';

	const git_statuses = [
		'What is a git?',
		'I know some gits',
		'CS35L',
		'I know how to git gud',
		'I got 100 on the CS35L Final'
	];

	const js_statuses = [
		'Java can script?',
		"I've heard about how painful it is (https://youtu.be/aXOChLn5ZdQ)",
		'CS35L',
		'I carried the CS35L Final Project',
		"I know what 'b' + 'a' + + 'a' + 'a' outputs"
	];

	const css_statuses = [
		'Computer Science Student?',
		'I know the difference between margin and padding',
		'I can center divs',
		'I can flex boxes',
		'I can recreate apple.com, given enough time'
	];

	const html_statuses = [
		'I never opened a webpage',
		'I know some tags',
		'CS35L',
		'I can embed stuff',
		'I started before I was born'
	];

	$: git_status = git_statuses[Math.min(Math.floor(git_knowledge / 20), 4)];
	$: js_status = js_statuses[Math.min(Math.floor(js_knowledge / 20), 4)];
	$: css_status = css_statuses[Math.min(Math.floor(css_knowledge / 20), 4)];
	$: html_status = html_statuses[Math.min(Math.floor(html_knowledge / 20), 4)];

	function getFormData() {
		return {
			name,
			github,
			email,
			used_sveltekit: used_sveltekit === 'true',
			used_supabase: used_supabase === 'true',
			used_tailwind: used_tailwind === 'true',
			git_knowledge,
			js_knowledge,
			css_knowledge,
			html_knowledge
		};
	}

	async function handleSubmit(e) {
		e.preventDefault();

		if (when2meet_filled_out.length > 0) {
			const response = await fetch('/', {
				method: 'POST',
				body: JSON.stringify(getFormData()),
				headers: {
					'Content-Type': 'application/json'
				}
			});

			const responseStatus = await response.json();

			if (responseStatus) {
				application_state = 'SUBMITTED';
			}
		} else {
			alert('Make sure to fill out the When2meet!');
		}
	}
</script>

<ul></ul>

<div class="mx-auto p-6 max-w-xl">
	{#if application_state === 'IN PROGRESS'}
		<h1 class="mb-3 font-display-serif text-2xl font-bold tracking-wide uppercase text-center">
			Web Committee Survey
		</h1>
		<div class="flex flex-wrap md:flex-nowrap gap-2 my-2">
			<label class="input input-bordered w-full md:w-1/2 items-center gap-2 flex">
				Name
				<input type="text" class="grow" placeholder="Joe Bruin" bind:value={name} />
			</label>
			<label class="input input-bordered w-full md:w-1/2 items-center gap-2 flex">
				Email
				<input type="text" class="grow" placeholder="joebruin@ucla.edu" bind:value={email} />
			</label>
		</div>
		<label class="input input-bordered w-full items-center gap-2 flex my-2">
			Github
			<input type="text" class="grow" placeholder="JoeBruin8" bind:value={github} />
		</label>

		<h1 class="mb-3 font-display-serif text-xl font-bold tracking-wide uppercase mt-8">
			Self-Assessment
		</h1>

		<p class="m-2">How well do you know Git?</p>
		<input type="range" min="0" max="100" bind:value={git_knowledge} class="range w-1/2 ml-5" />
		<p class="ml-5 italic text-gray-500">{git_status}</p>

		<p class="m-2">How well do you know Javascript?</p>
		<input type="range" min="0" max="100" bind:value={js_knowledge} class="range w-1/2 ml-5" />
		<p class="ml-5 italic text-gray-500">{js_status}</p>

		<p class="m-2">How well do you know CSS?</p>
		<input type="range" min="0" max="100" bind:value={css_knowledge} class="range w-1/2 ml-5" />
		<p class="ml-5 italic text-gray-500">{css_status}</p>

		<p class="m-2">How well do you know HTML?</p>
		<input type="range" min="0" max="100" bind:value={html_knowledge} class="range w-1/2 ml-5" />
		<p class="ml-5 italic text-gray-500">{html_status}</p>

		<p class="m-2">Have you used SvelteKit before?</p>
		<div class="form-control w-20 ml-5">
			<label class="label cursor-pointer">
				<span class="label-text">Yes</span>
				<input
					type="radio"
					name="radio-10"
					class="radio checked:bg-blue-500"
					value="true"
					bind:group={used_sveltekit}
				/>
			</label>
		</div>
		<div class="form-control w-20 ml-5">
			<label class="label cursor-pointer">
				<span class="label-text">No</span>
				<input
					type="radio"
					name="radio-10"
					class="radio checked:bg-red-500"
					bind:group={used_sveltekit}
					value="false"
					checked
				/>
			</label>
		</div>

		<p class="m-2">Have you used Supabase before?</p>
		<div class="form-control w-20 ml-5">
			<label class="label cursor-pointer">
				<span class="label-text">Yes</span>
				<input
					type="radio"
					name="radio-11"
					class="radio checked:bg-blue-500"
					value="true"
					bind:group={used_supabase}
				/>
			</label>
		</div>
		<div class="form-control w-20 ml-5">
			<label class="label cursor-pointer">
				<span class="label-text">No</span>
				<input
					type="radio"
					name="radio-11"
					class="radio checked:bg-red-500"
					value="false"
					bind:group={used_supabase}
					checked
				/>
			</label>
		</div>

		<p class="m-2">Have you used Tailwind CSS before?</p>
		<div class="form-control w-20 ml-5">
			<label class="label cursor-pointer">
				<span class="label-text">Yes</span>
				<input
					type="radio"
					name="radio-12"
					class="radio checked:bg-blue-500"
					value="true"
					bind:group={used_tailwind}
				/>
			</label>
		</div>
		<div class="form-control w-20 ml-5">
			<label class="label cursor-pointer">
				<span class="label-text">No</span>
				<input
					type="radio"
					name="radio-12"
					class="radio checked:bg-red-500"
					value="false"
					bind:group={used_tailwind}
				/>
			</label>
		</div>

		<h1 class="mb-3 font-display-serif text-xl font-bold tracking-wide uppercase mt-8">
			When to Meet
		</h1>

		<p class="m-2">
			Fill out the <a
				class="text-blue-500 underline"
				target="_blank"
				href="https://www.when2meet.com/?25401600-vZuls">When2Meet</a
			> to decide when 2 meet!
		</p>
		<div class="form-control w-20 ml-5">
			<label class="label cursor-pointer">
				<span class="label-text">Done!</span>
				<input
					type="checkbox"
					name="radio-12"
					class="checkbox"
					value="yes"
					bind:group={when2meet_filled_out}
				/>
			</label>
		</div>

		<button class="btn mt-10" on:click={handleSubmit}>SUBMIT</button>
	{:else}
		<h1 class="mb-3 font-display-serif text-2xl font-bold tracking-wide uppercase text-center">
			Submitted!
		</h1>
		<p>
			If you want a head start, feel free to look into the <a
				href="https://learn.svelte.dev/tutorial/welcome-to-svelte"
				class="text-blue-500">Svelte/SvelteKit Tutorial</a
			>
		</p>
	{/if}
</div>
