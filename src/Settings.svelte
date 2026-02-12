<script lang="ts">
	import * as editor from "./editor";
	import HStack from "./lib/HStack.svelte";
	import Spacer from "./lib/Spacer.svelte";
	import Text from "./lib/Text.svelte";
	import type { Writable } from "svelte/store";
	import { getContext } from "svelte";
	import Select from "./lib/Select.svelte";
	import { PreferredTheme } from "./theme";
	import Checkbox from "./lib/Checkbox.svelte";
	import Divider from "./lib/Divider.svelte";

	let settings = getContext<Writable<editor.Settings>>("settings");

</script>

<div class="theme-container">
	<HStack>
		<Text>Theme:</Text>
		<Spacer />
	</HStack>
	<Select bind:value={$settings.theme}>
		<option value={PreferredTheme.AUTOMATIC}>Automatic</option>
		<option value={PreferredTheme.LIGHT}>Light</option>
		<option value={PreferredTheme.DARK}>Dark</option>
	</Select>
</div>
<Divider />
<div class="option-container">
	<HStack>
		<Text>Show normal connections:</Text>
		<Spacer />
	</HStack>
	<Checkbox bind:checked={$settings.visibility.normal} />
	<HStack>
		<Text>Show exclusive connections:</Text>
		<Spacer />
	</HStack>
	<Checkbox bind:checked={$settings.visibility.exclusive} />
	<HStack>
		<Text>Render highlighted lines ontop:</Text>
		<Spacer />
	</HStack>
	<Checkbox bind:checked={$settings.renderHighlightedOnTop} />
</div>

<style lang="scss">
	.theme-container{
		display: grid;
		grid-template-columns: auto 1fr;
		gap: 2px 8px;
	}
	.option-container{
		display: grid;
		grid-template-columns: auto 20px;
		grid-template-rows: 20px;
		gap: 2px;
	}
</style>