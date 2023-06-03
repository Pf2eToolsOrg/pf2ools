import { modalStore } from "@skeletonlabs/skeleton";
import DataManager from "./DataManager.svelte";

export { JSON as default };
const JSON = [
	{
		label: "Home",
		href: "/",
		icon: "faHome",
	},
	{
		label: "Rules",
		icon: "faBook",
		offline: true,
		pages: [
			{
				label: "Quick Reference",
				href: "/quickref",
				icon: "faBookBookmark",
			},
			{
				label: "Variant Rules & Subsystems",
				href: "/variantrules",
				icon: "faClipboardQuestion",
			},
			{
				label: "Tables",
				href: "/tables",
				icon: "faTable",
			},
		],
	},
	{
		label: "Player",
		icon: "faUser",
		pages: [
			{
				label: "Ancestries",
				href: "/ancestries",
				icon: "faUsers",
			},
			{
				label: "Backgrounds",
				href: "/backgrounds",
				icon: "faPersonCircleQuestion",
				offline: true,
			},
			{
				label: "Classes",
				href: "/classes",
				icon: "faHatWizard",
				offline: true,
			},
			{
				label: "Feats",
				href: "/feats",
				icon: "faAward",
				offline: true,
			},
			{
				type: "divider",
				offline: true,
			},
			{
				label: "Archetypes",
				href: "/archetypes",
				icon: "faPersonCirclePlus",
				offline: true,
			},
			{
				label: "Companions & Familiars",
				href: "/companionsfamiliars",
				icon: ["faPaw", "faCat", "faCrow", "faDove", "faFrog", "faSpider", "faDog", "faHorse", "faOtter"],
				offline: true,
			},
			{
				label: "Optional Features",
				href: "/optionalfeatures",
				icon: "faSquarePlus",
				offline: true,
			},
		],
	},
	{
		label: "Game Master",
		icon: "faDiceD20",
		offline: true,
		pages: [
			{
				label: "GM Screen",
				href: "/gmscreen",
				icon: "faBookOpenReader",
			},
			{
				type: "divider",
			},
			{
				label: "Events",
				href: "/events",
				icon: "faCloudShowersHeavy",
			},
			{
				label: "Hazards",
				href: "/hazards",
				icon: "faTriangleExclamation",
			},
			{
				label: "Relic Gifts",
				href: "/relicgifts",
				icon: "faWandSparkles",
			},
		],
	},
	{
		label: "References",
		icon: "faAsterisk",
		offline: true,
		pages: [
			{
				label: "Actions",
				href: "/actions",
				icon: "<span class='font-action' data-symbol='1' />",
			},
			{
				label: "Bestiary",
				href: "/bestiary",
				icon: "faDragon",
			},
			{
				label: "Items",
				href: "/items",
				icon: "faShieldHalved",
			},
			{
				label: "Spells",
				href: "/spells",
				icon: "faWandMagicSparkles",
			},
			{
				type: "divider",
			},
			{
				label: "Afflictions",
				href: "/afflictions",
				icon: "faDisease",
			},
			{
				label: "Rituals",
				href: "/rituals",
				icon: "faHandSparkles",
			},
			{
				label: "Vehicles",
				href: "/vehicles",
				icon: "faSailboat",
			},
			{
				type: "divider",
			},
			{
				label: "Deities",
				href: "/deities",
				icon: "faStar",
			},
			{
				label: "Languages",
				href: "/languages",
				icon: "faLanguage",
			},
			{
				label: "Planes & Places",
				href: "/places",
				icon: "faLocationDot",
			},
			{
				label: "Organizations",
				href: "/organizations",
				icon: "faBuildingUser",
			},
			{
				type: "divider",
			},
			{
				label: "Creature Abilities",
				href: "/abilities",
				icon: "faFire",
			},
			{
				label: "Creature Templates",
				href: "/creaturetemplates",
				icon: "faCopy",
			},
			{
				label: "Traits",
				href: "/traits",
				icon: "faCommentDots",
			},
		],
	},
	{
		label: "Utilities",
		icon: "faBars",
		pages: [
			{
				label: "Data Management",
				icon: "faDatabase",
				func: () =>
					modalStore.trigger({
						type: "component",
						component: {
							ref: DataManager,
						},
					}),
			},
			{
				type: "divider",
			},
			{
				label: "Search",
				href: "/search",
				icon: "faMagnifyingGlass",
				offline: true,
			},
			{
				type: "divider",
				offline: true,
			},
			{
				label: "Renderer Demo",
				href: "/renderer",
				icon: "faTextHeight",
			},
			{
				type: "divider",
				offline: true,
			},
			{
				label: "Changelog",
				href: "/changelog",
				icon: "faCodeMerge",
				offline: true,
			},
			{
				type: "divider",
			},
			{
				label: "Licenses",
				href: "/licenses",
				icon: "faFileSignature",
			},
		],
	},
];
