---
published: true
layout: default
title: All about Web Development
tags: Code, PHP, Laravel, Svelte, SvelteKit, JavaScript 
description: Web development is the art and science of creating websites and web applications that are accessible and functional on the internet. 
excerpt: Web development is the art and science of creating websites and web applications that are accessible and functional on the internet. It encompasses a wide range of skills and technologies, making it a dynamic and constantly evolving field.
created: 2023-09-30
edited: 2023-09-31
imagePath: /Code-Title.jpg
imageAlt: Code on a screen
imageDesc: Code on a screen with a coffee cup
---

  <!-- <script context="module"> -->
<script>
  // import Img from '$lib/components/Img.svelte';
  // import { width, height, format, src } from './Code-Title.jpg?w=900&format=webp&as=metadata';
  // import Code2 from'./Code2.jpg?w=300&format=webp&as=metadata';
  // import CodeTitle from './Code-Title.jpg?w=900&format=webp&as=metadata';
  // console.log('Code page',{width, height, format, src}, CodeTitle );
// import {page} from '$app/stores';
// console.log('Code page',$page.data.ArticleMeta.path );
// ?w=500;900;1200&format=avif&as=srcset
// import CodeTitle from './Code-Title.jpg';
// console.log(CodeTitle);
// console.log('Code page',{...$$restProps} );
// export absPath;
// metadata.absPath = $page.data.ArticleMeta.path.replace(/\/\+page\.md$/,'');
// console.log('Code page',import.meta.path );
 
</script>

<!-- <Img src={src}/> -->
<!-- <Img code={"./Code2.jpg"}> -->
<!-- <Img image={Code2}>
This is an image with a Laptop and a coffee cup
</Img> -->


<!-- ![Code](./Code2.jpg?w=300&format=webp&as=metadata) -->

 

Web developers use a variety of frameworks, libraries, and tools to streamline their work and build robust web applications. Some popular front-end frameworks include React, Angular, and Vue.js, while back-end development often relies on languages like Python, Ruby, PHP, and Node.js. Databases like MySQL, PostgreSQL, and MongoDB are commonly used to store and manage data.

Web development also involves considerations for security, performance optimization, and responsiveness to various devices and screen sizes, as well as compliance with web standards and accessibility guidelines to ensure inclusivity for all users.

In today's digital age, web development plays a pivotal role in shaping our online experiences, from e-commerce platforms and social media networks to informative blogs and corporate websites. It continues to evolve with new technologies and trends, making it an exciting and dynamic field for those who are passionate about creating and improving the online world we all rely on.




## HTML example

```html
<nav class="nav" role="doc-pagelist" aria-label="Page list">
  <ul>
    <li>
      <a href="#">Lorem ipsum dolor</a>
    </li>
    <li>
      <a href="#">Lorem ipsum dolor</a>
    </li>
    <li>
      <a href="#">Lorem ipsum dolor</a>
    </li>
    <li>
      <a href="#">Lorem ipsum dolor</a>
    </li>
  </ul>
</nav>
```



## PHP example

```php {1,3-5,8}
<?php

namespace App\Console;

use Illuminate\Console\Scheduling\Schedule;
use Illuminate\Foundation\Console\Kernel as ConsoleKernel;

class Kernel extends ConsoleKernel
{
    /**
     * Define the application's command schedule.
     */
    protected function schedule(Schedule $schedule): void
    {
        // $schedule->command('inspire')->hourly();
    }

    /**
     * Register the commands for the application.
     */
    protected function commands(): void
    {
        $this->load(__DIR__.'/Commands');

        require base_path('routes/console.php');
    }
}

// From https://github.com/laravel/laravel/blob/10.x/app/Console/Kernel.php
```


## JSON example

```json
{"name": "Gilbert", "wins": [["straight", "7♣"], ["one pair", "10♥"]]}
{"name": "Alexa", "wins": [["two pair", "4♠"], ["two pair", "9♠"]]}
{"name": "May", "wins": []}
{"name": "Deloise", "wins": [["three of a kind", "5♣"]]}
{
  "name": "Gilbert",
  "wins": [
    [
      "straight",
      "7♣"
    ],
    [
      "one pair",
      "10♥"
    ]
  ]
}
{
  "name": "Alexa",
  "wins": [
    [
      "two pair",
      "4♠"
    ],
    [
      "two pair",
      "9♠"
    ]
  ]
}
// From https://jsonlines.org/examples/
```


## CSS example

```css
html {
	margin: 0;
	background: black;
	height: 100%;
}

body {
	margin: 0;
	width: 100%;
	height: inherit;
}

/* the three main rows going down the page */

body > div {
  height: 25%;
}

.thumb {
	float: left;
	width: 25%;
	height: 100%;
	object-fit: cover;
}

.main {
  display: none;
}

.blowup {
  display: block;
  position: absolute;
  object-fit: contain;
  object-position: center;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 2000;
}

.darken {
  opacity: 0.4;
}

/* From https://github.com/mdn/css-examples/blob/main/object-fit-gallery/style.css */

```

## JavaScript example


```js
function resolveAfter2Seconds(x) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(x);
    }, 2000);
  });
}

// async function expression assigned to a variable
const add = async function (x) {
  const a = await resolveAfter2Seconds(20);
  const b = await resolveAfter2Seconds(30);
  return x + a + b;
};

add(10).then((v) => {
  console.log(v); // prints 60 after 4 seconds.
});

// async function expression used as an IIFE
(async function (x) {
  const p1 = resolveAfter2Seconds(20);
  const p2 = resolveAfter2Seconds(30);
  return x + (await p1) + (await p2);
})(10).then((v) => {
  console.log(v); // prints 60 after 2 seconds.
});

// From https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/async_function

```

```ts
enum LogLevel {
  ERROR,
  WARN,
  INFO,
  DEBUG,
}

/**
 * This is equivalent to:
 * type LogLevelStrings = 'ERROR' | 'WARN' | 'INFO' | 'DEBUG';
 */
type LogLevelStrings = keyof typeof LogLevel;

function printImportant(key: LogLevelStrings, message: string) {
  const num = LogLevel[key];
  if (num <= LogLevel.WARN) {
    console.log("Log level key is:", key);
    console.log("Log level value is:", num);
    console.log("Log level message is:", message);
  }
}
printImportant("ERROR", "This is a message");

// From https://www.typescriptlang.org/docs/handbook/enums.html

```
