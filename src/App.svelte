<script lang="ts">
  import { onMount } from "svelte";
  import { tint } from "../tint";

  let customColor = "#1e90ff"; // Same as BASE_PRIMARY_COLOR

  const fetchCustomColor = () => {
    return new Promise<string>((resolve) => {
      setTimeout(() => {
        resolve("#7aba26");
      }, 2000);
    });
  };

  onMount(async () => {
    customColor = await fetchCustomColor();
  });
</script>

<main
  class="space-y-8"
  style={`
    --colors-custom-100: ${tint(customColor, "brighten", 2)};
    --colors-custom-200: ${tint(customColor, "brighten", 1.75)};
    --colors-custom-300: ${tint(customColor, "brighten", 1.5)};
    --colors-custom-400: ${tint(customColor, "brighten", 1.25)};
    --colors-custom-500: ${tint(customColor, "brighten")};
    --colors-custom-600: ${customColor};
    --colors-custom-700: ${tint(customColor, "darken")};
    --colors-custom-800: ${tint(customColor, "darken", 1.5)};
    --colors-custom-900: ${tint(customColor, "darken", 2)};
  `}
>
  <div class="space-x-8 p-8 flex justify-center">
    <div class="rounded rotate-45 bg-primary-100 w-12 h-12" />
    <div class="rounded rotate-45 bg-primary-200 w-12 h-12" />
    <div class="rounded rotate-45 bg-primary-300 w-12 h-12" />
    <div class="rounded rotate-45 bg-primary-400 w-12 h-12" />
    <div class="rounded rotate-45 bg-primary-500 w-12 h-12" />
    <div class="rounded rotate-45 bg-primary-600 w-12 h-12" />
    <div class="rounded rotate-45 bg-primary-700 w-12 h-12" />
    <div class="rounded rotate-45 bg-primary-800 w-12 h-12" />
    <div class="rounded rotate-45 bg-primary-900 w-12 h-12" />
  </div>
  <div class="space-x-8 p-8 flex justify-center">
    <div class="rounded rotate-45 bg-custom-100 w-12 h-12" />
    <div class="rounded rotate-45 bg-custom-200 w-12 h-12" />
    <div class="rounded rotate-45 bg-custom-300 w-12 h-12" />
    <div class="rounded rotate-45 bg-custom-400 w-12 h-12" />
    <div class="rounded rotate-45 bg-custom-500 w-12 h-12" />
    <div class="rounded rotate-45 bg-custom-600 w-12 h-12" />
    <div class="rounded rotate-45 bg-custom-700 w-12 h-12" />
    <div class="rounded rotate-45 bg-custom-800 w-12 h-12" />
    <div class="rounded rotate-45 bg-custom-900 w-12 h-12" />
  </div>
</main>
