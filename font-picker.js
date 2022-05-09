(function ($) {
	$.fn.initFontPicker = function (options) {
		const fontPickerInput = $(this);

		// Validate That options.googleFonts exists and import them
		if (!options.googleFonts) {
			console.error("FontPicker -- googleFonts is a required options field");
			return;
		}

		// Import Fonts
		let styleTagString = `<style id="font-imports">`;
		for (let i = 0; i < options.googleFonts.length; i++) {
			styleTagString += `@import url(https://fonts.googleapis.com/css?family=${options.googleFonts[i].replaceAll(" ", "+")});`;
		}
		styleTagString += `</style>`;
		$(styleTagString).appendTo("head");

		// Wrap Input In Div
		$(this).wrap("<div class='font-picker-container'></div>");

		// Create and Append Font Picker
		$(".font-picker-container").append("<div class='font-picker-display-value'>-- Select A Font --</div>");
		$(".font-picker-container").append("<div class='font-picker-options' style='display: none;'></div>");
		for (let i = 0; i < options.googleFonts.length; i++) {
			$(".font-picker-options").append(`<div class='font-picker-option' data-attribute-value='${options.googleFonts[i]}' style='font-family: ${options.googleFonts[i]}'>${options.googleFonts[i]}</div>`);
		}

		// Close font picker options on click anywhere
		$(document).on("click", function (e) {
			const pickerOptions = document.getElementsByClassName("font-picker-container")[0];

			if (!pickerOptions.contains(e.target)) {
				$(".font-picker-options").hide();
			}
		});

		// Set Click Listener to display options
		$(".font-picker-display-value").on("mousedown", function (e) {
			$(".font-picker-options").show();
		});

		// Set Event Listener to change value of dropdown
		$(".font-picker-option").on("click", function () {
			const newFontValue = $(this).attr("data-attribute-value");

			// Set Input Value
			fontPickerInput.val(newFontValue).trigger("change");

			// Switch Display Font and Value
			$(".font-picker-display-value").html(newFontValue).attr("style", `font-family: '${newFontValue}'`);

			// Close Font Picker
			$(".font-picker-options").hide();
		});
	};
})(jQuery);
