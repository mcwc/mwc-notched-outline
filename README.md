# `<mwc-notched-outline>` [![Published on npm](https://img.shields.io/npm/v/@material/mwc-notched-outline.svg)](https://www.npmjs.com/package/@material/mwc-notched-outline)

> IMPORTANT: The Material Web Components are a work in progress and subject to
> major changes until 1.0 release.

`<mwc-notched-outline>` is an element that is not meant to be consumed
externally. It is the outline element that can create a notch that is used in
outlined textfields and dropdown menus.

[Material Design Guidelines: textfields](https://material.io/design/components/text-fields.html)

[Material Design Guidelines: exposed dropdown menu](https://material.io/design/components/menus.html#exposed-dropdown-menu)

### CSS Custom Properties

| Name                                           | Default       | Description
| ---------------------------------------------- | ------------- |------------
| `--mdc-theme-primary`                          | `#6200ee`     | Color of a floating, slotted `FloatingLabel` and outline.
| `--mdc-notched-outline-leading-width`          | `12px`        | Width of the leading section of the outline (left of notch in LTR).
| `--mdc-notched-outline-leading-border-radius`  | `4px 0 0 4px` | Radius of the border on the leading end. **May require setting `--mdc-notched-outline-leading-width` to accomodate for the new radius**
| `--mdc-notched-outline-trailing-border-radius` | `0 4px 4px 0` | Radius of the border on the trailing end.
| `--mdc-notched-outline-stroke-width`           | `1px`         | Outline width.