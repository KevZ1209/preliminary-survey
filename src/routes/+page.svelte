<script>
	let name = '';
	let github = '';
	let email = '';

	let git_knowledge = 40;
	let js_knowledge = 40;
	let css_knowledge = 40;
	let html_knowledge = 40;

	let git_status = '...';
	let js_status = '...';
	let css_status = '...';
	let html_status = '...';

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

	function getStatus(knowledge, statuses) {
		return statuses[Math.min(Math.floor(knowledge / 20), 4)];
	}
</script>

<div class="mx-auto p-6 max-w-xl">
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
		Github Username
		<input type="text" class="grow" placeholder="JoeBruin" bind:value={github} />
	</label>

	<h1 class="mb-3 font-display-serif text-xl font-bold tracking-wide uppercase mt-8">
		Self-Assessment
	</h1>

	<p class="m-2">How well do you know Git?</p>
	<input
		type="range"
		min="0"
		max="100"
		bind:value={git_knowledge}
		class="range w-1/2 ml-5"
		on:input={() => (git_status = getStatus(git_knowledge, git_statuses))}
	/>
	<p class="ml-5 italic text-gray-500">{git_status}</p>

	<p class="m-2">How well do you know Javascript?</p>
	<input
		type="range"
		min="0"
		max="100"
		bind:value={js_knowledge}
		class="range w-1/2 ml-5"
		on:input={() => (js_status = getStatus(js_knowledge, js_statuses))}
	/>
	<p class="ml-5 italic text-gray-500">{js_status}</p>

	<p class="m-2">How well do you know CSS?</p>
	<input
		type="range"
		min="0"
		max="100"
		bind:value={css_knowledge}
		class="range w-1/2 ml-5"
		on:input={() => (css_status = getStatus(css_knowledge, css_statuses))}
	/>
	<p class="ml-5 italic text-gray-500">{css_status}</p>

	<p class="m-2">How well do you know HTML?</p>
	<input
		type="range"
		min="0"
		max="100"
		bind:value={html_knowledge}
		class="range w-1/2 ml-5"
		on:input={() => (html_status = getStatus(html_knowledge, html_statuses))}
	/>
	<p class="ml-5 italic text-gray-500">{html_status}</p>

	<p class="m-2">Have you used SvelteKit before?</p>
	<div class="form-control w-20 ml-5">
		<label class="label cursor-pointer">
			<span class="label-text">Yes</span>
			<input type="radio" name="radio-10" class="radio checked:bg-blue-500" checked />
		</label>
	</div>
	<div class="form-control w-20 ml-5">
		<label class="label cursor-pointer">
			<span class="label-text">No</span>
			<input type="radio" name="radio-10" class="radio checked:bg-red-500" checked />
		</label>
	</div>

	<p class="m-2">Have you used Supabase before?</p>
	<div class="form-control w-20 ml-5">
		<label class="label cursor-pointer">
			<span class="label-text">Yes</span>
			<input type="radio" name="radio-11" class="radio checked:bg-blue-500" checked />
		</label>
	</div>
	<div class="form-control w-20 ml-5">
		<label class="label cursor-pointer">
			<span class="label-text">No</span>
			<input type="radio" name="radio-11" class="radio checked:bg-red-500" checked />
		</label>
	</div>

	<p class="m-2">Have you used Tailwind before?</p>
	<div class="form-control w-20 ml-5">
		<label class="label cursor-pointer">
			<span class="label-text">Yes</span>
			<input type="radio" name="radio-12" class="radio checked:bg-blue-500" checked />
		</label>
	</div>
	<div class="form-control w-20 ml-5">
		<label class="label cursor-pointer">
			<span class="label-text">No</span>
			<input type="radio" name="radio-12" class="radio checked:bg-red-500" checked />
		</label>
	</div>

	<button class="btn mt-10">SUBMIT</button>
</div>
