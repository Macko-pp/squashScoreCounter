<script>

	import Counter from "../lib/Counter/+page.svelte"

</script>

<section class="grid grid-cols-5 grid-rows-3">

	<div class="avatar col-start-2 col-end-3 row-start-3">
	  	<div class=" w-20 rounded-lg">
			<img src="/Player 1.png " alt="stock avatar"/>
	  	</div>
	</div>
	<div class="row-start-4 col-start-2 flex justify-center">
		<p class="">Player 1</p>
	</div>
	
	<div class="avatar col-start-4 row-start-4 row-end-3">
		<div class=" w-20 rounded-lg">
			<img src="/Player 2.png " alt="stock avatar"/>
		</div>
	</div>
	<div class="row-start-4 col-start-4 flex justify-center">
		<p class="">Player 2</p>
	</div>

	
</section>

<div class="Counter">
	<Counter />
</div>

<style>

	.Counter {
		margin-top: 80px;
	}

</style>