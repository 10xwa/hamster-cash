<header>
	<h1>
		<slot>Hamster Cash</slot>
	</h1>
	<slot name="end" />
</header>

<style>
	header {
		display: flex;
		position: sticky;
		left: 0;
		justify-content: space-between;
		align-items: center;
		background-color: var(--background-color);
		border-bottom: 1px solid var(--border-color);
		border-radius: 0 0 1rem 1rem;
	}

	h1 {
		margin: 0.9rem 0 0.3rem 0;
		padding: 0 1rem;
	}
</style>
