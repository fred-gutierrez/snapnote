<p align="center">
  <p align="center">
   <!-- <img width="150" height="150" src="src/app/icon.png" alt="Logo"> -->
	<img width="150" height="150" src="github/snapnote-blue.png" alt="Logo">
  </p>
	<h1 align="center"><b>SnapNote</b></h1>
	<p align="center">
		Never skip a note.
    <br />
    Demo: <a href="https://snapnote-demo.vercel.app"><strong>snapnote-demo.vercel.app</strong></a>
    <br />
    <br />
    <b>Download for </b>
    <a href="https://chromewebstore.google.com/detail/snapnote/gblgefagjalfolidiedaepbkacajaeng">Google Chrome</a> |
    <a href="https://addons.mozilla.org/en-US/firefox/addon/snapnote/">Firefox</a> | 
    <a href="https://chromewebstore.google.com/detail/snapnote/gblgefagjalfolidiedaepbkacajaeng">Edge</a>
    <br />
  </p>
</p>

<br/>
SnapNote is an open-source note-taking extension created with the goals of transparency, convenience, and most importantly, <b>speed</b>.
<br/>
<br/>
Powered by the open-source block-based rich text editor <a href="https://github.com/TypeCellOS/BlockNote">BlockNote</a> and, in the future, offering <a href="https://github.com/Milkdown/milkdown">Milkdown</a> as an option.
<br/>
<br/>

<div align="center">
<img src="github/lightmode-screenshot1.png" alt="Dark Mode Screenshot" width="350" />
<img src="github/darkmode-screenshot1.png" alt="Dark Mode Screenshot" width="350" />
</div>

<h2>Motivation</h2>
<p>This project was initially created with the realization that sometimes we need to take quick notes while navigating the web. We often use apps like Notion or Obsidian, but there are instances where we may not have the option to do so or, for something <b>quick</b>, lack the time to open the app and create a new note. SnapNote is designed for us, anytime, anywhere, with it installed, to take a note <b>immediately</b> in our browser and then transfer that information to our preferred apps when possible.</p>

<h2>Architecture</h2>
<p>The current technologies used for this project include Next.js <i>(with the app router)</i>, React, TypeScript, and Tailwind CSS.</p>
<ul>
  <li>The goal is to keep the technology stack as simple as possible to ensure we maintain the core principle of speed. However, as always, the stack is subject to change and improvement.</li>
  <li>For the backend, we are considering implementing Supabase to store credentials and notes. This is part of the roadmap and will be implemented down the line. We are very open to feedback regarding this subject.</li>
</ul>

<h3>Packages</h3>
<ul>
 <li><code>blocknote/core</code> the engine containing types and elements essential for BlockNote to function.</li>
 <li><code>blocknote/react</code> the React UI component library designed for blocknote/core.</li>
</ul>

<h2>Contributing</h2>
<p>We're delighted that you're considering contributing to this project. <b>Every</b> contribution matters, whether it's documentation, refactoring, adding new ideas/components, or anything else you believe would be a valuable addition. Please refer to the <a href="CONTRIBUTING.md">contributing guide</a> for directions.</p>

## Roadmap

The roadmap can be found [here](ROADMAP.md).
