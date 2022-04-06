<!-- PROJECT LOGO -->
<br />
<p align="center">
  <a href="https://github.com/toinelin/react-locomotive-scroll">
    <img src="https://user-images.githubusercontent.com/4596862/58807621-67aeec00-85e6-11e9-8e3a-3fe4123ee76c.png" alt="Logo" width="80" height="80">
    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/70/Svelte.png/640px-Svelte.png" alt="Logo" height="60">
  </a>

  <h3 align="center">Svelte Locomotive Scroll</h3>

  <p align="center">
    A locomotive-scroll wrapper for Svelte
    <br />
    <a href="https://github.com/locomotivemtl/locomotive-scroll"><strong>Explore Locomotive Scroll docs »</strong></a>
    <br />
    <br />
    <!-- <a href="https://github.com/toinelin/react-locomotive-scroll">View Demo</a>
    · -->
    <a href="https://github.com/toinelin/react-locomotive-scroll/issues">Report Bug</a>
    ·
    <a href="https://github.com/toinelin/react-locomotive-scroll/issues">Request Feature</a>
  </p>
</p>



<!-- TABLE OF CONTENTS -->
<summary><h2 style="display: inline-block">Table of Contents</h2></summary>
<ol>
  <li>
    <a href="#getting-started">Getting Started</a>
    <ul>
      <li><a href="#prerequisites">Prerequisites</a></li>
      <li><a href="#installation">Installation</a></li>
    </ul>
  </li>
  <li><a href="#usage">Usage</a></li>
  <li><a href="#usage">Specific cases</a></li>
  <li><a href="#contributing">Contributing</a></li>
  <li><a href="#license">License</a></li>
  <li><a href="#contact">Contact</a></li>
  <li><a href="#acknowledgements">Acknowledgements</a></li>
</ol>

## Getting Started

To get a local copy up and running follow these simple steps.

### Installation

```sh
$ npm install locomotive-scroll svelte-locomotive-scroll
```

or using [Yarn](https://yarnpkg.com/)

```sh
$ yarn add locomotive-scroll svelte-locomotive-scroll
```



<!-- USAGE EXAMPLES -->
## Usage

### 1. Import the provider
```js
import LocomotiveScrollProvider from 'svelte-locomotive-scroll'
```

### 2. Wrap your application using the provider
```js

<LocomotiveScrollProvider
  options={
    {
      smooth: true,
      // ... all available Locomotive Scroll instance options 
    }
  }
  watch={
    [
      //..all the dependencies you want to watch to update the scroll.
      //  Basicaly, you would want to watch page/location changes
      //  I.e. in Sveltekit you would want to watch properties like `$page` imported from '$app/stores' (you may want to add more criterias if the instance should be update on locations with query parameters)
    ]
  }
>
    {/* ...your app */}
</LocomotiveScrollProvider>
```

### 3. Wrap your pages using `data-scroll-section` to prevent weird behaviours

```js
    <div data-scroll-section>
      {/* ...your page */}
    </div>
```

From the Locomotive Scroll doc : `Defines a scrollable section. Splitting your page into sections may improve performance.`
You may want to use `data-scroll-section` on each page which may be wrapped by `LocomotiveScrollProvider`

### 4. Add the base styles to your CSS file.

[`locomotive-scroll.css`](https://github.com/locomotivemtl/locomotive-scroll/blob/master/dist/locomotive-scroll.css)

### 5. Get the scroll instance through all your components
```js
//Get the context with the key of 'locomotiveScroll'
const { getScroll } = getContext('locomotiveScroll');

//call the function getScroll to get the actual Scroll Instance provided by the Wrapper
const scrollInstance = getScroll();

  // ... your component
}
```

Now you should be able to utilize the ful functionality of the scroll object.

For more examples and how to use Locomotive Scroll, please refer to their [Documentation](https://github.com/locomotivemtl/locomotive-scroll)

## Specific cases

### 1. Apply code to the location update only

If you want to write some code applied only when the location changes but not when the rest of your dependencies added to the `watch` list change, there's an option:

First, remove the location props from the `watch` dependencies list and add it to the `location` props.

> `svelte-locomotive-scroll` will update the scroll instance as it should, but apply different dependencies

```js
const { pathname } = useLocation() // With react-router
const { asPath } = useRouter() // With next/router

<LocomotiveScrollProvider
  options={
    {
      smooth: true,
      // ... all available Locomotive Scroll instance options 
    }
  }
  watch={
    [
      //...all the dependencies you want to watch to update the scroll EXCEPT the location one
    ]
  }
  location={$page.url}
  onLocationChange={(scroll) => scroll.scrollTo(0, { duration: 2, disableLerp: false })} // If you want to reset the scroll position to 0 for example
>
  {/* ...your app */}
</LocomotiveScrollProvider>
```

<!-- CONTRIBUTING -->
## Contributing

Contributions are what make the open source community such an amazing place to be learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request



<!-- LICENSE -->
## License

Distributed under the MIT License. See `LICENSE` for more information.



<!-- CONTACT -->
## Contact

Jason Thompson - jasonxandrewth@gmail.com

Project Link: [https://github.com/jasonandrewth/svelte-locomotive-scroll](https://github.com/jasonandrewth/svelte-locomotive-scroll)



<!-- ACKNOWLEDGEMENTS -->
## Acknowledgements

* [react-locomotive-scroll](https://github.com/toinelin/react-locomotive-scroll)
* []()
* []()

_Please feel free to open a pull request to add your project to the list!_

