/**
 * Copyright (c) 2015-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the license found in the LICENSE file in
 * the root directory of this source tree.
 *
 * @flow
 * @format
 */

import nuclideUri from 'nuclide-commons/nuclideUri';
import invariant from 'assert';
import grammarTest from 'atom-grammar-test';

describe('PHP grammar', () => {
  let grammar: atom$Grammar = (null: any);

  beforeEach(() => {
    waitsForPromise(() =>
      atom.packages.activatePackage('nuclide-language-hack'),
    );
    runs(() => {
      const hackGrammar = atom.grammars.grammarForScopeName('text.html.hack');
      invariant(hackGrammar);
      grammar = hackGrammar;
    });
  });

  it('parses the grammar', () => {
    expect(grammar).toBeTruthy();
    grammar = grammar || {};
    expect(grammar.scopeName).toBe('text.html.hack');
  });

  describe('operators', () => {
    it('should tokenize = correctly', () => {
      expect(grammar).toBeTruthy();
      grammar = grammar || {};
      const tokens = grammar.tokenizeLines('<?hh\n$test = 2;');
      expect(tokens[1][0]).toEqual({
        value: '$',
        scopes: [
          'text.html.hack',
          'meta.embedded.block.php',
          'source.hack',
          'variable.other.php',
          'punctuation.definition.variable.php',
        ],
      });
      expect(tokens[1][2]).toEqual({
        value: ' ',
        scopes: ['text.html.hack', 'meta.embedded.block.php', 'source.hack'],
      });
      expect(tokens[1][3]).toEqual({
        value: '=',
        scopes: [
          'text.html.hack',
          'meta.embedded.block.php',
          'source.hack',
          'keyword.operator.assignment.php',
        ],
      });
      expect(tokens[1][4]).toEqual({
        value: ' ',
        scopes: ['text.html.hack', 'meta.embedded.block.php', 'source.hack'],
      });
      expect(tokens[1][5]).toEqual({
        value: '2',
        scopes: [
          'text.html.hack',
          'meta.embedded.block.php',
          'source.hack',
          'constant.numeric.php',
        ],
      });
      expect(tokens[1][6]).toEqual({
        value: ';',
        scopes: [
          'text.html.hack',
          'meta.embedded.block.php',
          'source.hack',
          'punctuation.terminator.expression.php',
        ],
      });
    });

    it('should tokenize + correctly', () => {
      expect(grammar).toBeTruthy();
      grammar = grammar || {};
      const tokens = grammar.tokenizeLines('<?hh\n1 + 2;');
      expect(tokens[1][0]).toEqual({
        value: '1',
        scopes: [
          'text.html.hack',
          'meta.embedded.block.php',
          'source.hack',
          'constant.numeric.php',
        ],
      });
      expect(tokens[1][1]).toEqual({
        value: ' ',
        scopes: ['text.html.hack', 'meta.embedded.block.php', 'source.hack'],
      });
      expect(tokens[1][2]).toEqual({
        value: '+',
        scopes: [
          'text.html.hack',
          'meta.embedded.block.php',
          'source.hack',
          'keyword.operator.arithmetic.php',
        ],
      });
      expect(tokens[1][3]).toEqual({
        value: ' ',
        scopes: ['text.html.hack', 'meta.embedded.block.php', 'source.hack'],
      });
      expect(tokens[1][4]).toEqual({
        value: '2',
        scopes: [
          'text.html.hack',
          'meta.embedded.block.php',
          'source.hack',
          'constant.numeric.php',
        ],
      });
      expect(tokens[1][5]).toEqual({
        value: ';',
        scopes: [
          'text.html.hack',
          'meta.embedded.block.php',
          'source.hack',
          'punctuation.terminator.expression.php',
        ],
      });
    });

    it('should tokenize - correctly', () => {
      expect(grammar).toBeTruthy();
      grammar = grammar || {};
      const tokens = grammar.tokenizeLines('<?hh\n1 - 2;');
      expect(tokens[1][0]).toEqual({
        value: '1',
        scopes: [
          'text.html.hack',
          'meta.embedded.block.php',
          'source.hack',
          'constant.numeric.php',
        ],
      });
      expect(tokens[1][1]).toEqual({
        value: ' ',
        scopes: ['text.html.hack', 'meta.embedded.block.php', 'source.hack'],
      });
      expect(tokens[1][2]).toEqual({
        value: '-',
        scopes: [
          'text.html.hack',
          'meta.embedded.block.php',
          'source.hack',
          'keyword.operator.arithmetic.php',
        ],
      });
      expect(tokens[1][3]).toEqual({
        value: ' ',
        scopes: ['text.html.hack', 'meta.embedded.block.php', 'source.hack'],
      });
      expect(tokens[1][4]).toEqual({
        value: '2',
        scopes: [
          'text.html.hack',
          'meta.embedded.block.php',
          'source.hack',
          'constant.numeric.php',
        ],
      });
      expect(tokens[1][5]).toEqual({
        value: ';',
        scopes: [
          'text.html.hack',
          'meta.embedded.block.php',
          'source.hack',
          'punctuation.terminator.expression.php',
        ],
      });
    });

    it('should tokenize * correctly', () => {
      expect(grammar).toBeTruthy();
      grammar = grammar || {};
      const tokens = grammar.tokenizeLines('<?hh\n1 * 2;');
      expect(tokens[1][0]).toEqual({
        value: '1',
        scopes: [
          'text.html.hack',
          'meta.embedded.block.php',
          'source.hack',
          'constant.numeric.php',
        ],
      });
      expect(tokens[1][1]).toEqual({
        value: ' ',
        scopes: ['text.html.hack', 'meta.embedded.block.php', 'source.hack'],
      });
      expect(tokens[1][2]).toEqual({
        value: '*',
        scopes: [
          'text.html.hack',
          'meta.embedded.block.php',
          'source.hack',
          'keyword.operator.arithmetic.php',
        ],
      });
      expect(tokens[1][3]).toEqual({
        value: ' ',
        scopes: ['text.html.hack', 'meta.embedded.block.php', 'source.hack'],
      });
      expect(tokens[1][4]).toEqual({
        value: '2',
        scopes: [
          'text.html.hack',
          'meta.embedded.block.php',
          'source.hack',
          'constant.numeric.php',
        ],
      });
      expect(tokens[1][5]).toEqual({
        value: ';',
        scopes: [
          'text.html.hack',
          'meta.embedded.block.php',
          'source.hack',
          'punctuation.terminator.expression.php',
        ],
      });
    });

    it('should tokenize / correctly', () => {
      expect(grammar).toBeTruthy();
      if (!grammar) {
        return;
      }
      const tokens = grammar.tokenizeLines('<?hh\n1 / 2;');
      expect(tokens[1][0]).toEqual({
        value: '1',
        scopes: [
          'text.html.hack',
          'meta.embedded.block.php',
          'source.hack',
          'constant.numeric.php',
        ],
      });
      expect(tokens[1][1]).toEqual({
        value: ' ',
        scopes: ['text.html.hack', 'meta.embedded.block.php', 'source.hack'],
      });
      expect(tokens[1][2]).toEqual({
        value: '/',
        scopes: [
          'text.html.hack',
          'meta.embedded.block.php',
          'source.hack',
          'keyword.operator.arithmetic.php',
        ],
      });
      expect(tokens[1][3]).toEqual({
        value: ' ',
        scopes: ['text.html.hack', 'meta.embedded.block.php', 'source.hack'],
      });
      expect(tokens[1][4]).toEqual({
        value: '2',
        scopes: [
          'text.html.hack',
          'meta.embedded.block.php',
          'source.hack',
          'constant.numeric.php',
        ],
      });
      expect(tokens[1][5]).toEqual({
        value: ';',
        scopes: [
          'text.html.hack',
          'meta.embedded.block.php',
          'source.hack',
          'punctuation.terminator.expression.php',
        ],
      });
    });

    it('should tokenize % correctly', () => {
      expect(grammar).toBeTruthy();
      grammar = grammar || {};
      const tokens = grammar.tokenizeLines('<?hh\n1 % 2;');
      expect(tokens[1][0]).toEqual({
        value: '1',
        scopes: [
          'text.html.hack',
          'meta.embedded.block.php',
          'source.hack',
          'constant.numeric.php',
        ],
      });
      expect(tokens[1][1]).toEqual({
        value: ' ',
        scopes: ['text.html.hack', 'meta.embedded.block.php', 'source.hack'],
      });
      expect(tokens[1][2]).toEqual({
        value: '%',
        scopes: [
          'text.html.hack',
          'meta.embedded.block.php',
          'source.hack',
          'keyword.operator.arithmetic.php',
        ],
      });
      expect(tokens[1][3]).toEqual({
        value: ' ',
        scopes: ['text.html.hack', 'meta.embedded.block.php', 'source.hack'],
      });
      expect(tokens[1][4]).toEqual({
        value: '2',
        scopes: [
          'text.html.hack',
          'meta.embedded.block.php',
          'source.hack',
          'constant.numeric.php',
        ],
      });
      expect(tokens[1][5]).toEqual({
        value: ';',
        scopes: [
          'text.html.hack',
          'meta.embedded.block.php',
          'source.hack',
          'punctuation.terminator.expression.php',
        ],
      });
    });

    it('should tokenize heredocs correctly', () => {
      expect(grammar).toBeTruthy();
      grammar = grammar || {};
      const tokens = grammar.tokenizeLines(
        '<?hh\n$x = <<<EOTXT\ntest {$str}\nEOTXT;',
      );
      expect(tokens[1][5].scopes).toContain('string.unquoted.heredoc.php');
      expect(tokens[1][6].scopes).toContain(
        'string.unquoted.heredoc.php',
        'keyword.operator.heredoc.php',
      );
      // Interpolated variables should still be highlighted.
      expect(tokens[2][2].scopes).toContain('variable.other.php');
      expect(tokens[3][0].scopes).toContain(
        'string.unquoted.heredoc.php',
        'keyword.operator.heredoc.php',
      );
    });

    describe('combined operators', () => {
      it('should tokenize += correctly', () => {
        expect(grammar).toBeTruthy();
        grammar = grammar || {};
        const tokens = grammar.tokenizeLines('<?hh\n$test += 2;');
        expect(tokens[1][0]).toEqual({
          value: '$',
          scopes: [
            'text.html.hack',
            'meta.embedded.block.php',
            'source.hack',
            'variable.other.php',
            'punctuation.definition.variable.php',
          ],
        });
        expect(tokens[1][1]).toEqual({
          value: 'test',
          scopes: [
            'text.html.hack',
            'meta.embedded.block.php',
            'source.hack',
            'variable.other.php',
          ],
        });
        expect(tokens[1][2]).toEqual({
          value: ' ',
          scopes: ['text.html.hack', 'meta.embedded.block.php', 'source.hack'],
        });
        expect(tokens[1][3]).toEqual({
          value: '+=',
          scopes: [
            'text.html.hack',
            'meta.embedded.block.php',
            'source.hack',
            'keyword.operator.assignment.php',
          ],
        });
        expect(tokens[1][4]).toEqual({
          value: ' ',
          scopes: ['text.html.hack', 'meta.embedded.block.php', 'source.hack'],
        });
        expect(tokens[1][5]).toEqual({
          value: '2',
          scopes: [
            'text.html.hack',
            'meta.embedded.block.php',
            'source.hack',
            'constant.numeric.php',
          ],
        });
        expect(tokens[1][6]).toEqual({
          value: ';',
          scopes: [
            'text.html.hack',
            'meta.embedded.block.php',
            'source.hack',
            'punctuation.terminator.expression.php',
          ],
        });
      });

      it('should tokenize -= correctly', () => {
        expect(grammar).toBeTruthy();
        grammar = grammar || {};
        const tokens = grammar.tokenizeLines('<?hh\n$test -= 2;');
        expect(tokens[1][0]).toEqual({
          value: '$',
          scopes: [
            'text.html.hack',
            'meta.embedded.block.php',
            'source.hack',
            'variable.other.php',
            'punctuation.definition.variable.php',
          ],
        });
        expect(tokens[1][1]).toEqual({
          value: 'test',
          scopes: [
            'text.html.hack',
            'meta.embedded.block.php',
            'source.hack',
            'variable.other.php',
          ],
        });
        expect(tokens[1][2]).toEqual({
          value: ' ',
          scopes: ['text.html.hack', 'meta.embedded.block.php', 'source.hack'],
        });
        expect(tokens[1][3]).toEqual({
          value: '-=',
          scopes: [
            'text.html.hack',
            'meta.embedded.block.php',
            'source.hack',
            'keyword.operator.assignment.php',
          ],
        });
        expect(tokens[1][4]).toEqual({
          value: ' ',
          scopes: ['text.html.hack', 'meta.embedded.block.php', 'source.hack'],
        });
        expect(tokens[1][5]).toEqual({
          value: '2',
          scopes: [
            'text.html.hack',
            'meta.embedded.block.php',
            'source.hack',
            'constant.numeric.php',
          ],
        });
        expect(tokens[1][6]).toEqual({
          value: ';',
          scopes: [
            'text.html.hack',
            'meta.embedded.block.php',
            'source.hack',
            'punctuation.terminator.expression.php',
          ],
        });
      });

      it('should tokenize *= correctly', () => {
        expect(grammar).toBeTruthy();
        grammar = grammar || {};
        const tokens = grammar.tokenizeLines('<?hh\n$test *= 2;');
        expect(tokens[1][0]).toEqual({
          value: '$',
          scopes: [
            'text.html.hack',
            'meta.embedded.block.php',
            'source.hack',
            'variable.other.php',
            'punctuation.definition.variable.php',
          ],
        });
        expect(tokens[1][1]).toEqual({
          value: 'test',
          scopes: [
            'text.html.hack',
            'meta.embedded.block.php',
            'source.hack',
            'variable.other.php',
          ],
        });
        expect(tokens[1][2]).toEqual({
          value: ' ',
          scopes: ['text.html.hack', 'meta.embedded.block.php', 'source.hack'],
        });
        expect(tokens[1][3]).toEqual({
          value: '*=',
          scopes: [
            'text.html.hack',
            'meta.embedded.block.php',
            'source.hack',
            'keyword.operator.assignment.php',
          ],
        });
        expect(tokens[1][4]).toEqual({
          value: ' ',
          scopes: ['text.html.hack', 'meta.embedded.block.php', 'source.hack'],
        });
        expect(tokens[1][5]).toEqual({
          value: '2',
          scopes: [
            'text.html.hack',
            'meta.embedded.block.php',
            'source.hack',
            'constant.numeric.php',
          ],
        });
        expect(tokens[1][6]).toEqual({
          value: ';',
          scopes: [
            'text.html.hack',
            'meta.embedded.block.php',
            'source.hack',
            'punctuation.terminator.expression.php',
          ],
        });
      });

      it('should tokenize /= correctly', () => {
        expect(grammar).toBeTruthy();
        grammar = grammar || {};
        const tokens = grammar.tokenizeLines('<?hh\n$test /= 2;');
        expect(tokens[1][0]).toEqual({
          value: '$',
          scopes: [
            'text.html.hack',
            'meta.embedded.block.php',
            'source.hack',
            'variable.other.php',
            'punctuation.definition.variable.php',
          ],
        });
        expect(tokens[1][1]).toEqual({
          value: 'test',
          scopes: [
            'text.html.hack',
            'meta.embedded.block.php',
            'source.hack',
            'variable.other.php',
          ],
        });
        expect(tokens[1][2]).toEqual({
          value: ' ',
          scopes: ['text.html.hack', 'meta.embedded.block.php', 'source.hack'],
        });
        expect(tokens[1][3]).toEqual({
          value: '/=',
          scopes: [
            'text.html.hack',
            'meta.embedded.block.php',
            'source.hack',
            'keyword.operator.assignment.php',
          ],
        });
        expect(tokens[1][4]).toEqual({
          value: ' ',
          scopes: ['text.html.hack', 'meta.embedded.block.php', 'source.hack'],
        });
        expect(tokens[1][5]).toEqual({
          value: '2',
          scopes: [
            'text.html.hack',
            'meta.embedded.block.php',
            'source.hack',
            'constant.numeric.php',
          ],
        });
        expect(tokens[1][6]).toEqual({
          value: ';',
          scopes: [
            'text.html.hack',
            'meta.embedded.block.php',
            'source.hack',
            'punctuation.terminator.expression.php',
          ],
        });
      });

      it('should tokenize %= correctly', () => {
        expect(grammar).toBeTruthy();
        grammar = grammar || {};
        const tokens = grammar.tokenizeLines('<?hh\n$test %= 2;');
        expect(tokens[1][0]).toEqual({
          value: '$',
          scopes: [
            'text.html.hack',
            'meta.embedded.block.php',
            'source.hack',
            'variable.other.php',
            'punctuation.definition.variable.php',
          ],
        });
        expect(tokens[1][1]).toEqual({
          value: 'test',
          scopes: [
            'text.html.hack',
            'meta.embedded.block.php',
            'source.hack',
            'variable.other.php',
          ],
        });
        expect(tokens[1][2]).toEqual({
          value: ' ',
          scopes: ['text.html.hack', 'meta.embedded.block.php', 'source.hack'],
        });
        expect(tokens[1][3]).toEqual({
          value: '%=',
          scopes: [
            'text.html.hack',
            'meta.embedded.block.php',
            'source.hack',
            'keyword.operator.assignment.php',
          ],
        });
        expect(tokens[1][4]).toEqual({
          value: ' ',
          scopes: ['text.html.hack', 'meta.embedded.block.php', 'source.hack'],
        });
        expect(tokens[1][5]).toEqual({
          value: '2',
          scopes: [
            'text.html.hack',
            'meta.embedded.block.php',
            'source.hack',
            'constant.numeric.php',
          ],
        });
        expect(tokens[1][6]).toEqual({
          value: ';',
          scopes: [
            'text.html.hack',
            'meta.embedded.block.php',
            'source.hack',
            'punctuation.terminator.expression.php',
          ],
        });
      });

      it('should tokenize .= correctly', () => {
        expect(grammar).toBeTruthy();
        grammar = grammar || {};
        const tokens = grammar.tokenizeLines('<?hh\n$test .= 2;');
        expect(tokens[1][0]).toEqual({
          value: '$',
          scopes: [
            'text.html.hack',
            'meta.embedded.block.php',
            'source.hack',
            'variable.other.php',
            'punctuation.definition.variable.php',
          ],
        });
        expect(tokens[1][1]).toEqual({
          value: 'test',
          scopes: [
            'text.html.hack',
            'meta.embedded.block.php',
            'source.hack',
            'variable.other.php',
          ],
        });
        expect(tokens[1][2]).toEqual({
          value: ' ',
          scopes: ['text.html.hack', 'meta.embedded.block.php', 'source.hack'],
        });
        expect(tokens[1][3]).toEqual({
          value: '.=',
          scopes: [
            'text.html.hack',
            'meta.embedded.block.php',
            'source.hack',
            'keyword.operator.string.php',
          ],
        });
        expect(tokens[1][4]).toEqual({
          value: ' ',
          scopes: ['text.html.hack', 'meta.embedded.block.php', 'source.hack'],
        });
        expect(tokens[1][5]).toEqual({
          value: '2',
          scopes: [
            'text.html.hack',
            'meta.embedded.block.php',
            'source.hack',
            'constant.numeric.php',
          ],
        });
        expect(tokens[1][6]).toEqual({
          value: ';',
          scopes: [
            'text.html.hack',
            'meta.embedded.block.php',
            'source.hack',
            'punctuation.terminator.expression.php',
          ],
        });
      });

      it('should tokenize &= correctly', () => {
        expect(grammar).toBeTruthy();
        grammar = grammar || {};
        const tokens = grammar.tokenizeLines('<?hh\n$test &= 2;');
        expect(tokens[1][0]).toEqual({
          value: '$',
          scopes: [
            'text.html.hack',
            'meta.embedded.block.php',
            'source.hack',
            'variable.other.php',
            'punctuation.definition.variable.php',
          ],
        });
        expect(tokens[1][1]).toEqual({
          value: 'test',
          scopes: [
            'text.html.hack',
            'meta.embedded.block.php',
            'source.hack',
            'variable.other.php',
          ],
        });
        expect(tokens[1][2]).toEqual({
          value: ' ',
          scopes: ['text.html.hack', 'meta.embedded.block.php', 'source.hack'],
        });
        expect(tokens[1][3]).toEqual({
          value: '&=',
          scopes: [
            'text.html.hack',
            'meta.embedded.block.php',
            'source.hack',
            'keyword.operator.assignment.php',
          ],
        });
        expect(tokens[1][4]).toEqual({
          value: ' ',
          scopes: ['text.html.hack', 'meta.embedded.block.php', 'source.hack'],
        });
        expect(tokens[1][5]).toEqual({
          value: '2',
          scopes: [
            'text.html.hack',
            'meta.embedded.block.php',
            'source.hack',
            'constant.numeric.php',
          ],
        });
        expect(tokens[1][6]).toEqual({
          value: ';',
          scopes: [
            'text.html.hack',
            'meta.embedded.block.php',
            'source.hack',
            'punctuation.terminator.expression.php',
          ],
        });
      });

      it('should tokenize |= correctly', () => {
        expect(grammar).toBeTruthy();
        grammar = grammar || {};
        const tokens = grammar.tokenizeLines('<?hh\n$test |= 2;');
        expect(tokens[1][0]).toEqual({
          value: '$',
          scopes: [
            'text.html.hack',
            'meta.embedded.block.php',
            'source.hack',
            'variable.other.php',
            'punctuation.definition.variable.php',
          ],
        });
        expect(tokens[1][1]).toEqual({
          value: 'test',
          scopes: [
            'text.html.hack',
            'meta.embedded.block.php',
            'source.hack',
            'variable.other.php',
          ],
        });
        expect(tokens[1][2]).toEqual({
          value: ' ',
          scopes: ['text.html.hack', 'meta.embedded.block.php', 'source.hack'],
        });
        expect(tokens[1][3]).toEqual({
          value: '|=',
          scopes: [
            'text.html.hack',
            'meta.embedded.block.php',
            'source.hack',
            'keyword.operator.assignment.php',
          ],
        });
        expect(tokens[1][4]).toEqual({
          value: ' ',
          scopes: ['text.html.hack', 'meta.embedded.block.php', 'source.hack'],
        });
        expect(tokens[1][5]).toEqual({
          value: '2',
          scopes: [
            'text.html.hack',
            'meta.embedded.block.php',
            'source.hack',
            'constant.numeric.php',
          ],
        });
        expect(tokens[1][6]).toEqual({
          value: ';',
          scopes: [
            'text.html.hack',
            'meta.embedded.block.php',
            'source.hack',
            'punctuation.terminator.expression.php',
          ],
        });
      });

      it('should tokenize ^= correctly', () => {
        expect(grammar).toBeTruthy();
        grammar = grammar || {};
        const tokens = grammar.tokenizeLines('<?hh\n$test ^= 2;');
        expect(tokens[1][0]).toEqual({
          value: '$',
          scopes: [
            'text.html.hack',
            'meta.embedded.block.php',
            'source.hack',
            'variable.other.php',
            'punctuation.definition.variable.php',
          ],
        });
        expect(tokens[1][1]).toEqual({
          value: 'test',
          scopes: [
            'text.html.hack',
            'meta.embedded.block.php',
            'source.hack',
            'variable.other.php',
          ],
        });
        expect(tokens[1][2]).toEqual({
          value: ' ',
          scopes: ['text.html.hack', 'meta.embedded.block.php', 'source.hack'],
        });
        expect(tokens[1][3]).toEqual({
          value: '^=',
          scopes: [
            'text.html.hack',
            'meta.embedded.block.php',
            'source.hack',
            'keyword.operator.assignment.php',
          ],
        });
        expect(tokens[1][4]).toEqual({
          value: ' ',
          scopes: ['text.html.hack', 'meta.embedded.block.php', 'source.hack'],
        });
        expect(tokens[1][5]).toEqual({
          value: '2',
          scopes: [
            'text.html.hack',
            'meta.embedded.block.php',
            'source.hack',
            'constant.numeric.php',
          ],
        });
        expect(tokens[1][6]).toEqual({
          value: ';',
          scopes: [
            'text.html.hack',
            'meta.embedded.block.php',
            'source.hack',
            'punctuation.terminator.expression.php',
          ],
        });
      });

      it('should tokenize <<= correctly', () => {
        expect(grammar).toBeTruthy();
        grammar = grammar || {};
        const tokens = grammar.tokenizeLines('<?hh\n$test <<= 2;');
        expect(tokens[1][0]).toEqual({
          value: '$',
          scopes: [
            'text.html.hack',
            'meta.embedded.block.php',
            'source.hack',
            'variable.other.php',
            'punctuation.definition.variable.php',
          ],
        });
        expect(tokens[1][1]).toEqual({
          value: 'test',
          scopes: [
            'text.html.hack',
            'meta.embedded.block.php',
            'source.hack',
            'variable.other.php',
          ],
        });
        expect(tokens[1][2]).toEqual({
          value: ' ',
          scopes: ['text.html.hack', 'meta.embedded.block.php', 'source.hack'],
        });
        expect(tokens[1][3]).toEqual({
          value: '<<=',
          scopes: [
            'text.html.hack',
            'meta.embedded.block.php',
            'source.hack',
            'keyword.operator.assignment.php',
          ],
        });
        expect(tokens[1][4]).toEqual({
          value: ' ',
          scopes: ['text.html.hack', 'meta.embedded.block.php', 'source.hack'],
        });
        expect(tokens[1][5]).toEqual({
          value: '2',
          scopes: [
            'text.html.hack',
            'meta.embedded.block.php',
            'source.hack',
            'constant.numeric.php',
          ],
        });
        expect(tokens[1][6]).toEqual({
          value: ';',
          scopes: [
            'text.html.hack',
            'meta.embedded.block.php',
            'source.hack',
            'punctuation.terminator.expression.php',
          ],
        });
      });

      it('should tokenize >>= correctly', () => {
        expect(grammar).toBeTruthy();
        grammar = grammar || {};
        const tokens = grammar.tokenizeLines('<?hh\n$test >>= 2;');
        expect(tokens[1][0]).toEqual({
          value: '$',
          scopes: [
            'text.html.hack',
            'meta.embedded.block.php',
            'source.hack',
            'variable.other.php',
            'punctuation.definition.variable.php',
          ],
        });
        expect(tokens[1][1]).toEqual({
          value: 'test',
          scopes: [
            'text.html.hack',
            'meta.embedded.block.php',
            'source.hack',
            'variable.other.php',
          ],
        });
        expect(tokens[1][2]).toEqual({
          value: ' ',
          scopes: ['text.html.hack', 'meta.embedded.block.php', 'source.hack'],
        });
        expect(tokens[1][3]).toEqual({
          value: '>>=',
          scopes: [
            'text.html.hack',
            'meta.embedded.block.php',
            'source.hack',
            'keyword.operator.assignment.php',
          ],
        });
        expect(tokens[1][4]).toEqual({
          value: ' ',
          scopes: ['text.html.hack', 'meta.embedded.block.php', 'source.hack'],
        });
        expect(tokens[1][5]).toEqual({
          value: '2',
          scopes: [
            'text.html.hack',
            'meta.embedded.block.php',
            'source.hack',
            'constant.numeric.php',
          ],
        });
        expect(tokens[1][6]).toEqual({
          value: ';',
          scopes: [
            'text.html.hack',
            'meta.embedded.block.php',
            'source.hack',
            'punctuation.terminator.expression.php',
          ],
        });
      });

      // eslint-disable-next-line jasmine/no-disabled-tests
      xit('should tokenize namespace at the same line as <?hh', () => {
        expect(grammar).toBeTruthy();
        grammar = grammar || {};
        const tokens = grammar.tokenizeLines('<?hh namespace Test;');
        expect(tokens[0][1]).toEqual({
          value: ' ',
          scopes: [
            'text.html.hack',
            'meta.embedded.block.php',
            'source.hack',
            'meta.namespace.php',
          ],
        });
        expect(tokens[0][2]).toEqual({
          value: 'namespace',
          scopes: [
            'text.html.hack',
            'meta.embedded.block.php',
            'source.hack',
            'meta.namespace.php',
            'keyword.other.namespace.php',
          ],
        });
        expect(tokens[0][3]).toEqual({
          value: ' ',
          scopes: [
            'text.html.hack',
            'meta.embedded.block.php',
            'source.hack',
            'meta.namespace.php',
          ],
        });
        expect(tokens[0][4]).toEqual({
          value: 'Test',
          scopes: [
            'text.html.hack',
            'meta.embedded.block.php',
            'source.hack',
            'meta.namespace.php',
            'entity.name.type.namespace.php',
          ],
        });
        expect(tokens[0][5]).toEqual({
          value: ';',
          scopes: [
            'text.html.hack',
            'meta.embedded.block.php',
            'source.hack',
            'punctuation.terminator.expression.php',
          ],
        });
      });

      it('should tokenize namespace correctly', () => {
        expect(grammar).toBeTruthy();
        grammar = grammar || {};
        const tokens = grammar.tokenizeLines('<?hh\nnamespace Test;');
        expect(tokens[1][0]).toEqual({
          value: 'namespace',
          scopes: [
            'text.html.hack',
            'meta.embedded.block.php',
            'source.hack',
            'meta.namespace.php',
            'keyword.other.namespace.php',
          ],
        });
        expect(tokens[1][1]).toEqual({
          value: ' ',
          scopes: [
            'text.html.hack',
            'meta.embedded.block.php',
            'source.hack',
            'meta.namespace.php',
          ],
        });
        expect(tokens[1][2]).toEqual({
          value: 'Test',
          scopes: [
            'text.html.hack',
            'meta.embedded.block.php',
            'source.hack',
            'meta.namespace.php',
            'entity.name.type.namespace.php',
          ],
        });
        expect(tokens[1][3]).toEqual({
          value: ';',
          scopes: [
            'text.html.hack',
            'meta.embedded.block.php',
            'source.hack',
            'punctuation.terminator.expression.php',
          ],
        });
      });

      it('should tokenize default array type with old array value correctly', () => {
        expect(grammar).toBeTruthy();
        grammar = grammar || {};
        const tokens = grammar.tokenizeLines(
          '<?hh\nfunction array_test(array $value = array()) {}',
        );
        expect(tokens[1][0]).toEqual({
          value: 'function',
          scopes: [
            'text.html.hack',
            'meta.embedded.block.php',
            'source.hack',
            'meta.function.php',
            'storage.type.function.php',
          ],
        });
        expect(tokens[1][1]).toEqual({
          value: ' ',
          scopes: [
            'text.html.hack',
            'meta.embedded.block.php',
            'source.hack',
            'meta.function.php',
          ],
        });
        expect(tokens[1][2]).toEqual({
          value: 'array_test',
          scopes: [
            'text.html.hack',
            'meta.embedded.block.php',
            'source.hack',
            'meta.function.php',
            'entity.name.function.php',
          ],
        });
        expect(tokens[1][3]).toEqual({
          value: '(',
          scopes: [
            'text.html.hack',
            'meta.embedded.block.php',
            'source.hack',
            'meta.function.php',
            'punctuation.definition.parameters.begin.php',
          ],
        });
        expect(tokens[1][4]).toEqual({
          value: 'array',
          scopes: [
            'text.html.hack',
            'meta.embedded.block.php',
            'source.hack',
            'meta.function.php',
            'meta.function.arguments.php',
            'meta.function.argument.array.php',
            'storage.type.php',
          ],
        });
        expect(tokens[1][5]).toEqual({
          value: ' ',
          scopes: [
            'text.html.hack',
            'meta.embedded.block.php',
            'source.hack',
            'meta.function.php',
            'meta.function.arguments.php',
            'meta.function.argument.array.php',
          ],
        });
        expect(tokens[1][6]).toEqual({
          value: '$',
          scopes: [
            'text.html.hack',
            'meta.embedded.block.php',
            'source.hack',
            'meta.function.php',
            'meta.function.arguments.php',
            'meta.function.argument.array.php',
            'variable.other.php',
            'punctuation.definition.variable.php',
          ],
        });
        expect(tokens[1][7]).toEqual({
          value: 'value',
          scopes: [
            'text.html.hack',
            'meta.embedded.block.php',
            'source.hack',
            'meta.function.php',
            'meta.function.arguments.php',
            'meta.function.argument.array.php',
            'variable.other.php',
          ],
        });
        expect(tokens[1][8]).toEqual({
          value: ' ',
          scopes: [
            'text.html.hack',
            'meta.embedded.block.php',
            'source.hack',
            'meta.function.php',
            'meta.function.arguments.php',
            'meta.function.argument.array.php',
          ],
        });
        expect(tokens[1][9]).toEqual({
          value: '=',
          scopes: [
            'text.html.hack',
            'meta.embedded.block.php',
            'source.hack',
            'meta.function.php',
            'meta.function.arguments.php',
            'meta.function.argument.array.php',
            'keyword.operator.assignment.php',
          ],
        });
        expect(tokens[1][10]).toEqual({
          value: ' ',
          scopes: [
            'text.html.hack',
            'meta.embedded.block.php',
            'source.hack',
            'meta.function.php',
            'meta.function.arguments.php',
            'meta.function.argument.array.php',
          ],
        });
        expect(tokens[1][11]).toEqual({
          value: 'array',
          scopes: [
            'text.html.hack',
            'meta.embedded.block.php',
            'source.hack',
            'meta.function.php',
            'meta.function.arguments.php',
            'meta.function.argument.array.php',
            'support.function.construct.php',
          ],
        });
        expect(tokens[1][12]).toEqual({
          value: '(',
          scopes: [
            'text.html.hack',
            'meta.embedded.block.php',
            'source.hack',
            'meta.function.php',
            'meta.function.arguments.php',
            'meta.function.argument.array.php',
            'punctuation.definition.array.begin.php',
          ],
        });
        expect(tokens[1][13]).toEqual({
          value: ')',
          scopes: [
            'text.html.hack',
            'meta.embedded.block.php',
            'source.hack',
            'meta.function.php',
            'meta.function.arguments.php',
            'meta.function.argument.array.php',
            'punctuation.definition.array.end.php',
          ],
        });
        expect(tokens[1][14]).toEqual({
          value: ')',
          scopes: [
            'text.html.hack',
            'meta.embedded.block.php',
            'source.hack',
            'meta.function.php',
            'punctuation.definition.parameters.end.php',
          ],
        });
        expect(tokens[1][15]).toEqual({
          value: ' ',
          scopes: [
            'text.html.hack',
            'meta.embedded.block.php',
            'source.hack',
            'meta.function.php',
          ],
        });
        expect(tokens[1][16]).toEqual({
          value: '{',
          scopes: [
            'text.html.hack',
            'meta.embedded.block.php',
            'source.hack',
            'punctuation.section.scope.begin.php',
          ],
        });
        expect(tokens[1][17]).toEqual({
          value: '}',
          scopes: [
            'text.html.hack',
            'meta.embedded.block.php',
            'source.hack',
            'punctuation.section.scope.end.php',
          ],
        });
      });

      it('should tokenize default array type with short array value correctly', () => {
        expect(grammar).toBeTruthy();
        grammar = grammar || {};
        const tokens = grammar.tokenizeLines(
          '<?hh\nfunction array_test(array $value = []) {}',
        );
        expect(tokens[1][0]).toEqual({
          value: 'function',
          scopes: [
            'text.html.hack',
            'meta.embedded.block.php',
            'source.hack',
            'meta.function.php',
            'storage.type.function.php',
          ],
        });
        expect(tokens[1][1]).toEqual({
          value: ' ',
          scopes: [
            'text.html.hack',
            'meta.embedded.block.php',
            'source.hack',
            'meta.function.php',
          ],
        });
        expect(tokens[1][2]).toEqual({
          value: 'array_test',
          scopes: [
            'text.html.hack',
            'meta.embedded.block.php',
            'source.hack',
            'meta.function.php',
            'entity.name.function.php',
          ],
        });
        expect(tokens[1][3]).toEqual({
          value: '(',
          scopes: [
            'text.html.hack',
            'meta.embedded.block.php',
            'source.hack',
            'meta.function.php',
            'punctuation.definition.parameters.begin.php',
          ],
        });
        expect(tokens[1][4]).toEqual({
          value: 'array',
          scopes: [
            'text.html.hack',
            'meta.embedded.block.php',
            'source.hack',
            'meta.function.php',
            'meta.function.arguments.php',
            'meta.function.argument.short.array.php',
            'storage.type.php',
          ],
        });
        expect(tokens[1][5]).toEqual({
          value: ' ',
          scopes: [
            'text.html.hack',
            'meta.embedded.block.php',
            'source.hack',
            'meta.function.php',
            'meta.function.arguments.php',
            'meta.function.argument.short.array.php',
          ],
        });
        expect(tokens[1][6]).toEqual({
          value: '$',
          scopes: [
            'text.html.hack',
            'meta.embedded.block.php',
            'source.hack',
            'meta.function.php',
            'meta.function.arguments.php',
            'meta.function.argument.short.array.php',
            'variable.other.php',
            'punctuation.definition.variable.php',
          ],
        });
        expect(tokens[1][7]).toEqual({
          value: 'value',
          scopes: [
            'text.html.hack',
            'meta.embedded.block.php',
            'source.hack',
            'meta.function.php',
            'meta.function.arguments.php',
            'meta.function.argument.short.array.php',
            'variable.other.php',
          ],
        });
        expect(tokens[1][8]).toEqual({
          value: ' ',
          scopes: [
            'text.html.hack',
            'meta.embedded.block.php',
            'source.hack',
            'meta.function.php',
            'meta.function.arguments.php',
            'meta.function.argument.short.array.php',
          ],
        });
        expect(tokens[1][9]).toEqual({
          value: '=',
          scopes: [
            'text.html.hack',
            'meta.embedded.block.php',
            'source.hack',
            'meta.function.php',
            'meta.function.arguments.php',
            'meta.function.argument.short.array.php',
          ],
        });
        expect(tokens[1][10]).toEqual({
          value: ' ',
          scopes: [
            'text.html.hack',
            'meta.embedded.block.php',
            'source.hack',
            'meta.function.php',
            'meta.function.arguments.php',
            'meta.function.argument.short.array.php',
          ],
        });
        expect(tokens[1][11]).toEqual({
          value: '[',
          scopes: [
            'text.html.hack',
            'meta.embedded.block.php',
            'source.hack',
            'meta.function.php',
            'meta.function.arguments.php',
            'meta.function.argument.short.array.php',
            'punctuation.definition.short.array.begin.php',
          ],
        });
        expect(tokens[1][12]).toEqual({
          value: ']',
          scopes: [
            'text.html.hack',
            'meta.embedded.block.php',
            'source.hack',
            'meta.function.php',
            'meta.function.arguments.php',
            'meta.function.argument.short.array.php',
            'punctuation.definition.short.array.end.php',
          ],
        });
        expect(tokens[1][13]).toEqual({
          value: ')',
          scopes: [
            'text.html.hack',
            'meta.embedded.block.php',
            'source.hack',
            'meta.function.php',
            'punctuation.definition.parameters.end.php',
          ],
        });
        expect(tokens[1][14]).toEqual({
          value: ' ',
          scopes: [
            'text.html.hack',
            'meta.embedded.block.php',
            'source.hack',
            'meta.function.php',
          ],
        });
        expect(tokens[1][15]).toEqual({
          value: '{',
          scopes: [
            'text.html.hack',
            'meta.embedded.block.php',
            'source.hack',
            'punctuation.section.scope.begin.php',
          ],
        });
        expect(tokens[1][16]).toEqual({
          value: '}',
          scopes: [
            'text.html.hack',
            'meta.embedded.block.php',
            'source.hack',
            'punctuation.section.scope.end.php',
          ],
        });
      });
    });
  });

  grammarTest(
    nuclideUri.join(__dirname, 'fixtures/syntax_test_hack_typing.php'),
  );
  grammarTest(
    nuclideUri.join(__dirname, 'fixtures/syntax_test_hack_typedecl.php'),
  );
  grammarTest(
    nuclideUri.join(__dirname, 'fixtures/syntax_test_hack_generics.php'),
  );
  grammarTest(nuclideUri.join(__dirname, 'fixtures/syntax_test_xhp.php'));

  describe('magic method parsing', () => {
    const CLASS_WITH_MAGIC_METHOD = `<?hh
    class TestClass {
      final public function __get(): void {
      }
    }`;
    const CLASS_WITH_TRICKY_MAGIC_METHOD = `<?hh
    class TestClass {
      final public function __get
        (): void {
      }
    }`;
    const CLASS_WITHOUT_MAGIC_METHOD = `<?hh
    class TestClass {
      final public function __getSomething(): void {
      }
    }`;

    it('recognizes magic methods', () => {
      expect(grammar).toBeTruthy();
      grammar = grammar || {};
      const tokens = grammar.tokenizeLines(CLASS_WITH_MAGIC_METHOD);
      expect(tokens[2][7]).toEqual({
        value: '__get',
        scopes: [
          'text.html.hack',
          'meta.embedded.block.php',
          'source.hack',
          'meta.function.php',
          'support.function.magic.php',
        ],
      });
    });

    it('recognizes magic methods with line breaks after the identifier', () => {
      expect(grammar).toBeTruthy();
      grammar = grammar || {};
      const tokens = grammar.tokenizeLines(CLASS_WITH_TRICKY_MAGIC_METHOD);
      expect(tokens[2][7]).toEqual({
        value: '__get',
        scopes: [
          'text.html.hack',
          'meta.embedded.block.php',
          'source.hack',
          'meta.function.php',
          'support.function.magic.php',
        ],
      });
    });

    it("recognizes when methods aren't magic methods (even though they're close)", () => {
      expect(grammar).toBeTruthy();
      grammar = grammar || {};
      const tokens = grammar.tokenizeLines(CLASS_WITHOUT_MAGIC_METHOD);
      expect(tokens[2][7]).toEqual({
        value: '__getSomething',
        scopes: [
          'text.html.hack',
          'meta.embedded.block.php',
          'source.hack',
          'meta.function.php',
          'entity.name.function.php',
        ],
      });
    });
  });

  describe('lambda variable capturing', () => {
    it('parses correctly without a return type', () => {
      invariant(grammar != null);
      const tokens = grammar.tokenizeLines('<?hh\nfunction() use ($var) {}');
      const useToken = tokens[1].find(token => token.value === 'use');
      expect(useToken).not.toBeUndefined();
      invariant(useToken != null);
      expect(useToken.scopes).toContain('keyword.other.function.use.php');
    });

    it('parses correctly with a return type', () => {
      invariant(grammar != null);
      const tokens = grammar.tokenizeLines(
        '<?hh\nfunction(): void use ($var) {}',
      );
      const useToken = tokens[1].find(token => token.value === 'use');
      expect(useToken).not.toBeUndefined();
      invariant(useToken != null);
      expect(useToken.scopes).toContain('keyword.other.function.use.php');
    });

    it("doesn't terminate the closure when there's a type annotation", () => {
      invariant(grammar != null);
      const tokens = grammar.tokenizeLines(
        '<?hh\nfunction(): void use ($var)\n{}',
      );
      // Every token should be tagged as being part of the closure.
      const nonClosureTokens = tokens[1]
        .filter(token => !token.scopes.includes('meta.function.closure.php'))
        .map(token => token.value);
      expect(nonClosureTokens.length).toBe(
        0,
        `These tokens are missing the closure tag: ${nonClosureTokens.join(
          ', ',
        )}`,
      );
    });
  });

  describe('function typehints', () => {
    it('terminates the function scope', () => {
      invariant(grammar != null);
      const tokens = grammar.tokenizeLines(
        '<?hh\nnewtype T = (function(): bool); $test = 1;',
      );
      const testToken = tokens[1].find(token => token.value === 'test');
      invariant(testToken != null);
      expect(testToken.scopes).toContain('variable.other.php');
    });
  });
});
