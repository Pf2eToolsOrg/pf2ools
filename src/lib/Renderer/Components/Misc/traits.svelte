<script>
	export let traits = [];
	export let classes;
	export let traitClasses;
	export let options = {};

	function type(trait) {
		switch (trait) {
			case "unique":
			case "rare":
			case "uncommon":
				return trait;
			case "small":
			case "medium":
			case "large":
			case "huge":
			case "gargantuan":
				return "size";
			default:
				return "";
		}
	}

	$: if (traits)
		traits = traits
			.filter((x) => x.toLowerCase() !== "common")
			.sort((a, b) => {
				const order = {
					rare: 0,
					uncommon: 0,
					unique: 0,
					alignment: 1,
					size: 2,
					settlement: 3,
				};

				const aType = type(a);
				const bType = type(b);

				if (aType === bType) {
					return a.localeCompare(b);
				}

				const aOrder = order[aType] !== undefined ? order[aType] : Object.keys(order).length;
				const bOrder = order[bType] !== undefined ? order[bType] : Object.keys(order).length;

				return aOrder - bOrder;
			});
</script>

<div class="traits {classes}">
	{#each traits as trait}
		{#if options.doNotTagTraits}
			<span class="unstyled trait notag">
				{trait}
			</span>
		{:else}
			<a class="unstyled trait {traitClasses} {type(trait)}" href={"/traits#" + trait}>
				{trait}
			</a>
		{/if}
	{/each}
</div>

<style lang="scss">
	div.traits {
		.trait.size + .size {
			border-left-width: 0;
			text-decoration: none;
			&::after {
				color: white !important;
				content: "/";
				position: relative;
				font-size: 1.5em;
				top: 0.05rem;
				left: -3rem;
				:global(html.dark) & {
					color: #dedada !important;
				}
			}
		}

		& .trait {
			margin: 0;
			padding: 0.3rem 1rem 0.2rem;
			min-width: 5em;
			color: white;
			font-family: "good-pro-condensed", sans-serif;
			font-size: 0.75em;
			font-weight: 700;
			text-align: center;
			text-transform: uppercase;
			background: #5e0000;
			border: 0.12em solid #d9c484;

			&:first-of-type + .trait.size {
				border-right-width: 0;
			}

			&:first-child {
				border-left-width: 0.33em;
			}

			&:last-child {
				border-right-width: 0.33em;
			}

			&:hover:not(.notag) {
				color: yellow;
			}

			&.unique {
				background: #54166e;
			}

			&.rare {
				background: #002664;
			}

			&.uncommon {
				background: #98513d;
			}

			&.alignment {
				background: #576293;
				min-width: 2em;
			}

			&.size {
				background: #3b7b59;
			}

			&.settlement {
				background: #004416;
			}

			:global(html.dark) & {
				color: #dedada;
				background: #472c2c;
				border-color: #c99d51;

				&:hover:not(.notag) {
					color: gold;
				}

				&.alignment {
					background: #4c505e;
				}

				&.size {
					background: #334f40;
				}

				&.settlement {
					background: #263d2d;
				}

				&.uncommon {
					background: #664e47;
				}

				&.rare {
					background: #29364a;
				}

				&.unique {
					background: #44354a;
				}
			}
		}
	}
</style>
