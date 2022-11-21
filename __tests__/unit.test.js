// unit.test.js

const functions = require('../code-to-unit-test/unit-test-me.js');

test('(702)885-8022 is a phone number', () => {
    expect(functions.isPhoneNumber('(702)885-8022')).toBe(true);
});
test('(949)998-0857 is a phone number', () => {
    expect(functions.isPhoneNumber('(949)998-0857')).toBe(true);
});
test('9238-193-ab is not a phone number', () => {
    expect(functions.isPhoneNumber('9238-193-ab')).toBe(false);
});
test('(mox1@30Am0 is not a phone number', () => {
    expect(functions.isPhoneNumber('mox1@30Am0')).toBe(false);
});

test('zeh003@ucsd.edu is an email address', () => {
    expect(functions.isEmail('zeh003@ucsd.edu')).toBe(true);
});
test('zehmessage@gmail.com is an email address', () => {
    expect(functions.isEmail('zehmessage@gmail.com')).toBe(true);
});
test('gmai@oasdcom is not an email address', () => {
    expect(functions.isEmail('gmai@oasdcom')).toBe(false);
});
test('298a@9g0.com2#o is not an email address', () => {
    expect(functions.isEmail('298a@9g0.com2#o')).toBe(false);
});

test('A16375645 is a strong password', () => {
    expect(functions.isStrongPassword('A16375645')).toBe(true);
});
test('Strong_PASS0811 is a strong password', () => {
    expect(functions.isStrongPassword('Strong_PASS0811')).toBe(true);
});
test('8ASD028 is not a strong password', () => {
    expect(functions.isStrongPassword('8ASD028')).toBe(false);
});
test('ISOFSOIEFOIEJFSOEOFJ91492 is not a strong password', () => {
    expect(functions.isStrongPassword('ISOFSOIEFOIEJFSOEOFJ91492')).toBe(false);
});

test('11/20/2022 is a date', () => {
    expect(functions.isDate('11/20/2022')).toBe(true);
});
test('1/1/2000 is a date', () => {
    expect(functions.isDate('1/1/2000')).toBe(true);
});
test('922/10/2014 is not a date', () => {
    expect(functions.isDate('922/10/2001')).toBe(false);
});
test('A1/23/2009 is not a date', () => {
    expect(functions.isDate('A1/23/2009')).toBe(false);
});

test('#FF0000 is a color', () => {
    expect(functions.isHexColor('#FF0000')).toBe(true);
});
test('#800080 is a color', () => {
    expect(functions.isHexColor('#800080')).toBe(true);
});
test('#FFF000F0 is not a color', () => {
    expect(functions.isHexColor('#FFF000F0')).toBe(false);
});
test('a is not a color', () => {
    expect(functions.isHexColor('a')).toBe(false);
});