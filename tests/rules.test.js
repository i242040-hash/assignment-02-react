import test from 'node:test';import assert from 'node:assert/strict';import {quantityRule} from '../src/lib/rules.js';
test('ordinary quantity is valid',()=>assert.equal(quantityRule(2,8),null));
test('four is the booking limit',()=>assert.equal(quantityRule(4,8),null));
test('above limit is rejected',()=>assert.match(quantityRule(5,8),/Maximum four/));
test('capacity is enforced',()=>assert.match(quantityRule(3,2),/Only 2/));
