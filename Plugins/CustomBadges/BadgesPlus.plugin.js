/**
 * @name CustomBadges
 * @invite 37jw4DYbBb
 * @authorId 532709351887077385
 * @source https://github.com/AnyMinorDeerPanda/BetterDiscord/tree/main/Plugins/CustomBadges
 * @updateUrl https://raw.githubusercontent.com/AnyMinorDeerPanda/BetterDiscord/main/Plugins/CustomBadges/BadgesPlus.plugin.js
 */

module.exports = class CustomBadges {

	getName(){ return "Custom Badges" }
	getDescription(){ return "Allows for Custom Badges on Discord" }
	getAuthor(){ return "Xtract (エキス)" }
	getVersion(){ return "0.0.1" }

    load() {} // Optional function. Called when the plugin is loaded in to memory

    start() {} // Required function. Called when the plugin is activated (including after reloads)
    stop() {} // Required function. Called when the plugin is deactivated

    observer(changes) {} // Optional function. Observer for the `document`. Better documentation than I can provide is found here: <https://developer.mozilla.org/en-US/docs/Web/API/MutationObserver>
}
