<script >import { onMount, onDestroy, setContext, getContext } from 'svelte';
import imagesLoaded from 'imagesloaded';
import debounce from 'lodash.debounce';
//Props
export let watch;
export let location;
export let onLocationChange;
export let options;
export let imageTarget;
//The Scroll Instace
let scrollInstance;
setContext('locomotiveScroll', {
    getScroll: () => scrollInstance
});
//The Wrapper element
let viewport;
let h;
let w;
const preloadImages = (selector) => {
    if (document) {
        return new Promise((resolve) => {
            imagesLoaded(document.querySelectorAll(selector), { background: true }, resolve);
        });
    }
};
const locationChange = () => {
    if (!scrollInstance || !location) {
        return;
    }
    if (scrollInstance) {
        Promise.all([preloadImages((imageTarget = 'img'))]).then(() => {
            scrollInstance.update();
        });
        // scrollElement.update();
    }
    if (onLocationChange && scrollInstance) {
        onLocationChange(scrollInstance);
    }
};
const basicChange = debounce((e) => {
    // console.log('change');
    if (scrollInstance) {
        Promise.all([preloadImages((imageTarget = 'img'))]).then(() => {
            scrollInstance.update();
        });
    }
}, 300);
// const basicChange = () => {
// 	// console.log('change');
// 	if (scrollInstance) {
// 		Promise.all([preloadImages((imageTarget = 'img'))]).then(() => {
// 			scrollInstance.update();
// 		});
// 	}
// };
$: watch || w || h, basicChange();
$: location, locationChange();
if (!watch) {
    console.warn('svelte-locomotive-scroll: you did not add any props to watch. Scroll may have weird behaviours should the instance not be updated on i.e. route changes');
}
onMount(async () => {
    const module = await import('locomotive-scroll');
    const LocomotiveScroll = module.default;
    scrollInstance = new LocomotiveScroll({
        el: viewport,
        ...options
    });
    Promise.all([preloadImages('img')]).then(() => {
        scrollInstance.update();
        window.addEventListener('resize', () => {
            scrollInstance.update();
        });
    });
});
onDestroy(() => {
    scrollInstance?.destroy();
});
</script>

<div bind:this={viewport} bind:offsetHeight={h} bind:offsetWidth={w} data-scroll-container>
	{#if scrollInstance}
		<slot />
	{/if}
</div>
