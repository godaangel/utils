const Mock = {
    compareEqalNoDeep: [
        [{ key1: 1 }, { key1: 1 }],
        [{ key1: Symbol('foo') }, { key1: Symbol('foo') }],
        [{ key1: ['value1', 'value2'] }, { key1: ['value1', 'value2'] }],
        [{ [Symbol('bar')]: Symbol('baz') }, { [Symbol('bar')]: Symbol('baz') }],
        [{ key1: new Date('1995-12-17T03:24:00') }, { key1: new Date('1995-12-17T03:24:00') }],
        [{ key1: 'value1', key2: 2, key3: true, key4: { key44: undefined }, key5: null }, { key1: 'value1', key2: 2, key3: true, key4: { key44: undefined }, key5: null }],
        [{ key1: JSON.parse('{ "key2": "value2", "key3": "value3" }') }, { key1: JSON.parse('{ "key2": "value2", "key3": "value3" }') }],
    ],
    find: [
        ["key2", { key1: { key2: 'value1' } }, 'key'],
        ['value1', { key1: { key2: 'value1' } }, 'value'],
        ['value1', { key1: 'value1' }, 'value']
    ]
}

export default Mock;