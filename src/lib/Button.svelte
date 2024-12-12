<button on:click>
	<slot />
</button>

<style lang="scss">
	button {
		flex: 1 auto;
		color: inherit;
		background-color: var(--button-background-color);
		border: 1px solid var(--button-border-color);
		border-radius: 4px;
		padding: 3px;
		outline: 0;
		font-size: 0;
		overflow: hidden;
		cursor: pointer;
	}
</style>