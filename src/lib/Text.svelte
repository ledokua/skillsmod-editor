<div>
	<span>
		<slot />
	</span>
</div>

<style lang="scss">
	div {
		flex: 1 auto;
		font-size: 16px;
		display: flex;
		justify-content: center;
		align-items: center;
		overflow: hidden;
	}
	span {
		text-overflow: ellipsis;
		overflow: hidden;
	}
</style>