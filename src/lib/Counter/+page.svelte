<script lang="ts">
	let score1: number = 0;
	let score2: number = 0;

	function score1plus() {
		score1++;
	}
	function score1minus() {
		score1-=1;
	}
	
	function score2plus() {
		score2++;
	}
	function score2minus() {
		score2-=1;
	}

	// $: lineRead = `${score1} a ${score2}`;

	// function scoreReader() {
	// 	if ("speechSynthesis" in window) {
	// 		let msg = new SpeechSynthesisUtterance(lineRead);
	// 		msg.lang = "es-ES"
	// 		console.table(speechSynthesis.getVoices())
	// 		msg.rate = 0.8
	// 		speechSynthesis.speak(msg);
	// 	}
	// }

	function sleep(timeout: number) {
		setTimeout(() => {
			
		}, timeout);
	}

	function scoreReader() {

		const audio1 = new Audio(`/audio/${score1}.mp3`)
		const audioA = new Audio(`/audio/a.mp3`)
		const audio2 = new Audio(`/audio/${score2}.mp3`)


		setTimeout(() => {
    		audio1.play()

			setTimeout(() => {
    			audioA.play()

				setTimeout(() => {
    				audio2.play()
				}, 500);

			}, 500);
			
		}, 500);
	}

</script>

<div class="flex justify-center">

	<div class="changer p1">
		<button class="plus" on:click={score1plus} on:click={scoreReader}>+</button>
		<button class="minus" on:click={score1minus} on:click={scoreReader}>-</button>
	</div>
	
	<div class="flex h-full mt-5">
		<score class="score p1">{score1}</score>
		<divider class="px-2">-</divider>
		<score class="score p2">{score2}</score>
	</div>

	<div class="changer p2">
		<button class="plus" on:click={score2plus} on:click={scoreReader}>+</button>
		<button class="minus" on:click={score2minus} on:click={scoreReader}>-</button>
	</div>
	
</div>

<style>

.plus {
	@apply bg-green-500 pt-2 px-2 rounded-t-md
}

.minus {
	@apply bg-green-500 pb-2 px-2 rounded-b-md
}

.changer {
	@apply flex flex-col text-white
}

.changer button:active {
	@apply bg-green-600 shadow-inner;
}

.score {
	@apply px-2 bg-slate-200
}

</style>