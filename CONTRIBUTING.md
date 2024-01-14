<h1>Welcome to SnapNote Contributing!</h1>

First off, thanks for taking the time to contribute!

All types of contributions are encouraged and valued. See the [Table of Contents](#table-of-contents) for different ways to help and details about how this project handles them. Please make sure to read the relevant section before making your contribution. It will make it a lot easier for us maintainers and smooth out the experience for all involved.

> And if you like the project, but just don't have time to contribute, that's fine. There are other easy ways to support the project and show your appreciation, which we would also be very happy about:
> - Star the project
> - Tweet about it
> - Refer this project in your project's readme
> - Mention the project at local meetups and tell your friends/colleagues

## Table of Contents

- [Code of Conduct](#code-of-conduct)
- [I Have a Question](#i-have-a-question)
- [New Contributor Guide](#new-contributor-guide)
- [I Want To Contribute](#i-want-to-contribute)
  - [Reporting Bugs](#reporting-bugs)
  - [Suggesting Enhancements](#suggesting-enhancements)
- [Project's Architecture](#projects-architecture)

## Code of Conduct
This project and everyone participating in it is governed by the [SnapNote Code of Conduct](CODE_OF_CONDUCT.md). 
By participating, you are expected to uphold this code. Please report unacceptable behavior to <fredsg222@gmail.com>.

## I Have a Question

Before posing a question, thoroughly review the [Documentation](https://github.com/fred-gutierrez/SnapNote/blob/main/README.md) and explore existing [Issues](https://github.com/fred-gutierrez/SnapNote/issues) for potential solutions. Should your query persist:

- Open a detailed [Issue](https://github.com/fred-gutierrez/SnapNote/issues/new).
- Provide extensive context regarding the encountered issue.
- Include relevant project and platform versions (nodejs, npm, etc).

Your concerns will be promptly addressed by our team, ensuring a smooth resolution process.

## New Contributor Guide

To familiarize yourself with the project, please read the [README](README.md). Here are some resources to help you get started with open-source contributions:

- [Setting up Git](https://docs.github.com/en/get-started/quickstart/set-up-git)
- [GitHub flow](https://docs.github.com/en/get-started/quickstart/github-flow)
- [Finding ways to contribute to open-source on GitHub](https://docs.github.com/en/get-started/exploring-projects-on-github/finding-ways-to-contribute-to-open-source-on-github)
- [Collaborating with pull requests](https://docs.github.com/en/github/collaborating-with-pull-requests)

## I Want To Contribute

### Reporting Bugs

#### Before Submitting a Bug Report

Aim for a comprehensive bug report to expedite the resolution process:

- Ensure you are using the latest version.
- Verify if it's a bug, not an environmental issue ([refer to documentation](https://github.com/fred-gutierrez/SnapNote/blob/main/README.md)).
- Check the [bug tracker](https://github.com/fred-gutierrez/SnapNote/issues/) for existing reports.
- Gather bug details: stack trace, OS, platform, version, input/output, and reproduction steps with older versions.

#### How Do I Submit a Good Bug Report?

> You must never report security related issues, vulnerabilities or bugs including sensitive information to the issue tracker, or elsewhere in public. Instead sensitive bugs must be sent by email to <fredsg222@gmail.com>.

We use GitHub issues to track bugs and errors. If you run into an issue with the project:

- Open an [Issue](https://github.com/fred-gutierrez/SnapNote/issues/new).
- Detail expected vs. actual behavior, provide context, and share reproduction steps.
- Include collected information.

Once it's filed:

- The team labels the issue.
- Reproduction attempts are made.
- If reproducible, marked `needs-fix` for resolution.

### Suggesting Enhancements

This section guides you through submitting an enhancement suggestion for SnapNote, **including completely new features and minor improvements to existing functionality**. Following these guidelines will help maintainers and the community to understand your suggestion and find related suggestions.

#### Before Submitting an Enhancement

- Ensure you're on the latest version.
- Thoroughly review [documentation](README.md).
- Check existing suggestions [here](https://github.com/fred-gutierrez/SnapNote/issues/).
- Confirm alignment with the project's scope.

#### How Do I Submit a Good Enhancement Suggestion?

Enhancement suggestions are tracked as [GitHub issues](https://github.com/fred-gutierrez/SnapNote/issues/).

- Use a clear, descriptive title.
- Provide a detailed step-by-step description.
- Explain current and expected behavior.
- Optionally include screenshots or GIFs.
- Justify the enhancement's utility for most users.

## Project's Architecture

SnapNote is made with **CRXJS**, **React**, **TypeScript**, **Tailwind CSS**, **Redux**, **Font Awesome**, and **Vite**. We aim to keep the code concise and consistent, allowing contributors to feel comfortable implementing bug fixes or enhancements.

The first guideline, highly encouraged for **any** code added to SnapNote, is always to leave comments about your code at any step you find viable. This can help others understand the code better at a first glance.

Tech Stack Specific:

- **CRXJS**: No rules here, but it is highly encouraged to use its main functionality, which helps test SnapNote as an extension in Google Chrome (or Chromium). To add SnapNote dev build as an extension, follow the guide at https://crxjs.dev/vite-plugin/getting-started/react/dev-basics.
- **React**:
    *  In this project, we solely use Functional Programming, but it is required to do it with variables `const example = () => {}` rather than functions `function example() {}`. This is to take advantage of hoisting, making the code more concise.
- **TypeScript**:
    *  When declaring types, try your best to prevent using the old `React.FC<PropsType>(props)` instead, use `({ destructuredProps }: PropsType)`. This is to prevent some known issues and limitations when using `React.FC`.
    *   When declaring types, put them at the top of the file and use `interface` to do so.
- **Tailwind CSS**:
    *   Tailwind classes can be a mess at times, so it is highly encouraged to be very efficient with classes by preventing the use of unnecessary classes.
    *   Dark Mode is implemented with Tailwind CSS classes; always do your best to keep the changing values like colors next to each other, specifically when declaring `dark:` on any class.
- **Redux**:
    *   Redux has been recently implemented to replace the Context API. Accordingly, any settings-related code should be added to the `settingsSlice.ts` file. Additionally, you can create new files to contain any state that you wish to share across the entire application.
- **Font Awesome:** This project implements FontAwesome Pro 6.4.2 via CDN.

That's it. I would like to clarify that any sort of addition to SnapNote is heavily appreciated, and these guidelines are not to restrict you but to give you a path on how to interact with the code and community ❤️.
