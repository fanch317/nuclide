'use babel';
/* @flow */

/*
 * Copyright (c) 2015-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the license found in the LICENSE file in
 * the root directory of this source tree.
 */

import type {LinterProvider} from '../../diagnostics/base';

module.exports = {
  activate(): void {
  },

  getHyperclickProvider() {
    return require('./HyperclickProvider');
  },

  createAutocompleteProvider(): mixed {
    const {trackOperationTiming} = require('../../analytics');
    const getSuggestions = request => {
      return trackOperationTiming(
        'nuclide-ocaml:getAutocompleteSuggestions',
        () => require('./AutoComplete').getAutocompleteSuggestions(request));
    };
    return {
      selector: '.source.ocaml',
      inclusionPriority: 1,
      disableForSelector: '.source.ocaml .comment',
      getSuggestions,
    };
  },

  provideLinter(): LinterProvider {
    const MerlinLinterProvider = require('./LinterProvider');
    return MerlinLinterProvider;
  },
};
