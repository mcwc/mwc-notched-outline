var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/**
@license
Copyright 2019 Google Inc. All Rights Reserved.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/
import { BaseElement, html, property, query } from '@material/mwc-base/form-element.js';
import { MDCNotchedOutlineFoundation } from '@material/notched-outline/foundation.js';
export class NotchedOutlineBase extends BaseElement {
    constructor() {
        super(...arguments);
        this.mdcFoundationClass = MDCNotchedOutlineFoundation;
        this.width = 0;
        this.open = false;
        this.lastOpen = this.open;
    }
    createAdapter() {
        return {
            addClass: (className) => this.mdcRoot.classList.add(className),
            removeClass: (className) => this.mdcRoot.classList.remove(className),
            setNotchWidthProperty: (width) => this.notchElement.style.setProperty('width', `${width}px`),
            removeNotchWidthProperty: () => this.notchElement.style.removeProperty('width'),
        };
    }
    openOrClose(shouldOpen, width) {
        if (!this.mdcFoundation) {
            return;
        }
        if (shouldOpen && width !== undefined) {
            this.mdcFoundation.notch(width);
        }
        else {
            this.mdcFoundation.closeNotch();
        }
    }
    render() {
        if (this.open !== this.lastOpen) {
            // workaround for possible bug in foundation causing recalculation
            this.lastOpen = this.open;
            this.openOrClose(this.open, this.width);
        }
        return html `
      <div class="mdc-notched-outline">
        <div class="mdc-notched-outline__leading"></div>
        <div class="mdc-notched-outline__notch">
          <slot></slot>
        </div>
        <div class="mdc-notched-outline__trailing"></div>
      </div>`;
    }
}
__decorate([
    query('.mdc-notched-outline')
], NotchedOutlineBase.prototype, "mdcRoot", void 0);
__decorate([
    property({ type: Number })
], NotchedOutlineBase.prototype, "width", void 0);
__decorate([
    property({ type: Boolean, reflect: true })
], NotchedOutlineBase.prototype, "open", void 0);
__decorate([
    query('.mdc-notched-outline__notch')
], NotchedOutlineBase.prototype, "notchElement", void 0);
//# sourceMappingURL=mwc-notched-outline-base.js.map