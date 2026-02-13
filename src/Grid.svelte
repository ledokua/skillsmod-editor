<script lang="ts">
	import { getContext } from "svelte";
	import type { Writable } from "svelte/store";
	import * as editor from "./editor"
	import HStack from "./lib/HStack.svelte";
	import IntegerInput from "./lib/IntegerInput.svelte";
	import Select from "./lib/Select.svelte";
	import Spacer from "./lib/Spacer.svelte";
	import Text from "./lib/Text.svelte";

	let settings = getContext<Writable<editor.Settings>>("settings");
</script>

<div class="container">
	<HStack>
		<Text>Type:</Text>
		<Spacer />
	</HStack>
	<Select bind:value={$settings.grid.type}>
		<option value={editor.GridType.NONE}>None</option>
		<option value={editor.GridType.SQUARE}>Square</option>
		<option value={editor.GridType.HEX_FLAT}>Hex: Flat</option>
		<option value={editor.GridType.HEX_POINTY}>Hex: Pointy</option>
	</Select>
	<HStack>
		<Text>Spacing:</Text>
		<Spacer />
	</HStack>
	<IntegerInput bind:value={$settings.grid.spacing} disabled={$settings.grid.type === editor.GridType.NONE} />
	<HStack>
		<Text>Size:</Text>
		<Spacer />
	</HStack>
	<IntegerInput bind:value={$settings.grid.size} disabled={$settings.grid.type === editor.GridType.NONE} />
</div>


<style lang="scss">
	.container{
		display: grid;
		grid-template-columns: auto 1fr;
		gap: 2px 8px;
	}
</style>