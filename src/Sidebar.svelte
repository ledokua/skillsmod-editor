<script lang="ts">
	import Definitions from "./Definitions.svelte";
	import Grid from "./Grid.svelte";
	import Project from "./Project.svelte";
	import Text from "./lib/Text.svelte";
	import HStack from "./lib/HStack.svelte";
	import Spacer from "./lib/Spacer.svelte";
	import VStack from "./lib/VStack.svelte";
	import Connections from "./Connections.svelte";
	import Settings from "./Settings.svelte";

	let sidebarElement: HTMLDivElement;
	let dragStartX: number | null = null;

	function mouseDown(event: MouseEvent) {
		dragStartX = event.screenX - sidebarElement.offsetWidth;
		event.preventDefault();
	}
	function mouseUp(event: MouseEvent) {
		dragStartX = null;
	}
	function mouseMove(event: MouseEvent) {
		if (dragStartX !== null) {
			sidebarElement.style.width = `${event.screenX - dragStartX}px`;
		}
	}
</script>

<div class="sidebar" bind:this={sidebarElement}>
	<div class="content">
		<fieldset>
			<legend>Project</legend>
			<Project />
		</fieldset>
		<fieldset>
			<legend>Grid</legend>
			<Grid />
		</fieldset>
		<fieldset>
			<legend>Connections</legend>
			<Connections />
		</fieldset>
		<fieldset>
			<legend>Definitions</legend>
			<Definitions />
		</fieldset>
		<fieldset>
			<legend>Settings</legend>
			<Settings />
		</fieldset>
		<fieldset>
			<legend>Instructions</legend>
			<VStack>
				<HStack>
					<Text><kbd><kbd>Left-Click</kbd></kbd> - Move skill.</Text>
					<Spacer />
				</HStack>
				<HStack>
					<Text><kbd><kbd>Middle-Click</kbd></kbd> - Pan view, add or delete connection.</Text>
					<Spacer />
				</HStack>
				<HStack>
					<Text><kbd><kbd>Right-Click</kbd></kbd> - Add or edit or delete skill.</Text>
					<Spacer />
				</HStack>
				<HStack>
					<Text><kbd><kbd>Scroll</kbd></kbd> - Zoom view.</Text>
					<Spacer />
				</HStack>
				<HStack>
					<Text><kbd><kbd>A</kbd></kbd> - Add skill.</Text>
					<Spacer />
				</HStack>
				<HStack>
					<Text><kbd><kbd>T</kbd></kbd> - Add or edit or delete skill.</Text>
					<Spacer />
				</HStack>
				<HStack>
					<Text><kbd><kbd>C</kbd></kbd> - Add or delete connection.</Text>
					<Spacer />
				</HStack>
				<HStack>
					<Text><kbd><kbd>E</kbd></kbd> - Edit skill.</Text>
					<Spacer />
				</HStack>
				<HStack>
					<Text><kbd><kbd>Shift</kbd> + <kbd>E</kbd></kbd> - Edit selected skills.</Text>
					<Spacer />
				</HStack>
				<HStack>
					<Text><kbd><kbd>D</kbd></kbd> - Delete skill.</Text>
					<Spacer />
				</HStack>
				<HStack>
					<Text><kbd><kbd>Shift</kbd> + <kbd>D</kbd></kbd> - Delete selected skills.</Text>
					<Spacer />
				</HStack>
				<HStack>
					<Text><kbd><kbd>R</kbd></kbd> - Set or unset root for skill.</Text>
					<Spacer />
				</HStack>
				<HStack>
					<Text><kbd><kbd>Shift</kbd> + <kbd>R</kbd></kbd> - Set or unset root for selected skills.</Text>
					<Spacer />
				</HStack>
				<HStack>
					<Text><kbd><kbd>X</kbd></kbd> - Delete all connections for skill.</Text>
					<Spacer />
				</HStack>
				<HStack>
					<Text><kbd><kbd>Shift</kbd> + <kbd>X</kbd></kbd> - Delete all connections for selected skills.</Text>
					<Spacer />
				</HStack>
			</VStack>
		</fieldset>
	</div>
	<!-- svelte-ignore a11y-no-static-element-interactions -->
	<div class="handle" on:mousedown={mouseDown}></div>
</div>

<svelte:window on:mouseup={mouseUp} on:mousemove={mouseMove}/>

<style lang="scss">
	.sidebar {
		position: absolute;
		top: 0;
		left: 0;
		height: 100%;
		display: flex;
		flex-direction: row;
		justify-content: stretch;
		width: 340px;
		min-width: 340px;
		max-width: 50vw;

		.content {
			flex: 1;
			background-color: var(--sidebar-background-color);
			border-right: 1px solid var(--sidebar-border-color);
			padding: 4px;
			overflow-y: auto;
		}
		.handle {
			width: 8px;
			cursor: ew-resize;
		}
	}
	fieldset{
		margin: 0;
		padding: 4px;
		border: 1px solid var(--separator-color);;
		margin: 4px 0;
	}
	legend {
		font-size: 16px;
	}
	kbd {
		display: inline;
		white-space: nowrap;
		display: inline-block;
		line-height: 1;
		margin: 0.5px;
	}
	kbd > kbd {
		border-radius: 4px;
		padding: 1px;
		background-color: var(--keybinding-background-color);
		border: 1px solid var(--keybinding-border-color);
	}
</style>